(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{xuyv:function(l,n,t){"use strict";t.r(n);var u=t("8Y7J");class e{}var i=t("pMnS"),o=t("MKJQ"),c=t("sZkV"),r=t("iInd"),a=t("SVse"),b=t("mrSG"),s=t("BtSu");class p{constructor(l,n){this.deviceService=l,this.alertCtrl=n,this.Devices=[]}ngOnInit(){this.fetchDevices(),this.deviceService.getDeviceList().snapshotChanges().subscribe(l=>{this.Devices=[],l.forEach(l=>{const n=l.payload.toJSON();n.$key=l.key,this.Devices.push(n)})})}addTimer(){return b.__awaiter(this,void 0,void 0,(function*(){const l=yield this.alertCtrl.create({});yield l.present()}))}fetchDevices(){this.deviceService.getDeviceList().valueChanges().subscribe(l=>{console.log(l)})}mudaStatus(l){this.deviceService.mudaStatus(l)}}var d=u.ob({encapsulation:0,styles:[["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}ion-content[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:translucent}ion-icon[_ngcontent-%COMP%]{font-size:44px}.sqare_button[_ngcontent-%COMP%]{height:80px;--vertical-align:middle;--padding-start:10px;--padding-end:10px;--ripple-color:darkcyan;--padding-bottom:2px!important;--box-shadow:none}.space[_ngcontent-%COMP%]{padding-left:15px}"]],data:{}});function g(l){return u.Ib(0,[(l()(),u.qb(0,0,null,null,9,"ion-button",[["class","sqare_button"],["expand","block"],["fill","solid"],["size","large"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==u.Cb(l,2).onClick()&&e),"click"===n&&(e=!1!==u.Cb(l,4).onClick(t)&&e),e}),o.D,o.d)),u.pb(1,49152,null,0,c.k,[u.h,u.k,u.x],{color:[0,"color"],expand:[1,"expand"],fill:[2,"fill"],size:[3,"size"]},null),u.pb(2,16384,null,0,r.n,[r.m,r.a,[8,null],u.B,u.k],{routerLink:[0,"routerLink"]},null),u.Db(3,2),u.pb(4,737280,null,0,c.Ib,[a.g,c.Fb,u.k,r.m,[2,r.n]],null,null),(l()(),u.qb(5,0,null,0,4,"div",[["class","vertical"]],null,null,null,null,null)),(l()(),u.qb(6,0,null,null,1,"ion-icon",[["slot","start"]],null,null,null,o.L,o.l)),u.pb(7,49152,null,0,c.C,[u.h,u.k,u.x],{src:[0,"src"]},null),(l()(),u.qb(8,0,null,null,1,"span",[["class",""]],null,null,null,null,null)),(l()(),u.Hb(9,null,[""," - ",""]))],(function(l,n){l(n,1,0,u.ub(1,"",n.parent.context.$implicit.status,""),"block","solid","large");var t=l(n,3,0,"/edit-timer-page/",n.parent.context.$implicit.$key);l(n,2,0,t),l(n,4,0),l(n,7,0,u.ub(1,"/assets/svg/",n.parent.context.$implicit.icon,".svg"))}),(function(l,n){l(n,9,0,n.parent.context.$implicit.name,n.parent.context.$implicit.timer)}))}function k(l){return u.Ib(0,[(l()(),u.qb(0,0,null,null,3,"ion-col",[["size","12"]],null,null,null,o.G,o.g)),u.pb(1,49152,null,0,c.t,[u.h,u.k,u.x],{size:[0,"size"]},null),(l()(),u.fb(16777216,null,0,1,null,g)),u.pb(3,16384,null,0,a.i,[u.N,u.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,1,0,"12"),l(n,3,0,n.context.$implicit.timer.length>=4)}),null)}function h(l){return u.Ib(0,[(l()(),u.qb(0,0,null,null,16,"ion-header",[],null,null,null,o.K,o.k)),u.pb(1,49152,null,0,c.B,[u.h,u.k,u.x],null,null),(l()(),u.qb(2,0,null,0,14,"ion-toolbar",[],null,null,null,o.Z,o.z)),u.pb(3,49152,null,0,c.zb,[u.h,u.k,u.x],null,null),(l()(),u.qb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,o.E,o.e)),u.pb(5,49152,null,0,c.l,[u.h,u.k,u.x],null,null),(l()(),u.qb(6,0,null,0,1,"ion-menu-button",[],null,null,null,o.Q,o.r)),u.pb(7,49152,null,0,c.R,[u.h,u.k,u.x],null,null),(l()(),u.qb(8,0,null,0,2,"ion-title",[],null,null,null,o.Y,o.y)),u.pb(9,49152,null,0,c.xb,[u.h,u.k,u.x],null,null),(l()(),u.Hb(-1,0,[" Timer "])),(l()(),u.qb(11,0,null,0,5,"ion-button",[["routerLink","/timer-add"],["slot","end"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==u.Cb(l,13).onClick()&&e),"click"===n&&(e=!1!==u.Cb(l,14).onClick(t)&&e),e}),o.D,o.d)),u.pb(12,49152,null,0,c.k,[u.h,u.k,u.x],null,null),u.pb(13,16384,null,0,r.n,[r.m,r.a,[8,null],u.B,u.k],{routerLink:[0,"routerLink"]},null),u.pb(14,737280,null,0,c.Ib,[a.g,c.Fb,u.k,r.m,[2,r.n]],null,null),(l()(),u.qb(15,0,null,0,1,"ion-icon",[["name","add-circle-outline"]],null,null,null,o.L,o.l)),u.pb(16,49152,null,0,c.C,[u.h,u.k,u.x],{name:[0,"name"]},null),(l()(),u.qb(17,0,null,null,7,"ion-content",[],null,null,null,o.H,o.h)),u.pb(18,49152,null,0,c.u,[u.h,u.k,u.x],null,null),(l()(),u.qb(19,0,null,0,5,"ion-grid",[],null,null,null,o.J,o.j)),u.pb(20,49152,null,0,c.A,[u.h,u.k,u.x],null,null),(l()(),u.qb(21,0,null,0,3,"ion-row",[],null,null,null,o.T,o.t)),u.pb(22,49152,null,0,c.gb,[u.h,u.k,u.x],null,null),(l()(),u.fb(16777216,null,0,1,null,k)),u.pb(24,278528,null,0,a.h,[u.N,u.J,u.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var t=n.component;l(n,13,0,"/timer-add"),l(n,14,0),l(n,16,0,"add-circle-outline"),l(n,24,0,t.Devices)}),null)}var m=u.mb("app-timer",p,(function(l){return u.Ib(0,[(l()(),u.qb(0,0,null,null,1,"app-timer",[],null,null,null,h,d)),u.pb(1,114688,null,0,p,[s.a,c.b],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),x=t("s7LF");class v{}t.d(n,"TimerPageModuleNgFactory",(function(){return f}));var f=u.nb(e,[],(function(l){return u.zb([u.Ab(512,u.j,u.Y,[[8,[i.a,m]],[3,u.j],u.v]),u.Ab(4608,a.k,a.j,[u.s,[2,a.r]]),u.Ab(4608,x.p,x.p,[]),u.Ab(4608,c.c,c.c,[u.x,u.g]),u.Ab(4608,c.Eb,c.Eb,[c.c,u.j,u.p]),u.Ab(4608,c.Hb,c.Hb,[c.c,u.j,u.p]),u.Ab(1073742336,a.b,a.b,[]),u.Ab(1073742336,x.o,x.o,[]),u.Ab(1073742336,x.e,x.e,[]),u.Ab(1073742336,c.Bb,c.Bb,[]),u.Ab(1073742336,r.q,r.q,[[2,r.v],[2,r.m]]),u.Ab(1073742336,v,v,[]),u.Ab(1073742336,e,e,[]),u.Ab(1024,r.k,(function(){return[[{path:"",component:p}]]}),[])])}))}}]);