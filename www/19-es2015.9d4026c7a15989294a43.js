(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{NDWJ:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class i{}var t=u("pMnS"),c=u("MKJQ"),o=u("sZkV"),b=u("iInd"),s=u("SVse"),a=u("BtSu");class r{constructor(l){this.deviceService=l,this.Devices=[]}ngOnInit(){this.fetchDevices(),this.deviceService.getDeviceList().snapshotChanges().subscribe(l=>{this.Devices=[],l.forEach(l=>{const n=l.payload.toJSON();n.$key=l.key,this.Devices.push(n)})})}fetchDevices(){this.deviceService.getDeviceList().valueChanges().subscribe(l=>{console.log(l)})}deleteDevice(l){console.log(l),window.confirm("Tem certeza que deseja excluir?")&&this.deviceService.deleteDevice(l)}}var p=e.ob({encapsulation:0,styles:[[".transparent[_ngcontent-%COMP%]{background-color:transparent}ion-icon[_ngcontent-%COMP%]{color:#fff}"]],data:{}});function h(l){return e.Ib(0,[(l()(),e.qb(0,0,null,null,25,"ion-item",[],null,null,null,c.N,c.n)),e.pb(1,49152,null,0,o.H,[e.h,e.k,e.x],null,null),(l()(),e.qb(2,0,null,0,13,"ion-label",[],null,null,null,c.O,c.o)),e.pb(3,49152,null,0,o.N,[e.h,e.k,e.x],null,null),(l()(),e.qb(4,0,null,0,3,"h5",[],null,null,null,null,null)),(l()(),e.qb(5,0,null,null,1,"ion-icon",[],null,null,null,c.L,c.l)),e.pb(6,49152,null,0,o.C,[e.h,e.k,e.x],{src:[0,"src"]},null),(l()(),e.Hb(7,null,[" "," "])),(l()(),e.qb(8,0,null,0,3,"h5",[],null,null,null,null,null)),(l()(),e.qb(9,0,null,null,1,"ion-icon",[["name","hardware-chip"]],null,null,null,c.L,c.l)),e.pb(10,49152,null,0,o.C,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.Hb(11,null,[" "," "])),(l()(),e.qb(12,0,null,0,3,"h5",[],null,null,null,null,null)),(l()(),e.qb(13,0,null,null,1,"ion-icon",[["name","home-outline"]],null,null,null,c.L,c.l)),e.pb(14,49152,null,0,o.C,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.Hb(15,null,[" "," "])),(l()(),e.qb(16,0,null,0,9,"div",[],null,null,null,null,null)),(l()(),e.qb(17,0,null,null,5,"button",[["class","transparent"],["clear",""],["ion-button",""]],null,[[null,"click"]],(function(l,n,u){var i=!0;return"click"===n&&(i=!1!==e.Cb(l,18).onClick()&&i),"click"===n&&(i=!1!==e.Cb(l,20).onClick(u)&&i),i}),null,null)),e.pb(18,16384,null,0,b.n,[b.m,b.a,[8,null],e.B,e.k],{routerLink:[0,"routerLink"]},null),e.Db(19,2),e.pb(20,737280,null,0,o.Ib,[s.g,o.Fb,e.k,b.m,[2,b.n]],null,null),(l()(),e.qb(21,0,null,null,1,"ion-icon",[["name","create"],["style","zoom:2.0"]],null,null,null,c.L,c.l)),e.pb(22,49152,null,0,o.C,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.qb(23,0,null,null,2,"button",[["class","transparent"],["clear",""],["ion-button",""]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.deleteDevice(l.context.$implicit.$key)&&e),e}),null,null)),(l()(),e.qb(24,0,null,null,1,"ion-icon",[["name","trash"],["style","zoom:2.0"]],null,null,null,c.L,c.l)),e.pb(25,49152,null,0,o.C,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(l,n){l(n,6,0,e.ub(1,"/assets/svg/",n.context.$implicit.icon,".svg")),l(n,10,0,"hardware-chip"),l(n,14,0,"home-outline");var u=l(n,19,0,"/edit-device-page/",n.context.$implicit.$key);l(n,18,0,u),l(n,20,0),l(n,22,0,"create"),l(n,25,0,"trash")}),(function(l,n){l(n,7,0,n.context.$implicit.name),l(n,11,0,n.context.$implicit.mac),l(n,15,0,n.context.$implicit.room)}))}function v(l){return e.Ib(0,[(l()(),e.qb(0,0,null,null,10,"ion-header",[],null,null,null,c.K,c.k)),e.pb(1,49152,null,0,o.B,[e.h,e.k,e.x],null,null),(l()(),e.qb(2,0,null,0,8,"ion-toolbar",[],null,null,null,c.Z,c.z)),e.pb(3,49152,null,0,o.zb,[e.h,e.k,e.x],null,null),(l()(),e.qb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,c.E,c.e)),e.pb(5,49152,null,0,o.l,[e.h,e.k,e.x],null,null),(l()(),e.qb(6,0,null,0,1,"ion-menu-button",[],null,null,null,c.Q,c.r)),e.pb(7,49152,null,0,o.R,[e.h,e.k,e.x],null,null),(l()(),e.qb(8,0,null,0,2,"ion-title",[],null,null,null,c.Y,c.y)),e.pb(9,49152,null,0,o.xb,[e.h,e.k,e.x],null,null),(l()(),e.Hb(-1,0,[" Editar Dispositivo "])),(l()(),e.qb(11,0,null,null,5,"ion-content",[],null,null,null,c.H,c.h)),e.pb(12,49152,null,0,o.u,[e.h,e.k,e.x],null,null),(l()(),e.qb(13,0,null,0,3,"ion-list",[["lines","full"]],null,null,null,c.P,c.p)),e.pb(14,49152,null,0,o.O,[e.h,e.k,e.x],{lines:[0,"lines"]},null),(l()(),e.fb(16777216,null,0,1,null,h)),e.pb(16,278528,null,0,s.h,[e.N,e.J,e.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,14,0,"full"),l(n,16,0,u.Devices)}),null)}function k(l){return e.Ib(0,[(l()(),e.qb(0,0,null,null,1,"app-edit-device-list",[],null,null,null,v,p)),e.pb(1,114688,null,0,r,[a.a],null,null)],(function(l,n){l(n,1,0)}),null)}var m=e.mb("app-edit-device-list",r,k,{},{},[]),d=u("s7LF");class f{}u.d(n,"EditDeviceListPageModuleNgFactory",(function(){return q}));var q=e.nb(i,[],(function(l){return e.zb([e.Ab(512,e.j,e.Y,[[8,[t.a,m]],[3,e.j],e.v]),e.Ab(4608,s.k,s.j,[e.s,[2,s.r]]),e.Ab(4608,d.q,d.q,[]),e.Ab(4608,o.c,o.c,[e.x,e.g]),e.Ab(4608,o.Eb,o.Eb,[o.c,e.j,e.p]),e.Ab(4608,o.Hb,o.Hb,[o.c,e.j,e.p]),e.Ab(1073742336,s.b,s.b,[]),e.Ab(1073742336,d.p,d.p,[]),e.Ab(1073742336,d.f,d.f,[]),e.Ab(1073742336,o.Bb,o.Bb,[]),e.Ab(1073742336,b.q,b.q,[[2,b.v],[2,b.m]]),e.Ab(1073742336,f,f,[]),e.Ab(1073742336,i,i,[]),e.Ab(1024,b.k,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);