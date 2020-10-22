(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-functions-timer-edit-timer-list-edit-timer-list-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/functions/timer/edit-timer-list/edit-timer-list.page.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/functions/timer/edit-timer-list/edit-timer-list.page.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Voltar\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Timer</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"addTimer()\">\n    <ion-fab-button>\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <ng-container *ngFor=\"let timer of Timers\">\n    <ion-item lines=\"none\" mode=\"md\">\n      <ion-label>\n        <ion-label>\n          <ion-icon name=\"time-outline\"></ion-icon> {{timer.timer}}\n        </ion-label>\n        <ion-label>\n          <ion-icon name=\"calendar-outline\"></ion-icon> <span *ngIf=\"timer.week1 === 'seg'\">Seg</span>\n          <span *ngIf=\"timer.week2 === 'ter'\">Ter</span> <span *ngIf=\"timer.week3 === 'qua'\">Qua</span>\n          <span *ngIf=\"timer.week4 === 'qui'\">Qui</span> <span *ngIf=\"timer.week5 === 'sex'\">Sex</span>\n          <span *ngIf=\"timer.week6 === 'sab'\">Sáb</span> <span *ngIf=\"timer.week7 === 'dom'\">Dom</span>\n        </ion-label>\n        <ion-label>\n          <ion-icon name=\"flash-outline\"></ion-icon> {{timer.action}}\n        </ion-label>\n      </ion-label>\n\n      <div>\n\n        <button class=\"transparent\" ion-button clear [routerLink]=\"['/edit-timer-page/', mac, timer.$key]\">\n          <ion-icon name=\"create\" style=\"zoom:2.0\"></ion-icon>\n        </button>\n\n        <button class=\"transparent\" ion-button clear (click)=\"deleteTimer(mac, timer.$key)\">\n          <ion-icon name=\"trash\" style=\"zoom:2.0\"></ion-icon>\n        </button>\n\n      </div>\n    </ion-item>\n  </ng-container>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/functions/timer/edit-timer-list/edit-timer-list-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/functions/timer/edit-timer-list/edit-timer-list-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: EditTimerListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTimerListPageRoutingModule", function() { return EditTimerListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _edit_timer_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-timer-list.page */ "./src/app/pages/functions/timer/edit-timer-list/edit-timer-list.page.ts");




const routes = [
    {
        path: '',
        component: _edit_timer_list_page__WEBPACK_IMPORTED_MODULE_3__["EditTimerListPage"]
    }
];
let EditTimerListPageRoutingModule = class EditTimerListPageRoutingModule {
};
EditTimerListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditTimerListPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/functions/timer/edit-timer-list/edit-timer-list.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/functions/timer/edit-timer-list/edit-timer-list.module.ts ***!
  \*********************************************************************************/
/*! exports provided: EditTimerListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTimerListPageModule", function() { return EditTimerListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _edit_timer_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-timer-list-routing.module */ "./src/app/pages/functions/timer/edit-timer-list/edit-timer-list-routing.module.ts");
/* harmony import */ var _edit_timer_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-timer-list.page */ "./src/app/pages/functions/timer/edit-timer-list/edit-timer-list.page.ts");







let EditTimerListPageModule = class EditTimerListPageModule {
};
EditTimerListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_timer_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditTimerListPageRoutingModule"]
        ],
        declarations: [_edit_timer_list_page__WEBPACK_IMPORTED_MODULE_6__["EditTimerListPage"]]
    })
], EditTimerListPageModule);



/***/ }),

/***/ "./src/app/pages/functions/timer/edit-timer-list/edit-timer-list.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/functions/timer/edit-timer-list/edit-timer-list.page.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::-webkit-scrollbar,\n*::-webkit-scrollbar {\n  display: none;\n}\n\nion-label {\n  font-weight: bolder;\n}\n\n.transparent {\n  background-color: transparent;\n}\n\nion-toolbar ion-button {\n  --background: transparent;\n  --box-shadow: transparent;\n}\n\nion-toolbar ion-button ion-icon {\n  color: white;\n}\n\nion-content {\n  --ion-text-color: #fff;\n}\n\nion-content ion-icon {\n  color: white;\n}\n\nion-item {\n  --background: rgb(43, 53, 102, 0.7);\n}\n\nspan {\n  border-style: solid;\n  border-width: 1px 1px 1px 1px;\n  border-radius: 10px;\n  padding: 0 3px;\n  margin: 0 2px;\n  font-size: 8px;\n}\n\nion-item ion-label ion-label ion-icon {\n  font-size: 14px;\n}\n\nion-item ion-label ion-label {\n  font-size: 14px;\n}\n\nion-label ion-label {\n  text-transform: capitalize;\n}\n\n@media (min-width: 720px) {\n  ion-content ion-segment ion-label {\n    font-size: 18px;\n  }\n  ion-content ion-item ion-label strong {\n    font-size: 24px;\n  }\n  ion-content ion-item ion-label ion-icon {\n    font-size: 24px;\n  }\n  ion-content ion-item ion-label ion-label ion-icon {\n    font-size: 20px;\n  }\n  ion-content ion-item ion-label ion-label {\n    font-size: 14px;\n  }\n  ion-content span {\n    border-style: solid;\n    border-width: 1px;\n    border-radius: 10px;\n    padding: 0 3px;\n    margin: 0 2px;\n    font-size: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZnVuY3Rpb25zL3RpbWVyL2VkaXQtdGltZXItbGlzdC9DOlxcSW9uaWNcXEFwcFRDQy9zcmNcXGFwcFxccGFnZXNcXGZ1bmN0aW9uc1xcdGltZXJcXGVkaXQtdGltZXItbGlzdFxcZWRpdC10aW1lci1saXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZnVuY3Rpb25zL3RpbWVyL2VkaXQtdGltZXItbGlzdC9lZGl0LXRpbWVyLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVJLGFBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSw2QkFBQTtBQ0NKOztBREdJO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtBQ0FSOztBREVRO0VBQ0ksWUFBQTtBQ0FaOztBREtBO0VBRUksc0JBQUE7QUNISjs7QURLSTtFQUNJLFlBQUE7QUNIUjs7QURPQTtFQUNJLG1DQUFBO0FDSko7O0FET0E7RUFDSSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNKSjs7QURPQTtFQUNJLGVBQUE7QUNKSjs7QURPQTtFQUNJLGVBQUE7QUNKSjs7QURRQTtFQUNJLDBCQUFBO0FDTEo7O0FEUUE7RUFHUTtJQUNJLGVBQUE7RUNQVjtFRFVNO0lBQ0ksZUFBQTtFQ1JWO0VEV007SUFDSSxlQUFBO0VDVFY7RURZTTtJQUNJLGVBQUE7RUNWVjtFRGFNO0lBQ0ksZUFBQTtFQ1hWO0VEY007SUFDSSxtQkFBQTtJQUNBLGlCQUFBO0lBQ0EsbUJBQUE7SUFDQSxjQUFBO0lBQ0EsYUFBQTtJQUNBLGVBQUE7RUNaVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZnVuY3Rpb25zL3RpbWVyL2VkaXQtdGltZXItbGlzdC9lZGl0LXRpbWVyLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjotd2Via2l0LXNjcm9sbGJhcixcclxuKjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuaW9uLWxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuXHJcbi50cmFuc3BhcmVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAtLWJveC1zaGFkb3c6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuXHJcbiAgICAtLWlvbi10ZXh0LWNvbG9yOiAjZmZmO1xyXG5cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiKDQzLCA1MywgMTAyLCAwLjcpO1xyXG59XHJcblxyXG5zcGFuIHtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDFweCAxcHggMXB4IDFweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDNweDtcclxuICAgIG1hcmdpbjogMCAycHg7XHJcbiAgICBmb250LXNpemU6IDhweDtcclxufVxyXG5cclxuaW9uLWl0ZW0gaW9uLWxhYmVsIGlvbi1sYWJlbCBpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbmlvbi1pdGVtIGlvbi1sYWJlbCBpb24tbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG5cclxuaW9uLWxhYmVsIGlvbi1sYWJlbCB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDcyMHB4KSB7XHJcbiAgICBpb24tY29udGVudCB7XHJcblxyXG4gICAgICAgIGlvbi1zZWdtZW50IGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1pdGVtIGlvbi1sYWJlbCBzdHJvbmcge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24taXRlbSBpb24tbGFiZWwgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24taXRlbSBpb24tbGFiZWwgaW9uLWxhYmVsIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWl0ZW0gaW9uLWxhYmVsIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgICAgICBib3JkZXItd2lkdGg6IDFweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAzcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAycHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCI6Oi13ZWJraXQtc2Nyb2xsYmFyLFxuKjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5pb24tbGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4udHJhbnNwYXJlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYm94LXNoYWRvdzogdHJhbnNwYXJlbnQ7XG59XG5pb24tdG9vbGJhciBpb24tYnV0dG9uIGlvbi1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5pb24tY29udGVudCB7XG4gIC0taW9uLXRleHQtY29sb3I6ICNmZmY7XG59XG5pb24tY29udGVudCBpb24taWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHJnYig0MywgNTMsIDEwMiwgMC43KTtcbn1cblxuc3BhbiB7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMXB4IDFweCAxcHggMXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAwIDNweDtcbiAgbWFyZ2luOiAwIDJweDtcbiAgZm9udC1zaXplOiA4cHg7XG59XG5cbmlvbi1pdGVtIGlvbi1sYWJlbCBpb24tbGFiZWwgaW9uLWljb24ge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmlvbi1pdGVtIGlvbi1sYWJlbCBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmlvbi1sYWJlbCBpb24tbGFiZWwge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDcyMHB4KSB7XG4gIGlvbi1jb250ZW50IGlvbi1zZWdtZW50IGlvbi1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG4gIGlvbi1jb250ZW50IGlvbi1pdGVtIGlvbi1sYWJlbCBzdHJvbmcge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuICBpb24tY29udGVudCBpb24taXRlbSBpb24tbGFiZWwgaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxuICBpb24tY29udGVudCBpb24taXRlbSBpb24tbGFiZWwgaW9uLWxhYmVsIGlvbi1pY29uIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbiAgaW9uLWNvbnRlbnQgaW9uLWl0ZW0gaW9uLWxhYmVsIGlvbi1sYWJlbCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG4gIGlvbi1jb250ZW50IHNwYW4ge1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBwYWRkaW5nOiAwIDNweDtcbiAgICBtYXJnaW46IDAgMnB4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/functions/timer/edit-timer-list/edit-timer-list.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/functions/timer/edit-timer-list/edit-timer-list.page.ts ***!
  \*******************************************************************************/
/*! exports provided: EditTimerListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTimerListPage", function() { return EditTimerListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_timer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/timer.service */ "./src/app/services/timer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let EditTimerListPage = class EditTimerListPage {
    constructor(timerService, alertCtrl, router, actRoute) {
        this.timerService = timerService;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.actRoute = actRoute;
        // Declaração de variáveis
        this.Timers = [];
        this.mac = this.actRoute.snapshot.paramMap.get('mac');
    }
    ngOnInit() { }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.getTimers();
        });
    }
    getTimers() {
        const timerRes = this.timerService.getTimerList(this.mac);
        // Pega os valores da lista de dispositivos
        timerRes.snapshotChanges().subscribe(res => {
            // "Subscreve" a variável devices com os dispostivos e seus valores
            this.Timers = [];
            res.forEach(item => {
                const a = item.payload.toJSON();
                a['$key'] = item.key;
                this.Timers.push(a);
            });
        });
    }
    // Função para deletar o timer
    deleteTimer(mac, timer) {
        this.presentAlertConfirm(mac, timer);
    }
    // Função para adicionar um timer
    addTimer() {
        this.router.navigate(['/add-timer-page/', this.mac]);
    }
    // Função para verificar se o usuário deseja mesmo excluir o timer
    presentAlertConfirm(mac, timer) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'EXCLUIR!',
                message: 'Deseja excluir o timer?',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel'
                    }, {
                        text: 'Confirmar',
                        handler: () => {
                            this.timerService.deleteTimer(mac, timer);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
EditTimerListPage.ctorParameters = () => [
    { type: src_app_services_timer_service__WEBPACK_IMPORTED_MODULE_3__["TimerService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
EditTimerListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-edit-timer-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-timer-list.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/functions/timer/edit-timer-list/edit-timer-list.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-timer-list.page.scss */ "./src/app/pages/functions/timer/edit-timer-list/edit-timer-list.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_timer_service__WEBPACK_IMPORTED_MODULE_3__["TimerService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
], EditTimerListPage);



/***/ })

}]);