(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"vRU+":function(l,n,u){"use strict";u.r(n);var o=u("8Y7J"),t=u("mrSG"),i=u("s7LF"),e=u("Wcq6"),a=u("Tj/N"),r=u("Zr1d");class s{constructor(l,n,u,o,t,e){this.fb=l,this.loadingCtrl=n,this.navCtrl=u,this.toastCtrl=o,this.fbAuth=t,this.keyboard=e,this.form=this.fb.group({email:["",i.m.required],password:["",i.m.required]})}ngOnInit(){this.verificaUser()}verificaUser(){this.user=JSON.parse(localStorage.getItem("app.user")),null!=this.user&&this.navCtrl.navigateRoot("home")}showKeyboard(){this.myInput.setFocus()}submit(){return t.__awaiter(this,void 0,void 0,(function*(){const l=yield this.loadingCtrl.create({message:"Autenticando..."});l.present(),this.fbAuth.auth.signInWithEmailAndPassword(this.form.controls.email.value,this.form.controls.password.value).then(n=>{l.dismiss(),localStorage.setItem("app.user",JSON.stringify(new a.a("",n.user.email,""))),this.navCtrl.navigateRoot("home")}).catch(n=>{console.log(n),l.dismiss(),this.showMessage("Usu\xe1rio ou senha inv\xe1lidos")})}))}signInWithGoogle(){return t.__awaiter(this,void 0,void 0,(function*(){this.fbAuth.auth.signInWithPopup(new e.auth.GoogleAuthProvider).then(l=>{console.log(l),localStorage.setItem("app.user",JSON.stringify(new a.a(l.user.displayName,l.user.email,l.user.photoURL))),this.navCtrl.navigateRoot("home")}).catch(l=>{console.log(l),this.showMessage("Usu\xe1rio ou senha inv\xe1lidos")})}))}showMessage(l){return t.__awaiter(this,void 0,void 0,(function*(){yield this.toastCtrl.create({message:l,duration:3e3}).then(l=>{console.log(l),l.present()})}))}goToSignup(){return t.__awaiter(this,void 0,void 0,(function*(){this.navCtrl.navigateForward("signup")}))}}class b{}var g=u("pMnS"),c=u("MKJQ"),d=u("sZkV"),p=u("irV9"),h=o.ob({encapsulation:0,styles:[['ion-content[_ngcontent-%COMP%]{--background:rgba(130, 46, 178, 1);--background:-moz-linear-gradient(top, rgba(130, 46, 178, 1) 0%, rgba(215, 24, 91, 1) 100%);--background:-webkit-gradient(left top, left bottom, color-stop(0%, rgba(130, 46, 178, 1)), color-stop(100%, rgba(215, 24, 91, 1)));--background:-webkit-linear-gradient(top, rgba(130, 46, 178, 1) 0%, rgba(215, 24, 91, 1) 100%);--background:-o-linear-gradient(top, rgba(130, 46, 178, 1) 0%, rgba(215, 24, 91, 1) 100%);--background:-ms-linear-gradient(top, rgba(130, 46, 178, 1) 0%, rgba(215, 24, 91, 1) 100%);--background:linear-gradient(to bottom, rgba(130, 46, 178, 1) 0%, rgba(215, 24, 91, 1) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#822eb2", endColorstr="#d7185b", GradientType=0);--ion-text-color:#fff}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{--ion-background-color:rgba(255, 255, 255, 0.1);border-radius:5px}ion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--ion-background-color:rgba(255, 255, 255, 0);--background-activated:rgba(255, 255, 255, 0);--highlight-color-focused:rgba(255, 255, 255, 0.1)}']],data:{}});function C(l){return o.Ib(0,[o.Fb(402653184,1,{myInput:0}),(l()(),o.qb(1,0,null,null,52,"ion-content",[["class","ion-padding"],["swipeEnabled","false"]],null,null,null,c.y,c.f)),o.pb(2,49152,null,0,d.s,[o.h,o.k,o.x],null,null),(l()(),o.qb(3,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o.qb(4,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o.qb(5,0,null,0,1,"h1",[["class","ion-text-center logo-white"]],null,null,null,null,null)),(l()(),o.Hb(-1,null,[" App TCC "])),(l()(),o.qb(7,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o.qb(8,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o.qb(9,0,null,0,30,"ion-list",[["lines","none"]],null,null,null,c.F,c.m)),o.pb(10,49152,null,0,d.M,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(l()(),o.qb(11,0,null,0,28,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,u){var t=!0;return"submit"===n&&(t=!1!==o.Cb(l,13).onSubmit(u)&&t),"reset"===n&&(t=!1!==o.Cb(l,13).onReset()&&t),t}),null,null)),o.pb(12,16384,null,0,i.q,[],null,null),o.pb(13,540672,null,0,i.d,[[8,null],[8,null]],{form:[0,"form"]},null),o.Eb(2048,null,i.a,null,[i.d]),o.pb(15,16384,null,0,i.j,[[4,i.a]],null,null),(l()(),o.qb(16,0,null,null,11,"ion-item",[],null,null,null,c.D,c.k)),o.pb(17,49152,null,0,d.F,[o.h,o.k,o.x],null,null),(l()(),o.qb(18,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,c.E,c.l)),o.pb(19,49152,null,0,d.L,[o.h,o.k,o.x],{position:[0,"position"]},null),(l()(),o.Hb(-1,0,["E-mail"])),(l()(),o.qb(21,0,null,0,6,"ion-input",[["formControlName","email"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==o.Cb(l,22)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==o.Cb(l,22)._handleInputEvent(u.target)&&t),t}),c.C,c.j)),o.pb(22,16384,null,0,d.Hb,[o.k],null,null),o.Eb(1024,null,i.g,(function(l){return[l]}),[d.Hb]),o.pb(24,671744,null,0,i.c,[[3,i.a],[8,null],[8,null],[6,i.g],[2,i.p]],{name:[0,"name"]},null),o.Eb(2048,null,i.h,null,[i.c]),o.pb(26,16384,null,0,i.i,[[4,i.h]],null,null),o.pb(27,49152,[[1,4],["myInput",4]],0,d.E,[o.h,o.k,o.x],{type:[0,"type"]},null),(l()(),o.qb(28,0,null,null,11,"ion-item",[],null,null,null,c.D,c.k)),o.pb(29,49152,null,0,d.F,[o.h,o.k,o.x],null,null),(l()(),o.qb(30,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,c.E,c.l)),o.pb(31,49152,null,0,d.L,[o.h,o.k,o.x],{position:[0,"position"]},null),(l()(),o.Hb(-1,0,["Senha"])),(l()(),o.qb(33,0,null,0,6,"ion-input",[["formControlName","password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0;return"ionBlur"===n&&(t=!1!==o.Cb(l,34)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==o.Cb(l,34)._handleInputEvent(u.target)&&t),t}),c.C,c.j)),o.pb(34,16384,null,0,d.Hb,[o.k],null,null),o.Eb(1024,null,i.g,(function(l){return[l]}),[d.Hb]),o.pb(36,671744,null,0,i.c,[[3,i.a],[8,null],[8,null],[6,i.g],[2,i.p]],{name:[0,"name"]},null),o.Eb(2048,null,i.h,null,[i.c]),o.pb(38,16384,null,0,i.i,[[4,i.h]],null,null),o.pb(39,49152,[[1,4],["myInput",4]],0,d.E,[o.h,o.k,o.x],{type:[0,"type"]},null),(l()(),o.qb(40,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o.qb(41,0,null,0,2,"ion-button",[["color","light"],["expand","full"],["fill","outline"],["ion-item",""],["shape","round"],["size","large"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.submit()&&o),o}),c.v,c.c)),o.pb(42,49152,null,0,d.i,[o.h,o.k,o.x],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"],shape:[3,"shape"],size:[4,"size"]},null),(l()(),o.Hb(-1,0,[" Entrar "])),(l()(),o.qb(44,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o.qb(45,0,null,0,4,"ion-button",[["color","light"],["expand","block"],["ion-item",""]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.signInWithGoogle()&&o),o}),c.v,c.c)),o.pb(46,49152,null,0,d.i,[o.h,o.k,o.x],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),o.qb(47,0,null,0,1,"ion-icon",[["name","logo-google"],["slot","start"]],null,null,null,c.B,c.i)),o.pb(48,49152,null,0,d.A,[o.h,o.k,o.x],{name:[0,"name"]},null),(l()(),o.Hb(-1,0,["\xa0\xa0LOGIN COM GOOGLE "])),(l()(),o.qb(50,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),o.qb(51,0,null,0,2,"ion-button",[["color","light"],["expand","full"],["fill","clear"],["ion-item",""]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==l.component.goToSignup()&&o),o}),c.v,c.c)),o.pb(52,49152,null,0,d.i,[o.h,o.k,o.x],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"]},null),(l()(),o.Hb(-1,0,[" Ainda n\xe3o sou cadastrado "]))],(function(l,n){var u=n.component;l(n,10,0,"none"),l(n,13,0,u.form),l(n,19,0,"stacked"),l(n,24,0,"email"),l(n,27,0,"email"),l(n,31,0,"stacked"),l(n,36,0,"password"),l(n,39,0,"password"),l(n,42,0,"light","full","outline","round","large"),l(n,46,0,"light","block"),l(n,48,0,"logo-google"),l(n,52,0,"light","full","clear")}),(function(l,n){l(n,11,0,o.Cb(n,15).ngClassUntouched,o.Cb(n,15).ngClassTouched,o.Cb(n,15).ngClassPristine,o.Cb(n,15).ngClassDirty,o.Cb(n,15).ngClassValid,o.Cb(n,15).ngClassInvalid,o.Cb(n,15).ngClassPending),l(n,21,0,o.Cb(n,26).ngClassUntouched,o.Cb(n,26).ngClassTouched,o.Cb(n,26).ngClassPristine,o.Cb(n,26).ngClassDirty,o.Cb(n,26).ngClassValid,o.Cb(n,26).ngClassInvalid,o.Cb(n,26).ngClassPending),l(n,33,0,o.Cb(n,38).ngClassUntouched,o.Cb(n,38).ngClassTouched,o.Cb(n,38).ngClassPristine,o.Cb(n,38).ngClassDirty,o.Cb(n,38).ngClassValid,o.Cb(n,38).ngClassInvalid,o.Cb(n,38).ngClassPending)}))}function m(l){return o.Ib(0,[(l()(),o.qb(0,0,null,null,1,"app-login",[],null,null,null,C,h)),o.pb(1,114688,null,0,s,[i.b,d.Bb,d.Db,d.Ib,p.a,r.a],null,null)],(function(l,n){l(n,1,0)}),null)}var f=o.mb("app-login",s,m,{},{},[]),v=u("SVse"),k=u("rzCp"),w=u("yA/v"),y=u("iInd");u.d(n,"LoginPageModuleNgFactory",(function(){return A}));var A=o.nb(b,[],(function(l){return o.zb([o.Ab(512,o.j,o.Y,[[8,[g.a,f]],[3,o.j],o.v]),o.Ab(4608,v.k,v.j,[o.s,[2,v.r]]),o.Ab(4608,i.o,i.o,[]),o.Ab(4608,i.b,i.b,[]),o.Ab(4608,d.b,d.b,[o.x,o.g]),o.Ab(4608,d.Cb,d.Cb,[d.b,o.j,o.p]),o.Ab(4608,d.Fb,d.Fb,[d.b,o.j,o.p]),o.Ab(4608,p.a,p.a,[w.d,[2,w.c],o.z,o.x]),o.Ab(1073742336,v.b,v.b,[]),o.Ab(1073742336,i.n,i.n,[]),o.Ab(1073742336,i.e,i.e,[]),o.Ab(1073742336,i.k,i.k,[]),o.Ab(1073742336,d.zb,d.zb,[]),o.Ab(1073742336,k.a,k.a,[]),o.Ab(1073742336,y.o,y.o,[[2,y.t],[2,y.m]]),o.Ab(1073742336,b,b,[]),o.Ab(1024,y.k,(function(){return[[{path:"",component:s}]]}),[])])}))}}]);