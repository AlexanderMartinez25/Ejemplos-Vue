(function(e){function t(t){for(var r,i,c=t[0],s=t[1],u=t[2],l=0,d=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function i(e){return c.p+"js/"+({fotos:"fotos",servicios:"servicios"}[e]||e)+"."+{fotos:"ed53c6bc",servicios:"36463cfd"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(e);var u=new Error;o=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",u.name="ChunkLoadError",u.type=r,u.request=o,n[1](u)}a[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="<AlexanderMartinez25.github.io>/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var f=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"danger"}},[n("b-container",[n("b-navbar-brand",{attrs:{to:{name:"frutas"}}},[e._v("NavBar")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{to:{name:"frutas"}}},[e._v("Frutas")]),n("b-nav-item",{attrs:{to:{name:"fotos"}}},[e._v("Fotos")])],1)],1)],1)],1),n("b-container",[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view")],1)],1)],1)},o=[],i=(n("034f"),n("2877")),c={},s=Object(i["a"])(c,a,o,!1,null,null,null),u=s.exports,l=(n("d3b7"),n("8c4f")),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("Cabecera"),n("Lista")],1)},d=[],p=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},b=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"text-cen"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("h1",[e._v("Frutas")])])}],v={name:"Cabecera"},m=v,g=Object(i["a"])(m,p,b,!1,null,null,null),h=g.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mb-5"},[n("ul",{staticClass:"list-group"},e._l(e.frutas,(function(t,r){return n("li",{key:t.id,staticClass:"list-group-item d-flex justify-content-between align-items-center",on:{click:function(t){return e.aumentar(r)}}},[e._v(" "+e._s(r)+" - "+e._s(t.nombre)+" "),n("span",{staticClass:"badge badge-primary badge-pill"},[e._v(e._s(t.cantidad))])])})),0),n("button",{staticClass:"btn btn-danger mt-3",on:{click:e.reiniciar}},[e._v("Reiniciar")])])},O=[],j=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),_=n("2f62");function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){Object(j["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x={name:"Lista",computed:P({},Object(_["c"])(["frutas"])),methods:P({},Object(_["b"])(["aumentar","reiniciar"]))},C=x,E=Object(i["a"])(C,y,O,!1,null,null,null),k=E.exports,S={name:"frutas",components:{Cabecera:h,Lista:k}},M=S,$=Object(i["a"])(M,f,d,!1,null,null,null),L=$.exports;r["default"].use(l["a"]);var T=[{path:"/frutas",name:"frutas",component:L},{path:"/servicios",name:"servicios",component:function(){return n.e("servicios").then(n.bind(null,"0f4c"))}},{path:"/fotos/:id?",name:"fotos",component:function(){return n.e("fotos").then(n.bind(null,"3a1b"))}}],D=new l["a"]({mode:"history",base:"<AlexanderMartinez25.github.io>/",routes:T}),z=D;r["default"].use(_["a"]);var A=new _["a"].Store({state:{frutas:[{nombre:"Manzana",cantidad:0},{nombre:"Pera",cantidad:0},{nombre:"Naranja",cantidad:0}]},mutations:{aumentar:function(e,t){e.frutas[t].cantidad++},reiniciar:function(e){e.frutas.forEach((function(e){e.cantidad=0}))}},actions:{},modules:{}}),F=n("5f5b"),J=n("b1e0");n("f9e3"),n("2dd8");r["default"].use(F["a"]),r["default"].use(J["a"]),r["default"].config.productionTip=!1,new r["default"]({router:z,store:A,render:function(e){return e(u)}}).$mount("#app")},"85ec":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.550c0e78.js.map