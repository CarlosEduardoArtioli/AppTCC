(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{gw6m:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J"),i=u("mrSG"),t=u("ej43"),o=u("s7LF");class a{constructor(l,n,u,e,i){this.navCtrl=l,this.toastCtrl=n,this.authService=u,this.router=e,this.formBuilder=i,this.errorMessage="",this.successMessage="",this.validationMessages={email:[{type:"required",message:"Insira um email."},{type:"pattern",message:"Insira um email valido."}],password:[{type:"required",message:"Insira a senha."},{type:"minlength",message:"A senha deve ter mais de 5 caracteres."}]}}ngOnInit(){this.validationsForm=this.formBuilder.group({email:new o.c("",o.o.compose([o.o.required,o.o.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")])),password:new o.c("",o.o.compose([o.o.minLength(5),o.o.required]))})}showMessage(l){return i.__awaiter(this,void 0,void 0,(function*(){yield this.toastCtrl.create({message:l,duration:3e3}).then(l=>{console.log(l),l.present()})}))}cancel(){return i.__awaiter(this,void 0,void 0,(function*(){this.navCtrl.navigateBack("login")}))}signUp(l){this.authService.registerUser(l).then(l=>{this.authService.SendVerificationMail(),this.router.navigate(["verify-email"])}).catch(l=>{this.showMessage(l.message)})}}class r{}var s=u("pMnS"),b=u("SVse"),g=u("MKJQ"),c=u("sZkV"),d=u("iInd"),p=e.ob({encapsulation:0,styles:[['ion-content[_ngcontent-%COMP%]{--background:rgb(0,191,181);--background:linear-gradient(45deg, rgba(0,191,181,1) 35%, rgba(0,124,191,1) 70%);--ion-text-color:#fff}ion-content[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{--ion-background-color:rgba(255, 255, 255, 0.2);border-radius:5px;max-width:600px;margin-left:auto;margin-right:auto}ion-content[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{--ion-background-color:rgba(255, 255, 255, 0);--background-activated:rgba(255, 255, 255, 0);--highlight-color-focused:rgba(255, 255, 255, 0.2)}ion-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-family:"Merienda One",cursive}ion-content[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{max-width:600px;margin-left:auto;margin-right:auto}']],data:{}});function m(l){return e.Ib(0,[(l()(),e.qb(0,0,null,null,1,"div",[["class","error-message"]],null,null,null,null,null)),(l()(),e.Hb(1,null,[" "," "]))],null,(function(l,n){l(n,1,0,n.parent.context.$implicit.message)}))}function h(l){return e.Ib(0,[(l()(),e.qb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e.fb(16777216,null,null,1,null,m)),e.pb(2,16384,null,0,b.i,[e.N,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.fb(0,null,null,0))],(function(l,n){var u=n.component;l(n,2,0,u.validationsForm.get("email").hasError(n.context.$implicit.type)&&(u.validationsForm.get("email").dirty||u.validationsForm.get("email").touched))}),null)}function f(l){return e.Ib(0,[(l()(),e.qb(0,0,null,null,1,"div",[["class","error-message"]],null,null,null,null,null)),(l()(),e.Hb(1,null,[" "," "]))],null,(function(l,n){l(n,1,0,n.parent.context.$implicit.message)}))}function C(l){return e.Ib(0,[(l()(),e.qb(0,0,null,null,2,null,null,null,null,null,null,null)),(l()(),e.fb(16777216,null,null,1,null,f)),e.pb(2,16384,null,0,b.i,[e.N,e.J],{ngIf:[0,"ngIf"]},null),(l()(),e.fb(0,null,null,0))],(function(l,n){var u=n.component;l(n,2,0,u.validationsForm.get("password").hasError(n.context.$implicit.type)&&(u.validationsForm.get("password").dirty||u.validationsForm.get("password").touched))}),null)}function v(l){return e.Ib(0,[(l()(),e.qb(0,0,null,null,54,"ion-content",[["class","ion-padding swiper-no-swiping"]],null,null,null,g.H,g.h)),e.pb(1,49152,null,0,c.u,[e.h,e.k,e.x],null,null),(l()(),e.qb(2,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.qb(3,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.qb(4,0,null,0,1,"h1",[["class","ion-text-center logo-white"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,[" Beaver House "])),(l()(),e.qb(6,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.qb(7,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.qb(8,0,null,0,42,"form",[["class","form"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var i=!0,t=l.component;return"submit"===n&&(i=!1!==e.Cb(l,10).onSubmit(u)&&i),"reset"===n&&(i=!1!==e.Cb(l,10).onReset()&&i),"ngSubmit"===n&&(i=!1!==t.signUp(t.validationsForm.value)&&i),i}),null,null)),e.pb(9,16384,null,0,o.s,[],null,null),e.pb(10,540672,null,0,o.e,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),e.Eb(2048,null,o.a,null,[o.e]),e.pb(12,16384,null,0,o.k,[[4,o.a]],null,null),(l()(),e.qb(13,0,null,null,33,"ion-list",[["lines","none"]],null,null,null,g.P,g.p)),e.pb(14,49152,null,0,c.O,[e.h,e.k,e.x],{lines:[0,"lines"]},null),(l()(),e.qb(15,0,null,0,11,"ion-item",[],null,null,null,g.N,g.n)),e.pb(16,49152,null,0,c.H,[e.h,e.k,e.x],null,null),(l()(),e.qb(17,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,g.O,g.o)),e.pb(18,49152,null,0,c.N,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Hb(-1,0,["Email"])),(l()(),e.qb(20,0,null,0,6,"ion-input",[["formControlName","email"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0;return"ionBlur"===n&&(i=!1!==e.Cb(l,21)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Cb(l,21)._handleInputEvent(u.target)&&i),i}),g.M,g.m)),e.pb(21,16384,null,0,c.Kb,[e.k],null,null),e.Eb(1024,null,o.h,(function(l){return[l]}),[c.Kb]),e.pb(23,671744,null,0,o.d,[[3,o.a],[8,null],[8,null],[6,o.h],[2,o.r]],{name:[0,"name"]},null),e.Eb(2048,null,o.i,null,[o.d]),e.pb(25,16384,null,0,o.j,[[4,o.i]],null,null),e.pb(26,49152,null,0,c.G,[e.h,e.k,e.x],{type:[0,"type"]},null),(l()(),e.qb(27,0,null,0,2,"div",[["class","validation-errors"]],null,null,null,null,null)),(l()(),e.fb(16777216,null,null,1,null,h)),e.pb(29,278528,null,0,b.h,[e.N,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e.qb(30,0,null,0,13,"ion-item",[],null,null,null,g.N,g.n)),e.pb(31,49152,null,0,c.H,[e.h,e.k,e.x],null,null),(l()(),e.qb(32,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,g.O,g.o)),e.pb(33,49152,null,0,c.N,[e.h,e.k,e.x],{position:[0,"position"]},null),(l()(),e.Hb(-1,0,["Senha"])),(l()(),e.qb(35,0,null,0,8,"ion-input",[["class","form-controll"],["formControlName","password"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var i=!0;return"ionBlur"===n&&(i=!1!==e.Cb(l,38)._handleBlurEvent(u.target)&&i),"ionChange"===n&&(i=!1!==e.Cb(l,38)._handleInputEvent(u.target)&&i),i}),g.M,g.m)),e.pb(36,16384,null,0,o.n,[],{required:[0,"required"]},null),e.Eb(1024,null,o.g,(function(l){return[l]}),[o.n]),e.pb(38,16384,null,0,c.Kb,[e.k],null,null),e.Eb(1024,null,o.h,(function(l){return[l]}),[c.Kb]),e.pb(40,671744,null,0,o.d,[[3,o.a],[6,o.g],[8,null],[6,o.h],[2,o.r]],{name:[0,"name"]},null),e.Eb(2048,null,o.i,null,[o.d]),e.pb(42,16384,null,0,o.j,[[4,o.i]],null,null),e.pb(43,49152,null,0,c.G,[e.h,e.k,e.x],{required:[0,"required"],type:[1,"type"]},null),(l()(),e.qb(44,0,null,0,2,"div",[["class","validation-errors"]],null,null,null,null,null)),(l()(),e.fb(16777216,null,null,1,null,C)),e.pb(46,278528,null,0,b.h,[e.N,e.J,e.q],{ngForOf:[0,"ngForOf"]},null),(l()(),e.qb(47,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.qb(48,0,null,null,2,"ion-button",[["class","submit-btn"],["color","light"],["expand","full"],["fill","outline"],["ion-item",""],["shape","round"],["size","medium"],["type","submit"]],null,null,null,g.D,g.d)),e.pb(49,49152,null,0,c.k,[e.h,e.k,e.x],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"],fill:[3,"fill"],shape:[4,"shape"],size:[5,"size"],type:[6,"type"]},null),(l()(),e.Hb(-1,0,["Cadastrar"])),(l()(),e.qb(51,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.qb(52,0,null,0,2,"ion-button",[["color","light"],["expand","full"],["fill","clear"],["ion-item",""]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.cancel()&&e),e}),g.D,g.d)),e.pb(53,49152,null,0,c.k,[e.h,e.k,e.x],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"]},null),(l()(),e.Hb(-1,0,[" Cancelar "]))],(function(l,n){var u=n.component;l(n,10,0,u.validationsForm),l(n,14,0,"none"),l(n,18,0,"stacked"),l(n,23,0,"email"),l(n,26,0,"text"),l(n,29,0,u.validationMessages.email),l(n,33,0,"stacked"),l(n,36,0,""),l(n,40,0,"password"),l(n,43,0,"","password"),l(n,46,0,u.validationMessages.password),l(n,49,0,"light",!u.validationsForm.valid,"full","outline","round","medium","submit"),l(n,53,0,"light","full","clear")}),(function(l,n){l(n,8,0,e.Cb(n,12).ngClassUntouched,e.Cb(n,12).ngClassTouched,e.Cb(n,12).ngClassPristine,e.Cb(n,12).ngClassDirty,e.Cb(n,12).ngClassValid,e.Cb(n,12).ngClassInvalid,e.Cb(n,12).ngClassPending),l(n,20,0,e.Cb(n,25).ngClassUntouched,e.Cb(n,25).ngClassTouched,e.Cb(n,25).ngClassPristine,e.Cb(n,25).ngClassDirty,e.Cb(n,25).ngClassValid,e.Cb(n,25).ngClassInvalid,e.Cb(n,25).ngClassPending),l(n,35,0,e.Cb(n,36).required?"":null,e.Cb(n,42).ngClassUntouched,e.Cb(n,42).ngClassTouched,e.Cb(n,42).ngClassPristine,e.Cb(n,42).ngClassDirty,e.Cb(n,42).ngClassValid,e.Cb(n,42).ngClassInvalid,e.Cb(n,42).ngClassPending)}))}function q(l){return e.Ib(0,[(l()(),e.qb(0,0,null,null,1,"app-signup",[],null,null,null,v,p)),e.pb(1,114688,null,0,a,[c.Fb,c.Lb,t.a,d.m,o.b],null,null)],(function(l,n){l(n,1,0)}),null)}var k=e.mb("app-signup",a,q,{},{},[]),x=u("irV9"),y=u("rzCp"),w=u("yA/v");u.d(n,"SignupPageModuleNgFactory",(function(){return M}));var M=e.nb(r,[],(function(l){return e.zb([e.Ab(512,e.j,e.Y,[[8,[s.a,k]],[3,e.j],e.v]),e.Ab(4608,b.k,b.j,[e.s,[2,b.r]]),e.Ab(4608,o.q,o.q,[]),e.Ab(4608,o.b,o.b,[]),e.Ab(4608,c.c,c.c,[e.x,e.g]),e.Ab(4608,c.Eb,c.Eb,[c.c,e.j,e.p]),e.Ab(4608,c.Hb,c.Hb,[c.c,e.j,e.p]),e.Ab(4608,x.a,x.a,[w.d,[2,w.c],e.z,e.x]),e.Ab(1073742336,b.b,b.b,[]),e.Ab(1073742336,o.p,o.p,[]),e.Ab(1073742336,o.f,o.f,[]),e.Ab(1073742336,o.m,o.m,[]),e.Ab(1073742336,c.Bb,c.Bb,[]),e.Ab(1073742336,y.a,y.a,[]),e.Ab(1073742336,d.q,d.q,[[2,d.v],[2,d.m]]),e.Ab(1073742336,r,r,[]),e.Ab(1024,d.k,(function(){return[[{path:"",component:a}]]}),[])])}))}}]);