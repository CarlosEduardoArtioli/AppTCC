(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"+15X":function(l,n,t){"use strict";t.r(n);var u=t("8Y7J");class e{}var o=t("pMnS"),i=t("MKJQ"),a=t("sZkV"),r=t("iInd"),c=t("SVse"),b=t("mrSG"),s=t("yWY+");class m{constructor(l,n,t,u,e){this.roomService=l,this.actRoute=n,this.actionSheetController=t,this.alertCtrl=u,this.toastController=e,this.room=this.actRoute.snapshot.paramMap.get("room")}ngOnInit(){}ionViewWillEnter(){return b.__awaiter(this,void 0,void 0,(function*(){yield this.getRoom()}))}getRoom(){this.roomService.getRoom(this.room).valueChanges().subscribe(l=>{this.name=l.name,this.icon=l.icon,this.iconName=l.iconName})}updateName(){return b.__awaiter(this,void 0,void 0,(function*(){const l=yield this.alertCtrl.create({header:"Novo Nome",inputs:[{name:"new-name",id:"newname",placeholder:"Escreva um novo nome",value:this.novoNome}],buttons:[{text:"Cancelar",role:"cancel"},{text:"Salvar",handler:l=>{""!==document.getElementById("newname").value&&(this.novoNome=document.getElementById("newname").value,this.newname(),this.roomService.updateName(this.novoNome,this.room))}}]});yield l.present()}))}newname(){return b.__awaiter(this,void 0,void 0,(function*(){const l=yield this.toastController.create({header:"O nome foi alterado.",duration:2e3});yield l.present()}))}}var p=u.ob({encapsulation:0,styles:[["ion-item[_ngcontent-%COMP%]{--background:rgb(43, 53, 102, 0.7)}ion-icon[_ngcontent-%COMP%]{color:#fff}.transparent[_ngcontent-%COMP%]{background-color:transparent}@media (min-width:720px){ion-item[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:20px}ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:40px}ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{font-size:30px}}"]],data:{}});function d(l){return u.Ib(0,[(l()(),u.qb(0,0,null,null,11,"ion-header",[],null,null,null,i.I,i.j)),u.pb(1,49152,null,0,a.B,[u.h,u.k,u.x],null,null),(l()(),u.qb(2,0,null,0,9,"ion-toolbar",[],null,null,null,i.X,i.y)),u.pb(3,49152,null,0,a.zb,[u.h,u.k,u.x],null,null),(l()(),u.qb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,i.C,i.d)),u.pb(5,49152,null,0,a.l,[u.h,u.k,u.x],null,null),(l()(),u.qb(6,0,null,0,2,"ion-back-button",[["defaultHref","menu/edit-room-list"],["text","Voltar"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==u.Cb(l,8).onClick(t)&&e),e}),i.A,i.b)),u.pb(7,49152,null,0,a.g,[u.h,u.k,u.x],{defaultHref:[0,"defaultHref"],text:[1,"text"]},null),u.pb(8,16384,null,0,a.h,[[2,a.fb],a.Fb],{defaultHref:[0,"defaultHref"]},null),(l()(),u.qb(9,0,null,0,2,"ion-title",[],null,null,null,i.W,i.x)),u.pb(10,49152,null,0,a.xb,[u.h,u.k,u.x],null,null),(l()(),u.Hb(-1,0,[" Editar "])),(l()(),u.qb(12,0,null,null,24,"ion-content",[],null,null,null,i.E,i.f)),u.pb(13,49152,null,0,a.u,[u.h,u.k,u.x],null,null),(l()(),u.qb(14,0,null,0,8,"ion-item",[["lines","full"]],null,null,null,i.L,i.m)),u.pb(15,49152,null,0,a.H,[u.h,u.k,u.x],{lines:[0,"lines"]},null),(l()(),u.qb(16,0,null,0,2,"ion-label",[],null,null,null,i.M,i.n)),u.pb(17,49152,null,0,a.N,[u.h,u.k,u.x],null,null),(l()(),u.Hb(18,0,["",""])),(l()(),u.qb(19,0,null,0,3,"div",[["class","button"]],null,null,null,null,null)),(l()(),u.qb(20,0,null,null,2,"button",[["class","transparent"],["clear",""],["ion-button",""]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.updateName()&&u),u}),null,null)),(l()(),u.qb(21,0,null,null,1,"ion-icon",[["name","pencil-outline"],["style","zoom:2.0"]],null,null,null,i.J,i.k)),u.pb(22,49152,null,0,a.C,[u.h,u.k,u.x],{name:[0,"name"]},null),(l()(),u.qb(23,0,null,0,13,"ion-item",[["lines","full"]],null,null,null,i.L,i.m)),u.pb(24,49152,null,0,a.H,[u.h,u.k,u.x],{lines:[0,"lines"]},null),(l()(),u.qb(25,0,null,0,1,"ion-icon",[],null,null,null,i.J,i.k)),u.pb(26,49152,null,0,a.C,[u.h,u.k,u.x],{src:[0,"src"]},null),(l()(),u.qb(27,0,null,0,2,"ion-label",[],null,null,null,i.M,i.n)),u.pb(28,49152,null,0,a.N,[u.h,u.k,u.x],null,null),(l()(),u.Hb(29,0,["\xa0\xa0",""])),(l()(),u.qb(30,0,null,0,6,"div",[["class","button"]],null,null,null,null,null)),(l()(),u.qb(31,0,null,null,5,"button",[["class","transparent"],["clear",""],["ion-button",""]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==u.Cb(l,32).onClick()&&e),"click"===n&&(e=!1!==u.Cb(l,34).onClick(t)&&e),e}),null,null)),u.pb(32,16384,null,0,r.n,[r.m,r.a,[8,null],u.B,u.k],{routerLink:[0,"routerLink"]},null),u.Db(33,2),u.pb(34,737280,null,0,a.Ib,[c.g,a.Fb,u.k,r.m,[2,r.n]],null,null),(l()(),u.qb(35,0,null,null,1,"ion-icon",[["name","file-tray-full-outline"],["style","zoom:2.0"]],null,null,null,i.J,i.k)),u.pb(36,49152,null,0,a.C,[u.h,u.k,u.x],{name:[0,"name"]},null)],(function(l,n){var t=n.component;l(n,7,0,"menu/edit-room-list","Voltar"),l(n,8,0,"menu/edit-room-list"),l(n,15,0,"full"),l(n,22,0,"pencil-outline"),l(n,24,0,"full"),l(n,26,0,u.ub(1,"/assets/svg/",t.icon,".svg"));var e=l(n,33,0,"/edit-icon-room/",t.room);l(n,32,0,e),l(n,34,0),l(n,36,0,"file-tray-full-outline")}),(function(l,n){var t=n.component;l(n,18,0,t.name),l(n,29,0,t.iconName)}))}var h=u.mb("app-edit-room-page",m,(function(l){return u.Ib(0,[(l()(),u.qb(0,0,null,null,1,"app-edit-room-page",[],null,null,null,d,p)),u.pb(1,114688,null,0,m,[s.a,r.a,a.a,a.b,a.Lb],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),f=t("s7LF");class k{}t.d(n,"EditRoomPagePageModuleNgFactory",(function(){return v}));var v=u.nb(e,[],(function(l){return u.zb([u.Ab(512,u.j,u.Y,[[8,[o.a,h]],[3,u.j],u.v]),u.Ab(4608,c.k,c.j,[u.s,[2,c.r]]),u.Ab(4608,f.q,f.q,[]),u.Ab(4608,a.c,a.c,[u.x,u.g]),u.Ab(4608,a.Eb,a.Eb,[a.c,u.j,u.p]),u.Ab(4608,a.Hb,a.Hb,[a.c,u.j,u.p]),u.Ab(1073742336,c.b,c.b,[]),u.Ab(1073742336,f.p,f.p,[]),u.Ab(1073742336,f.f,f.f,[]),u.Ab(1073742336,a.Bb,a.Bb,[]),u.Ab(1073742336,r.q,r.q,[[2,r.v],[2,r.m]]),u.Ab(1073742336,k,k,[]),u.Ab(1073742336,e,e,[]),u.Ab(1024,r.k,(function(){return[[{path:"",component:m}]]}),[])])}))}}]);