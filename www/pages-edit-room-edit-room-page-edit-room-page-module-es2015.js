(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-room-edit-room-page-edit-room-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit/room/edit-room-page/edit-room-page.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit/room/edit-room-page/edit-room-page.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"menu/edit-room-list\" text=\"Voltar\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Editar\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item lines=\"full\">\n    <ion-label>{{ name }}</ion-label>\n    <div class=\"button\">\n      <button class=\"transparent\" ion-button clear (click)=\"updateName()\">\n        <ion-icon name=\"pencil-outline\" style=\"zoom:2.0\"></ion-icon>\n      </button>\n    </div>\n  </ion-item>\n\n  <ion-item lines=\"full\">\n    <ion-icon src=\"{{ icon }}\"></ion-icon>\n    <ion-label>&nbsp;&nbsp;{{ iconName }}</ion-label>\n    <div class=\"button\">\n      <button class=\"transparent\" ion-button clear [routerLink]=\"['/edit-icon-room/', room]\">\n        <ion-icon name=\"file-tray-full-outline\" style=\"zoom:2.0\"></ion-icon>\n      </button>\n    </div>\n  </ion-item>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/edit/room/edit-room-page/edit-room-page-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/edit/room/edit-room-page/edit-room-page-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: EditRoomPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRoomPagePageRoutingModule", function() { return EditRoomPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _edit_room_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-room-page.page */ "./src/app/pages/edit/room/edit-room-page/edit-room-page.page.ts");




const routes = [
    {
        path: '',
        component: _edit_room_page_page__WEBPACK_IMPORTED_MODULE_3__["EditRoomPagePage"]
    }
];
let EditRoomPagePageRoutingModule = class EditRoomPagePageRoutingModule {
};
EditRoomPagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditRoomPagePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/edit/room/edit-room-page/edit-room-page.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/edit/room/edit-room-page/edit-room-page.module.ts ***!
  \*************************************************************************/
/*! exports provided: EditRoomPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRoomPagePageModule", function() { return EditRoomPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _edit_room_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-room-page-routing.module */ "./src/app/pages/edit/room/edit-room-page/edit-room-page-routing.module.ts");
/* harmony import */ var _edit_room_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-room-page.page */ "./src/app/pages/edit/room/edit-room-page/edit-room-page.page.ts");







let EditRoomPagePageModule = class EditRoomPagePageModule {
};
EditRoomPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_room_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditRoomPagePageRoutingModule"]
        ],
        declarations: [_edit_room_page_page__WEBPACK_IMPORTED_MODULE_6__["EditRoomPagePage"]]
    })
], EditRoomPagePageModule);



/***/ }),

/***/ "./src/app/pages/edit/room/edit-room-page/edit-room-page.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/edit/room/edit-room-page/edit-room-page.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --background: rgb(43, 53, 102, 0.7);\n}\n\nion-icon {\n  color: white;\n}\n\n.transparent {\n  background-color: transparent;\n}\n\n@media (min-width: 720px) {\n  ion-item .button button ion-icon {\n    font-size: 20px;\n  }\n\n  ion-item ion-icon {\n    font-size: 40px;\n  }\n\n  ion-item ion-label {\n    font-size: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWRpdC9yb29tL2VkaXQtcm9vbS1wYWdlL0M6XFxJb25pY1xcQXBwVENDL3NyY1xcYXBwXFxwYWdlc1xcZWRpdFxccm9vbVxcZWRpdC1yb29tLXBhZ2VcXGVkaXQtcm9vbS1wYWdlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZWRpdC9yb29tL2VkaXQtcm9vbS1wYWdlL2VkaXQtcm9vbS1wYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1DQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSw2QkFBQTtBQ0NKOztBREVBO0VBQ0k7SUFDSSxlQUFBO0VDQ047O0VERUU7SUFDSSxlQUFBO0VDQ047O0VERUU7SUFDSSxlQUFBO0VDQ047QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkaXQvcm9vbS9lZGl0LXJvb20tcGFnZS9lZGl0LXJvb20tcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYig0MywgNTMsIDEwMiwgMC43KTtcclxufVxyXG5cclxuaW9uLWljb24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4udHJhbnNwYXJlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3MjBweCkge1xyXG4gICAgaW9uLWl0ZW0gLmJ1dHRvbiBidXR0b24gaW9uLWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICBpb24taXRlbSBpb24taWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pdGVtIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgfVxyXG59IiwiaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHJnYig0MywgNTMsIDEwMiwgMC43KTtcbn1cblxuaW9uLWljb24ge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi50cmFuc3BhcmVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzIwcHgpIHtcbiAgaW9uLWl0ZW0gLmJ1dHRvbiBidXR0b24gaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuXG4gIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDQwcHg7XG4gIH1cblxuICBpb24taXRlbSBpb24tbGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/edit/room/edit-room-page/edit-room-page.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/edit/room/edit-room-page/edit-room-page.page.ts ***!
  \***********************************************************************/
/*! exports provided: EditRoomPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRoomPagePage", function() { return EditRoomPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_room_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/room.service */ "./src/app/services/room.service.ts");





let EditRoomPagePage = class EditRoomPagePage {
    constructor(roomService, actRoute, actionSheetController, alertCtrl, toastController) {
        this.roomService = roomService;
        this.actRoute = actRoute;
        this.actionSheetController = actionSheetController;
        this.alertCtrl = alertCtrl;
        this.toastController = toastController;
        // Atribui a variável 'room' uma "foto" da rota, mais especificamente do 'room'
        this.room = this.actRoute.snapshot.paramMap.get('room');
    }
    // Função para quando a página for iniciada
    ngOnInit() { }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.getRoom();
        });
    }
    getRoom() {
        this.roomService.getRoom(this.room).valueChanges().subscribe(res => {
            this.name = res.name;
            this.icon = res.icon;
            this.iconName = res.iconName;
        });
    }
    // Funcão para aparecer o alert com o input que irá receber o novo nome do cômodo.
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
                                // novoNome será igual ao que está valor do input com Id 'newname'.
                                this.novoNome = document.getElementById('newname').value;
                                // Puxa a função do ion-toast.
                                this.newname();
                                // Função para mudar o nome do cômodo.
                                this.roomService.updateName(this.novoNome, this.room);
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // Função para aparecer um ion-toast após salvar o novo nome do cômodo (perfumaria).
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
EditRoomPagePage.ctorParameters = () => [
    { type: src_app_services_room_service__WEBPACK_IMPORTED_MODULE_4__["RoomService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
];
EditRoomPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-room-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-room-page.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit/room/edit-room-page/edit-room-page.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-room-page.page.scss */ "./src/app/pages/edit/room/edit-room-page/edit-room-page.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_room_service__WEBPACK_IMPORTED_MODULE_4__["RoomService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]])
], EditRoomPagePage);



/***/ })

}]);