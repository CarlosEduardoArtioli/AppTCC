(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{zvWh:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class t{}var i=u("pMnS"),a=u("MKJQ"),b=u("sZkV"),o=u("s7LF"),r=u("mrSG"),s=u("BtSu"),g=u("Jg7C");class p{constructor(l,n,u,e,t){this.aptService=l,this.actRoute=n,this.router=u,this.fb=e,this.modalCtrl=t,this.imagem="",this.id=this.actRoute.snapshot.paramMap.get("id"),this.aptService.getDevice(this.id).valueChanges().subscribe(l=>{this.updateDeviceForm.setValue(l)}),this.actRoute.queryParams.subscribe(l=>{this.imagem=l.imagem})}ngOnInit(){this.updateDeviceForm=this.fb.group({name:[""],status:[""],mac:[""],icon:[""]}),console.log(this.updateDeviceForm.value)}updateForm(){this.aptService.updateDevice(this.id,this.updateDeviceForm.value).then(()=>{this.router.navigate(["/home"])}).catch(l=>console.log(l))}showModal(){return r.__awaiter(this,void 0,void 0,(function*(){(yield this.modalCtrl.create({component:g.a})).present()}))}}var d=u("iInd"),c=e.ob({encapsulation:0,styles:[[""]],data:{}});function h(l){return e.Ib(0,[(l()(),e.qb(0,0,null,null,10,"ion-header",[],null,null,null,a.D,a.i)),e.pb(1,49152,null,0,b.A,[e.h,e.k,e.x],null,null),(l()(),e.qb(2,0,null,0,8,"ion-toolbar",[],null,null,null,a.P,a.u)),e.pb(3,49152,null,0,b.yb,[e.h,e.k,e.x],null,null),(l()(),e.qb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,a.y,a.d)),e.pb(5,49152,null,0,b.k,[e.h,e.k,e.x],null,null),(l()(),e.qb(6,0,null,0,1,"ion-menu-button",[],null,null,null,a.J,a.p)),e.pb(7,49152,null,0,b.Q,[e.h,e.k,e.x],null,null),(l()(),e.qb(8,0,null,0,2,"ion-title",[],null,null,null,a.O,a.t)),e.pb(9,49152,null,0,b.wb,[e.h,e.k,e.x],null,null),(l()(),e.Hb(-1,0,[" Editar "])),(l()(),e.qb(11,0,null,null,71,"ion-content",[],null,null,null,a.B,a.g)),e.pb(12,49152,null,0,b.t,[e.h,e.k,e.x],null,null),(l()(),e.qb(13,0,null,0,69,"ion-list",[["lines","full"]],null,null,null,a.I,a.n)),e.pb(14,49152,null,0,b.N,[e.h,e.k,e.x],{lines:[0,"lines"]},null),(l()(),e.qb(15,0,null,0,67,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var t=!0,i=l.component;return"submit"===n&&(t=!1!==e.Cb(l,17).onSubmit(u)&&t),"reset"===n&&(t=!1!==e.Cb(l,17).onReset()&&t),"ngSubmit"===n&&(t=!1!==i.updateForm()&&t),t}),null,null)),e.pb(16,16384,null,0,o.r,[],null,null),e.pb(17,540672,null,0,o.d,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e.Eb(2048,null,o.a,null,[o.d]),e.pb(19,16384,null,0,o.j,[[4,o.a]],null,null),(l()(),e.qb(20,0,null,null,13,"ion-item",[],null,null,null,a.G,a.l)),e.pb(21,49152,null,0,b.G,[e.h,e.k,e.x],null,null),(l()(),e.qb(22,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,a.H,a.m)),e.pb(23,49152,null,0,b.M,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Hb(-1,0,["Nome"])),(l()(),e.qb(25,0,null,0,8,"ion-input",[["formControlName","name"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Cb(l,28)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Cb(l,28)._handleInputEvent(u.target)&&t),t}),a.F,a.k)),e.pb(26,16384,null,0,o.m,[],{required:[0,"required"]},null),e.Eb(1024,null,o.f,(function(l){return[l]}),[o.m]),e.pb(28,16384,null,0,b.Ib,[e.k],null,null),e.Eb(1024,null,o.g,(function(l){return[l]}),[b.Ib]),e.pb(30,671744,null,0,o.c,[[3,o.a],[6,o.f],[8,null],[6,o.g],[2,o.q]],{name:[0,"name"]},null),e.Eb(2048,null,o.h,null,[o.c]),e.pb(32,16384,null,0,o.i,[[4,o.h]],null,null),e.pb(33,49152,null,0,b.F,[e.h,e.k,e.x],{required:[0,"required"],type:[1,"type"]},null),(l()(),e.qb(34,0,null,null,13,"ion-item",[],null,null,null,a.G,a.l)),e.pb(35,49152,null,0,b.G,[e.h,e.k,e.x],null,null),(l()(),e.qb(36,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,a.H,a.m)),e.pb(37,49152,null,0,b.M,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Hb(-1,0,["Status"])),(l()(),e.qb(39,0,null,0,8,"ion-input",[["formControlName","status"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Cb(l,42)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Cb(l,42)._handleInputEvent(u.target)&&t),t}),a.F,a.k)),e.pb(40,16384,null,0,o.m,[],{required:[0,"required"]},null),e.Eb(1024,null,o.f,(function(l){return[l]}),[o.m]),e.pb(42,16384,null,0,b.Ib,[e.k],null,null),e.Eb(1024,null,o.g,(function(l){return[l]}),[b.Ib]),e.pb(44,671744,null,0,o.c,[[3,o.a],[6,o.f],[8,null],[6,o.g],[2,o.q]],{name:[0,"name"]},null),e.Eb(2048,null,o.h,null,[o.c]),e.pb(46,16384,null,0,o.i,[[4,o.h]],null,null),e.pb(47,49152,null,0,b.F,[e.h,e.k,e.x],{required:[0,"required"],type:[1,"type"]},null),(l()(),e.qb(48,0,null,null,13,"ion-item",[],null,null,null,a.G,a.l)),e.pb(49,49152,null,0,b.G,[e.h,e.k,e.x],null,null),(l()(),e.qb(50,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,a.H,a.m)),e.pb(51,49152,null,0,b.M,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Hb(-1,0,["MAC"])),(l()(),e.qb(53,0,null,0,8,"ion-input",[["formControlName","mac"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Cb(l,56)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Cb(l,56)._handleInputEvent(u.target)&&t),t}),a.F,a.k)),e.pb(54,16384,null,0,o.m,[],{required:[0,"required"]},null),e.Eb(1024,null,o.f,(function(l){return[l]}),[o.m]),e.pb(56,16384,null,0,b.Ib,[e.k],null,null),e.Eb(1024,null,o.g,(function(l){return[l]}),[b.Ib]),e.pb(58,671744,null,0,o.c,[[3,o.a],[6,o.f],[8,null],[6,o.g],[2,o.q]],{name:[0,"name"]},null),e.Eb(2048,null,o.h,null,[o.c]),e.pb(60,16384,null,0,o.i,[[4,o.h]],null,null),e.pb(61,49152,null,0,b.F,[e.h,e.k,e.x],{required:[0,"required"],type:[1,"type"]},null),(l()(),e.qb(62,0,null,null,13,"ion-item",[],null,null,null,a.G,a.l)),e.pb(63,49152,null,0,b.G,[e.h,e.k,e.x],null,null),(l()(),e.qb(64,0,null,0,1,"ion-icon",[["slot","start"]],null,null,null,a.E,a.j)),e.pb(65,49152,null,0,b.B,[e.h,e.k,e.x],{src:[0,"src"]},null),(l()(),e.qb(66,0,null,0,6,"ion-input",[["formControlName","icon"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==e.Cb(l,67)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Cb(l,67)._handleInputEvent(u.target)&&t),t}),a.F,a.k)),e.pb(67,16384,null,0,b.Ib,[e.k],null,null),e.Eb(1024,null,o.g,(function(l){return[l]}),[b.Ib]),e.pb(69,671744,null,0,o.c,[[3,o.a],[8,null],[8,null],[6,o.g],[2,o.q]],{name:[0,"name"]},null),e.Eb(2048,null,o.h,null,[o.c]),e.pb(71,16384,null,0,o.i,[[4,o.h]],null,null),e.pb(72,49152,null,0,b.F,[e.h,e.k,e.x],{value:[0,"value"]},null),(l()(),e.qb(73,0,null,0,2,"ion-button",[["expand","block"],["slot","end"]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.showModal()&&e),e}),a.x,a.c)),e.pb(74,49152,null,0,b.j,[e.h,e.k,e.x],{expand:[0,"expand"]},null),(l()(),e.Hb(-1,0,["Selecionar Imagem"])),(l()(),e.qb(76,0,null,null,6,"ion-row",[],null,null,null,a.M,a.r)),e.pb(77,49152,null,0,b.fb,[e.h,e.k,e.x],null,null),(l()(),e.qb(78,0,null,0,4,"ion-col",[],null,null,null,a.A,a.f)),e.pb(79,49152,null,0,b.s,[e.h,e.k,e.x],null,null),(l()(),e.qb(80,0,null,0,2,"ion-button",[["color","primary"],["expand","block"],["shape","full"],["type","submit"]],null,null,null,a.x,a.c)),e.pb(81,49152,null,0,b.j,[e.h,e.k,e.x],{color:[0,"color"],expand:[1,"expand"],shape:[2,"shape"],type:[3,"type"]},null),(l()(),e.Hb(-1,0,["Atualizar"]))],(function(l,n){var u=n.component;l(n,14,0,"full"),l(n,17,0,u.updateDeviceForm),l(n,23,0,"floating"),l(n,26,0,""),l(n,30,0,"name"),l(n,33,0,"","text"),l(n,37,0,"floating"),l(n,40,0,""),l(n,44,0,"status"),l(n,47,0,"","text"),l(n,51,0,"floating"),l(n,54,0,""),l(n,58,0,"mac"),l(n,61,0,"","text"),l(n,65,0,e.ub(1,"/assets/svg/",u.imagem,".svg")),l(n,69,0,"icon"),l(n,72,0,e.ub(1,"",u.imagem,"")),l(n,74,0,"block"),l(n,81,0,"primary","block","full","submit")}),(function(l,n){l(n,15,0,e.Cb(n,19).ngClassUntouched,e.Cb(n,19).ngClassTouched,e.Cb(n,19).ngClassPristine,e.Cb(n,19).ngClassDirty,e.Cb(n,19).ngClassValid,e.Cb(n,19).ngClassInvalid,e.Cb(n,19).ngClassPending),l(n,25,0,e.Cb(n,26).required?"":null,e.Cb(n,32).ngClassUntouched,e.Cb(n,32).ngClassTouched,e.Cb(n,32).ngClassPristine,e.Cb(n,32).ngClassDirty,e.Cb(n,32).ngClassValid,e.Cb(n,32).ngClassInvalid,e.Cb(n,32).ngClassPending),l(n,39,0,e.Cb(n,40).required?"":null,e.Cb(n,46).ngClassUntouched,e.Cb(n,46).ngClassTouched,e.Cb(n,46).ngClassPristine,e.Cb(n,46).ngClassDirty,e.Cb(n,46).ngClassValid,e.Cb(n,46).ngClassInvalid,e.Cb(n,46).ngClassPending),l(n,53,0,e.Cb(n,54).required?"":null,e.Cb(n,60).ngClassUntouched,e.Cb(n,60).ngClassTouched,e.Cb(n,60).ngClassPristine,e.Cb(n,60).ngClassDirty,e.Cb(n,60).ngClassValid,e.Cb(n,60).ngClassInvalid,e.Cb(n,60).ngClassPending),l(n,66,0,e.Cb(n,71).ngClassUntouched,e.Cb(n,71).ngClassTouched,e.Cb(n,71).ngClassPristine,e.Cb(n,71).ngClassDirty,e.Cb(n,71).ngClassValid,e.Cb(n,71).ngClassInvalid,e.Cb(n,71).ngClassPending)}))}var C=e.mb("app-edit-device-page",p,(function(l){return e.Ib(0,[(l()(),e.qb(0,0,null,null,1,"app-edit-device-page",[],null,null,null,h,c)),e.pb(1,114688,null,0,p,[s.a,d.a,d.m,o.b,b.Db],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),m=u("teCF"),v=u("SVse");class q{}u.d(n,"EditDevicePagePageModuleNgFactory",(function(){return f}));var f=e.nb(t,[],(function(l){return e.zb([e.Ab(512,e.j,e.Y,[[8,[i.a,C,m.a]],[3,e.j],e.v]),e.Ab(4608,v.j,v.i,[e.s,[2,v.q]]),e.Ab(4608,o.p,o.p,[]),e.Ab(4608,b.b,b.b,[e.x,e.g]),e.Ab(4608,b.Db,b.Db,[b.b,e.j,e.p]),e.Ab(4608,b.Gb,b.Gb,[b.b,e.j,e.p]),e.Ab(4608,o.b,o.b,[]),e.Ab(1073742336,v.b,v.b,[]),e.Ab(1073742336,o.o,o.o,[]),e.Ab(1073742336,o.e,o.e,[]),e.Ab(1073742336,b.Ab,b.Ab,[]),e.Ab(1073742336,d.o,d.o,[[2,d.t],[2,d.m]]),e.Ab(1073742336,q,q,[]),e.Ab(1073742336,o.l,o.l,[]),e.Ab(1073742336,t,t,[]),e.Ab(1024,d.k,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);