(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{xT7c:function(l,n,t){"use strict";t.r(n);var e=t("8Y7J");class o{}var u=t("pMnS"),a=t("MKJQ"),r=t("sZkV"),c=t("XH10");class i{constructor(l){this.navCtrl=l}ngOnInit(){}ngAfterViewInit(){var l=document.getElementById("video");navigator.mediaDevices.getUserMedia&&navigator.mediaDevices.getUserMedia({video:{aspectRatio:1}}).then((function(n){l.srcObject=n})).catch((function(l){console.log("N\xe3o rolou carregar o v\xeddeo")}))}takePicture(){var l=document.getElementById("video"),n=document.getElementById("canvas");n.getContext("2d").drawImage(l,0,0,1e3,1e3),localStorage.setItem("baltagram.post",JSON.stringify(new c.a(n.toDataURL()))),l.classList.add("animated"),l.classList.add("flash"),setTimeout(()=>{this.navCtrl.navigateForward("/post-photo")},1e3)}}var s=e.ob({encapsulation:0,styles:[[".transparent[_ngcontent-%COMP%]{background-color:transparent}video[_ngcontent-%COMP%]{width:300px;height:300px;margin:auto;border-radius:50%;border:3px solid #fff}"]],data:{}});function b(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,13,"ion-content",[["color","primary"]],null,null,null,a.F,a.g)),e.pb(1,49152,null,0,r.t,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.qb(2,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.qb(3,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.qb(4,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),e.qb(5,0,null,0,2,"p",[["class","ion-text-center"]],null,null,null,null,null)),(l()(),e.qb(6,0,null,null,0,"video",[["autoplay",""],["class","profile-picture camera-photo"],["height","1000"],["id","video"],["width","1000"]],null,null,null,null,null)),(l()(),e.qb(7,0,null,null,0,"canvas",[["class","profile-picture"],["height","1000"],["id","canvas"],["style","display:none;"],["width","1000"]],null,null,null,null,null)),(l()(),e.qb(8,0,null,0,5,"ion-fab",[["horizontal","center"],["slot","fixed"],["vertical","bottom"]],null,null,null,a.H,a.h)),e.pb(9,49152,null,0,r.v,[e.h,e.k,e.x],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),e.qb(10,0,null,0,3,"ion-fab-button",[["color","success"]],null,[[null,"click"]],(function(l,n,t){var e=!0;return"click"===n&&(e=!1!==l.component.takePicture()&&e),e}),a.G,a.i)),e.pb(11,49152,null,0,r.w,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.qb(12,0,null,0,1,"ion-icon",[["name","camera"]],null,null,null,a.K,a.l)),e.pb(13,49152,null,0,r.B,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(l,n){l(n,1,0,"primary"),l(n,9,0,"center","bottom"),l(n,11,0,"success"),l(n,13,0,"camera")}),null)}var d=e.mb("app-take-photo",i,(function(l){return e.Kb(0,[(l()(),e.qb(0,0,null,null,1,"app-take-photo",[],null,null,null,b,s)),e.pb(1,4308992,null,0,i,[r.Eb],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),p=t("SVse"),v=t("s7LF"),h=t("iInd");class g{}t.d(n,"TakePhotoPageModuleNgFactory",(function(){return m}));var m=e.nb(o,[],(function(l){return e.zb([e.Ab(512,e.j,e.Y,[[8,[u.a,d]],[3,e.j],e.v]),e.Ab(4608,p.l,p.k,[e.s,[2,p.s]]),e.Ab(4608,v.o,v.o,[]),e.Ab(4608,r.c,r.c,[e.x,e.g]),e.Ab(4608,r.Db,r.Db,[r.c,e.j,e.p]),e.Ab(4608,r.Gb,r.Gb,[r.c,e.j,e.p]),e.Ab(1073742336,p.c,p.c,[]),e.Ab(1073742336,v.n,v.n,[]),e.Ab(1073742336,v.e,v.e,[]),e.Ab(1073742336,r.Ab,r.Ab,[]),e.Ab(1073742336,h.o,h.o,[[2,h.t],[2,h.m]]),e.Ab(1073742336,g,g,[]),e.Ab(1073742336,o,o,[]),e.Ab(1024,h.k,(function(){return[[{path:"",component:i}]]}),[])])}))}}]);