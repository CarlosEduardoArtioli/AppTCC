(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Dispositivos\r\n    </ion-title>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-segment color=\"dark shade\" scrollable [(ngModel)]=\"selectTabs\" mode=\"md\">\r\n\r\n    <div>\r\n      <ion-segment-button value=\"all\">\r\n        <ion-label>Todos</ion-label>\r\n      </ion-segment-button>\r\n    </div>\r\n\r\n    <div *ngFor=\"let room of Rooms\">\r\n      <ion-segment-button value=\"{{ room.name }}\">\r\n        <ion-label>{{ room.name }}</ion-label>\r\n      </ion-segment-button>\r\n    </div>\r\n\r\n  </ion-segment>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ng-container *ngFor=\"let device of Devices\">\r\n        <ion-col size=\"6\" *ngIf=\"selectTabs == device.room.name || selectTabs == 'all'\">\r\n          <div>\r\n            <ion-button fill=\"solid\" expand=\"block\" size=\"large\" class=\"sqare_button\" color=\"button\"\r\n              (click)=\"mudaStatus(device.$key)\">\r\n              <div class=\"vertical\">\r\n                <ion-icon class=\"desligado\" *ngIf=\"device.status == 'desligado'\" slot=\"start\"\r\n                  src=\"{{ device.icon.icon }}\"></ion-icon>\r\n                <ion-icon class=\"ligado\" *ngIf=\"device.status == 'ligado'\" slot=\"start\" src=\"{{ device.icon.icon }}\">\r\n                </ion-icon>\r\n                <span class=\"desligado\" *ngIf=\"device.status == 'desligado'\">{{ device.name }}</span>\r\n                <span class=\"ligado\" *ngIf=\"device.status == 'ligado'\">{{ device.name }}</span>\r\n              </div>\r\n            </ion-button>\r\n          </div>\r\n        </ion-col>\r\n      </ng-container>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::-webkit-scrollbar,\n*::-webkit-scrollbar {\n  display: none;\n}\n\nion-label {\n  font-weight: bolder;\n}\n\nion-icon {\n  font-size: 60px;\n}\n\nion-icon.ligado {\n  color: #7ce577;\n}\n\nion-icon.desligado {\n  color: white;\n}\n\nspan {\n  font-size: 16px;\n}\n\nspan.ligado {\n  color: #7ce577;\n}\n\nspan.desligado {\n  color: white;\n}\n\n.sqare_button {\n  --border-radius: 1rem;\n  height: 100px;\n  --vertical-align: middle;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-bottom: 2px;\n  --box-shadow: none;\n}\n\n.vertical {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  line-height: 30px;\n}\n\n@media (min-width: 720px) {\n  ion-content ion-label {\n    font-size: 18px;\n  }\n  ion-content ion-icon {\n    font-size: 80px;\n  }\n  ion-content span {\n    font-size: 28px;\n  }\n  ion-content .sqare_button {\n    --border-radius: 1rem;\n    height: 140px;\n    --vertical-align: middle;\n    --padding-start: 10px;\n    --padding-end: 10px;\n    --padding-bottom: 2px;\n    --box-shadow: none;\n  }\n  ion-content .vertical {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: center;\n            align-items: center;\n    line-height: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9DOlxcSW9uaWNcXEFwcFRDQy9zcmNcXGFwcFxccGFnZXNcXGhvbWVcXGhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLGFBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxjQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0FDQUo7O0FESUE7RUFDRSxlQUFBO0FDREY7O0FER0U7RUFDRSxjQUFBO0FDREo7O0FESUU7RUFDRSxZQUFBO0FDRko7O0FETUE7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDSEY7O0FETUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsaUJBQUE7QUNIRjs7QURNQTtFQUdJO0lBQ0UsZUFBQTtFQ0xKO0VEUUU7SUFDRSxlQUFBO0VDTko7RURTRTtJQUNFLGVBQUE7RUNQSjtFRFVFO0lBQ0UscUJBQUE7SUFDQSxhQUFBO0lBQ0Esd0JBQUE7SUFDQSxxQkFBQTtJQUNBLG1CQUFBO0lBQ0EscUJBQUE7SUFDQSxrQkFBQTtFQ1JKO0VEV0U7SUFDRSxvQkFBQTtJQUFBLGFBQUE7SUFDQSw0QkFBQTtJQUFBLDZCQUFBO1lBQUEsc0JBQUE7SUFDQSx5QkFBQTtZQUFBLG1CQUFBO0lBQ0EsaUJBQUE7RUNUSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6LXdlYmtpdC1zY3JvbGxiYXIsXHJcbio6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5pb24tbGFiZWwge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDYwcHg7XHJcblxyXG4gICYubGlnYWRvIHtcclxuICAgIGNvbG9yOiAjN2NlNTc3O1xyXG4gIH1cclxuXHJcbiAgJi5kZXNsaWdhZG8ge1xyXG4gICAgY29sb3I6IHJnYigyNTUsMjU1LDI1NSwxKTtcclxuICB9XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuXHJcbiAgJi5saWdhZG8ge1xyXG4gICAgY29sb3I6ICM3Y2U1Nzc7XHJcbiAgfVxyXG5cclxuICAmLmRlc2xpZ2FkbyB7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwyNTUsMjU1LDEpO1xyXG4gIH1cclxufVxyXG5cclxuLnNxYXJlX2J1dHRvbiB7XHJcbiAgLS1ib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgLS12ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcclxuICAtLXBhZGRpbmctZW5kOiAxMHB4O1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDJweDtcclxuICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi52ZXJ0aWNhbCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3MjBweCkge1xyXG4gIGlvbi1jb250ZW50IHtcclxuXHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDgwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIH1cclxuXHJcbiAgICAuc3FhcmVfYnV0dG9uIHtcclxuICAgICAgLS1ib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgICAtLXZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcclxuICAgICAgLS1wYWRkaW5nLWVuZDogMTBweDtcclxuICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMnB4O1xyXG4gICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLnZlcnRpY2FsIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiOjotd2Via2l0LXNjcm9sbGJhcixcbio6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IDYwcHg7XG59XG5pb24taWNvbi5saWdhZG8ge1xuICBjb2xvcjogIzdjZTU3Nztcbn1cbmlvbi1pY29uLmRlc2xpZ2FkbyB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbnNwYW4ubGlnYWRvIHtcbiAgY29sb3I6ICM3Y2U1Nzc7XG59XG5zcGFuLmRlc2xpZ2FkbyB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnNxYXJlX2J1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgLS12ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDJweDtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuXG4udmVydGljYWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMzBweDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDcyMHB4KSB7XG4gIGlvbi1jb250ZW50IGlvbi1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIGlvbi1jb250ZW50IGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDgwcHg7XG4gIH1cbiAgaW9uLWNvbnRlbnQgc3BhbiB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICB9XG4gIGlvbi1jb250ZW50IC5zcWFyZV9idXR0b24ge1xuICAgIC0tYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICBoZWlnaHQ6IDE0MHB4O1xuICAgIC0tdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAycHg7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xuICB9XG4gIGlvbi1jb250ZW50IC52ZXJ0aWNhbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_device_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/device.service */ "./src/app/services/device.service.ts");
/* harmony import */ var _services_room_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/room.service */ "./src/app/services/room.service.ts");




let HomePage = class HomePage {
    constructor(deviceService, roomService) {
        this.deviceService = deviceService;
        this.roomService = roomService;
        // Declaração de variáveis
        this.Devices = [];
        this.Rooms = [];
        this.selectTabs = 'all';
    }
    // Função quando a página é iniciada
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
    // Função para mudar o status do dispositivo
    mudaStatus(id) {
        // Chama a função mudaStatus no AppointmentService
        this.deviceService.mudaStatus(id);
    }
};
HomePage.ctorParameters = () => [
    { type: _services_device_service__WEBPACK_IMPORTED_MODULE_2__["DeviceService"] },
    { type: _services_room_service__WEBPACK_IMPORTED_MODULE_3__["RoomService"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_device_service__WEBPACK_IMPORTED_MODULE_2__["DeviceService"],
        _services_room_service__WEBPACK_IMPORTED_MODULE_3__["RoomService"]])
], HomePage);



/***/ })

}]);