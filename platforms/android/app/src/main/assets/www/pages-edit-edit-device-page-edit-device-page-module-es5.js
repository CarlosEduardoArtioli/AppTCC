(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-edit-device-page-edit-device-page-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit/edit-device-page/edit-device-page.page.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit/edit-device-page/edit-device-page.page.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEditEditDevicePageEditDevicePagePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Editar\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list lines=\"full\">\r\n    <form [formGroup]=\"updateDeviceForm\" (ngSubmit)=\"updateForm()\">\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Nome</ion-label>\r\n        <ion-input formControlName=\"name\" type=\"text\" required></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">Status</ion-label>\r\n        <ion-input formControlName=\"status\" type=\"text\" required>\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-label position=\"floating\">MAC</ion-label>\r\n        <ion-input formControlName=\"mac\" type=\"text\" required>\r\n        </ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item>\r\n        <ion-icon slot=\"start\" src=\"/assets/svg/{{ imagem }}.svg\"></ion-icon>\r\n        <ion-input formControlName=\"icon\" value=\"{{ imagem }}\"></ion-input>\r\n        <ion-label>\r\n        <ion-button (click)=\"escolherImagem()\" slot=\"end\">Selecionar</ion-button>\r\n        </ion-label>\r\n      </ion-item>\r\n\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button type=\"submit\" color=\"primary\" shape=\"full\" expand=\"block\">Atualizar</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </form>\r\n  </ion-list>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/edit/edit-device-page/edit-device-page-routing.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/edit/edit-device-page/edit-device-page-routing.module.ts ***!
    \********************************************************************************/

  /*! exports provided: EditDevicePagePageRoutingModule */

  /***/
  function srcAppPagesEditEditDevicePageEditDevicePageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditDevicePagePageRoutingModule", function () {
      return EditDevicePagePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _edit_device_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./edit-device-page.page */
    "./src/app/pages/edit/edit-device-page/edit-device-page.page.ts");

    const routes = [{
      path: '',
      component: _edit_device_page_page__WEBPACK_IMPORTED_MODULE_3__["EditDevicePagePage"]
    }];
    let EditDevicePagePageRoutingModule = class EditDevicePagePageRoutingModule {};
    EditDevicePagePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EditDevicePagePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/edit/edit-device-page/edit-device-page.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/pages/edit/edit-device-page/edit-device-page.module.ts ***!
    \************************************************************************/

  /*! exports provided: EditDevicePagePageModule */

  /***/
  function srcAppPagesEditEditDevicePageEditDevicePageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditDevicePagePageModule", function () {
      return EditDevicePagePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _edit_device_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./edit-device-page-routing.module */
    "./src/app/pages/edit/edit-device-page/edit-device-page-routing.module.ts");
    /* harmony import */


    var _edit_device_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./edit-device-page.page */
    "./src/app/pages/edit/edit-device-page/edit-device-page.page.ts");

    let EditDevicePagePageModule = class EditDevicePagePageModule {};
    EditDevicePagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _edit_device_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditDevicePagePageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_edit_device_page_page__WEBPACK_IMPORTED_MODULE_6__["EditDevicePagePage"]],
      entryComponents: []
    })], EditDevicePagePageModule);
    /***/
  },

  /***/
  "./src/app/pages/edit/edit-device-page/edit-device-page.page.scss":
  /*!************************************************************************!*\
    !*** ./src/app/pages/edit/edit-device-page/edit-device-page.page.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEditEditDevicePageEditDevicePagePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkaXQvZWRpdC1kZXZpY2UtcGFnZS9lZGl0LWRldmljZS1wYWdlLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/edit/edit-device-page/edit-device-page.page.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/edit/edit-device-page/edit-device-page.page.ts ***!
    \**********************************************************************/

  /*! exports provided: EditDevicePagePage */

  /***/
  function srcAppPagesEditEditDevicePageEditDevicePagePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditDevicePagePage", function () {
      return EditDevicePagePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_device_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/device.service */
    "./src/app/services/device.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    let EditDevicePagePage = class EditDevicePagePage {
      constructor(aptService, actRoute, router, fb, actionSheetController) {
        this.aptService = aptService;
        this.actRoute = actRoute;
        this.router = router;
        this.fb = fb;
        this.actionSheetController = actionSheetController;
        this.imagem = ""; // Atribui a variável 'id' uma "foto" da rota, mais especificamente do 'id'

        this.mac = this.actRoute.snapshot.paramMap.get('mac');
        this.aptService.getDevice(this.mac).valueChanges().subscribe(res => {
          this.imagem = res.icon;
          this.updateDeviceForm.setValue(res);
        });
      } // Função para quando a página for iniciada


      ngOnInit() {
        // Atribui a variável deviceForm o valor do grupo de valores do FormBuilder da página HTML 
        this.updateDeviceForm = this.fb.group({
          name: [''],
          status: [''],
          mac: [''],
          icon: ['']
        });
        console.log(this.updateDeviceForm.value);
      }

      updateForm() {
        this.aptService.updateDevice(this.updateDeviceForm.value).then(() => {
          this.router.navigate(['/home']);
        }).catch(error => console.log(error));
      }

      escolherImagem() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const actionSheet = yield this.actionSheetController.create({
            header: 'Imagens',
            buttons: [{
              text: 'Cancelar',
              icon: 'close',
              role: 'cancel'
            }, {
              text: 'Lâmpada',
              icon: '/assets/svg/Lâmpada.svg',
              handler: () => {
                this.imagem = "Lâmpada";
              }
            }, {
              text: 'Televisão',
              icon: '/assets/svg/Televisão.svg',
              handler: () => {
                this.imagem = "Televisão";
              }
            }, {
              text: 'Ventilador',
              icon: '/assets/svg/Ventilador.svg',
              handler: () => {
                this.imagem = "Ventilador";
              }
            }]
          });
          yield actionSheet.present();
        });
      }

    };

    EditDevicePagePage.ctorParameters = () => [{
      type: _services_device_service__WEBPACK_IMPORTED_MODULE_2__["DeviceService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"]
    }];

    EditDevicePagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-device-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-device-page.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit/edit-device-page/edit-device-page.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-device-page.page.scss */
      "./src/app/pages/edit/edit-device-page/edit-device-page.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_device_service__WEBPACK_IMPORTED_MODULE_2__["DeviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ActionSheetController"]])], EditDevicePagePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-edit-edit-device-page-edit-device-page-module-es5.js.map