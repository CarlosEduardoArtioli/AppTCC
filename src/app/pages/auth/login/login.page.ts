import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public form: FormGroup;
  user: any;

  constructor(
    private fb: FormBuilder,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private fbAuth: AngularFireAuth,
  ) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('app.user'));
      if (this.user != null){
        this.navCtrl.navigateRoot('home');
      }
  }

  async submit() {
    const loading = await this.loadingCtrl.create({ message: "Autenticando..." });
    loading.present();

    this.fbAuth.auth.signInWithEmailAndPassword(this.form.controls['email'].value, this.form.controls['password'].value)
      .then((data) => {
        loading.dismiss();
        // TODO salvar nome e imagem e depois ler
        localStorage.setItem('app.user', JSON.stringify(new User('', data.user.email, '')));
        this.navCtrl.navigateRoot('home');
      })
      .catch((err) => {
        console.log(err);
        loading.dismiss();
        this.showMessage("Usuário ou senha inválidos");
      });
    // console.log(res);
  }

  async signInWithGoogle() {
    this.fbAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then((data) => {
        console.log(data);
        localStorage.setItem('app.user', JSON.stringify(new User(data.user.displayName, data.user.email, data.user.photoURL)));
        this.navCtrl.navigateRoot('home');
      })
      .catch((err) => {
        console.log(err);
        this.showMessage("Usuário ou senha inválidos");
      });
  }

  async showMessage(message: string) {
    await this.toastCtrl.create({ message: message, duration: 3000}).then((toastData)=>{
      console.log(toastData);
      toastData.present();
    });
  }

  async goToSignup() {
    this.navCtrl.navigateForward('signup');
  }
}
