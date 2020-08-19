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

  // Login in with email/password
  SignIn(value) {
    return this.ngFireAuth.auth.signInWithEmailAndPassword(value.email, value.password);
  }

  registerUser(value) {
    return new Promise<any>((resolve, reject) => {

      this.ngFireAuth.auth.createUserWithEmailAndPassword(value.email, value.password)
        .then(
          res => resolve(res),
          err => reject(err));

      this.SetUserEmail();
    });

  }

  // Email verification when new user register
  SendVerificationMail() {
    return this.ngFireAuth.auth.currentUser.sendEmailVerification()
      .then(() => {
        this.router.navigate(['verify-email']);
      });
  }

  // Recover password
  PasswordRecover(passwordResetEmail) {
    return this.ngFireAuth.auth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Email de recuperação de senha enviado, por favor verifique seu email!');
      }).catch((error) => {
        console.log(error);
      });
  }

  // Returns true when user is looged in
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  // Returns true when user's email is verified
  get isEmailVerified(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user.emailVerified !== false) ? true : false;
  }

  // Sign in with Gmail
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }

  // Auth providers
  AuthLogin(provider) {
    return this.ngFireAuth.auth.signInWithPopup(provider)
      .then((result) => {
        this.ngZone.run(() => {
          this.SetUserData(result.user);
          const delay = 1000;
          setTimeout(() => {
            this.router.navigate(['/home/login']);
          }, delay);
        });
      }).catch((error) => {
        console.log(error);
      });
  }

  // Store user in localStorage
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

  SetUserEmail() {
    const userLocal = JSON.parse(localStorage.getItem('user'));
    const userData: User = {
      uid: userLocal.uid,
      email: userLocal.email,
      displayName: userLocal.displayName,
      emailVerified: userLocal.emailVerified,
      photoURL: userLocal.photoURL
    };
    const delay = 1000;
    setTimeout(() => {
      userLocal.email = userLocal.email.replace(/[.#$]+/g, ':');
      this.db.object(`/users/${userLocal.email}/settings`).set(userData);
    }, delay);
  }

  // Sign-out
  SignOut() {
    return this.ngFireAuth.auth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    });
  }

  getAuth() {
    return this.ngFireAuth.auth;
  }

}
