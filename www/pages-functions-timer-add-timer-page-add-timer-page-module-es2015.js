(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-functions-timer-add-timer-page-add-timer-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/functions/timer/add-timer-page/add-timer-page.page.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/functions/timer/add-timer-page/add-timer-page.page.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Criar Timer\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"timerForm\">\n    <ion-item lines=\"full\">\n      <ion-label position=\"stacked\">Ação</ion-label>\n      <ion-select formControlName=\"action\" [(ngModel)]=\"action\" id=\"week\" interface=\"alert\" required>\n        <ion-select-option value=\"ligar\">Ligar</ion-select-option>\n        <ion-select-option value=\"desligar\">Desligar</ion-select-option>\n      </ion-select>\n      <ng-container *ngFor=\"let erro of mensagens_validacao.action\">\n        <span class=\"msg-erro\"\n          *ngIf=\"timerForm.get('action').hasError(erro.tipo) && (timerForm.get('action').dirty || timerForm.get('action').touched)\">\n          {{ erro.mensagem }}\n        </span>\n      </ng-container>\n    </ion-item>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"stacked\">Horário do Timer</ion-label>\n      <ion-input formControlName=\"dateTime\" type=\"time\" [(ngModel)]=\"dateTime\" step=\"1\" required>\n      </ion-input>\n      <ng-container *ngFor=\"let erro of mensagens_validacao.dateTime\">\n        <span class=\"msg-erro\"\n          *ngIf=\"timerForm.get('dateTime').hasError(erro.tipo) && (timerForm.get('dateTime').dirty || timerForm.get('dateTime').touched)\">\n          {{ erro.mensagem }}\n        </span>\n      </ng-container>\n    </ion-item>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"stacked\">Dias da Semana</ion-label>\n      <ion-select formControlName=\"newWeek\" multiple=\"true\" cancelText=\"Cancelar\" okText=\"Ok\" [(ngModel)]=\"newWeek\"\n        required>\n        <ion-select-option value=\"seg\">Seg</ion-select-option>\n        <ion-select-option value=\"ter\">Ter</ion-select-option>\n        <ion-select-option value=\"qua\">Qua</ion-select-option>\n        <ion-select-option value=\"qui\">Qui</ion-select-option>\n        <ion-select-option value=\"sex\">Sex</ion-select-option>\n        <ion-select-option value=\"sab\">Sab</ion-select-option>\n        <ion-select-option value=\"dom\">Dom</ion-select-option>\n      </ion-select>\n      <ng-container *ngFor=\"let erro of mensagens_validacao.newWeek\">\n        <span class=\"msg-erro\"\n          *ngIf=\"timerForm.get('newWeek').hasError(erro.tipo) && (timerForm.get('newWeek').dirty || timerForm.get('newWeek').touched)\">\n          {{ erro.mensagem }}\n        </span>\n      </ng-container>\n    </ion-item>\n\n    <ion-row>\n      <ion-col>\n        <ion-button color=\"primary\" shape=\"full\" expand=\"block\" (click)=\"criar()\" type=\"submit\"\n          [disabled]=\"!timerForm.valid\">Criar</ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/functions/timer/add-timer-page/add-timer-page-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/functions/timer/add-timer-page/add-timer-page-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: AddTimerPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTimerPagePageRoutingModule", function() { return AddTimerPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _add_timer_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-timer-page.page */ "./src/app/pages/functions/timer/add-timer-page/add-timer-page.page.ts");




const routes = [
    {
        path: '',
        component: _add_timer_page_page__WEBPACK_IMPORTED_MODULE_3__["AddTimerPagePage"]
    }
];
let AddTimerPagePageRoutingModule = class AddTimerPagePageRoutingModule {
};
AddTimerPagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddTimerPagePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/functions/timer/add-timer-page/add-timer-page.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/functions/timer/add-timer-page/add-timer-page.module.ts ***!
  \*******************************************************************************/
/*! exports provided: AddTimerPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTimerPagePageModule", function() { return AddTimerPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _add_timer_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-timer-page-routing.module */ "./src/app/pages/functions/timer/add-timer-page/add-timer-page-routing.module.ts");
/* harmony import */ var _add_timer_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-timer-page.page */ "./src/app/pages/functions/timer/add-timer-page/add-timer-page.page.ts");







let AddTimerPagePageModule = class AddTimerPagePageModule {
};
AddTimerPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _add_timer_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddTimerPagePageRoutingModule"]
        ],
        declarations: [_add_timer_page_page__WEBPACK_IMPORTED_MODULE_6__["AddTimerPagePage"]]
    })
], AddTimerPagePageModule);



/***/ }),

/***/ "./src/app/pages/functions/timer/add-timer-page/add-timer-page.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/functions/timer/add-timer-page/add-timer-page.page.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --background: rgb(43, 53, 102, 0.7);\n}\n\nion-icon {\n  color: white;\n}\n\n.msg-erro {\n  color: #ff0000;\n  font-size: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZnVuY3Rpb25zL3RpbWVyL2FkZC10aW1lci1wYWdlL0M6XFxJb25pY1xcQXBwVENDL3NyY1xcYXBwXFxwYWdlc1xcZnVuY3Rpb25zXFx0aW1lclxcYWRkLXRpbWVyLXBhZ2VcXGFkZC10aW1lci1wYWdlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZnVuY3Rpb25zL3RpbWVyL2FkZC10aW1lci1wYWdlL2FkZC10aW1lci1wYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1DQUFBO0FDQ0o7O0FERUE7RUFDSSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZnVuY3Rpb25zL3RpbWVyL2FkZC10aW1lci1wYWdlL2FkZC10aW1lci1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiKDQzLCA1MywgMTAyLCAwLjcpO1xyXG59XHJcblxyXG5pb24taWNvbiB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tc2ctZXJybyB7XHJcbiAgICBjb2xvcjogI2ZmMDAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxufSIsImlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2IoNDMsIDUzLCAxMDIsIDAuNyk7XG59XG5cbmlvbi1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ubXNnLWVycm8ge1xuICBjb2xvcjogI2ZmMDAwMDtcbiAgZm9udC1zaXplOiAxMXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/functions/timer/add-timer-page/add-timer-page.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/functions/timer/add-timer-page/add-timer-page.page.ts ***!
  \*****************************************************************************/
/*! exports provided: AddTimerPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTimerPagePage", function() { return AddTimerPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_timer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/timer.service */ "./src/app/services/timer.service.ts");






let AddTimerPagePage = class AddTimerPagePage {
    constructor(timerService, actRoute, router, fb, actionSheetController, toastController) {
        this.timerService = timerService;
        this.actRoute = actRoute;
        this.router = router;
        this.fb = fb;
        this.actionSheetController = actionSheetController;
        this.toastController = toastController;
        this.dateTime = '';
        this.action = '';
        this.mensagens_validacao = {
            action: [
                { tipo: 'required', mensagem: 'O campo ação é obrigatório!' },
            ],
            dateTime: [
                { tipo: 'required', mensagem: 'O campo horário é obrigatório!' },
            ],
            newWeek: [
                { tipo: 'required', mensagem: 'O campo dias da semana é obrigatório!' },
            ]
        };
        // Atribui a variável 'mac' uma "foto" da rota, mais especificamente do 'mac'
        this.mac = this.actRoute.snapshot.paramMap.get('mac');
        this.timerForm = fb.group({
            action: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            dateTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            newWeek: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
        });
    }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.getTimerNumber();
        });
    }
    // Função para quando a página for iniciada
    ngOnInit() { }
    getTimerNumber() {
        this.timerService.getTimerNumber(this.mac).valueChanges().subscribe(res => {
            console.log(res);
            this.timernumber = res;
        });
    }
    // Função para verificar os dados do timer
    criar() {
        const segunda = this.newWeek.indexOf('seg');
        const terca = this.newWeek.indexOf('ter');
        const quarta = this.newWeek.indexOf('qua');
        const quinta = this.newWeek.indexOf('qui');
        const sexta = this.newWeek.indexOf('sex');
        const sabado = this.newWeek.indexOf('sab');
        const domingo = this.newWeek.indexOf('dom');
        if (segunda !== -1) {
            this.week1 = 'seg';
        }
        else {
            this.week1 = '';
        }
        if (terca !== -1) {
            this.week2 = 'ter';
        }
        else {
            this.week2 = '';
        }
        if (quarta !== -1) {
            this.week3 = 'qua';
        }
        else {
            this.week3 = '';
        }
        if (quinta !== -1) {
            this.week4 = 'qui';
        }
        else {
            this.week4 = '';
        }
        if (sexta !== -1) {
            this.week5 = 'sex';
        }
        else {
            this.week5 = '';
        }
        if (sabado !== -1) {
            this.week6 = 'sab';
        }
        else {
            this.week6 = '';
        }
        if (domingo !== -1) {
            this.week7 = 'dom';
        }
        else {
            this.week7 = '';
        }
        if (this.timerForm.valid) {
            this.addForm();
        }
        else {
            this.alert('Formulário Inválido');
        }
    }
    // Função para atualizar/criar o timer
    addForm() {
        this.timerService.addTimer(this.action, this.dateTime, this.week1, this.week2, this.week3, this.week4, this.week5, this.week6, this.week7, this.mac, this.timernumber)
            .then(() => {
            this.timernumber = this.timernumber + 1;
            this.timerService.addTimerNumber(this.mac, this.timernumber);
            this.router.navigate(['/edit-timer-list', this.mac]);
        })
            .catch(error => console.log(error));
    }
    // Função para aparecer um ion-toast (perfumaria).
    alert(mensage) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                header: mensage,
                duration: 2000
            });
            yield toast.present();
        });
    }
};
AddTimerPagePage.ctorParameters = () => [
    { type: src_app_services_timer_service__WEBPACK_IMPORTED_MODULE_5__["TimerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
AddTimerPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-timer-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-timer-page.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/functions/timer/add-timer-page/add-timer-page.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-timer-page.page.scss */ "./src/app/pages/functions/timer/add-timer-page/add-timer-page.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_timer_service__WEBPACK_IMPORTED_MODULE_5__["TimerService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
], AddTimerPagePage);



/***/ })

}]);