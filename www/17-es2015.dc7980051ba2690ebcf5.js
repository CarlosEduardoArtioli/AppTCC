(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{gw6m:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J"),i=u("mrSG"),o=u("s7LF"),a=u("Zr1d");class e{constructor(l,n,u,t,i,a){this.fb=l,this.loadingCtrl=n,this.navCtrl=u,this.toastCtrl=t,this.fbAuth=i,this.keyboard=a,this.form=this.fb.group({email:["",o.m.required],password:["",o.m.required]})}ngOnInit(){}showKeyboard(){this.myInput.setFocus()}submit(){return i.__awaiter(this,void 0,void 0,(function*(){const l=yield this.loadingCtrl.create({message:"Cadastrando..."});l.present(),this.fbAuth.auth.createUserWithEmailAndPassword(this.form.controls.email.value,this.form.controls.password.value).then(n=>{this.showMessage("Bem-vindo!"),l.dismiss(),this.navCtrl.navigateRoot("login")}).catch(n=>{l.dismiss(),this.showMessage("N\xe3o foi poss\xedvel realizar seu cadastro")})}))}showMessage(l){return i.__awaiter(this,void 0,void 0,(function*(){yield this.toastCtrl.create({message:l,duration:3e3}).then(l=>{console.log(l),l.present()})}))}cancel(){return i.__awaiter(this,void 0,void 0,(function*(){this.navCtrl.navigateBack("login")}))}}class r{}var s=u("pMnS"),b=u("MKJQ"),g=u("sZkV"),c=u("irV9"),d=t.ob({encapsulation:0,styles:[['ion-content[_ngcontent-%COMP%]{--background:rgba(130, 46, 178, 1);--background:-moz-linear-gradient(top, rgba(130, 46, 178, 1) 0%, rgba(215, 24, 91, 1) 100%);--background:-webkit-gradient(left top, left bottom, color-stop(0%, rgba(130, 46, 178, 1)), color-stop(100%, rgba(215, 24, 91, 1)));--background:-webkit-linear-gradient(top, rgba(130, 46, 178, 1) 0%, rgba(215, 24, 91, 1) 100%);--background:-o-linear-gradient(top, rgba(130, 46, 178, 1) 0%, rgba(215, 24, 91, 1) 100%);--background:-ms-linear-gradient(top, rgba(130, 46, 178, 1) 0%, rgba(215, 24, 91, 1) 100%);--background:linear-gradient(to bottom, rgba(130, 46, 178, 1) 0%, rgba(215, 24, 91, 1) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#822eb2", endColorstr="#d7185b", GradientType=0);--ion-text-color:#fff}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{--ion-background-color:rgba(255, 255, 255, 0.1);border-radius:5px}ion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--ion-background-color:rgba(255, 255, 255, 0);--background-activated:rgba(255, 255, 255, 0);--highlight-color-focused:rgba(255, 255, 255, 0.1)}']],data:{}});function p(l){return t.Ib(0,[t.Fb(402653184,1,{myInput:0}),(l()(),t.qb(1,0,null,null,45,"ion-content",[["class","ion-padding swiper-no-swiping"]],null,null,null,b.y,b.f)),t.pb(2,49152,null,0,g.s,[t.h,t.k,t.x],null,null),(l()(),t.qb(3,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.qb(4,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.qb(5,0,null,0,1,"h1",[["class","ion-text-center logo-white"]],null,null,null,null,null)),(l()(),t.Hb(-1,null,[" App TCC "])),(l()(),t.qb(7,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.qb(8,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.qb(9,0,null,0,30,"ion-list",[["lines","none"]],null,null,null,b.F,b.m)),t.pb(10,49152,null,0,g.M,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.qb(11,0,null,0,28,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var i=!0;return"submit"===n&&(i=!1!==t.Cb(l,13).onSubmit(u)&&i),"reset"===n&&(i=!1!==t.Cb(l,13).onReset()&&i),i}),null,null)),t.pb(12,16384,null,0,o.q,[],null,null),t.pb(13,540672,null,0,o.d,[[8,null],[8,null]],{form:[0,"form"]},null),t.Eb(2048,null,o.a,null,[o.d]),t.pb(15,16384,null,0,o.j,[[4,o.a]],null,null),(l()(),t.qb(16,0,null,null,11,"ion-item",[],null,null,null,b.D,b.k)),t.pb(17,49152,null,0,g.F,[t.h,t.k,t.x],null,null),(l()(),t.qb(18,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,b.E,b.l)),t.pb(19,49152,null,0,g.L,[t.h,t.k,t.x],{position:[0,"position"]},null),(l()(),t.Hb(-1,0,["E-mail"])),(l()(),t.qb(21,0,null,0,6,"ion-input",[["formControlName","email"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0;return"ionBlur"===n&&(i=!1!==t.Cb(l,22)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==t.Cb(l,22)._handleInputEvent(u.target)&&i),i}),b.C,b.j)),t.pb(22,16384,null,0,g.Hb,[t.k],null,null),t.Eb(1024,null,o.g,(function(l){return[l]}),[g.Hb]),t.pb(24,671744,null,0,o.c,[[3,o.a],[8,null],[8,null],[6,o.g],[2,o.p]],{name:[0,"name"]},null),t.Eb(2048,null,o.h,null,[o.c]),t.pb(26,16384,null,0,o.i,[[4,o.h]],null,null),t.pb(27,49152,[[1,4],["myInput",4]],0,g.E,[t.h,t.k,t.x],{type:[0,"type"]},null),(l()(),t.qb(28,0,null,null,11,"ion-item",[],null,null,null,b.D,b.k)),t.pb(29,49152,null,0,g.F,[t.h,t.k,t.x],null,null),(l()(),t.qb(30,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,b.E,b.l)),t.pb(31,49152,null,0,g.L,[t.h,t.k,t.x],{position:[0,"position"]},null),(l()(),t.Hb(-1,0,["Senha"])),(l()(),t.qb(33,0,null,0,6,"ion-input",[["formControlName","password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0;return"ionBlur"===n&&(i=!1!==t.Cb(l,34)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==t.Cb(l,34)._handleInputEvent(u.target)&&i),i}),b.C,b.j)),t.pb(34,16384,null,0,g.Hb,[t.k],null,null),t.Eb(1024,null,o.g,(function(l){return[l]}),[g.Hb]),t.pb(36,671744,null,0,o.c,[[3,o.a],[8,null],[8,null],[6,o.g],[2,o.p]],{name:[0,"name"]},null),t.Eb(2048,null,o.h,null,[o.c]),t.pb(38,16384,null,0,o.i,[[4,o.h]],null,null),t.pb(39,49152,[[1,4],["myInput",4]],0,g.E,[t.h,t.k,t.x],{type:[0,"type"]},null),(l()(),t.qb(40,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),t.qb(41,0,null,0,2,"ion-button",[["color","light"],["expand","full"],["fill","outline"],["ion-item",""],["shape","round"],["size","large"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.submit()&&t),t}),b.v,b.c)),t.pb(42,49152,null,0,g.i,[t.h,t.k,t.x],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"],shape:[3,"shape"],size:[4,"size"]},null),(l()(),t.Hb(-1,0,[" Cadastrar "])),(l()(),t.qb(44,0,null,0,2,"ion-button",[["color","light"],["expand","full"],["fill","clear"],["ion-item",""]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.cancel()&&t),t}),b.v,b.c)),t.pb(45,49152,null,0,g.i,[t.h,t.k,t.x],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"]},null),(l()(),t.Hb(-1,0,[" Cancelar "]))],(function(l,n){var u=n.component;l(n,10,0,"none"),l(n,13,0,u.form),l(n,19,0,"stacked"),l(n,24,0,"email"),l(n,27,0,"email"),l(n,31,0,"stacked"),l(n,36,0,"password"),l(n,39,0,"password"),l(n,42,0,"light","full","outline","round","large"),l(n,45,0,"light","full","clear")}),(function(l,n){l(n,11,0,t.Cb(n,15).ngClassUntouched,t.Cb(n,15).ngClassTouched,t.Cb(n,15).ngClassPristine,t.Cb(n,15).ngClassDirty,t.Cb(n,15).ngClassValid,t.Cb(n,15).ngClassInvalid,t.Cb(n,15).ngClassPending),l(n,21,0,t.Cb(n,26).ngClassUntouched,t.Cb(n,26).ngClassTouched,t.Cb(n,26).ngClassPristine,t.Cb(n,26).ngClassDirty,t.Cb(n,26).ngClassValid,t.Cb(n,26).ngClassInvalid,t.Cb(n,26).ngClassPending),l(n,33,0,t.Cb(n,38).ngClassUntouched,t.Cb(n,38).ngClassTouched,t.Cb(n,38).ngClassPristine,t.Cb(n,38).ngClassDirty,t.Cb(n,38).ngClassValid,t.Cb(n,38).ngClassInvalid,t.Cb(n,38).ngClassPending)}))}function h(l){return t.Ib(0,[(l()(),t.qb(0,0,null,null,1,"app-signup",[],null,null,null,p,d)),t.pb(1,114688,null,0,e,[o.b,g.Bb,g.Db,g.Ib,c.a,a.a],null,null)],(function(l,n){l(n,1,0)}),null)}var C=t.mb("app-signup",e,h,{},{},[]),m=u("SVse"),f=u("rzCp"),v=u("yA/v"),k=u("iInd");u.d(n,"SignupPageModuleNgFactory",(function(){return w}));var w=t.nb(r,[],(function(l){return t.zb([t.Ab(512,t.j,t.Y,[[8,[s.a,C]],[3,t.j],t.v]),t.Ab(4608,m.k,m.j,[t.s,[2,m.r]]),t.Ab(4608,o.o,o.o,[]),t.Ab(4608,o.b,o.b,[]),t.Ab(4608,g.b,g.b,[t.x,t.g]),t.Ab(4608,g.Cb,g.Cb,[g.b,t.j,t.p]),t.Ab(4608,g.Fb,g.Fb,[g.b,t.j,t.p]),t.Ab(4608,c.a,c.a,[v.d,[2,v.c],t.z,t.x]),t.Ab(1073742336,m.b,m.b,[]),t.Ab(1073742336,o.n,o.n,[]),t.Ab(1073742336,o.e,o.e,[]),t.Ab(1073742336,o.k,o.k,[]),t.Ab(1073742336,g.zb,g.zb,[]),t.Ab(1073742336,f.a,f.a,[]),t.Ab(1073742336,k.o,k.o,[[2,k.t],[2,k.m]]),t.Ab(1073742336,r,r,[]),t.Ab(1024,k.k,(function(){return[[{path:"",component:e}]]}),[])])}))}}]);