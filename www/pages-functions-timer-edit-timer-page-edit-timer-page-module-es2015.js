(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-functions-timer-edit-timer-page-edit-timer-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/functions/timer/edit-timer-page/edit-timer-page.page.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/functions/timer/edit-timer-page/edit-timer-page.page.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Voltar\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Editar Timer\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"updateTimerForm\">\n    <ion-item lines=\"full\">\n      <ion-label position=\"stacked\">Ação</ion-label>\n      <ion-select formControlName=\"action\" [(ngModel)]=\"action\" id=\"week\" interface=\"alert\" value=\"{{ action }}\"\n        required okText=\"Ok\" cancelText=\"Cancelar\">\n        <ion-select-option value=\"ligar\">Ligar</ion-select-option>\n        <ion-select-option value=\"desligar\">Desligar</ion-select-option>\n      </ion-select>\n      <ng-container *ngFor=\"let erro of mensagens_validacao.action\">\n        <span class=\"msg-erro\"\n          *ngIf=\"updateTimerForm.get('action').hasError(erro.tipo) && (updateTimerForm.get('action').dirty || updateTimerForm.get('action').touched)\">\n          {{ erro.mensagem }}\n        </span>\n      </ng-container>\n    </ion-item>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"stacked\">Horário do Timer</ion-label>\n      <ion-input formControlName=\"dateTime\" type=\"time\" [(ngModel)]=\"dateTime\" value=\"{{ dateTime }}\" step=\"1\" required>\n      </ion-input>\n      <ng-container *ngFor=\"let erro of mensagens_validacao.dateTime\">\n        <span class=\"msg-erro\"\n          *ngIf=\"updateTimerForm.get('dateTime').hasError(erro.tipo) && (updateTimerForm.get('dateTime').dirty || updateTimerForm.get('dateTime').touched)\">\n          {{ erro.mensagem }}\n        </span>\n      </ng-container>\n    </ion-item>\n\n    <ion-item lines=\"full\">\n      <ion-label position=\"stacked\">Dias da Semana</ion-label>\n      <ion-select formControlName=\"newWeek\" multiple=\"true\" cancelText=\"Cancelar\" okText=\"Ok\"\n        [value]=\"[week1, week2, week3, week4, week5, week6, week7]\" [(ngModel)]=\"newWeek\" required>\n        <ion-select-option value=\"seg\">Seg</ion-select-option>\n        <ion-select-option value=\"ter\">Ter</ion-select-option>\n        <ion-select-option value=\"qua\">Qua</ion-select-option>\n        <ion-select-option value=\"qui\">Qui</ion-select-option>\n        <ion-select-option value=\"sex\">Sex</ion-select-option>\n        <ion-select-option value=\"sab\">Sab</ion-select-option>\n        <ion-select-option value=\"dom\">Dom</ion-select-option>\n      </ion-select>\n      <ng-container *ngFor=\"let erro of mensagens_validacao.newWeek\">\n        <span class=\"msg-erro\"\n          *ngIf=\"updateTimerForm.get('newWeek').hasError(erro.tipo) && (updateTimerForm.get('newWeek').dirty || updateTimerForm.get('newWeek').touched)\">\n          {{ erro.mensagem }}\n        </span>\n      </ng-container>\n    </ion-item>\n\n    <ion-row>\n      <ion-col>\n        <ion-button color=\"primary\" shape=\"full\" expand=\"block\" (click)=\"atualizar()\" type=\"submit\"\n          [disabled]=\"!updateTimerForm.valid\">Atualizar</ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/functions/timer/edit-timer-page/edit-timer-page-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/functions/timer/edit-timer-page/edit-timer-page-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: EditTimerPagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTimerPagePageRoutingModule", function() { return EditTimerPagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _edit_timer_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-timer-page.page */ "./src/app/pages/functions/timer/edit-timer-page/edit-timer-page.page.ts");




const routes = [
    {
        path: '',
        component: _edit_timer_page_page__WEBPACK_IMPORTED_MODULE_3__["EditTimerPagePage"]
    }
];
let EditTimerPagePageRoutingModule = class EditTimerPagePageRoutingModule {
};
EditTimerPagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditTimerPagePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/functions/timer/edit-timer-page/edit-timer-page.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/functions/timer/edit-timer-page/edit-timer-page.module.ts ***!
  \*********************************************************************************/
/*! exports provided: EditTimerPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTimerPagePageModule", function() { return EditTimerPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _edit_timer_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-timer-page-routing.module */ "./src/app/pages/functions/timer/edit-timer-page/edit-timer-page-routing.module.ts");
/* harmony import */ var _edit_timer_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-timer-page.page */ "./src/app/pages/functions/timer/edit-timer-page/edit-timer-page.page.ts");







let EditTimerPagePageModule = class EditTimerPagePageModule {
};
EditTimerPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_timer_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditTimerPagePageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_edit_timer_page_page__WEBPACK_IMPORTED_MODULE_6__["EditTimerPagePage"]]
    })
], EditTimerPagePageModule);



/***/ }),

/***/ "./src/app/pages/functions/timer/edit-timer-page/edit-timer-page.page.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/functions/timer/edit-timer-page/edit-timer-page.page.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --background: rgb(43, 53, 102, 0.7);\n}\n\nion-icon {\n  color: white;\n}\n\n.msg-erro {\n  color: #ff0000;\n  font-size: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZnVuY3Rpb25zL3RpbWVyL2VkaXQtdGltZXItcGFnZS9DOlxcSW9uaWNcXEFwcFRDQy9zcmNcXGFwcFxccGFnZXNcXGZ1bmN0aW9uc1xcdGltZXJcXGVkaXQtdGltZXItcGFnZVxcZWRpdC10aW1lci1wYWdlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZnVuY3Rpb25zL3RpbWVyL2VkaXQtdGltZXItcGFnZS9lZGl0LXRpbWVyLXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUNBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mdW5jdGlvbnMvdGltZXIvZWRpdC10aW1lci1wYWdlL2VkaXQtdGltZXItcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYig0MywgNTMsIDEwMiwgMC43KTtcclxufVxyXG5cclxuaW9uLWljb24ge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubXNnLWVycm8ge1xyXG4gICAgY29sb3I6ICNmZjAwMDA7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbn0iLCJpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDQzLCA1MywgMTAyLCAwLjcpO1xufVxuXG5pb24taWNvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1zZy1lcnJvIHtcbiAgY29sb3I6ICNmZjAwMDA7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/functions/timer/edit-timer-page/edit-timer-page.page.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/functions/timer/edit-timer-page/edit-timer-page.page.ts ***!
  \*******************************************************************************/
/*! exports provided: EditTimerPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditTimerPagePage", function() { return EditTimerPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_timer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/timer.service */ "./src/app/services/timer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");






let EditTimerPagePage = class EditTimerPagePage {
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
        // Atribui a variável 'timer' uma "foto" da rota, mais especificamente do 'timer'
        this.timer = this.actRoute.snapshot.paramMap.get('timer');
        this.updateTimerForm = fb.group({
            action: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            dateTime: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
            newWeek: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
        });
    }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.getTimer();
        });
    }
    // Função para quando a página for iniciada
    ngOnInit() { }
    getTimer() {
        // Subscreve as variáveis com seus valores respectivos
        this.timerService.getTimer(this.timer, this.mac).valueChanges().subscribe(res => {
            this.action = res.action;
            this.dateTime = res.timer;
            this.week1 = res.week1;
            this.week2 = res.week2;
            this.week3 = res.week3;
            this.week4 = res.week4;
            this.week5 = res.week5;
            this.week6 = res.week6;
            this.week7 = res.week7;
            console.log(res);
        });
    }
    // Função para verificar os dados do timer
    atualizar() {
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
        if (this.updateTimerForm.valid) {
            this.updateForm();
        }
        else {
            this.alert('Formulário Inválido');
        }
    }
    // Função para atualizar/criar o timer
    updateForm() {
        this.timerService.addTimer(this.action, this.dateTime, this.week1, this.week2, this.week3, this.week4, this.week5, this.week6, this.week7, this.mac, this.timer)
            .then(() => {
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
EditTimerPagePage.ctorParameters = () => [
    { type: src_app_services_timer_service__WEBPACK_IMPORTED_MODULE_3__["TimerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
EditTimerPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-timer-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-timer-page.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/functions/timer/edit-timer-page/edit-timer-page.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-timer-page.page.scss */ "./src/app/pages/functions/timer/edit-timer-page/edit-timer-page.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_timer_service__WEBPACK_IMPORTED_MODULE_3__["TimerService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])
], EditTimerPagePage);



/***/ })

}]);