(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-device-edit-device-page-edit-device-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit/device/edit-device-page/edit-device-page.page.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit/device/edit-device-page/edit-device-page.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"menu/edit-device-list\" text=\"Voltar\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Editar\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-item lines=\"full\">\r\n    <ion-label>{{ device.name }}</ion-label>\r\n    <div class=\"button\">\r\n      <button class=\"transparent\" ion-button clear (click)=\"updateName()\">\r\n        <ion-icon name=\"pencil-outline\" style=\"zoom:2.0\"></ion-icon>\r\n      </button>\r\n    </div>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"full\">\r\n    <ion-icon src=\"{{ device.icon.icon }}\"></ion-icon>\r\n    <ion-label>&nbsp;&nbsp;{{ device.icon.iconName }}</ion-label>\r\n    <div class=\"button\">\r\n      <button class=\"transparent\" ion-button clear [routerLink]=\"['/edit-icons/', mac]\">\r\n        <ion-icon name=\"file-tray-full-outline\" style=\"zoom:2.0\"></ion-icon>\r\n      </button>\r\n    </div>\r\n  </ion-item>\r\n\r\n  <ion-item lines=\"full\">\r\n    <ion-icon src=\"{{ device.room.icon }}\"></ion-icon>\r\n    <ion-label>&nbsp;&nbsp;{{ device.room.name }}</ion-label>\r\n    <div class=\"button\">\r\n      <button class=\"transparent\" ion-button clear [routerLink]=\"['/edit-rooms/', mac]\">\r\n        <ion-icon name=\"file-tray-full-outline\" style=\"zoom:2.0\"></ion-icon>\r\n      </button>\r\n    </div>\r\n  </ion-item>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/edit/device/edit-device-page/edit-device-page-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/edit/device/edit-device-page/edit-device-page-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: EditDevicePagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDevicePagePageRoutingModule", function() { return EditDevicePagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _edit_device_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-device-page.page */ "./src/app/pages/edit/device/edit-device-page/edit-device-page.page.ts");




const routes = [
    {
        path: '',
        component: _edit_device_page_page__WEBPACK_IMPORTED_MODULE_3__["EditDevicePagePage"]
    }
];
let EditDevicePagePageRoutingModule = class EditDevicePagePageRoutingModule {
};
EditDevicePagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditDevicePagePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/edit/device/edit-device-page/edit-device-page.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/edit/device/edit-device-page/edit-device-page.module.ts ***!
  \*******************************************************************************/
/*! exports provided: EditDevicePagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDevicePagePageModule", function() { return EditDevicePagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _edit_device_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-device-page-routing.module */ "./src/app/pages/edit/device/edit-device-page/edit-device-page-routing.module.ts");
/* harmony import */ var _edit_device_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-device-page.page */ "./src/app/pages/edit/device/edit-device-page/edit-device-page.page.ts");







let EditDevicePagePageModule = class EditDevicePagePageModule {
};
EditDevicePagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_device_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditDevicePagePageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_edit_device_page_page__WEBPACK_IMPORTED_MODULE_6__["EditDevicePagePage"]],
        entryComponents: []
    })
], EditDevicePagePageModule);



/***/ }),

/***/ "./src/app/pages/edit/device/edit-device-page/edit-device-page.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/edit/device/edit-device-page/edit-device-page.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --background: rgb(43, 53, 102, 0.7);\n}\n\nion-icon {\n  color: white;\n}\n\n.transparent {\n  background-color: transparent;\n}\n\n@media (min-width: 720px) {\n  ion-item ion-label {\n    font-size: 24px;\n  }\n\n  ion-item ion-icon {\n    font-size: 30px;\n  }\n\n  ion-item .button button ion-icon {\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWRpdC9kZXZpY2UvZWRpdC1kZXZpY2UtcGFnZS9DOlxcSW9uaWNcXEFwcFRDQy9zcmNcXGFwcFxccGFnZXNcXGVkaXRcXGRldmljZVxcZWRpdC1kZXZpY2UtcGFnZVxcZWRpdC1kZXZpY2UtcGFnZS5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2VkaXQvZGV2aWNlL2VkaXQtZGV2aWNlLXBhZ2UvZWRpdC1kZXZpY2UtcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQ0FBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksNkJBQUE7QUNDSjs7QURFQTtFQUVJO0lBQ0ksZUFBQTtFQ0FOOztFREdFO0lBQ0ksZUFBQTtFQ0FOOztFREdFO0lBQ0ksZUFBQTtFQ0FOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lZGl0L2RldmljZS9lZGl0LWRldmljZS1wYWdlL2VkaXQtZGV2aWNlLXBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoNDMsIDUzLCAxMDIsIDAuNyk7XHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnRyYW5zcGFyZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzIwcHgpIHtcclxuXHJcbiAgICBpb24taXRlbSBpb24tbGFiZWwge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIH1cclxuXHJcbiAgICBpb24taXRlbSBpb24taWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pdGVtIC5idXR0b24gYnV0dG9uIGlvbi1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbn0iLCJpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDQzLCA1MywgMTAyLCAwLjcpO1xufVxuXG5pb24taWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRyYW5zcGFyZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3MjBweCkge1xuICBpb24taXRlbSBpb24tbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuXG4gIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cblxuICBpb24taXRlbSAuYnV0dG9uIGJ1dHRvbiBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/edit/device/edit-device-page/edit-device-page.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/edit/device/edit-device-page/edit-device-page.page.ts ***!
  \*****************************************************************************/
/*! exports provided: EditDevicePagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDevicePagePage", function() { return EditDevicePagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_device_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/device.service */ "./src/app/services/device.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");






let EditDevicePagePage = class EditDevicePagePage {
    constructor(deviceService, actRoute, fb, actionSheetController, alertCtrl, toastController) {
        this.deviceService = deviceService;
        this.actRoute = actRoute;
        this.fb = fb;
        this.actionSheetController = actionSheetController;
        this.alertCtrl = alertCtrl;
        this.toastController = toastController;
        this.novoNome = '';
        this.device = {
            ap: '',
            icon: {
                icon: '',
                iconName: '',
            },
            mac: '',
            name: '',
            room: {
                icon: '',
                name: '',
            }
        };
        // Atribui a variável 'mac' uma "foto" da rota, mais especificamente do 'mac'
        this.mac = this.actRoute.snapshot.paramMap.get('mac');
    }
    // Função para quando a página for iniciada
    ngOnInit() { }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.getDevice();
        });
    }
    getDevice() {
        this.deviceService.getDevice(this.mac).valueChanges().subscribe(res => {
            this.device = res;
        });
    }
    // Funcão para aparecer o alert com o input que irá receber o novo nome do usuário.
    updateName() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // Cria um alert
            const alert = yield this.alertCtrl.create({
                // Header com nome 'Novo Nome'.
                header: 'Novo Nome',
                // Gera inputs
                inputs: [
                    {
                        name: 'new-name',
                        id: 'newname',
                        placeholder: 'Escreva um novo nome',
                        value: this.novoNome
                    },
                ],
                // Gera botões
                buttons: [
                    {
                        // Botão para cancelar
                        text: 'Cancelar',
                        role: 'cancel',
                    },
                    {
                        text: 'Salvar',
                        handler: data => {
                            // if apenas para saber se o input não está vázio.
                            if (document.getElementById('newname').value !== '') {
                                // this.nome será = ao que está valor do input com Id 'newname'.
                                this.novoNome = document.getElementById('newname').value;
                                // Puxa a função do ion-toast.
                                this.newname();
                                // Função para mudar o nome do usuário.
                                this.deviceService.updateName(this.novoNome, this.mac);
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // Função para aparecer um ion-toast após salvar o novo nome (perfumaria).
    newname() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                header: 'O nome foi alterado.',
                duration: 2000
            });
            yield toast.present();
        });
    }
};
EditDevicePagePage.ctorParameters = () => [
    { type: _services_device_service__WEBPACK_IMPORTED_MODULE_2__["DeviceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
EditDevicePagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-device-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-device-page.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit/device/edit-device-page/edit-device-page.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-device-page.page.scss */ "./src/app/pages/edit/device/edit-device-page/edit-device-page.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_device_service__WEBPACK_IMPORTED_MODULE_2__["DeviceService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])
], EditDevicePagePage);



/***/ })

}]);