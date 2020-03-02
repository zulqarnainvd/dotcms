var __extends=this&&this.__extends||function(){var e=function(r,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var n in r)if(r.hasOwnProperty(n))e[n]=r[n]};return e(r,n)};return function(r,n){e(r,n);function t(){this.constructor=r}r.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}}();var __awaiter=this&&this.__awaiter||function(e,r,n,t){function a(e){return e instanceof n?e:new n((function(r){r(e)}))}return new(n||(n=Promise))((function(n,i){function s(e){try{l(t.next(e))}catch(r){i(r)}}function o(e){try{l(t["throw"](e))}catch(r){i(r)}}function l(e){e.done?n(e.value):a(e.value).then(s,o)}l((t=t.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},t,a,i,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(r){return l([e,r])}}function l(s){if(t)throw new TypeError("Generator is already executing.");while(n)try{if(t=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;a=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){n.label=s[1];break}if(s[0]===6&&n.label<i[1]){n.label=i[1];i=s;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(s);break}if(i[2])n.ops.pop();n.trys.pop();continue}s=r.call(e,n)}catch(o){s=[6,o];a=0}finally{t=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,n=arguments.length;r<n;r++)e+=arguments[r].length;for(var t=Array(e),a=0,r=0;r<n;r++)for(var i=arguments[r],s=0,o=i.length;s<o;s++,a++)t[a]=i[s];return t};System.register([],(function(e,r){"use strict";return{execute:function(){var n=this;var t="dotcms-webcomponents";var a=0;var i=false;var s;var o;var l;var f=false;var $=false;var u=false;var c=false;var v=typeof window!=="undefined"?window:{};var d=v.CSS;var h=v.document||{head:{}};var m={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,n,t){return e.addEventListener(r,n,t)},rel:function(e,r,n,t){return e.removeEventListener(r,n,t)}};var p=function(){return(h.head.attachShadow+"").indexOf("[native")>-1}();var g=function(e){return Promise.resolve(e)};var y=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var b=new WeakMap;var w=function(e){return b.get(e)};var R=e("r",(function(e,r){return b.set(r.$lazyInstance$=e,r)}));var N=function(e){var r={$flags$:0,$hostElement$:e,$instanceValues$:new Map};{r.$onInstancePromise$=new Promise((function(e){return r.$onInstanceResolve$=e}))}{r.$onReadyPromise$=new Promise((function(e){return r.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return b.set(e,r)};var S=function(e,r){return r in e};var _=function(e){return console.error(e)};var x=new Map;var k=function(e,n,t){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var s=x.get(i);if(s){return s[a]}return r.import("./"+i+".entry.js"+"").then((function(e){{x.set(i,e)}return e[a]}),_)};var E=new Map;var L=[];var T=[];var C=[];var j=function(e,r){return function(n){e.push(n);if(!i){i=true;if(r&&m.$flags$&4){O(I)}else{m.raf(I)}}}};var P=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(n){_(n)}}e.length=0};var A=function(e,r){var n=0;var t=0;while(n<e.length&&(t=performance.now())<r){try{e[n++](t)}catch(a){_(a)}}if(n===e.length){e.length=0}else if(n!==0){e.splice(0,n)}};var I=function(){a++;P(L);var e=(m.$flags$&6)===2?performance.now()+10*Math.ceil(a*(1/22)):Infinity;A(T,e);A(C,e);if(T.length>0){C.push.apply(C,T);T.length=0}if(i=L.length+T.length+C.length>0){m.raf(I)}else{a=0}};var O=function(e){return g().then(e)};var U=j(T,true);var B={};var M=function(e){return e!=null};var z=function(e){e=typeof e;return e==="object"||e==="function"};var q=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var H=e("a",(function(){if(!(d&&d.supports&&d.supports("color","var(--c)"))){return r.import("./p-dbe40eff.system.js").then((function(){if(m.$cssShim$=v.__cssshim){return m.$cssShim$.i()}else{return 0}}))}return g()}));var V=e("p",(function(){{m.$cssShim$=v.__cssshim}var e=Array.from(h.querySelectorAll("script")).find((function(e){return new RegExp("/"+t+"(\\.esm)?\\.js($|\\?|#)").test(e.src)||e.getAttribute("data-stencil-namespace")===t}));var n={};if("onbeforeload"in e&&!history.scrollRestoration&&false){return{then:function(){}}}{n.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,v.location.href)).href;F(n.resourcesUrl,e);if(!v.customElements){return r.import("./p-7f10eb01.system.js").then((function(){return n}))}}return g(n)}));var F=function(e,r){var n=q(t);try{v[n]=new Function("w","return import(w);//"+Math.random())}catch(i){var a=new Map;v[n]=function(t){var i=new URL(t,e).href;var s=a.get(i);if(!s){var o=h.createElement("script");o.type="module";o.crossOrigin=r.crossOrigin;o.src=URL.createObjectURL(new Blob(["import * as m from '"+i+"'; window."+n+".m = m;"],{type:"application/javascript"}));s=new Promise((function(e){o.onload=function(){e(v[n].m);o.remove()}}));a.set(i,s);h.head.appendChild(o)}return s}}};var W="{visibility:hidden}.hydrated{visibility:inherit}";var D=function(e,r){if(r===void 0){r=""}{return function(){return}}};var G=function(e,r){{return function(){return}}};var Q=new WeakMap;var J=function(e,r,n){var t=E.get(e);if(y&&n){t=t||new CSSStyleSheet;t.replace(r)}else{t=r}E.set(e,t)};var K=function(e,r,n,t){var a=Y(r.$tagName$);var i=E.get(a);e=e.nodeType===11?e:h;if(i){if(typeof i==="string"){e=e.head||e;var s=Q.get(e);var o=void 0;if(!s){Q.set(e,s=new Set)}if(!s.has(a)){{if(m.$cssShim$){o=m.$cssShim$.createHostStyle(t,a,i,!!(r.$flags$&10));var l=o["s-sc"];if(l){a=l;s=null}}else{o=h.createElement("style");o.innerHTML=i}e.insertBefore(o,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var X=function(e,r,n){var t=D("attachStyles",r.$tagName$);var a=K(p&&e.shadowRoot?e.shadowRoot:e.getRootNode(),r,n,e);if(r.$flags$&10){e["s-sc"]=a;e.classList.add(a+"-h")}t()};var Y=function(e,r){return"sc-"+e};var Z=e("h",(function(e,r){var n=[];for(var t=2;t<arguments.length;t++){n[t-2]=arguments[t]}var a=null;var i=null;var s=null;var o=false;var l=false;var f=[];var $=function(r){for(var n=0;n<r.length;n++){a=r[n];if(Array.isArray(a)){$(a)}else if(a!=null&&typeof a!=="boolean"){if(o=typeof e!=="function"&&!z(a)){a=String(a)}if(o&&l){f[f.length-1].$text$+=a}else{f.push(o?ee(null,a):a)}l=o}}};$(n);if(r){if(r.key){i=r.key}if(r.name){s=r.name}{var u=r.className||r.class;if(u){r.class=typeof u!=="object"?u:Object.keys(u).filter((function(e){return u[e]})).join(" ")}}}var c=ee(e,null);c.$attrs$=r;if(f.length>0){c.$children$=f}{c.$key$=i}{c.$name$=s}return c}));var ee=function(e,r){var n={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};{n.$attrs$=null}{n.$key$=null}{n.$name$=null}return n};var re=e("H",{});var ne=function(e){return e&&e.$tag$===re};var te=function(e,r,n,t,a,i){if(n!==t){var s=S(e,r);var o=r.toLowerCase();if(r==="class"){var l=e.classList;var f=ie(n);var $=ie(t);l.remove.apply(l,f.filter((function(e){return e&&!$.includes(e)})));l.add.apply(l,$.filter((function(e){return e&&!f.includes(e)})))}else if(r==="style"){{for(var u in n){if(!t||t[u]==null){if(u.includes("-")){e.style.removeProperty(u)}else{e.style[u]=""}}}}for(var u in t){if(!n||t[u]!==n[u]){if(u.includes("-")){e.style.setProperty(u,t[u])}else{e.style[u]=t[u]}}}}else if(r==="key");else if(!s&&r[0]==="o"&&r[1]==="n"){if(r[2]==="-"){r=r.slice(3)}else if(S(v,o)){r=o.slice(2)}else{r=o[2]+r.slice(3)}if(n){m.rel(e,r,n,false)}if(t){m.ael(e,r,t,false)}}else{var c=z(t);if((s||c&&t!==null)&&!a){try{if(!e.tagName.includes("-")){var d=t==null?"":t;if(r==="list"){s=false}else if(n==null||e[r]!=d){e[r]=d}}else{e[r]=t}}catch(h){}}if(t==null||t===false){{e.removeAttribute(r)}}else if((!s||i&4||a)&&!c){t=t===true?"":t;{e.setAttribute(r,t)}}}}};var ae=/\s/;var ie=function(e){return!e?[]:e.split(ae)};var se=function(e,r,n,t){var a=r.$elm$.nodeType===11&&r.$elm$.host?r.$elm$.host:r.$elm$;var i=e&&e.$attrs$||B;var s=r.$attrs$||B;{for(t in i){if(!(t in s)){te(a,t,i[t],undefined,n,r.$flags$)}}}for(t in s){te(a,t,i[t],s[t],n,r.$flags$)}};var oe=function(e,r,n,t){var a=r.$children$[n];var i=0;var $;var v;var d;if(!f){u=true;if(a.$tag$==="slot"){if(s){t.classList.add(s+"-s")}a.$flags$|=a.$children$?2:1}}if(a.$text$!==null){$=a.$elm$=h.createTextNode(a.$text$)}else if(a.$flags$&1){$=a.$elm$=h.createTextNode("")}else{$=a.$elm$=h.createElement(a.$flags$&2?"slot-fb":a.$tag$);{se(null,a,c)}if(M(s)&&$["s-si"]!==s){$.classList.add($["s-si"]=s)}if(a.$children$){for(i=0;i<a.$children$.length;++i){v=oe(e,a,i,$);if(v){$.appendChild(v)}}}}{$["s-hn"]=l;if(a.$flags$&(2|1)){$["s-sr"]=true;$["s-cr"]=o;$["s-sn"]=a.$name$||"";d=e&&e.$children$&&e.$children$[n];if(d&&d.$tag$===a.$tag$&&e.$elm$){le(e.$elm$,false)}}}return $};var le=function(e,r){m.$flags$|=1;var n=e.childNodes;for(var t=n.length-1;t>=0;t--){var a=n[t];if(a["s-hn"]!==l&&a["s-ol"]){de(a).insertBefore(a,ve(a));a["s-ol"].remove();a["s-ol"]=undefined;u=true}if(r){le(a,r)}}m.$flags$&=~1};var fe=function(e,r,n,t,a,i){var s=e["s-cr"]&&e["s-cr"].parentNode||e;var o;if(s.shadowRoot&&s.tagName===l){s=s.shadowRoot}for(;a<=i;++a){if(t[a]){o=oe(null,n,a,e);if(o){t[a].$elm$=o;s.insertBefore(o,ve(r))}}}};var $e=function(e,r,n,t,a){for(;r<=n;++r){if(t=e[r]){a=t.$elm$;{$=true;if(a["s-ol"]){a["s-ol"].remove()}else{le(a,true)}}a.remove()}}};var ue=function(e,r,n,t){var a=0;var i=0;var s=0;var o=0;var l=r.length-1;var f=r[0];var $=r[l];var u=t.length-1;var c=t[0];var v=t[u];var d;var h;while(a<=l&&i<=u){if(f==null){f=r[++a]}else if($==null){$=r[--l]}else if(c==null){c=t[++i]}else if(v==null){v=t[--u]}else if(ce(f,c)){he(f,c);f=r[++a];c=t[++i]}else if(ce($,v)){he($,v);$=r[--l];v=t[--u]}else if(ce(f,v)){if(f.$tag$==="slot"||v.$tag$==="slot"){le(f.$elm$.parentNode,false)}he(f,v);e.insertBefore(f.$elm$,$.$elm$.nextSibling);f=r[++a];v=t[--u]}else if(ce($,c)){if(f.$tag$==="slot"||v.$tag$==="slot"){le($.$elm$.parentNode,false)}he($,c);e.insertBefore($.$elm$,f.$elm$);$=r[--l];c=t[++i]}else{s=-1;{for(o=a;o<=l;++o){if(r[o]&&r[o].$key$!==null&&r[o].$key$===c.$key$){s=o;break}}}if(s>=0){h=r[s];if(h.$tag$!==c.$tag$){d=oe(r&&r[i],n,s,e)}else{he(h,c);r[s]=undefined;d=h.$elm$}c=t[++i]}else{d=oe(r&&r[i],n,i,e);c=t[++i]}if(d){{de(f.$elm$).insertBefore(d,ve(f.$elm$))}}}}if(a>l){fe(e,t[u+1]==null?null:t[u+1].$elm$,n,t,i,u)}else if(i>u){$e(r,a,l)}};var ce=function(e,r){if(e.$tag$===r.$tag$){if(e.$tag$==="slot"){return e.$name$===r.$name$}{return e.$key$===r.$key$}}return false};var ve=function(e){return e&&e["s-ol"]||e};var de=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var he=function(e,r){var n=r.$elm$=e.$elm$;var t=e.$children$;var a=r.$children$;var i=r.$tag$;var s=r.$text$;var o;if(s===null){{if(i==="slot");else{se(e,r,c)}}if(t!==null&&a!==null){ue(n,t,r,a)}else if(a!==null){if(e.$text$!==null){n.textContent=""}fe(n,null,r,a,0,a.length-1)}else if(t!==null){$e(t,0,t.length-1)}}else if(o=n["s-cr"]){o.parentNode.textContent=s}else if(e.$text$!==s){n.data=s}};var me=function(e){var r=e.childNodes;var n;var t;var a;var i;var s;var o;for(t=0,a=r.length;t<a;t++){n=r[t];if(n.nodeType===1){if(n["s-sr"]){s=n["s-sn"];n.hidden=false;for(i=0;i<a;i++){if(r[i]["s-hn"]!==n["s-hn"]){o=r[i].nodeType;if(s!==""){if(o===1&&s===r[i].getAttribute("slot")){n.hidden=true;break}}else{if(o===1||o===3&&r[i].textContent.trim()!==""){n.hidden=true;break}}}}}me(n)}}};var pe=[];var ge=function(e){var r;var n;var t;var a;var i;var s;var o=0;var l=e.childNodes;var f=l.length;for(;o<f;o++){r=l[o];if(r["s-sr"]&&(n=r["s-cr"])){t=n.parentNode.childNodes;a=r["s-sn"];for(s=t.length-1;s>=0;s--){n=t[s];if(!n["s-cn"]&&!n["s-nr"]&&n["s-hn"]!==r["s-hn"]){if(ye(n,a)){i=pe.find((function(e){return e.$nodeToRelocate$===n}));$=true;n["s-sn"]=n["s-sn"]||a;if(i){i.$slotRefNode$=r}else{pe.push({$slotRefNode$:r,$nodeToRelocate$:n})}if(n["s-sr"]){pe.forEach((function(e){if(ye(e.$nodeToRelocate$,n["s-sn"])){i=pe.find((function(e){return e.$nodeToRelocate$===n}));if(i){e.$slotRefNode$=i.$slotRefNode$}}}))}}else if(!pe.some((function(e){return e.$nodeToRelocate$===n}))){pe.push({$nodeToRelocate$:n})}}}}if(r.nodeType===1){ge(r)}}};var ye=function(e,r){if(e.nodeType===1){if(e.getAttribute("slot")===null&&r===""){return true}if(e.getAttribute("slot")===r){return true}return false}if(e["s-sn"]===r){return true}return r===""};var be=function(e,r,n,t){l=e.tagName;var a=r.$vnode$||ee(null,null);var i=ne(t)?t:Z(null,null,t);if(n.$attrsToReflect$){i.$attrs$=i.$attrs$||{};n.$attrsToReflect$.forEach((function(r){var n=r[0],t=r[1];return i.$attrs$[t]=e[n]}))}i.$tag$=null;i.$flags$|=4;r.$vnode$=i;i.$elm$=a.$elm$=e.shadowRoot||e;{s=e["s-sc"]}{o=e["s-cr"];f=p&&(n.$flags$&1)!==0;$=false}he(a,i);{if(u){ge(i.$elm$);var c=void 0;var v=void 0;var d=void 0;var g=void 0;var y=void 0;var b=void 0;var w=0;for(;w<pe.length;w++){c=pe[w];v=c.$nodeToRelocate$;if(!v["s-ol"]){d=h.createTextNode("");d["s-nr"]=v;v.parentNode.insertBefore(v["s-ol"]=d,v)}}m.$flags$|=1;for(w=0;w<pe.length;w++){c=pe[w];v=c.$nodeToRelocate$;if(c.$slotRefNode$){g=c.$slotRefNode$.parentNode;y=c.$slotRefNode$.nextSibling;d=v["s-ol"];while(d=d.previousSibling){b=d["s-nr"];if(b&&b["s-sn"]===v["s-sn"]&&g===b.parentNode){b=b.nextSibling;if(!b||!b["s-nr"]){y=b;break}}}if(!y&&g!==v.parentNode||v.nextSibling!==y){if(v!==y){if(!v["s-hn"]&&v["s-ol"]){v["s-hn"]=v["s-ol"].parentNode.nodeName}g.insertBefore(v,y)}}}else{if(v.nodeType===1){v.hidden=true}}}m.$flags$&=~1}if($){me(i.$elm$)}pe.length=0}};var we=function(e,r){if(r&&!e.$onRenderResolve$){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var Re=function(e,r,n,t){{r.$flags$|=16}if(r.$flags$&4){r.$flags$|=512;return}var a=D("scheduleUpdate",n.$tagName$);var i=r.$ancestorComponent$;var s=r.$lazyInstance$;var o=function(){return Ne(e,r,n,s,t)};we(r,i);var l;if(t){{r.$flags$|=256;if(r.$queuedListeners$){r.$queuedListeners$.forEach((function(e){var r=e[0],n=e[1];return Ee(s,r,n)}));r.$queuedListeners$=null}}{l=Ee(s,"componentWillLoad")}}a();return Le(l,(function(){return U(o)}))};var Ne=function(e,r,n,t,a){var i=D("update",n.$tagName$);var s=e["s-rc"];if(a){X(e,n,r.$modeName$)}var o=D("render",n.$tagName$);{{be(e,r,n,Se(t))}}if(m.$cssShim$){m.$cssShim$.updateHost(e)}{r.$flags$&=~16}{r.$flags$|=2}if(s){s.forEach((function(e){return e()}));e["s-rc"]=undefined}o();i();{var l=e["s-p"];var f=function(){return _e(e,r,n)};if(l.length===0){f()}else{Promise.all(l).then(f);r.$flags$|=4;l.length=0}}};var Se=function(e,r){try{e=e.render()}catch(n){_(n)}return e};var _e=function(e,r,n){var t=D("postUpdate",n.$tagName$);var a=r.$lazyInstance$;var i=r.$ancestorComponent$;if(!(r.$flags$&64)){r.$flags$|=64;{Te(e)}{Ee(a,"componentDidLoad")}t();{r.$onReadyResolve$(e);if(!i){ke()}}}else{t()}{r.$onInstanceResolve$(e)}{if(r.$onRenderResolve$){r.$onRenderResolve$();r.$onRenderResolve$=undefined}if(r.$flags$&512){O((function(){return Re(e,r,n,false)}))}r.$flags$&=~(4|512)}};var xe=function(e,r){{var n=w(e);var t=n.$hostElement$.isConnected;if(t&&(n.$flags$&(2|16))===2){Re(e,n,r,false)}return t}};var ke=function(e){{Te(h.documentElement)}{m.$flags$|=2}};var Ee=function(e,r,n){if(e&&e[r]){try{return e[r](n)}catch(t){_(t)}}return undefined};var Le=function(e,r){return e&&e.then?e.then(r):r()};var Te=function(e){return e.classList.add("hydrated")};var Ce=function(e,r,n){r.$queuedListeners$=r.$queuedListeners$||[];var t=n.map((function(n){var t=n[0],a=n[1],i=n[2];var s=e;var o=je(r,i);var l=Pe(t);m.ael(s,a,o,l);return function(){return m.rel(s,a,o,l)}}));return function(){return t.forEach((function(e){return e()}))}};var je=function(e,r){return function(n){{if(e.$flags$&256){e.$lazyInstance$[r](n)}else{e.$queuedListeners$.push([r,n])}}}};var Pe=function(e){return(e&2)!==0};var Ae=function(e,r){if(e!=null&&!z(e)){if(r&4){return e==="false"?false:e===""||!!e}if(r&2){return parseFloat(e)}if(r&1){return String(e)}return e}return e};var Ie=function(e,r){return w(e).$instanceValues$.get(r)};var Oe=function(e,r,n,t){var a=w(e);var i=a.$hostElement$;var s=a.$instanceValues$.get(r);var o=a.$flags$;var l=a.$lazyInstance$;n=Ae(n,t.$members$[r][0]);if(n!==s&&(!(o&8)||s===undefined)){a.$instanceValues$.set(r,n);if(l){if(t.$watchers$&&o&128){var f=t.$watchers$[r];if(f){f.forEach((function(e){try{l[e](n,s,r)}catch(t){_(t)}}))}}if((o&(2|16))===2){Re(i,a,t,false)}}}};var Ue=function(e,r,n){if(r.$members$){if(e.watchers){r.$watchers$=e.watchers}var t=Object.entries(r.$members$);var a=e.prototype;t.forEach((function(e){var t=e[0],i=e[1][0];if(i&31||n&2&&i&32){Object.defineProperty(a,t,{get:function(){return Ie(this,t)},set:function(e){Oe(this,t,e,r)},configurable:true,enumerable:true})}else if(n&1&&i&64){Object.defineProperty(a,t,{value:function(){var e=[];for(var r=0;r<arguments.length;r++){e[r]=arguments[r]}var n=w(this);return n.$onInstancePromise$.then((function(){var r;return(r=n.$lazyInstance$)[t].apply(r,e)}))}})}}));if(n&1){var i=new Map;a.attributeChangedCallback=function(e,r,n){var t=this;m.jmp((function(){var r=i.get(e);t[r]=n===null&&typeof t[r]==="boolean"?false:n}))};e.observedAttributes=t.filter((function(e){var r=e[0],n=e[1];return n[0]&15})).map((function(e){var n=e[0],t=e[1];var a=t[1]||n;i.set(a,n);if(t[0]&512){r.$attrsToReflect$.push([n,a])}return a}))}}return e};var Be=function(e,t,a,i,s){return __awaiter(n,void 0,void 0,(function(){var n,i,o,l,f,$,u;return __generator(this,(function(c){switch(c.label){case 0:if(!((t.$flags$&32)===0))return[3,5];t.$flags$|=32;s=k(a);if(!s.then)return[3,2];n=G();return[4,s];case 1:s=c.sent();n();c.label=2;case 2:if(!s.isProxied){{a.$watchers$=s.watchers}Ue(s,a,2);s.isProxied=true}i=D("createInstance",a.$tagName$);{t.$flags$|=8}try{new s(t)}catch(v){_(v)}{t.$flags$&=~8}{t.$flags$|=128}i();Me(t.$lazyInstance$);o=Y(a.$tagName$);if(!(!E.has(o)&&s.style))return[3,5];l=D("registerStyles",a.$tagName$);f=s.style;if(!(a.$flags$&8))return[3,4];return[4,r.import("./p-6cef36c5.system.js").then((function(e){return e.scopeCss(f,o,false)}))];case 3:f=c.sent();c.label=4;case 4:J(o,f,!!(a.$flags$&1));l();c.label=5;case 5:$=t.$ancestorComponent$;u=function(){return Re(e,t,a,true)};if($&&$["s-rc"]){$["s-rc"].push(u)}else{u()}return[2]}}))}))};var Me=function(e){{Ee(e,"connectedCallback")}};var ze=function(e,r){if((m.$flags$&1)===0){var n=D("connectedCallback",r.$tagName$);var t=w(e);if(r.$listeners$){t.$rmListeners$=Ce(e,t,r.$listeners$)}if(!(t.$flags$&1)){t.$flags$|=1;{if(r.$flags$&4||r.$flags$&8){qe(e)}}{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){we(t,t.$ancestorComponent$=a);break}}}if(r.$members$){Object.entries(r.$members$).forEach((function(r){var n=r[0],t=r[1][0];if(t&31&&e.hasOwnProperty(n)){var a=e[n];delete e[n];e[n]=a}}))}{O((function(){return Be(e,t,r)}))}}Me(t.$lazyInstance$);n()}};var qe=function(e){var r=e["s-cr"]=h.createComment("");r["s-cn"]=true;e.insertBefore(r,e.firstChild)};var He=function(e){if((m.$flags$&1)===0){var r=w(e);var n=r.$lazyInstance$;{if(r.$rmListeners$){r.$rmListeners$();r.$rmListeners$=undefined}}if(m.$cssShim$){m.$cssShim$.removeHost(e)}{Ee(n,"disconnectedCallback")}}};var Ve=e("b",(function(e,r){if(r===void 0){r={}}var n=D();var t=[];var a=r.exclude||[];var i=v.customElements;var s=h.head;var o=s.querySelector("meta[charset]");var l=h.createElement("style");var f=[];var $;var u=true;Object.assign(m,r);m.$resourcesUrl$=new URL(r.resourcesUrl||"./",h.baseURI).href;if(r.syncQueue){m.$flags$|=4}e.forEach((function(e){return e[1].forEach((function(r){var n={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};{n.$members$=r[2]}{n.$listeners$=r[3]}{n.$attrsToReflect$=[]}{n.$watchers$={}}if(!p&&n.$flags$&1){n.$flags$|=8}var s=n.$tagName$;var o=function(e){__extends(r,e);function r(r){var t=e.call(this,r)||this;r=t;N(r);if(n.$flags$&1){if(p){{r.attachShadow({mode:"open"})}}else if(!("shadowRoot"in r)){r.shadowRoot=r}}return t}r.prototype.connectedCallback=function(){var e=this;if($){clearTimeout($);$=null}if(u){f.push(this)}else{m.jmp((function(){return ze(e,n)}))}};r.prototype.disconnectedCallback=function(){var e=this;m.jmp((function(){return He(e)}))};r.prototype.forceUpdate=function(){xe(this,n)};r.prototype.componentOnReady=function(){return w(this).$onReadyPromise$};return r}(HTMLElement);n.$lazyBundleIds$=e[0];if(!a.includes(s)&&!i.get(s)){t.push(s);i.define(s,Ue(o,n,1))}}))}));{l.innerHTML=t+W;l.setAttribute("data-styles","");s.insertBefore(l,o?o.nextSibling:s.firstChild)}u=false;if(f.length>0){f.forEach((function(e){return e.connectedCallback()}))}else{{m.jmp((function(){return $=setTimeout(ke,30)}))}}n()}));var Fe=e("c",(function(e,r,n){var t=We(e);return{emit:function(e){var a=new CustomEvent(r,{bubbles:!!(n&4),composed:!!(n&2),cancelable:!!(n&1),detail:e});t.dispatchEvent(a);return a}}}));var We=e("g",(function(e){return w(e).$hostElement$}))}}}));