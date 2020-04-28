(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/login/login.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/login/login.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\" swipeEnabled=\"false\" color=\"secondary\">\r\n  <br><br>\r\n  <h1 class=\"ion-text-center logo-white\">\r\n    Beaver House\r\n  </h1>\r\n  <br>\r\n  <br>\r\n  <ion-list lines=\"none\">\r\n    <form [formGroup]=\"form\">\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Login</ion-label>\r\n        <ion-input #myInput type=\"email\" formControlName=\"email\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Senha</ion-label>\r\n        <ion-input #myInput type=\"password\" formControlName=\"password\"></ion-input>\r\n      </ion-item>\r\n      \r\n    </form>\r\n  </ion-list>\r\n  <br>\r\n  <ion-button ion-item color=\"light\" fill=\"outline\" shape=\"round\" expand=\"full\" size=\"medium\" (click)=\"submit()\">\r\n    Entrar\r\n  </ion-button>\r\n  <br>\r\n  <ion-button ion-item color=\"light\" expand=\"block\" (click)=\"signInWithGoogle()\" >\r\n    <ion-icon slot=\"start\" name=\"logo-google\"></ion-icon>&nbsp;&nbsp;Login com Google\r\n  </ion-button>\r\n  <br>\r\n  <ion-button ion-item color=\"light\" fill=\"clear\" expand=\"full\" (click)=\"goToSignup()\">\r\n    Ainda não sou cadastrado\r\n  </ion-button>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/auth/login/login.module.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/auth/login/login.module.ts ***!
  \**************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/auth/login/login.page.ts");








const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"]
    }
];
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/pages/auth/login/login.page.scss":
/*!**************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: rgb(231, 231, 231);\n  --background: -moz-linear-gradient(top, rgb(16, 248, 248) 0%, rgb(21, 117, 161) 100%);\n  --ion-text-color: #fff;\n}\nion-content ion-list {\n  --ion-background-color: rgba(255, 255, 255, 0.1);\n  border-radius: 5px;\n}\nion-content ion-item {\n  --ion-background-color: rgba(255, 255, 255, 0);\n  --background-activated: rgba(255, 255, 255, 0);\n  --highlight-color-focused: rgba(255, 255, 255, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aC9sb2dpbi9DOlxcaW9uaWNcXEFwcFRDQy9zcmNcXGFwcFxccGFnZXNcXGF1dGhcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2F1dGgvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQUE7RUFDQSxxRkFBQTtFQUdBLHNCQUFBO0FDREo7QURHSTtFQUNJLGdEQUFBO0VBQ0Esa0JBQUE7QUNEUjtBRElJO0VBQ0ksOENBQUE7RUFDQSw4Q0FBQTtFQUNBLG1EQUFBO0FDRlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hdXRoL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiKDIzMSwgMjMxLCAyMzEpO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYigxNiwgMjQ4LCAyNDgpIDAlLCByZ2IoMjEsIDExNywgMTYxKSAxMDAlKTtcclxuICAgIFxyXG4gICAgXHJcbiAgICAtLWlvbi10ZXh0LWNvbG9yOiAjZmZmO1xyXG5cclxuICAgIGlvbi1saXN0IHtcclxuICAgICAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgICAgICAgLS1oaWdobGlnaHQtY29sb3ItZm9jdXNlZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gICAgfVxyXG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHJnYigyMzEsIDIzMSwgMjMxKTtcbiAgLS1iYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsIHJnYigxNiwgMjQ4LCAyNDgpIDAlLCByZ2IoMjEsIDExNywgMTYxKSAxMDAlKTtcbiAgLS1pb24tdGV4dC1jb2xvcjogI2ZmZjtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5pb24tY29udGVudCBpb24taXRlbSB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XG4gIC0taGlnaGxpZ2h0LWNvbG9yLWZvY3VzZWQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/auth/login/login.page.ts":
/*!************************************************!*\
  !*** ./src/app/pages/auth/login/login.page.ts ***!
  \************************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_models_user_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");








let LoginPage = class LoginPage {
    constructor(fb, loadingCtrl, navCtrl, toastCtrl, fbAuth, keyboard) {
        this.fb = fb;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.fbAuth = fbAuth;
        this.keyboard = keyboard;
        // Atribui a variável form o valor do grupo de valores do FormBuilder da página HTML 
        this.form = this.fb.group({
            // Validators.required é um parâmetro para se o usuário não preencher a variável retornar um erro
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    // Função para quando a página for iniciada
    ngOnInit() {
        // Chama a função 'verificaUser()'
        this.verificaUser();
    }
    // Função para mostrar o keyboard
    showKeyboard() {
        this.myInput.setFocus();
    }
    // Função para verificar se já existe um usuário logado
    verificaUser() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // Atribui a variável user o resultado da seguinte consulta
            // Acessa o local storage e pega o valor do item 'app.user' e o transforma de um JSON para uma string
            this.user = JSON.parse(localStorage.getItem('app.user'));
            // Se o usuário for diferente de nulo
            if (this.user != null) {
                // Função para criar uma mensagem de carregando com a mensagem "Autenticando..."
                const loading = yield this.loadingCtrl.create({ message: "Autenticando..." });
                // Mostra a mensagem na tela
                loading.present();
                // Navega para a página 'home'
                this.navCtrl.navigateRoot('home');
                // Função que retira a mensagem de "Autenticando..."
                loading.dismiss();
            }
        });
    }
    // Função para o envio da autenticação
    submit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // Função para criar uma mensagem de carregando com a mensagem "Autenticando..."
            const loading = yield this.loadingCtrl.create({ message: "Autenticando..." });
            // Mostra a mensagem na tela
            loading.present();
            // Função que faz o login com email e senha, ela pega os valores do HTML
            this.fbAuth.auth.signInWithEmailAndPassword(this.form.controls['email'].value, this.form.controls['password'].value)
                // Quando pega os dados
                .then((data) => {
                // Função que retira a mensagem de "Autenticando..."
                loading.dismiss();
                // Entra no local storage e "seta" o item 'app.user' com um JSON com os valores recebidos 
                localStorage.setItem('app.user', JSON.stringify(new src_app_models_user_model__WEBPACK_IMPORTED_MODULE_6__["User"]('', data.user.email, '')));
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
        });
    }
    // Função para fazer login com o Google
    signInWithGoogle() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // Função que faz login com o Google
            this.fbAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"].GoogleAuthProvider())
                // Quando pega os dados
                .then((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                // Escreve no console os dados
                console.log(data);
                // "Seta" no local storage um item com o nome 'app.user' com um JSON com os valores recebidos 
                localStorage.setItem('app.user', JSON.stringify(new src_app_models_user_model__WEBPACK_IMPORTED_MODULE_6__["User"](data.user.displayName, data.user.email, data.user.photoURL)));
                // Função para criar uma mensagem de carregando com a mensagem "Autenticando..."
                const loading = yield this.loadingCtrl.create({ message: "Autenticando..." });
                // Mostra a mensagem na tela
                loading.present();
                // Navega para a página 'home'
                this.navCtrl.navigateRoot('home');
                // Função que retira a mensagem de "Autenticando..."
                loading.dismiss();
            }))
                // Caso ocorra erro
                .catch((err) => {
                // Escreve no console a mensagem de erro
                console.log(err);
                // Chama a função 'showMessage()' e passa o parâmetro "Usuário ou senha inválidos"
                this.showMessage("Usuário ou senha inválidos");
            });
        });
    }
    // Função para mostrar mensagem na tela que recebe o paramêtro message
    showMessage(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // Aguarda a criação de um Toast Controller, com a mensagem passada no parâmetro, com duração de 3 segundos
            yield this.toastCtrl.create({ message: message, duration: 3000 })
                // Quando o Toast Controller é terminado
                .then((toastData) => {
                // Escreve os dados no console
                console.log(toastData);
                // Mostra a mensagem na tela
                toastData.present();
            });
        });
    }
    // Função para ir a página de Singup
    goToSignup() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // Navega para a página 'singup'
            this.navCtrl.navigateForward('signup');
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_7__["Keyboard"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myInput', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInput"])
], LoginPage.prototype, "myInput", void 0);
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/login/login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/auth/login/login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
        _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_7__["Keyboard"]])
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=pages-auth-login-login-module-es2015.js.map