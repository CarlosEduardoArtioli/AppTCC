(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"+15X":function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class t{}var o=u("pMnS"),i=u("MKJQ"),a=u("sZkV"),r=u("iInd"),b=u("SVse"),c=u("mrSG"),s=u("yWY+");class m{constructor(l,n,u,e,t){this.roomService=l,this.actRoute=n,this.actionSheetController=u,this.alertCtrl=e,this.toastController=t,this.room=this.actRoute.snapshot.paramMap.get("room"),this.roomService.getRoom(this.room).valueChanges().subscribe(l=>{this.name=l.name,this.icon=l.icon,console.log(l)})}ngOnInit(){}updateName(){return c.__awaiter(this,void 0,void 0,(function*(){const l=yield this.alertCtrl.create({header:"Novo Nome",inputs:[{name:"new-name",id:"newname",placeholder:"Escreva um novo nome",value:this.novoNome}],buttons:[{text:"Cancelar",role:"cancel"},{text:"Salvar",handler:l=>{""!==document.getElementById("newname").value&&(this.novoNome=document.getElementById("newname").value,this.newname(),this.roomService.updateName(this.novoNome,this.room))}}]});yield l.present()}))}newname(){return c.__awaiter(this,void 0,void 0,(function*(){const l=yield this.toastController.create({header:"O nome foi alterado.",duration:2e3});yield l.present()}))}}var p=e.ob({encapsulation:0,styles:[["ion-item[_ngcontent-%COMP%]{--background:rgb(43, 53, 102, 0.7)}ion-icon[_ngcontent-%COMP%]{color:#fff}.transparent[_ngcontent-%COMP%]{background-color:transparent}"]],data:{}});function d(l){return e.Ib(0,[(l()(),e.qb(0,0,null,null,11,"ion-header",[],null,null,null,i.I,i.j)),e.pb(1,49152,null,0,a.B,[e.h,e.k,e.x],null,null),(l()(),e.qb(2,0,null,0,9,"ion-toolbar",[],null,null,null,i.X,i.y)),e.pb(3,49152,null,0,a.zb,[e.h,e.k,e.x],null,null),(l()(),e.qb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,i.C,i.d)),e.pb(5,49152,null,0,a.l,[e.h,e.k,e.x],null,null),(l()(),e.qb(6,0,null,0,2,"ion-back-button",[["defaultHref","menu/edit-room-list"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Cb(l,8).onClick(u)&&t),t}),i.A,i.b)),e.pb(7,49152,null,0,a.g,[e.h,e.k,e.x],{defaultHref:[0,"defaultHref"]},null),e.pb(8,16384,null,0,a.h,[[2,a.fb],a.Fb],{defaultHref:[0,"defaultHref"]},null),(l()(),e.qb(9,0,null,0,2,"ion-title",[],null,null,null,i.W,i.x)),e.pb(10,49152,null,0,a.xb,[e.h,e.k,e.x],null,null),(l()(),e.Hb(-1,0,[" Editar "])),(l()(),e.qb(12,0,null,null,24,"ion-content",[],null,null,null,i.E,i.f)),e.pb(13,49152,null,0,a.u,[e.h,e.k,e.x],null,null),(l()(),e.qb(14,0,null,0,8,"ion-item",[["lines","full"]],null,null,null,i.L,i.m)),e.pb(15,49152,null,0,a.H,[e.h,e.k,e.x],{lines:[0,"lines"]},null),(l()(),e.qb(16,0,null,0,2,"ion-label",[],null,null,null,i.M,i.n)),e.pb(17,49152,null,0,a.N,[e.h,e.k,e.x],null,null),(l()(),e.Hb(18,0,["",""])),(l()(),e.qb(19,0,null,0,3,"div",[],null,null,null,null,null)),(l()(),e.qb(20,0,null,null,2,"button",[["class","transparent"],["clear",""],["ion-button",""]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.updateName()&&e),e}),null,null)),(l()(),e.qb(21,0,null,null,1,"ion-icon",[["name","pencil-outline"],["style","zoom:2.0"]],null,null,null,i.J,i.k)),e.pb(22,49152,null,0,a.C,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.qb(23,0,null,0,13,"ion-item",[["lines","full"]],null,null,null,i.L,i.m)),e.pb(24,49152,null,0,a.H,[e.h,e.k,e.x],{lines:[0,"lines"]},null),(l()(),e.qb(25,0,null,0,1,"ion-icon",[],null,null,null,i.J,i.k)),e.pb(26,49152,null,0,a.C,[e.h,e.k,e.x],{src:[0,"src"]},null),(l()(),e.qb(27,0,null,0,2,"ion-label",[],null,null,null,i.M,i.n)),e.pb(28,49152,null,0,a.N,[e.h,e.k,e.x],null,null),(l()(),e.Hb(29,0,["\xa0\xa0",""])),(l()(),e.qb(30,0,null,0,6,"div",[],null,null,null,null,null)),(l()(),e.qb(31,0,null,null,5,"button",[["class","transparent"],["clear",""],["ion-button",""]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Cb(l,32).onClick()&&t),"click"===n&&(t=!1!==e.Cb(l,34).onClick(u)&&t),t}),null,null)),e.pb(32,16384,null,0,r.n,[r.m,r.a,[8,null],e.B,e.k],{routerLink:[0,"routerLink"]},null),e.Db(33,2),e.pb(34,737280,null,0,a.Ib,[b.g,a.Fb,e.k,r.m,[2,r.n]],null,null),(l()(),e.qb(35,0,null,null,1,"ion-icon",[["name","file-tray-full-outline"],["style","zoom:2.0"]],null,null,null,i.J,i.k)),e.pb(36,49152,null,0,a.C,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(l,n){var u=n.component;l(n,7,0,"menu/edit-room-list"),l(n,8,0,"menu/edit-room-list"),l(n,15,0,"full"),l(n,22,0,"pencil-outline"),l(n,24,0,"full"),l(n,26,0,e.ub(1,"/assets/svg/",u.icon,".svg"));var t=l(n,33,0,"/edit-icon-room/",u.room);l(n,32,0,t),l(n,34,0),l(n,36,0,"file-tray-full-outline")}),(function(l,n){var u=n.component;l(n,18,0,u.name),l(n,29,0,u.icon)}))}var h=e.mb("app-edit-room-page",m,(function(l){return e.Ib(0,[(l()(),e.qb(0,0,null,null,1,"app-edit-room-page",[],null,null,null,d,p)),e.pb(1,114688,null,0,m,[s.a,r.a,a.a,a.b,a.Lb],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),f=u("s7LF");class k{}u.d(n,"EditRoomPagePageModuleNgFactory",(function(){return v}));var v=e.nb(t,[],(function(l){return e.zb([e.Ab(512,e.j,e.Y,[[8,[o.a,h]],[3,e.j],e.v]),e.Ab(4608,b.k,b.j,[e.s,[2,b.r]]),e.Ab(4608,f.q,f.q,[]),e.Ab(4608,a.c,a.c,[e.x,e.g]),e.Ab(4608,a.Eb,a.Eb,[a.c,e.j,e.p]),e.Ab(4608,a.Hb,a.Hb,[a.c,e.j,e.p]),e.Ab(1073742336,b.b,b.b,[]),e.Ab(1073742336,f.p,f.p,[]),e.Ab(1073742336,f.f,f.f,[]),e.Ab(1073742336,a.Bb,a.Bb,[]),e.Ab(1073742336,r.q,r.q,[[2,r.v],[2,r.m]]),e.Ab(1073742336,k,k,[]),e.Ab(1073742336,t,t,[]),e.Ab(1024,r.k,(function(){return[[{path:"",component:m}]]}),[])])}))}}]);