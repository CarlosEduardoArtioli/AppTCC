(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-room-edit-icon-room-edit-icon-room-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit/room/edit-icon-room/edit-icon-room.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit/room/edit-icon-room/edit-icon-room.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Voltar\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Icones</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item lines=\"full\" (click)=\"update('/assets/svg/casa.svg', 'Casa')\">\n    <ion-label>\n      <h2>\n        <ion-icon src=\"/assets/svg/casa.svg\"></ion-icon>&nbsp;&nbsp;Casa\n      </h2>\n    </ion-label>\n  </ion-item>\n  <ion-item lines=\"full\" (click)=\"update('/assets/svg/cozinha.svg', 'Cozinha')\">\n    <ion-label>\n      <h2>\n        <ion-icon src=\"/assets/svg/cozinha.svg\"></ion-icon>&nbsp;&nbsp;Cozinha\n      </h2>\n    </ion-label>\n  </ion-item>\n  <ion-item lines=\"full\" (click)=\"update('/assets/svg/quarto.svg', 'Quarto')\">\n    <ion-label>\n      <h2>\n        <ion-icon src=\"/assets/svg/quarto.svg\"></ion-icon>&nbsp;&nbsp;Quarto\n      </h2>\n    </ion-label>\n  </ion-item>\n  <ion-item lines=\"full\" (click)=\"update('/assets/svg/jardim.svg', 'Jardim')\">\n    <ion-label>\n      <h2>\n        <ion-icon src=\"/assets/svg/jardim.svg\"></ion-icon>&nbsp;&nbsp;Jardim\n      </h2>\n    </ion-label>\n  </ion-item>\n  <ion-item lines=\"full\" (click)=\"update('/assets/svg/banheiro.svg', 'Banheiro')\">\n    <ion-label>\n      <h2>\n        <ion-icon src=\"/assets/svg/banheiro.svg\"></ion-icon>&nbsp;&nbsp;Banheiro\n      </h2>\n    </ion-label>\n  </ion-item>\n  <ion-item lines=\"full\" (click)=\"update('/assets/svg/sala.svg', 'Sala')\">\n    <ion-label>\n      <h2>\n        <ion-icon src=\"/assets/svg/sala.svg\"></ion-icon>&nbsp;&nbsp;Sala\n      </h2>\n    </ion-label>\n  </ion-item>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/edit/room/edit-icon-room/edit-icon-room-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/edit/room/edit-icon-room/edit-icon-room-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: EditIconRoomPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditIconRoomPageRoutingModule", function() { return EditIconRoomPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _edit_icon_room_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-icon-room.page */ "./src/app/pages/edit/room/edit-icon-room/edit-icon-room.page.ts");




const routes = [
    {
        path: '',
        component: _edit_icon_room_page__WEBPACK_IMPORTED_MODULE_3__["EditIconRoomPage"]
    }
];
let EditIconRoomPageRoutingModule = class EditIconRoomPageRoutingModule {
};
EditIconRoomPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditIconRoomPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/edit/room/edit-icon-room/edit-icon-room.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/edit/room/edit-icon-room/edit-icon-room.module.ts ***!
  \*************************************************************************/
/*! exports provided: EditIconRoomPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditIconRoomPageModule", function() { return EditIconRoomPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _edit_icon_room_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-icon-room-routing.module */ "./src/app/pages/edit/room/edit-icon-room/edit-icon-room-routing.module.ts");
/* harmony import */ var _edit_icon_room_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-icon-room.page */ "./src/app/pages/edit/room/edit-icon-room/edit-icon-room.page.ts");







let EditIconRoomPageModule = class EditIconRoomPageModule {
};
EditIconRoomPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_icon_room_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditIconRoomPageRoutingModule"]
        ],
        declarations: [_edit_icon_room_page__WEBPACK_IMPORTED_MODULE_6__["EditIconRoomPage"]]
    })
], EditIconRoomPageModule);



/***/ }),

/***/ "./src/app/pages/edit/room/edit-icon-room/edit-icon-room.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/edit/room/edit-icon-room/edit-icon-room.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-icon {\n  color: white;\n}\n\nion-item {\n  --background: rgb(43, 53, 102, 0.7);\n}\n\n@media (min-width: 720px) {\n  ion-icon {\n    font-size: 30px;\n  }\n\n  h2 {\n    font-size: 24px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWRpdC9yb29tL2VkaXQtaWNvbi1yb29tL0M6XFxJb25pY1xcQXBwVENDL3NyY1xcYXBwXFxwYWdlc1xcZWRpdFxccm9vbVxcZWRpdC1pY29uLXJvb21cXGVkaXQtaWNvbi1yb29tLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZWRpdC9yb29tL2VkaXQtaWNvbi1yb29tL2VkaXQtaWNvbi1yb29tLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLG1DQUFBO0FDQ0o7O0FERUE7RUFFSTtJQUNJLGVBQUE7RUNBTjs7RURHRTtJQUNJLGVBQUE7RUNBTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZWRpdC9yb29tL2VkaXQtaWNvbi1yb29tL2VkaXQtaWNvbi1yb29tLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29uIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoNDMsIDUzLCAxMDIsIDAuNyk7XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3MjBweCkge1xyXG5cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIH1cclxufSIsImlvbi1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDQzLCA1MywgMTAyLCAwLjcpO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzIwcHgpIHtcbiAgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgfVxuXG4gIGgyIHtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/edit/room/edit-icon-room/edit-icon-room.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/edit/room/edit-icon-room/edit-icon-room.page.ts ***!
  \***********************************************************************/
/*! exports provided: EditIconRoomPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditIconRoomPage", function() { return EditIconRoomPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_room_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/room.service */ "./src/app/services/room.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");





let EditIconRoomPage = class EditIconRoomPage {
    constructor(roomService, router, actRoute, toastController) {
        this.roomService = roomService;
        this.router = router;
        this.actRoute = actRoute;
        this.toastController = toastController;
        // Atribui a variável 'room' uma "foto" da rota, mais especificamente do 'room'
        this.room = this.actRoute.snapshot.paramMap.get('room');
    }
    ngOnInit() { }
    // Função para atualizar o icone do cômodo
    update(icone, iconName) {
        this.roomService.updateIcon(icone, iconName, this.room)
            .then(() => {
            this.router.navigate(['edit-room-page/', this.room]);
            this.changeIcon();
        })
            .catch(error => console.log(error));
    }
    // Função para aparecer um ion-toast após alterar o icone(perfumaria).
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
EditIconRoomPage.ctorParameters = () => [
    { type: src_app_services_room_service__WEBPACK_IMPORTED_MODULE_3__["RoomService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
EditIconRoomPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-icon-room',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-icon-room.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit/room/edit-icon-room/edit-icon-room.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-icon-room.page.scss */ "./src/app/pages/edit/room/edit-icon-room/edit-icon-room.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_room_service__WEBPACK_IMPORTED_MODULE_3__["RoomService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
], EditIconRoomPage);



/***/ })

}]);