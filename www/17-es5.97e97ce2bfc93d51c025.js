(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{BtSu:function(l,n,e){"use strict";e.d(n,"a",(function(){return i}));var t=e("8Y7J"),u=e("PVcy");let i=(()=>{class l{constructor(l){this.db=l,this.status="",this.userEmail()}userEmail(){this.user=JSON.parse(localStorage.getItem("user")),this.email=this.user.email,this.email=this.email.replace(/[.#$]+/g,":")}getDevice(l){return this.deviceRef=this.db.object("/users/".concat(this.email,"/devices/").concat(l)),this.deviceRef}getDeviceList(){return this.deviceListRef=this.db.list("/users/".concat(this.email,"/devices")),this.deviceListRef}updateIcon(l,n){return this.db.database.ref("/users/".concat(this.email,"/devices/").concat(n,"/icon")).set(l)}updateName(l,n){return this.db.database.ref("/users/".concat(this.email,"/devices/").concat(n,"/name")).set(l)}updateRoom(l,n,e){return this.db.database.ref("/users/".concat(this.email,"/devices/").concat(e,"/room")).set(l),this.db.database.ref("/users/".concat(this.email,"/devices/").concat(e,"/iconRoom")).set(n)}deleteDevice(l){this.deviceRef=this.db.object("/users/".concat(this.email,"/devices/").concat(l)),this.deviceRef.remove()}mudaStatus(l){this.db.database.ref("/users/".concat(this.email,"/devices/").concat(l,"/status")).once("value").then(n=>{"ligado"===n.val()?this.db.database.ref("/users/".concat(this.email,"/devices/").concat(l,"/status")).set("desligado"):this.db.database.ref("/users/".concat(this.email,"/devices/").concat(l,"/status")).set("ligado")})}}return l.ngInjectableDef=t.Mb({factory:function(){return new l(t.Nb(u.a))},token:l,providedIn:"root"}),l})()},x3Ek:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J");class u{}var i=e("pMnS"),o=e("MKJQ"),a=e("sZkV"),s=e("iInd"),c=e("SVse"),r=e("mrSG"),b=e("BtSu");class d{constructor(l,n,e,t,u,i){this.deviceService=l,this.actRoute=n,this.fb=e,this.actionSheetController=t,this.alertCtrl=u,this.toastController=i,this.icone="",this.comodo="",this.name="",this.novoNome="",this.iconeComodo="",this.mac=this.actRoute.snapshot.paramMap.get("mac"),this.deviceService.getDevice(this.mac).valueChanges().subscribe(l=>{this.icone=l.icon,this.comodo=l.room,this.name=l.name,this.iconeComodo=l.iconRoom,console.log(l)})}ngOnInit(){}updateName(){return r.__awaiter(this,void 0,void 0,(function*(){const l=yield this.alertCtrl.create({header:"Novo Nome",inputs:[{name:"new-name",id:"newname",placeholder:"Escreva um novo nome",value:this.novoNome}],buttons:[{text:"Cancelar",role:"cancel"},{text:"Salvar",handler:l=>{""!==document.getElementById("newname").value&&(this.novoNome=document.getElementById("newname").value,this.newname(),this.deviceService.updateName(this.novoNome,this.mac))}}]});yield l.present()}))}newname(){return r.__awaiter(this,void 0,void 0,(function*(){const l=yield this.toastController.create({header:"O nome foi alterado.",duration:2e3});yield l.present()}))}}var m=e("s7LF"),h=t.ob({encapsulation:0,styles:[["ion-item[_ngcontent-%COMP%]{--background:rgb(43, 53, 102, 0.7)}ion-icon[_ngcontent-%COMP%]{color:#fff}.transparent[_ngcontent-%COMP%]{background-color:transparent}"]],data:{}});function v(l){return t.Ib(0,[(l()(),t.qb(0,0,null,null,11,"ion-header",[],null,null,null,o.I,o.j)),t.pb(1,49152,null,0,a.B,[t.h,t.k,t.x],null,null),(l()(),t.qb(2,0,null,0,9,"ion-toolbar",[],null,null,null,o.X,o.y)),t.pb(3,49152,null,0,a.zb,[t.h,t.k,t.x],null,null),(l()(),t.qb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,o.C,o.d)),t.pb(5,49152,null,0,a.l,[t.h,t.k,t.x],null,null),(l()(),t.qb(6,0,null,0,2,"ion-back-button",[["defaultHref","menu/edit-device-list"],["text","Voltar"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t.Cb(l,8).onClick(e)&&u),u}),o.A,o.b)),t.pb(7,49152,null,0,a.g,[t.h,t.k,t.x],{defaultHref:[0,"defaultHref"],text:[1,"text"]},null),t.pb(8,16384,null,0,a.h,[[2,a.fb],a.Fb],{defaultHref:[0,"defaultHref"]},null),(l()(),t.qb(9,0,null,0,2,"ion-title",[],null,null,null,o.W,o.x)),t.pb(10,49152,null,0,a.xb,[t.h,t.k,t.x],null,null),(l()(),t.Hb(-1,0,[" Editar "])),(l()(),t.qb(12,0,null,null,38,"ion-content",[],null,null,null,o.E,o.f)),t.pb(13,49152,null,0,a.u,[t.h,t.k,t.x],null,null),(l()(),t.qb(14,0,null,0,8,"ion-item",[["lines","full"]],null,null,null,o.L,o.m)),t.pb(15,49152,null,0,a.H,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.qb(16,0,null,0,2,"ion-label",[],null,null,null,o.M,o.n)),t.pb(17,49152,null,0,a.N,[t.h,t.k,t.x],null,null),(l()(),t.Hb(18,0,["",""])),(l()(),t.qb(19,0,null,0,3,"div",[],null,null,null,null,null)),(l()(),t.qb(20,0,null,null,2,"button",[["class","transparent"],["clear",""],["ion-button",""]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==l.component.updateName()&&t),t}),null,null)),(l()(),t.qb(21,0,null,null,1,"ion-icon",[["name","pencil-outline"],["style","zoom:2.0"]],null,null,null,o.J,o.k)),t.pb(22,49152,null,0,a.C,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.qb(23,0,null,0,13,"ion-item",[["lines","full"]],null,null,null,o.L,o.m)),t.pb(24,49152,null,0,a.H,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.qb(25,0,null,0,1,"ion-icon",[],null,null,null,o.J,o.k)),t.pb(26,49152,null,0,a.C,[t.h,t.k,t.x],{src:[0,"src"]},null),(l()(),t.qb(27,0,null,0,2,"ion-label",[],null,null,null,o.M,o.n)),t.pb(28,49152,null,0,a.N,[t.h,t.k,t.x],null,null),(l()(),t.Hb(29,0,["\xa0\xa0",""])),(l()(),t.qb(30,0,null,0,6,"div",[],null,null,null,null,null)),(l()(),t.qb(31,0,null,null,5,"button",[["class","transparent"],["clear",""],["ion-button",""]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t.Cb(l,32).onClick()&&u),"click"===n&&(u=!1!==t.Cb(l,34).onClick(e)&&u),u}),null,null)),t.pb(32,16384,null,0,s.n,[s.m,s.a,[8,null],t.B,t.k],{routerLink:[0,"routerLink"]},null),t.Db(33,2),t.pb(34,737280,null,0,a.Ib,[c.g,a.Fb,t.k,s.m,[2,s.n]],null,null),(l()(),t.qb(35,0,null,null,1,"ion-icon",[["name","file-tray-full-outline"],["style","zoom:2.0"]],null,null,null,o.J,o.k)),t.pb(36,49152,null,0,a.C,[t.h,t.k,t.x],{name:[0,"name"]},null),(l()(),t.qb(37,0,null,0,13,"ion-item",[["lines","full"]],null,null,null,o.L,o.m)),t.pb(38,49152,null,0,a.H,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.qb(39,0,null,0,1,"ion-icon",[],null,null,null,o.J,o.k)),t.pb(40,49152,null,0,a.C,[t.h,t.k,t.x],{src:[0,"src"]},null),(l()(),t.qb(41,0,null,0,2,"ion-label",[],null,null,null,o.M,o.n)),t.pb(42,49152,null,0,a.N,[t.h,t.k,t.x],null,null),(l()(),t.Hb(43,0,["\xa0\xa0",""])),(l()(),t.qb(44,0,null,0,6,"div",[],null,null,null,null,null)),(l()(),t.qb(45,0,null,null,5,"button",[["class","transparent"],["clear",""],["ion-button",""]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==t.Cb(l,46).onClick()&&u),"click"===n&&(u=!1!==t.Cb(l,48).onClick(e)&&u),u}),null,null)),t.pb(46,16384,null,0,s.n,[s.m,s.a,[8,null],t.B,t.k],{routerLink:[0,"routerLink"]},null),t.Db(47,2),t.pb(48,737280,null,0,a.Ib,[c.g,a.Fb,t.k,s.m,[2,s.n]],null,null),(l()(),t.qb(49,0,null,null,1,"ion-icon",[["name","file-tray-full-outline"],["style","zoom:2.0"]],null,null,null,o.J,o.k)),t.pb(50,49152,null,0,a.C,[t.h,t.k,t.x],{name:[0,"name"]},null)],(function(l,n){var e=n.component;l(n,7,0,"menu/edit-device-list","Voltar"),l(n,8,0,"menu/edit-device-list"),l(n,15,0,"full"),l(n,22,0,"pencil-outline"),l(n,24,0,"full"),l(n,26,0,t.ub(1,"/assets/svg/",e.icone,".svg"));var u=l(n,33,0,"/edit-icons/",e.mac);l(n,32,0,u),l(n,34,0),l(n,36,0,"file-tray-full-outline"),l(n,38,0,"full"),l(n,40,0,t.ub(1,"/assets/svg/",e.iconeComodo,".svg"));var i=l(n,47,0,"/edit-rooms/",e.mac);l(n,46,0,i),l(n,48,0),l(n,50,0,"file-tray-full-outline")}),(function(l,n){var e=n.component;l(n,18,0,e.name),l(n,29,0,e.icone),l(n,43,0,e.comodo)}))}var p=t.mb("app-edit-device-page",d,(function(l){return t.Ib(0,[(l()(),t.qb(0,0,null,null,1,"app-edit-device-page",[],null,null,null,v,h)),t.pb(1,114688,null,0,d,[b.a,s.a,m.b,a.a,a.b,a.Lb],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]);class f{}e.d(n,"EditDevicePagePageModuleNgFactory",(function(){return k}));var k=t.nb(u,[],(function(l){return t.zb([t.Ab(512,t.j,t.Y,[[8,[i.a,p]],[3,t.j],t.v]),t.Ab(4608,c.k,c.j,[t.s,[2,c.r]]),t.Ab(4608,m.q,m.q,[]),t.Ab(4608,a.c,a.c,[t.x,t.g]),t.Ab(4608,a.Eb,a.Eb,[a.c,t.j,t.p]),t.Ab(4608,a.Hb,a.Hb,[a.c,t.j,t.p]),t.Ab(4608,m.b,m.b,[]),t.Ab(1073742336,c.b,c.b,[]),t.Ab(1073742336,m.p,m.p,[]),t.Ab(1073742336,m.f,m.f,[]),t.Ab(1073742336,a.Bb,a.Bb,[]),t.Ab(1073742336,s.q,s.q,[[2,s.v],[2,s.m]]),t.Ab(1073742336,f,f,[]),t.Ab(1073742336,m.m,m.m,[]),t.Ab(1073742336,u,u,[]),t.Ab(1024,s.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);