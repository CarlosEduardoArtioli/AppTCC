(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-room-edit-room-list-edit-room-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit/room/edit-room-list/edit-room-list.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit/room/edit-room-list/edit-room-list.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Cômodos\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"addRoom()\">\r\n    <ion-fab-button>\r\n      <ion-icon name=\"add\"></ion-icon>\r\n    </ion-fab-button>\r\n  </ion-fab>\r\n\r\n  <ion-item *ngFor=\"let room of Rooms\" lines=\"full\">\r\n    <ion-label>\r\n      <h2>\r\n        <ion-icon src=\"{{ room.icon }}\"></ion-icon>&nbsp;&nbsp;{{room.name}}\r\n      </h2>\r\n    </ion-label>\r\n\r\n    <div class=\"buttons\">\r\n      <button class=\"transparent\" ion-button clear [routerLink]=\"['/edit-room-page/', room.$key]\">\r\n        <ion-icon name=\"create\" style=\"zoom:2.0\"></ion-icon>\r\n      </button>\r\n\r\n      <button class=\"transparent\" ion-button clear (click)=\"deleteRoom(room.$key)\">\r\n        <ion-icon name=\"trash\" style=\"zoom:2.0\"></ion-icon>\r\n      </button>\r\n    </div>\r\n\r\n  </ion-item>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/edit/room/edit-room-list/edit-room-list-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/edit/room/edit-room-list/edit-room-list-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: EditRoomListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRoomListPageRoutingModule", function() { return EditRoomListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _edit_room_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-room-list.page */ "./src/app/pages/edit/room/edit-room-list/edit-room-list.page.ts");




const routes = [
    {
        path: '',
        component: _edit_room_list_page__WEBPACK_IMPORTED_MODULE_3__["EditRoomListPage"]
    }
];
let EditRoomListPageRoutingModule = class EditRoomListPageRoutingModule {
};
EditRoomListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditRoomListPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/edit/room/edit-room-list/edit-room-list.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/edit/room/edit-room-list/edit-room-list.module.ts ***!
  \*************************************************************************/
/*! exports provided: EditRoomListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRoomListPageModule", function() { return EditRoomListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _edit_room_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-room-list-routing.module */ "./src/app/pages/edit/room/edit-room-list/edit-room-list-routing.module.ts");
/* harmony import */ var _edit_room_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-room-list.page */ "./src/app/pages/edit/room/edit-room-list/edit-room-list.page.ts");







let EditRoomListPageModule = class EditRoomListPageModule {
};
EditRoomListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_room_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditRoomListPageRoutingModule"]
        ],
        declarations: [_edit_room_list_page__WEBPACK_IMPORTED_MODULE_6__["EditRoomListPage"]]
    })
], EditRoomListPageModule);



/***/ }),

/***/ "./src/app/pages/edit/room/edit-room-list/edit-room-list.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/edit/room/edit-room-list/edit-room-list.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".transparent {\n  background-color: transparent;\n}\n\nion-icon {\n  color: white;\n}\n\nion-item {\n  --background: rgb(43, 53, 102, 0.7);\n}\n\n@media (min-width: 720px) {\n  .buttons button ion-icon {\n    font-size: 18px;\n  }\n\n  ion-item ion-label h2 ion-icon {\n    font-size: 36px;\n  }\n\n  ion-item ion-label h2 {\n    font-size: 28px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWRpdC9yb29tL2VkaXQtcm9vbS1saXN0L0M6XFxJb25pY1xcQXBwVENDL3NyY1xcYXBwXFxwYWdlc1xcZWRpdFxccm9vbVxcZWRpdC1yb29tLWxpc3RcXGVkaXQtcm9vbS1saXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZWRpdC9yb29tL2VkaXQtcm9vbS1saXN0L2VkaXQtcm9vbS1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxtQ0FBQTtBQ0NKOztBREVBO0VBQ0k7SUFDSSxlQUFBO0VDQ047O0VERUU7SUFDSSxlQUFBO0VDQ047O0VERUU7SUFDSSxlQUFBO0VDQ047QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkaXQvcm9vbS9lZGl0LXJvb20tbGlzdC9lZGl0LXJvb20tbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJhbnNwYXJlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoNDMsIDUzLCAxMDIsIDAuNyk7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3MjBweCkge1xyXG4gICAgLmJ1dHRvbnMgYnV0dG9uIGlvbi1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWl0ZW0gaW9uLWxhYmVsIGgyIGlvbi1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWl0ZW0gaW9uLWxhYmVsIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICB9XHJcbn0iLCIudHJhbnNwYXJlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLWljb24ge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoNDMsIDUzLCAxMDIsIDAuNyk7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3MjBweCkge1xuICAuYnV0dG9ucyBidXR0b24gaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuXG4gIGlvbi1pdGVtIGlvbi1sYWJlbCBoMiBpb24taWNvbiB7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICB9XG5cbiAgaW9uLWl0ZW0gaW9uLWxhYmVsIGgyIHtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/edit/room/edit-room-list/edit-room-list.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/edit/room/edit-room-list/edit-room-list.page.ts ***!
  \***********************************************************************/
/*! exports provided: EditRoomListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRoomListPage", function() { return EditRoomListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_room_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/room.service */ "./src/app/services/room.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");




let EditRoomListPage = class EditRoomListPage {
    constructor(roomService, alertCtrl, toastController) {
        this.roomService = roomService;
        this.alertCtrl = alertCtrl;
        this.toastController = toastController;
        // Declaração de variáveis
        this.Rooms = [];
    }
    // Função quando a página é iniciada
    ngOnInit() { }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.getRooms();
        });
    }
    getRooms() {
        // Atribui a variávei 'roomRes' o seguinte valor
        // Puxa a função 'getRoomList'
        const roomRes = this.roomService.getRoomList();
        // Pega os valores da lista de cômodos
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
    // Funcão para aparecer o alert com o input que irá receber nome do cômodo.
    addRoom() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // Cria um alert
            const alert = yield this.alertCtrl.create({
                // Header com nome 'Novo Cômodo'.
                header: 'Novo Cômodo',
                // Gera inputs
                inputs: [
                    {
                        name: 'new-room',
                        id: 'newroom',
                        placeholder: 'Escreva o nome do Cômodo',
                        value: this.newRoom
                    },
                ],
                // Gera botões
                buttons: [
                    {
                        // Botão para cancelar
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: data => {
                        }
                    },
                    {
                        text: 'Salvar',
                        handler: data => {
                            // if apenas para saber se o input não está vázio.
                            if (document.getElementById('newroom').value !== '') {
                                // this.newRoom será igual ao que está valor do input com Id 'newroom'.
                                this.newRoom = document.getElementById('newroom').value;
                                // Puxa a função do ion-toast.
                                this.newroom();
                                // Função para criar o cômodo.
                                this.roomService.createRoom(this.newRoom, 'casa');
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // Função para aparecer um ion-toast após criar o novo cômodo (perfumaria).
    newroom() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                header: 'Cômodo Adicionado!',
                duration: 2000
            });
            yield toast.present();
        });
    }
    // Chama o alert controll e passa o cômodo
    deleteRoom(room) {
        this.presentAlertConfirm(room);
    }
    // Função para verificar se o usuário deseja mesmo excluir o cômodo
    presentAlertConfirm(room) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'EXCLUIR!',
                message: 'Deseja excluir o cômodo?',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel'
                    }, {
                        text: 'Confirmar',
                        handler: () => {
                            this.roomService.deleteRoom(room);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
EditRoomListPage.ctorParameters = () => [
    { type: _services_room_service__WEBPACK_IMPORTED_MODULE_2__["RoomService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
EditRoomListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-room-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-room-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit/room/edit-room-list/edit-room-list.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-room-list.page.scss */ "./src/app/pages/edit/room/edit-room-list/edit-room-list.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_room_service__WEBPACK_IMPORTED_MODULE_2__["RoomService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
], EditRoomListPage);



/***/ })

}]);