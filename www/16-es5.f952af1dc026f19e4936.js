(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"vRU+":function(n,l,u){"use strict";u.r(l);var t=u("8Y7J"),i=u("mrSG"),o=u("s7LF"),e=u("Wcq6"),a=u("Tj/N");class s{constructor(n,l,u,t,i){this.fb=n,this.loadingCtrl=l,this.navCtrl=u,this.toastCtrl=t,this.fbAuth=i,this.form=this.fb.group({email:["",o.n.required],password:["",o.n.required]})}ngOnInit(){this.verificaUser()}verificaUser(){return i.__awaiter(this,void 0,void 0,(function*(){if(this.user=JSON.parse(localStorage.getItem("app.user")),null!=this.user){const n=yield this.loadingCtrl.create({message:"Autenticando..."});n.present(),this.navCtrl.navigateRoot("menu/home"),n.dismiss()}}))}submit(){return i.__awaiter(this,void 0,void 0,(function*(){const n=yield this.loadingCtrl.create({message:"Autenticando..."});n.present(),this.fbAuth.auth.signInWithEmailAndPassword(this.form.controls.email.value,this.form.controls.password.value).then(l=>{n.dismiss(),localStorage.setItem("app.user",JSON.stringify(new a.a("",l.user.email,""))),this.navCtrl.navigateRoot("menu/home")}).catch(l=>{console.log(l),n.dismiss(),this.showMessage("Usu\xe1rio ou senha inv\xe1lidos")})}))}signInWithGoogle(){return i.__awaiter(this,void 0,void 0,(function*(){this.fbAuth.auth.signInWithPopup(new e.auth.GoogleAuthProvider).then(n=>i.__awaiter(this,void 0,void 0,(function*(){console.log(n),localStorage.setItem("app.user",JSON.stringify(new a.a(n.user.displayName,n.user.email,n.user.photoURL)));const l=yield this.loadingCtrl.create({message:"Autenticando..."});l.present(),this.navCtrl.navigateRoot("menu/home"),l.dismiss()}))).catch(n=>{console.log(n),this.showMessage("Usu\xe1rio ou senha inv\xe1lidos")})}))}showMessage(n){return i.__awaiter(this,void 0,void 0,(function*(){yield this.toastCtrl.create({message:n,duration:3e3}).then(n=>{console.log(n),n.present()})}))}goToSignup(){return i.__awaiter(this,void 0,void 0,(function*(){this.navCtrl.navigateForward("signup")}))}}class r{}var b=u("pMnS"),g=u("MKJQ"),c=u("sZkV"),d=u("irV9"),h=t.ob({encapsulation:0,styles:[['ion-content[_ngcontent-%COMP%]{--background:rgb(0, 191, 181);--background:linear-gradient(45deg, rgba(0, 191, 181, 1) 35%, rgba(0, 124, 191, 1) 70%);--ion-text-color:#fff}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{--ion-background-color:rgba(255, 255, 255, 0.1);border-radius:5px;max-width:600px;margin-left:auto;margin-right:auto}ion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--ion-background-color:rgba(255, 255, 255, 0);--background-activated:rgba(255, 255, 255, 0);--highlight-color-focused:rgba(255, 255, 255, 0.1)}ion-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-family:"Merienda One",cursive}ion-content[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{max-width:600px;margin-left:auto;margin-right:auto}']],data:{}});function p(n){return t.Ib(0,[t.Fb(402653184,1,{myInput:0}),(n()(),t.qb(1,0,null,null,52,"ion-content",[["class","ion-padding"],["swipeEnabled","false"]],null,null,null,g.H,g.h)),t.pb(2,49152,null,0,c.u,[t.h,t.k,t.x],null,null),(n()(),t.qb(3,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),t.qb(4,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),t.qb(5,0,null,0,1,"h1",[["class","ion-text-center logo-white"]],null,null,null,null,null)),(n()(),t.Hb(-1,null,[" Beaver House "])),(n()(),t.qb(7,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),t.qb(8,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),t.qb(9,0,null,0,30,"ion-list",[["lines","none"]],null,null,null,g.P,g.p)),t.pb(10,49152,null,0,c.O,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(n()(),t.qb(11,0,null,0,28,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(n,l,u){var i=!0;return"submit"===l&&(i=!1!==t.Cb(n,13).onSubmit(u)&&i),"reset"===l&&(i=!1!==t.Cb(n,13).onReset()&&i),i}),null,null)),t.pb(12,16384,null,0,o.r,[],null,null),t.pb(13,540672,null,0,o.d,[[8,null],[8,null]],{form:[0,"form"]},null),t.Eb(2048,null,o.a,null,[o.d]),t.pb(15,16384,null,0,o.j,[[4,o.a]],null,null),(n()(),t.qb(16,0,null,null,11,"ion-item",[],null,null,null,g.N,g.n)),t.pb(17,49152,null,0,c.H,[t.h,t.k,t.x],null,null),(n()(),t.qb(18,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,g.O,g.o)),t.pb(19,49152,null,0,c.N,[t.h,t.k,t.x],{position:[0,"position"]},null),(n()(),t.Hb(-1,0,["Login"])),(n()(),t.qb(21,0,null,0,6,"ion-input",[["formControlName","email"],["type","email"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,u){var i=!0;return"ionBlur"===l&&(i=!1!==t.Cb(n,22)._handleBlurEvent(u.target)&&i),"ionChange"===l&&(i=!1!==t.Cb(n,22)._handleInputEvent(u.target)&&i),i}),g.M,g.m)),t.pb(22,16384,null,0,c.Kb,[t.k],null,null),t.Eb(1024,null,o.g,(function(n){return[n]}),[c.Kb]),t.pb(24,671744,null,0,o.c,[[3,o.a],[8,null],[8,null],[6,o.g],[2,o.q]],{name:[0,"name"]},null),t.Eb(2048,null,o.h,null,[o.c]),t.pb(26,16384,null,0,o.i,[[4,o.h]],null,null),t.pb(27,49152,[[1,4],["myInput",4]],0,c.G,[t.h,t.k,t.x],{type:[0,"type"]},null),(n()(),t.qb(28,0,null,null,11,"ion-item",[],null,null,null,g.N,g.n)),t.pb(29,49152,null,0,c.H,[t.h,t.k,t.x],null,null),(n()(),t.qb(30,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,g.O,g.o)),t.pb(31,49152,null,0,c.N,[t.h,t.k,t.x],{position:[0,"position"]},null),(n()(),t.Hb(-1,0,["Senha"])),(n()(),t.qb(33,0,null,0,6,"ion-input",[["formControlName","password"],["type","password"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,u){var i=!0;return"ionBlur"===l&&(i=!1!==t.Cb(n,34)._handleBlurEvent(u.target)&&i),"ionChange"===l&&(i=!1!==t.Cb(n,34)._handleInputEvent(u.target)&&i),i}),g.M,g.m)),t.pb(34,16384,null,0,c.Kb,[t.k],null,null),t.Eb(1024,null,o.g,(function(n){return[n]}),[c.Kb]),t.pb(36,671744,null,0,o.c,[[3,o.a],[8,null],[8,null],[6,o.g],[2,o.q]],{name:[0,"name"]},null),t.Eb(2048,null,o.h,null,[o.c]),t.pb(38,16384,null,0,o.i,[[4,o.h]],null,null),t.pb(39,49152,[[1,4],["myInput",4]],0,c.G,[t.h,t.k,t.x],{type:[0,"type"]},null),(n()(),t.qb(40,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),t.qb(41,0,null,0,2,"ion-button",[["color","light"],["expand","full"],["fill","outline"],["ion-item",""],["shape","round"],["size","medium"]],null,[[null,"click"]],(function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.submit()&&t),t}),g.D,g.d)),t.pb(42,49152,null,0,c.k,[t.h,t.k,t.x],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"],shape:[3,"shape"],size:[4,"size"]},null),(n()(),t.Hb(-1,0,[" Entrar "])),(n()(),t.qb(44,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),t.qb(45,0,null,0,4,"ion-button",[["color","light"],["expand","block"],["ion-item",""]],null,[[null,"click"]],(function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.signInWithGoogle()&&t),t}),g.D,g.d)),t.pb(46,49152,null,0,c.k,[t.h,t.k,t.x],{color:[0,"color"],expand:[1,"expand"]},null),(n()(),t.qb(47,0,null,0,1,"ion-icon",[["name","logo-google"],["slot","start"]],null,null,null,g.L,g.l)),t.pb(48,49152,null,0,c.C,[t.h,t.k,t.x],{name:[0,"name"]},null),(n()(),t.Hb(-1,0,["\xa0\xa0Login com Google "])),(n()(),t.qb(50,0,null,0,0,"br",[],null,null,null,null,null)),(n()(),t.qb(51,0,null,0,2,"ion-button",[["color","light"],["expand","full"],["fill","clear"],["ion-item",""]],null,[[null,"click"]],(function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.goToSignup()&&t),t}),g.D,g.d)),t.pb(52,49152,null,0,c.k,[t.h,t.k,t.x],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"]},null),(n()(),t.Hb(-1,0,[" Ainda n\xe3o sou cadastrado! "]))],(function(n,l){var u=l.component;n(l,10,0,"none"),n(l,13,0,u.form),n(l,19,0,"stacked"),n(l,24,0,"email"),n(l,27,0,"email"),n(l,31,0,"stacked"),n(l,36,0,"password"),n(l,39,0,"password"),n(l,42,0,"light","full","outline","round","medium"),n(l,46,0,"light","block"),n(l,48,0,"logo-google"),n(l,52,0,"light","full","clear")}),(function(n,l){n(l,11,0,t.Cb(l,15).ngClassUntouched,t.Cb(l,15).ngClassTouched,t.Cb(l,15).ngClassPristine,t.Cb(l,15).ngClassDirty,t.Cb(l,15).ngClassValid,t.Cb(l,15).ngClassInvalid,t.Cb(l,15).ngClassPending),n(l,21,0,t.Cb(l,26).ngClassUntouched,t.Cb(l,26).ngClassTouched,t.Cb(l,26).ngClassPristine,t.Cb(l,26).ngClassDirty,t.Cb(l,26).ngClassValid,t.Cb(l,26).ngClassInvalid,t.Cb(l,26).ngClassPending),n(l,33,0,t.Cb(l,38).ngClassUntouched,t.Cb(l,38).ngClassTouched,t.Cb(l,38).ngClassPristine,t.Cb(l,38).ngClassDirty,t.Cb(l,38).ngClassValid,t.Cb(l,38).ngClassInvalid,t.Cb(l,38).ngClassPending)}))}var m=t.mb("app-login",s,(function(n){return t.Ib(0,[(n()(),t.qb(0,0,null,null,1,"app-login",[],null,null,null,p,h)),t.pb(1,114688,null,0,s,[o.b,c.Db,c.Fb,c.Lb,d.a],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),C=u("SVse"),f=u("rzCp"),v=u("yA/v"),k=u("iInd");u.d(l,"LoginPageModuleNgFactory",(function(){return w}));var w=t.nb(r,[],(function(n){return t.zb([t.Ab(512,t.j,t.Y,[[8,[b.a,m]],[3,t.j],t.v]),t.Ab(4608,C.k,C.j,[t.s,[2,C.r]]),t.Ab(4608,o.p,o.p,[]),t.Ab(4608,o.b,o.b,[]),t.Ab(4608,c.c,c.c,[t.x,t.g]),t.Ab(4608,c.Eb,c.Eb,[c.c,t.j,t.p]),t.Ab(4608,c.Hb,c.Hb,[c.c,t.j,t.p]),t.Ab(4608,d.a,d.a,[v.d,[2,v.c],t.z,t.x]),t.Ab(1073742336,C.b,C.b,[]),t.Ab(1073742336,o.o,o.o,[]),t.Ab(1073742336,o.e,o.e,[]),t.Ab(1073742336,o.l,o.l,[]),t.Ab(1073742336,c.Bb,c.Bb,[]),t.Ab(1073742336,f.a,f.a,[]),t.Ab(1073742336,k.q,k.q,[[2,k.v],[2,k.m]]),t.Ab(1073742336,r,r,[]),t.Ab(1024,k.k,(function(){return[[{path:"",component:s}]]}),[])])}))}}]);