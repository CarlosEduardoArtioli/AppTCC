(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{NDWJ:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J");class t{}var i=u("pMnS"),c=u("MKJQ"),o=u("sZkV"),b=u("iInd"),s=u("SVse"),a=u("BtSu");class r{constructor(l){this.deviceService=l,this.Devices=[]}ngOnInit(){this.fetchDevices(),this.deviceService.getDeviceList().snapshotChanges().subscribe(l=>{this.Devices=[],l.forEach(l=>{let n=l.payload.toJSON();n.$key=l.key,this.Devices.push(n)})})}fetchDevices(){this.deviceService.getDeviceList().valueChanges().subscribe(l=>{console.log(l)})}deleteDevice(l){console.log(l),window.confirm("Tem certeza que deseja excluir?")&&this.deviceService.deleteDevice(l)}}var p=e.ob({encapsulation:0,styles:[[".transparent[_ngcontent-%COMP%]{background-color:transparent}"]],data:{}});function h(l){return e.Ib(0,[(l()(),e.qb(0,0,null,null,21,"ion-item",[["class","user-list"]],null,null,null,c.D,c.k)),e.pb(1,49152,null,0,o.G,[e.h,e.k,e.x],null,null),(l()(),e.qb(2,0,null,0,9,"ion-label",[],null,null,null,c.E,c.l)),e.pb(3,49152,null,0,o.M,[e.h,e.k,e.x],null,null),(l()(),e.qb(4,0,null,0,3,"h5",[],null,null,null,null,null)),(l()(),e.qb(5,0,null,null,1,"ion-icon",[],null,null,null,c.B,c.i)),e.pb(6,49152,null,0,o.B,[e.h,e.k,e.x],{src:[0,"src"]},null),(l()(),e.Hb(7,null,[" "," "])),(l()(),e.qb(8,0,null,0,3,"h5",[],null,null,null,null,null)),(l()(),e.qb(9,0,null,null,1,"ion-icon",[["name","contrast"]],null,null,null,c.B,c.i)),e.pb(10,49152,null,0,o.B,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.Hb(11,null,[" "," "])),(l()(),e.qb(12,0,null,0,9,"div",[["class","item-note"],["item-end",""]],null,null,null,null,null)),(l()(),e.qb(13,0,null,null,5,"button",[["class","transparent"],["clear",""],["ion-button",""]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==e.Cb(l,14).onClick()&&t),"click"===n&&(t=!1!==e.Cb(l,16).onClick(u)&&t),t}),null,null)),e.pb(14,16384,null,0,b.n,[b.m,b.a,[8,null],e.B,e.k],{routerLink:[0,"routerLink"]},null),e.Db(15,2),e.pb(16,737280,null,0,o.Hb,[s.g,o.Eb,e.k,b.m,[2,b.n]],null,null),(l()(),e.qb(17,0,null,null,1,"ion-icon",[["name","create"],["style","zoom:2.0"]],null,null,null,c.B,c.i)),e.pb(18,49152,null,0,o.B,[e.h,e.k,e.x],{name:[0,"name"]},null),(l()(),e.qb(19,0,null,null,2,"button",[["class","transparent"],["clear",""],["ion-button",""]],null,[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.deleteDevice(l.context.$implicit.$key)&&e),e}),null,null)),(l()(),e.qb(20,0,null,null,1,"ion-icon",[["name","trash"],["style","zoom:2.0"]],null,null,null,c.B,c.i)),e.pb(21,49152,null,0,o.B,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(l,n){l(n,6,0,e.ub(1,"/assets/svg/",n.context.$implicit.icon,".svg")),l(n,10,0,"contrast");var u=l(n,15,0,"/edit-device-page/",n.context.$implicit.$key);l(n,14,0,u),l(n,16,0),l(n,18,0,"create"),l(n,21,0,"trash")}),(function(l,n){l(n,7,0,n.context.$implicit.name),l(n,11,0,n.context.$implicit.status)}))}function v(l){return e.Ib(0,[(l()(),e.qb(0,0,null,null,10,"ion-header",[],null,null,null,c.A,c.h)),e.pb(1,49152,null,0,o.A,[e.h,e.k,e.x],null,null),(l()(),e.qb(2,0,null,0,8,"ion-toolbar",[],null,null,null,c.L,c.s)),e.pb(3,49152,null,0,o.yb,[e.h,e.k,e.x],null,null),(l()(),e.qb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,c.w,c.d)),e.pb(5,49152,null,0,o.k,[e.h,e.k,e.x],null,null),(l()(),e.qb(6,0,null,0,1,"ion-menu-button",[],null,null,null,c.G,c.o)),e.pb(7,49152,null,0,o.Q,[e.h,e.k,e.x],null,null),(l()(),e.qb(8,0,null,0,2,"ion-title",[],null,null,null,c.K,c.r)),e.pb(9,49152,null,0,o.wb,[e.h,e.k,e.x],null,null),(l()(),e.Hb(-1,0,[" Editar Dispositivo "])),(l()(),e.qb(11,0,null,null,5,"ion-content",[],null,null,null,c.y,c.f)),e.pb(12,49152,null,0,o.t,[e.h,e.k,e.x],null,null),(l()(),e.qb(13,0,null,0,3,"ion-list",[["class","ios list-ios hydrated"]],null,null,null,c.F,c.m)),e.pb(14,49152,null,0,o.N,[e.h,e.k,e.x],null,null),(l()(),e.fb(16777216,null,0,1,null,h)),e.pb(16,278528,null,0,s.h,[e.N,e.J,e.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,16,0,n.component.Devices)}),null)}var k=e.mb("app-edit-device-list",r,(function(l){return e.Ib(0,[(l()(),e.qb(0,0,null,null,1,"app-edit-device-list",[],null,null,null,v,p)),e.pb(1,114688,null,0,r,[a.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),d=u("s7LF");class m{}u.d(n,"EditDeviceListPageModuleNgFactory",(function(){return f}));var f=e.nb(t,[],(function(l){return e.zb([e.Ab(512,e.j,e.Y,[[8,[i.a,k]],[3,e.j],e.v]),e.Ab(4608,s.k,s.j,[e.s,[2,s.r]]),e.Ab(4608,d.o,d.o,[]),e.Ab(4608,o.c,o.c,[e.x,e.g]),e.Ab(4608,o.Db,o.Db,[o.c,e.j,e.p]),e.Ab(4608,o.Gb,o.Gb,[o.c,e.j,e.p]),e.Ab(1073742336,s.b,s.b,[]),e.Ab(1073742336,d.n,d.n,[]),e.Ab(1073742336,d.e,d.e,[]),e.Ab(1073742336,o.Ab,o.Ab,[]),e.Ab(1073742336,b.o,b.o,[[2,b.t],[2,b.m]]),e.Ab(1073742336,m,m,[]),e.Ab(1073742336,t,t,[]),e.Ab(1024,b.k,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);