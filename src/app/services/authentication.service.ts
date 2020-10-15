import { Injectable, NgZone } from '@angular/core';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'src/app/models/user.model';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  userData: any;

  constructor(
    public ngFireAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone,
    private db: AngularFireDatabase
  ) {
    this.ngFireAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

  // Login com email e senha
  SignIn(value) {
    return this.ngFireAuth.auth.signInWithEmailAndPassword(value.email, value.password);
  }

  // Registro com login e senha
  registerUser(value) {
    return new Promise<any>((resolve, reject) => {

      this.ngFireAuth.auth.createUserWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => reject(err));

      this.SetUserEmail();
    });

  }

  // Email de verificação quando um usuário e registrado
  SendVerificationMail() {
    return this.ngFireAuth.auth.currentUser.sendEmailVerification()
      .then(() => {
        this.router.navigate(['verify-email']);
      });
  }

  // Recuperar senha
  PasswordRecover(passwordResetEmail) {
    return this.ngFireAuth.auth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Email de recuperação de senha enviado, por favor verifique seu email!');
      }).catch((error) => {
        console.log(error);
      });
  }

  // Retorna true quando o usuário está logado
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  // Retorna true quando o email esta verificado
  get isEmailVerified(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user.emailVerified !== false) ? true : false;
  }

  // Sign in com Gmail
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  // Auth providers
  AuthLogin(provider) {
    return this.ngFireAuth.auth.signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.SetUserData(result.user);
          const delay = 500;
          setTimeout(() => {
            this.router.navigate(['/home/login']);
          }, delay);
        });
      }).catch((error) => {
        console.log(error);
      });
  }

  // Guarda o usuário no localStorage e no Banco de Dados
  SetUserData(user) {
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      emailVerified: user.emailVerified,
      photoURL: user.photoURL
    };
    const delay = 1000;
    setTimeout(() => {
      const userLocal = JSON.parse(localStorage.getItem('user'));
      userLocal.email = userLocal.email.replace(/[.#$]+/g, ':');
      this.db.object(`/users/${userLocal.email}/settings`).set(userData);
    }, delay);
  }

  // Guarda o usuário no localStorage e no Banco de Dados
  SetUserEmail() {
    const delay = 1000;
    setTimeout(() => {
      const userLocal = JSON.parse(localStorage.getItem('user'));
      const userData: User = {
        uid: userLocal.uid,
        email: userLocal.email,
        displayName: userLocal.displayName,
        emailVerified: userLocal.emailVerified,
        photoURL: userLocal.photoURL
      };
      userLocal.email = userLocal.email.replace(/[.#$]+/g, ':');
      this.db.object(`/users/${userLocal.email}/settings`).set(userData);
    }, delay);
  }

  // Logout
  SignOut() {
    return this.ngFireAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    });
  }

  getAuth() {
    return this.ngFireAuth.auth;
  }

  emailVerified() {
    this.ngFireAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    });
  }

}
