import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, NavController, ToastController, IonInput } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  // Declaração de variáveis
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private fbAuth: AngularFireAuth
  ) {
    // Atribui a variável form o valor do grupo de valores do FormBuilder da página HTML 
    this.form = this.fb.group({
    // Validators.required é um parâmetro para se o usuário não preencher a variável retornar um erro
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit() {

  }

  // Função para o envio da autenticação
  async submit() {
    // Função para criar uma mensagem de carregando com a mensagem "Autenticando..."
    const loading = await this.loadingCtrl.create({ message: "Cadastrando..." });
    // Mostra a mensagem na tela
    loading.present();

    // Função que cria um usuário com email e senha e seus valores são pegos do HTML
    this.fbAuth.auth.createUserWithEmailAndPassword(this.form.controls['email'].value, this.form.controls['password'].value)
    // Quando cria
      .then((data) => {
        // Mostra mensagem de "Bem-Vindo!"
        this.showMessage("Obrigado por Cadastrar!");
        // Tira a mensagem de carregando da tela
        loading.dismiss();
        // Navega para a página 'login'
        this.navCtrl.navigateRoot('login');
      })
      // Caso ocorra erro
      .catch((err) => {
        // Tira a mensagem de carregando da tela
        loading.dismiss();
        // Mostra mensagem de "Não foi possível realizar seu cadastro"
        this.showMessage("Não foi possível realizar seu cadastro");
      });
  }

  // Função para mostrar mensagem na tela que recebe o paramêtro message
  async showMessage(message: string) {
    // Aguarda a criação de um Toast Controller, com a mensagem passada no parâmetro, com duração de 3 segundos
    await this.toastCtrl.create({ message: message, duration: 3000})
    // Quando o Toast Controller é terminado
    .then((toastData)=>{
      // Escreve os dados no console
      console.log(toastData);
      // Mostra a mensagem na tela
      toastData.present();
    });
  }

  // Função de cancelar o Signup
  async cancel() {
    // Navega de volta para a página 'login'
    this.navCtrl.navigateBack('login');
  }
}
