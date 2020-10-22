(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-signup-signup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/signup/signup.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/signup/signup.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding swiper-no-swiping\">\r\n  <br>\r\n  <h1 class=\"ion-text-center logo-white\">\r\n    Beaver House\r\n  </h1>\r\n  <br><br>\r\n  <form class=\"form\" [formGroup]=\"validationsForm\" (ngSubmit)=\"signUp(validationsForm.value)\">\r\n    <ion-list lines=\"none\">\r\n\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Email</ion-label>\r\n        <ion-input type=\"text\" formControlName=\"email\"></ion-input>\r\n        <ng-container *ngFor=\"let validation of validationMessages.email\">\r\n          <div class=\"error-message\"\r\n            *ngIf=\"validationsForm.get('email').hasError(validation.type) && (validationsForm.get('email').dirty || validationsForm.get('email').touched)\">\r\n            {{ validation.message }}\r\n          </div>\r\n        </ng-container>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Senha</ion-label>\r\n        <ion-input type=\"password\" formControlName=\"password\" class=\"form-controll\" required></ion-input>\r\n        <ng-container *ngFor=\"let validation of validationMessages.password\">\r\n          <div class=\"error-message\"\r\n            *ngIf=\"validationsForm.get('password').hasError(validation.type) && (validationsForm.get('password').dirty || validationsForm.get('password').touched)\">\r\n            {{ validation.message }}\r\n          </div>\r\n        </ng-container>\r\n      </ion-item>\r\n    </ion-list>\r\n    <br>\r\n    <ion-button ion-item color=\"dark\" fill=\"outline\" shape=\"round\" expand=\"full\" size=\"medium\" class=\"submit-btn\"\r\n      type=\"submit\" [disabled]=\"!validationsForm.valid\">Cadastrar</ion-button>\r\n  </form>\r\n  <br>\r\n  <ion-button ion-item color=\"dark\" fill=\"clear\" expand=\"full\" (click)=\"cancel()\">\r\n    Cancelar\r\n  </ion-button>\r\n</ion-content>");

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
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: url('backgroundapp.png') no-repeat center center / cover !important;\n  --ion-text-color: #fff;\n}\nion-content ion-list {\n  border-radius: 5px;\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n}\nion-content h1 {\n  font-family: \"Merienda One\", cursive !important;\n}\nion-content ion-button {\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n}\nion-content .error-message {\n  font-size: 11px;\n  color: #ff0000;\n}\n@media (min-width: 720px) {\n  ion-content .error-message {\n    font-size: 14px;\n    color: #ff0000;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aC9zaWdudXAvQzpcXElvbmljXFxBcHBUQ0Mvc3JjXFxhcHBcXHBhZ2VzXFxhdXRoXFxzaWdudXBcXHNpZ251cC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2F1dGgvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpRkFBQTtFQUVBLHNCQUFBO0FDQUo7QURFSTtFQUNJLGtCQUFBO0VBRUEsZ0JBQUE7RUFFQSxpQkFBQTtFQUNBLGtCQUFBO0FDRlI7QURLSTtFQUNJLCtDQUFBO0FDSFI7QURNSTtFQUNJLGdCQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtBQ0xSO0FEUUk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ05SO0FEVUE7RUFFUTtJQUNJLGVBQUE7SUFDQSxjQUFBO0VDUlY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2F1dGgvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kYXBwLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXIgIWltcG9ydGFudDtcclxuXHJcbiAgICAtLWlvbi10ZXh0LWNvbG9yOiAjZmZmO1xyXG5cclxuICAgIGlvbi1saXN0IHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG4gICAgICAgIG1heC13aWR0aDogNjAwcHg7XHJcblxyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNZXJpZW5kYSBPbmUnLCBjdXJzaXZlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcclxuXHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5lcnJvci1tZXNzYWdlIHtcclxuICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgY29sb3I6ICNmZjAwMDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3MjBweCkge1xyXG4gICAgaW9uLWNvbnRlbnQge1xyXG4gICAgICAgIC5lcnJvci1tZXNzYWdlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmMDAwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kYXBwLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyICFpbXBvcnRhbnQ7XG4gIC0taW9uLXRleHQtY29sb3I6ICNmZmY7XG59XG5pb24tY29udGVudCBpb24tbGlzdCB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbmlvbi1jb250ZW50IGgxIHtcbiAgZm9udC1mYW1pbHk6IFwiTWVyaWVuZGEgT25lXCIsIGN1cnNpdmUgIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IGlvbi1idXR0b24ge1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuaW9uLWNvbnRlbnQgLmVycm9yLW1lc3NhZ2Uge1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjZmYwMDAwO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzIwcHgpIHtcbiAgaW9uLWNvbnRlbnQgLmVycm9yLW1lc3NhZ2Uge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogI2ZmMDAwMDtcbiAgfVxufSJdfQ== */");

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let SignupPage = class SignupPage {
    constructor(navCtrl, toastCtrl, authService, router, formBuilder) {
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
    ngOnInit() { }
    // Função de cancelar o Signup
    cancel() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // Navega de volta para a página 'login'
            this.navCtrl.navigateBack('login');
        });
    }
    // Função para registrar o novo usuário
    signUp(value) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.authService.registerUser(value)
                .then((res) => {
                // Do something here
                this.authService.SendVerificationMail();
                this.router.navigate(['verify-email']);
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
SignupPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
];
SignupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/signup/signup.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.page.scss */ "./src/app/pages/auth/signup/signup.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
        src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
], SignupPage);



/***/ })

}]);