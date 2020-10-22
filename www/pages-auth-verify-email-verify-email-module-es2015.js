(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-verify-email-verify-email-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/verify-email/verify-email.page.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/verify-email/verify-email.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\" swipeEnabled=\"false\">\r\n  <br>\r\n  <br>\r\n  <h3 class=\"ion-text-center logo-white\">\r\n    Obrigado por se registrar!\r\n  </h3>\r\n  <br>\r\n  <h3 class=\"ion-text-center logo-white\">\r\n    Entre no seu email e clique no link para realizar a verificação.\r\n  </h3>\r\n  <br>\r\n  <br>\r\n  <br>\r\n  <ion-button ion-item color=\"dark\" expand=\"full\" (click)=\"verificationMail()\">\r\n    Reenviar email de verificação\r\n  </ion-button>\r\n  <br>\r\n  <ion-button ion-item fill=\"outline\" shape=\"round\" ion-item color=\"dark\" expand=\"full\" (click)=\"goToLogin()\">\r\n    Voltar\r\n  </ion-button>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/auth/verify-email/verify-email-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/auth/verify-email/verify-email-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: VerifyEmailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyEmailPageRoutingModule", function() { return VerifyEmailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _verify_email_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./verify-email.page */ "./src/app/pages/auth/verify-email/verify-email.page.ts");




const routes = [
    {
        path: '',
        component: _verify_email_page__WEBPACK_IMPORTED_MODULE_3__["VerifyEmailPage"]
    }
];
let VerifyEmailPageRoutingModule = class VerifyEmailPageRoutingModule {
};
VerifyEmailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VerifyEmailPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/auth/verify-email/verify-email.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/auth/verify-email/verify-email.module.ts ***!
  \****************************************************************/
/*! exports provided: VerifyEmailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyEmailPageModule", function() { return VerifyEmailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _verify_email_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./verify-email-routing.module */ "./src/app/pages/auth/verify-email/verify-email-routing.module.ts");
/* harmony import */ var _verify_email_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./verify-email.page */ "./src/app/pages/auth/verify-email/verify-email.page.ts");







let VerifyEmailPageModule = class VerifyEmailPageModule {
};
VerifyEmailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _verify_email_routing_module__WEBPACK_IMPORTED_MODULE_5__["VerifyEmailPageRoutingModule"]
        ],
        declarations: [_verify_email_page__WEBPACK_IMPORTED_MODULE_6__["VerifyEmailPage"]]
    })
], VerifyEmailPageModule);



/***/ }),

/***/ "./src/app/pages/auth/verify-email/verify-email.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/auth/verify-email/verify-email.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: url('backgroundapp.png') no-repeat center center / cover !important;\n  --ion-text-color: #fff;\n}\nion-content ion-button {\n  max-width: 600px;\n  margin-left: auto;\n  margin-right: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aC92ZXJpZnktZW1haWwvQzpcXElvbmljXFxBcHBUQ0Mvc3JjXFxhcHBcXHBhZ2VzXFxhdXRoXFx2ZXJpZnktZW1haWxcXHZlcmlmeS1lbWFpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2F1dGgvdmVyaWZ5LWVtYWlsL3ZlcmlmeS1lbWFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpRkFBQTtFQUVBLHNCQUFBO0FDQUo7QURFSTtFQUNJLGdCQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXV0aC92ZXJpZnktZW1haWwvdmVyaWZ5LWVtYWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1nL2JhY2tncm91bmRhcHAucG5nJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlciAhaW1wb3J0YW50O1xyXG5cclxuICAgIC0taW9uLXRleHQtY29sb3I6ICNmZmY7XHJcblxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcclxuXHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYmFja2dyb3VuZGFwcC5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlciAhaW1wb3J0YW50O1xuICAtLWlvbi10ZXh0LWNvbG9yOiAjZmZmO1xufVxuaW9uLWNvbnRlbnQgaW9uLWJ1dHRvbiB7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/auth/verify-email/verify-email.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/auth/verify-email/verify-email.page.ts ***!
  \**************************************************************/
/*! exports provided: VerifyEmailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyEmailPage", function() { return VerifyEmailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");




let VerifyEmailPage = class VerifyEmailPage {
    constructor(navCtrl, fbAuth) {
        this.navCtrl = navCtrl;
        this.fbAuth = fbAuth;
    }
    ngOnInit() { }
    // Função para ir a página de Singup
    goToLogin() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // Navega para a página 'singup'
            this.navCtrl.navigateForward('login');
        });
    }
    // Função para verificar o email do usuário
    verificationMail() {
        this.fbAuth.auth.currentUser.sendEmailVerification();
    }
};
VerifyEmailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] }
];
VerifyEmailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-verify-email',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./verify-email.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/auth/verify-email/verify-email.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./verify-email.page.scss */ "./src/app/pages/auth/verify-email/verify-email.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
], VerifyEmailPage);



/***/ })

}]);