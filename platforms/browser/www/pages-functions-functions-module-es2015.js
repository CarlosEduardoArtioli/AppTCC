(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-functions-functions-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/functions/functions.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/functions/functions.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>functions</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/functions/functions-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/functions/functions-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: FunctionsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionsPageRoutingModule", function() { return FunctionsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _functions_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions.page */ "./src/app/pages/functions/functions.page.ts");




const routes = [
    {
        path: '',
        component: _functions_page__WEBPACK_IMPORTED_MODULE_3__["FunctionsPage"]
    }
];
let FunctionsPageRoutingModule = class FunctionsPageRoutingModule {
};
FunctionsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FunctionsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/functions/functions.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/functions/functions.module.ts ***!
  \*****************************************************/
/*! exports provided: FunctionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionsPageModule", function() { return FunctionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _functions_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions-routing.module */ "./src/app/pages/functions/functions-routing.module.ts");
/* harmony import */ var _functions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./functions.page */ "./src/app/pages/functions/functions.page.ts");







let FunctionsPageModule = class FunctionsPageModule {
};
FunctionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _functions_routing_module__WEBPACK_IMPORTED_MODULE_5__["FunctionsPageRoutingModule"]
        ],
        declarations: [_functions_page__WEBPACK_IMPORTED_MODULE_6__["FunctionsPage"]]
    })
], FunctionsPageModule);



/***/ }),

/***/ "./src/app/pages/functions/functions.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/functions/functions.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Z1bmN0aW9ucy9mdW5jdGlvbnMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/functions/functions.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/functions/functions.page.ts ***!
  \***************************************************/
/*! exports provided: FunctionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FunctionsPage", function() { return FunctionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FunctionsPage = class FunctionsPage {
    constructor() { }
    ngOnInit() {
    }
};
FunctionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-functions',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./functions.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/functions/functions.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./functions.page.scss */ "./src/app/pages/functions/functions.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FunctionsPage);



/***/ })

}]);
//# sourceMappingURL=pages-functions-functions-module-es2015.js.map