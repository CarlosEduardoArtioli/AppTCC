(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-device-edit-rooms-edit-rooms-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit/device/edit-rooms/edit-rooms.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit/device/edit-rooms/edit-rooms.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Voltar\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Cômodos</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item (click)=\"update('Nenhum', '/assets/svg/casa.svg')\" lines=\"full\">\n    <ion-label>\n      <h2>\n        <ion-icon src=\"/assets/svg/casa.svg\"></ion-icon>&nbsp;&nbsp;Nenhum\n      </h2>\n    </ion-label>\n  </ion-item>\n\n  <ion-item *ngFor=\"let room of Rooms\" (click)=\"update(room.name, room.icon)\" lines=\"full\">\n    <ion-label>\n      <h2>\n        <ion-icon src=\"{{ room.icon }}\"></ion-icon>&nbsp;&nbsp;{{room.name}}\n      </h2>\n    </ion-label>\n  </ion-item>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/edit/device/edit-rooms/edit-rooms-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/edit/device/edit-rooms/edit-rooms-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: EditRoomsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRoomsPageRoutingModule", function() { return EditRoomsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _edit_rooms_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-rooms.page */ "./src/app/pages/edit/device/edit-rooms/edit-rooms.page.ts");




const routes = [
    {
        path: '',
        component: _edit_rooms_page__WEBPACK_IMPORTED_MODULE_3__["EditRoomsPage"]
    }
];
let EditRoomsPageRoutingModule = class EditRoomsPageRoutingModule {
};
EditRoomsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditRoomsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/edit/device/edit-rooms/edit-rooms.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/edit/device/edit-rooms/edit-rooms.module.ts ***!
  \*******************************************************************/
/*! exports provided: EditRoomsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRoomsPageModule", function() { return EditRoomsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _edit_rooms_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-rooms-routing.module */ "./src/app/pages/edit/device/edit-rooms/edit-rooms-routing.module.ts");
/* harmony import */ var _edit_rooms_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-rooms.page */ "./src/app/pages/edit/device/edit-rooms/edit-rooms.page.ts");







let EditRoomsPageModule = class EditRoomsPageModule {
};
EditRoomsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_rooms_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditRoomsPageRoutingModule"]
        ],
        declarations: [_edit_rooms_page__WEBPACK_IMPORTED_MODULE_6__["EditRoomsPage"]]
    })
], EditRoomsPageModule);



/***/ }),

/***/ "./src/app/pages/edit/device/edit-rooms/edit-rooms.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/edit/device/edit-rooms/edit-rooms.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  color: white;\n}\n\nion-item {\n  --background: rgb(43, 53, 102, 0.7);\n}\n\n@media (min-width: 720px) {\n  ion-icon {\n    font-size: 30px;\n  }\n\n  h2 {\n    font-size: 24px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWRpdC9kZXZpY2UvZWRpdC1yb29tcy9DOlxcSW9uaWNcXEFwcFRDQy9zcmNcXGFwcFxccGFnZXNcXGVkaXRcXGRldmljZVxcZWRpdC1yb29tc1xcZWRpdC1yb29tcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2VkaXQvZGV2aWNlL2VkaXQtcm9vbXMvZWRpdC1yb29tcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxtQ0FBQTtBQ0NKOztBREVBO0VBRUk7SUFDSSxlQUFBO0VDQU47O0VER0U7SUFDSSxlQUFBO0VDQU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkaXQvZGV2aWNlL2VkaXQtcm9vbXMvZWRpdC1yb29tcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiKDQzLCA1MywgMTAyLCAwLjcpO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzIwcHgpIHtcclxuXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB9XHJcbn0iLCJpb24taWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHJnYig0MywgNTMsIDEwMiwgMC43KTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDcyMHB4KSB7XG4gIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cblxuICBoMiB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/edit/device/edit-rooms/edit-rooms.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/edit/device/edit-rooms/edit-rooms.page.ts ***!
  \*****************************************************************/
/*! exports provided: EditRoomsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRoomsPage", function() { return EditRoomsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_device_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/device.service */ "./src/app/services/device.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_room_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/room.service */ "./src/app/services/room.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");






let EditRoomsPage = class EditRoomsPage {
    constructor(deviceService, router, actRoute, roomService, toastController) {
        this.deviceService = deviceService;
        this.router = router;
        this.actRoute = actRoute;
        this.roomService = roomService;
        this.toastController = toastController;
        this.Rooms = [];
        // Atribui a variável 'mac' uma "foto" da rota, mais especificamente do 'mac'
        this.mac = this.actRoute.snapshot.paramMap.get('mac');
    }
    ngOnInit() { }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.getRooms();
        });
    }
    getRooms() {
        // Atribui a variávei 'rommRes' o seguinte valor
        // Puxa a função 'getRoomList'
        const roomRes = this.roomService.getRoomList();
        // Pega os valores da lista de dispositivos
        roomRes.snapshotChanges().subscribe(res => {
            // "Subscreve" a variável Rooms com os cômodos e seus valores
            this.Rooms = [];
            res.forEach(item => {
                const a = item.payload.toJSON();
                a['$key'] = item.key;
                this.Rooms.push(a);
            });
        });
    }
    // Função para atualizar o cômodo
    update(room, IconRoom) {
        this.deviceService.updateRoom(room, IconRoom, this.mac)
            .then(() => {
            this.router.navigate(['edit-device-page/', this.mac]);
            this.changeRoom();
        })
            .catch(error => console.log(error));
    }
    // Função para aparecer um ion-toast após alterar o cômodo(perfumaria).
    changeRoom() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                header: 'O cômodo foi alterado.',
                duration: 2000
            });
            yield toast.present();
        });
    }
};
EditRoomsPage.ctorParameters = () => [
    { type: src_app_services_device_service__WEBPACK_IMPORTED_MODULE_2__["DeviceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_room_service__WEBPACK_IMPORTED_MODULE_4__["RoomService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
EditRoomsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-rooms',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-rooms.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit/device/edit-rooms/edit-rooms.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-rooms.page.scss */ "./src/app/pages/edit/device/edit-rooms/edit-rooms.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_device_service__WEBPACK_IMPORTED_MODULE_2__["DeviceService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _services_room_service__WEBPACK_IMPORTED_MODULE_4__["RoomService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])
], EditRoomsPage);



/***/ })

}]);