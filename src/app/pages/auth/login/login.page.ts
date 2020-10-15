import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { AuthenticationService } from '../../../services/authentication.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // Declaração de variáveis
  validationsForm: FormGroup;

  // Mensagem de validação do formulário
  validationMessages = {
    email: [
      { type: 'required', message: 'Insira um email.' },
      { type: 'pattern', message: 'Insira um email valido.' }
    ],
    password: [
      { type: 'required', message: 'Insira a senha.' },
      { type: 'minlength', message: 'A senha deve ter mais de 5 caracteres.' }
    ]
  };

  constructor(
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private authService: AuthenticationService,
    public router: Router,
    private formBuilder: FormBuilder
  ) {
    // Validações do formúlario
    this.validationsForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });
  }

  // Função para quando a página for iniciada
  ngOnInit() { }

  async ionViewWillEnter() {
    await this.verificaUser();
    await this.authService.emailVerified();
  }

  // Função para verificar se já existe um usuário logado
  private async verificaUser() {
    // Atribui a variável user o resultado da seguinte consulta
    // Acessa o local storage e pega o valor do item 'app.user' e o transforma de um JSON para uma string
    const user = JSON.parse(localStorage.getItem('user'));
    // Se o usuário for diferente de nulo
    if (user !== null && user.emailVerified === true) {
      // Função para criar uma mensagem de carregando com a mensagem "Autenticando..."
      const loading = await this.loadingCtrl.create({ message: 'Autenticando...' });
      // Mostra a mensagem na tela
      loading.present();
      // Navega para a página 'home'
      this.navCtrl.navigateRoot('menu/home');
      // Função que retira a mensagem de "Autenticando..."
      loading.dismiss();
    }
  }

  async googleAuth() {
    await this.authService.GoogleAuth();
  }

  // Função para ir a página de Singup
  async goToSignup() {
    // Navega para a página 'singup'
    this.navCtrl.navigateForward('signup');
  }

  // Função para fazer o login do usuário
  async logIn(value) {
    await this.authService.emailVerified();
    await this.authService.SignIn(value)
      .then((res) => {
        if (this.authService.isEmailVerified) {
          this.router.navigate(['menu/home']);
        } else {
          this.showMessage('Email não verificado');
          return false;
        }
      }).catch((error) => {
        this.showMessage(error.message);
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
}
