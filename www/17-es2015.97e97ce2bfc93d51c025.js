(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{BtSu:function(l,n,e){"use strict";e.d(n,"a",(function(){return i}));var u=e("8Y7J"),t=e("PVcy");let i=(()=>{class l{constructor(l){this.db=l,this.status="",this.userEmail()}userEmail(){this.user=JSON.parse(localStorage.getItem("user")),this.email=this.user.email,this.email=this.email.replace(/[.#$]+/g,":")}getDevice(l){return this.deviceRef=this.db.object(`/users/${this.email}/devices/${l}`),this.deviceRef}getDeviceList(){return this.deviceListRef=this.db.list(`/users/${this.email}/devices`),this.deviceListRef}updateIcon(l,n){return this.db.database.ref(`/users/${this.email}/devices/${n}/icon`).set(l)}updateName(l,n){return this.db.database.ref(`/users/${this.email}/devices/${n}/name`).set(l)}updateRoom(l,n,e){return this.db.database.ref(`/users/${this.email}/devices/${e}/room`).set(l),this.db.database.ref(`/users/${this.email}/devices/${e}/iconRoom`).set(n)}deleteDevice(l){this.deviceRef=this.db.object(`/users/${this.email}/devices/${l}`),this.deviceRef.remove()}mudaStatus(l){this.db.database.ref(`/users/${this.email}/devices/${l}/status`).once("value").then(n=>{"ligado"===n.val()?this.db.database.ref(`/users/${this.email}/devices/${l}/status`).set("desligado"):this.db.database.ref(`/users/${this.email}/devices/${l}/status`).set("ligado")})}}return l.ngInjectableDef=u.Mb({factory:function(){return new l(u.Nb(t.a))},token:l,providedIn:"root"}),l})()},x3Ek:function(l,n,e){"use strict";e.r(n);var u=e("8Y7J");class t{}var i=e("pMnS"),o=e("MKJQ"),s=e("sZkV"),a=e("iInd"),c=e("SVse"),r=e("mrSG"),b=e("BtSu");class d{constructor(l,n,e,u,t,i){this.deviceService=l,this.actRoute=n,this.fb=e,this.actionSheetController=u,this.alertCtrl=t,this.toastController=i,this.icone="",this.comodo="",this.name="",this.novoNome="",this.iconeComodo="",this.mac=this.actRoute.snapshot.paramMap.get("mac"),this.deviceService.getDevice(this.mac).valueChanges().subscribe(l=>{this.icone=l.icon,this.comodo=l.room,this.name=l.name,this.iconeComodo=l.iconRoom,console.log(l)})}ngOnInit(){}updateName(){return r.__awaiter(this,void 0,void 0,(function*(){const l=yield this.alertCtrl.create({header:"Novo Nome",inputs:[{name:"new-name",id:"newname",placeholder:"Escreva um novo nome",value:this.novoNome}],buttons:[{text:"Cancelar",role:"cancel"},{text:"Salvar",handler:l=>{""!==document.getElementById("newname").value&&(this.novoNome=document.getElementById("newname").value,this.newname(),this.deviceService.updateName(this.novoNome,this.mac))}}]});yield l.present()}))}newname(){return r.__awaiter(this,void 0,void 0,(function*(){const l=yield this.toastController.create({header:"O nome foi alterado.",duration:2e3});yield l.present()}))}}var m=e("s7LF"),h=u.ob({encapsulation:0,styles:[["ion-item[_ngcontent-%COMP%]{--background:rgb(43, 53, 102, 0.7)}ion-icon[_ngcontent-%COMP%]{color:#fff}.transparent[_ngcontent-%COMP%]{background-color:transparent}"]],data:{}});function v(l){return u.Ib(0,[(l()(),u.qb(0,0,null,null,11,"ion-header",[],null,null,null,o.I,o.j)),u.pb(1,49152,null,0,s.B,[u.h,u.k,u.x],null,null),(l()(),u.qb(2,0,null,0,9,"ion-toolbar",[],null,null,null,o.X,o.y)),u.pb(3,49152,null,0,s.zb,[u.h,u.k,u.x],null,null),(l()(),u.qb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,o.C,o.d)),u.pb(5,49152,null,0,s.l,[u.h,u.k,u.x],null,null),(l()(),u.qb(6,0,null,0,2,"ion-back-button",[["defaultHref","menu/edit-device-list"],["text","Voltar"]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u.Cb(l,8).onClick(e)&&t),t}),o.A,o.b)),u.pb(7,49152,null,0,s.g,[u.h,u.k,u.x],{defaultHref:[0,"defaultHref"],text:[1,"text"]},null),u.pb(8,16384,null,0,s.h,[[2,s.fb],s.Fb],{defaultHref:[0,"defaultHref"]},null),(l()(),u.qb(9,0,null,0,2,"ion-title",[],null,null,null,o.W,o.x)),u.pb(10,49152,null,0,s.xb,[u.h,u.k,u.x],null,null),(l()(),u.Hb(-1,0,[" Editar "])),(l()(),u.qb(12,0,null,null,38,"ion-content",[],null,null,null,o.E,o.f)),u.pb(13,49152,null,0,s.u,[u.h,u.k,u.x],null,null),(l()(),u.qb(14,0,null,0,8,"ion-item",[["lines","full"]],null,null,null,o.L,o.m)),u.pb(15,49152,null,0,s.H,[u.h,u.k,u.x],{lines:[0,"lines"]},null),(l()(),u.qb(16,0,null,0,2,"ion-label",[],null,null,null,o.M,o.n)),u.pb(17,49152,null,0,s.N,[u.h,u.k,u.x],null,null),(l()(),u.Hb(18,0,["",""])),(l()(),u.qb(19,0,null,0,3,"div",[],null,null,null,null,null)),(l()(),u.qb(20,0,null,null,2,"button",[["class","transparent"],["clear",""],["ion-button",""]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.updateName()&&u),u}),null,null)),(l()(),u.qb(21,0,null,null,1,"ion-icon",[["name","pencil-outline"],["style","zoom:2.0"]],null,null,null,o.J,o.k)),u.pb(22,49152,null,0,s.C,[u.h,u.k,u.x],{name:[0,"name"]},null),(l()(),u.qb(23,0,null,0,13,"ion-item",[["lines","full"]],null,null,null,o.L,o.m)),u.pb(24,49152,null,0,s.H,[u.h,u.k,u.x],{lines:[0,"lines"]},null),(l()(),u.qb(25,0,null,0,1,"ion-icon",[],null,null,null,o.J,o.k)),u.pb(26,49152,null,0,s.C,[u.h,u.k,u.x],{src:[0,"src"]},null),(l()(),u.qb(27,0,null,0,2,"ion-label",[],null,null,null,o.M,o.n)),u.pb(28,49152,null,0,s.N,[u.h,u.k,u.x],null,null),(l()(),u.Hb(29,0,["\xa0\xa0",""])),(l()(),u.qb(30,0,null,0,6,"div",[],null,null,null,null,null)),(l()(),u.qb(31,0,null,null,5,"button",[["class","transparent"],["clear",""],["ion-button",""]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u.Cb(l,32).onClick()&&t),"click"===n&&(t=!1!==u.Cb(l,34).onClick(e)&&t),t}),null,null)),u.pb(32,16384,null,0,a.n,[a.m,a.a,[8,null],u.B,u.k],{routerLink:[0,"routerLink"]},null),u.Db(33,2),u.pb(34,737280,null,0,s.Ib,[c.g,s.Fb,u.k,a.m,[2,a.n]],null,null),(l()(),u.qb(35,0,null,null,1,"ion-icon",[["name","file-tray-full-outline"],["style","zoom:2.0"]],null,null,null,o.J,o.k)),u.pb(36,49152,null,0,s.C,[u.h,u.k,u.x],{name:[0,"name"]},null),(l()(),u.qb(37,0,null,0,13,"ion-item",[["lines","full"]],null,null,null,o.L,o.m)),u.pb(38,49152,null,0,s.H,[u.h,u.k,u.x],{lines:[0,"lines"]},null),(l()(),u.qb(39,0,null,0,1,"ion-icon",[],null,null,null,o.J,o.k)),u.pb(40,49152,null,0,s.C,[u.h,u.k,u.x],{src:[0,"src"]},null),(l()(),u.qb(41,0,null,0,2,"ion-label",[],null,null,null,o.M,o.n)),u.pb(42,49152,null,0,s.N,[u.h,u.k,u.x],null,null),(l()(),u.Hb(43,0,["\xa0\xa0",""])),(l()(),u.qb(44,0,null,0,6,"div",[],null,null,null,null,null)),(l()(),u.qb(45,0,null,null,5,"button",[["class","transparent"],["clear",""],["ion-button",""]],null,[[null,"click"]],(function(l,n,e){var t=!0;return"click"===n&&(t=!1!==u.Cb(l,46).onClick()&&t),"click"===n&&(t=!1!==u.Cb(l,48).onClick(e)&&t),t}),null,null)),u.pb(46,16384,null,0,a.n,[a.m,a.a,[8,null],u.B,u.k],{routerLink:[0,"routerLink"]},null),u.Db(47,2),u.pb(48,737280,null,0,s.Ib,[c.g,s.Fb,u.k,a.m,[2,a.n]],null,null),(l()(),u.qb(49,0,null,null,1,"ion-icon",[["name","file-tray-full-outline"],["style","zoom:2.0"]],null,null,null,o.J,o.k)),u.pb(50,49152,null,0,s.C,[u.h,u.k,u.x],{name:[0,"name"]},null)],(function(l,n){var e=n.component;l(n,7,0,"menu/edit-device-list","Voltar"),l(n,8,0,"menu/edit-device-list"),l(n,15,0,"full"),l(n,22,0,"pencil-outline"),l(n,24,0,"full"),l(n,26,0,u.ub(1,"/assets/svg/",e.icone,".svg"));var t=l(n,33,0,"/edit-icons/",e.mac);l(n,32,0,t),l(n,34,0),l(n,36,0,"file-tray-full-outline"),l(n,38,0,"full"),l(n,40,0,u.ub(1,"/assets/svg/",e.iconeComodo,".svg"));var i=l(n,47,0,"/edit-rooms/",e.mac);l(n,46,0,i),l(n,48,0),l(n,50,0,"file-tray-full-outline")}),(function(l,n){var e=n.component;l(n,18,0,e.name),l(n,29,0,e.icone),l(n,43,0,e.comodo)}))}function p(l){return u.Ib(0,[(l()(),u.qb(0,0,null,null,1,"app-edit-device-page",[],null,null,null,v,h)),u.pb(1,114688,null,0,d,[b.a,a.a,m.b,s.a,s.b,s.Lb],null,null)],(function(l,n){l(n,1,0)}),null)}var f=u.mb("app-edit-device-page",d,p,{},{},[]);class k{}e.d(n,"EditDevicePagePageModuleNgFactory",(function(){return g}));var g=u.nb(t,[],(function(l){return u.zb([u.Ab(512,u.j,u.Y,[[8,[i.a,f]],[3,u.j],u.v]),u.Ab(4608,c.k,c.j,[u.s,[2,c.r]]),u.Ab(4608,m.q,m.q,[]),u.Ab(4608,s.c,s.c,[u.x,u.g]),u.Ab(4608,s.Eb,s.Eb,[s.c,u.j,u.p]),u.Ab(4608,s.Hb,s.Hb,[s.c,u.j,u.p]),u.Ab(4608,m.b,m.b,[]),u.Ab(1073742336,c.b,c.b,[]),u.Ab(1073742336,m.p,m.p,[]),u.Ab(1073742336,m.f,m.f,[]),u.Ab(1073742336,s.Bb,s.Bb,[]),u.Ab(1073742336,a.q,a.q,[[2,a.v],[2,a.m]]),u.Ab(1073742336,k,k,[]),u.Ab(1073742336,m.m,m.m,[]),u.Ab(1073742336,t,t,[]),u.Ab(1024,a.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);