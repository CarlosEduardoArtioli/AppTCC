(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{BWIA:function(l,n,o){"use strict";o.r(n);var u=o("8Y7J");class e{}var t=o("pMnS"),i=o("MKJQ"),r=o("sZkV"),c=o("SVse"),a=o("mrSG"),s=o("yWY+");class b{constructor(l,n,o){this.roomService=l,this.alertCtrl=n,this.toastController=o,this.Rooms=[]}ngOnInit(){this.fetchDevices(),this.roomService.getRoomList().snapshotChanges().subscribe(l=>{this.Rooms=[],l.forEach(l=>{let n=l.payload.toJSON();n.$key=l.key,this.Rooms.push(n)})})}fetchDevices(){this.roomService.getRoomList().valueChanges().subscribe(l=>{console.log(l)})}deleteRoom(l){console.log(l),window.confirm("Tem certeza que deseja excluir?")&&this.roomService.deleteDevice(l)}addRoom(){return a.__awaiter(this,void 0,void 0,(function*(){const l=yield this.alertCtrl.create({header:"Novo C\xf4modo",inputs:[{name:"new-room",id:"newroom",placeholder:"Escreva o nome do C\xf4modo",value:this.newRoom}],buttons:[{text:"Cancelar",role:"cancel",handler:l=>{console.log("Cancel clicked")}},{text:"Salvar",handler:l=>{""!=document.getElementById("newroom").value&&(this.newRoom=document.getElementById("newroom").value,this.newroom(),this.roomService.createRoom(this.newRoom))}}]});yield l.present()}))}newroom(){return a.__awaiter(this,void 0,void 0,(function*(){const l=yield this.toastController.create({header:"C\xf4modo Adicionado!",duration:2e3});yield l.present()}))}}var m=u.ob({encapsulation:0,styles:[[".transparent[_ngcontent-%COMP%]{background-color:transparent}"]],data:{}});function d(l){return u.Ib(0,[(l()(),u.qb(0,0,null,null,11,"ion-item",[],null,null,null,i.F,i.k)),u.pb(1,49152,null,0,r.G,[u.h,u.k,u.x],null,null),(l()(),u.qb(2,0,null,0,5,"ion-label",[],null,null,null,i.G,i.l)),u.pb(3,49152,null,0,r.M,[u.h,u.k,u.x],null,null),(l()(),u.qb(4,0,null,0,3,"h2",[],null,null,null,null,null)),(l()(),u.qb(5,0,null,null,1,"ion-icon",[["name","home"]],null,null,null,i.D,i.i)),u.pb(6,49152,null,0,r.B,[u.h,u.k,u.x],{name:[0,"name"]},null),(l()(),u.Hb(7,null,[" "," "])),(l()(),u.qb(8,0,null,0,3,"div",[["class","item-note"],["item-end",""]],null,null,null,null,null)),(l()(),u.qb(9,0,null,null,2,"button",[["class","transparent"],["clear",""],["ion-button",""]],null,[[null,"click"]],(function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.deleteRoom(l.context.$implicit.$key)&&u),u}),null,null)),(l()(),u.qb(10,0,null,null,1,"ion-icon",[["name","trash"],["style","zoom:2.0"]],null,null,null,i.D,i.i)),u.pb(11,49152,null,0,r.B,[u.h,u.k,u.x],{name:[0,"name"]},null)],(function(l,n){l(n,6,0,"home"),l(n,11,0,"trash")}),(function(l,n){l(n,7,0,n.context.$implicit.name)}))}function h(l){return u.Ib(0,[(l()(),u.qb(0,0,null,null,14,"ion-header",[],null,null,null,i.C,i.h)),u.pb(1,49152,null,0,r.A,[u.h,u.k,u.x],null,null),(l()(),u.qb(2,0,null,0,12,"ion-toolbar",[],null,null,null,i.P,i.u)),u.pb(3,49152,null,0,r.yb,[u.h,u.k,u.x],null,null),(l()(),u.qb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,i.y,i.d)),u.pb(5,49152,null,0,r.k,[u.h,u.k,u.x],null,null),(l()(),u.qb(6,0,null,0,1,"ion-menu-button",[],null,null,null,i.I,i.o)),u.pb(7,49152,null,0,r.Q,[u.h,u.k,u.x],null,null),(l()(),u.qb(8,0,null,0,2,"ion-title",[],null,null,null,i.O,i.t)),u.pb(9,49152,null,0,r.wb,[u.h,u.k,u.x],null,null),(l()(),u.Hb(-1,0,[" Editar C\xf4modos "])),(l()(),u.qb(11,0,null,0,3,"ion-button",[["slot","end"]],null,[[null,"click"]],(function(l,n,o){var u=!0;return"click"===n&&(u=!1!==l.component.addRoom()&&u),u}),i.x,i.c)),u.pb(12,49152,null,0,r.j,[u.h,u.k,u.x],null,null),(l()(),u.qb(13,0,null,0,1,"ion-icon",[["name","add-circle-outline"]],null,null,null,i.D,i.i)),u.pb(14,49152,null,0,r.B,[u.h,u.k,u.x],{name:[0,"name"]},null),(l()(),u.qb(15,0,null,null,5,"ion-content",[],null,null,null,i.A,i.f)),u.pb(16,49152,null,0,r.t,[u.h,u.k,u.x],null,null),(l()(),u.qb(17,0,null,0,3,"ion-list",[["class","ios list-ios hydrated"]],null,null,null,i.H,i.m)),u.pb(18,49152,null,0,r.N,[u.h,u.k,u.x],null,null),(l()(),u.fb(16777216,null,0,1,null,d)),u.pb(20,278528,null,0,c.h,[u.N,u.J,u.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var o=n.component;l(n,14,0,"add-circle-outline"),l(n,20,0,o.Rooms)}),null)}var p=u.mb("app-edit-room-list",b,(function(l){return u.Ib(0,[(l()(),u.qb(0,0,null,null,1,"app-edit-room-list",[],null,null,null,h,m)),u.pb(1,114688,null,0,b,[s.a,r.b,r.Kb],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),k=o("s7LF"),v=o("iInd");class f{}o.d(n,"EditRoomListPageModuleNgFactory",(function(){return w}));var w=u.nb(e,[],(function(l){return u.zb([u.Ab(512,u.j,u.Y,[[8,[t.a,p]],[3,u.j],u.v]),u.Ab(4608,c.k,c.j,[u.s,[2,c.r]]),u.Ab(4608,k.p,k.p,[]),u.Ab(4608,r.c,r.c,[u.x,u.g]),u.Ab(4608,r.Db,r.Db,[r.c,u.j,u.p]),u.Ab(4608,r.Gb,r.Gb,[r.c,u.j,u.p]),u.Ab(1073742336,c.b,c.b,[]),u.Ab(1073742336,k.o,k.o,[]),u.Ab(1073742336,k.e,k.e,[]),u.Ab(1073742336,r.Ab,r.Ab,[]),u.Ab(1073742336,v.o,v.o,[[2,v.t],[2,v.m]]),u.Ab(1073742336,f,f,[]),u.Ab(1073742336,e,e,[]),u.Ab(1024,v.k,(function(){return[[{path:"",component:b}]]}),[])])}))}}]);