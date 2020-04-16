(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-adicionar-adicionar-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/adicionar/adicionar.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/adicionar/adicionar.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar class=\"ios hydrated\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"ios title-ios hydrated\">Adicionar</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list lines=\"full\">\r\n    <form [formGroup]=\"deviceForm\" (ngSubmit)=\"formSubmit()\">\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Nome</ion-label>\r\n        <ion-input formControlName=\"name\" type=\"text\" required></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Status</ion-label>\r\n        <ion-input formControlName=\"status\" type=\"text\" required>\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">MAC</ion-label>\r\n        <ion-input formControlName=\"mac\" type=\"text\" required>\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-icon slot=\"start\" src=\"/assets/svg/Lâmpada.svg\"></ion-icon>\r\n        <ion-input formControlName=\"icon\"></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button type=\"submit\" color=\"primary\" shape=\"full\" expand=\"block\">Criar</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </form>\r\n  </ion-list>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/adicionar/adicionar-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/adicionar/adicionar-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AdicionarPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdicionarPageRoutingModule", function() { return AdicionarPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _adicionar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adicionar.page */ "./src/app/pages/adicionar/adicionar.page.ts");




const routes = [
    {
        path: '',
        component: _adicionar_page__WEBPACK_IMPORTED_MODULE_3__["AdicionarPage"]
    }
];
let AdicionarPageRoutingModule = class AdicionarPageRoutingModule {
};
AdicionarPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdicionarPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/adicionar/adicionar.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/adicionar/adicionar.module.ts ***!
  \*****************************************************/
/*! exports provided: AdicionarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdicionarPageModule", function() { return AdicionarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _adicionar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./adicionar-routing.module */ "./src/app/pages/adicionar/adicionar-routing.module.ts");
/* harmony import */ var _adicionar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./adicionar.page */ "./src/app/pages/adicionar/adicionar.page.ts");







let AdicionarPageModule = class AdicionarPageModule {
};
AdicionarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _adicionar_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdicionarPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_adicionar_page__WEBPACK_IMPORTED_MODULE_6__["AdicionarPage"]]
    })
], AdicionarPageModule);



/***/ }),

/***/ "./src/app/pages/adicionar/adicionar.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/adicionar/adicionar.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkaWNpb25hci9hZGljaW9uYXIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/adicionar/adicionar.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/adicionar/adicionar.page.ts ***!
  \***************************************************/
/*! exports provided: AdicionarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdicionarPage", function() { return AdicionarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_device_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/device.service */ "./src/app/services/device.service.ts");





let AdicionarPage = class AdicionarPage {
    constructor(aptService, router, fb, actRoute) {
        this.aptService = aptService;
        this.router = router;
        this.fb = fb;
        this.actRoute = actRoute;
    }
    // Função para quando a página for iniciada
    ngOnInit() {
        // Atribui a variável deviceForm o valor do grupo de valores do FormBuilder da página HTML 
        this.deviceForm = this.fb.group({
            name: [''],
            status: [''],
            mac: [''],
            icon: ['']
        });
    }
    // Função para enviar o formulário
    formSubmit() {
        // Se o formulário for diferente de válido
        if (!this.deviceForm.valid) {
            // Retorna um boolean de valor false e não executa o envio do formulário
            return false;
            // Se o formulário for válido
        }
        else {
            this.mac = this.deviceForm.value.mac;
            // "Puxa" a função 'createDevice' do DeviceService e passa o valor do 'deviceForm'
            this.aptService.createDevice(this.deviceForm.value, this.mac);
            // "Reseta" o formulário para uma nova inserção de dados
            this.deviceForm.reset();
            // Navega para a página 'home'
            this.router.navigate(['/home']);
        }
    }
};
AdicionarPage.ctorParameters = () => [
    { type: _services_device_service__WEBPACK_IMPORTED_MODULE_4__["DeviceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
AdicionarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adicionar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./adicionar.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/adicionar/adicionar.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./adicionar.page.scss */ "./src/app/pages/adicionar/adicionar.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_device_service__WEBPACK_IMPORTED_MODULE_4__["DeviceService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
], AdicionarPage);



/***/ })

}]);
//# sourceMappingURL=pages-adicionar-adicionar-module-es2015.js.map