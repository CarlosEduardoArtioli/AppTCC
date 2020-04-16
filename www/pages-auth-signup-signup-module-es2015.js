(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-signup-signup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/signup/signup.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/signup/signup.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding swiper-no-swiping\" color=\"secondary\">\r\n  <br><br>\r\n  <h1 class=\"ion-text-center logo-white\">\r\n    App TCC\r\n  </h1>\r\n  <br><br>\r\n  <ion-list lines=\"none\">\r\n    <form [formGroup]=\"form\">\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">E-mail</ion-label>\r\n        <ion-input #myInput type=\"email\" formControlName=\"email\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Senha</ion-label>\r\n        <ion-input #myInput type=\"password\" formControlName=\"password\"></ion-input>\r\n      </ion-item>\r\n    </form>\r\n  </ion-list>\r\n  <br>\r\n  <ion-button ion-item color=\"light\" fill=\"outline\" shape=\"round\" expand=\"full\" size=\"medium\" (click)=\"submit()\">\r\n    Cadastrar\r\n  </ion-button>\r\n  <ion-button ion-item color=\"light\" fill=\"clear\" expand=\"full\" (click)=\"cancel()\">\r\n    Cancelar\r\n  </ion-button>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/auth/signup/signup.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/auth/signup/signup.module.ts ***!
  \****************************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup.page */ "./src/app/pages/auth/signup/signup.page.ts");








const routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_7__["SignupPage"]
    }
];
let SignupPageModule = class SignupPageModule {
};
SignupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuthModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_7__["SignupPage"]]
    })
], SignupPageModule);



/***/ }),

/***/ "./src/app/pages/auth/signup/signup.page.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/auth/signup/signup.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: rgb(231, 231, 231);\n  --background: -moz-linear-gradient(top, rgb(16, 248, 248) 0%, rgb(21, 117, 161) 100%);\n  --ion-text-color: #fff;\n}\nion-content ion-list {\n  --ion-background-color: rgba(255, 255, 255, 0.1);\n  border-radius: 5px;\n}\nion-content ion-item {\n  --ion-background-color: rgba(255, 255, 255, 0);\n  --background-activated: rgba(255, 255, 255, 0);\n  --highlight-color-focused: rgba(255, 255, 255, 0.1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aC9zaWdudXAvQzpcXElvbmljXFxBcHBUQ0Mvc3JjXFxhcHBcXHBhZ2VzXFxhdXRoXFxzaWdudXBcXHNpZ251cC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2F1dGgvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBQTtFQUNBLHFGQUFBO0VBRUEsc0JBQUE7QUNBSjtBREVJO0VBQ0ksZ0RBQUE7RUFDQSxrQkFBQTtBQ0FSO0FER0k7RUFDSSw4Q0FBQTtFQUNBLDhDQUFBO0VBQ0EsbURBQUE7QUNEUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYigyMzEsIDIzMSwgMjMxKTtcclxuICAgIC0tYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCByZ2IoMTYsIDI0OCwgMjQ4KSAwJSwgcmdiKDIxLCAxMTcsIDE2MSkgMTAwJSk7XHJcbiAgICBcclxuICAgIC0taW9uLXRleHQtY29sb3I6ICNmZmY7XHJcblxyXG4gICAgaW9uLWxpc3Qge1xyXG4gICAgICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxuICAgICAgICAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgICB9XHJcbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDIzMSwgMjMxLCAyMzEpO1xuICAtLWJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiKDE2LCAyNDgsIDI0OCkgMCUsIHJnYigyMSwgMTE3LCAxNjEpIDEwMCUpO1xuICAtLWlvbi10ZXh0LWNvbG9yOiAjZmZmO1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3Qge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbmlvbi1jb250ZW50IGlvbi1pdGVtIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbiAgLS1oaWdobGlnaHQtY29sb3ItZm9jdXNlZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/auth/signup/signup.page.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/auth/signup/signup.page.ts ***!
  \**************************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ "./node_modules/@ionic-native/keyboard/ngx/index.js");






let SignupPage = class SignupPage {
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
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    ngOnInit() {
    }
    // Função para mostrar o keyboard
    showKeyboard() {
        this.myInput.setFocus();
    }
    // Função para o envio da autenticação
    submit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // Função para criar uma mensagem de carregando com a mensagem "Autenticando..."
            const loading = yield this.loadingCtrl.create({ message: "Cadastrando..." });
            // Mostra a mensagem na tela
            loading.present();
            // Função que cria um usuário com email e senha e seus valores são pegos do HTML
            this.fbAuth.auth.createUserWithEmailAndPassword(this.form.controls['email'].value, this.form.controls['password'].value)
                // Quando cria
                .then((data) => {
                // Mostra mensagem de "Bem-Vindo!"
                this.showMessage("Bem-vindo!");
                // Tira a mensagem de carregando da tela
                loading.dismiss();
                // Navega para a página 'login'
                this.navCtrl.navigateRoot('login');
            })
                // Caso ocorra erro
                .catch((err) => {
                // Tira a mensagem de carregando da tela
                loading.dismiss();
                // Mostra mensagem de "Não foi possível realizar seu cadastro"
                this.showMessage("Não foi possível realizar seu cadastro");
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
    // Função de cancelar o Signup
    cancel() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // Navega de volta para a página 'login'
            this.navCtrl.navigateBack('login');
        });
    }
};
SignupPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__["Keyboard"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myInput', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInput"])
], SignupPage.prototype, "myInput", void 0);
SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/signup/signup.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.page.scss */ "./src/app/pages/auth/signup/signup.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
        _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_5__["Keyboard"]])
], SignupPage);



/***/ })

}]);
//# sourceMappingURL=pages-auth-signup-signup-module-es2015.js.map