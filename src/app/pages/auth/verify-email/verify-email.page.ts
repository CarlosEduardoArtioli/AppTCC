import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.page.html',
  styleUrls: ['./verify-email.page.scss'],
})
export class VerifyEmailPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private fbAuth: AngularFireAuth,
  ) { }

  ngOnInit() {
  }

  // Função para ir a página de Singup
  async goToLogin() {
    // Navega para a página 'singup'
    this.navCtrl.navigateForward('login');
  }

  verificationMail() {
    this.fbAuth.auth.currentUser.sendEmailVerification();
  }

}
