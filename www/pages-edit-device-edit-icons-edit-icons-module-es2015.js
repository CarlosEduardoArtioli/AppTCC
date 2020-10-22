(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-device-edit-icons-edit-icons-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit/device/edit-icons/edit-icons.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit/device/edit-icons/edit-icons.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Voltar\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Icones</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item lines=\"full\" (click)=\"update('/assets/svg/lampada.svg', 'Lâmpada')\">\n    <ion-label>\n      <h2>\n        <ion-icon src=\"/assets/svg/lampada.svg\"></ion-icon>&nbsp;&nbsp;Lâmpada\n      </h2>\n    </ion-label>\n  </ion-item>\n  <ion-item lines=\"full\" (click)=\"update('/assets/svg/televisao.svg', 'Televisão')\">\n    <ion-label>\n      <h2>\n        <ion-icon src=\"/assets/svg/televisao.svg\"></ion-icon>&nbsp;&nbsp;Televisão\n      </h2>\n    </ion-label>\n  </ion-item>\n  <ion-item lines=\"full\" (click)=\"update('/assets/svg/ventilador.svg', 'Ventilador')\">\n    <ion-label>\n      <h2>\n        <ion-icon src=\"/assets/svg/ventilador.svg\"></ion-icon>&nbsp;&nbsp;Ventilador\n      </h2>\n    </ion-label>\n  </ion-item>\n  <ion-item lines=\"full\" (click)=\"update('/assets/svg/ferro_de_passar.svg', 'Ferro de Passar')\">\n    <ion-label>\n      <h2>\n        <ion-icon src=\"/assets/svg/ferro_de_passar.svg\"></ion-icon>&nbsp;&nbsp;Ferro de Passar\n      </h2>\n    </ion-label>\n  </ion-item>\n  <ion-item lines=\"full\" (click)=\"update('/assets/svg/notebook.svg', 'Notebook')\">\n    <ion-label>\n      <h2>\n        <ion-icon src=\"/assets/svg/notebook.svg\"></ion-icon>&nbsp;&nbsp;Notebook\n      </h2>\n    </ion-label>\n  </ion-item>\n  <ion-item lines=\"full\" (click)=\"update('/assets/svg/carregador_de_celular.svg', 'Carregador de Celular')\">\n    <ion-label>\n      <h2>\n        <ion-icon src=\"/assets/svg/carregador_de_celular.svg\"></ion-icon>&nbsp;&nbsp;Carregador de Celular\n      </h2>\n    </ion-label>\n  </ion-item>\n  <ion-item lines=\"full\" (click)=\"update('/assets/svg/gas.svg', 'Gás')\">\n    <ion-label>\n      <h2>\n        <ion-icon src=\"/assets/svg/gas.svg\"></ion-icon>&nbsp;&nbsp;Gás\n      </h2>\n    </ion-label>\n  </ion-item>\n  <ion-item lines=\"full\" (click)=\"update('/assets/svg/filtro_de_linha.svg', 'Filtro de Linha')\">\n    <ion-label>\n      <h2>\n        <ion-icon src=\"/assets/svg/filtro_de_linha.svg\"></ion-icon>&nbsp;&nbsp;Filtro de Linha\n      </h2>\n    </ion-label>\n  </ion-item>\n  <ion-item lines=\"full\" (click)=\"update('/assets/svg/tomada.svg', 'Tomada')\">\n    <ion-label>\n      <h2>\n        <ion-icon src=\"/assets/svg/tomada.svg\"></ion-icon>&nbsp;&nbsp;Tomada\n      </h2>\n    </ion-label>\n  </ion-item>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/edit/device/edit-icons/edit-icons-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/edit/device/edit-icons/edit-icons-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: EditIconsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditIconsPageRoutingModule", function() { return EditIconsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _edit_icons_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-icons.page */ "./src/app/pages/edit/device/edit-icons/edit-icons.page.ts");




const routes = [
    {
        path: '',
        component: _edit_icons_page__WEBPACK_IMPORTED_MODULE_3__["EditIconsPage"]
    }
];
let EditIconsPageRoutingModule = class EditIconsPageRoutingModule {
};
EditIconsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditIconsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/edit/device/edit-icons/edit-icons.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/edit/device/edit-icons/edit-icons.module.ts ***!
  \*******************************************************************/
/*! exports provided: EditIconsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditIconsPageModule", function() { return EditIconsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _edit_icons_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-icons-routing.module */ "./src/app/pages/edit/device/edit-icons/edit-icons-routing.module.ts");
/* harmony import */ var _edit_icons_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-icons.page */ "./src/app/pages/edit/device/edit-icons/edit-icons.page.ts");







let EditIconsPageModule = class EditIconsPageModule {
};
EditIconsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_icons_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditIconsPageRoutingModule"]
        ],
        declarations: [_edit_icons_page__WEBPACK_IMPORTED_MODULE_6__["EditIconsPage"]]
    })
], EditIconsPageModule);



/***/ }),

/***/ "./src/app/pages/edit/device/edit-icons/edit-icons.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/edit/device/edit-icons/edit-icons.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  color: white;\n}\n\nion-item {\n  --background: rgb(43, 53, 102, 0.7);\n}\n\n@media (min-width: 720px) {\n  ion-icon {\n    font-size: 30px;\n  }\n\n  h2 {\n    font-size: 24px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWRpdC9kZXZpY2UvZWRpdC1pY29ucy9DOlxcSW9uaWNcXEFwcFRDQy9zcmNcXGFwcFxccGFnZXNcXGVkaXRcXGRldmljZVxcZWRpdC1pY29uc1xcZWRpdC1pY29ucy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2VkaXQvZGV2aWNlL2VkaXQtaWNvbnMvZWRpdC1pY29ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxtQ0FBQTtBQ0NKOztBREVBO0VBRUk7SUFDSSxlQUFBO0VDQU47O0VER0U7SUFDSSxlQUFBO0VDQU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkaXQvZGV2aWNlL2VkaXQtaWNvbnMvZWRpdC1pY29ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiKDQzLCA1MywgMTAyLCAwLjcpO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzIwcHgpIHtcclxuXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB9XHJcbn0iLCJpb24taWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHJnYig0MywgNTMsIDEwMiwgMC43KTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDcyMHB4KSB7XG4gIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cblxuICBoMiB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/edit/device/edit-icons/edit-icons.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/edit/device/edit-icons/edit-icons.page.ts ***!
  \*****************************************************************/
/*! exports provided: EditIconsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditIconsPage", function() { return EditIconsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_device_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/device.service */ "./src/app/services/device.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");





let EditIconsPage = class EditIconsPage {
    constructor(deviceService, router, actRoute, toastController) {
        this.deviceService = deviceService;
        this.router = router;
        this.actRoute = actRoute;
        this.toastController = toastController;
        this.mac = this.actRoute.snapshot.paramMap.get('mac');
    }
    ngOnInit() { }
    // Função para atualizar o icone do dispositivo
    update(icone, nomeIcone) {
        this.deviceService.updateIcon(icone, nomeIcone, this.mac)
            .then(() => {
            this.router.navigate(['edit-device-page/', this.mac]);
            this.changeIcon();
        })
            .catch(error => console.log(error));
    }
    // Função para aparecer um ion-toast após salvar o novo nome (perfumaria).
    changeIcon() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                header: 'O icone foi alterado.',
                duration: 2000
            });
            yield toast.present();
        });
    }
};
EditIconsPage.ctorParameters = () => [
    { type: src_app_services_device_service__WEBPACK_IMPORTED_MODULE_2__["DeviceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
EditIconsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-icons',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-icons.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit/device/edit-icons/edit-icons.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-icons.page.scss */ "./src/app/pages/edit/device/edit-icons/edit-icons.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_device_service__WEBPACK_IMPORTED_MODULE_2__["DeviceService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
], EditIconsPage);



/***/ })

}]);