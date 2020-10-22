(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-menu-menu-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/menu.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/menu.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-menu contentId=\"content\">\r\n\r\n  <div class=\"user-menu\" (click)=\"showOptions()\">\r\n    <img src='{{ photo }}'>\r\n    <h4>{{ name }}</h4>\r\n  </div>\r\n\r\n  <ion-content mode=\"md\">\r\n\r\n    <div *ngFor=\"let p of pages\">\r\n\r\n      <ion-menu-toggle *ngIf=\"p.url\" mode=\"md\">\r\n        <ion-item [routerLink]=\"p.url\" routerDirection=\"root\" routerLinkActive=\"active\" lines=\"full\">\r\n          <ion-icon [name]=\"p.icon\" slot=\"start\"></ion-icon>\r\n          <ion-label>\r\n            {{ p.title }}\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-menu-toggle>\r\n\r\n      <ion-item button *ngIf=\"p.children?.length > 0\" (click)=\"p.open = !p.open\" [class.active-parent]=\"p.open\"\r\n        detail=false lines=\"full\" mode=\"md\">\r\n        <ion-icon slot=\"end\" name=\"chevron-forward-outline\" *ngIf=\"!p.open\"></ion-icon>\r\n        <ion-icon slot=\"end\" name=\"chevron-down-outline\" *ngIf=\"p.open\"></ion-icon>\r\n        <ion-icon [name]=\"p.icon\" slot=\"start\"></ion-icon>\r\n        <ion-label>{{ p.title }}</ion-label>\r\n      </ion-item>\r\n\r\n      <ion-list *ngIf=\"p.open\" mode=\"md\">\r\n        <ion-menu-toggle mode=\"md\">\r\n          <ion-item class=\"sub-item\" *ngFor=\"let sub of p.children\" [routerLink]=\"sub.url\" routerDirection=\"root\"\r\n            routerLinkActive=\"active\">\r\n            <ion-icon [name]=\"sub.icon\" slot=\"start\"></ion-icon>\r\n            <ion-label>\r\n              {{ sub.title }}\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-menu-toggle>\r\n      </ion-list>\r\n    </div>\r\n\r\n  </ion-content>\r\n\r\n</ion-menu>\r\n\r\n<ion-router-outlet id=\"content\" main></ion-router-outlet>");

/***/ }),

/***/ "./src/app/models/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// Model dos dados do usuário

class User {
    constructor(uid, email, displayName, emailVerified, photoURL) {
        this.uid = uid;
        this.email = email;
        this.displayName = displayName;
        this.emailVerified = emailVerified;
        this.photoURL = photoURL;
    }
}
// Models são os "Modelos" de dados de um objeto


/***/ }),

/***/ "./src/app/pages/menu/menu-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/menu/menu-routing.module.ts ***!
  \***************************************************/
/*! exports provided: MenuPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageRoutingModule", function() { return MenuPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.page */ "./src/app/pages/menu/menu.page.ts");
/* harmony import */ var src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/guards/auth.guard */ "./src/app/guards/auth.guard.ts");





const routes = [
    {
        path: '',
        redirectTo: 'menu/home',
        pathMatch: 'full'
    },
    {
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_3__["MenuPage"],
        children: [
            {
                path: 'home',
                loadChildren: () => Promise.all(/*! import() | home-home-module */[__webpack_require__.e("common"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ../home/home.module */ "./src/app/pages/home/home.module.ts")).then(m => m.HomePageModule),
                canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
            },
            {
                path: 'edit-room-list',
                loadChildren: () => Promise.all(/*! import() | edit-room-edit-room-list-edit-room-list-module */[__webpack_require__.e("common"), __webpack_require__.e("edit-room-edit-room-list-edit-room-list-module")]).then(__webpack_require__.bind(null, /*! ../edit/room/edit-room-list/edit-room-list.module */ "./src/app/pages/edit/room/edit-room-list/edit-room-list.module.ts")).then(m => m.EditRoomListPageModule),
                canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
            },
            // Rota 'edit-device-list'
            {
                path: 'edit-device-list',
                loadChildren: () => Promise.all(/*! import() | edit-device-edit-device-list-edit-device-list-module */[__webpack_require__.e("common"), __webpack_require__.e("edit-device-edit-device-list-edit-device-list-module")]).then(__webpack_require__.bind(null, /*! ../edit/device/edit-device-list/edit-device-list.module */ "./src/app/pages/edit/device/edit-device-list/edit-device-list.module.ts")).then(m => m.EditDeviceListPageModule),
                canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
            },
            {
                path: 'device-list',
                loadChildren: () => Promise.all(/*! import() | functions-timer-device-list-device-list-module */[__webpack_require__.e("common"), __webpack_require__.e("functions-timer-device-list-device-list-module")]).then(__webpack_require__.bind(null, /*! ../functions/timer/device-list/device-list.module */ "./src/app/pages/functions/timer/device-list/device-list.module.ts")).then(m => m.DeviceListPageModule),
                canActivate: [src_app_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
            },
        ]
    }
];
let MenuPageRoutingModule = class MenuPageRoutingModule {
};
MenuPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MenuPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/menu/menu.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.module.ts ***!
  \*******************************************/
/*! exports provided: MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-routing.module */ "./src/app/pages/menu/menu-routing.module.ts");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu.page */ "./src/app/pages/menu/menu.page.ts");







let MenuPageModule = class MenuPageModule {
};
MenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _menu_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuPageRoutingModule"]
        ],
        declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]]
    })
], MenuPageModule);



/***/ }),

/***/ "./src/app/pages/menu/menu.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".active {\n  --ion-text-color: var(--ion-color-primary);\n}\n.active ion-icon {\n  --ion-text-color-rgb: var(--ion-color-primary);\n}\n.active-parent {\n  font-weight: 500;\n}\n.sub-item {\n  padding-left: 20px;\n  font-size: small;\n}\nion-menu,\nion-content {\n  --background: #1e1e1e;\n  font-family: \"Open Sans\", sans-serif;\n}\n.user-menu {\n  text-align: center !important;\n  color: white;\n  background: #0353a4;\n  background: radial-gradient(circle, #0353a4 0%, #023e7d 55%);\n}\n.user-menu img {\n  border-radius: 100%;\n  margin-top: 20px;\n  margin-bottom: 0;\n  width: 80px;\n}\n@media (min-width: 1100px) {\n  ion-content ion-label {\n    font-size: 20px;\n  }\n  ion-content ion-list ion-label {\n    font-size: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVudS9DOlxcSW9uaWNcXEFwcFRDQy9zcmNcXGFwcFxccGFnZXNcXG1lbnVcXG1lbnUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9tZW51L21lbnUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMENBQUE7QUNDSjtBRENJO0VBQ0ksOENBQUE7QUNDUjtBREdBO0VBQ0ksZ0JBQUE7QUNBSjtBREdBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ0FKO0FER0E7O0VBRUkscUJBQUE7RUFDQSxvQ0FBQTtBQ0FKO0FER0E7RUFDSSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDREQUFBO0FDQUo7QURFSTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNBUjtBRElBO0VBR1E7SUFDSSxlQUFBO0VDSFY7RURNTTtJQUNJLGVBQUE7RUNKVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWVudS9tZW51LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmUge1xyXG4gICAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG5cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgICAtLWlvbi10ZXh0LWNvbG9yLXJnYjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYWN0aXZlLXBhcmVudCB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uc3ViLWl0ZW0ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG5cclxuaW9uLW1lbnUsXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogIzFlMWUxZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnVzZXItbWVudSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJhY2tncm91bmQ6IHJnYigzLCA4MywgMTY0KTtcclxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIHJnYmEoMywgODMsIDE2NCwgMSkgMCUsIHJnYmEoMiwgNjIsIDEyNSwgMSkgNTUlKTtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTEwMHB4KSB7XHJcbiAgICBpb24tY29udGVudCB7XHJcblxyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1saXN0IGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIuYWN0aXZlIHtcbiAgLS1pb24tdGV4dC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLmFjdGl2ZSBpb24taWNvbiB7XG4gIC0taW9uLXRleHQtY29sb3ItcmdiOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5hY3RpdmUtcGFyZW50IHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnN1Yi1pdGVtIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBmb250LXNpemU6IHNtYWxsO1xufVxuXG5pb24tbWVudSxcbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjMWUxZTFlO1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbn1cblxuLnVzZXItbWVudSB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICMwMzUzYTQ7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICMwMzUzYTQgMCUsICMwMjNlN2QgNTUlKTtcbn1cbi51c2VyLW1lbnUgaW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgd2lkdGg6IDgwcHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMTAwcHgpIHtcbiAgaW9uLWNvbnRlbnQgaW9uLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbiAgaW9uLWNvbnRlbnQgaW9uLWxpc3QgaW9uLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/menu/menu.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/menu/menu.page.ts ***!
  \*****************************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/user.model */ "./src/app/models/user.model.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/services/authentication.service.ts");






let MenuPage = class MenuPage {
    constructor(actionSheetCtrl, alertCtrl, toastController, userService, authService) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.toastController = toastController;
        this.userService = userService;
        this.authService = authService;
        this.pages = [
            {
                title: 'Home',
                url: '/menu/home',
                icon: 'home'
            },
            {
                title: 'Editar',
                icon: 'create-outline',
                open: false,
                children: [
                    {
                        title: 'Dispositivo',
                        url: '/menu/edit-device-list',
                        icon: 'hardware-chip'
                    },
                    {
                        title: 'Cômodo',
                        url: '/menu/edit-room-list',
                        icon: 'home'
                    }
                ]
            },
            {
                title: 'Funções',
                icon: 'build',
                open: false,
                children: [
                    {
                        title: 'Timer',
                        url: '/menu/device-list',
                        icon: 'alarm-outline'
                    },
                ]
            },
        ];
    }
    ngOnInit() { }
    ionViewWillEnter() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.userName();
        });
    }
    userName() {
        this.user = JSON.parse(localStorage.getItem('user'));
        if (this.user.displayName === null && this.user.photoURL === null) {
            // tslint:disable-next-line: max-line-length
            localStorage.setItem('user', JSON.stringify(new src_app_models_user_model__WEBPACK_IMPORTED_MODULE_2__["User"](this.user.uid, this.user.email, this.user.email, this.user.emailVerified, 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png')));
            this.user = JSON.parse(localStorage.getItem('user'));
            this.userService.updateUserName(this.user.displayName, this.user.email);
        }
        else {
            this.userService.getUserName(this.user.email).valueChanges().subscribe(res => {
                this.user.displayName = res;
                // tslint:disable-next-line: max-line-length
                localStorage.setItem('user', JSON.stringify(new src_app_models_user_model__WEBPACK_IMPORTED_MODULE_2__["User"](this.user.uid, this.user.email, this.user.displayName, this.user.emailVerified, this.user.photoURL)));
            });
        }
        this.user = JSON.parse(localStorage.getItem('user'));
        this.name = this.user.displayName;
        this.photo = this.user.photoURL;
    }
    // Função para aparecer opções ao clicar no usuário
    showOptions() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // Cria um actionSheet
            const actionSheet = yield this.actionSheetCtrl.create({
                // Header com nome 'Opções'
                header: 'Opções',
                cssClass: 'actionSheet',
                // Gera botões
                buttons: [
                    {
                        text: 'Alterar Nome',
                        icon: 'person',
                        handler: () => {
                            this.alterarNome();
                        }
                    },
                    {
                        text: 'Logout',
                        icon: 'power',
                        role: 'destructive',
                        // Quando o Logout é acionado ele remove o usuário do local storage e redireciona para a página de login
                        handler: () => {
                            this.presentAlertConfirm();
                        }
                    }, {
                        // Botão para cancelar
                        text: 'Cancelar',
                        icon: 'close',
                        role: 'cancel',
                    }
                ]
            });
            // Aguarda o actionSheet carregar antes de mostrar
            yield actionSheet.present();
        });
    }
    // Funcão para aparecer o alert com o input que irá receber o novo nome do usuário.
    alterarNome() {
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
                                // this.nome será = ao que está valor do input com Id 'newname'.
                                this.novoNome = document.getElementById('newname').value;
                                // Puxa a função do ion-toast.
                                this.newname();
                                // Função para mudar o nome do usuário.
                                this.userService.updateUserName(this.novoNome, this.user.email);
                                // tslint:disable-next-line: max-line-length
                                localStorage.setItem('user', JSON.stringify(new src_app_models_user_model__WEBPACK_IMPORTED_MODULE_2__["User"](this.user.uid, this.user.email, this.novoNome, this.user.emailVerified, this.user.photoURL)));
                                this.user = JSON.parse(localStorage.getItem('user'));
                                this.name = this.user.displayName;
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    // Função para aparecer um ion-toast após salvar o novo nome (perfumaria).
    newname() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                header: 'Seu nome foi alterado.',
                duration: 2000
            });
            yield toast.present();
        });
    }
    presentAlertConfirm() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'SAIR!',
                message: 'Deseja realmente sair?',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel'
                    }, {
                        text: 'Confirmar',
                        handler: () => {
                            this.authService.SignOut();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
MenuPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
];
MenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/menu.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu.page.scss */ "./src/app/pages/menu/menu.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
        _services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]])
], MenuPage);



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/es2015/index.js");
// Services são os "serviços" que podem ser reutilizados por todo o app
// Geralmente são funções
// Service para funções relacionadas ao Dispositivo


// Importação das bibliotecas do AngularFire

let UserService = class UserService {
    constructor(
    // AngularFireDatabase é uma classe para refernciar o banco
    // Recebeu o apelido de db
    db) {
        this.db = db;
    }
    // Função que pega o nome do usuário
    getUserName(email) {
        email = email.replace(/[.#$@]+/g, '');
        this.name = this.db.object(`/users/${email}/settings/displayName`);
        return this.name;
    }
    // Função para mudar o nome do usuário, com a função é passado o parametro name, fornecido pela função
    updateUserName(name, email) {
        email = email.replace(/[.#$@]+/g, '');
        this.db.database.ref(`/users/${email}/settings/displayName`).set(name);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]])
], UserService);



/***/ })

}]);