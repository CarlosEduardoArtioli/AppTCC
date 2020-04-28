(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-edit-device-list-edit-device-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit/edit-device-list/edit-device-list.page.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit/edit-device-list/edit-device-list.page.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesEditEditDeviceListEditDeviceListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Editar\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-list class=\"ios list-ios hydrated\">\r\n\r\n    <ion-item *ngFor=\"let device of Devices\" class=\"user-list\">\r\n      <ion-label>\r\n        <h5>\r\n          <ion-icon src=\"/assets/svg/{{ device.icon }}.svg\"></ion-icon> {{device.name}}\r\n        </h5>\r\n        <h5>\r\n          <ion-icon name=\"contrast\"></ion-icon> {{device.status}}\r\n        </h5>\r\n        <h5>\r\n          <ion-icon src=\"/assets/svg/Hardware.svg\"></ion-icon> {{device.mac}}\r\n        </h5>\r\n      </ion-label>\r\n\r\n      <div class=\"item-note\" item-end>\r\n        <button class=\"transparent\" ion-button clear [routerLink]=\"['/edit-device-page/', device.$key]\">\r\n          <ion-icon name=\"create\" style=\"zoom:2.0\"></ion-icon>\r\n        </button>\r\n\r\n        <button class=\"transparent\" ion-button clear (click)=\"deleteDevice(device.$key)\">\r\n          <ion-icon name=\"trash\" style=\"zoom:2.0\"></ion-icon>\r\n        </button>\r\n\r\n      </div>\r\n\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/edit/edit-device-list/edit-device-list-routing.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/pages/edit/edit-device-list/edit-device-list-routing.module.ts ***!
    \********************************************************************************/

  /*! exports provided: EditDeviceListPageRoutingModule */

  /***/
  function srcAppPagesEditEditDeviceListEditDeviceListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditDeviceListPageRoutingModule", function () {
      return EditDeviceListPageRoutingModule;
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


    var _edit_device_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./edit-device-list.page */
    "./src/app/pages/edit/edit-device-list/edit-device-list.page.ts");

    const routes = [{
      path: '',
      component: _edit_device_list_page__WEBPACK_IMPORTED_MODULE_3__["EditDeviceListPage"]
    }];
    let EditDeviceListPageRoutingModule = class EditDeviceListPageRoutingModule {};
    EditDeviceListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EditDeviceListPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/edit/edit-device-list/edit-device-list.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/pages/edit/edit-device-list/edit-device-list.module.ts ***!
    \************************************************************************/

  /*! exports provided: EditDeviceListPageModule */

  /***/
  function srcAppPagesEditEditDeviceListEditDeviceListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditDeviceListPageModule", function () {
      return EditDeviceListPageModule;
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


    var _edit_device_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./edit-device-list-routing.module */
    "./src/app/pages/edit/edit-device-list/edit-device-list-routing.module.ts");
    /* harmony import */


    var _edit_device_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./edit-device-list.page */
    "./src/app/pages/edit/edit-device-list/edit-device-list.page.ts");

    let EditDeviceListPageModule = class EditDeviceListPageModule {};
    EditDeviceListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _edit_device_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditDeviceListPageRoutingModule"]],
      declarations: [_edit_device_list_page__WEBPACK_IMPORTED_MODULE_6__["EditDeviceListPage"]]
    })], EditDeviceListPageModule);
    /***/
  },

  /***/
  "./src/app/pages/edit/edit-device-list/edit-device-list.page.scss":
  /*!************************************************************************!*\
    !*** ./src/app/pages/edit/edit-device-list/edit-device-list.page.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesEditEditDeviceListEditDeviceListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".transparent {\n  background-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWRpdC9lZGl0LWRldmljZS1saXN0L0M6XFxpb25pY1xcQXBwVENDL3NyY1xcYXBwXFxwYWdlc1xcZWRpdFxcZWRpdC1kZXZpY2UtbGlzdFxcZWRpdC1kZXZpY2UtbGlzdC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2VkaXQvZWRpdC1kZXZpY2UtbGlzdC9lZGl0LWRldmljZS1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDZCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lZGl0L2VkaXQtZGV2aWNlLWxpc3QvZWRpdC1kZXZpY2UtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJhbnNwYXJlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxufSIsIi50cmFuc3BhcmVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/edit/edit-device-list/edit-device-list.page.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/edit/edit-device-list/edit-device-list.page.ts ***!
    \**********************************************************************/

  /*! exports provided: EditDeviceListPage */

  /***/
  function srcAppPagesEditEditDeviceListEditDeviceListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditDeviceListPage", function () {
      return EditDeviceListPage;
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

    let EditDeviceListPage = class EditDeviceListPage {
      constructor(aptService) {
        this.aptService = aptService; // Declaração de variáveis

        this.Devices = [];
      } // Função quando a página é iniciada


      ngOnInit() {
        // Chama a função 'fetchDevices()'
        this.fetchDevices(); // Atribui a variávei 'deviceRes' o seguinte valor
        // Puxa a função 'getDeviceList'

        let deviceRes = this.aptService.getDeviceList(); // Pega os valores da lista de dispositivos

        deviceRes.snapshotChanges().subscribe(res => {
          // "Subscreve" a variável devices com os dispostivos e seus valores
          this.Devices = [];
          res.forEach(item => {
            let a = item.payload.toJSON();
            a['$key'] = item.key;
            this.Devices.push(a);
          });
        });
      } // Função para mostrar a lista de dispositvos no console


      fetchDevices() {
        // "Puxa" a função 'getDeviceList' e vê a lista de dispositivos
        this.aptService.getDeviceList().valueChanges().subscribe(res => {
          // Escreve no console a lista de dispositivos
          console.log(res);
        });
      } // Função para deletar o dispositivo que recebe o parâmetro 'id'


      deleteDevice(id) {
        // Escreve no console o 'id'
        console.log(id); // Se for confirmado a mensagem

        if (window.confirm('Tem certeza que deseja excluir?')) {
          // "Puxa" a função 'deleteDevice' passando o parâmetro id
          this.aptService.deleteDevice(id);
        }
      }

    };

    EditDeviceListPage.ctorParameters = () => [{
      type: _services_device_service__WEBPACK_IMPORTED_MODULE_2__["DeviceService"]
    }];

    EditDeviceListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-device-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-device-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit/edit-device-list/edit-device-list.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-device-list.page.scss */
      "./src/app/pages/edit/edit-device-list/edit-device-list.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_device_service__WEBPACK_IMPORTED_MODULE_2__["DeviceService"]])], EditDeviceListPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-edit-edit-device-list-edit-device-list-module-es5.js.map