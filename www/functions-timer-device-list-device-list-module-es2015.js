(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["functions-timer-device-list-device-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/functions/timer/device-list/device-list.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/functions/timer/device-list/device-list.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Timer\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-segment color=\"dark shade\" scrollable [(ngModel)]=\"selectTabs\" mode=\"md\">\n\n    <div>\n      <ion-segment-button value=\"all\">\n        <ion-label>Todos</ion-label>\n      </ion-segment-button>\n    </div>\n\n    <div *ngFor=\"let room of Rooms\">\n      <ion-segment-button value=\"{{ room.name }}\">\n        <ion-label>{{ room.name }}</ion-label>\n      </ion-segment-button>\n    </div>\n\n  </ion-segment>\n\n  <ng-container *ngFor=\"let device of Devices\">\n    <div *ngIf=\"selectTabs == device.room.name || selectTabs == 'all'\">\n      <ion-item button lines=\"full\" mode=\"md\" [routerLink]=\"['/edit-timer-list/', device.$key]\">\n        <ion-label>\n          <ion-icon src=\"{{ device.icon.icon }}\"></ion-icon>\n          &nbsp;&nbsp;<strong>{{device.name}}</strong>\n        </ion-label>\n      </ion-item>\n\n      <div>\n      </div>\n    </div>\n  </ng-container>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/functions/timer/device-list/device-list-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/functions/timer/device-list/device-list-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: DeviceListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceListPageRoutingModule", function() { return DeviceListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _device_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./device-list.page */ "./src/app/pages/functions/timer/device-list/device-list.page.ts");




const routes = [
    {
        path: '',
        component: _device_list_page__WEBPACK_IMPORTED_MODULE_3__["DeviceListPage"]
    }
];
let DeviceListPageRoutingModule = class DeviceListPageRoutingModule {
};
DeviceListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DeviceListPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/functions/timer/device-list/device-list.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/functions/timer/device-list/device-list.module.ts ***!
  \*************************************************************************/
/*! exports provided: DeviceListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceListPageModule", function() { return DeviceListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _device_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./device-list-routing.module */ "./src/app/pages/functions/timer/device-list/device-list-routing.module.ts");
/* harmony import */ var _device_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./device-list.page */ "./src/app/pages/functions/timer/device-list/device-list.page.ts");







let DeviceListPageModule = class DeviceListPageModule {
};
DeviceListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _device_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["DeviceListPageRoutingModule"]
        ],
        declarations: [_device_list_page__WEBPACK_IMPORTED_MODULE_6__["DeviceListPage"]]
    })
], DeviceListPageModule);



/***/ }),

/***/ "./src/app/pages/functions/timer/device-list/device-list.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/functions/timer/device-list/device-list.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::-webkit-scrollbar,\n*::-webkit-scrollbar {\n  display: none;\n}\n\nion-label {\n  font-weight: bolder;\n}\n\nion-content {\n  --ion-text-color: #fff;\n}\n\nion-content ion-icon {\n  color: white;\n}\n\nion-item {\n  --background: rgb(43, 53, 102, 0.7);\n}\n\nion-icon {\n  font-size: 20px;\n}\n\nion-item ion-label {\n  font-size: 16px;\n}\n\n@media (min-width: 720px) {\n  ion-content ion-segment ion-label {\n    font-size: 18px;\n  }\n  ion-content ion-item ion-label strong {\n    font-size: 24px;\n  }\n  ion-content ion-icon {\n    font-size: 24px;\n  }\n  ion-content ion-item ion-label {\n    font-size: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZnVuY3Rpb25zL3RpbWVyL2RldmljZS1saXN0L0M6XFxJb25pY1xcQXBwVENDL3NyY1xcYXBwXFxwYWdlc1xcZnVuY3Rpb25zXFx0aW1lclxcZGV2aWNlLWxpc3RcXGRldmljZS1saXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZnVuY3Rpb25zL3RpbWVyL2RldmljZS1saXN0L2RldmljZS1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBRUksc0JBQUE7QUNBSjs7QURFSTtFQUNJLFlBQUE7QUNBUjs7QURJQTtFQUNJLG1DQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0FDREo7O0FESUE7RUFDSSxlQUFBO0FDREo7O0FESUE7RUFHUTtJQUNJLGVBQUE7RUNIVjtFRE1NO0lBQ0ksZUFBQTtFQ0pWO0VET007SUFDSSxlQUFBO0VDTFY7RURRTTtJQUNJLGVBQUE7RUNOVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZnVuY3Rpb25zL3RpbWVyL2RldmljZS1saXN0L2RldmljZS1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6LXdlYmtpdC1zY3JvbGxiYXIsXHJcbio6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbmlvbi1sYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcblxyXG4gICAgLS1pb24tdGV4dC1jb2xvcjogI2ZmZjtcclxuXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYig0MywgNTMsIDEwMiwgMC43KTtcclxufVxyXG5cclxuaW9uLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5pb24taXRlbSBpb24tbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzIwcHgpIHtcclxuICAgIGlvbi1jb250ZW50IHtcclxuXHJcbiAgICAgICAgaW9uLXNlZ21lbnQgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWl0ZW0gaW9uLWxhYmVsIHN0cm9uZyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIjo6LXdlYmtpdC1zY3JvbGxiYXIsXG4qOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tdGV4dC1jb2xvcjogI2ZmZjtcbn1cbmlvbi1jb250ZW50IGlvbi1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDQzLCA1MywgMTAyLCAwLjcpO1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzIwcHgpIHtcbiAgaW9uLWNvbnRlbnQgaW9uLXNlZ21lbnQgaW9uLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cbiAgaW9uLWNvbnRlbnQgaW9uLWl0ZW0gaW9uLWxhYmVsIHN0cm9uZyB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG4gIGlvbi1jb250ZW50IGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbiAgaW9uLWNvbnRlbnQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/functions/timer/device-list/device-list.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/functions/timer/device-list/device-list.page.ts ***!
  \***********************************************************************/
/*! exports provided: DeviceListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceListPage", function() { return DeviceListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_device_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/device.service */ "./src/app/services/device.service.ts");
/* harmony import */ var src_app_services_room_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/room.service */ "./src/app/services/room.service.ts");




let DeviceListPage = class DeviceListPage {
    constructor(deviceService, roomService) {
        this.deviceService = deviceService;
        this.roomService = roomService;
        // Declaração de variáveis
        this.Devices = [];
        this.Rooms = [];
        this.selectTabs = 'all';
    }
    ngOnInit() {
    }
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
            // "Puxa a variável 'Devices' não sei o motivo mas tá ai"
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
};
DeviceListPage.ctorParameters = () => [
    { type: src_app_services_device_service__WEBPACK_IMPORTED_MODULE_2__["DeviceService"] },
    { type: src_app_services_room_service__WEBPACK_IMPORTED_MODULE_3__["RoomService"] }
];
DeviceListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-device-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./device-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/functions/timer/device-list/device-list.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./device-list.page.scss */ "./src/app/pages/functions/timer/device-list/device-list.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_device_service__WEBPACK_IMPORTED_MODULE_2__["DeviceService"],
        src_app_services_room_service__WEBPACK_IMPORTED_MODULE_3__["RoomService"]])
], DeviceListPage);



/***/ })

}]);