(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{x3Ek:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class i{}var t=u("pMnS"),a=u("MKJQ"),s=u("sZkV"),o=u("s7LF"),b=u("mrSG"),r=u("BtSu");class c{constructor(l,n,u,e,i){this.aptService=l,this.actRoute=n,this.router=u,this.fb=e,this.actionSheetController=i,this.imagem="",this.mac=this.actRoute.snapshot.paramMap.get("mac"),this.aptService.getDevice(this.mac).valueChanges().subscribe(l=>{this.imagem=l.icon,this.updateDeviceForm.setValue(l)})}ngOnInit(){this.updateDeviceForm=this.fb.group({name:[""],mac:[""],icon:[""]}),console.log(this.updateDeviceForm.value),this.aptService.getDevice(this.mac).valueChanges().subscribe(l=>{this.imagem=l.icon})}updateForm(){this.aptService.updateDevice(this.updateDeviceForm.value).then(()=>{this.router.navigate(["/home"])}).catch(l=>console.log(l))}escolherImagem(){return b.__awaiter(this,void 0,void 0,(function*(){const l=yield this.actionSheetController.create({header:"Imagens",buttons:[{text:"Cancelar",icon:"close",role:"cancel"},{text:"L\xe2mpada",icon:"/assets/svg/L\xe2mpada.svg",handler:()=>{this.imagem="L\xe2mpada"}},{text:"Televis\xe3o",icon:"/assets/svg/Televis\xe3o.svg",handler:()=>{this.imagem="Televis\xe3o"}},{text:"Ventilador",icon:"/assets/svg/Ventilador.svg",handler:()=>{this.imagem="Ventilador"}}]});yield l.present()}))}}var g=u("iInd"),d=e.ob({encapsulation:0,styles:[[""]],data:{}});function p(l){return e.Ib(0,[(l()(),e.qb(0,0,null,null,10,"ion-header",[],null,null,null,a.A,a.h)),e.pb(1,49152,null,0,s.A,[e.h,e.k,e.x],null,null),(l()(),e.qb(2,0,null,0,8,"ion-toolbar",[],null,null,null,a.L,a.s)),e.pb(3,49152,null,0,s.yb,[e.h,e.k,e.x],null,null),(l()(),e.qb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,a.w,a.d)),e.pb(5,49152,null,0,s.k,[e.h,e.k,e.x],null,null),(l()(),e.qb(6,0,null,0,1,"ion-menu-button",[],null,null,null,a.G,a.o)),e.pb(7,49152,null,0,s.Q,[e.h,e.k,e.x],null,null),(l()(),e.qb(8,0,null,0,2,"ion-title",[],null,null,null,a.K,a.r)),e.pb(9,49152,null,0,s.wb,[e.h,e.k,e.x],null,null),(l()(),e.Hb(-1,0,[" Editar "])),(l()(),e.qb(11,0,null,null,55,"ion-content",[],null,null,null,a.y,a.f)),e.pb(12,49152,null,0,s.t,[e.h,e.k,e.x],null,null),(l()(),e.qb(13,0,null,0,53,"ion-list",[["lines","full"]],null,null,null,a.F,a.m)),e.pb(14,49152,null,0,s.N,[e.h,e.k,e.x],{lines:[0,"lines"]},null),(l()(),e.qb(15,0,null,0,51,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var i=!0,t=l.component;return"submit"===n&&(i=!1!==e.Cb(l,17).onSubmit(u)&&i),"reset"===n&&(i=!1!==e.Cb(l,17).onReset()&&i),"ngSubmit"===n&&(i=!1!==t.updateForm()&&i),i}),null,null)),e.pb(16,16384,null,0,o.q,[],null,null),e.pb(17,540672,null,0,o.d,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e.Eb(2048,null,o.a,null,[o.d]),e.pb(19,16384,null,0,o.j,[[4,o.a]],null,null),(l()(),e.qb(20,0,null,null,13,"ion-item",[],null,null,null,a.D,a.k)),e.pb(21,49152,null,0,s.G,[e.h,e.k,e.x],null,null),(l()(),e.qb(22,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,a.E,a.l)),e.pb(23,49152,null,0,s.M,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Hb(-1,0,["Nome"])),(l()(),e.qb(25,0,null,0,8,"ion-input",[["formControlName","name"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0;return"ionBlur"===n&&(i=!1!==e.Cb(l,28)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Cb(l,28)._handleInputEvent(u.target)&&i),i}),a.C,a.j)),e.pb(26,16384,null,0,o.l,[],{required:[0,"required"]},null),e.Eb(1024,null,o.f,(function(l){return[l]}),[o.l]),e.pb(28,16384,null,0,s.Ib,[e.k],null,null),e.Eb(1024,null,o.g,(function(l){return[l]}),[s.Ib]),e.pb(30,671744,null,0,o.c,[[3,o.a],[6,o.f],[8,null],[6,o.g],[2,o.p]],{name:[0,"name"]},null),e.Eb(2048,null,o.h,null,[o.c]),e.pb(32,16384,null,0,o.i,[[4,o.h]],null,null),e.pb(33,49152,null,0,s.F,[e.h,e.k,e.x],{required:[0,"required"],type:[1,"type"]},null),(l()(),e.qb(34,0,null,null,11,"ion-item",[],null,null,null,a.D,a.k)),e.pb(35,49152,null,0,s.G,[e.h,e.k,e.x],null,null),(l()(),e.qb(36,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,a.E,a.l)),e.pb(37,49152,null,0,s.M,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Hb(-1,0,["MAC"])),(l()(),e.qb(39,0,null,0,6,"ion-input",[["disabled",""],["formControlName","mac"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0;return"ionBlur"===n&&(i=!1!==e.Cb(l,40)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Cb(l,40)._handleInputEvent(u.target)&&i),i}),a.C,a.j)),e.pb(40,16384,null,0,s.Ib,[e.k],null,null),e.Eb(1024,null,o.g,(function(l){return[l]}),[s.Ib]),e.pb(42,671744,null,0,o.c,[[3,o.a],[8,null],[8,null],[6,o.g],[2,o.p]],{name:[0,"name"],isDisabled:[1,"isDisabled"]},null),e.Eb(2048,null,o.h,null,[o.c]),e.pb(44,16384,null,0,o.i,[[4,o.h]],null,null),e.pb(45,49152,null,0,s.F,[e.h,e.k,e.x],{disabled:[0,"disabled"],type:[1,"type"]},null),(l()(),e.qb(46,0,null,null,13,"ion-item",[],null,null,null,a.D,a.k)),e.pb(47,49152,null,0,s.G,[e.h,e.k,e.x],null,null),(l()(),e.qb(48,0,null,0,1,"ion-icon",[["slot","start"]],null,null,null,a.B,a.i)),e.pb(49,49152,null,0,s.B,[e.h,e.k,e.x],{src:[0,"src"]},null),(l()(),e.qb(50,0,null,0,6,"ion-input",[["disabled",""],["formControlName","icon"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0;return"ionBlur"===n&&(i=!1!==e.Cb(l,51)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Cb(l,51)._handleInputEvent(u.target)&&i),i}),a.C,a.j)),e.pb(51,16384,null,0,s.Ib,[e.k],null,null),e.Eb(1024,null,o.g,(function(l){return[l]}),[s.Ib]),e.pb(53,671744,null,0,o.c,[[3,o.a],[8,null],[8,null],[6,o.g],[2,o.p]],{name:[0,"name"],isDisabled:[1,"isDisabled"]},null),e.Eb(2048,null,o.h,null,[o.c]),e.pb(55,16384,null,0,o.i,[[4,o.h]],null,null),e.pb(56,49152,null,0,s.F,[e.h,e.k,e.x],{disabled:[0,"disabled"],value:[1,"value"]},null),(l()(),e.qb(57,0,null,0,2,"ion-button",[["slot","end"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.escolherImagem()&&e),e}),a.v,a.c)),e.pb(58,49152,null,0,s.j,[e.h,e.k,e.x],null,null),(l()(),e.Hb(-1,0,["Selecionar"])),(l()(),e.qb(60,0,null,null,6,"ion-row",[],null,null,null,a.J,a.q)),e.pb(61,49152,null,0,s.fb,[e.h,e.k,e.x],null,null),(l()(),e.qb(62,0,null,0,4,"ion-col",[],null,null,null,a.x,a.e)),e.pb(63,49152,null,0,s.s,[e.h,e.k,e.x],null,null),(l()(),e.qb(64,0,null,0,2,"ion-button",[["color","primary"],["expand","block"],["shape","full"],["type","submit"]],null,null,null,a.v,a.c)),e.pb(65,49152,null,0,s.j,[e.h,e.k,e.x],{color:[0,"color"],expand:[1,"expand"],shape:[2,"shape"],type:[3,"type"]},null),(l()(),e.Hb(-1,0,["Atualizar"]))],(function(l,n){var u=n.component;l(n,14,0,"full"),l(n,17,0,u.updateDeviceForm),l(n,23,0,"floating"),l(n,26,0,""),l(n,30,0,"name"),l(n,33,0,"","text"),l(n,37,0,"floating"),l(n,42,0,"mac",""),l(n,45,0,"","text"),l(n,49,0,e.ub(1,"/assets/svg/",u.imagem,".svg")),l(n,53,0,"icon",""),l(n,56,0,"",e.ub(1,"",u.imagem,"")),l(n,65,0,"primary","block","full","submit")}),(function(l,n){l(n,15,0,e.Cb(n,19).ngClassUntouched,e.Cb(n,19).ngClassTouched,e.Cb(n,19).ngClassPristine,e.Cb(n,19).ngClassDirty,e.Cb(n,19).ngClassValid,e.Cb(n,19).ngClassInvalid,e.Cb(n,19).ngClassPending),l(n,25,0,e.Cb(n,26).required?"":null,e.Cb(n,32).ngClassUntouched,e.Cb(n,32).ngClassTouched,e.Cb(n,32).ngClassPristine,e.Cb(n,32).ngClassDirty,e.Cb(n,32).ngClassValid,e.Cb(n,32).ngClassInvalid,e.Cb(n,32).ngClassPending),l(n,39,0,e.Cb(n,44).ngClassUntouched,e.Cb(n,44).ngClassTouched,e.Cb(n,44).ngClassPristine,e.Cb(n,44).ngClassDirty,e.Cb(n,44).ngClassValid,e.Cb(n,44).ngClassInvalid,e.Cb(n,44).ngClassPending),l(n,50,0,e.Cb(n,55).ngClassUntouched,e.Cb(n,55).ngClassTouched,e.Cb(n,55).ngClassPristine,e.Cb(n,55).ngClassDirty,e.Cb(n,55).ngClassValid,e.Cb(n,55).ngClassInvalid,e.Cb(n,55).ngClassPending)}))}function h(l){return e.Ib(0,[(l()(),e.qb(0,0,null,null,1,"app-edit-device-page",[],null,null,null,p,d)),e.pb(1,114688,null,0,c,[r.a,g.a,g.m,o.b,s.a],null,null)],(function(l,n){l(n,1,0)}),null)}var m=e.mb("app-edit-device-page",c,h,{},{},[]),C=u("SVse");class v{}u.d(n,"EditDevicePagePageModuleNgFactory",(function(){return f}));var f=e.nb(i,[],(function(l){return e.zb([e.Ab(512,e.j,e.Y,[[8,[t.a,m]],[3,e.j],e.v]),e.Ab(4608,C.k,C.j,[e.s,[2,C.r]]),e.Ab(4608,o.o,o.o,[]),e.Ab(4608,s.c,s.c,[e.x,e.g]),e.Ab(4608,s.Db,s.Db,[s.c,e.j,e.p]),e.Ab(4608,s.Gb,s.Gb,[s.c,e.j,e.p]),e.Ab(4608,o.b,o.b,[]),e.Ab(1073742336,C.b,C.b,[]),e.Ab(1073742336,o.n,o.n,[]),e.Ab(1073742336,o.e,o.e,[]),e.Ab(1073742336,s.Ab,s.Ab,[]),e.Ab(1073742336,g.o,g.o,[[2,g.t],[2,g.m]]),e.Ab(1073742336,v,v,[]),e.Ab(1073742336,o.k,o.k,[]),e.Ab(1073742336,i,i,[]),e.Ab(1024,g.k,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);