(function(e){function t(t){for(var r,o,i=t[0],s=t[1],u=t[2],l=0,d=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-1ed036c3":"88ddf3af","chunk-3f07beca":"0dd1d801","chunk-6aa6db68":"2a15a93f"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-1ed036c3":1,"chunk-3f07beca":1,"chunk-6aa6db68":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-1ed036c3":"12705983","chunk-3f07beca":"d6c06c7b","chunk-6aa6db68":"ba16ecc8"}[e]+".css",a=s.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],f.parentNode.removeChild(f),n(c)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"0ab0":function(e,t,n){"use strict";var r=n("c432"),o=n.n(r);o.a},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},"5ced":function(e,t,n){},"7cd6":function(e,t,n){e.exports=n.p+"img/k1.5130db54.png"},"9c0c":function(e,t,n){},c432:function(e,t,n){},c6eb:function(e,t,n){e.exports=n.p+"img/vue.f130a0b7.png"},cccb:function(e,t,n){"use strict";var r=n("5ced"),o=n.n(r);o.a},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"nav",attrs:{id:"nav"}},[n("router-link",{staticClass:"card a",attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{staticClass:"card a",attrs:{to:"/about"}},[e._v("About")]),e._v(" | "),n("router-link",{staticClass:"card a",attrs:{to:"/project"}},[e._v("projects")]),e._v(" | "),n("router-link",{staticClass:"card a",attrs:{to:"/contact"}},[e._v("contact")])],1),n("router-view")],1)},a=[],c=(n("5c0b"),n("2877")),i={},s=Object(c["a"])(i,o,a,!1,null,null,null),u=s.exports,l=n("9483");Object(l["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var d=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[e._m(0),n("card",{staticClass:"cards",attrs:{context:"Welcome to my Vue.Js Portfolio, this portfolio was created in a day together with the react version and it's just a proof of concept that i can write both Vue and vue."}}),n("card",{staticClass:"cards",attrs:{context:"Concerning Vue, i have solid knowledge on vuex, Vue-router, and most popular Vue-css frameworks (for quick design prototyping). Check my Github for more details."}})],1)},p=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"image"},[r("img",{attrs:{alt:"Vue logo",src:n("7cd6")}}),r("img",{attrs:{alt:"Vue logo",src:n("c6eb")}})])}],h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card"},[e._v(" "+e._s(e.context)+" ")])},v=[],m={name:"card",props:["context"]},b=m,g=(n("0ab0"),Object(c["a"])(b,h,v,!1,null,null,null)),y=g.exports,k={name:"Home",components:{Card:y}},w=k,_=(n("cccb"),Object(c["a"])(w,f,p,!1,null,null,null)),C=_.exports;r["a"].use(d["a"]);var j=[{path:"/",name:"Home",component:C},{path:"/about",name:"About",component:function(){return n.e("chunk-3f07beca").then(n.bind(null,"f820"))}},{path:"/project",name:"Project",component:function(){return n.e("chunk-1ed036c3").then(n.bind(null,"07bd"))}},{path:"/contact",name:"Contact",component:function(){return n.e("chunk-6aa6db68").then(n.bind(null,"b8fa"))}}],x=new d["a"]({mode:"history",base:"/",routes:j}),O=x,E=n("2f62");r["a"].use(E["a"]);var P=new E["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:O,store:P,render:function(e){return e(u)}}).$mount("#app")}});
//# sourceMappingURL=app.fe87df9b.js.map