(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{BtSu:function(l,n,e){"use strict";e.d(n,"a",(function(){return i}));var u=e("8Y7J"),t=e("PVcy");let i=(()=>{class l{constructor(l){this.db=l,this.status=""}userEmail(){this.user=JSON.parse(localStorage.getItem("user")),this.user.email=this.user.email.replace(/[.#$]+/g,":")}getDevice(l){return this.userEmail(),this.deviceRef=this.db.object(`/users/${this.user.email}/devices/${l}`),this.deviceRef}getDeviceList(){return this.userEmail(),this.deviceListRef=this.db.list(`/users/${this.user.email}/devices`),this.deviceListRef}updateIcon(l,n){return this.userEmail(),this.db.database.ref(`/users/${this.user.email}/devices/${n}/icon`).set(l)}updateName(l,n){return this.userEmail(),this.db.database.ref(`/users/${this.user.email}/devices/${n}/name`).set(l)}updateRoom(l,n,e){return this.userEmail(),this.db.database.ref(`/users/${this.user.email}/devices/${e}/room`).set(l),this.db.database.ref(`/users/${this.user.email}/devices/${e}/iconRoom`).set(n)}deleteDevice(l){this.userEmail(),this.deviceRef=this.db.object(`/users/${this.user.email}/devices/${l}`),this.deviceRef.remove()}mudaStatus(l){this.userEmail(),this.db.database.ref(`/users/${this.user.email}/devices/${l}/status`).once("value").then(n=>{"ligado"===n.val()?this.db.database.ref(`/users/${this.user.email}/devices/${l}/status`).set("desligado"):this.db.database.ref(`/users/${this.user.email}/devices/${l}/status`).set("ligado")})}}return l.ngInjectableDef=u.Mb({factory:function(){return new l(u.Nb(t.a))},token:l,providedIn:"root"}),l})()},TbC0:function(l,n,e){"use strict";e.r(n);var u=e("8Y7J");class t{}var i=e("pMnS"),s=e("MKJQ"),o=e("sZkV"),a=e("SVse"),c=e("s7LF"),r=e("BtSu"),b=e("yWY+");class d{constructor(l,n){this.deviceService=l,this.roomService=n,this.Devices=[],this.Rooms=[],this.selectTabs="all"}ngOnInit(){this.fetchDevices(),this.fetchRooms(),this.deviceService.getDeviceList().snapshotChanges().subscribe(l=>{this.Devices=[],l.forEach(l=>{const n=l.payload.toJSON();n.$key=l.key,this.Devices.push(n)})}),this.roomService.getRoomList().snapshotChanges().subscribe(l=>{this.Rooms=[],l.forEach(l=>{const n=l.payload.toJSON();n.$key=l.key,this.Rooms.push(n)})})}fetchDevices(){this.deviceService.getDeviceList().valueChanges().subscribe(l=>{console.log(l)})}fetchRooms(){this.roomService.getRoomList().valueChanges().subscribe(l=>{console.log(l)})}mudaStatus(l){this.deviceService.mudaStatus(l)}}var h=u.ob({encapsulation:0,styles:[['[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}ion-segment-button[_ngcontent-%COMP%]{font-family:"Open Sans",sans-serif}ion-label[_ngcontent-%COMP%]{font-weight:bolder}ion-icon[_ngcontent-%COMP%]{font-size:45px}ion-icon.ligado[_ngcontent-%COMP%]{color:#10f028}ion-icon.desligado[_ngcontent-%COMP%]{color:#fff}span[_ngcontent-%COMP%]{font-family:"Open Sans",sans-serif;font-size:15px}span.ligado[_ngcontent-%COMP%]{color:#10f028}span.desligado[_ngcontent-%COMP%]{color:#fff}.sqare_button[_ngcontent-%COMP%]{--border-radius:1rem;height:80px;--vertical-align:middle;--padding-start:10px;--padding-end:10px;--padding-bottom:2px;--box-shadow:none;font-family:"Cerebri Sans"}.vertical[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:center;align-items:center;line-height:30px}']],data:{}});function p(l){return u.Ib(0,[(l()(),u.qb(0,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),u.qb(1,0,null,null,4,"ion-segment-button",[],null,null,null,s.S,s.u)),u.pb(2,49152,null,0,o.jb,[u.h,u.k,u.x],{value:[0,"value"]},null),(l()(),u.qb(3,0,null,0,2,"ion-label",[],null,null,null,s.M,s.n)),u.pb(4,49152,null,0,o.N,[u.h,u.k,u.x],null,null),(l()(),u.Hb(5,0,["",""]))],(function(l,n){l(n,2,0,u.ub(1,"",n.context.$implicit.name,""))}),(function(l,n){l(n,5,0,n.context.$implicit.name)}))}function g(l){return u.Ib(0,[(l()(),u.qb(0,0,null,null,1,"ion-icon",[["class","desligado"],["slot","start"]],null,null,null,s.J,s.k)),u.pb(1,49152,null,0,o.C,[u.h,u.k,u.x],{src:[0,"src"]},null)],(function(l,n){l(n,1,0,u.ub(1,"/assets/svg/",n.parent.parent.context.$implicit.icon,".svg"))}),null)}function f(l){return u.Ib(0,[(l()(),u.qb(0,0,null,null,1,"ion-icon",[["class","ligado"],["slot","start"]],null,null,null,s.J,s.k)),u.pb(1,49152,null,0,o.C,[u.h,u.k,u.x],{src:[0,"src"]},null)],(function(l,n){l(n,1,0,u.ub(1,"/assets/svg/",n.parent.parent.context.$implicit.icon,".svg"))}),null)}function m(l){return u.Ib(0,[(l()(),u.qb(0,0,null,null,1,"span",[["class","desligado"]],null,null,null,null,null)),(l()(),u.Hb(1,null,["",""]))],null,(function(l,n){l(n,1,0,n.parent.parent.context.$implicit.name)}))}function v(l){return u.Ib(0,[(l()(),u.qb(0,0,null,null,1,"span",[["class","ligado"]],null,null,null,null,null)),(l()(),u.Hb(1,null,["",""]))],null,(function(l,n){l(n,1,0,n.parent.parent.context.$implicit.name)}))}function x(l){return u.Ib(0,[(l()(),u.qb(0,0,null,null,11,"div",[],null,null,null,null,null)),(l()(),u.qb(1,0,null,null,10,"ion-button",[["class","sqare_button"],["color","desligado"],["expand","block"],["fill","solid"],["size","large"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.mudaStatus(l.parent.context.$implicit.$key)&&u),u}),s.B,s.c)),u.pb(2,49152,null,0,o.k,[u.h,u.k,u.x],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"],size:[3,"size"]},null),(l()(),u.qb(3,0,null,0,8,"div",[["class","vertical"]],null,null,null,null,null)),(l()(),u.fb(16777216,null,null,1,null,g)),u.pb(5,16384,null,0,a.i,[u.N,u.J],{ngIf:[0,"ngIf"]},null),(l()(),u.fb(16777216,null,null,1,null,f)),u.pb(7,16384,null,0,a.i,[u.N,u.J],{ngIf:[0,"ngIf"]},null),(l()(),u.fb(16777216,null,null,1,null,m)),u.pb(9,16384,null,0,a.i,[u.N,u.J],{ngIf:[0,"ngIf"]},null),(l()(),u.fb(16777216,null,null,1,null,v)),u.pb(11,16384,null,0,a.i,[u.N,u.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,2,0,"desligado","block","solid","large"),l(n,5,0,"desligado"==n.parent.context.$implicit.status),l(n,7,0,"ligado"==n.parent.context.$implicit.status),l(n,9,0,"desligado"==n.parent.context.$implicit.status),l(n,11,0,"ligado"==n.parent.context.$implicit.status)}),null)}function k(l){return u.Ib(0,[(l()(),u.qb(0,0,null,null,3,"ion-col",[["size","6"]],null,null,null,s.D,s.e)),u.pb(1,49152,null,0,o.t,[u.h,u.k,u.x],{size:[0,"size"]},null),(l()(),u.fb(16777216,null,0,1,null,x)),u.pb(3,16384,null,0,a.i,[u.N,u.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,1,0,"6"),l(n,3,0,e.selectTabs==n.context.$implicit.room||"all"==e.selectTabs)}),null)}function C(l){return u.Ib(0,[(l()(),u.qb(0,0,null,null,10,"ion-header",[],null,null,null,s.I,s.j)),u.pb(1,49152,null,0,o.B,[u.h,u.k,u.x],null,null),(l()(),u.qb(2,0,null,0,8,"ion-toolbar",[],null,null,null,s.X,s.y)),u.pb(3,49152,null,0,o.zb,[u.h,u.k,u.x],null,null),(l()(),u.qb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,s.C,s.d)),u.pb(5,49152,null,0,o.l,[u.h,u.k,u.x],null,null),(l()(),u.qb(6,0,null,0,1,"ion-menu-button",[],null,null,null,s.O,s.q)),u.pb(7,49152,null,0,o.R,[u.h,u.k,u.x],null,null),(l()(),u.qb(8,0,null,0,2,"ion-title",[],null,null,null,s.W,s.x)),u.pb(9,49152,null,0,o.xb,[u.h,u.k,u.x],null,null),(l()(),u.Hb(-1,0,[" Dispositivos "])),(l()(),u.qb(11,0,null,null,22,"ion-content",[],null,null,null,s.E,s.f)),u.pb(12,49152,null,0,o.u,[u.h,u.k,u.x],null,null),(l()(),u.qb(13,0,null,0,14,"ion-segment",[["color","dark shade"],["scrollable",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,e){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==u.Cb(l,14)._handleBlurEvent(e.target)&&t),"ionChange"===n&&(t=!1!==u.Cb(l,14)._handleChangeEvent(e.target)&&t),"ngModelChange"===n&&(t=!1!==(i.selectTabs=e)&&t),t}),s.T,s.t)),u.pb(14,16384,null,0,o.Jb,[u.k],null,null),u.Eb(1024,null,c.h,(function(l){return[l]}),[o.Jb]),u.pb(16,671744,null,0,c.l,[[8,null],[8,null],[8,null],[6,c.h]],{model:[0,"model"]},{update:"ngModelChange"}),u.Eb(2048,null,c.i,null,[c.l]),u.pb(18,16384,null,0,c.j,[[4,c.i]],null,null),u.pb(19,49152,null,0,o.ib,[u.h,u.k,u.x],{color:[0,"color"],scrollable:[1,"scrollable"]},null),(l()(),u.qb(20,0,null,0,5,"div",[],null,null,null,null,null)),(l()(),u.qb(21,0,null,null,4,"ion-segment-button",[["value","all"]],null,null,null,s.S,s.u)),u.pb(22,49152,null,0,o.jb,[u.h,u.k,u.x],{value:[0,"value"]},null),(l()(),u.qb(23,0,null,0,2,"ion-label",[],null,null,null,s.M,s.n)),u.pb(24,49152,null,0,o.N,[u.h,u.k,u.x],null,null),(l()(),u.Hb(-1,0,["Todos"])),(l()(),u.fb(16777216,null,0,1,null,p)),u.pb(27,278528,null,0,a.h,[u.N,u.J,u.q],{ngForOf:[0,"ngForOf"]},null),(l()(),u.qb(28,0,null,0,5,"ion-grid",[],null,null,null,s.H,s.i)),u.pb(29,49152,null,0,o.A,[u.h,u.k,u.x],null,null),(l()(),u.qb(30,0,null,0,3,"ion-row",[],null,null,null,s.R,s.s)),u.pb(31,49152,null,0,o.gb,[u.h,u.k,u.x],null,null),(l()(),u.fb(16777216,null,0,1,null,k)),u.pb(33,278528,null,0,a.h,[u.N,u.J,u.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var e=n.component;l(n,16,0,e.selectTabs),l(n,19,0,"dark shade",""),l(n,22,0,"all"),l(n,27,0,e.Rooms),l(n,33,0,e.Devices)}),(function(l,n){l(n,13,0,u.Cb(n,18).ngClassUntouched,u.Cb(n,18).ngClassTouched,u.Cb(n,18).ngClassPristine,u.Cb(n,18).ngClassDirty,u.Cb(n,18).ngClassValid,u.Cb(n,18).ngClassInvalid,u.Cb(n,18).ngClassPending)}))}function $(l){return u.Ib(0,[(l()(),u.qb(0,0,null,null,1,"app-home",[],null,null,null,C,h)),u.pb(1,114688,null,0,d,[r.a,b.a],null,null)],(function(l,n){l(n,1,0)}),null)}var q=u.mb("app-home",d,$,{},{},[]),I=e("iInd");e.d(n,"HomePageModuleNgFactory",(function(){return S}));var S=u.nb(t,[],(function(l){return u.zb([u.Ab(512,u.j,u.Y,[[8,[i.a,q]],[3,u.j],u.v]),u.Ab(4608,a.k,a.j,[u.s,[2,a.r]]),u.Ab(4608,c.q,c.q,[]),u.Ab(4608,o.c,o.c,[u.x,u.g]),u.Ab(4608,o.Eb,o.Eb,[o.c,u.j,u.p]),u.Ab(4608,o.Hb,o.Hb,[o.c,u.j,u.p]),u.Ab(1073742336,a.b,a.b,[]),u.Ab(1073742336,c.p,c.p,[]),u.Ab(1073742336,c.f,c.f,[]),u.Ab(1073742336,o.Bb,o.Bb,[]),u.Ab(1073742336,I.q,I.q,[[2,I.v],[2,I.m]]),u.Ab(1073742336,t,t,[]),u.Ab(1024,I.k,(function(){return[[{path:"",component:d}]]}),[])])}))}}]);