(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{BWIA:function(n,l,t){"use strict";t.r(l);var o=t("8Y7J");class e{}var u=t("pMnS"),i=t("MKJQ"),r=t("sZkV"),s=t("iInd"),a=t("SVse"),c=t("mrSG"),b=t("yWY+");class m{constructor(n,l,t){this.roomService=n,this.alertCtrl=l,this.toastController=t,this.Rooms=[],this.getRooms()}ngOnInit(){}getRooms(){return c.__awaiter(this,void 0,void 0,(function*(){const n=this.roomService.getRoomList();yield n.snapshotChanges().subscribe(n=>{this.Rooms=[],n.forEach(n=>{const l=n.payload.toJSON();l.$key=n.key,this.Rooms.push(l)})})}))}addRoom(){return c.__awaiter(this,void 0,void 0,(function*(){const n=yield this.alertCtrl.create({header:"Novo C\xf4modo",inputs:[{name:"new-room",id:"newroom",placeholder:"Escreva o nome do C\xf4modo",value:this.newRoom}],buttons:[{text:"Cancelar",role:"cancel",handler:n=>{console.log("Cancel clicked")}},{text:"Salvar",handler:n=>{""!==document.getElementById("newroom").value&&(this.newRoom=document.getElementById("newroom").value,this.newroom(),this.roomService.createRoom(this.newRoom,"Casa"))}}]});yield n.present()}))}newroom(){return c.__awaiter(this,void 0,void 0,(function*(){const n=yield this.toastController.create({header:"C\xf4modo Adicionado!",duration:2e3});yield n.present()}))}deleteRoom(n){this.presentAlertConfirm(n)}presentAlertConfirm(n){return c.__awaiter(this,void 0,void 0,(function*(){const l=yield this.alertCtrl.create({header:"EXCLUIR!",message:"Deseja excluir o c\xf4modo?",buttons:[{text:"Cancelar",role:"cancel"},{text:"Confirmar",handler:()=>{this.roomService.deleteRoom(n)}}]});yield l.present()}))}}var h=o.ob({encapsulation:0,styles:[[".transparent[_ngcontent-%COMP%]{background-color:transparent}ion-icon[_ngcontent-%COMP%]{color:#fff}ion-item[_ngcontent-%COMP%]{--background:rgb(43, 53, 102, 0.7)}@media (min-width:720px){.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:20px}ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:40px}ion-item[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:30px}}"]],data:{}});function d(n){return o.Ib(0,[(n()(),o.qb(0,0,null,null,17,"ion-item",[["lines","full"]],null,null,null,i.L,i.m)),o.pb(1,49152,null,0,r.H,[o.h,o.k,o.x],{lines:[0,"lines"]},null),(n()(),o.qb(2,0,null,0,5,"ion-label",[],null,null,null,i.M,i.n)),o.pb(3,49152,null,0,r.N,[o.h,o.k,o.x],null,null),(n()(),o.qb(4,0,null,0,3,"h2",[],null,null,null,null,null)),(n()(),o.qb(5,0,null,null,1,"ion-icon",[],null,null,null,i.J,i.k)),o.pb(6,49152,null,0,r.C,[o.h,o.k,o.x],{src:[0,"src"]},null),(n()(),o.Hb(7,null,["\xa0\xa0"," "])),(n()(),o.qb(8,0,null,0,9,"div",[["class","buttons"]],null,null,null,null,null)),(n()(),o.qb(9,0,null,null,5,"button",[["class","transparent"],["clear",""],["ion-button",""]],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==o.Cb(n,10).onClick()&&e),"click"===l&&(e=!1!==o.Cb(n,12).onClick(t)&&e),e}),null,null)),o.pb(10,16384,null,0,s.n,[s.m,s.a,[8,null],o.B,o.k],{routerLink:[0,"routerLink"]},null),o.Db(11,2),o.pb(12,737280,null,0,r.Ib,[a.g,r.Fb,o.k,s.m,[2,s.n]],null,null),(n()(),o.qb(13,0,null,null,1,"ion-icon",[["name","create"],["style","zoom:2.0"]],null,null,null,i.J,i.k)),o.pb(14,49152,null,0,r.C,[o.h,o.k,o.x],{name:[0,"name"]},null),(n()(),o.qb(15,0,null,null,2,"button",[["class","transparent"],["clear",""],["ion-button",""]],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.deleteRoom(n.context.$implicit.$key)&&o),o}),null,null)),(n()(),o.qb(16,0,null,null,1,"ion-icon",[["name","trash"],["style","zoom:2.0"]],null,null,null,i.J,i.k)),o.pb(17,49152,null,0,r.C,[o.h,o.k,o.x],{name:[0,"name"]},null)],(function(n,l){n(l,1,0,"full"),n(l,6,0,o.ub(1,"/assets/svg/",l.context.$implicit.icon,".svg"));var t=n(l,11,0,"/edit-room-page/",l.context.$implicit.$key);n(l,10,0,t),n(l,12,0),n(l,14,0,"create"),n(l,17,0,"trash")}),(function(n,l){n(l,7,0,l.context.$implicit.name)}))}function p(n){return o.Ib(0,[(n()(),o.qb(0,0,null,null,10,"ion-header",[],null,null,null,i.I,i.j)),o.pb(1,49152,null,0,r.B,[o.h,o.k,o.x],null,null),(n()(),o.qb(2,0,null,0,8,"ion-toolbar",[],null,null,null,i.X,i.y)),o.pb(3,49152,null,0,r.zb,[o.h,o.k,o.x],null,null),(n()(),o.qb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,i.C,i.d)),o.pb(5,49152,null,0,r.l,[o.h,o.k,o.x],null,null),(n()(),o.qb(6,0,null,0,1,"ion-menu-button",[],null,null,null,i.O,i.q)),o.pb(7,49152,null,0,r.R,[o.h,o.k,o.x],null,null),(n()(),o.qb(8,0,null,0,2,"ion-title",[],null,null,null,i.W,i.x)),o.pb(9,49152,null,0,r.xb,[o.h,o.k,o.x],null,null),(n()(),o.Hb(-1,0,[" C\xf4modos "])),(n()(),o.qb(11,0,null,null,9,"ion-content",[],null,null,null,i.E,i.f)),o.pb(12,49152,null,0,r.u,[o.h,o.k,o.x],null,null),(n()(),o.qb(13,0,null,0,5,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.addRoom()&&o),o}),i.G,i.g)),o.pb(14,49152,null,0,r.w,[o.h,o.k,o.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(n()(),o.qb(15,0,null,0,3,"ion-fab-button",[],null,null,null,i.F,i.h)),o.pb(16,49152,null,0,r.x,[o.h,o.k,o.x],null,null),(n()(),o.qb(17,0,null,0,1,"ion-icon",[["name","add"]],null,null,null,i.J,i.k)),o.pb(18,49152,null,0,r.C,[o.h,o.k,o.x],{name:[0,"name"]},null),(n()(),o.fb(16777216,null,0,1,null,d)),o.pb(20,278528,null,0,a.h,[o.N,o.J,o.q],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){var t=l.component;n(l,14,0,"end","bottom"),n(l,18,0,"add"),n(l,20,0,t.Rooms)}),null)}function f(n){return o.Ib(0,[(n()(),o.qb(0,0,null,null,1,"app-edit-room-list",[],null,null,null,p,h)),o.pb(1,114688,null,0,m,[b.a,r.b,r.Lb],null,null)],(function(n,l){n(l,1,0)}),null)}var k=o.mb("app-edit-room-list",m,f,{},{},[]),g=t("s7LF");class C{}t.d(l,"EditRoomListPageModuleNgFactory",(function(){return v}));var v=o.nb(e,[],(function(n){return o.zb([o.Ab(512,o.j,o.Y,[[8,[u.a,k]],[3,o.j],o.v]),o.Ab(4608,a.k,a.j,[o.s,[2,a.r]]),o.Ab(4608,g.q,g.q,[]),o.Ab(4608,r.c,r.c,[o.x,o.g]),o.Ab(4608,r.Eb,r.Eb,[r.c,o.j,o.p]),o.Ab(4608,r.Hb,r.Hb,[r.c,o.j,o.p]),o.Ab(1073742336,a.b,a.b,[]),o.Ab(1073742336,g.p,g.p,[]),o.Ab(1073742336,g.f,g.f,[]),o.Ab(1073742336,r.Bb,r.Bb,[]),o.Ab(1073742336,s.q,s.q,[[2,s.v],[2,s.m]]),o.Ab(1073742336,C,C,[]),o.Ab(1073742336,e,e,[]),o.Ab(1024,s.k,(function(){return[[{path:"",component:m}]]}),[])])}))},"yWY+":function(n,l,t){"use strict";t.d(l,"a",(function(){return u}));var o=t("8Y7J"),e=t("PVcy");let u=(()=>{class n{constructor(n){this.db=n,this.user=JSON.parse(localStorage.getItem("user")),this.email=this.user.email,this.email=this.email.replace(/[.#$]+/g,":")}createRoom(n,l){this.db.object(`/users/${this.email}/rooms/${n}`).set({name:n,icon:l})}getRoom(n){return this.roomRef=this.db.object(`/users/${this.email}/rooms/${n}`),this.roomRef}getRoomList(){return this.roomListRef=this.db.list(`/users/${this.email}/rooms`),this.roomListRef}updateName(n,l){this.db.object(`/users/${this.email}/rooms/${l}/name`).set(n)}updateIcon(n,l,t){return this.db.object(`/users/${this.email}/rooms/${t}/iconName`).set(l),this.db.object(`/users/${this.email}/rooms/${t}/icon`).set(n)}deleteRoom(n){this.roomRef=this.db.object(`/users/${this.email}/rooms/${n}`),this.roomRef.remove()}}return n.ngInjectableDef=o.Mb({factory:function(){return new n(o.Nb(e.a))},token:n,providedIn:"root"}),n})()}}]);