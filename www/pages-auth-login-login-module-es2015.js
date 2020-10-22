(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/login/login.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/login/login.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\" swipeEnabled=\"false\">\r\n  <br>\r\n  <h1 class=\"ion-text-center logo-white\">\r\n    Beaver House\r\n  </h1>\r\n  <br>\r\n  <br>\r\n  <form class=\"form\" [formGroup]=\"validationsForm\" (ngSubmit)=\"logIn(validationsForm.value)\">\r\n    <ion-list lines=\"none\">\r\n      <ion-item>\r\n        <ion-label position=\"stacked\" mode='ios'>Email</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"email\" mode='ios'></ion-input>\r\n        <ng-container *ngFor=\"let validation of validationMessages.email\">\r\n          <div class=\"error-message\"\r\n            *ngIf=\"validationsForm.get('email').hasError(validation.type) && (validationsForm.get('email').dirty || validationsForm.get('email').touched)\">\r\n            {{ validation.message }}\r\n          </div>\r\n        </ng-container>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Senha</ion-label>\r\n        <ion-input type=\"password\" formControlName=\"password\" class=\"form-controll\" required></ion-input>\r\n        <ng-container *ngFor=\"let validation of validationMessages.password\">\r\n          <div class=\"error-message\"\r\n            *ngIf=\"validationsForm.get('password').hasError(validation.type) && (validationsForm.get('password').dirty || validationsForm.get('password').touched)\">\r\n            {{ validation.message }}\r\n          </div>\r\n        </ng-container>\r\n      </ion-item>\r\n\r\n    </ion-list>\r\n\r\n    <br>\r\n\r\n    <ion-button ion-item color=\"dark\" fill=\"outline\" shape=\"round\" expand=\"full\" size=\"medium\" class=\"submit-btn\"\r\n      type=\"submit\" [disabled]=\"!validationsForm.valid\">Entrar</ion-button>\r\n\r\n  </form>\r\n  <br>\r\n  <ion-button ion-item color=\"dark\" expand=\"block\" type=\"submit\" (click)=\"googleAuth()\">\r\n    <ion-icon slot=\"start\" name=\"logo-google\"></ion-icon>&nbsp;&nbsp;Login com Google\r\n  </ion-button>\r\n  <br>\r\n  <ion-button ion-item color=\"dark\" fill=\"clear\" expand=\"full\" (click)=\"goToSignup()\">\r\n    Ainda não sou cadastrado!\r\n  </ion-button>\r\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: url('backgroundapp.png') no-repeat center center / cover !important;\n  --ion-text-color: #fff;\n}\nion-content ion-list {\n  border-radius: 5px;\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n}\nion-content h1 {\n  font-family: \"Merienda One\", cursive !important;\n}\nion-content ion-button {\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n}\nion-content .error-message {\n  font-size: 11px;\n  color: #ff0000;\n}\n@media (min-width: 720px) {\n  ion-content .error-message {\n    font-size: 14px;\n    color: #ff0000;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aC9sb2dpbi9DOlxcSW9uaWNcXEFwcFRDQy9zcmNcXGFwcFxccGFnZXNcXGF1dGhcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2F1dGgvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUZBQUE7RUFDQSxzQkFBQTtBQ0NKO0FEQ0k7RUFDSSxrQkFBQTtFQUVBLGdCQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtBQ0RSO0FESUk7RUFDSSwrQ0FBQTtBQ0ZSO0FES0k7RUFDSSxnQkFBQTtFQUVBLGlCQUFBO0VBQ0Esa0JBQUE7QUNKUjtBRE9JO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNMUjtBRFNBO0VBRVE7SUFDSSxlQUFBO0lBQ0EsY0FBQTtFQ1BWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hdXRoL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1nL2JhY2tncm91bmRhcHAucG5nJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlciAhaW1wb3J0YW50O1xyXG4gICAgLS1pb24tdGV4dC1jb2xvcjogI2ZmZjtcclxuXHJcbiAgICBpb24tbGlzdCB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG5cclxuICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG5cclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTWVyaWVuZGEgT25lJywgY3Vyc2l2ZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIG1heC13aWR0aDogNjAwcHg7XHJcblxyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAuZXJyb3ItbWVzc2FnZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmYwMDAwO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzIwcHgpIHtcclxuICAgIGlvbi1jb250ZW50IHtcclxuICAgICAgICAuZXJyb3ItbWVzc2FnZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZjAwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFja2dyb3VuZGFwcC5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlciAhaW1wb3J0YW50O1xuICAtLWlvbi10ZXh0LWNvbG9yOiAjZmZmO1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3Qge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5pb24tY29udGVudCBoMSB7XG4gIGZvbnQtZmFtaWx5OiBcIk1lcmllbmRhIE9uZVwiLCBjdXJzaXZlICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCBpb24tYnV0dG9uIHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbmlvbi1jb250ZW50IC5lcnJvci1tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogI2ZmMDAwMDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDcyMHB4KSB7XG4gIGlvbi1jb250ZW50IC5lcnJvci1tZXNzYWdlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICNmZjAwMDA7XG4gIH1cbn0iXX0= */");

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let LoginPage = class LoginPage {
    constructor(loadingCtrl, navCtrl, toastCtrl, authService, router, formBuilder) {
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.authService = authService;
        this.router = router;
        this.formBuilder = formBuilder;
        // Mensagem de validação do formulário
        this.validationMessages = {
            email: [
                { type: 'required', message: 'Insira um email.' },
                { type: 'pattern', message: 'Insira um email valido.' }
            ],
            password: [
                { type: 'required', message: 'Insira a senha.' },
                { type: 'minlength', message: 'A senha deve ter mais de 5 caracteres.' }
            ]
        };
        // Validações do formúlario
        this.validationsForm = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required
            ])),
        });
    }
    // Função para quando a página for iniciada
    ngOnInit() { }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.verificaUser();
            yield this.authService.emailVerified();
        });
    }
    // Função para verificar se já existe um usuário logado
    verificaUser() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // Atribui a variável user o resultado da seguinte consulta
            // Acessa o local storage e pega o valor do item 'app.user' e o transforma de um JSON para uma string
            const user = JSON.parse(localStorage.getItem('user'));
            // Se o usuário for diferente de nulo
            if (user !== null && user.emailVerified === true) {
                // Função para criar uma mensagem de carregando com a mensagem "Autenticando..."
                const loading = yield this.loadingCtrl.create({ message: 'Autenticando...' });
                // Mostra a mensagem na tela
                loading.present();
                // Navega para a página 'home'
                this.navCtrl.navigateRoot('menu/home');
                // Função que retira a mensagem de "Autenticando..."
                loading.dismiss();
            }
        });
    }
    googleAuth() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.authService.GoogleAuth();
        });
    }
    // Função para ir a página de Singup
    goToSignup() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // Navega para a página 'singup'
            this.navCtrl.navigateForward('signup');
        });
    }
    // Função para fazer o login do usuário
    logIn(value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.authService.emailVerified();
            yield this.authService.SignIn(value)
                .then((res) => {
                if (this.authService.isEmailVerified) {
                    this.router.navigate(['menu/home']);
                }
                else {
                    this.showMessage('Email não verificado');
                    return false;
                }
            }).catch((error) => {
                this.showMessage(error.message);
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
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
];
LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/login/login.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/auth/login/login.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
], LoginPage);



/***/ })

}]);