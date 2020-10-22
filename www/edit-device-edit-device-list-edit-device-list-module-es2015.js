(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-device-edit-device-list-edit-device-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit/device/edit-device-list/edit-device-list.page.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit/device/edit-device-list/edit-device-list.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Dispositivo\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-segment color=\"dark shade\" scrollable [(ngModel)]=\"selectTabs\" mode=\"md\">\r\n\r\n    <div>\r\n      <ion-segment-button value=\"all\">\r\n        <ion-label>Todos</ion-label>\r\n      </ion-segment-button>\r\n    </div>\r\n\r\n    <div *ngFor=\"let room of Rooms\">\r\n      <ion-segment-button value=\"{{ room.name }}\">\r\n        <ion-label>{{ room.name }}</ion-label>\r\n      </ion-segment-button>\r\n    </div>\r\n\r\n  </ion-segment>\r\n\r\n  <ng-container *ngFor=\"let device of Devices\">\r\n    <ion-item *ngIf=\"selectTabs == device.room.name || selectTabs == 'all'\" lines=\"full\">\r\n      <ion-label>\r\n        <h3>\r\n          <ion-icon src=\"{{ device.icon.icon }}\"></ion-icon>&nbsp;&nbsp;{{device.name}}\r\n        </h3>\r\n        <h3>\r\n          <ion-icon src=\"{{ device.room.icon }}\"></ion-icon>&nbsp;&nbsp;{{device.room.name}}\r\n        </h3>\r\n        <h3>\r\n          <ion-icon name=\"wifi-outline\"></ion-icon>&nbsp;&nbsp;{{device.ap}}\r\n        </h3>\r\n      </ion-label>\r\n\r\n      <div class=\"buttons\">\r\n        <button class=\"transparent\" ion-button clear [routerLink]=\"['/edit-device-page/', device.$key]\">\r\n          <ion-icon name=\"create\" style=\"zoom:2.0\"></ion-icon>\r\n        </button>\r\n\r\n        <button class=\"transparent\" ion-button clear (click)=\"deleteDevice(device.$key)\">\r\n          <ion-icon name=\"trash\" style=\"zoom:2.0\"></ion-icon>\r\n        </button>\r\n      </div>\r\n    </ion-item>\r\n  </ng-container>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/edit/device/edit-device-list/edit-device-list-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/edit/device/edit-device-list/edit-device-list-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: EditDeviceListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDeviceListPageRoutingModule", function() { return EditDeviceListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _edit_device_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-device-list.page */ "./src/app/pages/edit/device/edit-device-list/edit-device-list.page.ts");




const routes = [
    {
        path: '',
        component: _edit_device_list_page__WEBPACK_IMPORTED_MODULE_3__["EditDeviceListPage"]
    }
];
let EditDeviceListPageRoutingModule = class EditDeviceListPageRoutingModule {
};
EditDeviceListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditDeviceListPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/edit/device/edit-device-list/edit-device-list.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/edit/device/edit-device-list/edit-device-list.module.ts ***!
  \*******************************************************************************/
/*! exports provided: EditDeviceListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDeviceListPageModule", function() { return EditDeviceListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _edit_device_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-device-list-routing.module */ "./src/app/pages/edit/device/edit-device-list/edit-device-list-routing.module.ts");
/* harmony import */ var _edit_device_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-device-list.page */ "./src/app/pages/edit/device/edit-device-list/edit-device-list.page.ts");







let EditDeviceListPageModule = class EditDeviceListPageModule {
};
EditDeviceListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_device_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditDeviceListPageRoutingModule"]
        ],
        declarations: [_edit_device_list_page__WEBPACK_IMPORTED_MODULE_6__["EditDeviceListPage"]]
    })
], EditDeviceListPageModule);



/***/ }),

/***/ "./src/app/pages/edit/device/edit-device-list/edit-device-list.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/edit/device/edit-device-list/edit-device-list.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".transparent {\n  background-color: transparent;\n}\n\nion-icon {\n  color: white;\n}\n\nion-item {\n  --background: rgb(43, 53, 102, 0.7);\n}\n\n@media (min-width: 720px) {\n  .buttons ion-icon {\n    font-size: 18px;\n  }\n\n  ion-icon {\n    font-size: 24px;\n  }\n\n  h3 {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWRpdC9kZXZpY2UvZWRpdC1kZXZpY2UtbGlzdC9DOlxcSW9uaWNcXEFwcFRDQy9zcmNcXGFwcFxccGFnZXNcXGVkaXRcXGRldmljZVxcZWRpdC1kZXZpY2UtbGlzdFxcZWRpdC1kZXZpY2UtbGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2VkaXQvZGV2aWNlL2VkaXQtZGV2aWNlLWxpc3QvZWRpdC1kZXZpY2UtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREVBO0VBQ0ksbUNBQUE7QUNDSjs7QURFQTtFQUNJO0lBQ0ksZUFBQTtFQ0NOOztFREVFO0lBQ0ksZUFBQTtFQ0NOOztFREVFO0lBQ0ksZUFBQTtFQ0NOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lZGl0L2RldmljZS9lZGl0LWRldmljZS1saXN0L2VkaXQtZGV2aWNlLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRyYW5zcGFyZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5pb24taWNvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiKDQzLCA1MywgMTAyLCAwLjcpO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzIwcHgpIHtcclxuICAgIC5idXR0b25zIGlvbi1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIH1cclxuXHJcbiAgICBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG59IiwiLnRyYW5zcGFyZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmlvbi1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDQzLCA1MywgMTAyLCAwLjcpO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzIwcHgpIHtcbiAgLmJ1dHRvbnMgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuXG4gIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cblxuICBoMyB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/edit/device/edit-device-list/edit-device-list.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/edit/device/edit-device-list/edit-device-list.page.ts ***!
  \*****************************************************************************/
/*! exports provided: EditDeviceListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDeviceListPage", function() { return EditDeviceListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_device_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/device.service */ "./src/app/services/device.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_room_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/room.service */ "./src/app/services/room.service.ts");





let EditDeviceListPage = class EditDeviceListPage {
    constructor(deviceService, alertCtrl, roomService) {
        this.deviceService = deviceService;
        this.alertCtrl = alertCtrl;
        this.roomService = roomService;
        // Declaração de variáveis
        this.Devices = [];
        this.Rooms = [];
        this.selectTabs = 'all';
    }
    // Função quando a página é iniciada
    ngOnInit() { }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.getDevices();
            yield this.getRooms();
        });
    }
    getDevices() {
        // Atribui a variávei 'deviceRes' o seguinte valor
        // Puxa a função 'getDeviceList'
        const deviceRes = this.deviceService.getDeviceList();
        // Pega os valores da lista de dispositivos
        deviceRes.snapshotChanges().subscribe(res => {
            // "Subscreve" a variável devices com os dispostivos e seus valores
            this.Devices = [];
            res.forEach(item => {
                const a = item.payload.toJSON();
                a['$key'] = item.key;
                this.Devices.push(a);
            });
        });
    }
    getRooms() {
        // Atribui a variávei 'deviceRes' o seguinte valor
        // Puxa a função 'getDeviceList'
        const roomRes = this.roomService.getRoomList();
        // Pega os valores da lista de dispositivos
        roomRes.snapshotChanges().subscribe(res => {
            // "Puxa a variável 'Devices' não sei o motivo mas tá ai"
            this.Rooms = [];
            res.forEach(item => {
                const a = item.payload.toJSON();
                a['$key'] = item.key;
                this.Rooms.push(a);
            });
        });
    }
    // Função para deletar o dispositivo que recebe o parâmetro 'id'
    deleteDevice(id) {
        this.presentAlertConfirm(id);
    }
    // Função que apresenta uma mensagem perguntado se o usuário deseja excluir o dispositivo
    presentAlertConfirm(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'EXCLUIR!',
                message: 'Deseja excluir o dispositivo?',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel'
                    }, {
                        text: 'Confirmar',
                        handler: () => {
                            this.deviceService.deleteDevice(id);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
EditDeviceListPage.ctorParameters = () => [
    { type: _services_device_service__WEBPACK_IMPORTED_MODULE_2__["DeviceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_room_service__WEBPACK_IMPORTED_MODULE_4__["RoomService"] }
];
EditDeviceListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-device-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-device-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit/device/edit-device-list/edit-device-list.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-device-list.page.scss */ "./src/app/pages/edit/device/edit-device-list/edit-device-list.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_device_service__WEBPACK_IMPORTED_MODULE_2__["DeviceService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        src_app_services_room_service__WEBPACK_IMPORTED_MODULE_4__["RoomService"]])
], EditDeviceListPage);



/***/ })

}]);