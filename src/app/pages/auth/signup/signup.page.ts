import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    public authService: AuthenticationService,
    public router: Router
  ) {}

  ngOnInit() {}

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

  // Função de cancelar o Signup
  async cancel() {
    // Navega de volta para a página 'login'
    this.navCtrl.navigateBack('login');
  }

  signUp(email, password) {
    this.authService.RegisterUser(email.value, password.value)
      .then((res) => {
        // Do something here
        this.authService.SendVerificationMail();
        this.router.navigate(['verify-email']);
      }).catch((error) => {
        this.showMessage(error.message);
      });
  }
}
