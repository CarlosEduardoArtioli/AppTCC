import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, NavController, ToastController, IonInput } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // Declaração de variáveis
  public form: FormGroup;
  user: any;
  // Não faço ideia pra que isso serve, só sei que acho que tem haver com o keyboard
  @ViewChild('myInput', { static: true }) myInput: IonInput;

  constructor(
    private fb: FormBuilder,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private fbAuth: AngularFireAuth,
  ) {
    // Atribui a variável form o valor do grupo de valores do FormBuilder da página HTML 
    this.form = this.fb.group({
      // Validators.required é um parâmetro para se o usuário não preencher a variável retornar um erro
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  // Função para quando a página for iniciada
  ngOnInit() {
    // Chama a função 'verificaUser()'
    this.verificaUser();
  }

  // Função para verificar se já existe um usuário logado
  private async verificaUser() {
    // Atribui a variável user o resultado da seguinte consulta
    // Acessa o local storage e pega o valor do item 'app.user' e o transforma de um JSON para uma string
    this.user = JSON.parse(localStorage.getItem('app.user'));
    // Se o usuário for diferente de nulo
    if (this.user != null) {
      // Função para criar uma mensagem de carregando com a mensagem "Autenticando..."
      const loading = await this.loadingCtrl.create({ message: "Autenticando..." });
      // Mostra a mensagem na tela
      loading.present();
      // Navega para a página 'home'
      this.navCtrl.navigateRoot('home');
      // Função que retira a mensagem de "Autenticando..."
      loading.dismiss();
    }
  }

  // Função para o envio da autenticação
  async submit() {
    // Função para criar uma mensagem de carregando com a mensagem "Autenticando..."
    const loading = await this.loadingCtrl.create({ message: "Autenticando..." });
    // Mostra a mensagem na tela
    loading.present();

    // Função que faz o login com email e senha, ela pega os valores do HTML
    this.fbAuth.auth.signInWithEmailAndPassword(this.form.controls['email'].value, this.form.controls['password'].value)
      // Quando pega os dados
      .then((data) => {
        // Função que retira a mensagem de "Autenticando..."
        loading.dismiss();
        // Entra no local storage e "seta" o item 'app.user' com um JSON com os valores recebidos 
        localStorage.setItem('app.user', JSON.stringify(new User('', data.user.email, '')));
        // Navega para a página 'home'
        this.navCtrl.navigateRoot('home');
      })
      // Caso ocorra erro
      .catch((err) => {
        // Escreve no console a mensagem de erro
        console.log(err);
        // Função que retira a mensagem de "Autenticando..."
        loading.dismiss();
        // Chama a função 'showMessage()' e passa o parâmetro "Usuário ou senha inválidos"
        this.showMessage("Usuário ou senha inválidos");
      });
  }

  // Função para fazer login com o Google
  async signInWithGoogle() {
    // Função que faz login com o Google
    this.fbAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      // Quando pega os dados
      .then(async (data) => {
        // Escreve no console os dados
        console.log(data);
        // "Seta" no local storage um item com o nome 'app.user' com um JSON com os valores recebidos 
        localStorage.setItem('app.user', JSON.stringify(new User(data.user.displayName, data.user.email, data.user.photoURL)));
        // Função para criar uma mensagem de carregando com a mensagem "Autenticando..."
        const loading = await this.loadingCtrl.create({ message: "Autenticando..." });
        // Mostra a mensagem na tela
        loading.present();
        // Navega para a página 'home'
        this.navCtrl.navigateRoot('home');
        // Função que retira a mensagem de "Autenticando..."
        loading.dismiss();
      })
      // Caso ocorra erro
      .catch((err) => {
        // Escreve no console a mensagem de erro
        console.log(err);
        // Chama a função 'showMessage()' e passa o parâmetro "Usuário ou senha inválidos"
        this.showMessage("Usuário ou senha inválidos");
      });
  }

  // Função para mostrar mensagem na tela que recebe o paramêtro message
  async showMessage(message: string) {
    // Aguarda a criação de um Toast Controller, com a mensagem passada no parâmetro, com duração de 3 segundos
    await this.toastCtrl.create({ message: message, duration: 3000 })
      // Quando o Toast Controller é terminado
      .then((toastData) => {
        // Escreve os dados no console
        console.log(toastData);
        // Mostra a mensagem na tela
        toastData.present();
      });
  }

  // Função para ir a página de Singup
  async goToSignup() {
    // Navega para a página 'singup'
    this.navCtrl.navigateForward('signup');
  }
}
