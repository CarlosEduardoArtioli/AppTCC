(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"0m3x":function(l,n,e){"use strict";e.r(n);var t=e("8Y7J");class i{}var u=e("pMnS"),o=e("MKJQ"),r=e("sZkV"),a=e("iInd"),c=e("SVse"),s=e("mrSG");class b{constructor(l,n,e,t){this.uid=l,this.email=n,this.displayName=e,this.emailVerified=t}}var m=e("PVcy");let p=(()=>{class l{constructor(l){this.db=l}getUserName(l){return l=l.replace(/[.#$]+/g,":"),this.name=this.db.object("/users/".concat(l,"/settings/displayName")),this.name}updateUserName(l,n){n=n.replace(/[.#$]+/g,":"),this.db.database.ref("/users/".concat(n,"/settings/displayName")).set(l)}}return l.ngInjectableDef=t.Mb({factory:function(){return new l(t.Nb(m.a))},token:l,providedIn:"root"}),l})();var h=e("ej43");class d{constructor(l,n,e,t,i){this.actionSheetCtrl=l,this.alertCtrl=n,this.toastController=e,this.userService=t,this.authService=i,this.pages=[{title:"Home",url:"/menu/home",icon:"home"},{title:"Editar",icon:"create-outline",open:!1,children:[{title:"Dispositivo",url:"/menu/edit-device-list",icon:"hardware-chip"},{title:"C\xf4modo",url:"/menu/edit-room-list",icon:"home"}]},{title:"Fun\xe7\xf5es",icon:"build",open:!1,children:[{title:"Timer",url:"/menu/timer",icon:"alarm-outline"}]}]}ngOnInit(){this.user=JSON.parse(localStorage.getItem("user")),this.name=this.user.displayName,this.userName()}userName(){this.user=JSON.parse(localStorage.getItem("user")),null===this.user.displayName?(localStorage.setItem("user",JSON.stringify(new b(this.user.uid,this.user.email,this.user.email,this.user.emailVerified))),this.user=JSON.parse(localStorage.getItem("user")),this.userService.updateUserName(this.user.displayName,this.user.email)):this.userService.getUserName(this.user.email).valueChanges().subscribe(l=>{this.user.displayName=l,localStorage.setItem("user",JSON.stringify(new b(this.user.uid,this.user.email,this.user.displayName,this.user.emailVerified)))}),this.user=JSON.parse(localStorage.getItem("user")),this.name=this.user.displayName}showOptions(){return s.__awaiter(this,void 0,void 0,(function*(){const l=yield this.actionSheetCtrl.create({header:"Op\xe7\xf5es",buttons:[{text:"Alterar Nome",icon:"person",handler:()=>{this.alterarNome()}},{text:"Logout",icon:"power",role:"destructive",handler:()=>{this.authService.SignOut()}},{text:"Cancelar",icon:"close",role:"cancel"}]});yield l.present()}))}alterarNome(){return s.__awaiter(this,void 0,void 0,(function*(){const l=yield this.alertCtrl.create({header:"Novo Nome",inputs:[{name:"new-name",id:"newname",placeholder:"Escreva um novo nome",value:this.novoNome}],buttons:[{text:"Cancelar",role:"cancel"},{text:"Salvar",handler:l=>{""!==document.getElementById("newname").value&&(this.novoNome=document.getElementById("newname").value,this.newname(),this.userService.updateUserName(this.novoNome,this.user.email),localStorage.setItem("user",JSON.stringify(new b(this.user.uid,this.user.email,this.novoNome,this.user.emailVerified))),this.user=JSON.parse(localStorage.getItem("user")),this.name=this.user.displayName)}}]});yield l.present()}))}newname(){return s.__awaiter(this,void 0,void 0,(function*(){const l=yield this.toastController.create({header:"Seu nome foi alterado.",duration:2e3});yield l.present()}))}}var f=t.ob({encapsulation:0,styles:[[".active[_ngcontent-%COMP%]{--ion-text-color:var(--ion-color-primary)}.active[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{--ion-text-color-rgb:var(--ion-color-primary)}.active-parent[_ngcontent-%COMP%]{font-weight:500}.sub-item[_ngcontent-%COMP%]{padding-left:20px;font-size:small}ion-content[_ngcontent-%COMP%]{opacity:1}"]],data:{}});function g(l){return t.Ib(0,[(l()(),t.qb(0,0,null,null,13,"ion-menu-toggle",[],null,null,null,o.R,o.s)),t.pb(1,49152,null,0,r.S,[t.h,t.k,t.x],null,null),(l()(),t.qb(2,0,null,0,11,"ion-item",[["routerDirection","root"],["routerLinkActive","active"]],null,[[null,"click"]],(function(l,n,e){var i=!0;return"click"===n&&(i=!1!==t.Cb(l,4).onClick()&&i),"click"===n&&(i=!1!==t.Cb(l,5).onClick(e)&&i),i}),o.N,o.n)),t.pb(3,49152,null,0,r.H,[t.h,t.k,t.x],{routerDirection:[0,"routerDirection"]},null),t.pb(4,16384,[[1,4]],0,a.n,[a.m,a.a,[8,null],t.B,t.k],{routerLink:[0,"routerLink"]},null),t.pb(5,737280,null,0,r.Ib,[c.g,r.Fb,t.k,a.m,[2,a.n]],{routerDirection:[0,"routerDirection"]},null),t.pb(6,1720320,null,2,a.o,[a.m,t.k,t.B,[2,a.n],[2,a.p]],{routerLinkActive:[0,"routerLinkActive"]},null),t.Fb(603979776,1,{links:1}),t.Fb(603979776,2,{linksWithHrefs:1}),(l()(),t.qb(9,0,null,0,1,"ion-icon",[["slot","start"]],null,null,null,o.L,o.l)),t.pb(10,49152,null,0,r.C,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.qb(11,0,null,0,2,"ion-label",[],null,null,null,o.O,o.o)),t.pb(12,49152,null,0,r.N,[t.h,t.k,t.x],null,null),(l()(),t.Hb(13,0,[" "," "]))],(function(l,n){l(n,3,0,"root"),l(n,4,0,n.parent.context.$implicit.url),l(n,5,0,"root"),l(n,6,0,"active"),l(n,10,0,n.parent.context.$implicit.icon)}),(function(l,n){l(n,13,0,n.parent.context.$implicit.title)}))}function v(l){return t.Ib(0,[(l()(),t.qb(0,0,null,null,1,"ion-icon",[["name","add-outline"],["slot","end"]],null,null,null,o.L,o.l)),t.pb(1,49152,null,0,r.C,[t.h,t.k,t.x],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"add-outline")}),null)}function k(l){return t.Ib(0,[(l()(),t.qb(0,0,null,null,1,"ion-icon",[["name","remove-outline"],["slot","end"]],null,null,null,o.L,o.l)),t.pb(1,49152,null,0,r.C,[t.h,t.k,t.x],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"remove-outline")}),null)}function N(l){return t.Ib(0,[(l()(),t.qb(0,0,null,null,10,"ion-item",[["button",""],["detail","false"]],[[2,"active-parent",null]],[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=0!=(l.parent.context.$implicit.open=!l.parent.context.$implicit.open)&&t),t}),o.N,o.n)),t.pb(1,49152,null,0,r.H,[t.h,t.k,t.x],{button:[0,"button"],detail:[1,"detail"]},null),(l()(),t.fb(16777216,null,0,1,null,v)),t.pb(3,16384,null,0,c.i,[t.N,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.fb(16777216,null,0,1,null,k)),t.pb(5,16384,null,0,c.i,[t.N,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(6,0,null,0,1,"ion-icon",[["slot","start"]],null,null,null,o.L,o.l)),t.pb(7,49152,null,0,r.C,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.qb(8,0,null,0,2,"ion-label",[],null,null,null,o.O,o.o)),t.pb(9,49152,null,0,r.N,[t.h,t.k,t.x],null,null),(l()(),t.Hb(10,0,["",""]))],(function(l,n){l(n,1,0,"","false"),l(n,3,0,!n.parent.context.$implicit.open),l(n,5,0,n.parent.context.$implicit.open),l(n,7,0,n.parent.context.$implicit.icon)}),(function(l,n){l(n,0,0,n.parent.context.$implicit.open),l(n,10,0,n.parent.context.$implicit.title)}))}function x(l){return t.Ib(0,[(l()(),t.qb(0,0,null,null,11,"ion-item",[["class","sub-item"],["routerDirection","root"],["routerLinkActive","active"]],null,[[null,"click"]],(function(l,n,e){var i=!0;return"click"===n&&(i=!1!==t.Cb(l,2).onClick()&&i),"click"===n&&(i=!1!==t.Cb(l,3).onClick(e)&&i),i}),o.N,o.n)),t.pb(1,49152,null,0,r.H,[t.h,t.k,t.x],{routerDirection:[0,"routerDirection"]},null),t.pb(2,16384,[[3,4]],0,a.n,[a.m,a.a,[8,null],t.B,t.k],{routerLink:[0,"routerLink"]},null),t.pb(3,737280,null,0,r.Ib,[c.g,r.Fb,t.k,a.m,[2,a.n]],{routerDirection:[0,"routerDirection"]},null),t.pb(4,1720320,null,2,a.o,[a.m,t.k,t.B,[2,a.n],[2,a.p]],{routerLinkActive:[0,"routerLinkActive"]},null),t.Fb(603979776,3,{links:1}),t.Fb(603979776,4,{linksWithHrefs:1}),(l()(),t.qb(7,0,null,0,1,"ion-icon",[["slot","start"]],null,null,null,o.L,o.l)),t.pb(8,49152,null,0,r.C,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.qb(9,0,null,0,2,"ion-label",[],null,null,null,o.O,o.o)),t.pb(10,49152,null,0,r.N,[t.h,t.k,t.x],null,null),(l()(),t.Hb(11,0,[" "," "]))],(function(l,n){l(n,1,0,"root"),l(n,2,0,n.context.$implicit.url),l(n,3,0,"root"),l(n,4,0,"active"),l(n,8,0,n.context.$implicit.icon)}),(function(l,n){l(n,11,0,n.context.$implicit.title)}))}function I(l){return t.Ib(0,[(l()(),t.qb(0,0,null,null,5,"ion-list",[],null,null,null,o.P,o.p)),t.pb(1,49152,null,0,r.O,[t.h,t.k,t.x],null,null),(l()(),t.qb(2,0,null,0,3,"ion-menu-toggle",[],null,null,null,o.R,o.s)),t.pb(3,49152,null,0,r.S,[t.h,t.k,t.x],null,null),(l()(),t.fb(16777216,null,0,1,null,x)),t.pb(5,278528,null,0,c.h,[t.N,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,5,0,n.parent.context.$implicit.children)}),null)}function C(l){return t.Ib(0,[(l()(),t.qb(0,0,null,null,6,"div",[],null,null,null,null,null)),(l()(),t.fb(16777216,null,null,1,null,g)),t.pb(2,16384,null,0,c.i,[t.N,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.fb(16777216,null,null,1,null,N)),t.pb(4,16384,null,0,c.i,[t.N,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.fb(16777216,null,null,1,null,I)),t.pb(6,16384,null,0,c.i,[t.N,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,2,0,n.context.$implicit.url),l(n,4,0,(null==n.context.$implicit.children?null:n.context.$implicit.children.length)>0),l(n,6,0,n.context.$implicit.open)}),null)}function y(l){return t.Ib(0,[(l()(),t.qb(0,0,null,null,17,"ion-menu",[["contentId","content"]],null,null,null,o.S,o.q)),t.pb(1,49152,null,0,r.Q,[t.h,t.k,t.x],{contentId:[0,"contentId"]},null),(l()(),t.qb(2,0,null,0,11,"ion-header",[],null,null,null,o.K,o.k)),t.pb(3,49152,null,0,r.B,[t.h,t.k,t.x],null,null),(l()(),t.qb(4,0,null,0,9,"ion-toolbar",[],null,null,null,o.Z,o.z)),t.pb(5,49152,null,0,r.zb,[t.h,t.k,t.x],null,null),(l()(),t.qb(6,0,null,0,7,"ion-item",[["lines","none"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.showOptions()&&t),t}),o.N,o.n)),t.pb(7,49152,null,0,r.H,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.qb(8,0,null,0,2,"ion-avatar",[["slot","start"]],null,null,null,o.B,o.b)),t.pb(9,49152,null,0,r.f,[t.h,t.k,t.x],null,null),(l()(),t.qb(10,0,null,0,0,"img",[["src","https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"]],null,null,null,null,null)),(l()(),t.qb(11,0,null,0,2,"ion-label",[],null,null,null,o.O,o.o)),t.pb(12,49152,null,0,r.N,[t.h,t.k,t.x],null,null),(l()(),t.Hb(13,0,["",""])),(l()(),t.qb(14,0,null,0,3,"ion-content",[],null,null,null,o.H,o.h)),t.pb(15,49152,null,0,r.u,[t.h,t.k,t.x],null,null),(l()(),t.fb(16777216,null,0,1,null,C)),t.pb(17,278528,null,0,c.h,[t.N,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.qb(18,16777216,null,null,1,"ion-router-outlet",[["id","content"],["main",""]],null,null,null,null,null)),t.pb(19,212992,null,0,r.fb,[a.b,t.N,t.j,[8,null],[8,null],r.d,r.Fb,c.f,t.k,a.m,t.x,a.a,[3,r.fb]],null,null)],(function(l,n){var e=n.component;l(n,1,0,"content"),l(n,7,0,"none"),l(n,17,0,e.pages),l(n,19,0)}),(function(l,n){l(n,13,0,n.component.name)}))}var S=t.mb("app-menu",d,(function(l){return t.Ib(0,[(l()(),t.qb(0,0,null,null,1,"app-menu",[],null,null,null,y,f)),t.pb(1,114688,null,0,d,[r.a,r.b,r.Lb,p,h.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),q=e("s7LF"),O=e("UTcu");const A=()=>Promise.all([e.e(0),e.e(26)]).then(e.bind(null,"TbC0")).then(l=>l.HomePageModuleNgFactory),w=()=>Promise.all([e.e(0),e.e(21)]).then(e.bind(null,"BWIA")).then(l=>l.EditRoomListPageModuleNgFactory),F=()=>Promise.all([e.e(0),e.e(19)]).then(e.bind(null,"NDWJ")).then(l=>l.EditDeviceListPageModuleNgFactory),J=()=>e.e(22).then(e.bind(null,"G8DH")).then(l=>l.FunctionsPageModuleNgFactory),L=()=>Promise.all([e.e(0),e.e(25)]).then(e.bind(null,"xuyv")).then(l=>l.TimerPageModuleNgFactory);class P{}e.d(n,"MenuPageModuleNgFactory",(function(){return $}));var $=t.nb(i,[],(function(l){return t.zb([t.Ab(512,t.j,t.Y,[[8,[u.a,S]],[3,t.j],t.v]),t.Ab(4608,c.k,c.j,[t.s,[2,c.r]]),t.Ab(4608,q.q,q.q,[]),t.Ab(4608,r.c,r.c,[t.x,t.g]),t.Ab(4608,r.Eb,r.Eb,[r.c,t.j,t.p]),t.Ab(4608,r.Hb,r.Hb,[r.c,t.j,t.p]),t.Ab(1073742336,c.b,c.b,[]),t.Ab(1073742336,q.p,q.p,[]),t.Ab(1073742336,q.f,q.f,[]),t.Ab(1073742336,r.Bb,r.Bb,[]),t.Ab(1073742336,a.q,a.q,[[2,a.v],[2,a.m]]),t.Ab(1073742336,P,P,[]),t.Ab(1073742336,i,i,[]),t.Ab(1024,a.k,(function(){return[[{path:"",redirectTo:"menu/home",pathMatch:"full"},{path:"",component:d,children:[{path:"home",loadChildren:A,canActivate:[O.a]},{path:"edit-room-list",loadChildren:w,canActivate:[O.a]},{path:"edit-device-list",loadChildren:F,canActivate:[O.a]},{path:"functions",loadChildren:J,canActivate:[O.a]},{path:"timer",loadChildren:L,canActivate:[O.a]}]}]]}),[])])}))}}]);