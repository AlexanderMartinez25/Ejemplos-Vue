(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["fotos"],{"3a1b":function(t,o,s){"use strict";s.r(o);var a=function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",[s("h1",[t._v("Galeria de Fotos")]),t._l(t.fotosAreglos,(function(o,a){return s("router-link",{key:a,attrs:{to:{name:"fotos",params:{id:a}}}},[s("button",{staticClass:"btn btn-secondary"},[t._v("Foto "+t._s(a+1))])])})),s("Foto",{attrs:{fotos:t.fotosAreglos}}),s("button",{staticClass:"btn btn-primary",on:{click:t.frutas}},[t._v("Frutas")]),s("button",{staticClass:"btn btn-danger",on:{click:t.anterior}},[t._v("Anterior")]),s("button",{staticClass:"btn btn-success",on:{click:t.siguiente}},[t._v("Siguiente")])],2)},i=[],r=function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",[s("h3",[t._v("Foto desde componente: "+t._s(t.$route.params.id))]),s("div",{staticClass:"row row-cols-1 row-cols-md-2 justify-content-center"},[s("div",{staticClass:"col mb-4"},[s("div",{staticClass:"card"},[s("img",{staticClass:"card-img-top",attrs:{src:t.fotos[t.$route.params.id],alt:"foto"}}),t._m(0)])])])])},e=[function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v("Card title")]),s("p",{staticClass:"card-text"},[t._v(" This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. ")])])}],n={name:"Foto",props:["fotos"]},c=n,l=s("2877"),u=Object(l["a"])(c,r,e,!1,null,null,null),f=u.exports,d={components:{Foto:f},data:function(){return{fotosAreglos:["https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80","https://images.unsplash.com/photo-1505826759037-406b40feb4cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80","https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"]}},methods:{frutas:function(){return this.$router.push("/frutas")},anterior:function(){return this.$router.go(-1)},siguiente:function(){return this.$router.go(1)}}},p=d,b=Object(l["a"])(p,a,i,!1,null,null,null);o["default"]=b.exports}}]);
//# sourceMappingURL=fotos.d5350e22.js.map