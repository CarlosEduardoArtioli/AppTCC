import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, NavController, ToastController, IonInput } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  public form: FormGroup;
  @ViewChild('myInput', {static: true}) myInput: IonInput;

  constructor(
    private fb: FormBuilder,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private fbAuth: AngularFireAuth,
    public keyboard: Keyboard
  ) {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit() {

  }

  showKeyboard() {
    this.myInput.setFocus();
  }

  async submit() {
    const loading = await this.loadingCtrl.create({ message: "Cadastrando..." });
    loading.present();

    this.fbAuth.auth.createUserWithEmailAndPassword(this.form.controls['email'].value, this.form.controls['password'].value)
      .then((data) => {
        this.showMessage("Bem-vindo!");
        loading.dismiss();
        this.navCtrl.navigateRoot('login');
      })
      .catch((err) => {
        loading.dismiss();
        this.showMessage("Não foi possível realizar seu cadastro");
      });
    // console.log(res);
  }

  async showMessage(message: string) {
    const toast = await this.toastCtrl.create({ message: message, duration: 3000});
    toast.present;
  }

  async cancel() {
    this.navCtrl.navigateBack('login');
  }
}
