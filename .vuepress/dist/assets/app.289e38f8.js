var _i=Object.defineProperty,vi=Object.defineProperties;var ki=Object.getOwnPropertyDescriptors;var Mr=Object.getOwnPropertySymbols;var xi=Object.prototype.hasOwnProperty,mi=Object.prototype.propertyIsEnumerable;var $r=(t,e,o)=>e in t?_i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,Tt=(t,e)=>{for(var o in e||(e={}))xi.call(e,o)&&$r(t,o,e[o]);if(Mr)for(var o of Mr(e))mi.call(e,o)&&$r(t,o,e[o]);return t},An=(t,e)=>vi(t,ki(e));const _o={},fi="modulepreload",yr={},Mi="/",j=function(e,o){return!o||o.length===0?e():Promise.all(o.map(i=>{if(i=`${Mi}${i}`,i in yr)return;yr[i]=!0;const c=i.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${h}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":fi,c||(d.as="script",d.crossOrigin=""),d.href=i,document.head.appendChild(d),c)return new Promise((p,u)=>{d.addEventListener("load",p),d.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())},$i={"v-8daa1a0e":()=>j(()=>import("./index.html.9c1cd369.js"),[]).then(({data:t})=>t),"v-6bb1ef33":()=>j(()=>import("./guide.html.2d53fda6.js"),[]).then(({data:t})=>t),"v-6d7f747f":()=>j(()=>import("./github.html.ba2dc6ff.js"),[]).then(({data:t})=>t),"v-68c2b3ff":()=>j(()=>import("./jdk.html.2f845a3e.js"),[]).then(({data:t})=>t),"v-d6a742d2":()=>j(()=>import("./nodejs.html.ce8077cc.js"),[]).then(({data:t})=>t),"v-5e8d5b5a":()=>j(()=>import("./index.html.c2463011.js"),[]).then(({data:t})=>t),"v-35214767":()=>j(()=>import("./android-studio.html.ed504d90.js"),[]).then(({data:t})=>t),"v-4e26139e":()=>j(()=>import("./final-shell.html.e98f78f8.js"),[]).then(({data:t})=>t),"v-ff4e889c":()=>j(()=>import("./git-tortoise-git.html.9f2fcf6c.js"),[]).then(({data:t})=>t),"v-35284912":()=>j(()=>import("./hbuilderx.html.ad5c5605.js"),[]).then(({data:t})=>t),"v-2399ab96":()=>j(()=>import("./mysql.html.e512c9fb.js"),[]).then(({data:t})=>t),"v-6e9c09a7":()=>j(()=>import("./navicat.html.1d4c75b4.js"),[]).then(({data:t})=>t),"v-1abb939c":()=>j(()=>import("./nvm-windows.html.009a0437.js"),[]).then(({data:t})=>t),"v-2924399d":()=>j(()=>import("./postman.html.9586c6b2.js"),[]).then(({data:t})=>t),"v-189ad218":()=>j(()=>import("./tortoise-svn.html.7a87b0b4.js"),[]).then(({data:t})=>t),"v-0c27101e":()=>j(()=>import("./vscode.html.b4b0bba4.js"),[]).then(({data:t})=>t),"v-c2ec2e46":()=>j(()=>import("./wx-ide.html.587025d8.js"),[]).then(({data:t})=>t),"v-9387505a":()=>j(()=>import("./css-sass-less.html.512cee95.js"),[]).then(({data:t})=>t),"v-5aa3780f":()=>j(()=>import("./git.html.497dae42.js"),[]).then(({data:t})=>t),"v-715f8278":()=>j(()=>import("./javascript.html.b4242e5f.js"),[]).then(({data:t})=>t),"v-1a7947b4":()=>j(()=>import("./nodejs.html.b0221aba.js"),[]).then(({data:t})=>t),"v-87653efc":()=>j(()=>import("./react.html.7774c729.js"),[]).then(({data:t})=>t),"v-033c8aa8":()=>j(()=>import("./typescript.html.d00659e7.js"),[]).then(({data:t})=>t),"v-e259c100":()=>j(()=>import("./uniapp.html.e136f74f.js"),[]).then(({data:t})=>t),"v-5bf1a24a":()=>j(()=>import("./vue.html.59f08105.js"),[]).then(({data:t})=>t),"v-4b4887bc":()=>j(()=>import("./\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F.html.f106a664.js"),[]).then(({data:t})=>t),"v-acdd9360":()=>j(()=>import("./api.html.abaae53d.js"),[]).then(({data:t})=>t),"v-5cd03a29":()=>j(()=>import("./home.html.bf6f701d.js"),[]).then(({data:t})=>t),"v-456cc6d6":()=>j(()=>import("./plugin.html.67f200d1.js"),[]).then(({data:t})=>t),"v-65959fc1":()=>j(()=>import("./theme.html.187f0909.js"),[]).then(({data:t})=>t),"v-32598bfc":()=>j(()=>import("./121501.html.3174006c.js"),[]).then(({data:t})=>t),"v-2eb9b31a":()=>j(()=>import("./092101.html.8d65f8e2.js"),[]).then(({data:t})=>t),"v-19e56119":()=>j(()=>import("./121501.html.fc15a724.js"),[]).then(({data:t})=>t),"v-16458837":()=>j(()=>import("./092101.html.f46868ee.js"),[]).then(({data:t})=>t),"v-3706649a":()=>j(()=>import("./404.html.0f07aaf0.js"),[]).then(({data:t})=>t),"v-16736bd8":()=>j(()=>import("./index.html.9bb638a2.js"),[]).then(({data:t})=>t),"v-290a88b4":()=>j(()=>import("./index.html.6950e81c.js"),[]).then(({data:t})=>t),"v-290afd13":()=>j(()=>import("./index.html.4d1e8c7b.js"),[]).then(({data:t})=>t),"v-b5b53d90":()=>j(()=>import("./index.html.020a9d0a.js"),[]).then(({data:t})=>t),"v-b5b6264e":()=>j(()=>import("./index.html.37187996.js"),[]).then(({data:t})=>t),"v-b5b36c14":()=>j(()=>import("./index.html.7787c96c.js"),[]).then(({data:t})=>t),"v-b5b454d2":()=>j(()=>import("./index.html.5e5c3f48.js"),[]).then(({data:t})=>t),"v-01560935":()=>j(()=>import("./index.html.0e4d7af9.js"),[]).then(({data:t})=>t),"v-03d52fd3":()=>j(()=>import("./index.html.d1b38fd7.js"),[]).then(({data:t})=>t),"v-03d52ff2":()=>j(()=>import("./index.html.daf03015.js"),[]).then(({data:t})=>t),"v-03d53011":()=>j(()=>import("./index.html.72eee446.js"),[]).then(({data:t})=>t)};function Xo(t,e){const o=Object.create(null),i=t.split(",");for(let c=0;c<i.length;c++)o[i[c]]=!0;return e?c=>!!o[c.toLowerCase()]:c=>!!o[c]}const yi="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ci=Xo(yi);function As(t){return!!t||t===""}function Re(t){if(X(t)){const e={};for(let o=0;o<t.length;o++){const i=t[o],c=ut(i)?ji(i):Re(i);if(c)for(const h in c)e[h]=c[h]}return e}else{if(ut(t))return t;if(Ct(t))return t}}const bi=/;(?![^(]*\))/g,Bi=/:(.+)/;function ji(t){const e={};return t.split(bi).forEach(o=>{if(o){const i=o.split(Bi);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Qe(t){let e="";if(ut(t))e=t;else if(X(t))for(let o=0;o<t.length;o++){const i=Qe(t[o]);i&&(e+=i+" ")}else if(Ct(t))for(const o in t)t[o]&&(e+=o+" ");return e.trim()}const Ps=t=>ut(t)?t:t==null?"":X(t)||Ct(t)&&(t.toString===Rs||!tt(t.toString))?JSON.stringify(t,Ss,2):String(t),Ss=(t,e)=>e&&e.__v_isRef?Ss(t,e.value):Ue(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((o,[i,c])=>(o[`${i} =>`]=c,o),{})}:Ds(e)?{[`Set(${e.size})`]:[...e.values()]}:Ct(e)&&!X(e)&&!Hs(e)?String(e):e,xt={},Ne=[],te=()=>{},Li=()=>!1,Ai=/^on[^a-z]/,bn=t=>Ai.test(t),Zo=t=>t.startsWith("onUpdate:"),At=Object.assign,Qo=(t,e)=>{const o=t.indexOf(e);o>-1&&t.splice(o,1)},Pi=Object.prototype.hasOwnProperty,lt=(t,e)=>Pi.call(t,e),X=Array.isArray,Ue=t=>Yn(t)==="[object Map]",Ds=t=>Yn(t)==="[object Set]",tt=t=>typeof t=="function",ut=t=>typeof t=="string",Yo=t=>typeof t=="symbol",Ct=t=>t!==null&&typeof t=="object",Vs=t=>Ct(t)&&tt(t.then)&&tt(t.catch),Rs=Object.prototype.toString,Yn=t=>Rs.call(t),Si=t=>Yn(t).slice(8,-1),Hs=t=>Yn(t)==="[object Object]",Jo=t=>ut(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,pn=Xo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Jn=t=>{const e=Object.create(null);return o=>e[o]||(e[o]=t(o))},Di=/-(\w)/g,ne=Jn(t=>t.replace(Di,(e,o)=>o?o.toUpperCase():"")),Vi=/\B([A-Z])/g,Ye=Jn(t=>t.replace(Vi,"-$1").toLowerCase()),to=Jn(t=>t.charAt(0).toUpperCase()+t.slice(1)),ko=Jn(t=>t?`on${to(t)}`:""),xn=(t,e)=>!Object.is(t,e),En=(t,e)=>{for(let o=0;o<t.length;o++)t[o](e)},In=(t,e,o)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:o})},zn=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Cr;const Ri=()=>Cr||(Cr=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Yt;class Hi{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Yt&&(this.parent=Yt,this.index=(Yt.scopes||(Yt.scopes=[])).push(this)-1)}run(e){if(this.active){const o=Yt;try{return Yt=this,e()}finally{Yt=o}}}on(){Yt=this}off(){Yt=this.parent}stop(e){if(this.active){let o,i;for(o=0,i=this.effects.length;o<i;o++)this.effects[o].stop();for(o=0,i=this.cleanups.length;o<i;o++)this.cleanups[o]();if(this.scopes)for(o=0,i=this.scopes.length;o<i;o++)this.scopes[o].stop(!0);if(this.parent&&!e){const c=this.parent.scopes.pop();c&&c!==this&&(this.parent.scopes[this.index]=c,c.index=this.index)}this.active=!1}}}function Ti(t,e=Yt){e&&e.active&&e.effects.push(t)}const tr=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Ts=t=>(t.w&Me)>0,Fs=t=>(t.n&Me)>0,Fi=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Me},Ei=t=>{const{deps:e}=t;if(e.length){let o=0;for(let i=0;i<e.length;i++){const c=e[i];Ts(c)&&!Fs(c)?c.delete(t):e[o++]=c,c.w&=~Me,c.n&=~Me}e.length=o}},Ao=new WeakMap;let hn=0,Me=1;const Po=30;let Kt;const Se=Symbol(""),So=Symbol("");class er{constructor(e,o=null,i){this.fn=e,this.scheduler=o,this.active=!0,this.deps=[],this.parent=void 0,Ti(this,i)}run(){if(!this.active)return this.fn();let e=Kt,o=me;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Kt,Kt=this,me=!0,Me=1<<++hn,hn<=Po?Fi(this):br(this),this.fn()}finally{hn<=Po&&Ei(this),Me=1<<--hn,Kt=this.parent,me=o,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Kt===this?this.deferStop=!0:this.active&&(br(this),this.onStop&&this.onStop(),this.active=!1)}}function br(t){const{deps:e}=t;if(e.length){for(let o=0;o<e.length;o++)e[o].delete(t);e.length=0}}let me=!0;const Es=[];function Je(){Es.push(me),me=!1}function tn(){const t=Es.pop();me=t===void 0?!0:t}function Ot(t,e,o){if(me&&Kt){let i=Ao.get(t);i||Ao.set(t,i=new Map);let c=i.get(o);c||i.set(o,c=tr()),Os(c)}}function Os(t,e){let o=!1;hn<=Po?Fs(t)||(t.n|=Me,o=!Ts(t)):o=!t.has(Kt),o&&(t.add(Kt),Kt.deps.push(t))}function ce(t,e,o,i,c,h){const d=Ao.get(t);if(!d)return;let p=[];if(e==="clear")p=[...d.values()];else if(o==="length"&&X(t))d.forEach((u,w)=>{(w==="length"||w>=i)&&p.push(u)});else switch(o!==void 0&&p.push(d.get(o)),e){case"add":X(t)?Jo(o)&&p.push(d.get("length")):(p.push(d.get(Se)),Ue(t)&&p.push(d.get(So)));break;case"delete":X(t)||(p.push(d.get(Se)),Ue(t)&&p.push(d.get(So)));break;case"set":Ue(t)&&p.push(d.get(Se));break}if(p.length===1)p[0]&&Do(p[0]);else{const u=[];for(const w of p)w&&u.push(...w);Do(tr(u))}}function Do(t,e){const o=X(t)?t:[...t];for(const i of o)i.computed&&Br(i);for(const i of o)i.computed||Br(i)}function Br(t,e){(t!==Kt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Oi=Xo("__proto__,__v_isRef,__isVue"),Is=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Yo)),Ii=nr(),zi=nr(!1,!0),Ni=nr(!0),jr=Ui();function Ui(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...o){const i=pt(this);for(let h=0,d=this.length;h<d;h++)Ot(i,"get",h+"");const c=i[e](...o);return c===-1||c===!1?i[e](...o.map(pt)):c}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...o){Je();const i=pt(this)[e].apply(this,o);return tn(),i}}),t}function nr(t=!1,e=!1){return function(i,c,h){if(c==="__v_isReactive")return!t;if(c==="__v_isReadonly")return t;if(c==="__v_isShallow")return e;if(c==="__v_raw"&&h===(t?e?al:Ws:e?qs:Us).get(i))return i;const d=X(i);if(!t&&d&&lt(jr,c))return Reflect.get(jr,c,h);const p=Reflect.get(i,c,h);return(Yo(c)?Is.has(c):Oi(c))||(t||Ot(i,"get",c),e)?p:jt(p)?d&&Jo(c)?p:p.value:Ct(p)?t?sr(p):en(p):p}}const qi=zs(),Wi=zs(!0);function zs(t=!1){return function(o,i,c,h){let d=o[i];if(mn(d)&&jt(d)&&!jt(c))return!1;if(!t&&!mn(c)&&(Vo(c)||(c=pt(c),d=pt(d)),!X(o)&&jt(d)&&!jt(c)))return d.value=c,!0;const p=X(o)&&Jo(i)?Number(i)<o.length:lt(o,i),u=Reflect.set(o,i,c,h);return o===pt(h)&&(p?xn(c,d)&&ce(o,"set",i,c):ce(o,"add",i,c)),u}}function Gi(t,e){const o=lt(t,e);t[e];const i=Reflect.deleteProperty(t,e);return i&&o&&ce(t,"delete",e,void 0),i}function Ki(t,e){const o=Reflect.has(t,e);return(!Yo(e)||!Is.has(e))&&Ot(t,"has",e),o}function Xi(t){return Ot(t,"iterate",X(t)?"length":Se),Reflect.ownKeys(t)}const Ns={get:Ii,set:qi,deleteProperty:Gi,has:Ki,ownKeys:Xi},Zi={get:Ni,set(t,e){return!0},deleteProperty(t,e){return!0}},Qi=At({},Ns,{get:zi,set:Wi}),or=t=>t,eo=t=>Reflect.getPrototypeOf(t);function Pn(t,e,o=!1,i=!1){t=t.__v_raw;const c=pt(t),h=pt(e);o||(e!==h&&Ot(c,"get",e),Ot(c,"get",h));const{has:d}=eo(c),p=i?or:o?ir:fn;if(d.call(c,e))return p(t.get(e));if(d.call(c,h))return p(t.get(h));t!==c&&t.get(e)}function Sn(t,e=!1){const o=this.__v_raw,i=pt(o),c=pt(t);return e||(t!==c&&Ot(i,"has",t),Ot(i,"has",c)),t===c?o.has(t):o.has(t)||o.has(c)}function Dn(t,e=!1){return t=t.__v_raw,!e&&Ot(pt(t),"iterate",Se),Reflect.get(t,"size",t)}function Lr(t){t=pt(t);const e=pt(this);return eo(e).has.call(e,t)||(e.add(t),ce(e,"add",t,t)),this}function Ar(t,e){e=pt(e);const o=pt(this),{has:i,get:c}=eo(o);let h=i.call(o,t);h||(t=pt(t),h=i.call(o,t));const d=c.call(o,t);return o.set(t,e),h?xn(e,d)&&ce(o,"set",t,e):ce(o,"add",t,e),this}function Pr(t){const e=pt(this),{has:o,get:i}=eo(e);let c=o.call(e,t);c||(t=pt(t),c=o.call(e,t)),i&&i.call(e,t);const h=e.delete(t);return c&&ce(e,"delete",t,void 0),h}function Sr(){const t=pt(this),e=t.size!==0,o=t.clear();return e&&ce(t,"clear",void 0,void 0),o}function Vn(t,e){return function(i,c){const h=this,d=h.__v_raw,p=pt(d),u=e?or:t?ir:fn;return!t&&Ot(p,"iterate",Se),d.forEach((w,_)=>i.call(c,u(w),u(_),h))}}function Rn(t,e,o){return function(...i){const c=this.__v_raw,h=pt(c),d=Ue(h),p=t==="entries"||t===Symbol.iterator&&d,u=t==="keys"&&d,w=c[t](...i),_=o?or:e?ir:fn;return!e&&Ot(h,"iterate",u?So:Se),{next(){const{value:x,done:v}=w.next();return v?{value:x,done:v}:{value:p?[_(x[0]),_(x[1])]:_(x),done:v}},[Symbol.iterator](){return this}}}}function de(t){return function(...e){return t==="delete"?!1:this}}function Yi(){const t={get(h){return Pn(this,h)},get size(){return Dn(this)},has:Sn,add:Lr,set:Ar,delete:Pr,clear:Sr,forEach:Vn(!1,!1)},e={get(h){return Pn(this,h,!1,!0)},get size(){return Dn(this)},has:Sn,add:Lr,set:Ar,delete:Pr,clear:Sr,forEach:Vn(!1,!0)},o={get(h){return Pn(this,h,!0)},get size(){return Dn(this,!0)},has(h){return Sn.call(this,h,!0)},add:de("add"),set:de("set"),delete:de("delete"),clear:de("clear"),forEach:Vn(!0,!1)},i={get(h){return Pn(this,h,!0,!0)},get size(){return Dn(this,!0)},has(h){return Sn.call(this,h,!0)},add:de("add"),set:de("set"),delete:de("delete"),clear:de("clear"),forEach:Vn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(h=>{t[h]=Rn(h,!1,!1),o[h]=Rn(h,!0,!1),e[h]=Rn(h,!1,!0),i[h]=Rn(h,!0,!0)}),[t,o,e,i]}const[Ji,tl,el,nl]=Yi();function rr(t,e){const o=e?t?nl:el:t?tl:Ji;return(i,c,h)=>c==="__v_isReactive"?!t:c==="__v_isReadonly"?t:c==="__v_raw"?i:Reflect.get(lt(o,c)&&c in i?o:i,c,h)}const ol={get:rr(!1,!1)},rl={get:rr(!1,!0)},sl={get:rr(!0,!1)},Us=new WeakMap,qs=new WeakMap,Ws=new WeakMap,al=new WeakMap;function il(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ll(t){return t.__v_skip||!Object.isExtensible(t)?0:il(Si(t))}function en(t){return mn(t)?t:ar(t,!1,Ns,ol,Us)}function cl(t){return ar(t,!1,Qi,rl,qs)}function sr(t){return ar(t,!0,Zi,sl,Ws)}function ar(t,e,o,i,c){if(!Ct(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const h=c.get(t);if(h)return h;const d=ll(t);if(d===0)return t;const p=new Proxy(t,d===2?i:o);return c.set(t,p),p}function qe(t){return mn(t)?qe(t.__v_raw):!!(t&&t.__v_isReactive)}function mn(t){return!!(t&&t.__v_isReadonly)}function Vo(t){return!!(t&&t.__v_isShallow)}function Gs(t){return qe(t)||mn(t)}function pt(t){const e=t&&t.__v_raw;return e?pt(e):t}function Ks(t){return In(t,"__v_skip",!0),t}const fn=t=>Ct(t)?en(t):t,ir=t=>Ct(t)?sr(t):t;function Xs(t){me&&Kt&&(t=pt(t),Os(t.dep||(t.dep=tr())))}function Zs(t,e){t=pt(t),t.dep&&Do(t.dep)}function jt(t){return!!(t&&t.__v_isRef===!0)}function Bt(t){return Qs(t,!1)}function hl(t){return Qs(t,!0)}function Qs(t,e){return jt(t)?t:new dl(t,e)}class dl{constructor(e,o){this.__v_isShallow=o,this.dep=void 0,this.__v_isRef=!0,this._rawValue=o?e:pt(e),this._value=o?e:fn(e)}get value(){return Xs(this),this._value}set value(e){e=this.__v_isShallow?e:pt(e),xn(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:fn(e),Zs(this))}}function Wt(t){return jt(t)?t.value:t}const pl={get:(t,e,o)=>Wt(Reflect.get(t,e,o)),set:(t,e,o,i)=>{const c=t[e];return jt(c)&&!jt(o)?(c.value=o,!0):Reflect.set(t,e,o,i)}};function Ys(t){return qe(t)?t:new Proxy(t,pl)}function Bn(t){const e=X(t)?new Array(t.length):{};for(const o in t)e[o]=wl(t,o);return e}class ul{constructor(e,o,i){this._object=e,this._key=o,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}}function wl(t,e,o){const i=t[e];return jt(i)?i:new ul(t,e,o)}class gl{constructor(e,o,i,c){this._setter=o,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new er(e,()=>{this._dirty||(this._dirty=!0,Zs(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!c,this.__v_isReadonly=i}get value(){const e=pt(this);return Xs(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function _l(t,e,o=!1){let i,c;const h=tt(t);return h?(i=t,c=te):(i=t.get,c=t.set),new gl(i,c,h||!c,o)}function fe(t,e,o,i){let c;try{c=i?t(...i):t()}catch(h){jn(h,e,o)}return c}function Ut(t,e,o,i){if(tt(t)){const h=fe(t,e,o,i);return h&&Vs(h)&&h.catch(d=>{jn(d,e,o)}),h}const c=[];for(let h=0;h<t.length;h++)c.push(Ut(t[h],e,o,i));return c}function jn(t,e,o,i){if(e&&e.vnode,e){let c=e.parent;const h=e.proxy,d=o;for(;c;){const u=c.ec;if(u){for(let w=0;w<u.length;w++)if(u[w](t,h,d)===!1)return}c=c.parent}const p=e.appContext.config.errorHandler;if(p){fe(p,null,10,[t,h,d]);return}}vl(t)}function vl(t,e,o,i){console.error(t)}let Nn=!1,Ro=!1;const Ft=[];let ie=0;const un=[];let dn=null,Ee=0;const wn=[];let _e=null,Oe=0;const Js=Promise.resolve();let lr=null,Ho=null;function ta(t){const e=lr||Js;return t?e.then(this?t.bind(this):t):e}function kl(t){let e=ie+1,o=Ft.length;for(;e<o;){const i=e+o>>>1;Mn(Ft[i])<t?e=i+1:o=i}return e}function cr(t){(!Ft.length||!Ft.includes(t,Nn&&t.allowRecurse?ie+1:ie))&&t!==Ho&&(t.id==null?Ft.push(t):Ft.splice(kl(t.id),0,t),ea())}function ea(){!Nn&&!Ro&&(Ro=!0,lr=Js.then(oa))}function xl(t){const e=Ft.indexOf(t);e>ie&&Ft.splice(e,1)}function na(t,e,o,i){X(t)?o.push(...t):(!e||!e.includes(t,t.allowRecurse?i+1:i))&&o.push(t),ea()}function ml(t){na(t,dn,un,Ee)}function fl(t){na(t,_e,wn,Oe)}function no(t,e=null){if(un.length){for(Ho=e,dn=[...new Set(un)],un.length=0,Ee=0;Ee<dn.length;Ee++)dn[Ee]();dn=null,Ee=0,Ho=null,no(t,e)}}function Un(t){if(no(),wn.length){const e=[...new Set(wn)];if(wn.length=0,_e){_e.push(...e);return}for(_e=e,_e.sort((o,i)=>Mn(o)-Mn(i)),Oe=0;Oe<_e.length;Oe++)_e[Oe]();_e=null,Oe=0}}const Mn=t=>t.id==null?1/0:t.id;function oa(t){Ro=!1,Nn=!0,no(t),Ft.sort((o,i)=>Mn(o)-Mn(i));const e=te;try{for(ie=0;ie<Ft.length;ie++){const o=Ft[ie];o&&o.active!==!1&&fe(o,null,14)}}finally{ie=0,Ft.length=0,Un(),Nn=!1,lr=null,(Ft.length||un.length||wn.length)&&oa(t)}}function Ml(t,e,...o){if(t.isUnmounted)return;const i=t.vnode.props||xt;let c=o;const h=e.startsWith("update:"),d=h&&e.slice(7);if(d&&d in i){const _=`${d==="modelValue"?"model":d}Modifiers`,{number:x,trim:v}=i[_]||xt;v&&(c=o.map($=>$.trim())),x&&(c=o.map(zn))}let p,u=i[p=ko(e)]||i[p=ko(ne(e))];!u&&h&&(u=i[p=ko(Ye(e))]),u&&Ut(u,t,6,c);const w=i[p+"Once"];if(w){if(!t.emitted)t.emitted={};else if(t.emitted[p])return;t.emitted[p]=!0,Ut(w,t,6,c)}}function ra(t,e,o=!1){const i=e.emitsCache,c=i.get(t);if(c!==void 0)return c;const h=t.emits;let d={},p=!1;if(!tt(t)){const u=w=>{const _=ra(w,e,!0);_&&(p=!0,At(d,_))};!o&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}return!h&&!p?(i.set(t,null),null):(X(h)?h.forEach(u=>d[u]=null):At(d,h),i.set(t,d),d)}function oo(t,e){return!t||!bn(e)?!1:(e=e.slice(2).replace(/Once$/,""),lt(t,e[0].toLowerCase()+e.slice(1))||lt(t,Ye(e))||lt(t,e))}let Pt=null,sa=null;function qn(t){const e=Pt;return Pt=t,sa=t&&t.type.__scopeId||null,e}function $l(t,e=Pt,o){if(!e||t._n)return t;const i=(...c)=>{i._d&&Nr(-1);const h=qn(e),d=t(...c);return qn(h),i._d&&Nr(1),d};return i._n=!0,i._c=!0,i._d=!0,i}function xo(t){const{type:e,vnode:o,proxy:i,withProxy:c,props:h,propsOptions:[d],slots:p,attrs:u,emit:w,render:_,renderCache:x,data:v,setupState:$,ctx:C,inheritAttrs:H}=t;let D,m;const M=qn(t);try{if(o.shapeFlag&4){const O=c||i;D=Gt(_.call(O,O,x,h,$,v,C)),m=u}else{const O=e;D=Gt(O.length>1?O(h,{attrs:u,slots:p,emit:w}):O(h,null)),m=e.props?u:yl(u)}}catch(O){_n.length=0,jn(O,t,1),D=$t(Et)}let P=D;if(m&&H!==!1){const O=Object.keys(m),{shapeFlag:K}=P;O.length&&K&7&&(d&&O.some(Zo)&&(m=Cl(m,d)),P=$e(P,m))}return o.dirs&&(P=$e(P),P.dirs=P.dirs?P.dirs.concat(o.dirs):o.dirs),o.transition&&(P.transition=o.transition),D=P,qn(M),D}const yl=t=>{let e;for(const o in t)(o==="class"||o==="style"||bn(o))&&((e||(e={}))[o]=t[o]);return e},Cl=(t,e)=>{const o={};for(const i in t)(!Zo(i)||!(i.slice(9)in e))&&(o[i]=t[i]);return o};function bl(t,e,o){const{props:i,children:c,component:h}=t,{props:d,children:p,patchFlag:u}=e,w=h.emitsOptions;if(e.dirs||e.transition)return!0;if(o&&u>=0){if(u&1024)return!0;if(u&16)return i?Dr(i,d,w):!!d;if(u&8){const _=e.dynamicProps;for(let x=0;x<_.length;x++){const v=_[x];if(d[v]!==i[v]&&!oo(w,v))return!0}}}else return(c||p)&&(!p||!p.$stable)?!0:i===d?!1:i?d?Dr(i,d,w):!0:!!d;return!1}function Dr(t,e,o){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let c=0;c<i.length;c++){const h=i[c];if(e[h]!==t[h]&&!oo(o,h))return!0}return!1}function Bl({vnode:t,parent:e},o){for(;e&&e.subTree===t;)(t=e.vnode).el=o,e=e.parent}const jl=t=>t.__isSuspense;function aa(t,e){e&&e.pendingBranch?X(t)?e.effects.push(...t):e.effects.push(t):fl(t)}function ee(t,e){if(bt){let o=bt.provides;const i=bt.parent&&bt.parent.provides;i===o&&(o=bt.provides=Object.create(i)),o[t]=e}}function yt(t,e,o=!1){const i=bt||Pt;if(i){const c=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(c&&t in c)return c[t];if(arguments.length>1)return o&&tt(e)?e.call(i.proxy):e}}const Vr={};function De(t,e,o){return ia(t,e,o)}function ia(t,e,{immediate:o,deep:i,flush:c,onTrack:h,onTrigger:d}=xt){const p=bt;let u,w=!1,_=!1;if(jt(t)?(u=()=>t.value,w=Vo(t)):qe(t)?(u=()=>t,i=!0):X(t)?(_=!0,w=t.some(m=>qe(m)||Vo(m)),u=()=>t.map(m=>{if(jt(m))return m.value;if(qe(m))return Pe(m);if(tt(m))return fe(m,p,2)})):tt(t)?e?u=()=>fe(t,p,2):u=()=>{if(!(p&&p.isUnmounted))return x&&x(),Ut(t,p,3,[v])}:u=te,e&&i){const m=u;u=()=>Pe(m())}let x,v=m=>{x=D.onStop=()=>{fe(m,p,4)}};if(Ke)return v=te,e?o&&Ut(e,p,3,[u(),_?[]:void 0,v]):u(),te;let $=_?[]:Vr;const C=()=>{if(!!D.active)if(e){const m=D.run();(i||w||(_?m.some((M,P)=>xn(M,$[P])):xn(m,$)))&&(x&&x(),Ut(e,p,3,[m,$===Vr?void 0:$,v]),$=m)}else D.run()};C.allowRecurse=!!e;let H;c==="sync"?H=C:c==="post"?H=()=>Dt(C,p&&p.suspense):H=()=>ml(C);const D=new er(u,H);return e?o?C():$=D.run():c==="post"?Dt(D.run.bind(D),p&&p.suspense):D.run(),()=>{D.stop(),p&&p.scope&&Qo(p.scope.effects,D)}}function Ll(t,e,o){const i=this.proxy,c=ut(t)?t.includes(".")?la(i,t):()=>i[t]:t.bind(i,i);let h;tt(e)?h=e:(h=e.handler,o=e);const d=bt;Ge(this);const p=ia(c,h.bind(i),o);return d?Ge(d):Ve(),p}function la(t,e){const o=e.split(".");return()=>{let i=t;for(let c=0;c<o.length&&i;c++)i=i[o[c]];return i}}function Pe(t,e){if(!Ct(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),jt(t))Pe(t.value,e);else if(X(t))for(let o=0;o<t.length;o++)Pe(t[o],e);else if(Ds(t)||Ue(t))t.forEach(o=>{Pe(o,e)});else if(Hs(t))for(const o in t)Pe(t[o],e);return t}function Al(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return oe(()=>{t.isMounted=!0}),so(()=>{t.isUnmounting=!0}),t}const zt=[Function,Array],Pl={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:zt,onEnter:zt,onAfterEnter:zt,onEnterCancelled:zt,onBeforeLeave:zt,onLeave:zt,onAfterLeave:zt,onLeaveCancelled:zt,onBeforeAppear:zt,onAppear:zt,onAfterAppear:zt,onAppearCancelled:zt},setup(t,{slots:e}){const o=uc(),i=Al();let c;return()=>{const h=e.default&&da(e.default(),!0);if(!h||!h.length)return;let d=h[0];if(h.length>1){for(const H of h)if(H.type!==Et){d=H;break}}const p=pt(t),{mode:u}=p;if(i.isLeaving)return mo(d);const w=Rr(d);if(!w)return mo(d);const _=To(w,p,i,o);Fo(w,_);const x=o.subTree,v=x&&Rr(x);let $=!1;const{getTransitionKey:C}=w.type;if(C){const H=C();c===void 0?c=H:H!==c&&(c=H,$=!0)}if(v&&v.type!==Et&&(!Le(w,v)||$)){const H=To(v,p,i,o);if(Fo(v,H),u==="out-in")return i.isLeaving=!0,H.afterLeave=()=>{i.isLeaving=!1,o.update()},mo(d);u==="in-out"&&w.type!==Et&&(H.delayLeave=(D,m,M)=>{const P=ha(i,v);P[String(v.key)]=v,D._leaveCb=()=>{m(),D._leaveCb=void 0,delete _.delayedLeave},_.delayedLeave=M})}return d}}},ca=Pl;function ha(t,e){const{leavingVNodes:o}=t;let i=o.get(e.type);return i||(i=Object.create(null),o.set(e.type,i)),i}function To(t,e,o,i){const{appear:c,mode:h,persisted:d=!1,onBeforeEnter:p,onEnter:u,onAfterEnter:w,onEnterCancelled:_,onBeforeLeave:x,onLeave:v,onAfterLeave:$,onLeaveCancelled:C,onBeforeAppear:H,onAppear:D,onAfterAppear:m,onAppearCancelled:M}=e,P=String(t.key),O=ha(o,t),K=(F,Z)=>{F&&Ut(F,i,9,Z)},J=(F,Z)=>{const Q=Z[1];K(F,Z),X(F)?F.every(nt=>nt.length<=1)&&Q():F.length<=1&&Q()},et={mode:h,persisted:d,beforeEnter(F){let Z=p;if(!o.isMounted)if(c)Z=H||p;else return;F._leaveCb&&F._leaveCb(!0);const Q=O[P];Q&&Le(t,Q)&&Q.el._leaveCb&&Q.el._leaveCb(),K(Z,[F])},enter(F){let Z=u,Q=w,nt=_;if(!o.isMounted)if(c)Z=D||u,Q=m||w,nt=M||_;else return;let E=!1;const st=F._enterCb=N=>{E||(E=!0,N?K(nt,[F]):K(Q,[F]),et.delayedLeave&&et.delayedLeave(),F._enterCb=void 0)};Z?J(Z,[F,st]):st()},leave(F,Z){const Q=String(t.key);if(F._enterCb&&F._enterCb(!0),o.isUnmounting)return Z();K(x,[F]);let nt=!1;const E=F._leaveCb=st=>{nt||(nt=!0,Z(),st?K(C,[F]):K($,[F]),F._leaveCb=void 0,O[Q]===t&&delete O[Q])};O[Q]=t,v?J(v,[F,E]):E()},clone(F){return To(F,e,o,i)}};return et}function mo(t){if(Ln(t))return t=$e(t),t.children=null,t}function Rr(t){return Ln(t)?t.children?t.children[0]:void 0:t}function Fo(t,e){t.shapeFlag&6&&t.component?Fo(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function da(t,e=!1,o){let i=[],c=0;for(let h=0;h<t.length;h++){let d=t[h];const p=o==null?d.key:String(o)+String(d.key!=null?d.key:h);d.type===Vt?(d.patchFlag&128&&c++,i=i.concat(da(d.children,e,p))):(e||d.type!==Et)&&i.push(p!=null?$e(d,{key:p}):d)}if(c>1)for(let h=0;h<i.length;h++)i[h].patchFlag=-2;return i}function r(t){return tt(t)?{setup:t,name:t.name}:t}const We=t=>!!t.type.__asyncLoader;function G(t){tt(t)&&(t={loader:t});const{loader:e,loadingComponent:o,errorComponent:i,delay:c=200,timeout:h,suspensible:d=!0,onError:p}=t;let u=null,w,_=0;const x=()=>(_++,u=null,v()),v=()=>{let $;return u||($=u=e().catch(C=>{if(C=C instanceof Error?C:new Error(String(C)),p)return new Promise((H,D)=>{p(C,()=>H(x()),()=>D(C),_+1)});throw C}).then(C=>$!==u&&u?u:(C&&(C.__esModule||C[Symbol.toStringTag]==="Module")&&(C=C.default),w=C,C)))};return r({name:"AsyncComponentWrapper",__asyncLoader:v,get __asyncResolved(){return w},setup(){const $=bt;if(w)return()=>fo(w,$);const C=M=>{u=null,jn(M,$,13)};if(d&&$.suspense||Ke)return v().then(M=>()=>fo(M,$)).catch(M=>(C(M),()=>i?$t(i,{error:M}):null));const H=Bt(!1),D=Bt(),m=Bt(!!c);return c&&setTimeout(()=>{m.value=!1},c),h!=null&&setTimeout(()=>{if(!H.value&&!D.value){const M=new Error(`Async component timed out after ${h}ms.`);C(M),D.value=M}},h),v().then(()=>{H.value=!0,$.parent&&Ln($.parent.vnode)&&cr($.parent.update)}).catch(M=>{C(M),D.value=M}),()=>{if(H.value&&w)return fo(w,$);if(D.value&&i)return $t(i,{error:D.value});if(o&&!m.value)return $t(o)}}})}function fo(t,{vnode:{ref:e,props:o,children:i,shapeFlag:c},parent:h}){const d=$t(t,o,i);return d.ref=e,d}const Ln=t=>t.type.__isKeepAlive;function Sl(t,e){pa(t,"a",e)}function Dl(t,e){pa(t,"da",e)}function pa(t,e,o=bt){const i=t.__wdc||(t.__wdc=()=>{let c=o;for(;c;){if(c.isDeactivated)return;c=c.parent}return t()});if(ro(e,i,o),o){let c=o.parent;for(;c&&c.parent;)Ln(c.parent.vnode)&&Vl(i,e,o,c),c=c.parent}}function Vl(t,e,o,i){const c=ro(e,t,i,!0);ua(()=>{Qo(i[e],c)},o)}function ro(t,e,o=bt,i=!1){if(o){const c=o[t]||(o[t]=[]),h=e.__weh||(e.__weh=(...d)=>{if(o.isUnmounted)return;Je(),Ge(o);const p=Ut(e,o,t,d);return Ve(),tn(),p});return i?c.unshift(h):c.push(h),h}}const he=t=>(e,o=bt)=>(!Ke||t==="sp")&&ro(t,e,o),Rl=he("bm"),oe=he("m"),Hl=he("bu"),Tl=he("u"),so=he("bum"),ua=he("um"),Fl=he("sp"),El=he("rtg"),Ol=he("rtc");function Il(t,e=bt){ro("ec",t,e)}function CQt(t,e){const o=Pt;if(o===null)return t;const i=ho(o)||o.proxy,c=t.dirs||(t.dirs=[]);for(let h=0;h<e.length;h++){let[d,p,u,w=xt]=e[h];tt(d)&&(d={mounted:d,updated:d}),d.deep&&Pe(p),c.push({dir:d,instance:i,value:p,oldValue:void 0,arg:u,modifiers:w})}return t}function Jt(t,e,o,i){const c=t.dirs,h=e&&e.dirs;for(let d=0;d<c.length;d++){const p=c[d];h&&(p.oldValue=h[d].value);let u=p.dir[i];u&&(Je(),Ut(u,o,8,[t.el,p,t,e]),tn())}}const hr="components";function wa(t,e){return va(hr,t,!0,e)||t}const ga=Symbol();function _a(t){return ut(t)?va(hr,t)||t:t||ga}function va(t,e,o,i=!1){const c=Pt||bt;if(c){const h=c.type;if(t===hr){const p=kc(h);if(p&&(p===e||p===ne(e)||p===to(ne(e))))return h}const d=Hr(c[t]||h[t],e)||Hr(c.appContext[t],e);return!d&&i?h:d}}function Hr(t,e){return t&&(t[e]||t[ne(e)]||t[to(ne(e))])}function bQt(t,e,o,i){let c;const h=o&&o[i];if(X(t)||ut(t)){c=new Array(t.length);for(let d=0,p=t.length;d<p;d++)c[d]=e(t[d],d,void 0,h&&h[d])}else if(typeof t=="number"){c=new Array(t);for(let d=0;d<t;d++)c[d]=e(d+1,d,void 0,h&&h[d])}else if(Ct(t))if(t[Symbol.iterator])c=Array.from(t,(d,p)=>e(d,p,void 0,h&&h[p]));else{const d=Object.keys(t);c=new Array(d.length);for(let p=0,u=d.length;p<u;p++){const w=d[p];c[p]=e(t[w],w,p,h&&h[p])}}else c=[];return o&&(o[i]=c),c}function ao(t,e,o={},i,c){if(Pt.isCE||Pt.parent&&We(Pt.parent)&&Pt.parent.isCE)return $t("slot",e==="default"?null:{name:e},i&&i());let h=t[e];h&&h._c&&(h._d=!1),s();const d=h&&ka(h(o)),p=io(Vt,{key:o.key||`_${e}`},d||(i?i():[]),d&&t._===1?64:-2);return!c&&p.scopeId&&(p.slotScopeIds=[p.scopeId+"-s"]),h&&h._c&&(h._d=!0),p}function ka(t){return t.some(e=>Xn(e)?!(e.type===Et||e.type===Vt&&!ka(e.children)):!0)?t:null}const Eo=t=>t?Aa(t)?ho(t)||t.proxy:Eo(t.parent):null,Wn=At(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Eo(t.parent),$root:t=>Eo(t.root),$emit:t=>t.emit,$options:t=>ma(t),$forceUpdate:t=>t.f||(t.f=()=>cr(t.update)),$nextTick:t=>t.n||(t.n=ta.bind(t.proxy)),$watch:t=>Ll.bind(t)}),zl={get({_:t},e){const{ctx:o,setupState:i,data:c,props:h,accessCache:d,type:p,appContext:u}=t;let w;if(e[0]!=="$"){const $=d[e];if($!==void 0)switch($){case 1:return i[e];case 2:return c[e];case 4:return o[e];case 3:return h[e]}else{if(i!==xt&&lt(i,e))return d[e]=1,i[e];if(c!==xt&&lt(c,e))return d[e]=2,c[e];if((w=t.propsOptions[0])&&lt(w,e))return d[e]=3,h[e];if(o!==xt&&lt(o,e))return d[e]=4,o[e];Oo&&(d[e]=0)}}const _=Wn[e];let x,v;if(_)return e==="$attrs"&&Ot(t,"get",e),_(t);if((x=p.__cssModules)&&(x=x[e]))return x;if(o!==xt&&lt(o,e))return d[e]=4,o[e];if(v=u.config.globalProperties,lt(v,e))return v[e]},set({_:t},e,o){const{data:i,setupState:c,ctx:h}=t;return c!==xt&&lt(c,e)?(c[e]=o,!0):i!==xt&&lt(i,e)?(i[e]=o,!0):lt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(h[e]=o,!0)},has({_:{data:t,setupState:e,accessCache:o,ctx:i,appContext:c,propsOptions:h}},d){let p;return!!o[d]||t!==xt&&lt(t,d)||e!==xt&&lt(e,d)||(p=h[0])&&lt(p,d)||lt(i,d)||lt(Wn,d)||lt(c.config.globalProperties,d)},defineProperty(t,e,o){return o.get!=null?t._.accessCache[e]=0:lt(o,"value")&&this.set(t,e,o.value,null),Reflect.defineProperty(t,e,o)}};let Oo=!0;function Nl(t){const e=ma(t),o=t.proxy,i=t.ctx;Oo=!1,e.beforeCreate&&Tr(e.beforeCreate,t,"bc");const{data:c,computed:h,methods:d,watch:p,provide:u,inject:w,created:_,beforeMount:x,mounted:v,beforeUpdate:$,updated:C,activated:H,deactivated:D,beforeDestroy:m,beforeUnmount:M,destroyed:P,unmounted:O,render:K,renderTracked:J,renderTriggered:et,errorCaptured:F,serverPrefetch:Z,expose:Q,inheritAttrs:nt,components:E,directives:st,filters:N}=e;if(w&&Ul(w,i,null,t.appContext.config.unwrapInjectedRef),d)for(const mt in d){const wt=d[mt];tt(wt)&&(i[mt]=wt.bind(o))}if(c){const mt=c.call(o,o);Ct(mt)&&(t.data=en(mt))}if(Oo=!0,h)for(const mt in h){const wt=h[mt],Rt=tt(wt)?wt.bind(o,o):tt(wt.get)?wt.get.bind(o,o):te,He=!tt(wt)&&tt(wt.set)?wt.set.bind(o):te,se=it({get:Rt,set:He});Object.defineProperty(i,mt,{enumerable:!0,configurable:!0,get:()=>se.value,set:Zt=>se.value=Zt})}if(p)for(const mt in p)xa(p[mt],i,o,mt);if(u){const mt=tt(u)?u.call(o):u;Reflect.ownKeys(mt).forEach(wt=>{ee(wt,mt[wt])})}_&&Tr(_,t,"c");function dt(mt,wt){X(wt)?wt.forEach(Rt=>mt(Rt.bind(o))):wt&&mt(wt.bind(o))}if(dt(Rl,x),dt(oe,v),dt(Hl,$),dt(Tl,C),dt(Sl,H),dt(Dl,D),dt(Il,F),dt(Ol,J),dt(El,et),dt(so,M),dt(ua,O),dt(Fl,Z),X(Q))if(Q.length){const mt=t.exposed||(t.exposed={});Q.forEach(wt=>{Object.defineProperty(mt,wt,{get:()=>o[wt],set:Rt=>o[wt]=Rt})})}else t.exposed||(t.exposed={});K&&t.render===te&&(t.render=K),nt!=null&&(t.inheritAttrs=nt),E&&(t.components=E),st&&(t.directives=st)}function Ul(t,e,o,i=!1){X(t)&&(t=Io(t));for(const c in t){const h=t[c];let d;Ct(h)?"default"in h?d=yt(h.from||c,h.default,!0):d=yt(h.from||c):d=yt(h),jt(d)&&i?Object.defineProperty(e,c,{enumerable:!0,configurable:!0,get:()=>d.value,set:p=>d.value=p}):e[c]=d}}function Tr(t,e,o){Ut(X(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,o)}function xa(t,e,o,i){const c=i.includes(".")?la(o,i):()=>o[i];if(ut(t)){const h=e[t];tt(h)&&De(c,h)}else if(tt(t))De(c,t.bind(o));else if(Ct(t))if(X(t))t.forEach(h=>xa(h,e,o,i));else{const h=tt(t.handler)?t.handler.bind(o):e[t.handler];tt(h)&&De(c,h,t)}}function ma(t){const e=t.type,{mixins:o,extends:i}=e,{mixins:c,optionsCache:h,config:{optionMergeStrategies:d}}=t.appContext,p=h.get(e);let u;return p?u=p:!c.length&&!o&&!i?u=e:(u={},c.length&&c.forEach(w=>Gn(u,w,d,!0)),Gn(u,e,d)),h.set(e,u),u}function Gn(t,e,o,i=!1){const{mixins:c,extends:h}=e;h&&Gn(t,h,o,!0),c&&c.forEach(d=>Gn(t,d,o,!0));for(const d in e)if(!(i&&d==="expose")){const p=ql[d]||o&&o[d];t[d]=p?p(t[d],e[d]):e[d]}return t}const ql={data:Fr,props:Be,emits:Be,methods:Be,computed:Be,beforeCreate:St,created:St,beforeMount:St,mounted:St,beforeUpdate:St,updated:St,beforeDestroy:St,beforeUnmount:St,destroyed:St,unmounted:St,activated:St,deactivated:St,errorCaptured:St,serverPrefetch:St,components:Be,directives:Be,watch:Gl,provide:Fr,inject:Wl};function Fr(t,e){return e?t?function(){return At(tt(t)?t.call(this,this):t,tt(e)?e.call(this,this):e)}:e:t}function Wl(t,e){return Be(Io(t),Io(e))}function Io(t){if(X(t)){const e={};for(let o=0;o<t.length;o++)e[t[o]]=t[o];return e}return t}function St(t,e){return t?[...new Set([].concat(t,e))]:e}function Be(t,e){return t?At(At(Object.create(null),t),e):e}function Gl(t,e){if(!t)return e;if(!e)return t;const o=At(Object.create(null),t);for(const i in e)o[i]=St(t[i],e[i]);return o}function Kl(t,e,o,i=!1){const c={},h={};In(h,lo,1),t.propsDefaults=Object.create(null),fa(t,e,c,h);for(const d in t.propsOptions[0])d in c||(c[d]=void 0);o?t.props=i?c:cl(c):t.type.props?t.props=c:t.props=h,t.attrs=h}function Xl(t,e,o,i){const{props:c,attrs:h,vnode:{patchFlag:d}}=t,p=pt(c),[u]=t.propsOptions;let w=!1;if((i||d>0)&&!(d&16)){if(d&8){const _=t.vnode.dynamicProps;for(let x=0;x<_.length;x++){let v=_[x];if(oo(t.emitsOptions,v))continue;const $=e[v];if(u)if(lt(h,v))$!==h[v]&&(h[v]=$,w=!0);else{const C=ne(v);c[C]=zo(u,p,C,$,t,!1)}else $!==h[v]&&(h[v]=$,w=!0)}}}else{fa(t,e,c,h)&&(w=!0);let _;for(const x in p)(!e||!lt(e,x)&&((_=Ye(x))===x||!lt(e,_)))&&(u?o&&(o[x]!==void 0||o[_]!==void 0)&&(c[x]=zo(u,p,x,void 0,t,!0)):delete c[x]);if(h!==p)for(const x in h)(!e||!lt(e,x)&&!0)&&(delete h[x],w=!0)}w&&ce(t,"set","$attrs")}function fa(t,e,o,i){const[c,h]=t.propsOptions;let d=!1,p;if(e)for(let u in e){if(pn(u))continue;const w=e[u];let _;c&&lt(c,_=ne(u))?!h||!h.includes(_)?o[_]=w:(p||(p={}))[_]=w:oo(t.emitsOptions,u)||(!(u in i)||w!==i[u])&&(i[u]=w,d=!0)}if(h){const u=pt(o),w=p||xt;for(let _=0;_<h.length;_++){const x=h[_];o[x]=zo(c,u,x,w[x],t,!lt(w,x))}}return d}function zo(t,e,o,i,c,h){const d=t[o];if(d!=null){const p=lt(d,"default");if(p&&i===void 0){const u=d.default;if(d.type!==Function&&tt(u)){const{propsDefaults:w}=c;o in w?i=w[o]:(Ge(c),i=w[o]=u.call(null,e),Ve())}else i=u}d[0]&&(h&&!p?i=!1:d[1]&&(i===""||i===Ye(o))&&(i=!0))}return i}function Ma(t,e,o=!1){const i=e.propsCache,c=i.get(t);if(c)return c;const h=t.props,d={},p=[];let u=!1;if(!tt(t)){const _=x=>{u=!0;const[v,$]=Ma(x,e,!0);At(d,v),$&&p.push(...$)};!o&&e.mixins.length&&e.mixins.forEach(_),t.extends&&_(t.extends),t.mixins&&t.mixins.forEach(_)}if(!h&&!u)return i.set(t,Ne),Ne;if(X(h))for(let _=0;_<h.length;_++){const x=ne(h[_]);Er(x)&&(d[x]=xt)}else if(h)for(const _ in h){const x=ne(_);if(Er(x)){const v=h[_],$=d[x]=X(v)||tt(v)?{type:v}:v;if($){const C=zr(Boolean,$.type),H=zr(String,$.type);$[0]=C>-1,$[1]=H<0||C<H,(C>-1||lt($,"default"))&&p.push(x)}}}const w=[d,p];return i.set(t,w),w}function Er(t){return t[0]!=="$"}function Or(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function Ir(t,e){return Or(t)===Or(e)}function zr(t,e){return X(e)?e.findIndex(o=>Ir(o,t)):tt(e)&&Ir(e,t)?0:-1}const $a=t=>t[0]==="_"||t==="$stable",dr=t=>X(t)?t.map(Gt):[Gt(t)],Zl=(t,e,o)=>{if(e._n)return e;const i=$l((...c)=>dr(e(...c)),o);return i._c=!1,i},ya=(t,e,o)=>{const i=t._ctx;for(const c in t){if($a(c))continue;const h=t[c];if(tt(h))e[c]=Zl(c,h,i);else if(h!=null){const d=dr(h);e[c]=()=>d}}},Ca=(t,e)=>{const o=dr(e);t.slots.default=()=>o},Ql=(t,e)=>{if(t.vnode.shapeFlag&32){const o=e._;o?(t.slots=pt(e),In(e,"_",o)):ya(e,t.slots={})}else t.slots={},e&&Ca(t,e);In(t.slots,lo,1)},Yl=(t,e,o)=>{const{vnode:i,slots:c}=t;let h=!0,d=xt;if(i.shapeFlag&32){const p=e._;p?o&&p===1?h=!1:(At(c,e),!o&&p===1&&delete c._):(h=!e.$stable,ya(e,c)),d=e}else e&&(Ca(t,e),d={default:1});if(h)for(const p in c)!$a(p)&&!(p in d)&&delete c[p]};function ba(){return{app:null,config:{isNativeTag:Li,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Jl=0;function tc(t,e){return function(i,c=null){tt(i)||(i=Object.assign({},i)),c!=null&&!Ct(c)&&(c=null);const h=ba(),d=new Set;let p=!1;const u=h.app={_uid:Jl++,_component:i,_props:c,_container:null,_context:h,_instance:null,version:mc,get config(){return h.config},set config(w){},use(w,..._){return d.has(w)||(w&&tt(w.install)?(d.add(w),w.install(u,..._)):tt(w)&&(d.add(w),w(u,..._))),u},mixin(w){return h.mixins.includes(w)||h.mixins.push(w),u},component(w,_){return _?(h.components[w]=_,u):h.components[w]},directive(w,_){return _?(h.directives[w]=_,u):h.directives[w]},mount(w,_,x){if(!p){const v=$t(i,c);return v.appContext=h,_&&e?e(v,w):t(v,w,x),p=!0,u._container=w,w.__vue_app__=u,ho(v.component)||v.component.proxy}},unmount(){p&&(t(null,u._container),delete u._container.__vue_app__)},provide(w,_){return h.provides[w]=_,u}};return u}}function Kn(t,e,o,i,c=!1){if(X(t)){t.forEach((v,$)=>Kn(v,e&&(X(e)?e[$]:e),o,i,c));return}if(We(i)&&!c)return;const h=i.shapeFlag&4?ho(i.component)||i.component.proxy:i.el,d=c?null:h,{i:p,r:u}=t,w=e&&e.r,_=p.refs===xt?p.refs={}:p.refs,x=p.setupState;if(w!=null&&w!==u&&(ut(w)?(_[w]=null,lt(x,w)&&(x[w]=null)):jt(w)&&(w.value=null)),tt(u))fe(u,p,12,[d,_]);else{const v=ut(u),$=jt(u);if(v||$){const C=()=>{if(t.f){const H=v?_[u]:u.value;c?X(H)&&Qo(H,h):X(H)?H.includes(h)||H.push(h):v?(_[u]=[h],lt(x,u)&&(x[u]=_[u])):(u.value=[h],t.k&&(_[t.k]=u.value))}else v?(_[u]=d,lt(x,u)&&(x[u]=d)):jt(u)&&(u.value=d,t.k&&(_[t.k]=d))};d?(C.id=-1,Dt(C,o)):C()}}}let pe=!1;const Hn=t=>/svg/.test(t.namespaceURI)&&t.tagName!=="foreignObject",Tn=t=>t.nodeType===8;function ec(t){const{mt:e,p:o,o:{patchProp:i,createText:c,nextSibling:h,parentNode:d,remove:p,insert:u,createComment:w}}=t,_=(m,M)=>{if(!M.hasChildNodes()){o(null,m,M),Un();return}pe=!1,x(M.firstChild,m,null,null,null),Un(),pe&&console.error("Hydration completed but contains mismatches.")},x=(m,M,P,O,K,J=!1)=>{const et=Tn(m)&&m.data==="[",F=()=>H(m,M,P,O,K,et),{type:Z,ref:Q,shapeFlag:nt,patchFlag:E}=M,st=m.nodeType;M.el=m,E===-2&&(J=!1,M.dynamicChildren=null);let N=null;switch(Z){case $n:st!==3?M.children===""?(u(M.el=c(""),d(m),m),N=m):N=F():(m.data!==M.children&&(pe=!0,m.data=M.children),N=h(m));break;case Et:st!==8||et?N=F():N=h(m);break;case gn:if(st!==1)N=F();else{N=m;const Lt=!M.children.length;for(let dt=0;dt<M.staticCount;dt++)Lt&&(M.children+=N.outerHTML),dt===M.staticCount-1&&(M.anchor=N),N=h(N);return N}break;case Vt:et?N=C(m,M,P,O,K,J):N=F();break;default:if(nt&1)st!==1||M.type.toLowerCase()!==m.tagName.toLowerCase()?N=F():N=v(m,M,P,O,K,J);else if(nt&6){M.slotScopeIds=K;const Lt=d(m);if(e(M,Lt,null,P,O,Hn(Lt),J),N=et?D(m):h(m),N&&Tn(N)&&N.data==="teleport end"&&(N=h(N)),We(M)){let dt;et?(dt=$t(Vt),dt.anchor=N?N.previousSibling:Lt.lastChild):dt=m.nodeType===3?co(""):$t("div"),dt.el=m,M.component.subTree=dt}}else nt&64?st!==8?N=F():N=M.type.hydrate(m,M,P,O,K,J,t,$):nt&128&&(N=M.type.hydrate(m,M,P,O,Hn(d(m)),K,J,t,x))}return Q!=null&&Kn(Q,null,O,M),N},v=(m,M,P,O,K,J)=>{J=J||!!M.dynamicChildren;const{type:et,props:F,patchFlag:Z,shapeFlag:Q,dirs:nt}=M,E=et==="input"&&nt||et==="option";if(E||Z!==-1){if(nt&&Jt(M,null,P,"created"),F)if(E||!J||Z&48)for(const N in F)(E&&N.endsWith("value")||bn(N)&&!pn(N))&&i(m,N,null,F[N],!1,void 0,P);else F.onClick&&i(m,"onClick",null,F.onClick,!1,void 0,P);let st;if((st=F&&F.onVnodeBeforeMount)&&Nt(st,P,M),nt&&Jt(M,null,P,"beforeMount"),((st=F&&F.onVnodeMounted)||nt)&&aa(()=>{st&&Nt(st,P,M),nt&&Jt(M,null,P,"mounted")},O),Q&16&&!(F&&(F.innerHTML||F.textContent))){let N=$(m.firstChild,M,m,P,O,K,J);for(;N;){pe=!0;const Lt=N;N=N.nextSibling,p(Lt)}}else Q&8&&m.textContent!==M.children&&(pe=!0,m.textContent=M.children)}return m.nextSibling},$=(m,M,P,O,K,J,et)=>{et=et||!!M.dynamicChildren;const F=M.children,Z=F.length;for(let Q=0;Q<Z;Q++){const nt=et?F[Q]:F[Q]=Gt(F[Q]);if(m)m=x(m,nt,O,K,J,et);else{if(nt.type===$n&&!nt.children)continue;pe=!0,o(null,nt,P,null,O,K,Hn(P),J)}}return m},C=(m,M,P,O,K,J)=>{const{slotScopeIds:et}=M;et&&(K=K?K.concat(et):et);const F=d(m),Z=$(h(m),M,F,P,O,K,J);return Z&&Tn(Z)&&Z.data==="]"?h(M.anchor=Z):(pe=!0,u(M.anchor=w("]"),F,Z),Z)},H=(m,M,P,O,K,J)=>{if(pe=!0,M.el=null,J){const Z=D(m);for(;;){const Q=h(m);if(Q&&Q!==Z)p(Q);else break}}const et=h(m),F=d(m);return p(m),o(null,M,F,et,P,O,Hn(F),K),et},D=m=>{let M=0;for(;m;)if(m=h(m),m&&Tn(m)&&(m.data==="["&&M++,m.data==="]")){if(M===0)return h(m);M--}return m};return[_,x]}const Dt=aa;function nc(t){return oc(t,ec)}function oc(t,e){const o=Ri();o.__VUE__=!0;const{insert:i,remove:c,patchProp:h,createElement:d,createText:p,createComment:u,setText:w,setElementText:_,parentNode:x,nextSibling:v,setScopeId:$=te,cloneNode:C,insertStaticContent:H}=t,D=(g,k,f,B=null,b=null,S=null,T=!1,A=null,V=!!k.dynamicChildren)=>{if(g===k)return;g&&!Le(g,k)&&(B=U(g),It(g,b,S,!0),g=null),k.patchFlag===-2&&(V=!1,k.dynamicChildren=null);const{type:L,ref:q,shapeFlag:I}=k;switch(L){case $n:m(g,k,f,B);break;case Et:M(g,k,f,B);break;case gn:g==null&&P(k,f,B,T);break;case Vt:st(g,k,f,B,b,S,T,A,V);break;default:I&1?J(g,k,f,B,b,S,T,A,V):I&6?N(g,k,f,B,b,S,T,A,V):(I&64||I&128)&&L.process(g,k,f,B,b,S,T,A,V,ft)}q!=null&&b&&Kn(q,g&&g.ref,S,k||g,!k)},m=(g,k,f,B)=>{if(g==null)i(k.el=p(k.children),f,B);else{const b=k.el=g.el;k.children!==g.children&&w(b,k.children)}},M=(g,k,f,B)=>{g==null?i(k.el=u(k.children||""),f,B):k.el=g.el},P=(g,k,f,B)=>{[g.el,g.anchor]=H(g.children,k,f,B,g.el,g.anchor)},O=({el:g,anchor:k},f,B)=>{let b;for(;g&&g!==k;)b=v(g),i(g,f,B),g=b;i(k,f,B)},K=({el:g,anchor:k})=>{let f;for(;g&&g!==k;)f=v(g),c(g),g=f;c(k)},J=(g,k,f,B,b,S,T,A,V)=>{T=T||k.type==="svg",g==null?et(k,f,B,b,S,T,A,V):Q(g,k,b,S,T,A,V)},et=(g,k,f,B,b,S,T,A)=>{let V,L;const{type:q,props:I,shapeFlag:W,transition:Y,patchFlag:ct,dirs:_t}=g;if(g.el&&C!==void 0&&ct===-1)V=g.el=C(g.el);else{if(V=g.el=d(g.type,S,I&&I.is,I),W&8?_(V,g.children):W&16&&Z(g.children,V,null,B,b,S&&q!=="foreignObject",T,A),_t&&Jt(g,null,B,"created"),I){for(const Mt in I)Mt!=="value"&&!pn(Mt)&&h(V,Mt,null,I[Mt],S,g.children,B,b,R);"value"in I&&h(V,"value",null,I.value),(L=I.onVnodeBeforeMount)&&Nt(L,B,g)}F(V,g,g.scopeId,T,B)}_t&&Jt(g,null,B,"beforeMount");const vt=(!b||b&&!b.pendingBranch)&&Y&&!Y.persisted;vt&&Y.beforeEnter(V),i(V,k,f),((L=I&&I.onVnodeMounted)||vt||_t)&&Dt(()=>{L&&Nt(L,B,g),vt&&Y.enter(V),_t&&Jt(g,null,B,"mounted")},b)},F=(g,k,f,B,b)=>{if(f&&$(g,f),B)for(let S=0;S<B.length;S++)$(g,B[S]);if(b){let S=b.subTree;if(k===S){const T=b.vnode;F(g,T,T.scopeId,T.slotScopeIds,b.parent)}}},Z=(g,k,f,B,b,S,T,A,V=0)=>{for(let L=V;L<g.length;L++){const q=g[L]=A?ve(g[L]):Gt(g[L]);D(null,q,k,f,B,b,S,T,A)}},Q=(g,k,f,B,b,S,T)=>{const A=k.el=g.el;let{patchFlag:V,dynamicChildren:L,dirs:q}=k;V|=g.patchFlag&16;const I=g.props||xt,W=k.props||xt;let Y;f&&ye(f,!1),(Y=W.onVnodeBeforeUpdate)&&Nt(Y,f,k,g),q&&Jt(k,g,f,"beforeUpdate"),f&&ye(f,!0);const ct=b&&k.type!=="foreignObject";if(L?nt(g.dynamicChildren,L,A,f,B,ct,S):T||Rt(g,k,A,null,f,B,ct,S,!1),V>0){if(V&16)E(A,k,I,W,f,B,b);else if(V&2&&I.class!==W.class&&h(A,"class",null,W.class,b),V&4&&h(A,"style",I.style,W.style,b),V&8){const _t=k.dynamicProps;for(let vt=0;vt<_t.length;vt++){const Mt=_t[vt],qt=I[Mt],Te=W[Mt];(Te!==qt||Mt==="value")&&h(A,Mt,qt,Te,b,g.children,f,B,R)}}V&1&&g.children!==k.children&&_(A,k.children)}else!T&&L==null&&E(A,k,I,W,f,B,b);((Y=W.onVnodeUpdated)||q)&&Dt(()=>{Y&&Nt(Y,f,k,g),q&&Jt(k,g,f,"updated")},B)},nt=(g,k,f,B,b,S,T)=>{for(let A=0;A<k.length;A++){const V=g[A],L=k[A],q=V.el&&(V.type===Vt||!Le(V,L)||V.shapeFlag&70)?x(V.el):f;D(V,L,q,null,B,b,S,T,!0)}},E=(g,k,f,B,b,S,T)=>{if(f!==B){for(const A in B){if(pn(A))continue;const V=B[A],L=f[A];V!==L&&A!=="value"&&h(g,A,L,V,T,k.children,b,S,R)}if(f!==xt)for(const A in f)!pn(A)&&!(A in B)&&h(g,A,f[A],null,T,k.children,b,S,R);"value"in B&&h(g,"value",f.value,B.value)}},st=(g,k,f,B,b,S,T,A,V)=>{const L=k.el=g?g.el:p(""),q=k.anchor=g?g.anchor:p("");let{patchFlag:I,dynamicChildren:W,slotScopeIds:Y}=k;Y&&(A=A?A.concat(Y):Y),g==null?(i(L,f,B),i(q,f,B),Z(k.children,f,q,b,S,T,A,V)):I>0&&I&64&&W&&g.dynamicChildren?(nt(g.dynamicChildren,W,f,b,S,T,A),(k.key!=null||b&&k===b.subTree)&&Ba(g,k,!0)):Rt(g,k,f,q,b,S,T,A,V)},N=(g,k,f,B,b,S,T,A,V)=>{k.slotScopeIds=A,g==null?k.shapeFlag&512?b.ctx.activate(k,f,B,T,V):Lt(k,f,B,b,S,T,V):dt(g,k,V)},Lt=(g,k,f,B,b,S,T)=>{const A=g.component=pc(g,B,b);if(Ln(g)&&(A.ctx.renderer=ft),wc(A),A.asyncDep){if(b&&b.registerDep(A,mt),!g.el){const V=A.subTree=$t(Et);M(null,V,k,f)}return}mt(A,g,k,f,b,S,T)},dt=(g,k,f)=>{const B=k.component=g.component;if(bl(g,k,f))if(B.asyncDep&&!B.asyncResolved){wt(B,k,f);return}else B.next=k,xl(B.update),B.update();else k.el=g.el,B.vnode=k},mt=(g,k,f,B,b,S,T)=>{const A=()=>{if(g.isMounted){let{next:q,bu:I,u:W,parent:Y,vnode:ct}=g,_t=q,vt;ye(g,!1),q?(q.el=ct.el,wt(g,q,T)):q=ct,I&&En(I),(vt=q.props&&q.props.onVnodeBeforeUpdate)&&Nt(vt,Y,q,ct),ye(g,!0);const Mt=xo(g),qt=g.subTree;g.subTree=Mt,D(qt,Mt,x(qt.el),U(qt),g,b,S),q.el=Mt.el,_t===null&&Bl(g,Mt.el),W&&Dt(W,b),(vt=q.props&&q.props.onVnodeUpdated)&&Dt(()=>Nt(vt,Y,q,ct),b)}else{let q;const{el:I,props:W}=k,{bm:Y,m:ct,parent:_t}=g,vt=We(k);if(ye(g,!1),Y&&En(Y),!vt&&(q=W&&W.onVnodeBeforeMount)&&Nt(q,_t,k),ye(g,!0),I&&ot){const Mt=()=>{g.subTree=xo(g),ot(I,g.subTree,g,b,null)};vt?k.type.__asyncLoader().then(()=>!g.isUnmounted&&Mt()):Mt()}else{const Mt=g.subTree=xo(g);D(null,Mt,f,B,g,b,S),k.el=Mt.el}if(ct&&Dt(ct,b),!vt&&(q=W&&W.onVnodeMounted)){const Mt=k;Dt(()=>Nt(q,_t,Mt),b)}(k.shapeFlag&256||_t&&We(_t.vnode)&&_t.vnode.shapeFlag&256)&&g.a&&Dt(g.a,b),g.isMounted=!0,k=f=B=null}},V=g.effect=new er(A,()=>cr(L),g.scope),L=g.update=()=>V.run();L.id=g.uid,ye(g,!0),L()},wt=(g,k,f)=>{k.component=g;const B=g.vnode.props;g.vnode=k,g.next=null,Xl(g,k.props,B,f),Yl(g,k.children,f),Je(),no(void 0,g.update),tn()},Rt=(g,k,f,B,b,S,T,A,V=!1)=>{const L=g&&g.children,q=g?g.shapeFlag:0,I=k.children,{patchFlag:W,shapeFlag:Y}=k;if(W>0){if(W&128){se(L,I,f,B,b,S,T,A,V);return}else if(W&256){He(L,I,f,B,b,S,T,A,V);return}}Y&8?(q&16&&R(L,b,S),I!==L&&_(f,I)):q&16?Y&16?se(L,I,f,B,b,S,T,A,V):R(L,b,S,!0):(q&8&&_(f,""),Y&16&&Z(I,f,B,b,S,T,A,V))},He=(g,k,f,B,b,S,T,A,V)=>{g=g||Ne,k=k||Ne;const L=g.length,q=k.length,I=Math.min(L,q);let W;for(W=0;W<I;W++){const Y=k[W]=V?ve(k[W]):Gt(k[W]);D(g[W],Y,f,null,b,S,T,A,V)}L>q?R(g,b,S,!0,!1,I):Z(k,f,B,b,S,T,A,V,I)},se=(g,k,f,B,b,S,T,A,V)=>{let L=0;const q=k.length;let I=g.length-1,W=q-1;for(;L<=I&&L<=W;){const Y=g[L],ct=k[L]=V?ve(k[L]):Gt(k[L]);if(Le(Y,ct))D(Y,ct,f,null,b,S,T,A,V);else break;L++}for(;L<=I&&L<=W;){const Y=g[I],ct=k[W]=V?ve(k[W]):Gt(k[W]);if(Le(Y,ct))D(Y,ct,f,null,b,S,T,A,V);else break;I--,W--}if(L>I){if(L<=W){const Y=W+1,ct=Y<q?k[Y].el:B;for(;L<=W;)D(null,k[L]=V?ve(k[L]):Gt(k[L]),f,ct,b,S,T,A,V),L++}}else if(L>W)for(;L<=I;)It(g[L],b,S,!0),L++;else{const Y=L,ct=L,_t=new Map;for(L=ct;L<=W;L++){const Ht=k[L]=V?ve(k[L]):Gt(k[L]);Ht.key!=null&&_t.set(Ht.key,L)}let vt,Mt=0;const qt=W-ct+1;let Te=!1,xr=0;const sn=new Array(qt);for(L=0;L<qt;L++)sn[L]=0;for(L=Y;L<=I;L++){const Ht=g[L];if(Mt>=qt){It(Ht,b,S,!0);continue}let Qt;if(Ht.key!=null)Qt=_t.get(Ht.key);else for(vt=ct;vt<=W;vt++)if(sn[vt-ct]===0&&Le(Ht,k[vt])){Qt=vt;break}Qt===void 0?It(Ht,b,S,!0):(sn[Qt-ct]=L+1,Qt>=xr?xr=Qt:Te=!0,D(Ht,k[Qt],f,null,b,S,T,A,V),Mt++)}const mr=Te?rc(sn):Ne;for(vt=mr.length-1,L=qt-1;L>=0;L--){const Ht=ct+L,Qt=k[Ht],fr=Ht+1<q?k[Ht+1].el:B;sn[L]===0?D(null,Qt,f,fr,b,S,T,A,V):Te&&(vt<0||L!==mr[vt]?Zt(Qt,f,fr,2):vt--)}}},Zt=(g,k,f,B,b=null)=>{const{el:S,type:T,transition:A,children:V,shapeFlag:L}=g;if(L&6){Zt(g.component.subTree,k,f,B);return}if(L&128){g.suspense.move(k,f,B);return}if(L&64){T.move(g,k,f,ft);return}if(T===Vt){i(S,k,f);for(let I=0;I<V.length;I++)Zt(V[I],k,f,B);i(g.anchor,k,f);return}if(T===gn){O(g,k,f);return}if(B!==2&&L&1&&A)if(B===0)A.beforeEnter(S),i(S,k,f),Dt(()=>A.enter(S),b);else{const{leave:I,delayLeave:W,afterLeave:Y}=A,ct=()=>i(S,k,f),_t=()=>{I(S,()=>{ct(),Y&&Y()})};W?W(S,ct,_t):_t()}else i(S,k,f)},It=(g,k,f,B=!1,b=!1)=>{const{type:S,props:T,ref:A,children:V,dynamicChildren:L,shapeFlag:q,patchFlag:I,dirs:W}=g;if(A!=null&&Kn(A,null,f,g,!0),q&256){k.ctx.deactivate(g);return}const Y=q&1&&W,ct=!We(g);let _t;if(ct&&(_t=T&&T.onVnodeBeforeUnmount)&&Nt(_t,k,g),q&6)z(g.component,f,B);else{if(q&128){g.suspense.unmount(f,B);return}Y&&Jt(g,null,k,"beforeUnmount"),q&64?g.type.remove(g,k,f,b,ft,B):L&&(S!==Vt||I>0&&I&64)?R(L,k,f,!1,!0):(S===Vt&&I&384||!b&&q&16)&&R(V,k,f),B&&vo(g)}(ct&&(_t=T&&T.onVnodeUnmounted)||Y)&&Dt(()=>{_t&&Nt(_t,k,g),Y&&Jt(g,null,k,"unmounted")},f)},vo=g=>{const{type:k,el:f,anchor:B,transition:b}=g;if(k===Vt){y(f,B);return}if(k===gn){K(g);return}const S=()=>{c(f),b&&!b.persisted&&b.afterLeave&&b.afterLeave()};if(g.shapeFlag&1&&b&&!b.persisted){const{leave:T,delayLeave:A}=b,V=()=>T(f,S);A?A(g.el,S,V):V()}else S()},y=(g,k)=>{let f;for(;g!==k;)f=v(g),c(g),g=f;c(k)},z=(g,k,f)=>{const{bum:B,scope:b,update:S,subTree:T,um:A}=g;B&&En(B),b.stop(),S&&(S.active=!1,It(T,g,k,f)),A&&Dt(A,k),Dt(()=>{g.isUnmounted=!0},k),k&&k.pendingBranch&&!k.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===k.pendingId&&(k.deps--,k.deps===0&&k.resolve())},R=(g,k,f,B=!1,b=!1,S=0)=>{for(let T=S;T<g.length;T++)It(g[T],k,f,B,b)},U=g=>g.shapeFlag&6?U(g.component.subTree):g.shapeFlag&128?g.suspense.next():v(g.anchor||g.el),gt=(g,k,f)=>{g==null?k._vnode&&It(k._vnode,null,null,!0):D(k._vnode||null,g,k,null,null,null,f),Un(),k._vnode=g},ft={p:D,um:It,m:Zt,r:vo,mt:Lt,mc:Z,pc:Rt,pbc:nt,n:U,o:t};let at,ot;return e&&([at,ot]=e(ft)),{render:gt,hydrate:at,createApp:tc(gt,at)}}function ye({effect:t,update:e},o){t.allowRecurse=e.allowRecurse=o}function Ba(t,e,o=!1){const i=t.children,c=e.children;if(X(i)&&X(c))for(let h=0;h<i.length;h++){const d=i[h];let p=c[h];p.shapeFlag&1&&!p.dynamicChildren&&((p.patchFlag<=0||p.patchFlag===32)&&(p=c[h]=ve(c[h]),p.el=d.el),o||Ba(d,p))}}function rc(t){const e=t.slice(),o=[0];let i,c,h,d,p;const u=t.length;for(i=0;i<u;i++){const w=t[i];if(w!==0){if(c=o[o.length-1],t[c]<w){e[i]=c,o.push(i);continue}for(h=0,d=o.length-1;h<d;)p=h+d>>1,t[o[p]]<w?h=p+1:d=p;w<t[o[h]]&&(h>0&&(e[i]=o[h-1]),o[h]=i)}}for(h=o.length,d=o[h-1];h-- >0;)o[h]=d,d=e[d];return o}const sc=t=>t.__isTeleport,Vt=Symbol(void 0),$n=Symbol(void 0),Et=Symbol(void 0),gn=Symbol(void 0),_n=[];let Xt=null;function s(t=!1){_n.push(Xt=t?null:[])}function ac(){_n.pop(),Xt=_n[_n.length-1]||null}let yn=1;function Nr(t){yn+=t}function ja(t){return t.dynamicChildren=yn>0?Xt||Ne:null,ac(),yn>0&&Xt&&Xt.push(t),t}function a(t,e,o,i,c,h){return ja(n(t,e,o,i,c,h,!0))}function io(t,e,o,i,c){return ja($t(t,e,o,i,c,!0))}function Xn(t){return t?t.__v_isVNode===!0:!1}function Le(t,e){return t.type===e.type&&t.key===e.key}const lo="__vInternal",La=({key:t})=>t!=null?t:null,On=({ref:t,ref_key:e,ref_for:o})=>t!=null?ut(t)||jt(t)||tt(t)?{i:Pt,r:t,k:e,f:!!o}:t:null;function n(t,e=null,o=null,i=0,c=null,h=t===Vt?0:1,d=!1,p=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&La(e),ref:e&&On(e),scopeId:sa,slotScopeIds:null,children:o,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:h,patchFlag:i,dynamicProps:c,dynamicChildren:null,appContext:null};return p?(pr(u,o),h&128&&t.normalize(u)):o&&(u.shapeFlag|=ut(o)?8:16),yn>0&&!d&&Xt&&(u.patchFlag>0||h&6)&&u.patchFlag!==32&&Xt.push(u),u}const $t=ic;function ic(t,e=null,o=null,i=0,c=null,h=!1){if((!t||t===ga)&&(t=Et),Xn(t)){const p=$e(t,e,!0);return o&&pr(p,o),yn>0&&!h&&Xt&&(p.shapeFlag&6?Xt[Xt.indexOf(t)]=p:Xt.push(p)),p.patchFlag|=-2,p}if(xc(t)&&(t=t.__vccOpts),e){e=lc(e);let{class:p,style:u}=e;p&&!ut(p)&&(e.class=Qe(p)),Ct(u)&&(Gs(u)&&!X(u)&&(u=At({},u)),e.style=Re(u))}const d=ut(t)?1:jl(t)?128:sc(t)?64:Ct(t)?4:tt(t)?2:0;return n(t,e,o,i,c,d,h,!0)}function lc(t){return t?Gs(t)||lo in t?At({},t):t:null}function $e(t,e,o=!1){const{props:i,ref:c,patchFlag:h,children:d}=t,p=e?cc(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:p,key:p&&La(p),ref:e&&e.ref?o&&c?X(c)?c.concat(On(e)):[c,On(e)]:On(e):c,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:d,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Vt?h===-1?16:h|16:h,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&$e(t.ssContent),ssFallback:t.ssFallback&&$e(t.ssFallback),el:t.el,anchor:t.anchor}}function co(t=" ",e=0){return $t($n,null,t,e)}function l(t,e){const o=$t(gn,null,t);return o.staticCount=e,o}function Zn(t,e){return e?(s(),io(Et,null,t)):$t(Et,null,t)}function Gt(t){return t==null||typeof t=="boolean"?$t(Et):X(t)?$t(Vt,null,t.slice()):typeof t=="object"?ve(t):$t($n,null,String(t))}function ve(t){return t.el===null||t.memo?t:$e(t)}function pr(t,e){let o=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(X(e))o=16;else if(typeof e=="object")if(i&65){const c=e.default;c&&(c._c&&(c._d=!1),pr(t,c()),c._c&&(c._d=!0));return}else{o=32;const c=e._;!c&&!(lo in e)?e._ctx=Pt:c===3&&Pt&&(Pt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else tt(e)?(e={default:e,_ctx:Pt},o=32):(e=String(e),i&64?(o=16,e=[co(e)]):o=8);t.children=e,t.shapeFlag|=o}function cc(...t){const e={};for(let o=0;o<t.length;o++){const i=t[o];for(const c in i)if(c==="class")e.class!==i.class&&(e.class=Qe([e.class,i.class]));else if(c==="style")e.style=Re([e.style,i.style]);else if(bn(c)){const h=e[c],d=i[c];d&&h!==d&&!(X(h)&&h.includes(d))&&(e[c]=h?[].concat(h,d):d)}else c!==""&&(e[c]=i[c])}return e}function Nt(t,e,o,i=null){Ut(t,e,7,[o,i])}const hc=ba();let dc=0;function pc(t,e,o){const i=t.type,c=(e?e.appContext:t.appContext)||hc,h={uid:dc++,vnode:t,type:i,parent:e,appContext:c,root:null,next:null,subTree:null,effect:null,update:null,scope:new Hi(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(c.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ma(i,c),emitsOptions:ra(i,c),emit:null,emitted:null,propsDefaults:xt,inheritAttrs:i.inheritAttrs,ctx:xt,data:xt,props:xt,attrs:xt,slots:xt,refs:xt,setupState:xt,setupContext:null,suspense:o,suspenseId:o?o.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return h.ctx={_:h},h.root=e?e.root:h,h.emit=Ml.bind(null,h),t.ce&&t.ce(h),h}let bt=null;const uc=()=>bt||Pt,Ge=t=>{bt=t,t.scope.on()},Ve=()=>{bt&&bt.scope.off(),bt=null};function Aa(t){return t.vnode.shapeFlag&4}let Ke=!1;function wc(t,e=!1){Ke=e;const{props:o,children:i}=t.vnode,c=Aa(t);Kl(t,o,c,e),Ql(t,i);const h=c?gc(t,e):void 0;return Ke=!1,h}function gc(t,e){const o=t.type;t.accessCache=Object.create(null),t.proxy=Ks(new Proxy(t.ctx,zl));const{setup:i}=o;if(i){const c=t.setupContext=i.length>1?vc(t):null;Ge(t),Je();const h=fe(i,t,0,[t.props,c]);if(tn(),Ve(),Vs(h)){if(h.then(Ve,Ve),e)return h.then(d=>{Ur(t,d,e)}).catch(d=>{jn(d,t,0)});t.asyncDep=h}else Ur(t,h,e)}else Pa(t,e)}function Ur(t,e,o){tt(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ct(e)&&(t.setupState=Ys(e)),Pa(t,o)}let qr;function Pa(t,e,o){const i=t.type;if(!t.render){if(!e&&qr&&!i.render){const c=i.template;if(c){const{isCustomElement:h,compilerOptions:d}=t.appContext.config,{delimiters:p,compilerOptions:u}=i,w=At(At({isCustomElement:h,delimiters:p},d),u);i.render=qr(c,w)}}t.render=i.render||te}Ge(t),Je(),Nl(t),tn(),Ve()}function _c(t){return new Proxy(t.attrs,{get(e,o){return Ot(t,"get","$attrs"),e[o]}})}function vc(t){const e=i=>{t.exposed=i||{}};let o;return{get attrs(){return o||(o=_c(t))},slots:t.slots,emit:t.emit,expose:e}}function ho(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Ys(Ks(t.exposed)),{get(e,o){if(o in e)return e[o];if(o in Wn)return Wn[o](t)}}))}function kc(t){return tt(t)&&t.displayName||t.name}function xc(t){return tt(t)&&"__vccOpts"in t}const it=(t,e)=>_l(t,e,Ke);function rt(t,e,o){const i=arguments.length;return i===2?Ct(e)&&!X(e)?Xn(e)?$t(t,null,[e]):$t(t,e):$t(t,null,e):(i>3?o=Array.prototype.slice.call(arguments,2):i===3&&Xn(o)&&(o=[o]),$t(t,e,o))}const mc="3.2.36",fc="http://www.w3.org/2000/svg",Ae=typeof document!="undefined"?document:null,Wr=Ae&&Ae.createElement("template"),Mc={insert:(t,e,o)=>{e.insertBefore(t,o||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,o,i)=>{const c=e?Ae.createElementNS(fc,t):Ae.createElement(t,o?{is:o}:void 0);return t==="select"&&i&&i.multiple!=null&&c.setAttribute("multiple",i.multiple),c},createText:t=>Ae.createTextNode(t),createComment:t=>Ae.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ae.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,o,i,c,h){const d=o?o.previousSibling:e.lastChild;if(c&&(c===h||c.nextSibling))for(;e.insertBefore(c.cloneNode(!0),o),!(c===h||!(c=c.nextSibling)););else{Wr.innerHTML=i?`<svg>${t}</svg>`:t;const p=Wr.content;if(i){const u=p.firstChild;for(;u.firstChild;)p.appendChild(u.firstChild);p.removeChild(u)}e.insertBefore(p,o)}return[d?d.nextSibling:e.firstChild,o?o.previousSibling:e.lastChild]}};function $c(t,e,o){const i=t._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):o?t.setAttribute("class",e):t.className=e}function yc(t,e,o){const i=t.style,c=ut(o);if(o&&!c){for(const h in o)No(i,h,o[h]);if(e&&!ut(e))for(const h in e)o[h]==null&&No(i,h,"")}else{const h=i.display;c?e!==o&&(i.cssText=o):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=h)}}const Gr=/\s*!important$/;function No(t,e,o){if(X(o))o.forEach(i=>No(t,e,i));else if(o==null&&(o=""),e.startsWith("--"))t.setProperty(e,o);else{const i=Cc(t,e);Gr.test(o)?t.setProperty(Ye(i),o.replace(Gr,""),"important"):t[i]=o}}const Kr=["Webkit","Moz","ms"],Mo={};function Cc(t,e){const o=Mo[e];if(o)return o;let i=ne(e);if(i!=="filter"&&i in t)return Mo[e]=i;i=to(i);for(let c=0;c<Kr.length;c++){const h=Kr[c]+i;if(h in t)return Mo[e]=h}return e}const Xr="http://www.w3.org/1999/xlink";function bc(t,e,o,i,c){if(i&&e.startsWith("xlink:"))o==null?t.removeAttributeNS(Xr,e.slice(6,e.length)):t.setAttributeNS(Xr,e,o);else{const h=Ci(e);o==null||h&&!As(o)?t.removeAttribute(e):t.setAttribute(e,h?"":o)}}function Bc(t,e,o,i,c,h,d){if(e==="innerHTML"||e==="textContent"){i&&d(i,c,h),t[e]=o==null?"":o;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=o;const u=o==null?"":o;(t.value!==u||t.tagName==="OPTION")&&(t.value=u),o==null&&t.removeAttribute(e);return}let p=!1;if(o===""||o==null){const u=typeof t[e];u==="boolean"?o=As(o):o==null&&u==="string"?(o="",p=!0):u==="number"&&(o=0,p=!0)}try{t[e]=o}catch{}p&&t.removeAttribute(e)}const[Sa,jc]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const o=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(o&&Number(o[1])<=53)}return[t,e]})();let Uo=0;const Lc=Promise.resolve(),Ac=()=>{Uo=0},Pc=()=>Uo||(Lc.then(Ac),Uo=Sa());function Ie(t,e,o,i){t.addEventListener(e,o,i)}function Sc(t,e,o,i){t.removeEventListener(e,o,i)}function Dc(t,e,o,i,c=null){const h=t._vei||(t._vei={}),d=h[e];if(i&&d)d.value=i;else{const[p,u]=Vc(e);if(i){const w=h[e]=Rc(i,c);Ie(t,p,w,u)}else d&&(Sc(t,p,d,u),h[e]=void 0)}}const Zr=/(?:Once|Passive|Capture)$/;function Vc(t){let e;if(Zr.test(t)){e={};let o;for(;o=t.match(Zr);)t=t.slice(0,t.length-o[0].length),e[o[0].toLowerCase()]=!0}return[Ye(t.slice(2)),e]}function Rc(t,e){const o=i=>{const c=i.timeStamp||Sa();(jc||c>=o.attached-1)&&Ut(Hc(i,o.value),e,5,[i])};return o.value=t,o.attached=Pc(),o}function Hc(t,e){if(X(e)){const o=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{o.call(t),t._stopped=!0},e.map(i=>c=>!c._stopped&&i&&i(c))}else return e}const Qr=/^on[a-z]/,Tc=(t,e,o,i,c=!1,h,d,p,u)=>{e==="class"?$c(t,i,c):e==="style"?yc(t,o,i):bn(e)?Zo(e)||Dc(t,e,o,i,d):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Fc(t,e,i,c))?Bc(t,e,i,h,d,p,u):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),bc(t,e,i,c))};function Fc(t,e,o,i){return i?!!(e==="innerHTML"||e==="textContent"||e in t&&Qr.test(e)&&tt(o)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Qr.test(e)&&ut(o)?!1:e in t}const ue="transition",an="animation",ur=(t,{slots:e})=>rt(ca,Ec(t),e);ur.displayName="Transition";const Da={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};ur.props=At({},ca.props,Da);const Ce=(t,e)=>{X(t)?t.forEach(o=>o(...e)):t&&t(...e)},Yr=t=>t?X(t)?t.some(e=>e.length>1):t.length>1:!1;function Ec(t){const e={};for(const E in t)E in Da||(e[E]=t[E]);if(t.css===!1)return e;const{name:o="v",type:i,duration:c,enterFromClass:h=`${o}-enter-from`,enterActiveClass:d=`${o}-enter-active`,enterToClass:p=`${o}-enter-to`,appearFromClass:u=h,appearActiveClass:w=d,appearToClass:_=p,leaveFromClass:x=`${o}-leave-from`,leaveActiveClass:v=`${o}-leave-active`,leaveToClass:$=`${o}-leave-to`}=t,C=Oc(c),H=C&&C[0],D=C&&C[1],{onBeforeEnter:m,onEnter:M,onEnterCancelled:P,onLeave:O,onLeaveCancelled:K,onBeforeAppear:J=m,onAppear:et=M,onAppearCancelled:F=P}=e,Z=(E,st,N)=>{be(E,st?_:p),be(E,st?w:d),N&&N()},Q=(E,st)=>{E._isLeaving=!1,be(E,x),be(E,$),be(E,v),st&&st()},nt=E=>(st,N)=>{const Lt=E?et:M,dt=()=>Z(st,E,N);Ce(Lt,[st,dt]),Jr(()=>{be(st,E?u:h),we(st,E?_:p),Yr(Lt)||ts(st,i,H,dt)})};return At(e,{onBeforeEnter(E){Ce(m,[E]),we(E,h),we(E,d)},onBeforeAppear(E){Ce(J,[E]),we(E,u),we(E,w)},onEnter:nt(!1),onAppear:nt(!0),onLeave(E,st){E._isLeaving=!0;const N=()=>Q(E,st);we(E,x),Nc(),we(E,v),Jr(()=>{!E._isLeaving||(be(E,x),we(E,$),Yr(O)||ts(E,i,D,N))}),Ce(O,[E,N])},onEnterCancelled(E){Z(E,!1),Ce(P,[E])},onAppearCancelled(E){Z(E,!0),Ce(F,[E])},onLeaveCancelled(E){Q(E),Ce(K,[E])}})}function Oc(t){if(t==null)return null;if(Ct(t))return[$o(t.enter),$o(t.leave)];{const e=$o(t);return[e,e]}}function $o(t){return zn(t)}function we(t,e){e.split(/\s+/).forEach(o=>o&&t.classList.add(o)),(t._vtc||(t._vtc=new Set)).add(e)}function be(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const{_vtc:o}=t;o&&(o.delete(e),o.size||(t._vtc=void 0))}function Jr(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Ic=0;function ts(t,e,o,i){const c=t._endId=++Ic,h=()=>{c===t._endId&&i()};if(o)return setTimeout(h,o);const{type:d,timeout:p,propCount:u}=zc(t,e);if(!d)return i();const w=d+"end";let _=0;const x=()=>{t.removeEventListener(w,v),h()},v=$=>{$.target===t&&++_>=u&&x()};setTimeout(()=>{_<u&&x()},p+1),t.addEventListener(w,v)}function zc(t,e){const o=window.getComputedStyle(t),i=C=>(o[C]||"").split(", "),c=i(ue+"Delay"),h=i(ue+"Duration"),d=es(c,h),p=i(an+"Delay"),u=i(an+"Duration"),w=es(p,u);let _=null,x=0,v=0;e===ue?d>0&&(_=ue,x=d,v=h.length):e===an?w>0&&(_=an,x=w,v=u.length):(x=Math.max(d,w),_=x>0?d>w?ue:an:null,v=_?_===ue?h.length:u.length:0);const $=_===ue&&/\b(transform|all)(,|$)/.test(o[ue+"Property"]);return{type:_,timeout:x,propCount:v,hasTransform:$}}function es(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((o,i)=>ns(o)+ns(t[i])))}function ns(t){return Number(t.slice(0,-1).replace(",","."))*1e3}function Nc(){return document.body.offsetHeight}const os=t=>{const e=t.props["onUpdate:modelValue"]||!1;return X(e)?o=>En(e,o):e};function Uc(t){t.target.composing=!0}function rs(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const BQt={created(t,{modifiers:{lazy:e,trim:o,number:i}},c){t._assign=os(c);const h=i||c.props&&c.props.type==="number";Ie(t,e?"change":"input",d=>{if(d.target.composing)return;let p=t.value;o&&(p=p.trim()),h&&(p=zn(p)),t._assign(p)}),o&&Ie(t,"change",()=>{t.value=t.value.trim()}),e||(Ie(t,"compositionstart",Uc),Ie(t,"compositionend",rs),Ie(t,"change",rs))},mounted(t,{value:e}){t.value=e==null?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:o,trim:i,number:c}},h){if(t._assign=os(h),t.composing||document.activeElement===t&&t.type!=="range"&&(o||i&&t.value.trim()===e||(c||t.type==="number")&&zn(t.value)===e))return;const d=e==null?"":e;t.value!==d&&(t.value=d)}},jQt={beforeMount(t,{value:e},{transition:o}){t._vod=t.style.display==="none"?"":t.style.display,o&&e?o.beforeEnter(t):ln(t,e)},mounted(t,{value:e},{transition:o}){o&&e&&o.enter(t)},updated(t,{value:e,oldValue:o},{transition:i}){!e!=!o&&(i?e?(i.beforeEnter(t),ln(t,!0),i.enter(t)):i.leave(t,()=>{ln(t,!1)}):ln(t,e))},beforeUnmount(t,{value:e}){ln(t,e)}};function ln(t,e){t.style.display=e?t._vod:"none"}const qc=At({patchProp:Tc},Mc);let yo,ss=!1;function Wc(){return yo=ss?yo:nc(qc),ss=!0,yo}const Gc=(...t)=>{const e=Wc().createApp(...t),{mount:o}=e;return e.mount=i=>{const c=Kc(i);if(c)return o(c,!0,c instanceof SVGElement)},e};function Kc(t){return ut(t)?document.querySelector(t):t}const Xc={base:"/",lang:"en-US",title:"wangfunfun",description:"Stay hungry, stay foolish.",head:[],locales:{}};var Zc=([t,e,o])=>t==="meta"&&e.name?`${t}.${e.name}`:["title","base"].includes(t)?t:t==="template"&&e.id?`${t}.${e.id}`:JSON.stringify([t,e,o]),Qc=t=>{const e=new Set,o=[];return t.forEach(i=>{const c=Zc(i);e.has(c)||(e.add(c),o.push(i))}),o},Yc=t=>/^(https?:)?\/\//.test(t),LQt=t=>/^mailto:/.test(t),AQt=t=>/^tel:/.test(t),Va=t=>Object.prototype.toString.call(t)==="[object Object]",Jc=t=>t.replace(/\/$/,""),th=t=>t.replace(/^\//,""),Ra=(t,e)=>{const o=Object.keys(t).sort((i,c)=>{const h=c.split("/").length-i.split("/").length;return h!==0?h:c.length-i.length});for(const i of o)if(e.startsWith(i))return i;return"/"};const Ha={"v-8daa1a0e":G(()=>j(()=>import("./index.html.c7d00a98.js"),[])),"v-6bb1ef33":G(()=>j(()=>import("./guide.html.ddf23edf.js"),[])),"v-6d7f747f":G(()=>j(()=>import("./github.html.c2c7aa72.js"),[])),"v-68c2b3ff":G(()=>j(()=>import("./jdk.html.c2e4634f.js"),[])),"v-d6a742d2":G(()=>j(()=>import("./nodejs.html.83ff950e.js"),[])),"v-5e8d5b5a":G(()=>j(()=>import("./index.html.80b2e72d.js"),[])),"v-35214767":G(()=>j(()=>import("./android-studio.html.6091d8d4.js"),[])),"v-4e26139e":G(()=>j(()=>import("./final-shell.html.b14f92f7.js"),[])),"v-ff4e889c":G(()=>j(()=>import("./git-tortoise-git.html.4434703b.js"),[])),"v-35284912":G(()=>j(()=>import("./hbuilderx.html.1537d405.js"),[])),"v-2399ab96":G(()=>j(()=>import("./mysql.html.2f06efd0.js"),[])),"v-6e9c09a7":G(()=>j(()=>import("./navicat.html.1e8c1738.js"),[])),"v-1abb939c":G(()=>j(()=>import("./nvm-windows.html.46347b84.js"),[])),"v-2924399d":G(()=>j(()=>import("./postman.html.3c3372f5.js"),[])),"v-189ad218":G(()=>j(()=>import("./tortoise-svn.html.c1d3f3e6.js"),[])),"v-0c27101e":G(()=>j(()=>import("./vscode.html.7b8de023.js"),[])),"v-c2ec2e46":G(()=>j(()=>import("./wx-ide.html.58d926bf.js"),[])),"v-9387505a":G(()=>j(()=>import("./css-sass-less.html.c4a9dc80.js"),[])),"v-5aa3780f":G(()=>j(()=>import("./git.html.2285bf27.js"),[])),"v-715f8278":G(()=>j(()=>import("./javascript.html.450f0517.js"),[])),"v-1a7947b4":G(()=>j(()=>import("./nodejs.html.34acae2c.js"),[])),"v-87653efc":G(()=>j(()=>import("./react.html.41d6e7de.js"),[])),"v-033c8aa8":G(()=>j(()=>import("./typescript.html.ccb24cb2.js"),[])),"v-e259c100":G(()=>j(()=>import("./uniapp.html.ae5b7363.js"),[])),"v-5bf1a24a":G(()=>j(()=>import("./vue.html.3992eb92.js"),[])),"v-4b4887bc":G(()=>j(()=>import("./\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F.html.9149bf68.js"),[])),"v-acdd9360":G(()=>j(()=>import("./api.html.eb9e1417.js"),[])),"v-5cd03a29":G(()=>j(()=>import("./home.html.5408d097.js"),[])),"v-456cc6d6":G(()=>j(()=>import("./plugin.html.58509368.js"),[])),"v-65959fc1":G(()=>j(()=>import("./theme.html.e16c5c50.js"),[])),"v-32598bfc":G(()=>j(()=>import("./121501.html.d6576c3e.js"),[])),"v-2eb9b31a":G(()=>j(()=>import("./092101.html.f488e280.js"),[])),"v-19e56119":G(()=>j(()=>import("./121501.html.595bb603.js"),[])),"v-16458837":G(()=>j(()=>import("./092101.html.fc2b58b9.js"),[])),"v-3706649a":G(()=>j(()=>import("./404.html.2cdf0478.js"),[])),"v-16736bd8":G(()=>j(()=>import("./index.html.952c83d7.js"),[])),"v-290a88b4":G(()=>j(()=>import("./index.html.8927728c.js"),[])),"v-290afd13":G(()=>j(()=>import("./index.html.60d4238a.js"),[])),"v-b5b53d90":G(()=>j(()=>import("./index.html.e36714e3.js"),[])),"v-b5b6264e":G(()=>j(()=>import("./index.html.a2aa4fe1.js"),[])),"v-b5b36c14":G(()=>j(()=>import("./index.html.c44b47e8.js"),[])),"v-b5b454d2":G(()=>j(()=>import("./index.html.57b5d18c.js"),[])),"v-01560935":G(()=>j(()=>import("./index.html.b7c4fc75.js"),[])),"v-03d52fd3":G(()=>j(()=>import("./index.html.8c32edc4.js"),[])),"v-03d52ff2":G(()=>j(()=>import("./index.html.9e06ea48.js"),[])),"v-03d53011":G(()=>j(()=>import("./index.html.53a94ccf.js"),[]))},eh={404:G(()=>j(()=>import("./404.871a79e0.js"),[])),Categories:G(()=>j(()=>import("./Categories.d61ebae3.js"),["assets/Categories.d61ebae3.js","assets/Pagation.e2ec643a.js"])),Layout:G(()=>j(()=>import("./Layout.871f888e.js"),["assets/Layout.871f888e.js","assets/Pagation.e2ec643a.js"])),Post:G(()=>j(()=>import("./Post.785c9c59.js"),[])),Timeline:G(()=>j(()=>import("./Timeline.e0ed541b.js"),[]))};var Ta=Bt($i),Fa=sr({key:"",path:"",title:"",lang:"",frontmatter:{},excerpt:"",headers:[]}),le=Bt(Fa),po=()=>le;_o.webpackHot&&(__VUE_HMR_RUNTIME__.updatePageData=t=>{Ta.value[t.key]=()=>Promise.resolve(t),t.key===le.value.key&&(le.value=t)});var Ea=Symbol(""),nh=()=>{const t=yt(Ea);if(!t)throw new Error("usePageFrontmatter() is called without provider.");return t},Oa=Symbol(""),oh=()=>{const t=yt(Oa);if(!t)throw new Error("usePageHead() is called without provider.");return t},rh=Symbol(""),Ia=Symbol(""),sh=()=>{const t=yt(Ia);if(!t)throw new Error("usePageLang() is called without provider.");return t},wr=Symbol(""),za=()=>{const t=yt(wr);if(!t)throw new Error("useRouteLocale() is called without provider.");return t},xe=Bt(Xc),Na=()=>xe;_o.webpackHot&&(__VUE_HMR_RUNTIME__.updateSiteData=t=>{xe.value=t});var Ua=Symbol(""),PQt=()=>{const t=yt(Ua);if(!t)throw new Error("useSiteLocaleData() is called without provider.");return t},ah=Symbol(""),je=en({resolvePageData:async t=>{const e=Ta.value[t],o=await(e==null?void 0:e());return o!=null?o:Fa},resolvePageFrontmatter:t=>t.frontmatter,resolvePageHead:(t,e,o)=>{const i=ut(e.description)?e.description:o.description,c=[...X(e.head)?e.head:[],...o.head,["title",{},t],["meta",{name:"description",content:i}]];return Qc(c)},resolvePageHeadTitle:(t,e)=>`${t.title?`${t.title} | `:""}${e.title}`,resolvePageLang:t=>t.lang||"en",resolveRouteLocale:(t,e)=>Ra(t,e),resolveSiteLocaleData:(t,e)=>Tt(Tt({},t),t.locales[e])}),ih=r({name:"ClientOnly",setup(t,e){const o=Bt(!1);return oe(()=>{o.value=!0}),()=>{var i,c;return o.value?(c=(i=e.slots).default)==null?void 0:c.call(i):null}}}),lh=r({name:"Content",props:{pageKey:{type:String,required:!1,default:""}},setup(t){const e=po(),o=it(()=>Ha[t.pageKey||e.value.key]);return()=>o.value?rt(o.value):rt("div","404 Not Found")}}),as=r({name:"Vuepress",setup(){const t=po(),e=it(()=>{let o;if(t.value.path){const i=t.value.frontmatter.layout;ut(i)?o=i:o="Layout"}else o="404";return eh[o]||wa(o,!1)});return()=>rt(e.value)}}),ch=t=>Yc(t)?t:`${Na().value.base}${th(t)}`,re=t=>t;const hh={style:"@vuepress-reco/style-default",logo:"/logo.png",author:"wangfunfun",docsRepo:"https://github.com/vuepress-reco/vuepress-theme-reco-next",docsBranch:"main",docsDir:"example",series:{},navbar:[{text:"\u9996\u9875",link:"/"},{text:"\u6587\u7AE0",link:"/docs/projects/index.md"},{text:"\u6280\u672F\u6587\u6863",children:[{text:"\u524D\u7AEF\u5F00\u53D1",children:[{text:"Vue",link:"/docs/technology/vue.md"},{text:"React",link:"/docs/technology/react.md"},{text:"Uniapp",link:"/docs/technology/uniapp.md"},{text:"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F",link:"/docs/technology/\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F.md"},{text:"Css/Sass/Less",link:"/docs/technology/css-sass-less.md"},{text:"JavaScript",link:"/docs/technology/javascript.md"},{text:"TypeScript",link:"/docs/technology/typescript.md"},{text:"Node.js",link:"/docs/technology/nodejs.md"}]},{text:"Flutter",children:[]},{text:"C++",children:[]}]},{text:"\u5F00\u53D1\u73AF\u5883",children:[{text:"Node.js",link:"/docs/environment/nodejs.md"},{text:"JDK",link:"/docs/environment/jdk.md"},{text:"Github",link:"/docs/environment/github.md"}]},{text:"\u8F6F\u4EF6\u5DE5\u5177",children:[{text:"\u7F16\u8BD1\u5668",children:[{text:"Visual Studio Code",link:"/docs/softwares/vscode.md"},{text:"HBuilder X",link:"/docs/softwares/HbuilderX.md"},{text:"\u5FAE\u4FE1\u5F00\u53D1\u8005\u5DE5\u5177",link:"/docs/softwares/wx-ide.md"},{text:"Android Studio",link:"/docs/softwares/android-studio.md"}]},{text:"\u4EE3\u7801\u7BA1\u7406",children:[{text:"Git / Tortoise Git",link:"/docs/softwares/git-tortoise-git.md"},{text:"Tortoise Svn",link:"/docs/softwares/tortoise-svn.md"}]},{text:"\u6570\u636E\u5E93",children:[{text:"MySQL",link:"/docs/softwares/mysql.md"},{text:"Navicat",link:"/docs/softwares/navicat.md"}]},{text:"\u5176\u4ED6\u5DE5\u5177",children:[{text:"Final Shell",link:"/docs/softwares/final-shell.md"},{text:"Nvm for Windows",link:"/docs/softwares/nvm-windows.md"},{text:"PostMan",link:"/docs/softwares/postman.md"}]}]},{text:"Github",link:"https://github.com/wangfunfun",icon:"reco-github"},{text:"Gitee",link:"https://gitee.com/wangfunfun",icon:"reco-mayun"}]},qa=Bt(hh),dh=()=>qa;_o.webpackHot&&(__VUE_HMR_RUNTIME__.updateThemeData=t=>{qa.value=t});const Wa=Symbol(""),uo=()=>{const t=yt(Wa);if(!t)throw new Error("useThemeLocaleData() is called without provider.");return t},ph=(t,e)=>{var o;return Tt(Tt({},t),(o=t.locales)==null?void 0:o[e])};var uh=re({enhance({app:t}){const e=dh(),o=t._context.provides[wr],i=it(()=>ph(e.value,o.value));t.provide(Wa,i),Object.defineProperties(t.config.globalProperties,{$theme:{get(){return e.value}},$themeLocale:{get(){return i.value}}})}});/*!
  * vue-router v4.0.15
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ga=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",nn=t=>Ga?Symbol(t):"_vr_"+t,wh=nn("rvlm"),is=nn("rvd"),wo=nn("r"),gr=nn("rl"),qo=nn("rvl"),ze=typeof window!="undefined";function gh(t){return t.__esModule||Ga&&t[Symbol.toStringTag]==="Module"}const kt=Object.assign;function Co(t,e){const o={};for(const i in e){const c=e[i];o[i]=Array.isArray(c)?c.map(t):t(c)}return o}const vn=()=>{},_h=/\/$/,vh=t=>t.replace(_h,"");function bo(t,e,o="/"){let i,c={},h="",d="";const p=e.indexOf("?"),u=e.indexOf("#",p>-1?p:0);return p>-1&&(i=e.slice(0,p),h=e.slice(p+1,u>-1?u:e.length),c=t(h)),u>-1&&(i=i||e.slice(0,u),d=e.slice(u,e.length)),i=fh(i!=null?i:e,o),{fullPath:i+(h&&"?")+h+d,path:i,query:c,hash:d}}function kh(t,e){const o=e.query?t(e.query):"";return e.path+(o&&"?")+o+(e.hash||"")}function ls(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function xh(t,e,o){const i=e.matched.length-1,c=o.matched.length-1;return i>-1&&i===c&&Xe(e.matched[i],o.matched[c])&&Ka(e.params,o.params)&&t(e.query)===t(o.query)&&e.hash===o.hash}function Xe(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Ka(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const o in t)if(!mh(t[o],e[o]))return!1;return!0}function mh(t,e){return Array.isArray(t)?cs(t,e):Array.isArray(e)?cs(e,t):t===e}function cs(t,e){return Array.isArray(e)?t.length===e.length&&t.every((o,i)=>o===e[i]):t.length===1&&t[0]===e}function fh(t,e){if(t.startsWith("/"))return t;if(!t)return e;const o=e.split("/"),i=t.split("/");let c=o.length-1,h,d;for(h=0;h<i.length;h++)if(d=i[h],!(c===1||d==="."))if(d==="..")c--;else break;return o.slice(0,c).join("/")+"/"+i.slice(h-(h===i.length?1:0)).join("/")}var Cn;(function(t){t.pop="pop",t.push="push"})(Cn||(Cn={}));var kn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(kn||(kn={}));function Mh(t){if(!t)if(ze){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),vh(t)}const $h=/^[^#]+#/;function yh(t,e){return t.replace($h,"#")+e}function Ch(t,e){const o=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-o.left-(e.left||0),top:i.top-o.top-(e.top||0)}}const go=()=>({left:window.pageXOffset,top:window.pageYOffset});function bh(t){let e;if("el"in t){const o=t.el,i=typeof o=="string"&&o.startsWith("#"),c=typeof o=="string"?i?document.getElementById(o.slice(1)):document.querySelector(o):o;if(!c)return;e=Ch(c,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function hs(t,e){return(history.state?history.state.position-e:-1)+t}const Wo=new Map;function Bh(t,e){Wo.set(t,e)}function jh(t){const e=Wo.get(t);return Wo.delete(t),e}let Lh=()=>location.protocol+"//"+location.host;function Xa(t,e){const{pathname:o,search:i,hash:c}=e,h=t.indexOf("#");if(h>-1){let p=c.includes(t.slice(h))?t.slice(h).length:1,u=c.slice(p);return u[0]!=="/"&&(u="/"+u),ls(u,"")}return ls(o,t)+i+c}function Ah(t,e,o,i){let c=[],h=[],d=null;const p=({state:v})=>{const $=Xa(t,location),C=o.value,H=e.value;let D=0;if(v){if(o.value=$,e.value=v,d&&d===C){d=null;return}D=H?v.position-H.position:0}else i($);c.forEach(m=>{m(o.value,C,{delta:D,type:Cn.pop,direction:D?D>0?kn.forward:kn.back:kn.unknown})})};function u(){d=o.value}function w(v){c.push(v);const $=()=>{const C=c.indexOf(v);C>-1&&c.splice(C,1)};return h.push($),$}function _(){const{history:v}=window;!v.state||v.replaceState(kt({},v.state,{scroll:go()}),"")}function x(){for(const v of h)v();h=[],window.removeEventListener("popstate",p),window.removeEventListener("beforeunload",_)}return window.addEventListener("popstate",p),window.addEventListener("beforeunload",_),{pauseListeners:u,listen:w,destroy:x}}function ds(t,e,o,i=!1,c=!1){return{back:t,current:e,forward:o,replaced:i,position:window.history.length,scroll:c?go():null}}function Ph(t){const{history:e,location:o}=window,i={value:Xa(t,o)},c={value:e.state};c.value||h(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function h(u,w,_){const x=t.indexOf("#"),v=x>-1?(o.host&&document.querySelector("base")?t:t.slice(x))+u:Lh()+t+u;try{e[_?"replaceState":"pushState"](w,"",v),c.value=w}catch($){console.error($),o[_?"replace":"assign"](v)}}function d(u,w){const _=kt({},e.state,ds(c.value.back,u,c.value.forward,!0),w,{position:c.value.position});h(u,_,!0),i.value=u}function p(u,w){const _=kt({},c.value,e.state,{forward:u,scroll:go()});h(_.current,_,!0);const x=kt({},ds(i.value,u,null),{position:_.position+1},w);h(u,x,!1),i.value=u}return{location:i,state:c,push:p,replace:d}}function Sh(t){t=Mh(t);const e=Ph(t),o=Ah(t,e.state,e.location,e.replace);function i(h,d=!0){d||o.pauseListeners(),history.go(h)}const c=kt({location:"",base:t,go:i,createHref:yh.bind(null,t)},e,o);return Object.defineProperty(c,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(c,"state",{enumerable:!0,get:()=>e.state.value}),c}function Dh(t){return typeof t=="string"||t&&typeof t=="object"}function Za(t){return typeof t=="string"||typeof t=="symbol"}const ae={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Qa=nn("nf");var ps;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ps||(ps={}));function Ze(t,e){return kt(new Error,{type:t,[Qa]:!0},e)}function ge(t,e){return t instanceof Error&&Qa in t&&(e==null||!!(t.type&e))}const us="[^/]+?",Vh={sensitive:!1,strict:!1,start:!0,end:!0},Rh=/[.+*?^${}()[\]/\\]/g;function Hh(t,e){const o=kt({},Vh,e),i=[];let c=o.start?"^":"";const h=[];for(const w of t){const _=w.length?[]:[90];o.strict&&!w.length&&(c+="/");for(let x=0;x<w.length;x++){const v=w[x];let $=40+(o.sensitive?.25:0);if(v.type===0)x||(c+="/"),c+=v.value.replace(Rh,"\\$&"),$+=40;else if(v.type===1){const{value:C,repeatable:H,optional:D,regexp:m}=v;h.push({name:C,repeatable:H,optional:D});const M=m||us;if(M!==us){$+=10;try{new RegExp(`(${M})`)}catch(O){throw new Error(`Invalid custom RegExp for param "${C}" (${M}): `+O.message)}}let P=H?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;x||(P=D&&w.length<2?`(?:/${P})`:"/"+P),D&&(P+="?"),c+=P,$+=20,D&&($+=-8),H&&($+=-20),M===".*"&&($+=-50)}_.push($)}i.push(_)}if(o.strict&&o.end){const w=i.length-1;i[w][i[w].length-1]+=.7000000000000001}o.strict||(c+="/?"),o.end?c+="$":o.strict&&(c+="(?:/|$)");const d=new RegExp(c,o.sensitive?"":"i");function p(w){const _=w.match(d),x={};if(!_)return null;for(let v=1;v<_.length;v++){const $=_[v]||"",C=h[v-1];x[C.name]=$&&C.repeatable?$.split("/"):$}return x}function u(w){let _="",x=!1;for(const v of t){(!x||!_.endsWith("/"))&&(_+="/"),x=!1;for(const $ of v)if($.type===0)_+=$.value;else if($.type===1){const{value:C,repeatable:H,optional:D}=$,m=C in w?w[C]:"";if(Array.isArray(m)&&!H)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const M=Array.isArray(m)?m.join("/"):m;if(!M)if(D)v.length<2&&t.length>1&&(_.endsWith("/")?_=_.slice(0,-1):x=!0);else throw new Error(`Missing required param "${C}"`);_+=M}}return _}return{re:d,score:i,keys:h,parse:p,stringify:u}}function Th(t,e){let o=0;for(;o<t.length&&o<e.length;){const i=e[o]-t[o];if(i)return i;o++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Fh(t,e){let o=0;const i=t.score,c=e.score;for(;o<i.length&&o<c.length;){const h=Th(i[o],c[o]);if(h)return h;o++}return c.length-i.length}const Eh={type:0,value:""},Oh=/[a-zA-Z0-9_]/;function Ih(t){if(!t)return[[]];if(t==="/")return[[Eh]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e($){throw new Error(`ERR (${o})/"${w}": ${$}`)}let o=0,i=o;const c=[];let h;function d(){h&&c.push(h),h=[]}let p=0,u,w="",_="";function x(){!w||(o===0?h.push({type:0,value:w}):o===1||o===2||o===3?(h.length>1&&(u==="*"||u==="+")&&e(`A repeatable param (${w}) must be alone in its segment. eg: '/:ids+.`),h.push({type:1,value:w,regexp:_,repeatable:u==="*"||u==="+",optional:u==="*"||u==="?"})):e("Invalid state to consume buffer"),w="")}function v(){w+=u}for(;p<t.length;){if(u=t[p++],u==="\\"&&o!==2){i=o,o=4;continue}switch(o){case 0:u==="/"?(w&&x(),d()):u===":"?(x(),o=1):v();break;case 4:v(),o=i;break;case 1:u==="("?o=2:Oh.test(u)?v():(x(),o=0,u!=="*"&&u!=="?"&&u!=="+"&&p--);break;case 2:u===")"?_[_.length-1]=="\\"?_=_.slice(0,-1)+u:o=3:_+=u;break;case 3:x(),o=0,u!=="*"&&u!=="?"&&u!=="+"&&p--,_="";break;default:e("Unknown state");break}}return o===2&&e(`Unfinished custom RegExp for param "${w}"`),x(),d(),c}function zh(t,e,o){const i=Hh(Ih(t.path),o),c=kt(i,{record:t,parent:e,children:[],alias:[]});return e&&!c.record.aliasOf==!e.record.aliasOf&&e.children.push(c),c}function Nh(t,e){const o=[],i=new Map;e=gs({strict:!1,end:!0,sensitive:!1},e);function c(_){return i.get(_)}function h(_,x,v){const $=!v,C=qh(_);C.aliasOf=v&&v.record;const H=gs(e,_),D=[C];if("alias"in _){const P=typeof _.alias=="string"?[_.alias]:_.alias;for(const O of P)D.push(kt({},C,{components:v?v.record.components:C.components,path:O,aliasOf:v?v.record:C}))}let m,M;for(const P of D){const{path:O}=P;if(x&&O[0]!=="/"){const K=x.record.path,J=K[K.length-1]==="/"?"":"/";P.path=x.record.path+(O&&J+O)}if(m=zh(P,x,H),v?v.alias.push(m):(M=M||m,M!==m&&M.alias.push(m),$&&_.name&&!ws(m)&&d(_.name)),"children"in C){const K=C.children;for(let J=0;J<K.length;J++)h(K[J],m,v&&v.children[J])}v=v||m,u(m)}return M?()=>{d(M)}:vn}function d(_){if(Za(_)){const x=i.get(_);x&&(i.delete(_),o.splice(o.indexOf(x),1),x.children.forEach(d),x.alias.forEach(d))}else{const x=o.indexOf(_);x>-1&&(o.splice(x,1),_.record.name&&i.delete(_.record.name),_.children.forEach(d),_.alias.forEach(d))}}function p(){return o}function u(_){let x=0;for(;x<o.length&&Fh(_,o[x])>=0&&(_.record.path!==o[x].record.path||!Ya(_,o[x]));)x++;o.splice(x,0,_),_.record.name&&!ws(_)&&i.set(_.record.name,_)}function w(_,x){let v,$={},C,H;if("name"in _&&_.name){if(v=i.get(_.name),!v)throw Ze(1,{location:_});H=v.record.name,$=kt(Uh(x.params,v.keys.filter(M=>!M.optional).map(M=>M.name)),_.params),C=v.stringify($)}else if("path"in _)C=_.path,v=o.find(M=>M.re.test(C)),v&&($=v.parse(C),H=v.record.name);else{if(v=x.name?i.get(x.name):o.find(M=>M.re.test(x.path)),!v)throw Ze(1,{location:_,currentLocation:x});H=v.record.name,$=kt({},x.params,_.params),C=v.stringify($)}const D=[];let m=v;for(;m;)D.unshift(m.record),m=m.parent;return{name:H,path:C,params:$,matched:D,meta:Gh(D)}}return t.forEach(_=>h(_)),{addRoute:h,resolve:w,removeRoute:d,getRoutes:p,getRecordMatcher:c}}function Uh(t,e){const o={};for(const i of e)i in t&&(o[i]=t[i]);return o}function qh(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:Wh(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function Wh(t){const e={},o=t.props||!1;if("component"in t)e.default=o;else for(const i in t.components)e[i]=typeof o=="boolean"?o:o[i];return e}function ws(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Gh(t){return t.reduce((e,o)=>kt(e,o.meta),{})}function gs(t,e){const o={};for(const i in t)o[i]=i in e?e[i]:t[i];return o}function Ya(t,e){return e.children.some(o=>o===t||Ya(t,o))}const Ja=/#/g,Kh=/&/g,Xh=/\//g,Zh=/=/g,Qh=/\?/g,ti=/\+/g,Yh=/%5B/g,Jh=/%5D/g,ei=/%5E/g,td=/%60/g,ni=/%7B/g,ed=/%7C/g,oi=/%7D/g,nd=/%20/g;function _r(t){return encodeURI(""+t).replace(ed,"|").replace(Yh,"[").replace(Jh,"]")}function od(t){return _r(t).replace(ni,"{").replace(oi,"}").replace(ei,"^")}function Go(t){return _r(t).replace(ti,"%2B").replace(nd,"+").replace(Ja,"%23").replace(Kh,"%26").replace(td,"`").replace(ni,"{").replace(oi,"}").replace(ei,"^")}function rd(t){return Go(t).replace(Zh,"%3D")}function sd(t){return _r(t).replace(Ja,"%23").replace(Qh,"%3F")}function ad(t){return t==null?"":sd(t).replace(Xh,"%2F")}function Qn(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function id(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let c=0;c<i.length;++c){const h=i[c].replace(ti," "),d=h.indexOf("="),p=Qn(d<0?h:h.slice(0,d)),u=d<0?null:Qn(h.slice(d+1));if(p in e){let w=e[p];Array.isArray(w)||(w=e[p]=[w]),w.push(u)}else e[p]=u}return e}function _s(t){let e="";for(let o in t){const i=t[o];if(o=rd(o),i==null){i!==void 0&&(e+=(e.length?"&":"")+o);continue}(Array.isArray(i)?i.map(h=>h&&Go(h)):[i&&Go(i)]).forEach(h=>{h!==void 0&&(e+=(e.length?"&":"")+o,h!=null&&(e+="="+h))})}return e}function ld(t){const e={};for(const o in t){const i=t[o];i!==void 0&&(e[o]=Array.isArray(i)?i.map(c=>c==null?null:""+c):i==null?i:""+i)}return e}function cn(){let t=[];function e(i){return t.push(i),()=>{const c=t.indexOf(i);c>-1&&t.splice(c,1)}}function o(){t=[]}return{add:e,list:()=>t,reset:o}}function ke(t,e,o,i,c){const h=i&&(i.enterCallbacks[c]=i.enterCallbacks[c]||[]);return()=>new Promise((d,p)=>{const u=x=>{x===!1?p(Ze(4,{from:o,to:e})):x instanceof Error?p(x):Dh(x)?p(Ze(2,{from:e,to:x})):(h&&i.enterCallbacks[c]===h&&typeof x=="function"&&h.push(x),d())},w=t.call(i&&i.instances[c],e,o,u);let _=Promise.resolve(w);t.length<3&&(_=_.then(u)),_.catch(x=>p(x))})}function Bo(t,e,o,i){const c=[];for(const h of t)for(const d in h.components){let p=h.components[d];if(!(e!=="beforeRouteEnter"&&!h.instances[d]))if(cd(p)){const w=(p.__vccOpts||p)[e];w&&c.push(ke(w,o,i,h,d))}else{let u=p();c.push(()=>u.then(w=>{if(!w)return Promise.reject(new Error(`Couldn't resolve component "${d}" at "${h.path}"`));const _=gh(w)?w.default:w;h.components[d]=_;const v=(_.__vccOpts||_)[e];return v&&ke(v,o,i,h,d)()}))}}return c}function cd(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function vs(t){const e=yt(wo),o=yt(gr),i=it(()=>e.resolve(Wt(t.to))),c=it(()=>{const{matched:u}=i.value,{length:w}=u,_=u[w-1],x=o.matched;if(!_||!x.length)return-1;const v=x.findIndex(Xe.bind(null,_));if(v>-1)return v;const $=ks(u[w-2]);return w>1&&ks(_)===$&&x[x.length-1].path!==$?x.findIndex(Xe.bind(null,u[w-2])):v}),h=it(()=>c.value>-1&&ud(o.params,i.value.params)),d=it(()=>c.value>-1&&c.value===o.matched.length-1&&Ka(o.params,i.value.params));function p(u={}){return pd(u)?e[Wt(t.replace)?"replace":"push"](Wt(t.to)).catch(vn):Promise.resolve()}return{route:i,href:it(()=>i.value.href),isActive:h,isExactActive:d,navigate:p}}const hd=r({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:vs,setup(t,{slots:e}){const o=en(vs(t)),{options:i}=yt(wo),c=it(()=>({[xs(t.activeClass,i.linkActiveClass,"router-link-active")]:o.isActive,[xs(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:o.isExactActive}));return()=>{const h=e.default&&e.default(o);return t.custom?h:rt("a",{"aria-current":o.isExactActive?t.ariaCurrentValue:null,href:o.href,onClick:o.navigate,class:c.value},h)}}}),dd=hd;function pd(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ud(t,e){for(const o in e){const i=e[o],c=t[o];if(typeof i=="string"){if(i!==c)return!1}else if(!Array.isArray(c)||c.length!==i.length||i.some((h,d)=>h!==c[d]))return!1}return!0}function ks(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const xs=(t,e,o)=>t!=null?t:e!=null?e:o,wd=r({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:o}){const i=yt(qo),c=it(()=>t.route||i.value),h=yt(is,0),d=it(()=>c.value.matched[h]);ee(is,h+1),ee(wh,d),ee(qo,c);const p=Bt();return De(()=>[p.value,d.value,t.name],([u,w,_],[x,v,$])=>{w&&(w.instances[_]=u,v&&v!==w&&u&&u===x&&(w.leaveGuards.size||(w.leaveGuards=v.leaveGuards),w.updateGuards.size||(w.updateGuards=v.updateGuards))),u&&w&&(!v||!Xe(w,v)||!x)&&(w.enterCallbacks[_]||[]).forEach(C=>C(u))},{flush:"post"}),()=>{const u=c.value,w=d.value,_=w&&w.components[t.name],x=t.name;if(!_)return ms(o.default,{Component:_,route:u});const v=w.props[t.name],$=v?v===!0?u.params:typeof v=="function"?v(u):v:null,H=rt(_,kt({},$,e,{onVnodeUnmounted:D=>{D.component.isUnmounted&&(w.instances[x]=null)},ref:p}));return ms(o.default,{Component:H,route:u})||H}}});function ms(t,e){if(!t)return null;const o=t(e);return o.length===1?o[0]:o}const ri=wd;function gd(t){const e=Nh(t.routes,t),o=t.parseQuery||id,i=t.stringifyQuery||_s,c=t.history,h=cn(),d=cn(),p=cn(),u=hl(ae);let w=ae;ze&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const _=Co.bind(null,y=>""+y),x=Co.bind(null,ad),v=Co.bind(null,Qn);function $(y,z){let R,U;return Za(y)?(R=e.getRecordMatcher(y),U=z):U=y,e.addRoute(U,R)}function C(y){const z=e.getRecordMatcher(y);z&&e.removeRoute(z)}function H(){return e.getRoutes().map(y=>y.record)}function D(y){return!!e.getRecordMatcher(y)}function m(y,z){if(z=kt({},z||u.value),typeof y=="string"){const ot=bo(o,y,z.path),g=e.resolve({path:ot.path},z),k=c.createHref(ot.fullPath);return kt(ot,g,{params:v(g.params),hash:Qn(ot.hash),redirectedFrom:void 0,href:k})}let R;if("path"in y)R=kt({},y,{path:bo(o,y.path,z.path).path});else{const ot=kt({},y.params);for(const g in ot)ot[g]==null&&delete ot[g];R=kt({},y,{params:x(y.params)}),z.params=x(z.params)}const U=e.resolve(R,z),gt=y.hash||"";U.params=_(v(U.params));const ft=kh(i,kt({},y,{hash:od(gt),path:U.path})),at=c.createHref(ft);return kt({fullPath:ft,hash:gt,query:i===_s?ld(y.query):y.query||{}},U,{redirectedFrom:void 0,href:at})}function M(y){return typeof y=="string"?bo(o,y,u.value.path):kt({},y)}function P(y,z){if(w!==y)return Ze(8,{from:z,to:y})}function O(y){return et(y)}function K(y){return O(kt(M(y),{replace:!0}))}function J(y){const z=y.matched[y.matched.length-1];if(z&&z.redirect){const{redirect:R}=z;let U=typeof R=="function"?R(y):R;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=M(U):{path:U},U.params={}),kt({query:y.query,hash:y.hash,params:y.params},U)}}function et(y,z){const R=w=m(y),U=u.value,gt=y.state,ft=y.force,at=y.replace===!0,ot=J(R);if(ot)return et(kt(M(ot),{state:gt,force:ft,replace:at}),z||R);const g=R;g.redirectedFrom=z;let k;return!ft&&xh(i,U,R)&&(k=Ze(16,{to:g,from:U}),He(U,U,!0,!1)),(k?Promise.resolve(k):Z(g,U)).catch(f=>ge(f)?ge(f,2)?f:Rt(f):mt(f,g,U)).then(f=>{if(f){if(ge(f,2))return et(kt(M(f.to),{state:gt,force:ft,replace:at}),z||g)}else f=nt(g,U,!0,at,gt);return Q(g,U,f),f})}function F(y,z){const R=P(y,z);return R?Promise.reject(R):Promise.resolve()}function Z(y,z){let R;const[U,gt,ft]=_d(y,z);R=Bo(U.reverse(),"beforeRouteLeave",y,z);for(const ot of U)ot.leaveGuards.forEach(g=>{R.push(ke(g,y,z))});const at=F.bind(null,y,z);return R.push(at),Fe(R).then(()=>{R=[];for(const ot of h.list())R.push(ke(ot,y,z));return R.push(at),Fe(R)}).then(()=>{R=Bo(gt,"beforeRouteUpdate",y,z);for(const ot of gt)ot.updateGuards.forEach(g=>{R.push(ke(g,y,z))});return R.push(at),Fe(R)}).then(()=>{R=[];for(const ot of y.matched)if(ot.beforeEnter&&!z.matched.includes(ot))if(Array.isArray(ot.beforeEnter))for(const g of ot.beforeEnter)R.push(ke(g,y,z));else R.push(ke(ot.beforeEnter,y,z));return R.push(at),Fe(R)}).then(()=>(y.matched.forEach(ot=>ot.enterCallbacks={}),R=Bo(ft,"beforeRouteEnter",y,z),R.push(at),Fe(R))).then(()=>{R=[];for(const ot of d.list())R.push(ke(ot,y,z));return R.push(at),Fe(R)}).catch(ot=>ge(ot,8)?ot:Promise.reject(ot))}function Q(y,z,R){for(const U of p.list())U(y,z,R)}function nt(y,z,R,U,gt){const ft=P(y,z);if(ft)return ft;const at=z===ae,ot=ze?history.state:{};R&&(U||at?c.replace(y.fullPath,kt({scroll:at&&ot&&ot.scroll},gt)):c.push(y.fullPath,gt)),u.value=y,He(y,z,R,at),Rt()}let E;function st(){E||(E=c.listen((y,z,R)=>{const U=m(y),gt=J(U);if(gt){et(kt(gt,{replace:!0}),U).catch(vn);return}w=U;const ft=u.value;ze&&Bh(hs(ft.fullPath,R.delta),go()),Z(U,ft).catch(at=>ge(at,12)?at:ge(at,2)?(et(at.to,U).then(ot=>{ge(ot,20)&&!R.delta&&R.type===Cn.pop&&c.go(-1,!1)}).catch(vn),Promise.reject()):(R.delta&&c.go(-R.delta,!1),mt(at,U,ft))).then(at=>{at=at||nt(U,ft,!1),at&&(R.delta?c.go(-R.delta,!1):R.type===Cn.pop&&ge(at,20)&&c.go(-1,!1)),Q(U,ft,at)}).catch(vn)}))}let N=cn(),Lt=cn(),dt;function mt(y,z,R){Rt(y);const U=Lt.list();return U.length?U.forEach(gt=>gt(y,z,R)):console.error(y),Promise.reject(y)}function wt(){return dt&&u.value!==ae?Promise.resolve():new Promise((y,z)=>{N.add([y,z])})}function Rt(y){return dt||(dt=!y,st(),N.list().forEach(([z,R])=>y?R(y):z()),N.reset()),y}function He(y,z,R,U){const{scrollBehavior:gt}=t;if(!ze||!gt)return Promise.resolve();const ft=!R&&jh(hs(y.fullPath,0))||(U||!R)&&history.state&&history.state.scroll||null;return ta().then(()=>gt(y,z,ft)).then(at=>at&&bh(at)).catch(at=>mt(at,y,z))}const se=y=>c.go(y);let Zt;const It=new Set;return{currentRoute:u,addRoute:$,removeRoute:C,hasRoute:D,getRoutes:H,resolve:m,options:t,push:O,replace:K,go:se,back:()=>se(-1),forward:()=>se(1),beforeEach:h.add,beforeResolve:d.add,afterEach:p.add,onError:Lt.add,isReady:wt,install(y){const z=this;y.component("RouterLink",dd),y.component("RouterView",ri),y.config.globalProperties.$router=z,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>Wt(u)}),ze&&!Zt&&u.value===ae&&(Zt=!0,O(c.location).catch(gt=>{}));const R={};for(const gt in ae)R[gt]=it(()=>u.value[gt]);y.provide(wo,z),y.provide(gr,en(R)),y.provide(qo,u);const U=y.unmount;It.add(y),y.unmount=function(){It.delete(y),It.size<1&&(w=ae,E&&E(),E=null,u.value=ae,Zt=!1,dt=!1),U()}}}}function Fe(t){return t.reduce((e,o)=>e.then(()=>o()),Promise.resolve())}function _d(t,e){const o=[],i=[],c=[],h=Math.max(e.matched.length,t.matched.length);for(let d=0;d<h;d++){const p=e.matched[d];p&&(t.matched.find(w=>Xe(w,p))?i.push(p):o.push(p));const u=t.matched[d];u&&(e.matched.find(w=>Xe(w,u))||c.push(u))}return[o,i,c]}function on(){return yt(wo)}function vr(){return yt(gr)}const vd=({input:t,hotKeys:e})=>{const o=i=>{!t.value||e.value.length===0||i.target===document.body&&e.value.includes(i.key)&&(t.value.focus(),i.preventDefault())};oe(()=>{document.addEventListener("keydown",o)}),so(()=>{document.removeEventListener("keydown",o)})},kd=[{title:"",headers:[],path:"/",pathLocale:"/",extraFields:[]},{title:"vuepress-theme-reco",headers:[{level:2,title:"Use",slug:"use",children:[]},{level:2,title:"Play Together",slug:"play-together",children:[{level:3,title:"0.x",slug:"_0-x",children:[]},{level:3,title:"1.x",slug:"_1-x",children:[]},{level:3,title:"CLI",slug:"cli",children:[]}]},{level:2,title:"License",slug:"license",children:[]}],path:"/blogs/other/guide.html",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/docs/environment/github.html",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/docs/environment/jdk.html",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/docs/environment/nodejs.html",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/docs/projects/",pathLocale:"/",extraFields:[]},{title:"Android Studio",headers:[],path:"/docs/softwares/android-studio.html",pathLocale:"/",extraFields:[]},{title:"Final Shell",headers:[],path:"/docs/softwares/final-shell.html",pathLocale:"/",extraFields:[]},{title:"Git / Tortoise Git",headers:[{level:2,title:"\u5B89\u88C5 Git",slug:"\u5B89\u88C5-git",children:[{level:3,title:"\u4E0B\u8F7D",slug:"\u4E0B\u8F7D",children:[]},{level:3,title:"\u5B89\u88C5",slug:"\u5B89\u88C5",children:[]}]},{level:2,title:"\u5B89\u88C5 Tortoise Git",slug:"\u5B89\u88C5-tortoise-git",children:[{level:3,title:"\u4E0B\u8F7D",slug:"\u4E0B\u8F7D-1",children:[]},{level:3,title:"\u5B89\u88C5",slug:"\u5B89\u88C5-1",children:[]},{level:3,title:"\u8BED\u8A00\u5305",slug:"\u8BED\u8A00\u5305",children:[]}]},{level:2,title:"\u4F7F\u7528 Git",slug:"\u4F7F\u7528-git",children:[]},{level:2,title:"\u4F7F\u7528 Tortoise Git",slug:"\u4F7F\u7528-tortoise-git",children:[{level:3,title:"\u63D0\u4EA4",slug:"\u63D0\u4EA4",children:[]},{level:3,title:"\u62C9\u53D6",slug:"\u62C9\u53D6",children:[]},{level:3,title:"\u63A8\u9001",slug:"\u63A8\u9001",children:[]},{level:3,title:"\u5207\u6362/\u68C0\u51FA",slug:"\u5207\u6362-\u68C0\u51FA",children:[]},{level:3,title:"\u5408\u5E76\u5206\u652F",slug:"\u5408\u5E76\u5206\u652F",children:[]},{level:3,title:"\u89E3\u51B3\u51B2\u7A81",slug:"\u89E3\u51B3\u51B2\u7A81",children:[]},{level:3,title:"\u67E5\u770B\u65E5\u5FD7",slug:"\u67E5\u770B\u65E5\u5FD7",children:[]}]},{level:2,title:"\u5E38\u89C1\u95EE\u9898",slug:"\u5E38\u89C1\u95EE\u9898",children:[]}],path:"/docs/softwares/git-tortoise-git.html",pathLocale:"/",extraFields:[]},{title:"HBuilder X",headers:[{level:2,title:"\u4E0B\u8F7D\u4E0E\u5B89\u88C5",slug:"\u4E0B\u8F7D\u4E0E\u5B89\u88C5",children:[{level:3,title:"\u4E0B\u8F7D",slug:"\u4E0B\u8F7D",children:[]},{level:3,title:"\u5B89\u88C5",slug:"\u5B89\u88C5",children:[]}]},{level:2,title:"\u63D2\u4EF6\u914D\u7F6E",slug:"\u63D2\u4EF6\u914D\u7F6E",children:[{level:3,title:"\u5FC5\u5907\u63D2\u4EF6",slug:"\u5FC5\u5907\u63D2\u4EF6",children:[]},{level:3,title:"\u6269\u5C55\u63D2\u4EF6",slug:"\u6269\u5C55\u63D2\u4EF6",children:[]}]},{level:2,title:"\u6A21\u62DF\u5668\u4E0E\u771F\u673A\u8C03\u8BD5",slug:"\u6A21\u62DF\u5668\u4E0E\u771F\u673A\u8C03\u8BD5",children:[{level:3,title:"\u6A21\u62DF\u5668",slug:"\u6A21\u62DF\u5668",children:[]},{level:3,title:"\u771F\u673A\u8C03\u8BD5",slug:"\u771F\u673A\u8C03\u8BD5",children:[]},{level:3,title:"\u81EA\u5B9A\u4E49\u57FA\u5EA7",slug:"\u81EA\u5B9A\u4E49\u57FA\u5EA7",children:[]}]},{level:2,title:"\u6253\u5305\u4E0E\u53D1\u884C",slug:"\u6253\u5305\u4E0E\u53D1\u884C",children:[{level:3,title:"\u6253\u5305",slug:"\u6253\u5305",children:[]},{level:3,title:"\u53D1\u884C",slug:"\u53D1\u884C",children:[]}]},{level:2,title:"\u5E38\u89C1\u95EE\u9898",slug:"\u5E38\u89C1\u95EE\u9898",children:[]}],path:"/docs/softwares/hbuilderx.html",pathLocale:"/",extraFields:[]},{title:"MySQL",headers:[],path:"/docs/softwares/mysql.html",pathLocale:"/",extraFields:[]},{title:"Navicat",headers:[],path:"/docs/softwares/navicat.html",pathLocale:"/",extraFields:[]},{title:"Nvm for Windows",headers:[{level:2,title:"\u5B89\u88C5 Nvm",slug:"\u5B89\u88C5-nvm",children:[{level:3,title:"\u4E0B\u8F7D",slug:"\u4E0B\u8F7D",children:[]},{level:3,title:"\u5B89\u88C5\u524D",slug:"\u5B89\u88C5\u524D",children:[]},{level:3,title:"\u5B89\u88C5 Nvm",slug:"\u5B89\u88C5-nvm-1",children:[]}]},{level:2,title:"\u914D\u7F6E\u591A\u7248\u672C node",slug:"\u914D\u7F6E\u591A\u7248\u672C-node",children:[]},{level:2,title:"\u5E38\u7528\u547D\u4EE4",slug:"\u5E38\u7528\u547D\u4EE4",children:[]},{level:2,title:"\u5E38\u89C1\u95EE\u9898",slug:"\u5E38\u89C1\u95EE\u9898",children:[{level:3,title:"1. \u5207\u6362\u7248\u672C\u63D0\u793A exit status",slug:"_1-\u5207\u6362\u7248\u672C\u63D0\u793A-exit-status",children:[]},{level:3,title:"2. node\u3001npm \u4E0D\u662F\u6709\u6548\u7684\u547D\u4EE4",slug:"_2-node\u3001npm-\u4E0D\u662F\u6709\u6548\u7684\u547D\u4EE4",children:[]},{level:3,title:"3. Nvm for Windows \u5B89\u88C5 Node.js \u4E0B\u8F7D\u901F\u5EA6\u6162",slug:"_3-nvm-for-windows-\u5B89\u88C5-node-js-\u4E0B\u8F7D\u901F\u5EA6\u6162",children:[]}]}],path:"/docs/softwares/nvm-windows.html",pathLocale:"/",extraFields:[]},{title:"PostMan",headers:[],path:"/docs/softwares/postman.html",pathLocale:"/",extraFields:[]},{title:"Tortoise Svn",headers:[],path:"/docs/softwares/tortoise-svn.html",pathLocale:"/",extraFields:[]},{title:"Visual Studio Code",headers:[{level:2,title:"\u4E0B\u8F7D\u4E0E\u5B89\u88C5",slug:"\u4E0B\u8F7D\u4E0E\u5B89\u88C5",children:[{level:3,title:"\u4E0B\u8F7D",slug:"\u4E0B\u8F7D",children:[]},{level:3,title:"\u5B89\u88C5",slug:"\u5B89\u88C5",children:[]}]},{level:2,title:"\u63D2\u4EF6\u914D\u7F6E",slug:"\u63D2\u4EF6\u914D\u7F6E",children:[{level:3,title:"\u57FA\u672C\u63D2\u4EF6",slug:"\u57FA\u672C\u63D2\u4EF6",children:[]},{level:3,title:"\u4E3B\u9898\u63D2\u4EF6",slug:"\u4E3B\u9898\u63D2\u4EF6",children:[]},{level:3,title:"Prettier Code Formatter",slug:"prettier-code-formatter",children:[]},{level:3,title:"Git/Svn \u76F8\u5173",slug:"git-svn-\u76F8\u5173",children:[]},{level:3,title:"Vue2/3 \u63D2\u4EF6",slug:"vue2-3-\u63D2\u4EF6",children:[]},{level:3,title:"Eslint \u76F8\u5173",slug:"eslint-\u76F8\u5173",children:[]},{level:3,title:"\u5176\u4ED6\u63D2\u4EF6",slug:"\u5176\u4ED6\u63D2\u4EF6",children:[]}]},{level:2,title:"\u914D\u7F6E\u5171\u4EAB",slug:"\u914D\u7F6E\u5171\u4EAB",children:[]},{level:2,title:"\u6211\u7684\u914D\u7F6E",slug:"\u6211\u7684\u914D\u7F6E",children:[]},{level:2,title:"\u5E38\u89C1\u95EE\u9898",slug:"\u5E38\u89C1\u95EE\u9898",children:[{level:3,title:"1. \u67E5\u770B\u8FD0\u884C\u6162\u7684\u63D2\u4EF6",slug:"_1-\u67E5\u770B\u8FD0\u884C\u6162\u7684\u63D2\u4EF6",children:[]},{level:3,title:"2. Emmet \u63D0\u793A\u6162",slug:"_2-emmet-\u63D0\u793A\u6162",children:[]}]}],path:"/docs/softwares/vscode.html",pathLocale:"/",extraFields:[]},{title:"\u5FAE\u4FE1\u5F00\u53D1\u8005\u5DE5\u5177",headers:[],path:"/docs/softwares/wx-ide.html",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/docs/technology/css-sass-less.html",pathLocale:"/",extraFields:[]},{title:"Git",headers:[{level:2,title:"init \u4E00\u4E2A\u4ED3\u5E93",slug:"init-\u4E00\u4E2A\u4ED3\u5E93",children:[]},{level:2,title:"git \u7248\u672C\u63A7\u5236",slug:"git-\u7248\u672C\u63A7\u5236",children:[]},{level:2,title:"\u6682\u5B58\u533A",slug:"\u6682\u5B58\u533A",children:[]},{level:2,title:"\u4FEE\u6539\u6587\u4EF6",slug:"\u4FEE\u6539\u6587\u4EF6",children:[]},{level:2,title:"\u8FDC\u7A0B\u4ED3\u5E93",slug:"\u8FDC\u7A0B\u4ED3\u5E93",children:[]},{level:2,title:"\u521B\u5EFA\u5408\u5E76\u5206\u652F",slug:"\u521B\u5EFA\u5408\u5E76\u5206\u652F",children:[]}],path:"/docs/technology/git.html",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/docs/technology/javascript.html",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/docs/technology/nodejs.html",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/docs/technology/react.html",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/docs/technology/typescript.html",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/docs/technology/uniapp.html",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/docs/technology/vue.html",pathLocale:"/",extraFields:[]},{title:"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F",headers:[{level:2,title:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6",slug:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6",children:[{level:3,title:"\u5BFC\u822A\u680F",slug:"\u5BFC\u822A\u680F",children:[]},{level:3,title:"\u81EA\u7531\u62D6\u62FD\u6309\u94AE",slug:"\u81EA\u7531\u62D6\u62FD\u6309\u94AE",children:[]}]},{level:2,title:"\u5E38\u7528\u65B9\u6CD5",slug:"\u5E38\u7528\u65B9\u6CD5",children:[{level:3,title:"\u7236\u5B50\u7EC4\u4EF6\u6D88\u606F\u4F20\u9012",slug:"\u7236\u5B50\u7EC4\u4EF6\u6D88\u606F\u4F20\u9012",children:[]},{level:3,title:"\u5F15\u5165\u8BA1\u7B97\u5C5E\u6027",slug:"\u5F15\u5165\u8BA1\u7B97\u5C5E\u6027",children:[]},{level:3,title:"\u76D1\u542C\u8DEF\u7531\u65B9\u6CD5",slug:"\u76D1\u542C\u8DEF\u7531\u65B9\u6CD5",children:[]},{level:3,title:"\u7B80\u5355\u7684\u8868\u5355\u9A8C\u8BC1\u51FD\u6570",slug:"\u7B80\u5355\u7684\u8868\u5355\u9A8C\u8BC1\u51FD\u6570",children:[]}]},{level:2,title:"\u5E38\u7528\u7684\u6837\u5F0F",slug:"\u5E38\u7528\u7684\u6837\u5F0F",children:[{level:3,title:"\u81EA\u5B9A\u4E49 check \u7EC4\u4EF6\u6837\u5F0F",slug:"\u81EA\u5B9A\u4E49-check-\u7EC4\u4EF6\u6837\u5F0F",children:[]},{level:3,title:"\u81EA\u5B9A\u4E49 radio \u7EC4\u4EF6\u6837\u5F0F",slug:"\u81EA\u5B9A\u4E49-radio-\u7EC4\u4EF6\u6837\u5F0F",children:[]}]},{level:2,title:"\u91C7\u5751",slug:"\u91C7\u5751",children:[{level:3,title:"\u5B57\u4F53\u4E0B\u8F7D",slug:"\u5B57\u4F53\u4E0B\u8F7D",children:[]},{level:3,title:"\u80CC\u666F\u56FE\u7247",slug:"\u80CC\u666F\u56FE\u7247",children:[]},{level:3,title:"\u5728 wxml \u4E2D\u4F7F\u7528\u51FD\u6570",slug:"\u5728-wxml-\u4E2D\u4F7F\u7528\u51FD\u6570",children:[]},{level:3,title:"createSelectorQuery",slug:"createselectorquery",children:[]},{level:3,title:"data-xxx \u4F20\u503C",slug:"data-xxx-\u4F20\u503C",children:[]}]}],path:"/docs/technology/weixinxiaochengxu.html",pathLocale:"/",extraFields:[]},{title:"api",headers:[],path:"/docs/theme-reco/api.html",pathLocale:"/",extraFields:[]},{title:"theme-reco",headers:[],path:"/docs/theme-reco/home.html",pathLocale:"/",extraFields:[]},{title:"plugin",headers:[],path:"/docs/theme-reco/plugin.html",pathLocale:"/",extraFields:[]},{title:"theme",headers:[],path:"/docs/theme-reco/theme.html",pathLocale:"/",extraFields:[]},{title:"first page in category1",headers:[],path:"/blogs/category1/2018/121501.html",pathLocale:"/",extraFields:[]},{title:"second page in category1",headers:[],path:"/blogs/category1/2019/092101.html",pathLocale:"/",extraFields:[]},{title:"first page in category2",headers:[],path:"/blogs/category2/2016/121501.html",pathLocale:"/",extraFields:[]},{title:"second page in category2",headers:[],path:"/blogs/category2/2017/092101.html",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/404.html",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/categories/reco/1/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/categories/category1/1/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/categories/category2/1/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/tags/tag2/1/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/tags/tag1/1/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/tags/tag4/1/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/tags/tag3/1/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/timeline/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/posts/1/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/posts/2/",pathLocale:"/",extraFields:[]},{title:"",headers:[],path:"/posts/3/",pathLocale:"/",extraFields:[]}],si=Bt(kd),xd=()=>si;_o.webpackHot&&(__VUE_HMR_RUNTIME__.updateSearchIndex=t=>{si.value=t});const md=/[^\x00-\x7F]/,fd=t=>t.split(/\s+/g).map(e=>e.trim()).filter(e=>!!e),fs=t=>t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),Ms=(t,e)=>{const o=e.join(" "),i=fd(t);if(md.test(t))return i.some(d=>o.toLowerCase().indexOf(d)>-1);const c=t.endsWith(" ");return new RegExp(i.map((d,p)=>i.length===p+1&&!c?`(?=.*\\b${fs(d)})`:`(?=.*\\b${fs(d)}\\b)`).join("")+".+","gi").test(o)},Md=({searchIndex:t,routeLocale:e,query:o,maxSuggestions:i})=>{const c=it(()=>t.value.filter(h=>h.pathLocale===e.value));return it(()=>{const h=o.value.trim().toLowerCase();if(!h)return[];const d=[],p=(u,w)=>{Ms(h,[w.title])&&d.push({link:`${u.path}#${w.slug}`,title:u.title,header:w.title});for(const _ of w.children){if(d.length>=i.value)return;p(u,_)}};for(const u of c.value){if(d.length>=i.value)break;if(Ms(h,[u.title,...u.extraFields])){d.push({link:u.path,title:u.title});continue}for(const w of u.headers){if(d.length>=i.value)break;p(u,w)}}return d})},$d=t=>{const e=Bt(0);return{focusIndex:e,focusNext:()=>{e.value<t.value.length-1?e.value+=1:e.value=0},focusPrev:()=>{e.value>0?e.value-=1:e.value=t.value.length-1}}},yd=r({name:"SearchBox",props:{locales:{type:Object,required:!1,default:()=>({})},hotKeys:{type:Array,required:!1,default:()=>[]},maxSuggestions:{type:Number,required:!1,default:5}},setup(t){const{locales:e,hotKeys:o,maxSuggestions:i}=Bn(t),c=on(),h=za(),d=xd(),p=Bt(null),u=Bt(!1),w=Bt(""),_=it(()=>{var P;return(P=e.value[h.value])!=null?P:{}}),x=Md({searchIndex:d,routeLocale:h,query:w,maxSuggestions:i}),{focusIndex:v,focusNext:$,focusPrev:C}=$d(x);vd({input:p,hotKeys:o});const H=it(()=>u.value&&!!x.value.length),D=()=>{!H.value||C()},m=()=>{!H.value||$()},M=P=>{if(!H.value)return;const O=x.value[P];!O||c.push(O.link).then(()=>{w.value="",v.value=0})};return()=>rt("form",{class:"search-box",role:"search"},[rt("input",{ref:p,type:"search",placeholder:_.value.placeholder,autocomplete:"off",spellcheck:!1,value:w.value,onFocus:()=>u.value=!0,onBlur:()=>u.value=!1,onInput:P=>w.value=P.target.value,onKeydown:P=>{switch(P.key){case"ArrowUp":{D();break}case"ArrowDown":{m();break}case"Enter":{P.preventDefault(),M(v.value);break}}}}),H.value&&rt("ul",{class:"suggestions",onMouseleave:()=>v.value=-1},x.value.map(({link:P,title:O,header:K},J)=>rt("li",{class:["suggestion",{focus:v.value===J}],onMouseenter:()=>v.value=J,onMousedown:()=>M(J)},rt("a",{href:P,onClick:et=>et.preventDefault()},[rt("span",{class:"page-title"},O),K&&rt("span",{class:"page-header"},`> ${K}`)]))))])}});const Cd={},bd=["s","/"],Bd=5;var jd=re({enhance({app:t}){t.component("SearchBox",e=>rt(yd,Tt({locales:Cd,hotKeys:bd,maxSuggestions:Bd},e)))}});const ht={settings:{minimum:.08,easing:"ease",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},status:null,set:t=>{const e=ht.isStarted();t=jo(t,ht.settings.minimum,1),ht.status=t===1?null:t;const o=ht.render(!e),i=o.querySelector(ht.settings.barSelector),c=ht.settings.speed,h=ht.settings.easing;return o.offsetWidth,Ld(d=>{Fn(i,{transform:"translate3d("+$s(t)+"%,0,0)",transition:"all "+c+"ms "+h}),t===1?(Fn(o,{transition:"none",opacity:"1"}),o.offsetWidth,setTimeout(function(){Fn(o,{transition:"all "+c+"ms linear",opacity:"0"}),setTimeout(function(){ht.remove(),d()},c)},c)):setTimeout(()=>d(),c)}),ht},isStarted:()=>typeof ht.status=="number",start:()=>{ht.status||ht.set(0);const t=()=>{setTimeout(()=>{!ht.status||(ht.trickle(),t())},ht.settings.trickleSpeed)};return ht.settings.trickle&&t(),ht},done:t=>!t&&!ht.status?ht:ht.inc(.3+.5*Math.random()).set(1),inc:t=>{let e=ht.status;return e?(typeof t!="number"&&(t=(1-e)*jo(Math.random()*e,.1,.95)),e=jo(e+t,0,.994),ht.set(e)):ht.start()},trickle:()=>ht.inc(Math.random()*ht.settings.trickleRate),render:t=>{if(ht.isRendered())return document.getElementById("nprogress");ys(document.documentElement,"nprogress-busy");const e=document.createElement("div");e.id="nprogress",e.innerHTML=ht.settings.template;const o=e.querySelector(ht.settings.barSelector),i=t?"-100":$s(ht.status||0),c=document.querySelector(ht.settings.parent);return Fn(o,{transition:"all 0 linear",transform:"translate3d("+i+"%,0,0)"}),c!==document.body&&ys(c,"nprogress-custom-parent"),c==null||c.appendChild(e),e},remove:()=>{Cs(document.documentElement,"nprogress-busy"),Cs(document.querySelector(ht.settings.parent),"nprogress-custom-parent");const t=document.getElementById("nprogress");t&&Ad(t)},isRendered:()=>!!document.getElementById("nprogress")},jo=(t,e,o)=>t<e?e:t>o?o:t,$s=t=>(-1+t)*100,Ld=function(){const t=[];function e(){const o=t.shift();o&&o(e)}return function(o){t.push(o),t.length===1&&e()}}(),Fn=function(){const t=["Webkit","O","Moz","ms"],e={};function o(d){return d.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(p,u){return u.toUpperCase()})}function i(d){const p=document.body.style;if(d in p)return d;let u=t.length;const w=d.charAt(0).toUpperCase()+d.slice(1);let _;for(;u--;)if(_=t[u]+w,_ in p)return _;return d}function c(d){return d=o(d),e[d]||(e[d]=i(d))}function h(d,p,u){p=c(p),d.style[p]=u}return function(d,p){for(const u in p){const w=p[u];w!==void 0&&Object.prototype.hasOwnProperty.call(p,u)&&h(d,u,w)}}}(),ai=(t,e)=>(typeof t=="string"?t:kr(t)).indexOf(" "+e+" ")>=0,ys=(t,e)=>{const o=kr(t),i=o+e;ai(o,e)||(t.className=i.substring(1))},Cs=(t,e)=>{const o=kr(t);if(!ai(t,e))return;const i=o.replace(" "+e+" "," ");t.className=i.substring(1,i.length-1)},kr=t=>(" "+(t.className||"")+" ").replace(/\s+/gi," "),Ad=t=>{t&&t.parentNode&&t.parentNode.removeChild(t)};const Pd=()=>{oe(()=>{const t=on(),e=new Set;e.add(t.currentRoute.value.path),t.beforeEach(o=>{e.has(o.path)||ht.start()}),t.afterEach(o=>{e.add(o.path),ht.done()})})};var Sd=re({setup(){Pd()}});function ii(t,e,o){var i,c,h;e===void 0&&(e=50),o===void 0&&(o={});var d=(i=o.isImmediate)!=null&&i,p=(c=o.callback)!=null&&c,u=o.maxWait,w=Date.now(),_=[];function x(){if(u!==void 0){var $=Date.now()-w;if($+e>=u)return u-$}return e}var v=function(){var $=[].slice.call(arguments),C=this;return new Promise(function(H,D){var m=d&&h===void 0;if(h!==void 0&&clearTimeout(h),h=setTimeout(function(){if(h=void 0,w=Date.now(),!d){var P=t.apply(C,$);p&&p(P),_.forEach(function(O){return(0,O.resolve)(P)}),_=[]}},x()),m){var M=t.apply(C,$);return p&&p(M),H(M)}_.push({resolve:H,reject:D})})};return v.cancel=function($){h!==void 0&&clearTimeout(h),_.forEach(function(C){return(0,C.reject)($)}),_=[]},v}const Dd=({headerLinkSelector:t,headerAnchorSelector:e,delay:o,offset:i=5})=>{const c=on(),h=po(),p=ii(()=>{var H,D,m,M;const u=Array.from(document.querySelectorAll(t)),_=Array.from(document.querySelectorAll(e)).filter(P=>u.some(O=>O.hash===P.hash)),x=Math.max(window.pageYOffset,document.documentElement.scrollTop,document.body.scrollTop),v=window.innerHeight+x,$=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),C=Math.abs($-v)<i;for(let P=0;P<_.length;P++){const O=_[P],K=_[P+1],J=x>=((D=(H=O.parentElement)==null?void 0:H.offsetTop)!=null?D:0)-i,et=!K||x<((M=(m=K.parentElement)==null?void 0:m.offsetTop)!=null?M:0)-i;if(!(J&&et))continue;const Z=decodeURIComponent(c.currentRoute.value.hash),Q=decodeURIComponent(O.hash);if(Z===Q)return;if(C){for(let nt=P+1;nt<_.length;nt++)if(Z===decodeURIComponent(_[nt].hash))return}Vd(c,{hash:Q,force:!0});return}},o);oe(()=>{p(),window.addEventListener("scroll",p)}),so(()=>{window.removeEventListener("scroll",p)}),De(()=>h.value.path,p)},Vd=async(t,...e)=>{const{scrollBehavior:o}=t.options;t.options.scrollBehavior=void 0,await t.replace(...e).finally(()=>t.options.scrollBehavior=o)},Rd="a.page-header-item",Hd=".header-anchor",Td=200,Fd=5;var Ed=re({setup(){Dd({headerLinkSelector:Rd,headerAnchorSelector:Hd,delay:Td,offset:Fd})}});const Od=rt("svg",{class:"external-link-icon",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"},[rt("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),rt("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})]),Id=r({name:"ExternalLinkIcon",props:{locales:{type:Object,required:!1,default:()=>({})}},setup(t){const e=za(),o=it(()=>{var i;return(i=t.locales[e.value])!=null?i:{openInNewWindow:"open in new window"}});return()=>rt("span",[Od,rt("span",{class:"external-link-icon-sr-only"},o.value.openInNewWindow)])}}),zd={};var Nd=re({enhance({app:t}){t.component("ExternalLinkIcon",rt(Id,{locales:zd}))}}),Ud={enhance:({app:t})=>{}},qd={enhance:({app:t})=>{}};const bs=()=>window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,Wd=()=>window.scrollTo({top:0,behavior:"smooth"});const Gd=r({name:"BackToTop",setup(){const t=Bt(0),e=it(()=>t.value>300),o=ii(()=>{t.value=bs()},100);oe(()=>{t.value=bs(),window.addEventListener("scroll",()=>o())});const i=rt("div",{class:"back-to-top",onClick:Wd});return()=>rt(ur,{name:"back-to-top"},()=>e.value?i:null)}});var Kd=re({rootComponents:[Gd]});function Xd(){const t=uo(),e=it(()=>{var h;return(h=t==null?void 0:t.value)===null||h===void 0?void 0:h.bulletin}),o=Bt(!1),i="__CLOSE_BULLETIN_POPOVER__";return oe(()=>{var h;const d=sessionStorage.getItem(i);o.value=d!=="true"&&!!(!((h=e==null?void 0:e.value)===null||h===void 0)&&h.body)}),{visible:o,bulletin:e,closeBulletinPopover:()=>{o.value=!1,sessionStorage.setItem(i,"true")}}}const Zd={handleImage(t){return`<img style="${t.style||""}" src="${t.src}" />`},handleText(t){return`<div style="${t.style||""}">${t.content}</div>`},handleTitle(t){return`<h5 style="${t.style||""}">${t.content}</h5>`},handleButton(t){return`<a style="${t.style||""}" class="btn" href="${t.link}">${t.text}</a>`},handleButtongroup(t){return`<div class="btn-group">${(t.children||[]).reduce((o,i)=>o+=`<a style="${i.style||t.style||""}" class="btn" href="${i.link}">${i.text}</a>`,"")}</div>`},handleHr(t){return"<hr />"}};function Qd(){const t=uo();function e(i){if(Array.isArray(i))return i.map(c=>e(c));{let c=i.type;return c=c.slice(0,1).toUpperCase()+c.slice(1),Zd[`handle${c}`](i)}}return{bodyNodes:it(()=>{var i,c;return e((c=(i=t==null?void 0:t.value)===null||i===void 0?void 0:i.bulletin)===null||c===void 0?void 0:c.body).join("")}),handleNode:e}}var rn=(t,e)=>{const o=t.__vccOpts||t;for(const[i,c]of e)o[i]=c;return o};const Yd={class:"bulletin-title"},Jd=n("svg",{t:"1573745677073",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4448",width:"22",height:"22"},[n("path",{d:"M512 34.133333a486.4 486.4 0 1 0 486.4 486.4A486.4 486.4 0 0 0 512 34.133333z m209.4848 632.8064l-55.6032 55.466667-151.517867-151.125333-151.517866 151.1168-55.6032-55.466667 151.517866-151.108267L307.242667 364.714667l55.6032-55.466667 151.517866 151.125333 151.517867-151.1168 55.6032 55.466667-151.517867 151.099733z m0 0","p-id":"4449"})],-1),t1=[Jd],e1=["innerHTML"],n1=r({name:"Bulletin",setup(t){const{visible:e,bulletin:o,closeBulletinPopover:i}=Xd(),{bodyNodes:c}=Qd();return(h,d)=>{var u,w;const p=wa("Xicons");return Wt(e)?(s(),a("div",{key:0,class:"bulletin-wrapper",style:Re({width:((u=Wt(o))==null?void 0:u.width)||"300px"})},[n("div",Yd,[$t(p,{icon:"Bulb","icon-size":"28","icon-color":"#fff",text:((w=Wt(o))==null?void 0:w.title)||"\u516C\u544A","text-color":"#fff","text-size":"16"},null,8,["text"]),n("i",{class:"btn-close",onClick:d[0]||(d[0]=(..._)=>Wt(i)&&Wt(i)(..._))},t1)]),n("div",{class:"bulletin-content",innerHTML:Wt(c)},null,8,e1)],4)):Zn("",!0)}}});var o1=rn(n1,[["__file","Bulletin.vue"]]),r1=re({rootComponents:[o1]});function s1(){const t=uo(),e=it(()=>t.value.valineConfig?"valine":""),o=it(()=>t.value.valineConfig||{});return{solution:e,options:o}}var Bs=r({name:"Valine",props:{options:{type:Object,default(){return{}}}},setup(t){const e=on(),{options:o}=Bn(t);oe(()=>{const i=async()=>{const{Valine:c}=await j(()=>import("./reco-valine.88224ab5.js"),[]),h=Tt({el:"#valine",placeholder:"just go go",notify:!1,verify:!1,avatar:"retro",visitor:!0,recordIP:!1,path:window.location.pathname},o.value);new c(h)};i(),De(()=>e.currentRoute.value.path,c=>{i()},{immediate:!0,deep:!0})})},render(){return rt("div",{class:"reco-valine-wrapper"},rt("div",{id:"valine"}))}}),a1=r({components:{Valine:Bs},props:{hideComments:{type:Boolean,default:!0}},setup(t){const{solution:e,options:o}=s1(),{hideComments:i}=Bn(t),c=e.value==="valine"?Bs:"";return()=>c?rt(c,{options:o.value,style:`display: ${i.value?"none":"block"}`}):null}}),i1=r({name:"ValineViews",props:{idVal:String,numStyle:Object,flagTitle:{type:String,default:"Your Article Title"}},setup(t){const e=Na(),o=vr(),{idVal:i,numStyle:c,flagTitle:h}=Bn(t),d=p=>e.value.base.slice(0,e.value.base.length-1)+p;return()=>rt("span",{id:d(i.value||o.path),class:"leancloud-visitors","data-flag-title":h.value},rt("a",{class:"leancloud-visitors-count",style:c.value}))}});function l1({app:t}){t.component("Comments",e=>rt(a1,Tt({},e))),t.component("ValineViews",e=>rt(i1,Tt({},e)))}var c1=re({enhance(...t){l1(...t)}});const li=Symbol(""),ci=Symbol(""),Ko=Symbol("");function SQt(){const t=yt(ci)||{},e=yt(Ko)||{},o=yt(li)||{};if(!Ko)throw new Error("useSiteLocaleData() is called without provider.");const{currentRoute:i}=on();return{classificationPosts:it(()=>o.value[i.value.path]||{}),classificationSummary:t,posts:e}}const h1={"/categories/reco/1/":{pageSize:10,total:1,currentPage:1,currentClassificationKey:"categories",currentClassificationValue:"reco",pages:[{data:{key:"v-6bb1ef33",path:"/blogs/other/guide.html",title:"vuepress-theme-reco",lang:"en-US",frontmatter:{title:"vuepress-theme-reco",date:"2019/04/09",categories:["reco"]},excerpt:"",headers:[{level:2,title:"Use",slug:"use",children:[]},{level:2,title:"Play Together",slug:"play-together",children:[{level:3,title:"0.x",slug:"_0-x",children:[]},{level:3,title:"1.x",slug:"_1-x",children:[]},{level:3,title:"CLI",slug:"cli",children:[]}]},{level:2,title:"License",slug:"license",children:[]}],git:{createdTime:1655877926e3,updatedTime:1655879489e3,contributors:[{name:"wangfunfun",email:"15376960583@189.cn",commits:3}]},filePathRelative:"blogs/other/guide.md"},key:"v-6bb1ef33",path:"/blogs/other/guide.html",title:"vuepress-theme-reco",lang:"en-US",frontmatter:{title:"vuepress-theme-reco",date:"2019/04/09",categories:["reco"]},excerpt:"",headers:[{level:2,title:"Use",slug:"use",children:[]},{level:2,title:"Play Together",slug:"play-together",children:[{level:3,title:"0.x",slug:"_0-x",children:[]},{level:3,title:"1.x",slug:"_1-x",children:[]},{level:3,title:"CLI",slug:"cli",children:[]}]},{level:2,title:"License",slug:"license",children:[]}],content:`
![vuepress](https://img.shields.io/badge/vuepress-0.14.8-brightgreen.svg)
![leancloud-storage](https://img.shields.io/badge/leancloud--storage-3.10.1-orange.svg)
![valine](https://img.shields.io/badge/valine-1.3.4-blue.svg)

::: tip \u4ECB\u7ECD
1. \u8FD9\u662F\u4E00\u4E2Avuepress\u4E3B\u9898\uFF0C\u65E8\u5728\u6DFB\u52A0\u535A\u5BA2\u6240\u9700\u7684\u5206\u7C7B\u3001TAB\u5899\u3001\u5206\u9875\u3001\u8BC4\u8BBA\u7B49\u80FD\uFF1B<br>
2. \u4E3B\u9898\u8FFD\u6C42\u6781\u7B80\uFF0C\u6839\u636E vuepress \u7684\u9ED8\u8BA4\u4E3B\u9898\u4FEE\u6539\u800C\u6210\uFF0C\u5B98\u65B9\u7684\u4E3B\u9898\u914D\u7F6E\u4ECD\u7136\u9002\u7528\uFF1B<br>
3. \u4F60\u53EF\u4EE5\u6253\u5F00 [\u5348\u540E\u5357\u6742](http://recoluan.gitlab.io) \u6765\u67E5\u770B\u6548\u679C\u3002
:::

## Use

**Build**

\`\`\`bash
npm run build

# or

yarn build
\`\`\`

**Server**

\`\`\`bash
npm run dev

# or

yarn dev
\`\`\`

## Play Together

### 0.x

\`vuepress-theme-reco@0.x\` \u662F\u57FA\u4E8E \`vuepress@0.x\` \u7684\u535A\u5BA2\u4E3B\u9898\u3002

\`vuepress@0.x\` \u529F\u80FD\u6BD4\u8F83\u7B80\u5355\uFF0C\u53EA\u9002\u5408\u4E66\u5199\u7B80\u5355\u7684\u6587\u6863\uFF0C\u4F46\u597D\u5728\u652F\u6301\u4E3B\u9898\u81EA\u5B9A\u4E49\uFF0C\u800C\u4E2A\u4EBA\u53C8\u5E0C\u671B\u80FD\u591F\u7528\u5B83\u6765\u4E66\u5199\u535A\u5BA2\uFF0C\u539F\u56E0\u5C31\u662F\u5B83\u8DB3\u591F\u7684\u7B80\u6D01\uFF0C\u6BEB\u65E0\u7591\u95EE\uFF0C\u8FD9\u4E5F\u7B26\u5408\u5F88\u591A\u7A0B\u5E8F\u5458\u7684\u89C2\u5FF5\uFF0C\u4E5F\u5C31\u662F\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\`vuepress-theme-reco@0.x\` \u7684\u7B2C\u4E00\u4E2A\u7248\u672C\u7ECF\u8FC7\u4E00\u4E2A\u901A\u5BB5\u800C\u4EA7\u751F\u3002

\u4E3B\u9898\u5F00\u6E90\u4E0D\u4E45\uFF0C\u5F88\u591A\u670B\u53CB\u901A\u8FC7\u5404\u79CD\u8054\u7CFB\u65B9\u5F0F\uFF0C\u7ED9\u5230\u5F88\u591A\u597D\u7684\u610F\u89C1\u548C\u5EFA\u8BAE\uFF0C\u6240\u4EE5\u6211\u4E2A\u4EBA\u4E5F\u5728\u79EF\u6781\u5730\u66F4\u65B0\u3002

\u56E0\u4E3A\u6211\u662F\u4E00\u540D\u524D\u7AEF\u5F00\u53D1\u5DE5\u7A0B\u5E08\uFF0C\u5F00\u53D1\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u603B\u662F\u60F3\u7740\u80FD\u4E0D\u80FD\u52A0\u5165\u4E00\u4E9B\u70AB\u9177\u7684\u6548\u679C\uFF0C\u6709\u5F88\u591A\u6B21\u90FD\u662F\u6DFB\u52A0\u4E0A\u53C8\u53BB\u6389\uFF0C\u53CD\u53CD\u590D\u590D\uFF0C\u6700\u540E\u90FD\u662F\u88AB **\u7B80\u6D01** \u7684\u8FD9\u4E2A\u539F\u5219\u963B\u6B62\u6389\uFF0C\u6BD5\u7ADF\uFF0C\u73B0\u5728\u6211\u662F\u5C06\u5B83\u5F53\u4F5C\u4E00\u4E2A\u4EA7\u54C1\u6765\u770B\u5F85\uFF0C\u5E76\u4E0D\u662F\u4E00\u4E2A\u6280\u672F\u6216\u8005\u662F\u6280\u5DE7\u7684\u5C1D\u8BD5\u9879\u76EE\u3002

### 1.x

\u968F\u7740\u4E0D\u65AD\u6709\u7528\u6237\u8FC7\u6765\u8BE2\u95EE\uFF1A\u4E3A\u4EC0\u4E48 \`vuepress-theme-reco@0.x\` \u4E0D\u80FD\u5728 \`vuepress@1.x\` \u4E0A\u4F7F\u7528\uFF1F\u672C\u6765\u53EA\u662F\u6253\u7B97\u5BF9 \`vuepress-theme-reco@0.x\` \u8FDB\u884C\u7B80\u5355\u7684bug\u4FEE\u590D\u7684\u6211\uFF0C\u7EC8\u7A76\u8FD8\u662F\u5FCD\u4E0D\u4F4F\uFF0C\u5F00\u59CB\u4E86 \`vuepress-theme-reco@1.x\` \u7684\u5F00\u53D1\u3002\u53C8\u662F\u5728\u4E00\u4E2A\u5BC2\u9759\u7684\u51CC\u6668\u4E24\u70B9\u534A\uFF08\u665A\u4E0A\u5C31\u662F\u51FA\u6D3B\u5FEB\uFF09\uFF0C\u6211\u9ED8\u9ED8\u5730\u5F00\u59CB\u4E86\u3002

\u4E3B\u9898\u5347\u7EA7\u7684\u5173\u952E\u4E5F\u5C31\u662F \`@vuepress/plugin-blog\` \u8FD9\u6B3E\u5B98\u65B9\u63D2\u4EF6\uFF0C\u5B83\u4E0D\u9700\u8981\u518D\u53BB\u9EBB\u70E6\u5730\u8FC7\u6EE4\u6570\u636E\uFF0C\u5C06\u5206\u7C7B\u548C\u6807\u7B7E\u7684\u76F8\u5173\u4FE1\u606F\u76F4\u63A5\u5B58\u5728 \`$categories\` \u548C \`$tags\` \u8FD9\u4E24\u4E2A\u5168\u5C40\u53D8\u91CF\u4E2D\u3002\u501F\u52A9\u4E8E \`@vuepress/plugin-blog\`\uFF0C\u5206\u7C7B\u548C\u6807\u7B7E\u529F\u80FD\u66F4\u5BB9\u6613\u5B9E\u73B0\uFF0C\u4F46\u4E5F\u6709\u4E86\u4E00\u4E9B\u5C40\u9650\u3002\u63A5\u4E0B\u6765\u4E24\u4E09\u5929\u7684\u65F6\u95F4\uFF0C\u90FD\u662F\u5728\u8FDB\u884C\u529F\u80FD\u7684\u8FC1\u79FB\u548C\u4E00\u4E9Bbug\u7684\u4FEE\u590D\u3002

\`vuepress-theme-reco@0.x\` \u7684\u5F00\u53D1\u4E2D\uFF0C\u66F4\u52A0\u6DF1\u523B\u5730\u660E\u767D\u4E86\u6A21\u5757\u5316\u548C\u7EC4\u4EF6\u5316\u7F16\u7A0B\u7684\u91CD\u8981\u6027\uFF0C\u5982\u679C\u5F53\u521D\u6CA1\u6709\u628A\u4E00\u4E9B\u529F\u80FD\u8FDB\u884C\u5C01\u88C5\uFF0C\u800C\u662F\u76F4\u63A5\u7B80\u5355\u7684\u590D\u5236\uFF0C\u8FD9\u6B21\u5347\u7EA7\u4E5F\u4E0D\u4F1A\u8FD9\u4E48\u987A\u5229\u3002\u6A21\u5757\u62C6\u5206\u7684\u8D8A\u7EC6\uFF0C\u4F7F\u7528\u5C31\u4F1A\u8D8A\u7075\u6D3B\u3002

### CLI

\u8FD8\u662F\u8877\u5FC3\u5730\u5E0C\u671B\u80FD\u6709\u66F4\u591A\u7684\u670B\u53CB\u53C2\u4E0E\u8FDB\u6765\uFF0C\u66F4\u5FEB\u5730\u53BB\u5B8C\u5584\u5B83\u3002\u63A5\u4E0B\u6765\u65F6\u95F4\u5141\u8BB8\u7684\u60C5\u51B5\u4E0B\uFF0C\u6211\u4F1A\u5F00\u6E90\u4E00\u6B3E\u81EA\u52A8\u751F\u6210\u535A\u5BA2\u7684\u811A\u624B\u67B6\uFF0C\u7565\u8FC7\u914D\u7F6E\u6B65\u9AA4\uFF0C\u76F4\u63A5\u4E66\u5199\u4F18\u8D28\u5185\u5BB9\uFF0C\u8FD9\u4E5F\u662F\u6211\u540E\u6765\u9010\u6E10\u5F62\u6210\u7684\u4E00\u79CD\u4FE1\u5FF5\uFF0C\u5C31\u662F\u5E0C\u671B\u80FD\u8BA9\u8FD9\u6B3E\u4E3B\u9898\uFF0C\u529F\u80FD\u8D8A\u5B8C\u5584\uFF0C\u4F7F\u7528\u8D8A\u6765\u8D8A\u7B80\u5355\u3002

## License
[MIT](https://github.com/recoluan/vuepress-theme-reco/blob/master/LICENSE)`,contentRendered:`<p><img src="https://img.shields.io/badge/vuepress-0.14.8-brightgreen.svg" alt="vuepress">
<img src="https://img.shields.io/badge/leancloud--storage-3.10.1-orange.svg" alt="leancloud-storage">
<img src="https://img.shields.io/badge/valine-1.3.4-blue.svg" alt="valine"></p>
<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">\u4ECB\u7ECD</p><ol>
<li>\u8FD9\u662F\u4E00\u4E2Avuepress\u4E3B\u9898\uFF0C\u65E8\u5728\u6DFB\u52A0\u535A\u5BA2\u6240\u9700\u7684\u5206\u7C7B\u3001TAB\u5899\u3001\u5206\u9875\u3001\u8BC4\u8BBA\u7B49\u80FD\uFF1B<br></li>
<li>\u4E3B\u9898\u8FFD\u6C42\u6781\u7B80\uFF0C\u6839\u636E vuepress \u7684\u9ED8\u8BA4\u4E3B\u9898\u4FEE\u6539\u800C\u6210\uFF0C\u5B98\u65B9\u7684\u4E3B\u9898\u914D\u7F6E\u4ECD\u7136\u9002\u7528\uFF1B<br></li>
<li>\u4F60\u53EF\u4EE5\u6253\u5F00 <a href="http://recoluan.gitlab.io" target="_blank" rel="noopener noreferrer">\u5348\u540E\u5357\u6742<ExternalLinkIcon/></a> \u6765\u67E5\u770B\u6548\u679C\u3002</li>
</ol>
</div><h2 id="use" tabindex="-1"><a class="header-anchor" href="#use" aria-hidden="true">#</a> Use</h2>
<p><strong>Build</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run build

<span class="token comment"># or</span>

<span class="token function">yarn</span> build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Server</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run dev

<span class="token comment"># or</span>

<span class="token function">yarn</span> dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="play-together" tabindex="-1"><a class="header-anchor" href="#play-together" aria-hidden="true">#</a> Play Together</h2>
<h3 id="_0-x" tabindex="-1"><a class="header-anchor" href="#_0-x" aria-hidden="true">#</a> 0.x</h3>
<p><code v-pre>vuepress-theme-reco@0.x</code> \u662F\u57FA\u4E8E <code v-pre>vuepress@0.x</code> \u7684\u535A\u5BA2\u4E3B\u9898\u3002</p>
<p><code v-pre>vuepress@0.x</code> \u529F\u80FD\u6BD4\u8F83\u7B80\u5355\uFF0C\u53EA\u9002\u5408\u4E66\u5199\u7B80\u5355\u7684\u6587\u6863\uFF0C\u4F46\u597D\u5728\u652F\u6301\u4E3B\u9898\u81EA\u5B9A\u4E49\uFF0C\u800C\u4E2A\u4EBA\u53C8\u5E0C\u671B\u80FD\u591F\u7528\u5B83\u6765\u4E66\u5199\u535A\u5BA2\uFF0C\u539F\u56E0\u5C31\u662F\u5B83\u8DB3\u591F\u7684\u7B80\u6D01\uFF0C\u6BEB\u65E0\u7591\u95EE\uFF0C\u8FD9\u4E5F\u7B26\u5408\u5F88\u591A\u7A0B\u5E8F\u5458\u7684\u89C2\u5FF5\uFF0C\u4E5F\u5C31\u662F\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C<code v-pre>vuepress-theme-reco@0.x</code> \u7684\u7B2C\u4E00\u4E2A\u7248\u672C\u7ECF\u8FC7\u4E00\u4E2A\u901A\u5BB5\u800C\u4EA7\u751F\u3002</p>
<p>\u4E3B\u9898\u5F00\u6E90\u4E0D\u4E45\uFF0C\u5F88\u591A\u670B\u53CB\u901A\u8FC7\u5404\u79CD\u8054\u7CFB\u65B9\u5F0F\uFF0C\u7ED9\u5230\u5F88\u591A\u597D\u7684\u610F\u89C1\u548C\u5EFA\u8BAE\uFF0C\u6240\u4EE5\u6211\u4E2A\u4EBA\u4E5F\u5728\u79EF\u6781\u5730\u66F4\u65B0\u3002</p>
<p>\u56E0\u4E3A\u6211\u662F\u4E00\u540D\u524D\u7AEF\u5F00\u53D1\u5DE5\u7A0B\u5E08\uFF0C\u5F00\u53D1\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u603B\u662F\u60F3\u7740\u80FD\u4E0D\u80FD\u52A0\u5165\u4E00\u4E9B\u70AB\u9177\u7684\u6548\u679C\uFF0C\u6709\u5F88\u591A\u6B21\u90FD\u662F\u6DFB\u52A0\u4E0A\u53C8\u53BB\u6389\uFF0C\u53CD\u53CD\u590D\u590D\uFF0C\u6700\u540E\u90FD\u662F\u88AB <strong>\u7B80\u6D01</strong> \u7684\u8FD9\u4E2A\u539F\u5219\u963B\u6B62\u6389\uFF0C\u6BD5\u7ADF\uFF0C\u73B0\u5728\u6211\u662F\u5C06\u5B83\u5F53\u4F5C\u4E00\u4E2A\u4EA7\u54C1\u6765\u770B\u5F85\uFF0C\u5E76\u4E0D\u662F\u4E00\u4E2A\u6280\u672F\u6216\u8005\u662F\u6280\u5DE7\u7684\u5C1D\u8BD5\u9879\u76EE\u3002</p>
<h3 id="_1-x" tabindex="-1"><a class="header-anchor" href="#_1-x" aria-hidden="true">#</a> 1.x</h3>
<p>\u968F\u7740\u4E0D\u65AD\u6709\u7528\u6237\u8FC7\u6765\u8BE2\u95EE\uFF1A\u4E3A\u4EC0\u4E48 <code v-pre>vuepress-theme-reco@0.x</code> \u4E0D\u80FD\u5728 <code v-pre>vuepress@1.x</code> \u4E0A\u4F7F\u7528\uFF1F\u672C\u6765\u53EA\u662F\u6253\u7B97\u5BF9 <code v-pre>vuepress-theme-reco@0.x</code> \u8FDB\u884C\u7B80\u5355\u7684bug\u4FEE\u590D\u7684\u6211\uFF0C\u7EC8\u7A76\u8FD8\u662F\u5FCD\u4E0D\u4F4F\uFF0C\u5F00\u59CB\u4E86 <code v-pre>vuepress-theme-reco@1.x</code> \u7684\u5F00\u53D1\u3002\u53C8\u662F\u5728\u4E00\u4E2A\u5BC2\u9759\u7684\u51CC\u6668\u4E24\u70B9\u534A\uFF08\u665A\u4E0A\u5C31\u662F\u51FA\u6D3B\u5FEB\uFF09\uFF0C\u6211\u9ED8\u9ED8\u5730\u5F00\u59CB\u4E86\u3002</p>
<p>\u4E3B\u9898\u5347\u7EA7\u7684\u5173\u952E\u4E5F\u5C31\u662F <code v-pre>@vuepress/plugin-blog</code> \u8FD9\u6B3E\u5B98\u65B9\u63D2\u4EF6\uFF0C\u5B83\u4E0D\u9700\u8981\u518D\u53BB\u9EBB\u70E6\u5730\u8FC7\u6EE4\u6570\u636E\uFF0C\u5C06\u5206\u7C7B\u548C\u6807\u7B7E\u7684\u76F8\u5173\u4FE1\u606F\u76F4\u63A5\u5B58\u5728 <code v-pre>$categories</code> \u548C <code v-pre>$tags</code> \u8FD9\u4E24\u4E2A\u5168\u5C40\u53D8\u91CF\u4E2D\u3002\u501F\u52A9\u4E8E <code v-pre>@vuepress/plugin-blog</code>\uFF0C\u5206\u7C7B\u548C\u6807\u7B7E\u529F\u80FD\u66F4\u5BB9\u6613\u5B9E\u73B0\uFF0C\u4F46\u4E5F\u6709\u4E86\u4E00\u4E9B\u5C40\u9650\u3002\u63A5\u4E0B\u6765\u4E24\u4E09\u5929\u7684\u65F6\u95F4\uFF0C\u90FD\u662F\u5728\u8FDB\u884C\u529F\u80FD\u7684\u8FC1\u79FB\u548C\u4E00\u4E9Bbug\u7684\u4FEE\u590D\u3002</p>
<p><code v-pre>vuepress-theme-reco@0.x</code> \u7684\u5F00\u53D1\u4E2D\uFF0C\u66F4\u52A0\u6DF1\u523B\u5730\u660E\u767D\u4E86\u6A21\u5757\u5316\u548C\u7EC4\u4EF6\u5316\u7F16\u7A0B\u7684\u91CD\u8981\u6027\uFF0C\u5982\u679C\u5F53\u521D\u6CA1\u6709\u628A\u4E00\u4E9B\u529F\u80FD\u8FDB\u884C\u5C01\u88C5\uFF0C\u800C\u662F\u76F4\u63A5\u7B80\u5355\u7684\u590D\u5236\uFF0C\u8FD9\u6B21\u5347\u7EA7\u4E5F\u4E0D\u4F1A\u8FD9\u4E48\u987A\u5229\u3002\u6A21\u5757\u62C6\u5206\u7684\u8D8A\u7EC6\uFF0C\u4F7F\u7528\u5C31\u4F1A\u8D8A\u7075\u6D3B\u3002</p>
<h3 id="cli" tabindex="-1"><a class="header-anchor" href="#cli" aria-hidden="true">#</a> CLI</h3>
<p>\u8FD8\u662F\u8877\u5FC3\u5730\u5E0C\u671B\u80FD\u6709\u66F4\u591A\u7684\u670B\u53CB\u53C2\u4E0E\u8FDB\u6765\uFF0C\u66F4\u5FEB\u5730\u53BB\u5B8C\u5584\u5B83\u3002\u63A5\u4E0B\u6765\u65F6\u95F4\u5141\u8BB8\u7684\u60C5\u51B5\u4E0B\uFF0C\u6211\u4F1A\u5F00\u6E90\u4E00\u6B3E\u81EA\u52A8\u751F\u6210\u535A\u5BA2\u7684\u811A\u624B\u67B6\uFF0C\u7565\u8FC7\u914D\u7F6E\u6B65\u9AA4\uFF0C\u76F4\u63A5\u4E66\u5199\u4F18\u8D28\u5185\u5BB9\uFF0C\u8FD9\u4E5F\u662F\u6211\u540E\u6765\u9010\u6E10\u5F62\u6210\u7684\u4E00\u79CD\u4FE1\u5FF5\uFF0C\u5C31\u662F\u5E0C\u671B\u80FD\u8BA9\u8FD9\u6B3E\u4E3B\u9898\uFF0C\u529F\u80FD\u8D8A\u5B8C\u5584\uFF0C\u4F7F\u7528\u8D8A\u6765\u8D8A\u7B80\u5355\u3002</p>
<h2 id="license" tabindex="-1"><a class="header-anchor" href="#license" aria-hidden="true">#</a> License</h2>
<p><a href="https://github.com/recoluan/vuepress-theme-reco/blob/master/LICENSE" target="_blank" rel="noopener noreferrer">MIT<ExternalLinkIcon/></a></p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/other/guide.html",pathLocale:"/",permalink:null,routeMeta:{title:"vuepress-theme-reco"},slug:"guide",filePath:"D:/Documents/wangfunfun-documents-online/blogs/other/guide.md",filePathRelative:"blogs/other/guide.md",componentFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/blogs/other/guide.html.vue",componentFilePathRelative:"pages/blogs/other/guide.html.vue",componentFileChunkName:"v-6bb1ef33",dataFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/blogs/other/guide.html.js",dataFilePathRelative:"pages/blogs/other/guide.html.js",dataFileChunkName:"v-6bb1ef33",htmlFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/dist/blogs/other/guide.html",htmlFilePathRelative:"blogs/other/guide.html"}]},"/categories/category1/1/":{pageSize:10,total:2,currentPage:1,currentClassificationKey:"categories",currentClassificationValue:"category1",pages:[{data:{key:"v-2eb9b31a",path:"/blogs/category1/2019/092101.html",title:"second page in category1",lang:"en-US",frontmatter:{title:"second page in category1",date:"2019/09/21",tags:["tag2"],categories:["category1"]},excerpt:"",headers:[],git:{createdTime:1655877926e3,updatedTime:1655879489e3,contributors:[{name:"wangfunfun",email:"15376960583@189.cn",commits:3}]},filePathRelative:"blogs/category1/2019/092101.md"},key:"v-2eb9b31a",path:"/blogs/category1/2019/092101.html",title:"second page in category1",lang:"en-US",frontmatter:{title:"second page in category1",date:"2019/09/21",tags:["tag2"],categories:["category1"]},excerpt:"",headers:[],content:`
second page in category1`,contentRendered:`<p>second page in category1</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/category1/2019/092101.html",pathLocale:"/",permalink:null,routeMeta:{title:"second page in category1"},slug:"092101",filePath:"D:/Documents/wangfunfun-documents-online/blogs/category1/2019/092101.md",filePathRelative:"blogs/category1/2019/092101.md",componentFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/blogs/category1/2019/092101.html.vue",componentFilePathRelative:"pages/blogs/category1/2019/092101.html.vue",componentFileChunkName:"v-2eb9b31a",dataFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/blogs/category1/2019/092101.html.js",dataFilePathRelative:"pages/blogs/category1/2019/092101.html.js",dataFileChunkName:"v-2eb9b31a",htmlFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/dist/blogs/category1/2019/092101.html",htmlFilePathRelative:"blogs/category1/2019/092101.html"},{data:{key:"v-32598bfc",path:"/blogs/category1/2018/121501.html",title:"first page in category1",lang:"en-US",frontmatter:{title:"first page in category1",date:"2018/12/15",tags:["tag1"],categories:["category1"]},excerpt:"",headers:[],git:{createdTime:1655877926e3,updatedTime:1655879489e3,contributors:[{name:"wangfunfun",email:"15376960583@189.cn",commits:3}]},filePathRelative:"blogs/category1/2018/121501.md"},key:"v-32598bfc",path:"/blogs/category1/2018/121501.html",title:"first page in category1",lang:"en-US",frontmatter:{title:"first page in category1",date:"2018/12/15",tags:["tag1"],categories:["category1"]},excerpt:"",headers:[],content:`
first page in category1`,contentRendered:`<p>first page in category1</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/category1/2018/121501.html",pathLocale:"/",permalink:null,routeMeta:{title:"first page in category1"},slug:"121501",filePath:"D:/Documents/wangfunfun-documents-online/blogs/category1/2018/121501.md",filePathRelative:"blogs/category1/2018/121501.md",componentFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/blogs/category1/2018/121501.html.vue",componentFilePathRelative:"pages/blogs/category1/2018/121501.html.vue",componentFileChunkName:"v-32598bfc",dataFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/blogs/category1/2018/121501.html.js",dataFilePathRelative:"pages/blogs/category1/2018/121501.html.js",dataFileChunkName:"v-32598bfc",htmlFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/dist/blogs/category1/2018/121501.html",htmlFilePathRelative:"blogs/category1/2018/121501.html"}]},"/categories/category2/1/":{pageSize:10,total:2,currentPage:1,currentClassificationKey:"categories",currentClassificationValue:"category2",pages:[{data:{key:"v-16458837",path:"/blogs/category2/2017/092101.html",title:"second page in category2",lang:"en-US",frontmatter:{title:"second page in category2",date:"2017/09/21",tags:["tag4"],categories:["category2"]},excerpt:"",headers:[],git:{createdTime:1655877926e3,updatedTime:1655879489e3,contributors:[{name:"wangfunfun",email:"15376960583@189.cn",commits:3}]},filePathRelative:"blogs/category2/2017/092101.md"},key:"v-16458837",path:"/blogs/category2/2017/092101.html",title:"second page in category2",lang:"en-US",frontmatter:{title:"second page in category2",date:"2017/09/21",tags:["tag4"],categories:["category2"]},excerpt:"",headers:[],content:`
second page in category2`,contentRendered:`<p>second page in category2</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/category2/2017/092101.html",pathLocale:"/",permalink:null,routeMeta:{title:"second page in category2"},slug:"092101",filePath:"D:/Documents/wangfunfun-documents-online/blogs/category2/2017/092101.md",filePathRelative:"blogs/category2/2017/092101.md",componentFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/blogs/category2/2017/092101.html.vue",componentFilePathRelative:"pages/blogs/category2/2017/092101.html.vue",componentFileChunkName:"v-16458837",dataFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/blogs/category2/2017/092101.html.js",dataFilePathRelative:"pages/blogs/category2/2017/092101.html.js",dataFileChunkName:"v-16458837",htmlFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/dist/blogs/category2/2017/092101.html",htmlFilePathRelative:"blogs/category2/2017/092101.html"},{data:{key:"v-19e56119",path:"/blogs/category2/2016/121501.html",title:"first page in category2",lang:"en-US",frontmatter:{title:"first page in category2",date:"2016/12/15",tags:["tag3"],categories:["category2"]},excerpt:"",headers:[],git:{createdTime:1655877926e3,updatedTime:1655879489e3,contributors:[{name:"wangfunfun",email:"15376960583@189.cn",commits:3}]},filePathRelative:"blogs/category2/2016/121501.md"},key:"v-19e56119",path:"/blogs/category2/2016/121501.html",title:"first page in category2",lang:"en-US",frontmatter:{title:"first page in category2",date:"2016/12/15",tags:["tag3"],categories:["category2"]},excerpt:"",headers:[],content:`
first page in category2`,contentRendered:`<p>first page in category2</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/category2/2016/121501.html",pathLocale:"/",permalink:null,routeMeta:{title:"first page in category2"},slug:"121501",filePath:"D:/Documents/wangfunfun-documents-online/blogs/category2/2016/121501.md",filePathRelative:"blogs/category2/2016/121501.md",componentFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/blogs/category2/2016/121501.html.vue",componentFilePathRelative:"pages/blogs/category2/2016/121501.html.vue",componentFileChunkName:"v-19e56119",dataFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/blogs/category2/2016/121501.html.js",dataFilePathRelative:"pages/blogs/category2/2016/121501.html.js",dataFileChunkName:"v-19e56119",htmlFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/dist/blogs/category2/2016/121501.html",htmlFilePathRelative:"blogs/category2/2016/121501.html"}]},"/tags/tag2/1/":{pageSize:10,total:1,currentPage:1,currentClassificationKey:"tags",currentClassificationValue:"tag2",pages:[{data:{key:"v-2eb9b31a",path:"/blogs/category1/2019/092101.html",title:"second page in category1",lang:"en-US",frontmatter:{title:"second page in category1",date:"2019/09/21",tags:["tag2"],categories:["category1"]},excerpt:"",headers:[],git:{createdTime:1655877926e3,updatedTime:1655879489e3,contributors:[{name:"wangfunfun",email:"15376960583@189.cn",commits:3}]},filePathRelative:"blogs/category1/2019/092101.md"},key:"v-2eb9b31a",path:"/blogs/category1/2019/092101.html",title:"second page in category1",lang:"en-US",frontmatter:{title:"second page in category1",date:"2019/09/21",tags:["tag2"],categories:["category1"]},excerpt:"",headers:[],content:`
second page in category1`,contentRendered:`<p>second page in category1</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/category1/2019/092101.html",pathLocale:"/",permalink:null,routeMeta:{title:"second page in category1"},slug:"092101",filePath:"D:/Documents/wangfunfun-documents-online/blogs/category1/2019/092101.md",filePathRelative:"blogs/category1/2019/092101.md",componentFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/blogs/category1/2019/092101.html.vue",componentFilePathRelative:"pages/blogs/category1/2019/092101.html.vue",componentFileChunkName:"v-2eb9b31a",dataFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/blogs/category1/2019/092101.html.js",dataFilePathRelative:"pages/blogs/category1/2019/092101.html.js",dataFileChunkName:"v-2eb9b31a",htmlFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/dist/blogs/category1/2019/092101.html",htmlFilePathRelative:"blogs/category1/2019/092101.html"}]},"/tags/tag1/1/":{pageSize:10,total:1,currentPage:1,currentClassificationKey:"tags",currentClassificationValue:"tag1",pages:[{data:{key:"v-32598bfc",path:"/blogs/category1/2018/121501.html",title:"first page in category1",lang:"en-US",frontmatter:{title:"first page in category1",date:"2018/12/15",tags:["tag1"],categories:["category1"]},excerpt:"",headers:[],git:{createdTime:1655877926e3,updatedTime:1655879489e3,contributors:[{name:"wangfunfun",email:"15376960583@189.cn",commits:3}]},filePathRelative:"blogs/category1/2018/121501.md"},key:"v-32598bfc",path:"/blogs/category1/2018/121501.html",title:"first page in category1",lang:"en-US",frontmatter:{title:"first page in category1",date:"2018/12/15",tags:["tag1"],categories:["category1"]},excerpt:"",headers:[],content:`
first page in category1`,contentRendered:`<p>first page in category1</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/category1/2018/121501.html",pathLocale:"/",permalink:null,routeMeta:{title:"first page in category1"},slug:"121501",filePath:"D:/Documents/wangfunfun-documents-online/blogs/category1/2018/121501.md",filePathRelative:"blogs/category1/2018/121501.md",componentFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/blogs/category1/2018/121501.html.vue",componentFilePathRelative:"pages/blogs/category1/2018/121501.html.vue",componentFileChunkName:"v-32598bfc",dataFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/blogs/category1/2018/121501.html.js",dataFilePathRelative:"pages/blogs/category1/2018/121501.html.js",dataFileChunkName:"v-32598bfc",htmlFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/dist/blogs/category1/2018/121501.html",htmlFilePathRelative:"blogs/category1/2018/121501.html"}]},"/tags/tag4/1/":{pageSize:10,total:1,currentPage:1,currentClassificationKey:"tags",currentClassificationValue:"tag4",pages:[{data:{key:"v-16458837",path:"/blogs/category2/2017/092101.html",title:"second page in category2",lang:"en-US",frontmatter:{title:"second page in category2",date:"2017/09/21",tags:["tag4"],categories:["category2"]},excerpt:"",headers:[],git:{createdTime:1655877926e3,updatedTime:1655879489e3,contributors:[{name:"wangfunfun",email:"15376960583@189.cn",commits:3}]},filePathRelative:"blogs/category2/2017/092101.md"},key:"v-16458837",path:"/blogs/category2/2017/092101.html",title:"second page in category2",lang:"en-US",frontmatter:{title:"second page in category2",date:"2017/09/21",tags:["tag4"],categories:["category2"]},excerpt:"",headers:[],content:`
second page in category2`,contentRendered:`<p>second page in category2</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/category2/2017/092101.html",pathLocale:"/",permalink:null,routeMeta:{title:"second page in category2"},slug:"092101",filePath:"D:/Documents/wangfunfun-documents-online/blogs/category2/2017/092101.md",filePathRelative:"blogs/category2/2017/092101.md",componentFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/blogs/category2/2017/092101.html.vue",componentFilePathRelative:"pages/blogs/category2/2017/092101.html.vue",componentFileChunkName:"v-16458837",dataFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/blogs/category2/2017/092101.html.js",dataFilePathRelative:"pages/blogs/category2/2017/092101.html.js",dataFileChunkName:"v-16458837",htmlFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/dist/blogs/category2/2017/092101.html",htmlFilePathRelative:"blogs/category2/2017/092101.html"}]},"/tags/tag3/1/":{pageSize:10,total:1,currentPage:1,currentClassificationKey:"tags",currentClassificationValue:"tag3",pages:[{data:{key:"v-19e56119",path:"/blogs/category2/2016/121501.html",title:"first page in category2",lang:"en-US",frontmatter:{title:"first page in category2",date:"2016/12/15",tags:["tag3"],categories:["category2"]},excerpt:"",headers:[],git:{createdTime:1655877926e3,updatedTime:1655879489e3,contributors:[{name:"wangfunfun",email:"15376960583@189.cn",commits:3}]},filePathRelative:"blogs/category2/2016/121501.md"},key:"v-19e56119",path:"/blogs/category2/2016/121501.html",title:"first page in category2",lang:"en-US",frontmatter:{title:"first page in category2",date:"2016/12/15",tags:["tag3"],categories:["category2"]},excerpt:"",headers:[],content:`
first page in category2`,contentRendered:`<p>first page in category2</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/category2/2016/121501.html",pathLocale:"/",permalink:null,routeMeta:{title:"first page in category2"},slug:"121501",filePath:"D:/Documents/wangfunfun-documents-online/blogs/category2/2016/121501.md",filePathRelative:"blogs/category2/2016/121501.md",componentFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/blogs/category2/2016/121501.html.vue",componentFilePathRelative:"pages/blogs/category2/2016/121501.html.vue",componentFileChunkName:"v-19e56119",dataFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/blogs/category2/2016/121501.html.js",dataFilePathRelative:"pages/blogs/category2/2016/121501.html.js",dataFileChunkName:"v-19e56119",htmlFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/dist/blogs/category2/2016/121501.html",htmlFilePathRelative:"blogs/category2/2016/121501.html"}]}},d1=[{data:{key:"v-6bb1ef33",path:"/blogs/other/guide.html",title:"vuepress-theme-reco",lang:"en-US",frontmatter:{title:"vuepress-theme-reco",date:"2019/04/09",categories:["reco"]},excerpt:"",headers:[{level:2,title:"Use",slug:"use",children:[]},{level:2,title:"Play Together",slug:"play-together",children:[{level:3,title:"0.x",slug:"_0-x",children:[]},{level:3,title:"1.x",slug:"_1-x",children:[]},{level:3,title:"CLI",slug:"cli",children:[]}]},{level:2,title:"License",slug:"license",children:[]}],git:{createdTime:1655877926e3,updatedTime:1655879489e3,contributors:[{name:"wangfunfun",email:"15376960583@189.cn",commits:3}]},filePathRelative:"blogs/other/guide.md"},key:"v-6bb1ef33",path:"/blogs/other/guide.html",title:"vuepress-theme-reco",lang:"en-US",frontmatter:{title:"vuepress-theme-reco",date:"2019/04/09",categories:["reco"]},excerpt:"",headers:[{level:2,title:"Use",slug:"use",children:[]},{level:2,title:"Play Together",slug:"play-together",children:[{level:3,title:"0.x",slug:"_0-x",children:[]},{level:3,title:"1.x",slug:"_1-x",children:[]},{level:3,title:"CLI",slug:"cli",children:[]}]},{level:2,title:"License",slug:"license",children:[]}],content:`
![vuepress](https://img.shields.io/badge/vuepress-0.14.8-brightgreen.svg)
![leancloud-storage](https://img.shields.io/badge/leancloud--storage-3.10.1-orange.svg)
![valine](https://img.shields.io/badge/valine-1.3.4-blue.svg)

::: tip \u4ECB\u7ECD
1. \u8FD9\u662F\u4E00\u4E2Avuepress\u4E3B\u9898\uFF0C\u65E8\u5728\u6DFB\u52A0\u535A\u5BA2\u6240\u9700\u7684\u5206\u7C7B\u3001TAB\u5899\u3001\u5206\u9875\u3001\u8BC4\u8BBA\u7B49\u80FD\uFF1B<br>
2. \u4E3B\u9898\u8FFD\u6C42\u6781\u7B80\uFF0C\u6839\u636E vuepress \u7684\u9ED8\u8BA4\u4E3B\u9898\u4FEE\u6539\u800C\u6210\uFF0C\u5B98\u65B9\u7684\u4E3B\u9898\u914D\u7F6E\u4ECD\u7136\u9002\u7528\uFF1B<br>
3. \u4F60\u53EF\u4EE5\u6253\u5F00 [\u5348\u540E\u5357\u6742](http://recoluan.gitlab.io) \u6765\u67E5\u770B\u6548\u679C\u3002
:::

## Use

**Build**

\`\`\`bash
npm run build

# or

yarn build
\`\`\`

**Server**

\`\`\`bash
npm run dev

# or

yarn dev
\`\`\`

## Play Together

### 0.x

\`vuepress-theme-reco@0.x\` \u662F\u57FA\u4E8E \`vuepress@0.x\` \u7684\u535A\u5BA2\u4E3B\u9898\u3002

\`vuepress@0.x\` \u529F\u80FD\u6BD4\u8F83\u7B80\u5355\uFF0C\u53EA\u9002\u5408\u4E66\u5199\u7B80\u5355\u7684\u6587\u6863\uFF0C\u4F46\u597D\u5728\u652F\u6301\u4E3B\u9898\u81EA\u5B9A\u4E49\uFF0C\u800C\u4E2A\u4EBA\u53C8\u5E0C\u671B\u80FD\u591F\u7528\u5B83\u6765\u4E66\u5199\u535A\u5BA2\uFF0C\u539F\u56E0\u5C31\u662F\u5B83\u8DB3\u591F\u7684\u7B80\u6D01\uFF0C\u6BEB\u65E0\u7591\u95EE\uFF0C\u8FD9\u4E5F\u7B26\u5408\u5F88\u591A\u7A0B\u5E8F\u5458\u7684\u89C2\u5FF5\uFF0C\u4E5F\u5C31\u662F\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\`vuepress-theme-reco@0.x\` \u7684\u7B2C\u4E00\u4E2A\u7248\u672C\u7ECF\u8FC7\u4E00\u4E2A\u901A\u5BB5\u800C\u4EA7\u751F\u3002

\u4E3B\u9898\u5F00\u6E90\u4E0D\u4E45\uFF0C\u5F88\u591A\u670B\u53CB\u901A\u8FC7\u5404\u79CD\u8054\u7CFB\u65B9\u5F0F\uFF0C\u7ED9\u5230\u5F88\u591A\u597D\u7684\u610F\u89C1\u548C\u5EFA\u8BAE\uFF0C\u6240\u4EE5\u6211\u4E2A\u4EBA\u4E5F\u5728\u79EF\u6781\u5730\u66F4\u65B0\u3002

\u56E0\u4E3A\u6211\u662F\u4E00\u540D\u524D\u7AEF\u5F00\u53D1\u5DE5\u7A0B\u5E08\uFF0C\u5F00\u53D1\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u603B\u662F\u60F3\u7740\u80FD\u4E0D\u80FD\u52A0\u5165\u4E00\u4E9B\u70AB\u9177\u7684\u6548\u679C\uFF0C\u6709\u5F88\u591A\u6B21\u90FD\u662F\u6DFB\u52A0\u4E0A\u53C8\u53BB\u6389\uFF0C\u53CD\u53CD\u590D\u590D\uFF0C\u6700\u540E\u90FD\u662F\u88AB **\u7B80\u6D01** \u7684\u8FD9\u4E2A\u539F\u5219\u963B\u6B62\u6389\uFF0C\u6BD5\u7ADF\uFF0C\u73B0\u5728\u6211\u662F\u5C06\u5B83\u5F53\u4F5C\u4E00\u4E2A\u4EA7\u54C1\u6765\u770B\u5F85\uFF0C\u5E76\u4E0D\u662F\u4E00\u4E2A\u6280\u672F\u6216\u8005\u662F\u6280\u5DE7\u7684\u5C1D\u8BD5\u9879\u76EE\u3002

### 1.x

\u968F\u7740\u4E0D\u65AD\u6709\u7528\u6237\u8FC7\u6765\u8BE2\u95EE\uFF1A\u4E3A\u4EC0\u4E48 \`vuepress-theme-reco@0.x\` \u4E0D\u80FD\u5728 \`vuepress@1.x\` \u4E0A\u4F7F\u7528\uFF1F\u672C\u6765\u53EA\u662F\u6253\u7B97\u5BF9 \`vuepress-theme-reco@0.x\` \u8FDB\u884C\u7B80\u5355\u7684bug\u4FEE\u590D\u7684\u6211\uFF0C\u7EC8\u7A76\u8FD8\u662F\u5FCD\u4E0D\u4F4F\uFF0C\u5F00\u59CB\u4E86 \`vuepress-theme-reco@1.x\` \u7684\u5F00\u53D1\u3002\u53C8\u662F\u5728\u4E00\u4E2A\u5BC2\u9759\u7684\u51CC\u6668\u4E24\u70B9\u534A\uFF08\u665A\u4E0A\u5C31\u662F\u51FA\u6D3B\u5FEB\uFF09\uFF0C\u6211\u9ED8\u9ED8\u5730\u5F00\u59CB\u4E86\u3002

\u4E3B\u9898\u5347\u7EA7\u7684\u5173\u952E\u4E5F\u5C31\u662F \`@vuepress/plugin-blog\` \u8FD9\u6B3E\u5B98\u65B9\u63D2\u4EF6\uFF0C\u5B83\u4E0D\u9700\u8981\u518D\u53BB\u9EBB\u70E6\u5730\u8FC7\u6EE4\u6570\u636E\uFF0C\u5C06\u5206\u7C7B\u548C\u6807\u7B7E\u7684\u76F8\u5173\u4FE1\u606F\u76F4\u63A5\u5B58\u5728 \`$categories\` \u548C \`$tags\` \u8FD9\u4E24\u4E2A\u5168\u5C40\u53D8\u91CF\u4E2D\u3002\u501F\u52A9\u4E8E \`@vuepress/plugin-blog\`\uFF0C\u5206\u7C7B\u548C\u6807\u7B7E\u529F\u80FD\u66F4\u5BB9\u6613\u5B9E\u73B0\uFF0C\u4F46\u4E5F\u6709\u4E86\u4E00\u4E9B\u5C40\u9650\u3002\u63A5\u4E0B\u6765\u4E24\u4E09\u5929\u7684\u65F6\u95F4\uFF0C\u90FD\u662F\u5728\u8FDB\u884C\u529F\u80FD\u7684\u8FC1\u79FB\u548C\u4E00\u4E9Bbug\u7684\u4FEE\u590D\u3002

\`vuepress-theme-reco@0.x\` \u7684\u5F00\u53D1\u4E2D\uFF0C\u66F4\u52A0\u6DF1\u523B\u5730\u660E\u767D\u4E86\u6A21\u5757\u5316\u548C\u7EC4\u4EF6\u5316\u7F16\u7A0B\u7684\u91CD\u8981\u6027\uFF0C\u5982\u679C\u5F53\u521D\u6CA1\u6709\u628A\u4E00\u4E9B\u529F\u80FD\u8FDB\u884C\u5C01\u88C5\uFF0C\u800C\u662F\u76F4\u63A5\u7B80\u5355\u7684\u590D\u5236\uFF0C\u8FD9\u6B21\u5347\u7EA7\u4E5F\u4E0D\u4F1A\u8FD9\u4E48\u987A\u5229\u3002\u6A21\u5757\u62C6\u5206\u7684\u8D8A\u7EC6\uFF0C\u4F7F\u7528\u5C31\u4F1A\u8D8A\u7075\u6D3B\u3002

### CLI

\u8FD8\u662F\u8877\u5FC3\u5730\u5E0C\u671B\u80FD\u6709\u66F4\u591A\u7684\u670B\u53CB\u53C2\u4E0E\u8FDB\u6765\uFF0C\u66F4\u5FEB\u5730\u53BB\u5B8C\u5584\u5B83\u3002\u63A5\u4E0B\u6765\u65F6\u95F4\u5141\u8BB8\u7684\u60C5\u51B5\u4E0B\uFF0C\u6211\u4F1A\u5F00\u6E90\u4E00\u6B3E\u81EA\u52A8\u751F\u6210\u535A\u5BA2\u7684\u811A\u624B\u67B6\uFF0C\u7565\u8FC7\u914D\u7F6E\u6B65\u9AA4\uFF0C\u76F4\u63A5\u4E66\u5199\u4F18\u8D28\u5185\u5BB9\uFF0C\u8FD9\u4E5F\u662F\u6211\u540E\u6765\u9010\u6E10\u5F62\u6210\u7684\u4E00\u79CD\u4FE1\u5FF5\uFF0C\u5C31\u662F\u5E0C\u671B\u80FD\u8BA9\u8FD9\u6B3E\u4E3B\u9898\uFF0C\u529F\u80FD\u8D8A\u5B8C\u5584\uFF0C\u4F7F\u7528\u8D8A\u6765\u8D8A\u7B80\u5355\u3002

## License
[MIT](https://github.com/recoluan/vuepress-theme-reco/blob/master/LICENSE)`,contentRendered:`<p><img src="https://img.shields.io/badge/vuepress-0.14.8-brightgreen.svg" alt="vuepress">
<img src="https://img.shields.io/badge/leancloud--storage-3.10.1-orange.svg" alt="leancloud-storage">
<img src="https://img.shields.io/badge/valine-1.3.4-blue.svg" alt="valine"></p>
<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">\u4ECB\u7ECD</p><ol>
<li>\u8FD9\u662F\u4E00\u4E2Avuepress\u4E3B\u9898\uFF0C\u65E8\u5728\u6DFB\u52A0\u535A\u5BA2\u6240\u9700\u7684\u5206\u7C7B\u3001TAB\u5899\u3001\u5206\u9875\u3001\u8BC4\u8BBA\u7B49\u80FD\uFF1B<br></li>
<li>\u4E3B\u9898\u8FFD\u6C42\u6781\u7B80\uFF0C\u6839\u636E vuepress \u7684\u9ED8\u8BA4\u4E3B\u9898\u4FEE\u6539\u800C\u6210\uFF0C\u5B98\u65B9\u7684\u4E3B\u9898\u914D\u7F6E\u4ECD\u7136\u9002\u7528\uFF1B<br></li>
<li>\u4F60\u53EF\u4EE5\u6253\u5F00 <a href="http://recoluan.gitlab.io" target="_blank" rel="noopener noreferrer">\u5348\u540E\u5357\u6742<ExternalLinkIcon/></a> \u6765\u67E5\u770B\u6548\u679C\u3002</li>
</ol>
</div><h2 id="use" tabindex="-1"><a class="header-anchor" href="#use" aria-hidden="true">#</a> Use</h2>
<p><strong>Build</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run build

<span class="token comment"># or</span>

<span class="token function">yarn</span> build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Server</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run dev

<span class="token comment"># or</span>

<span class="token function">yarn</span> dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="play-together" tabindex="-1"><a class="header-anchor" href="#play-together" aria-hidden="true">#</a> Play Together</h2>
<h3 id="_0-x" tabindex="-1"><a class="header-anchor" href="#_0-x" aria-hidden="true">#</a> 0.x</h3>
<p><code v-pre>vuepress-theme-reco@0.x</code> \u662F\u57FA\u4E8E <code v-pre>vuepress@0.x</code> \u7684\u535A\u5BA2\u4E3B\u9898\u3002</p>
<p><code v-pre>vuepress@0.x</code> \u529F\u80FD\u6BD4\u8F83\u7B80\u5355\uFF0C\u53EA\u9002\u5408\u4E66\u5199\u7B80\u5355\u7684\u6587\u6863\uFF0C\u4F46\u597D\u5728\u652F\u6301\u4E3B\u9898\u81EA\u5B9A\u4E49\uFF0C\u800C\u4E2A\u4EBA\u53C8\u5E0C\u671B\u80FD\u591F\u7528\u5B83\u6765\u4E66\u5199\u535A\u5BA2\uFF0C\u539F\u56E0\u5C31\u662F\u5B83\u8DB3\u591F\u7684\u7B80\u6D01\uFF0C\u6BEB\u65E0\u7591\u95EE\uFF0C\u8FD9\u4E5F\u7B26\u5408\u5F88\u591A\u7A0B\u5E8F\u5458\u7684\u89C2\u5FF5\uFF0C\u4E5F\u5C31\u662F\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C<code v-pre>vuepress-theme-reco@0.x</code> \u7684\u7B2C\u4E00\u4E2A\u7248\u672C\u7ECF\u8FC7\u4E00\u4E2A\u901A\u5BB5\u800C\u4EA7\u751F\u3002</p>
<p>\u4E3B\u9898\u5F00\u6E90\u4E0D\u4E45\uFF0C\u5F88\u591A\u670B\u53CB\u901A\u8FC7\u5404\u79CD\u8054\u7CFB\u65B9\u5F0F\uFF0C\u7ED9\u5230\u5F88\u591A\u597D\u7684\u610F\u89C1\u548C\u5EFA\u8BAE\uFF0C\u6240\u4EE5\u6211\u4E2A\u4EBA\u4E5F\u5728\u79EF\u6781\u5730\u66F4\u65B0\u3002</p>
<p>\u56E0\u4E3A\u6211\u662F\u4E00\u540D\u524D\u7AEF\u5F00\u53D1\u5DE5\u7A0B\u5E08\uFF0C\u5F00\u53D1\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u603B\u662F\u60F3\u7740\u80FD\u4E0D\u80FD\u52A0\u5165\u4E00\u4E9B\u70AB\u9177\u7684\u6548\u679C\uFF0C\u6709\u5F88\u591A\u6B21\u90FD\u662F\u6DFB\u52A0\u4E0A\u53C8\u53BB\u6389\uFF0C\u53CD\u53CD\u590D\u590D\uFF0C\u6700\u540E\u90FD\u662F\u88AB <strong>\u7B80\u6D01</strong> \u7684\u8FD9\u4E2A\u539F\u5219\u963B\u6B62\u6389\uFF0C\u6BD5\u7ADF\uFF0C\u73B0\u5728\u6211\u662F\u5C06\u5B83\u5F53\u4F5C\u4E00\u4E2A\u4EA7\u54C1\u6765\u770B\u5F85\uFF0C\u5E76\u4E0D\u662F\u4E00\u4E2A\u6280\u672F\u6216\u8005\u662F\u6280\u5DE7\u7684\u5C1D\u8BD5\u9879\u76EE\u3002</p>
<h3 id="_1-x" tabindex="-1"><a class="header-anchor" href="#_1-x" aria-hidden="true">#</a> 1.x</h3>
<p>\u968F\u7740\u4E0D\u65AD\u6709\u7528\u6237\u8FC7\u6765\u8BE2\u95EE\uFF1A\u4E3A\u4EC0\u4E48 <code v-pre>vuepress-theme-reco@0.x</code> \u4E0D\u80FD\u5728 <code v-pre>vuepress@1.x</code> \u4E0A\u4F7F\u7528\uFF1F\u672C\u6765\u53EA\u662F\u6253\u7B97\u5BF9 <code v-pre>vuepress-theme-reco@0.x</code> \u8FDB\u884C\u7B80\u5355\u7684bug\u4FEE\u590D\u7684\u6211\uFF0C\u7EC8\u7A76\u8FD8\u662F\u5FCD\u4E0D\u4F4F\uFF0C\u5F00\u59CB\u4E86 <code v-pre>vuepress-theme-reco@1.x</code> \u7684\u5F00\u53D1\u3002\u53C8\u662F\u5728\u4E00\u4E2A\u5BC2\u9759\u7684\u51CC\u6668\u4E24\u70B9\u534A\uFF08\u665A\u4E0A\u5C31\u662F\u51FA\u6D3B\u5FEB\uFF09\uFF0C\u6211\u9ED8\u9ED8\u5730\u5F00\u59CB\u4E86\u3002</p>
<p>\u4E3B\u9898\u5347\u7EA7\u7684\u5173\u952E\u4E5F\u5C31\u662F <code v-pre>@vuepress/plugin-blog</code> \u8FD9\u6B3E\u5B98\u65B9\u63D2\u4EF6\uFF0C\u5B83\u4E0D\u9700\u8981\u518D\u53BB\u9EBB\u70E6\u5730\u8FC7\u6EE4\u6570\u636E\uFF0C\u5C06\u5206\u7C7B\u548C\u6807\u7B7E\u7684\u76F8\u5173\u4FE1\u606F\u76F4\u63A5\u5B58\u5728 <code v-pre>$categories</code> \u548C <code v-pre>$tags</code> \u8FD9\u4E24\u4E2A\u5168\u5C40\u53D8\u91CF\u4E2D\u3002\u501F\u52A9\u4E8E <code v-pre>@vuepress/plugin-blog</code>\uFF0C\u5206\u7C7B\u548C\u6807\u7B7E\u529F\u80FD\u66F4\u5BB9\u6613\u5B9E\u73B0\uFF0C\u4F46\u4E5F\u6709\u4E86\u4E00\u4E9B\u5C40\u9650\u3002\u63A5\u4E0B\u6765\u4E24\u4E09\u5929\u7684\u65F6\u95F4\uFF0C\u90FD\u662F\u5728\u8FDB\u884C\u529F\u80FD\u7684\u8FC1\u79FB\u548C\u4E00\u4E9Bbug\u7684\u4FEE\u590D\u3002</p>
<p><code v-pre>vuepress-theme-reco@0.x</code> \u7684\u5F00\u53D1\u4E2D\uFF0C\u66F4\u52A0\u6DF1\u523B\u5730\u660E\u767D\u4E86\u6A21\u5757\u5316\u548C\u7EC4\u4EF6\u5316\u7F16\u7A0B\u7684\u91CD\u8981\u6027\uFF0C\u5982\u679C\u5F53\u521D\u6CA1\u6709\u628A\u4E00\u4E9B\u529F\u80FD\u8FDB\u884C\u5C01\u88C5\uFF0C\u800C\u662F\u76F4\u63A5\u7B80\u5355\u7684\u590D\u5236\uFF0C\u8FD9\u6B21\u5347\u7EA7\u4E5F\u4E0D\u4F1A\u8FD9\u4E48\u987A\u5229\u3002\u6A21\u5757\u62C6\u5206\u7684\u8D8A\u7EC6\uFF0C\u4F7F\u7528\u5C31\u4F1A\u8D8A\u7075\u6D3B\u3002</p>
<h3 id="cli" tabindex="-1"><a class="header-anchor" href="#cli" aria-hidden="true">#</a> CLI</h3>
<p>\u8FD8\u662F\u8877\u5FC3\u5730\u5E0C\u671B\u80FD\u6709\u66F4\u591A\u7684\u670B\u53CB\u53C2\u4E0E\u8FDB\u6765\uFF0C\u66F4\u5FEB\u5730\u53BB\u5B8C\u5584\u5B83\u3002\u63A5\u4E0B\u6765\u65F6\u95F4\u5141\u8BB8\u7684\u60C5\u51B5\u4E0B\uFF0C\u6211\u4F1A\u5F00\u6E90\u4E00\u6B3E\u81EA\u52A8\u751F\u6210\u535A\u5BA2\u7684\u811A\u624B\u67B6\uFF0C\u7565\u8FC7\u914D\u7F6E\u6B65\u9AA4\uFF0C\u76F4\u63A5\u4E66\u5199\u4F18\u8D28\u5185\u5BB9\uFF0C\u8FD9\u4E5F\u662F\u6211\u540E\u6765\u9010\u6E10\u5F62\u6210\u7684\u4E00\u79CD\u4FE1\u5FF5\uFF0C\u5C31\u662F\u5E0C\u671B\u80FD\u8BA9\u8FD9\u6B3E\u4E3B\u9898\uFF0C\u529F\u80FD\u8D8A\u5B8C\u5584\uFF0C\u4F7F\u7528\u8D8A\u6765\u8D8A\u7B80\u5355\u3002</p>
<h2 id="license" tabindex="-1"><a class="header-anchor" href="#license" aria-hidden="true">#</a> License</h2>
<p><a href="https://github.com/recoluan/vuepress-theme-reco/blob/master/LICENSE" target="_blank" rel="noopener noreferrer">MIT<ExternalLinkIcon/></a></p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/other/guide.html",pathLocale:"/",permalink:null,routeMeta:{title:"vuepress-theme-reco"},slug:"guide",filePath:"D:/Documents/wangfunfun-documents-online/blogs/other/guide.md",filePathRelative:"blogs/other/guide.md",componentFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/blogs/other/guide.html.vue",componentFilePathRelative:"pages/blogs/other/guide.html.vue",componentFileChunkName:"v-6bb1ef33",dataFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/blogs/other/guide.html.js",dataFilePathRelative:"pages/blogs/other/guide.html.js",dataFileChunkName:"v-6bb1ef33",htmlFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/dist/blogs/other/guide.html",htmlFilePathRelative:"blogs/other/guide.html"},{data:{key:"v-35214767",path:"/docs/softwares/android-studio.html",title:"Android Studio",lang:"en-US",frontmatter:{0:"s",1:"l",2:"i",3:"d",4:"e",5:"r",6:":",7:"a",8:"u",9:"t",10:"o"},excerpt:"",headers:[],git:{createdTime:1655877926e3,updatedTime:1655879489e3,contributors:[{name:"wangfunfun",email:"15376960583@189.cn",commits:3}]},filePathRelative:"docs/softwares/android-studio.md"},key:"v-35214767",path:"/docs/softwares/android-studio.html",title:"Android Studio",lang:"en-US",frontmatter:{0:"s",1:"l",2:"i",3:"d",4:"e",5:"r",6:":",7:"a",8:"u",9:"t",10:"o"},excerpt:"",headers:[],content:`\r
# Android Studio\r
\r
\u6682\u65E0\u5185\u5BB9`,contentRendered:`<h1 id="android-studio" tabindex="-1"><a class="header-anchor" href="#android-studio" aria-hidden="true">#</a> Android Studio</h1>
<p>\u6682\u65E0\u5185\u5BB9</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/softwares/android-studio.html",pathLocale:"/",permalink:null,routeMeta:{title:"Android Studio"},slug:"android-studio",filePath:"D:/Documents/wangfunfun-documents-online/docs/softwares/android-studio.md",filePathRelative:"docs/softwares/android-studio.md",componentFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/docs/softwares/android-studio.html.vue",componentFilePathRelative:"pages/docs/softwares/android-studio.html.vue",componentFileChunkName:"v-35214767",dataFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/docs/softwares/android-studio.html.js",dataFilePathRelative:"pages/docs/softwares/android-studio.html.js",dataFileChunkName:"v-35214767",htmlFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/dist/docs/softwares/android-studio.html",htmlFilePathRelative:"docs/softwares/android-studio.html"},{data:{key:"v-4e26139e",path:"/docs/softwares/final-shell.html",title:"Final Shell",lang:"en-US",frontmatter:{0:"s",1:"l",2:"i",3:"d",4:"e",5:"r",6:":",7:"a",8:"u",9:"t",10:"o"},excerpt:"",headers:[],git:{createdTime:1655877926e3,updatedTime:1655879489e3,contributors:[{name:"wangfunfun",email:"15376960583@189.cn",commits:3}]},filePathRelative:"docs/softwares/final-shell.md"},key:"v-4e26139e",path:"/docs/softwares/final-shell.html",title:"Final Shell",lang:"en-US",frontmatter:{0:"s",1:"l",2:"i",3:"d",4:"e",5:"r",6:":",7:"a",8:"u",9:"t",10:"o"},excerpt:"",headers:[],content:`\r
# Final Shell\r
\r
\u6682\u65E0\u5185\u5BB9\r
`,contentRendered:`<h1 id="final-shell" tabindex="-1"><a class="header-anchor" href="#final-shell" aria-hidden="true">#</a> Final Shell</h1>
<p>\u6682\u65E0\u5185\u5BB9</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/softwares/final-shell.html",pathLocale:"/",permalink:null,routeMeta:{title:"Final Shell"},slug:"final-shell",filePath:"D:/Documents/wangfunfun-documents-online/docs/softwares/final-shell.md",filePathRelative:"docs/softwares/final-shell.md",componentFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/docs/softwares/final-shell.html.vue",componentFilePathRelative:"pages/docs/softwares/final-shell.html.vue",componentFileChunkName:"v-4e26139e",dataFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/docs/softwares/final-shell.html.js",dataFilePathRelative:"pages/docs/softwares/final-shell.html.js",dataFileChunkName:"v-4e26139e",htmlFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/dist/docs/softwares/final-shell.html",htmlFilePathRelative:"docs/softwares/final-shell.html"},{data:{key:"v-ff4e889c",path:"/docs/softwares/git-tortoise-git.html",title:"Git / Tortoise Git",lang:"en-US",frontmatter:{0:"s",1:"l",2:"i",3:"d",4:"e",5:"r",6:":",7:"a",8:"u",9:"t",10:"o"},excerpt:"",headers:[{level:2,title:"\u5B89\u88C5 Git",slug:"\u5B89\u88C5-git",children:[{level:3,title:"\u4E0B\u8F7D",slug:"\u4E0B\u8F7D",children:[]},{level:3,title:"\u5B89\u88C5",slug:"\u5B89\u88C5",children:[]}]},{level:2,title:"\u5B89\u88C5 Tortoise Git",slug:"\u5B89\u88C5-tortoise-git",children:[{level:3,title:"\u4E0B\u8F7D",slug:"\u4E0B\u8F7D-1",children:[]},{level:3,title:"\u5B89\u88C5",slug:"\u5B89\u88C5-1",children:[]},{level:3,title:"\u8BED\u8A00\u5305",slug:"\u8BED\u8A00\u5305",children:[]}]},{level:2,title:"\u4F7F\u7528 Git",slug:"\u4F7F\u7528-git",children:[]},{level:2,title:"\u4F7F\u7528 Tortoise Git",slug:"\u4F7F\u7528-tortoise-git",children:[{level:3,title:"\u63D0\u4EA4",slug:"\u63D0\u4EA4",children:[]},{level:3,title:"\u62C9\u53D6",slug:"\u62C9\u53D6",children:[]},{level:3,title:"\u63A8\u9001",slug:"\u63A8\u9001",children:[]},{level:3,title:"\u5207\u6362/\u68C0\u51FA",slug:"\u5207\u6362-\u68C0\u51FA",children:[]},{level:3,title:"\u5408\u5E76\u5206\u652F",slug:"\u5408\u5E76\u5206\u652F",children:[]},{level:3,title:"\u89E3\u51B3\u51B2\u7A81",slug:"\u89E3\u51B3\u51B2\u7A81",children:[]},{level:3,title:"\u67E5\u770B\u65E5\u5FD7",slug:"\u67E5\u770B\u65E5\u5FD7",children:[]}]},{level:2,title:"\u5E38\u89C1\u95EE\u9898",slug:"\u5E38\u89C1\u95EE\u9898",children:[]}],git:{createdTime:1655877926e3,updatedTime:1655879489e3,contributors:[{name:"wangfunfun",email:"15376960583@189.cn",commits:3}]},filePathRelative:"docs/softwares/git-tortoise-git.md"},key:"v-ff4e889c",path:"/docs/softwares/git-tortoise-git.html",title:"Git / Tortoise Git",lang:"en-US",frontmatter:{0:"s",1:"l",2:"i",3:"d",4:"e",5:"r",6:":",7:"a",8:"u",9:"t",10:"o"},excerpt:"",headers:[{level:2,title:"\u5B89\u88C5 Git",slug:"\u5B89\u88C5-git",children:[{level:3,title:"\u4E0B\u8F7D",slug:"\u4E0B\u8F7D",children:[]},{level:3,title:"\u5B89\u88C5",slug:"\u5B89\u88C5",children:[]}]},{level:2,title:"\u5B89\u88C5 Tortoise Git",slug:"\u5B89\u88C5-tortoise-git",children:[{level:3,title:"\u4E0B\u8F7D",slug:"\u4E0B\u8F7D-1",children:[]},{level:3,title:"\u5B89\u88C5",slug:"\u5B89\u88C5-1",children:[]},{level:3,title:"\u8BED\u8A00\u5305",slug:"\u8BED\u8A00\u5305",children:[]}]},{level:2,title:"\u4F7F\u7528 Git",slug:"\u4F7F\u7528-git",children:[]},{level:2,title:"\u4F7F\u7528 Tortoise Git",slug:"\u4F7F\u7528-tortoise-git",children:[{level:3,title:"\u63D0\u4EA4",slug:"\u63D0\u4EA4",children:[]},{level:3,title:"\u62C9\u53D6",slug:"\u62C9\u53D6",children:[]},{level:3,title:"\u63A8\u9001",slug:"\u63A8\u9001",children:[]},{level:3,title:"\u5207\u6362/\u68C0\u51FA",slug:"\u5207\u6362-\u68C0\u51FA",children:[]},{level:3,title:"\u5408\u5E76\u5206\u652F",slug:"\u5408\u5E76\u5206\u652F",children:[]},{level:3,title:"\u89E3\u51B3\u51B2\u7A81",slug:"\u89E3\u51B3\u51B2\u7A81",children:[]},{level:3,title:"\u67E5\u770B\u65E5\u5FD7",slug:"\u67E5\u770B\u65E5\u5FD7",children:[]}]},{level:2,title:"\u5E38\u89C1\u95EE\u9898",slug:"\u5E38\u89C1\u95EE\u9898",children:[]}],content:`\r
# Git / Tortoise Git\r
\r
## \u5B89\u88C5 Git\r
\r
### \u4E0B\u8F7D\r
\r
### \u5B89\u88C5\r
\r
## \u5B89\u88C5 Tortoise Git\r
\r
### \u4E0B\u8F7D\r
\r
### \u5B89\u88C5\r
\r
### \u8BED\u8A00\u5305\r
\r
## \u4F7F\u7528 Git\r
\r
## \u4F7F\u7528 Tortoise Git\r
\r
### \u63D0\u4EA4\r
\r
### \u62C9\u53D6\r
\r
### \u63A8\u9001\r
\r
### \u5207\u6362/\u68C0\u51FA\r
\r
### \u5408\u5E76\u5206\u652F\r
\r
### \u89E3\u51B3\u51B2\u7A81\r
\r
### \u67E5\u770B\u65E5\u5FD7\r
\r
## \u5E38\u89C1\u95EE\u9898\r
`,contentRendered:`<h1 id="git-tortoise-git" tabindex="-1"><a class="header-anchor" href="#git-tortoise-git" aria-hidden="true">#</a> Git / Tortoise Git</h1>
<h2 id="\u5B89\u88C5-git" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-git" aria-hidden="true">#</a> \u5B89\u88C5 Git</h2>
<h3 id="\u4E0B\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D" aria-hidden="true">#</a> \u4E0B\u8F7D</h3>
<h3 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h3>
<h2 id="\u5B89\u88C5-tortoise-git" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-tortoise-git" aria-hidden="true">#</a> \u5B89\u88C5 Tortoise Git</h2>
<h3 id="\u4E0B\u8F7D-1" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D-1" aria-hidden="true">#</a> \u4E0B\u8F7D</h3>
<h3 id="\u5B89\u88C5-1" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-1" aria-hidden="true">#</a> \u5B89\u88C5</h3>
<h3 id="\u8BED\u8A00\u5305" tabindex="-1"><a class="header-anchor" href="#\u8BED\u8A00\u5305" aria-hidden="true">#</a> \u8BED\u8A00\u5305</h3>
<h2 id="\u4F7F\u7528-git" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-git" aria-hidden="true">#</a> \u4F7F\u7528 Git</h2>
<h2 id="\u4F7F\u7528-tortoise-git" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-tortoise-git" aria-hidden="true">#</a> \u4F7F\u7528 Tortoise Git</h2>
<h3 id="\u63D0\u4EA4" tabindex="-1"><a class="header-anchor" href="#\u63D0\u4EA4" aria-hidden="true">#</a> \u63D0\u4EA4</h3>
<h3 id="\u62C9\u53D6" tabindex="-1"><a class="header-anchor" href="#\u62C9\u53D6" aria-hidden="true">#</a> \u62C9\u53D6</h3>
<h3 id="\u63A8\u9001" tabindex="-1"><a class="header-anchor" href="#\u63A8\u9001" aria-hidden="true">#</a> \u63A8\u9001</h3>
<h3 id="\u5207\u6362-\u68C0\u51FA" tabindex="-1"><a class="header-anchor" href="#\u5207\u6362-\u68C0\u51FA" aria-hidden="true">#</a> \u5207\u6362/\u68C0\u51FA</h3>
<h3 id="\u5408\u5E76\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u5408\u5E76\u5206\u652F" aria-hidden="true">#</a> \u5408\u5E76\u5206\u652F</h3>
<h3 id="\u89E3\u51B3\u51B2\u7A81" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u51B2\u7A81" aria-hidden="true">#</a> \u89E3\u51B3\u51B2\u7A81</h3>
<h3 id="\u67E5\u770B\u65E5\u5FD7" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u65E5\u5FD7" aria-hidden="true">#</a> \u67E5\u770B\u65E5\u5FD7</h3>
<h2 id="\u5E38\u89C1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a> \u5E38\u89C1\u95EE\u9898</h2>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/softwares/git-tortoise-git.html",pathLocale:"/",permalink:null,routeMeta:{title:"Git / Tortoise Git"},slug:"git-tortoise-git",filePath:"D:/Documents/wangfunfun-documents-online/docs/softwares/git-tortoise-git.md",filePathRelative:"docs/softwares/git-tortoise-git.md",componentFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/docs/softwares/git-tortoise-git.html.vue",componentFilePathRelative:"pages/docs/softwares/git-tortoise-git.html.vue",componentFileChunkName:"v-ff4e889c",dataFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/docs/softwares/git-tortoise-git.html.js",dataFilePathRelative:"pages/docs/softwares/git-tortoise-git.html.js",dataFileChunkName:"v-ff4e889c",htmlFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/dist/docs/softwares/git-tortoise-git.html",htmlFilePathRelative:"docs/softwares/git-tortoise-git.html"},{data:{key:"v-35284912",path:"/docs/softwares/hbuilderx.html",title:"HBuilder X",lang:"en-US",frontmatter:{0:"s",1:"l",2:"i",3:"d",4:"e",5:"r",6:":",7:"a",8:"u",9:"t",10:"o"},excerpt:"",headers:[{level:2,title:"\u4E0B\u8F7D\u4E0E\u5B89\u88C5",slug:"\u4E0B\u8F7D\u4E0E\u5B89\u88C5",children:[{level:3,title:"\u4E0B\u8F7D",slug:"\u4E0B\u8F7D",children:[]},{level:3,title:"\u5B89\u88C5",slug:"\u5B89\u88C5",children:[]}]},{level:2,title:"\u63D2\u4EF6\u914D\u7F6E",slug:"\u63D2\u4EF6\u914D\u7F6E",children:[{level:3,title:"\u5FC5\u5907\u63D2\u4EF6",slug:"\u5FC5\u5907\u63D2\u4EF6",children:[]},{level:3,title:"\u6269\u5C55\u63D2\u4EF6",slug:"\u6269\u5C55\u63D2\u4EF6",children:[]}]},{level:2,title:"\u6A21\u62DF\u5668\u4E0E\u771F\u673A\u8C03\u8BD5",slug:"\u6A21\u62DF\u5668\u4E0E\u771F\u673A\u8C03\u8BD5",children:[{level:3,title:"\u6A21\u62DF\u5668",slug:"\u6A21\u62DF\u5668",children:[]},{level:3,title:"\u771F\u673A\u8C03\u8BD5",slug:"\u771F\u673A\u8C03\u8BD5",children:[]},{level:3,title:"\u81EA\u5B9A\u4E49\u57FA\u5EA7",slug:"\u81EA\u5B9A\u4E49\u57FA\u5EA7",children:[]}]},{level:2,title:"\u6253\u5305\u4E0E\u53D1\u884C",slug:"\u6253\u5305\u4E0E\u53D1\u884C",children:[{level:3,title:"\u6253\u5305",slug:"\u6253\u5305",children:[]},{level:3,title:"\u53D1\u884C",slug:"\u53D1\u884C",children:[]}]},{level:2,title:"\u5E38\u89C1\u95EE\u9898",slug:"\u5E38\u89C1\u95EE\u9898",children:[]}],git:{createdTime:1655877926e3,updatedTime:1655879489e3,contributors:[{name:"wangfunfun",email:"15376960583@189.cn",commits:3}]},filePathRelative:"docs/softwares/hbuilderx.md"},key:"v-35284912",path:"/docs/softwares/hbuilderx.html",title:"HBuilder X",lang:"en-US",frontmatter:{0:"s",1:"l",2:"i",3:"d",4:"e",5:"r",6:":",7:"a",8:"u",9:"t",10:"o"},excerpt:"",headers:[{level:2,title:"\u4E0B\u8F7D\u4E0E\u5B89\u88C5",slug:"\u4E0B\u8F7D\u4E0E\u5B89\u88C5",children:[{level:3,title:"\u4E0B\u8F7D",slug:"\u4E0B\u8F7D",children:[]},{level:3,title:"\u5B89\u88C5",slug:"\u5B89\u88C5",children:[]}]},{level:2,title:"\u63D2\u4EF6\u914D\u7F6E",slug:"\u63D2\u4EF6\u914D\u7F6E",children:[{level:3,title:"\u5FC5\u5907\u63D2\u4EF6",slug:"\u5FC5\u5907\u63D2\u4EF6",children:[]},{level:3,title:"\u6269\u5C55\u63D2\u4EF6",slug:"\u6269\u5C55\u63D2\u4EF6",children:[]}]},{level:2,title:"\u6A21\u62DF\u5668\u4E0E\u771F\u673A\u8C03\u8BD5",slug:"\u6A21\u62DF\u5668\u4E0E\u771F\u673A\u8C03\u8BD5",children:[{level:3,title:"\u6A21\u62DF\u5668",slug:"\u6A21\u62DF\u5668",children:[]},{level:3,title:"\u771F\u673A\u8C03\u8BD5",slug:"\u771F\u673A\u8C03\u8BD5",children:[]},{level:3,title:"\u81EA\u5B9A\u4E49\u57FA\u5EA7",slug:"\u81EA\u5B9A\u4E49\u57FA\u5EA7",children:[]}]},{level:2,title:"\u6253\u5305\u4E0E\u53D1\u884C",slug:"\u6253\u5305\u4E0E\u53D1\u884C",children:[{level:3,title:"\u6253\u5305",slug:"\u6253\u5305",children:[]},{level:3,title:"\u53D1\u884C",slug:"\u53D1\u884C",children:[]}]},{level:2,title:"\u5E38\u89C1\u95EE\u9898",slug:"\u5E38\u89C1\u95EE\u9898",children:[]}],content:`\r
# HBuilder X\r
\r
## \u4E0B\u8F7D\u4E0E\u5B89\u88C5\r
\r
### \u4E0B\u8F7D\r
\r
### \u5B89\u88C5\r
\r
## \u63D2\u4EF6\u914D\u7F6E\r
\r
### \u5FC5\u5907\u63D2\u4EF6\r
\r
### \u6269\u5C55\u63D2\u4EF6\r
\r
## \u6A21\u62DF\u5668\u4E0E\u771F\u673A\u8C03\u8BD5\r
\r
### \u6A21\u62DF\u5668\r
\r
### \u771F\u673A\u8C03\u8BD5\r
\r
### \u81EA\u5B9A\u4E49\u57FA\u5EA7\r
\r
## \u6253\u5305\u4E0E\u53D1\u884C\r
\r
### \u6253\u5305\r
\r
### \u53D1\u884C\r
\r
## \u5E38\u89C1\u95EE\u9898\r
`,contentRendered:`<h1 id="hbuilder-x" tabindex="-1"><a class="header-anchor" href="#hbuilder-x" aria-hidden="true">#</a> HBuilder X</h1>
<h2 id="\u4E0B\u8F7D\u4E0E\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D\u4E0E\u5B89\u88C5" aria-hidden="true">#</a> \u4E0B\u8F7D\u4E0E\u5B89\u88C5</h2>
<h3 id="\u4E0B\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D" aria-hidden="true">#</a> \u4E0B\u8F7D</h3>
<h3 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h3>
<h2 id="\u63D2\u4EF6\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6\u914D\u7F6E" aria-hidden="true">#</a> \u63D2\u4EF6\u914D\u7F6E</h2>
<h3 id="\u5FC5\u5907\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5FC5\u5907\u63D2\u4EF6" aria-hidden="true">#</a> \u5FC5\u5907\u63D2\u4EF6</h3>
<h3 id="\u6269\u5C55\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6269\u5C55\u63D2\u4EF6" aria-hidden="true">#</a> \u6269\u5C55\u63D2\u4EF6</h3>
<h2 id="\u6A21\u62DF\u5668\u4E0E\u771F\u673A\u8C03\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u6A21\u62DF\u5668\u4E0E\u771F\u673A\u8C03\u8BD5" aria-hidden="true">#</a> \u6A21\u62DF\u5668\u4E0E\u771F\u673A\u8C03\u8BD5</h2>
<h3 id="\u6A21\u62DF\u5668" tabindex="-1"><a class="header-anchor" href="#\u6A21\u62DF\u5668" aria-hidden="true">#</a> \u6A21\u62DF\u5668</h3>
<h3 id="\u771F\u673A\u8C03\u8BD5" tabindex="-1"><a class="header-anchor" href="#\u771F\u673A\u8C03\u8BD5" aria-hidden="true">#</a> \u771F\u673A\u8C03\u8BD5</h3>
<h3 id="\u81EA\u5B9A\u4E49\u57FA\u5EA7" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u57FA\u5EA7" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u57FA\u5EA7</h3>
<h2 id="\u6253\u5305\u4E0E\u53D1\u884C" tabindex="-1"><a class="header-anchor" href="#\u6253\u5305\u4E0E\u53D1\u884C" aria-hidden="true">#</a> \u6253\u5305\u4E0E\u53D1\u884C</h2>
<h3 id="\u6253\u5305" tabindex="-1"><a class="header-anchor" href="#\u6253\u5305" aria-hidden="true">#</a> \u6253\u5305</h3>
<h3 id="\u53D1\u884C" tabindex="-1"><a class="header-anchor" href="#\u53D1\u884C" aria-hidden="true">#</a> \u53D1\u884C</h3>
<h2 id="\u5E38\u89C1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a> \u5E38\u89C1\u95EE\u9898</h2>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/softwares/hbuilderx.html",pathLocale:"/",permalink:null,routeMeta:{title:"HBuilder X"},slug:"hbuilderx",filePath:"D:/Documents/wangfunfun-documents-online/docs/softwares/hbuilderx.md",filePathRelative:"docs/softwares/hbuilderx.md",componentFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/docs/softwares/hbuilderx.html.vue",componentFilePathRelative:"pages/docs/softwares/hbuilderx.html.vue",componentFileChunkName:"v-35284912",dataFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/docs/softwares/hbuilderx.html.js",dataFilePathRelative:"pages/docs/softwares/hbuilderx.html.js",dataFileChunkName:"v-35284912",htmlFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/dist/docs/softwares/hbuilderx.html",htmlFilePathRelative:"docs/softwares/hbuilderx.html"},{data:{key:"v-2399ab96",path:"/docs/softwares/mysql.html",title:"MySQL",lang:"en-US",frontmatter:{0:"s",1:"l",2:"i",3:"d",4:"e",5:"r",6:":",7:"a",8:"u",9:"t",10:"o"},excerpt:"",headers:[],git:{createdTime:1655877926e3,updatedTime:1655879489e3,contributors:[{name:"wangfunfun",email:"15376960583@189.cn",commits:3}]},filePathRelative:"docs/softwares/mysql.md"},key:"v-2399ab96",path:"/docs/softwares/mysql.html",title:"MySQL",lang:"en-US",frontmatter:{0:"s",1:"l",2:"i",3:"d",4:"e",5:"r",6:":",7:"a",8:"u",9:"t",10:"o"},excerpt:"",headers:[],content:`\r
# MySQL\r
\r
\u6682\u65E0\u5185\u5BB9`,contentRendered:`<h1 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MySQL</h1>
<p>\u6682\u65E0\u5185\u5BB9</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/softwares/mysql.html",pathLocale:"/",permalink:null,routeMeta:{title:"MySQL"},slug:"mysql",filePath:"D:/Documents/wangfunfun-documents-online/docs/softwares/mysql.md",filePathRelative:"docs/softwares/mysql.md",componentFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/docs/softwares/mysql.html.vue",componentFilePathRelative:"pages/docs/softwares/mysql.html.vue",componentFileChunkName:"v-2399ab96",dataFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/docs/softwares/mysql.html.js",dataFilePathRelative:"pages/docs/softwares/mysql.html.js",dataFileChunkName:"v-2399ab96",htmlFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/dist/docs/softwares/mysql.html",htmlFilePathRelative:"docs/softwares/mysql.html"},{data:{key:"v-6e9c09a7",path:"/docs/softwares/navicat.html",title:"Navicat",lang:"en-US",frontmatter:{0:"s",1:"l",2:"i",3:"d",4:"e",5:"r",6:":",7:"a",8:"u",9:"t",10:"o"},excerpt:"",headers:[],git:{createdTime:1655877926e3,updatedTime:1655879489e3,contributors:[{name:"wangfunfun",email:"15376960583@189.cn",commits:3}]},filePathRelative:"docs/softwares/navicat.md"},key:"v-6e9c09a7",path:"/docs/softwares/navicat.html",title:"Navicat",lang:"en-US",frontmatter:{0:"s",1:"l",2:"i",3:"d",4:"e",5:"r",6:":",7:"a",8:"u",9:"t",10:"o"},excerpt:"",headers:[],content:`\r
# Navicat\r
\r
\u6682\u65E0\u5185\u5BB9`,contentRendered:`<h1 id="navicat" tabindex="-1"><a class="header-anchor" href="#navicat" aria-hidden="true">#</a> Navicat</h1>
<p>\u6682\u65E0\u5185\u5BB9</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/softwares/navicat.html",pathLocale:"/",permalink:null,routeMeta:{title:"Navicat"},slug:"navicat",filePath:"D:/Documents/wangfunfun-documents-online/docs/softwares/navicat.md",filePathRelative:"docs/softwares/navicat.md",componentFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/docs/softwares/navicat.html.vue",componentFilePathRelative:"pages/docs/softwares/navicat.html.vue",componentFileChunkName:"v-6e9c09a7",dataFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/docs/softwares/navicat.html.js",dataFilePathRelative:"pages/docs/softwares/navicat.html.js",dataFileChunkName:"v-6e9c09a7",htmlFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/dist/docs/softwares/navicat.html",htmlFilePathRelative:"docs/softwares/navicat.html"},{data:{key:"v-1abb939c",path:"/docs/softwares/nvm-windows.html",title:"Nvm for Windows",lang:"en-US",frontmatter:{0:"s",1:"l",2:"i",3:"d",4:"e",5:"r",6:":",7:"a",8:"u",9:"t",10:"o"},excerpt:"",headers:[{level:2,title:"\u5B89\u88C5 Nvm",slug:"\u5B89\u88C5-nvm",children:[{level:3,title:"\u4E0B\u8F7D",slug:"\u4E0B\u8F7D",children:[]},{level:3,title:"\u5B89\u88C5\u524D",slug:"\u5B89\u88C5\u524D",children:[]},{level:3,title:"\u5B89\u88C5 Nvm",slug:"\u5B89\u88C5-nvm-1",children:[]}]},{level:2,title:"\u914D\u7F6E\u591A\u7248\u672C node",slug:"\u914D\u7F6E\u591A\u7248\u672C-node",children:[]},{level:2,title:"\u5E38\u7528\u547D\u4EE4",slug:"\u5E38\u7528\u547D\u4EE4",children:[]},{level:2,title:"\u5E38\u89C1\u95EE\u9898",slug:"\u5E38\u89C1\u95EE\u9898",children:[{level:3,title:"1. \u5207\u6362\u7248\u672C\u63D0\u793A exit status",slug:"_1-\u5207\u6362\u7248\u672C\u63D0\u793A-exit-status",children:[]},{level:3,title:"2. node\u3001npm \u4E0D\u662F\u6709\u6548\u7684\u547D\u4EE4",slug:"_2-node\u3001npm-\u4E0D\u662F\u6709\u6548\u7684\u547D\u4EE4",children:[]},{level:3,title:"3. Nvm for Windows \u5B89\u88C5 Node.js \u4E0B\u8F7D\u901F\u5EA6\u6162",slug:"_3-nvm-for-windows-\u5B89\u88C5-node-js-\u4E0B\u8F7D\u901F\u5EA6\u6162",children:[]}]}],git:{createdTime:1655877926e3,updatedTime:1655879489e3,contributors:[{name:"wangfunfun",email:"15376960583@189.cn",commits:3}]},filePathRelative:"docs/softwares/nvm-windows.md"},key:"v-1abb939c",path:"/docs/softwares/nvm-windows.html",title:"Nvm for Windows",lang:"en-US",frontmatter:{0:"s",1:"l",2:"i",3:"d",4:"e",5:"r",6:":",7:"a",8:"u",9:"t",10:"o"},excerpt:"",headers:[{level:2,title:"\u5B89\u88C5 Nvm",slug:"\u5B89\u88C5-nvm",children:[{level:3,title:"\u4E0B\u8F7D",slug:"\u4E0B\u8F7D",children:[]},{level:3,title:"\u5B89\u88C5\u524D",slug:"\u5B89\u88C5\u524D",children:[]},{level:3,title:"\u5B89\u88C5 Nvm",slug:"\u5B89\u88C5-nvm-1",children:[]}]},{level:2,title:"\u914D\u7F6E\u591A\u7248\u672C node",slug:"\u914D\u7F6E\u591A\u7248\u672C-node",children:[]},{level:2,title:"\u5E38\u7528\u547D\u4EE4",slug:"\u5E38\u7528\u547D\u4EE4",children:[]},{level:2,title:"\u5E38\u89C1\u95EE\u9898",slug:"\u5E38\u89C1\u95EE\u9898",children:[{level:3,title:"1. \u5207\u6362\u7248\u672C\u63D0\u793A exit status",slug:"_1-\u5207\u6362\u7248\u672C\u63D0\u793A-exit-status",children:[]},{level:3,title:"2. node\u3001npm \u4E0D\u662F\u6709\u6548\u7684\u547D\u4EE4",slug:"_2-node\u3001npm-\u4E0D\u662F\u6709\u6548\u7684\u547D\u4EE4",children:[]},{level:3,title:"3. Nvm for Windows \u5B89\u88C5 Node.js \u4E0B\u8F7D\u901F\u5EA6\u6162",slug:"_3-nvm-for-windows-\u5B89\u88C5-node-js-\u4E0B\u8F7D\u901F\u5EA6\u6162",children:[]}]}],content:`\r
# Nvm for Windows\r
\r
\u524D\u7AEF\u4E0D\u540C\u9879\u76EE\u4F1A\u4F7F\u7528\u4E0D\u540C Node.js \u7248\u672C\uFF0C\u8FD9\u91CC\u4ECB\u7ECD\uFF0C\u600E\u4E48\u7528 Nvm for Windows \u63A7\u5236 Node.js \u7248\u672C\u3002\r
\r
## \u5B89\u88C5 Nvm\r
\r
### \u4E0B\u8F7D\r
\r
- github: [https://github.com/coreybutler/nvm-windows/releases](https://github.com/coreybutler/nvm-windows/releases)\r
- \u963F\u91CC\u4E91\u76D8\uFF1A[https://www.aliyundrive.com/s/MkXrpEw9FT8](https://www.aliyundrive.com/s/MkXrpEw9FT8)\uFF0C\u63D0\u53D6\u7801\uFF1Aa3a2\r
\r
### \u5B89\u88C5\u524D\r
\r
\u7531\u4E8E\u72EC\u7ACB\u7684 Node.js \u548C Nvm for Windows \u914D\u7F6E\u9ED8\u8BA4 Node.js \u6709\u51B2\u7A81\uFF0C\u5982\u679C\u672C\u673A\u4E0A\u6709\u72EC\u7ACB\u5B89\u88C5 Node.js \u9700\u8981\u5148\u5378\u8F7D\u3002\r
\r
\u5982\u4F55\u5E72\u51C0\u7684\u5378\u8F7D\uFF1F\r
\r
1. \u63A7\u5236\u9762\u677F\u5378\u8F7D\u3002\r
2. \u201CC:\\Users\\Administrator\\AppData\\Roaming\u201D\uFF0C\u5220\u9664\u7528\u6237\u5BF9\u5E94\u8DEF\u5F84\u4E0B\uFF08npm\u3001npm-cache\u3001node \u5F00\u5934\u7684\u6587\u4EF6\u5939\uFF09\r
3. \u5220\u9664 Node.js \u73AF\u5883\u53D8\u91CF\u3002\r
\r
### \u5B89\u88C5 Nvm\r
\r
1. \u8FD0\u884C\u4E0B\u8F7D\u597D\u7684 \`nvm-setup.exe\`\uFF0C \u540C\u610F\u534F\u8BAE\uFF0C\u70B9\u51FB\u4E0B\u4E00\u6B65\r
\r
![An image](../../.vuepress/public/softwares/nvm/setup-start.png)\r
\r
2. \u8BE5\u8DEF\u5F84\u4E3A Nvm for Windows \u7684\u5B89\u88C5\u8DEF\u5F84\r
\r
![An image](../../.vuepress/public/softwares/nvm/setup-nvm.png)\r
\r
3. \u8BE5\u8DEF\u5F84\u4E3A Nvm for Windows \u9009\u62E9 Node.js \u7248\u672C\u7684\u5B58\u653E\u8DEF\u5F84\r
\r
![An image](../../.vuepress/public/softwares/nvm/setup-node.png)\r
\r
4. \u70B9\u51FB install\uFF0C\u7B49\u5F85\u5B89\u88C5\u6210\u529F\r
\r
![An image](../../.vuepress/public/softwares/nvm/setup-end.png)\r
\r
![An image](../../.vuepress/public/softwares/nvm/setup-finish.png)\r
\r
5. \u5B89\u88C5\u6210\u529F\u540E\u8FDB\u5165 cmd \u547D\u4EE4\u884C\uFF0C\u8F93\u5165 Nvm for Windows \u547D\u4EE4\u67E5\u770B\u662F\u5426\u5B89\u88C5\u6210\u529F\uFF0C\u51FA\u73B0 Nvm for Windows \u7248\u672C\u4FE1\u606F\u53CA\u4E3A\u5B89\u88C5\u6210\u529F\r
\r
![An image](../../.vuepress/public/softwares/nvm/nvm-v.png)\r
\r
6. \u5B89\u88C5\u6210\u529F\u540E\uFF0C\u5728\u7528\u6237\u53D8\u91CF\u548C\u7CFB\u7EDF\u53D8\u91CF\u4E2D\u914D\u7F6E\u4E86\u4E24\u4E2A\u53D8\u91CF NVM_HOME \u548C NVM_SYMLINK\uFF0C\u5206\u522B\u6307\u5411 Nvm for Windows \u548C Node.js \u7684\u5B58\u653E\u76EE\u5F55\uFF0C\u5728\u7CFB\u7EDF path \u53D8\u91CF\u4E2D\u914D\u7F6E\u4E86\u8FD9\u4E24\u4E2A\u53C2\u6570\r
\r
![An image](../../.vuepress/public/softwares/nvm/environment.png)\r
\r
![An image](../../.vuepress/public/softwares/nvm/environment-path.png)\r
\r
## \u914D\u7F6E\u591A\u7248\u672C node\r
\r
1. \u53EF\u4F7F\u7528 \`nvm list available\` \u547D\u4EE4\u67E5\u770B nvm \u53EF\u5B89\u88C5\u7684 Node.js \u7248\u672C\r
\r
![An image](../../.vuepress/public/softwares/nvm/nvm-list-available.png)\r
\r
2. \u8FD0\u884C \`nvm install <version>\`\uFF0C\u5B89\u88C5\u6307\u5B9A\u7684\u591A\u4E2A\u7248\u672C\u7684 Node.js\r
\r
![An image](../../.vuepress/public/softwares/nvm/nvm-install.png)\r
\r
3. \u7BA1\u7406\u5458\u6743\u9650\u8FD0\u884C \`nvm use <version>\`\uFF0C\u5207\u6362 Node.js \u7248\u672C\r
\r
![An image](../../.vuepress/public/softwares/nvm/nvm-use.png)\r
\r
## \u5E38\u7528\u547D\u4EE4\r
\r
\`\`\`\r
// \u67E5\u770B\u76EE\u524D\u5DF2\u7ECF\u5B89\u88C5\u7684\u7248\u672C\r
nvm ls\r
\r
// \u5B89\u88C5\u6307\u5B9A\u7684\u7248\u672C\u7684 Node.js\r
nvm install 10.5.0\r
\r
// \u4F7F\u7528\u6307\u5B9A\u7248\u672C\u7684 Node.js\r
nvm use 10.5.0\r
\r
//\u663E\u793A\u53EF\u4E0B\u8F7D\u7248\u672C\u7684\u90E8\u5206\u5217\u8868\r
nvm list available\r
\r
//\u5220\u9664\u5DF2\u5B89\u88C5\u7684\u6307\u5B9A\u7248\u672C\uFF0C\u8BED\u6CD5\u4E0E install \u7C7B\u4F3C\r
nvm uninstall 10.5.0\r
\r
//\u7ED9\u4E0D\u540C\u7684\u7248\u672C\u53F7\u6DFB\u52A0\u522B\u540D\r
nvm alias\r
\r
//\u5220\u9664\u5DF2\u5B9A\u4E49\u7684\u522B\u540D\r
nvm unalias\r
\r
//\u5728\u5F53\u524D\u7248\u672C Node.js \u73AF\u5883\u4E0B\uFF0C\u91CD\u65B0\u5168\u5C40\u5B89\u88C5\u6307\u5B9A\u7248\u672C\u53F7\u7684 npm \u5305\r
nvm reinstall-packages <version>\r
\r
//\u663E\u793A\u5F53\u524D\u7684\u7248\u672C\r
nvm current\r
\`\`\`\r
\r
## \u5E38\u89C1\u95EE\u9898\r
\r
### 1. \u5207\u6362\u7248\u672C\u63D0\u793A exit status\r
\r
![An image](../../.vuepress/public/softwares/nvm/nvm-use-error.png)\r
\r
\u4F7F\u7528 nvm use \u547D\u4EE4\u5207\u6362 Node.js \u7248\u672C\u65F6\uFF0C\u901A\u5E38\u662F\u6CA1\u6709\u590D\u5236\u5220\u9664\u6587\u4EF6\u5939\u6743\u9650\u5BFC\u81F4,\u53EF\u4F7F\u7528\u7BA1\u7406\u5458\u547D\u4EE4\u8FDB\u884C\u5207\u6362\r
\r
\u89E3\u51B3\u65B9\u5F0F\uFF1A\u7BA1\u7406\u5458\u8FD0\u884C cmd\r
\r
\`\`\`\r
  nvm use version(\u7248\u672C\u53F7)\r
\`\`\`\r
\r
### 2. node\u3001npm \u4E0D\u662F\u6709\u6548\u7684\u547D\u4EE4\r
\r
1. \u68C0\u67E5\u4E00\u4E0B nvm \u5B89\u88C5\u76EE\u5F55\u4E0B\u662F\u5426\u6709\u4E0B\u8F7D\u7684 Node.js \u7248\u672C\uFF0C\u5982\u679C\u6CA1\u6709\u5219\u9700\u8981\u91CD\u65B0\u4E0B\u8F7D\u3002\r
\r
![An image](../../.vuepress/public/softwares/nvm/nvm.png)\r
\r
2. \u5C06\u4E0B\u8F7D\u597D\u7684 Node.js \u76EE\u5F55\u4E2D\u7684 npm \u4F9D\u8D56\u5305\u4EE5\u53CA \`npm\`\u3001\`npm.cmd\`\u3001\`npx\`\u3001\`npx.cmd\` \u590D\u5236\u4E00\u4EFD\uFF0C\r
\r
![An image](../../.vuepress/public/softwares/nvm/node_modules.png)\r
\r
![An image](../../.vuepress/public/softwares/nvm/cmd.png)\r
\r
3. \u627E\u5230 nvm \u5B89\u88C5\u65F6\u914D\u7F6E\u7684 Node.js \u5B58\u653E\u76EE\u5F55\r
\r
![An image](../../.vuepress/public/softwares/nvm/app-data.png)\r
\r
4. \u5C06\u590D\u5236\u7684 \`npm\`\u3001\`npm.cmd\`\u3001\`npx\`\u3001\`npx.cmd\` \u653E\u5728 Node.js \u5B58\u653E\u76EE\u5F55\u4E0B\uFF0C\u5C06\u590D\u5236\u7684 npm \u4F9D\u8D56\u5305\u5B58\u653E\u5230 Node.js \u5B58\u653E\u76EE\u5F55\u91CC\u7684 node_modules \u76EE\u5F55\u4E0B\r
\r
![An image](../../.vuepress/public/softwares/nvm/npm.png)\r
\r
### 3. Nvm for Windows \u5B89\u88C5 Node.js \u4E0B\u8F7D\u901F\u5EA6\u6162\r
\r
\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\u5230\u5B89\u88C5 Nvm for Windows \u76EE\u5F55 settings.txt\r
\r
\`\`\`\r
node_mirror: https://npm.taobao.org/mirrors/node/\r
npm_mirror: https://npm.taobao.org/mirrors/npm/\r
\`\`\`\r
\r
\u6B64\u5916\u63D0\u4F9B\u4E86\u914D\u7F6E\u8BBF\u95EE Github \u7684\u51E0\u79CD\u65B9\u6CD5\uFF0C\u8BF7\u79FB\u6B65[ \u8BBF\u95EE Github ](../environment/github.md)\r
`,contentRendered:`<h1 id="nvm-for-windows" tabindex="-1"><a class="header-anchor" href="#nvm-for-windows" aria-hidden="true">#</a> Nvm for Windows</h1>
<p>\u524D\u7AEF\u4E0D\u540C\u9879\u76EE\u4F1A\u4F7F\u7528\u4E0D\u540C Node.js \u7248\u672C\uFF0C\u8FD9\u91CC\u4ECB\u7ECD\uFF0C\u600E\u4E48\u7528 Nvm for Windows \u63A7\u5236 Node.js \u7248\u672C\u3002</p>
<h2 id="\u5B89\u88C5-nvm" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-nvm" aria-hidden="true">#</a> \u5B89\u88C5 Nvm</h2>
<h3 id="\u4E0B\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D" aria-hidden="true">#</a> \u4E0B\u8F7D</h3>
<ul>
<li>github: <a href="https://github.com/coreybutler/nvm-windows/releases" target="_blank" rel="noopener noreferrer">https://github.com/coreybutler/nvm-windows/releases<ExternalLinkIcon/></a></li>
<li>\u963F\u91CC\u4E91\u76D8\uFF1A<a href="https://www.aliyundrive.com/s/MkXrpEw9FT8" target="_blank" rel="noopener noreferrer">https://www.aliyundrive.com/s/MkXrpEw9FT8<ExternalLinkIcon/></a>\uFF0C\u63D0\u53D6\u7801\uFF1Aa3a2</li>
</ul>
<h3 id="\u5B89\u88C5\u524D" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5\u524D" aria-hidden="true">#</a> \u5B89\u88C5\u524D</h3>
<p>\u7531\u4E8E\u72EC\u7ACB\u7684 Node.js \u548C Nvm for Windows \u914D\u7F6E\u9ED8\u8BA4 Node.js \u6709\u51B2\u7A81\uFF0C\u5982\u679C\u672C\u673A\u4E0A\u6709\u72EC\u7ACB\u5B89\u88C5 Node.js \u9700\u8981\u5148\u5378\u8F7D\u3002</p>
<p>\u5982\u4F55\u5E72\u51C0\u7684\u5378\u8F7D\uFF1F</p>
<ol>
<li>\u63A7\u5236\u9762\u677F\u5378\u8F7D\u3002</li>
<li>\u201CC:\\Users\\Administrator\\AppData\\Roaming\u201D\uFF0C\u5220\u9664\u7528\u6237\u5BF9\u5E94\u8DEF\u5F84\u4E0B\uFF08npm\u3001npm-cache\u3001node \u5F00\u5934\u7684\u6587\u4EF6\u5939\uFF09</li>
<li>\u5220\u9664 Node.js \u73AF\u5883\u53D8\u91CF\u3002</li>
</ol>
<h3 id="\u5B89\u88C5-nvm-1" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-nvm-1" aria-hidden="true">#</a> \u5B89\u88C5 Nvm</h3>
<ol>
<li>\u8FD0\u884C\u4E0B\u8F7D\u597D\u7684 <code v-pre>nvm-setup.exe</code>\uFF0C \u540C\u610F\u534F\u8BAE\uFF0C\u70B9\u51FB\u4E0B\u4E00\u6B65</li>
</ol>
<p><img src="@source/.vuepress/public/softwares/nvm/setup-start.png" alt="An image"></p>
<ol start="2">
<li>\u8BE5\u8DEF\u5F84\u4E3A Nvm for Windows \u7684\u5B89\u88C5\u8DEF\u5F84</li>
</ol>
<p><img src="@source/.vuepress/public/softwares/nvm/setup-nvm.png" alt="An image"></p>
<ol start="3">
<li>\u8BE5\u8DEF\u5F84\u4E3A Nvm for Windows \u9009\u62E9 Node.js \u7248\u672C\u7684\u5B58\u653E\u8DEF\u5F84</li>
</ol>
<p><img src="@source/.vuepress/public/softwares/nvm/setup-node.png" alt="An image"></p>
<ol start="4">
<li>\u70B9\u51FB install\uFF0C\u7B49\u5F85\u5B89\u88C5\u6210\u529F</li>
</ol>
<p><img src="@source/.vuepress/public/softwares/nvm/setup-end.png" alt="An image"></p>
<p><img src="@source/.vuepress/public/softwares/nvm/setup-finish.png" alt="An image"></p>
<ol start="5">
<li>\u5B89\u88C5\u6210\u529F\u540E\u8FDB\u5165 cmd \u547D\u4EE4\u884C\uFF0C\u8F93\u5165 Nvm for Windows \u547D\u4EE4\u67E5\u770B\u662F\u5426\u5B89\u88C5\u6210\u529F\uFF0C\u51FA\u73B0 Nvm for Windows \u7248\u672C\u4FE1\u606F\u53CA\u4E3A\u5B89\u88C5\u6210\u529F</li>
</ol>
<p><img src="@source/.vuepress/public/softwares/nvm/nvm-v.png" alt="An image"></p>
<ol start="6">
<li>\u5B89\u88C5\u6210\u529F\u540E\uFF0C\u5728\u7528\u6237\u53D8\u91CF\u548C\u7CFB\u7EDF\u53D8\u91CF\u4E2D\u914D\u7F6E\u4E86\u4E24\u4E2A\u53D8\u91CF NVM_HOME \u548C NVM_SYMLINK\uFF0C\u5206\u522B\u6307\u5411 Nvm for Windows \u548C Node.js \u7684\u5B58\u653E\u76EE\u5F55\uFF0C\u5728\u7CFB\u7EDF path \u53D8\u91CF\u4E2D\u914D\u7F6E\u4E86\u8FD9\u4E24\u4E2A\u53C2\u6570</li>
</ol>
<p><img src="@source/.vuepress/public/softwares/nvm/environment.png" alt="An image"></p>
<p><img src="@source/.vuepress/public/softwares/nvm/environment-path.png" alt="An image"></p>
<h2 id="\u914D\u7F6E\u591A\u7248\u672C-node" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u591A\u7248\u672C-node" aria-hidden="true">#</a> \u914D\u7F6E\u591A\u7248\u672C node</h2>
<ol>
<li>\u53EF\u4F7F\u7528 <code v-pre>nvm list available</code> \u547D\u4EE4\u67E5\u770B nvm \u53EF\u5B89\u88C5\u7684 Node.js \u7248\u672C</li>
</ol>
<p><img src="@source/.vuepress/public/softwares/nvm/nvm-list-available.png" alt="An image"></p>
<ol start="2">
<li>\u8FD0\u884C <code v-pre>nvm install &lt;version&gt;</code>\uFF0C\u5B89\u88C5\u6307\u5B9A\u7684\u591A\u4E2A\u7248\u672C\u7684 Node.js</li>
</ol>
<p><img src="@source/.vuepress/public/softwares/nvm/nvm-install.png" alt="An image"></p>
<ol start="3">
<li>\u7BA1\u7406\u5458\u6743\u9650\u8FD0\u884C <code v-pre>nvm use &lt;version&gt;</code>\uFF0C\u5207\u6362 Node.js \u7248\u672C</li>
</ol>
<p><img src="@source/.vuepress/public/softwares/nvm/nvm-use.png" alt="An image"></p>
<h2 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a> \u5E38\u7528\u547D\u4EE4</h2>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>// \u67E5\u770B\u76EE\u524D\u5DF2\u7ECF\u5B89\u88C5\u7684\u7248\u672C
nvm ls

// \u5B89\u88C5\u6307\u5B9A\u7684\u7248\u672C\u7684 Node.js
nvm install 10.5.0

// \u4F7F\u7528\u6307\u5B9A\u7248\u672C\u7684 Node.js
nvm use 10.5.0

//\u663E\u793A\u53EF\u4E0B\u8F7D\u7248\u672C\u7684\u90E8\u5206\u5217\u8868
nvm list available

//\u5220\u9664\u5DF2\u5B89\u88C5\u7684\u6307\u5B9A\u7248\u672C\uFF0C\u8BED\u6CD5\u4E0E install \u7C7B\u4F3C
nvm uninstall 10.5.0

//\u7ED9\u4E0D\u540C\u7684\u7248\u672C\u53F7\u6DFB\u52A0\u522B\u540D
nvm alias

//\u5220\u9664\u5DF2\u5B9A\u4E49\u7684\u522B\u540D
nvm unalias

//\u5728\u5F53\u524D\u7248\u672C Node.js \u73AF\u5883\u4E0B\uFF0C\u91CD\u65B0\u5168\u5C40\u5B89\u88C5\u6307\u5B9A\u7248\u672C\u53F7\u7684 npm \u5305
nvm reinstall-packages &lt;version>

//\u663E\u793A\u5F53\u524D\u7684\u7248\u672C
nvm current
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5E38\u89C1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a> \u5E38\u89C1\u95EE\u9898</h2>
<h3 id="_1-\u5207\u6362\u7248\u672C\u63D0\u793A-exit-status" tabindex="-1"><a class="header-anchor" href="#_1-\u5207\u6362\u7248\u672C\u63D0\u793A-exit-status" aria-hidden="true">#</a> 1. \u5207\u6362\u7248\u672C\u63D0\u793A exit status</h3>
<p><img src="@source/.vuepress/public/softwares/nvm/nvm-use-error.png" alt="An image"></p>
<p>\u4F7F\u7528 nvm use \u547D\u4EE4\u5207\u6362 Node.js \u7248\u672C\u65F6\uFF0C\u901A\u5E38\u662F\u6CA1\u6709\u590D\u5236\u5220\u9664\u6587\u4EF6\u5939\u6743\u9650\u5BFC\u81F4,\u53EF\u4F7F\u7528\u7BA1\u7406\u5458\u547D\u4EE4\u8FDB\u884C\u5207\u6362</p>
<p>\u89E3\u51B3\u65B9\u5F0F\uFF1A\u7BA1\u7406\u5458\u8FD0\u884C cmd</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>  nvm use version(\u7248\u672C\u53F7)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-node\u3001npm-\u4E0D\u662F\u6709\u6548\u7684\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#_2-node\u3001npm-\u4E0D\u662F\u6709\u6548\u7684\u547D\u4EE4" aria-hidden="true">#</a> 2. node\u3001npm \u4E0D\u662F\u6709\u6548\u7684\u547D\u4EE4</h3>
<ol>
<li>\u68C0\u67E5\u4E00\u4E0B nvm \u5B89\u88C5\u76EE\u5F55\u4E0B\u662F\u5426\u6709\u4E0B\u8F7D\u7684 Node.js \u7248\u672C\uFF0C\u5982\u679C\u6CA1\u6709\u5219\u9700\u8981\u91CD\u65B0\u4E0B\u8F7D\u3002</li>
</ol>
<p><img src="@source/.vuepress/public/softwares/nvm/nvm.png" alt="An image"></p>
<ol start="2">
<li>\u5C06\u4E0B\u8F7D\u597D\u7684 Node.js \u76EE\u5F55\u4E2D\u7684 npm \u4F9D\u8D56\u5305\u4EE5\u53CA <code v-pre>npm</code>\u3001<code v-pre>npm.cmd</code>\u3001<code v-pre>npx</code>\u3001<code v-pre>npx.cmd</code> \u590D\u5236\u4E00\u4EFD\uFF0C</li>
</ol>
<p><img src="@source/.vuepress/public/softwares/nvm/node_modules.png" alt="An image"></p>
<p><img src="@source/.vuepress/public/softwares/nvm/cmd.png" alt="An image"></p>
<ol start="3">
<li>\u627E\u5230 nvm \u5B89\u88C5\u65F6\u914D\u7F6E\u7684 Node.js \u5B58\u653E\u76EE\u5F55</li>
</ol>
<p><img src="@source/.vuepress/public/softwares/nvm/app-data.png" alt="An image"></p>
<ol start="4">
<li>\u5C06\u590D\u5236\u7684 <code v-pre>npm</code>\u3001<code v-pre>npm.cmd</code>\u3001<code v-pre>npx</code>\u3001<code v-pre>npx.cmd</code> \u653E\u5728 Node.js \u5B58\u653E\u76EE\u5F55\u4E0B\uFF0C\u5C06\u590D\u5236\u7684 npm \u4F9D\u8D56\u5305\u5B58\u653E\u5230 Node.js \u5B58\u653E\u76EE\u5F55\u91CC\u7684 node_modules \u76EE\u5F55\u4E0B</li>
</ol>
<p><img src="@source/.vuepress/public/softwares/nvm/npm.png" alt="An image"></p>
<h3 id="_3-nvm-for-windows-\u5B89\u88C5-node-js-\u4E0B\u8F7D\u901F\u5EA6\u6162" tabindex="-1"><a class="header-anchor" href="#_3-nvm-for-windows-\u5B89\u88C5-node-js-\u4E0B\u8F7D\u901F\u5EA6\u6162" aria-hidden="true">#</a> 3. Nvm for Windows \u5B89\u88C5 Node.js \u4E0B\u8F7D\u901F\u5EA6\u6162</h3>
<p>\u6DFB\u52A0\u4EE5\u4E0B\u5185\u5BB9\u5230\u5B89\u88C5 Nvm for Windows \u76EE\u5F55 settings.txt</p>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>node_mirror: https://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B64\u5916\u63D0\u4F9B\u4E86\u914D\u7F6E\u8BBF\u95EE Github \u7684\u51E0\u79CD\u65B9\u6CD5\uFF0C\u8BF7\u79FB\u6B65<RouterLink to="/docs/environment/github.html"> \u8BBF\u95EE Github </RouterLink></p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[{raw:"../environment/github.md",relative:"docs/environment/github.md",absolute:"/docs/environment/github.md"}],pathInferred:"/docs/softwares/nvm-windows.html",pathLocale:"/",permalink:null,routeMeta:{title:"Nvm for Windows"},slug:"nvm-windows",filePath:"D:/Documents/wangfunfun-documents-online/docs/softwares/nvm-windows.md",filePathRelative:"docs/softwares/nvm-windows.md",componentFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/docs/softwares/nvm-windows.html.vue",componentFilePathRelative:"pages/docs/softwares/nvm-windows.html.vue",componentFileChunkName:"v-1abb939c",dataFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/docs/softwares/nvm-windows.html.js",dataFilePathRelative:"pages/docs/softwares/nvm-windows.html.js",dataFileChunkName:"v-1abb939c",htmlFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/dist/docs/softwares/nvm-windows.html",htmlFilePathRelative:"docs/softwares/nvm-windows.html"},{data:{key:"v-2924399d",path:"/docs/softwares/postman.html",title:"PostMan",lang:"en-US",frontmatter:{0:"s",1:"l",2:"i",3:"d",4:"e",5:"r",6:":",7:"a",8:"u",9:"t",10:"o"},excerpt:"",headers:[],git:{createdTime:1655877926e3,updatedTime:1655879489e3,contributors:[{name:"wangfunfun",email:"15376960583@189.cn",commits:3}]},filePathRelative:"docs/softwares/postman.md"},key:"v-2924399d",path:"/docs/softwares/postman.html",title:"PostMan",lang:"en-US",frontmatter:{0:"s",1:"l",2:"i",3:"d",4:"e",5:"r",6:":",7:"a",8:"u",9:"t",10:"o"},excerpt:"",headers:[],content:`\r
# PostMan\r
\r
\u6682\u65E0\u5185\u5BB9`,contentRendered:`<h1 id="postman" tabindex="-1"><a class="header-anchor" href="#postman" aria-hidden="true">#</a> PostMan</h1>
<p>\u6682\u65E0\u5185\u5BB9</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/softwares/postman.html",pathLocale:"/",permalink:null,routeMeta:{title:"PostMan"},slug:"postman",filePath:"D:/Documents/wangfunfun-documents-online/docs/softwares/postman.md",filePathRelative:"docs/softwares/postman.md",componentFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/docs/softwares/postman.html.vue",componentFilePathRelative:"pages/docs/softwares/postman.html.vue",componentFileChunkName:"v-2924399d",dataFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/docs/softwares/postman.html.js",dataFilePathRelative:"pages/docs/softwares/postman.html.js",dataFileChunkName:"v-2924399d",htmlFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/dist/docs/softwares/postman.html",htmlFilePathRelative:"docs/softwares/postman.html"},{data:{key:"v-189ad218",path:"/docs/softwares/tortoise-svn.html",title:"Tortoise Svn",lang:"en-US",frontmatter:{0:"s",1:"l",2:"i",3:"d",4:"e",5:"r",6:":",7:"a",8:"u",9:"t",10:"o"},excerpt:"",headers:[],git:{createdTime:1655877926e3,updatedTime:1655879489e3,contributors:[{name:"wangfunfun",email:"15376960583@189.cn",commits:3}]},filePathRelative:"docs/softwares/tortoise-svn.md"},key:"v-189ad218",path:"/docs/softwares/tortoise-svn.html",title:"Tortoise Svn",lang:"en-US",frontmatter:{0:"s",1:"l",2:"i",3:"d",4:"e",5:"r",6:":",7:"a",8:"u",9:"t",10:"o"},excerpt:"",headers:[],content:`\r
# Tortoise Svn\r
\r
\u6682\u65E0\u5185\u5BB9`,contentRendered:`<h1 id="tortoise-svn" tabindex="-1"><a class="header-anchor" href="#tortoise-svn" aria-hidden="true">#</a> Tortoise Svn</h1>
<p>\u6682\u65E0\u5185\u5BB9</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/softwares/tortoise-svn.html",pathLocale:"/",permalink:null,routeMeta:{title:"Tortoise Svn"},slug:"tortoise-svn",filePath:"D:/Documents/wangfunfun-documents-online/docs/softwares/tortoise-svn.md",filePathRelative:"docs/softwares/tortoise-svn.md",componentFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/docs/softwares/tortoise-svn.html.vue",componentFilePathRelative:"pages/docs/softwares/tortoise-svn.html.vue",componentFileChunkName:"v-189ad218",dataFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/docs/softwares/tortoise-svn.html.js",dataFilePathRelative:"pages/docs/softwares/tortoise-svn.html.js",dataFileChunkName:"v-189ad218",htmlFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/dist/docs/softwares/tortoise-svn.html",htmlFilePathRelative:"docs/softwares/tortoise-svn.html"},{data:{key:"v-0c27101e",path:"/docs/softwares/vscode.html",title:"Visual Studio Code",lang:"en-US",frontmatter:{0:"s",1:"l",2:"i",3:"d",4:"e",5:"r",6:":",7:"a",8:"u",9:"t",10:"o"},excerpt:"",headers:[{level:2,title:"\u4E0B\u8F7D\u4E0E\u5B89\u88C5",slug:"\u4E0B\u8F7D\u4E0E\u5B89\u88C5",children:[{level:3,title:"\u4E0B\u8F7D",slug:"\u4E0B\u8F7D",children:[]},{level:3,title:"\u5B89\u88C5",slug:"\u5B89\u88C5",children:[]}]},{level:2,title:"\u63D2\u4EF6\u914D\u7F6E",slug:"\u63D2\u4EF6\u914D\u7F6E",children:[{level:3,title:"\u57FA\u672C\u63D2\u4EF6",slug:"\u57FA\u672C\u63D2\u4EF6",children:[]},{level:3,title:"\u4E3B\u9898\u63D2\u4EF6",slug:"\u4E3B\u9898\u63D2\u4EF6",children:[]},{level:3,title:"Prettier Code Formatter",slug:"prettier-code-formatter",children:[]},{level:3,title:"Git/Svn \u76F8\u5173",slug:"git-svn-\u76F8\u5173",children:[]},{level:3,title:"Vue2/3 \u63D2\u4EF6",slug:"vue2-3-\u63D2\u4EF6",children:[]},{level:3,title:"Eslint \u76F8\u5173",slug:"eslint-\u76F8\u5173",children:[]},{level:3,title:"\u5176\u4ED6\u63D2\u4EF6",slug:"\u5176\u4ED6\u63D2\u4EF6",children:[]}]},{level:2,title:"\u914D\u7F6E\u5171\u4EAB",slug:"\u914D\u7F6E\u5171\u4EAB",children:[]},{level:2,title:"\u6211\u7684\u914D\u7F6E",slug:"\u6211\u7684\u914D\u7F6E",children:[]},{level:2,title:"\u5E38\u89C1\u95EE\u9898",slug:"\u5E38\u89C1\u95EE\u9898",children:[{level:3,title:"1. \u67E5\u770B\u8FD0\u884C\u6162\u7684\u63D2\u4EF6",slug:"_1-\u67E5\u770B\u8FD0\u884C\u6162\u7684\u63D2\u4EF6",children:[]},{level:3,title:"2. Emmet \u63D0\u793A\u6162",slug:"_2-emmet-\u63D0\u793A\u6162",children:[]}]}],git:{createdTime:1655877926e3,updatedTime:1655879489e3,contributors:[{name:"wangfunfun",email:"15376960583@189.cn",commits:3}]},filePathRelative:"docs/softwares/vscode.md"},key:"v-0c27101e",path:"/docs/softwares/vscode.html",title:"Visual Studio Code",lang:"en-US",frontmatter:{0:"s",1:"l",2:"i",3:"d",4:"e",5:"r",6:":",7:"a",8:"u",9:"t",10:"o"},excerpt:"",headers:[{level:2,title:"\u4E0B\u8F7D\u4E0E\u5B89\u88C5",slug:"\u4E0B\u8F7D\u4E0E\u5B89\u88C5",children:[{level:3,title:"\u4E0B\u8F7D",slug:"\u4E0B\u8F7D",children:[]},{level:3,title:"\u5B89\u88C5",slug:"\u5B89\u88C5",children:[]}]},{level:2,title:"\u63D2\u4EF6\u914D\u7F6E",slug:"\u63D2\u4EF6\u914D\u7F6E",children:[{level:3,title:"\u57FA\u672C\u63D2\u4EF6",slug:"\u57FA\u672C\u63D2\u4EF6",children:[]},{level:3,title:"\u4E3B\u9898\u63D2\u4EF6",slug:"\u4E3B\u9898\u63D2\u4EF6",children:[]},{level:3,title:"Prettier Code Formatter",slug:"prettier-code-formatter",children:[]},{level:3,title:"Git/Svn \u76F8\u5173",slug:"git-svn-\u76F8\u5173",children:[]},{level:3,title:"Vue2/3 \u63D2\u4EF6",slug:"vue2-3-\u63D2\u4EF6",children:[]},{level:3,title:"Eslint \u76F8\u5173",slug:"eslint-\u76F8\u5173",children:[]},{level:3,title:"\u5176\u4ED6\u63D2\u4EF6",slug:"\u5176\u4ED6\u63D2\u4EF6",children:[]}]},{level:2,title:"\u914D\u7F6E\u5171\u4EAB",slug:"\u914D\u7F6E\u5171\u4EAB",children:[]},{level:2,title:"\u6211\u7684\u914D\u7F6E",slug:"\u6211\u7684\u914D\u7F6E",children:[]},{level:2,title:"\u5E38\u89C1\u95EE\u9898",slug:"\u5E38\u89C1\u95EE\u9898",children:[{level:3,title:"1. \u67E5\u770B\u8FD0\u884C\u6162\u7684\u63D2\u4EF6",slug:"_1-\u67E5\u770B\u8FD0\u884C\u6162\u7684\u63D2\u4EF6",children:[]},{level:3,title:"2. Emmet \u63D0\u793A\u6162",slug:"_2-emmet-\u63D0\u793A\u6162",children:[]}]}],content:`\r
# Visual Studio Code\r
\r
## \u4E0B\u8F7D\u4E0E\u5B89\u88C5\r
\r
### \u4E0B\u8F7D\r
\r
### \u5B89\u88C5\r
\r
## \u63D2\u4EF6\u914D\u7F6E\r
\r
### \u57FA\u672C\u63D2\u4EF6\r
\r
### \u4E3B\u9898\u63D2\u4EF6\r
\r
### Prettier Code Formatter\r
\r
### Git/Svn \u76F8\u5173\r
\r
### Vue2/3 \u63D2\u4EF6\r
\r
### Eslint \u76F8\u5173\r
\r
### \u5176\u4ED6\u63D2\u4EF6\r
\r
## \u914D\u7F6E\u5171\u4EAB\r
\r
## \u6211\u7684\u914D\u7F6E\r
\r
## \u5E38\u89C1\u95EE\u9898\r
\r
### 1. \u67E5\u770B\u8FD0\u884C\u6162\u7684\u63D2\u4EF6\r
\r
### 2. Emmet \u63D0\u793A\u6162\r
`,contentRendered:`<h1 id="visual-studio-code" tabindex="-1"><a class="header-anchor" href="#visual-studio-code" aria-hidden="true">#</a> Visual Studio Code</h1>
<h2 id="\u4E0B\u8F7D\u4E0E\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D\u4E0E\u5B89\u88C5" aria-hidden="true">#</a> \u4E0B\u8F7D\u4E0E\u5B89\u88C5</h2>
<h3 id="\u4E0B\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D" aria-hidden="true">#</a> \u4E0B\u8F7D</h3>
<h3 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h3>
<h2 id="\u63D2\u4EF6\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6\u914D\u7F6E" aria-hidden="true">#</a> \u63D2\u4EF6\u914D\u7F6E</h2>
<h3 id="\u57FA\u672C\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u63D2\u4EF6" aria-hidden="true">#</a> \u57FA\u672C\u63D2\u4EF6</h3>
<h3 id="\u4E3B\u9898\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u9898\u63D2\u4EF6" aria-hidden="true">#</a> \u4E3B\u9898\u63D2\u4EF6</h3>
<h3 id="prettier-code-formatter" tabindex="-1"><a class="header-anchor" href="#prettier-code-formatter" aria-hidden="true">#</a> Prettier Code Formatter</h3>
<h3 id="git-svn-\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#git-svn-\u76F8\u5173" aria-hidden="true">#</a> Git/Svn \u76F8\u5173</h3>
<h3 id="vue2-3-\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#vue2-3-\u63D2\u4EF6" aria-hidden="true">#</a> Vue2/3 \u63D2\u4EF6</h3>
<h3 id="eslint-\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#eslint-\u76F8\u5173" aria-hidden="true">#</a> Eslint \u76F8\u5173</h3>
<h3 id="\u5176\u4ED6\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u63D2\u4EF6" aria-hidden="true">#</a> \u5176\u4ED6\u63D2\u4EF6</h3>
<h2 id="\u914D\u7F6E\u5171\u4EAB" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u5171\u4EAB" aria-hidden="true">#</a> \u914D\u7F6E\u5171\u4EAB</h2>
<h2 id="\u6211\u7684\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u6211\u7684\u914D\u7F6E" aria-hidden="true">#</a> \u6211\u7684\u914D\u7F6E</h2>
<h2 id="\u5E38\u89C1\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a> \u5E38\u89C1\u95EE\u9898</h2>
<h3 id="_1-\u67E5\u770B\u8FD0\u884C\u6162\u7684\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-\u67E5\u770B\u8FD0\u884C\u6162\u7684\u63D2\u4EF6" aria-hidden="true">#</a> 1. \u67E5\u770B\u8FD0\u884C\u6162\u7684\u63D2\u4EF6</h3>
<h3 id="_2-emmet-\u63D0\u793A\u6162" tabindex="-1"><a class="header-anchor" href="#_2-emmet-\u63D0\u793A\u6162" aria-hidden="true">#</a> 2. Emmet \u63D0\u793A\u6162</h3>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/softwares/vscode.html",pathLocale:"/",permalink:null,routeMeta:{title:"Visual Studio Code"},slug:"vscode",filePath:"D:/Documents/wangfunfun-documents-online/docs/softwares/vscode.md",filePathRelative:"docs/softwares/vscode.md",componentFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/docs/softwares/vscode.html.vue",componentFilePathRelative:"pages/docs/softwares/vscode.html.vue",componentFileChunkName:"v-0c27101e",dataFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/docs/softwares/vscode.html.js",dataFilePathRelative:"pages/docs/softwares/vscode.html.js",dataFileChunkName:"v-0c27101e",htmlFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/dist/docs/softwares/vscode.html",htmlFilePathRelative:"docs/softwares/vscode.html"},{data:{key:"v-c2ec2e46",path:"/docs/softwares/wx-ide.html",title:"\u5FAE\u4FE1\u5F00\u53D1\u8005\u5DE5\u5177",lang:"en-US",frontmatter:{0:"s",1:"l",2:"i",3:"d",4:"e",5:"r",6:":",7:"a",8:"u",9:"t",10:"o"},excerpt:"",headers:[],git:{createdTime:1655877926e3,updatedTime:1655879489e3,contributors:[{name:"wangfunfun",email:"15376960583@189.cn",commits:3}]},filePathRelative:"docs/softwares/wx-ide.md"},key:"v-c2ec2e46",path:"/docs/softwares/wx-ide.html",title:"\u5FAE\u4FE1\u5F00\u53D1\u8005\u5DE5\u5177",lang:"en-US",frontmatter:{0:"s",1:"l",2:"i",3:"d",4:"e",5:"r",6:":",7:"a",8:"u",9:"t",10:"o"},excerpt:"",headers:[],content:`\r
# \u5FAE\u4FE1\u5F00\u53D1\u8005\u5DE5\u5177\r
\r
\u6682\u65E0\u5185\u5BB9\r
`,contentRendered:`<h1 id="\u5FAE\u4FE1\u5F00\u53D1\u8005\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u5FAE\u4FE1\u5F00\u53D1\u8005\u5DE5\u5177" aria-hidden="true">#</a> \u5FAE\u4FE1\u5F00\u53D1\u8005\u5DE5\u5177</h1>
<p>\u6682\u65E0\u5185\u5BB9</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/softwares/wx-ide.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u5FAE\u4FE1\u5F00\u53D1\u8005\u5DE5\u5177"},slug:"wx-ide",filePath:"D:/Documents/wangfunfun-documents-online/docs/softwares/wx-ide.md",filePathRelative:"docs/softwares/wx-ide.md",componentFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/docs/softwares/wx-ide.html.vue",componentFilePathRelative:"pages/docs/softwares/wx-ide.html.vue",componentFileChunkName:"v-c2ec2e46",dataFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/docs/softwares/wx-ide.html.js",dataFilePathRelative:"pages/docs/softwares/wx-ide.html.js",dataFileChunkName:"v-c2ec2e46",htmlFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/dist/docs/softwares/wx-ide.html",htmlFilePathRelative:"docs/softwares/wx-ide.html"},{data:{key:"v-5aa3780f",path:"/docs/technology/git.html",title:"Git",lang:"en-US",frontmatter:{0:"s",1:"l",2:"i",3:"d",4:"e",5:"r",6:":",7:"a",8:"u",9:"t",10:"o"},excerpt:"",headers:[{level:2,title:"init \u4E00\u4E2A\u4ED3\u5E93",slug:"init-\u4E00\u4E2A\u4ED3\u5E93",children:[]},{level:2,title:"git \u7248\u672C\u63A7\u5236",slug:"git-\u7248\u672C\u63A7\u5236",children:[]},{level:2,title:"\u6682\u5B58\u533A",slug:"\u6682\u5B58\u533A",children:[]},{level:2,title:"\u4FEE\u6539\u6587\u4EF6",slug:"\u4FEE\u6539\u6587\u4EF6",children:[]},{level:2,title:"\u8FDC\u7A0B\u4ED3\u5E93",slug:"\u8FDC\u7A0B\u4ED3\u5E93",children:[]},{level:2,title:"\u521B\u5EFA\u5408\u5E76\u5206\u652F",slug:"\u521B\u5EFA\u5408\u5E76\u5206\u652F",children:[]}],git:{createdTime:1655877926e3,updatedTime:1655879489e3,contributors:[{name:"wangfunfun",email:"15376960583@189.cn",commits:3}]},filePathRelative:"docs/technology/git.md"},key:"v-5aa3780f",path:"/docs/technology/git.html",title:"Git",lang:"en-US",frontmatter:{0:"s",1:"l",2:"i",3:"d",4:"e",5:"r",6:":",7:"a",8:"u",9:"t",10:"o"},excerpt:"",headers:[{level:2,title:"init \u4E00\u4E2A\u4ED3\u5E93",slug:"init-\u4E00\u4E2A\u4ED3\u5E93",children:[]},{level:2,title:"git \u7248\u672C\u63A7\u5236",slug:"git-\u7248\u672C\u63A7\u5236",children:[]},{level:2,title:"\u6682\u5B58\u533A",slug:"\u6682\u5B58\u533A",children:[]},{level:2,title:"\u4FEE\u6539\u6587\u4EF6",slug:"\u4FEE\u6539\u6587\u4EF6",children:[]},{level:2,title:"\u8FDC\u7A0B\u4ED3\u5E93",slug:"\u8FDC\u7A0B\u4ED3\u5E93",children:[]},{level:2,title:"\u521B\u5EFA\u5408\u5E76\u5206\u652F",slug:"\u521B\u5EFA\u5408\u5E76\u5206\u652F",children:[]}],content:`\r
# Git\r
\r
## init \u4E00\u4E2A\u4ED3\u5E93\r
\r
## git \u7248\u672C\u63A7\u5236\r
\r
## \u6682\u5B58\u533A\r
\r
## \u4FEE\u6539\u6587\u4EF6\r
\r
## \u8FDC\u7A0B\u4ED3\u5E93\r
\r
## \u521B\u5EFA\u5408\u5E76\u5206\u652F\r
`,contentRendered:`<h1 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> Git</h1>
<h2 id="init-\u4E00\u4E2A\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#init-\u4E00\u4E2A\u4ED3\u5E93" aria-hidden="true">#</a> init \u4E00\u4E2A\u4ED3\u5E93</h2>
<h2 id="git-\u7248\u672C\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#git-\u7248\u672C\u63A7\u5236" aria-hidden="true">#</a> git \u7248\u672C\u63A7\u5236</h2>
<h2 id="\u6682\u5B58\u533A" tabindex="-1"><a class="header-anchor" href="#\u6682\u5B58\u533A" aria-hidden="true">#</a> \u6682\u5B58\u533A</h2>
<h2 id="\u4FEE\u6539\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u6587\u4EF6" aria-hidden="true">#</a> \u4FEE\u6539\u6587\u4EF6</h2>
<h2 id="\u8FDC\u7A0B\u4ED3\u5E93" tabindex="-1"><a class="header-anchor" href="#\u8FDC\u7A0B\u4ED3\u5E93" aria-hidden="true">#</a> \u8FDC\u7A0B\u4ED3\u5E93</h2>
<h2 id="\u521B\u5EFA\u5408\u5E76\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u5408\u5E76\u5206\u652F" aria-hidden="true">#</a> \u521B\u5EFA\u5408\u5E76\u5206\u652F</h2>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/technology/git.html",pathLocale:"/",permalink:null,routeMeta:{title:"Git"},slug:"git",filePath:"D:/Documents/wangfunfun-documents-online/docs/technology/git.md",filePathRelative:"docs/technology/git.md",componentFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/docs/technology/git.html.vue",componentFilePathRelative:"pages/docs/technology/git.html.vue",componentFileChunkName:"v-5aa3780f",dataFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/docs/technology/git.html.js",dataFilePathRelative:"pages/docs/technology/git.html.js",dataFileChunkName:"v-5aa3780f",htmlFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/dist/docs/technology/git.html",htmlFilePathRelative:"docs/technology/git.html"},{data:{key:"v-4b4887bc",path:"/docs/technology/%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F.html",title:"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F",lang:"en-US",frontmatter:{0:"s",1:"l",2:"i",3:"d",4:"e",5:"r",6:":",7:"a",8:"u",9:"t",10:"o"},excerpt:"",headers:[{level:2,title:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6",slug:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6",children:[{level:3,title:"\u5BFC\u822A\u680F",slug:"\u5BFC\u822A\u680F",children:[]},{level:3,title:"\u81EA\u7531\u62D6\u62FD\u6309\u94AE",slug:"\u81EA\u7531\u62D6\u62FD\u6309\u94AE",children:[]}]},{level:2,title:"\u5E38\u7528\u65B9\u6CD5",slug:"\u5E38\u7528\u65B9\u6CD5",children:[{level:3,title:"\u7236\u5B50\u7EC4\u4EF6\u6D88\u606F\u4F20\u9012",slug:"\u7236\u5B50\u7EC4\u4EF6\u6D88\u606F\u4F20\u9012",children:[]},{level:3,title:"\u5F15\u5165\u8BA1\u7B97\u5C5E\u6027",slug:"\u5F15\u5165\u8BA1\u7B97\u5C5E\u6027",children:[]},{level:3,title:"\u76D1\u542C\u8DEF\u7531\u65B9\u6CD5",slug:"\u76D1\u542C\u8DEF\u7531\u65B9\u6CD5",children:[]},{level:3,title:"\u7B80\u5355\u7684\u8868\u5355\u9A8C\u8BC1\u51FD\u6570",slug:"\u7B80\u5355\u7684\u8868\u5355\u9A8C\u8BC1\u51FD\u6570",children:[]}]},{level:2,title:"\u5E38\u7528\u7684\u6837\u5F0F",slug:"\u5E38\u7528\u7684\u6837\u5F0F",children:[{level:3,title:"\u81EA\u5B9A\u4E49 check \u7EC4\u4EF6\u6837\u5F0F",slug:"\u81EA\u5B9A\u4E49-check-\u7EC4\u4EF6\u6837\u5F0F",children:[]},{level:3,title:"\u81EA\u5B9A\u4E49 radio \u7EC4\u4EF6\u6837\u5F0F",slug:"\u81EA\u5B9A\u4E49-radio-\u7EC4\u4EF6\u6837\u5F0F",children:[]}]},{level:2,title:"\u91C7\u5751",slug:"\u91C7\u5751",children:[{level:3,title:"\u5B57\u4F53\u4E0B\u8F7D",slug:"\u5B57\u4F53\u4E0B\u8F7D",children:[]},{level:3,title:"\u80CC\u666F\u56FE\u7247",slug:"\u80CC\u666F\u56FE\u7247",children:[]},{level:3,title:"\u5728 wxml \u4E2D\u4F7F\u7528\u51FD\u6570",slug:"\u5728-wxml-\u4E2D\u4F7F\u7528\u51FD\u6570",children:[]},{level:3,title:"createSelectorQuery",slug:"createselectorquery",children:[]},{level:3,title:"data-xxx \u4F20\u503C",slug:"data-xxx-\u4F20\u503C",children:[]}]}],git:{createdTime:1655877926e3,updatedTime:1655879489e3,contributors:[{name:"wangfunfun",email:"15376960583@189.cn",commits:3}]},filePathRelative:"docs/technology/\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F.md"},key:"v-4b4887bc",path:"/docs/technology/weixinxiaochengxu.html",title:"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F",lang:"en-US",frontmatter:{0:"s",1:"l",2:"i",3:"d",4:"e",5:"r",6:":",7:"a",8:"u",9:"t",10:"o"},excerpt:"",headers:[{level:2,title:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6",slug:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6",children:[{level:3,title:"\u5BFC\u822A\u680F",slug:"\u5BFC\u822A\u680F",children:[]},{level:3,title:"\u81EA\u7531\u62D6\u62FD\u6309\u94AE",slug:"\u81EA\u7531\u62D6\u62FD\u6309\u94AE",children:[]}]},{level:2,title:"\u5E38\u7528\u65B9\u6CD5",slug:"\u5E38\u7528\u65B9\u6CD5",children:[{level:3,title:"\u7236\u5B50\u7EC4\u4EF6\u6D88\u606F\u4F20\u9012",slug:"\u7236\u5B50\u7EC4\u4EF6\u6D88\u606F\u4F20\u9012",children:[]},{level:3,title:"\u5F15\u5165\u8BA1\u7B97\u5C5E\u6027",slug:"\u5F15\u5165\u8BA1\u7B97\u5C5E\u6027",children:[]},{level:3,title:"\u76D1\u542C\u8DEF\u7531\u65B9\u6CD5",slug:"\u76D1\u542C\u8DEF\u7531\u65B9\u6CD5",children:[]},{level:3,title:"\u7B80\u5355\u7684\u8868\u5355\u9A8C\u8BC1\u51FD\u6570",slug:"\u7B80\u5355\u7684\u8868\u5355\u9A8C\u8BC1\u51FD\u6570",children:[]}]},{level:2,title:"\u5E38\u7528\u7684\u6837\u5F0F",slug:"\u5E38\u7528\u7684\u6837\u5F0F",children:[{level:3,title:"\u81EA\u5B9A\u4E49 check \u7EC4\u4EF6\u6837\u5F0F",slug:"\u81EA\u5B9A\u4E49-check-\u7EC4\u4EF6\u6837\u5F0F",children:[]},{level:3,title:"\u81EA\u5B9A\u4E49 radio \u7EC4\u4EF6\u6837\u5F0F",slug:"\u81EA\u5B9A\u4E49-radio-\u7EC4\u4EF6\u6837\u5F0F",children:[]}]},{level:2,title:"\u91C7\u5751",slug:"\u91C7\u5751",children:[{level:3,title:"\u5B57\u4F53\u4E0B\u8F7D",slug:"\u5B57\u4F53\u4E0B\u8F7D",children:[]},{level:3,title:"\u80CC\u666F\u56FE\u7247",slug:"\u80CC\u666F\u56FE\u7247",children:[]},{level:3,title:"\u5728 wxml \u4E2D\u4F7F\u7528\u51FD\u6570",slug:"\u5728-wxml-\u4E2D\u4F7F\u7528\u51FD\u6570",children:[]},{level:3,title:"createSelectorQuery",slug:"createselectorquery",children:[]},{level:3,title:"data-xxx \u4F20\u503C",slug:"data-xxx-\u4F20\u503C",children:[]}]}],content:`\r
# \u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\r
\r
\u8BE5\u6587\u6863\u8BB0\u5F55\u4E86\u5F00\u53D1\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u9879\u76EE\uFF08\u5FAE\u4FE1\u5F00\u53D1\u8005\u5DE5\u5177\uFF0C\u975E\u8DE8\u7AEF\u5E73\u53F0\uFF09\u4E2D\u9047\u5230\u7684\u4E00\u4E9B\u95EE\u9898\uFF0C\u4F8B\u5982\uFF1A\u5E38\u7528\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u3001\u5E38\u7528\u7684\u6837\u5F0F\u53CA\u51FD\u6570\u3001\u4E00\u4E9B\u91C7\u5751\u7684\u5730\u65B9\u3001\u5E38\u7528\u4E1A\u52A1\u7684\u4EE3\u7801\u5757\u7B49\u3002\r
\r
## \u81EA\u5B9A\u4E49\u7EC4\u4EF6\r
\r
### \u5BFC\u822A\u680F\r
\r
\u7279\u6027\uFF1A\r
\r
- \u8BE5\u81EA\u5B9A\u4E49\u5BFC\u822A\u680F\u5747\u4F7F\u7528\u52A8\u6001\u83B7\u53D6\u7684\u53C2\u6570\uFF0C\u517C\u5BB9\u6027\u597D\uFF0C\u53EF\u6269\u5C55\u6027\u9AD8\uFF1B\r
\r
- \u5BFC\u822A\u680F\u6574\u4F53\u91C7\u7528 fixed + absolute \uFF0C\u4EE3\u7801\u6613\u7EF4\u62A4/\u597D\u7406\u89E3\uFF1B\r
\r
- \u53EF\u6839\u636E\u4E1A\u52A1\u9700\u8981\u6269\u5C55\u4E0D\u540C\u7684 properties\uFF1B\r
\r
- \u81EA\u52A8\u8BA1\u7B97\u63D2\u69FD\u5185\u5BB9\u9AD8\u5EA6\uFF0C\u9632\u6B62\u5F15\u8D77\u5BFC\u822A\u680F\u584C\u9677\uFF1B\r
\r
\u6548\u679C\u56FE\uFF1A\r
\r
![\u793A\u4F8B\u56FE](../../.vuepress/public/technology/\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F/\u5FAE\u4FE1\u56FE\u7247_20220621145907.png)\r
\r
\u4EE3\u7801\uFF1A\r
\r
\`\`\`html\r
<view class="navbar">\r
  <view\r
    class="navbar-fixed  {{borderBottom ? 'border-bottom':''}} {{bottomShadow ? 'bottom-shadow':''}}"\r
    style="background-color: {{backgroundColor}}; padding: {{navbarPaddingTop}}px {{navbarPaddingRight}}px {{navbarPaddingBottom}}px {{navbarPaddingLeft}}px;"\r
  >\r
    <view class="navbar-inner" style="height: {{navbarHeight}}px;">\r
      <view class="left" bindtap="goBack" style="top: {{navbarInnerTop}}px">\r
        <image style="width: {{backIconWidth}}; height: {{backIconHeight}};" wx:if="{{showBackIcon}}" src="{{backIcon}}"></image>\r
        <text wx:if="{{showBackText}}" style="line-height: {{navbarHeight}}px;color:{{backTextColor}};">{{backText}}</text>\r
      </view>\r
      <view class="title" style="width: calc(100% - {{menuWidth}}px - 30%);line-height: {{navbarHeight}}px;color:{{titleColor}};">{{title}}</view>\r
    </view>\r
    <view id="slot">\r
      <slot></slot>\r
    </view>\r
  </view>\r
  <view class="navbar-height" style="height:{{collapseHeight}}px;"></view>\r
</view>\r
\`\`\`\r
\r
\`\`\`css\r
.navbar {\r
}\r
\r
.navbar-fixed {\r
  width: 100vw;\r
  position: fixed;\r
  top: 0;\r
  left: 0;\r
  z-index: 9999;\r
  background-color: #fff;\r
}\r
.navbar-fixed.border-bottom {\r
  border-bottom: 1px solid #ddd;\r
}\r
.navbar-fixed.bottom-shadow {\r
  box-shadow: 0px 2px 6px 0px rgba(10, 52, 94, 0.08);\r
}\r
.navbar-inner {\r
  position: relative;\r
}\r
.left {\r
  position: absolute;\r
  min-width: 50rpx;\r
  height: 100%;\r
  transform: translate(0%, -50%);\r
  display: flex;\r
  align-items: center;\r
  padding-right: 20rpx;\r
  box-sizing: border-box;\r
}\r
.left text {\r
  font-size: 28rpx;\r
  font-family: PingFangSC-Medium, PingFang SC;\r
  font-weight: 500;\r
  color: #555;\r
}\r
.left image {\r
  width: 28rpx;\r
  height: 28rpx;\r
}\r
.title {\r
  height: 100%;\r
  text-align: center;\r
  position: absolute;\r
  top: 50%;\r
  left: 50%;\r
  transform: translate(-50%, -50%);\r
  font-size: 32rpx;\r
  font-family: PingFangSC-Medium, PingFang SC;\r
  font-weight: 500;\r
  color: #030303;\r
  overflow: hidden;\r
  white-space: nowrap;\r
  text-overflow: ellipsis;\r
}\r
\`\`\`\r
\r
\`\`\`javascript\r
Component({\r
  properties: {\r
    title: {\r
      type: String,\r
      value: '\u5BFC\u822A\u680F',\r
    },\r
    backIcon: {\r
      type: String,\r
      value: 'https://s1.ax1x.com/2022/06/21/jS9Wzn.png',\r
    },\r
    showBackIcon: {\r
      type: Boolean,\r
      value: true,\r
    },\r
    borderBottom: {\r
      type: Boolean,\r
      value: true,\r
    },\r
    backText: {\r
      type: String,\r
      value: '\u8FD4\u56DE',\r
    },\r
    slotHeight: {\r
      type: Number,\r
      value: 0,\r
    },\r
    showBackText: {\r
      type: Boolean,\r
      value: false,\r
    },\r
    titleColor: {\r
      type: String,\r
      value: '#030303',\r
    },\r
    backTextColor: {\r
      type: String,\r
      value: '#555',\r
    },\r
    backgroundColor: {\r
      type: String,\r
      value: '#fff',\r
    },\r
    backIconWidth: {\r
      type: String,\r
      value: '28rpx',\r
    },\r
    backIconHeight: {\r
      type: String,\r
      value: '28rpx',\r
    },\r
  },\r
  data: {\r
    navbarHeight: 0,\r
    navbarPaddingTop: 0,\r
    navbarPaddingBottom: 0,\r
    navbarPaddingLeft: 0,\r
    navbarPaddingRight: 0,\r
    menuWidth: 0,\r
    statusBarHeight: 0,\r
    navbarInnerTop: 0,\r
    collapseHeight: 0,\r
  },\r
  attached() {\r
    let $this = this\r
    const systemInfo = wx.getSystemInfoSync()\r
    const menuButtonInfo = wx.getMenuButtonBoundingClientRect()\r
    this.setData({\r
      navbarHeight: menuButtonInfo.height,\r
      menuWidth: menuButtonInfo.width,\r
      navbarPaddingTop: menuButtonInfo.top,\r
      navbarPaddingBottom: menuButtonInfo.top - systemInfo.statusBarHeight,\r
      navbarPaddingLeft: systemInfo.screenWidth - menuButtonInfo.right,\r
      navbarPaddingRight: systemInfo.screenWidth - menuButtonInfo.right,\r
      statusBarHeight: systemInfo.statusBarHeight,\r
      navbarInnerTop: menuButtonInfo.height / 2,\r
    })\r
    this.createSelectorQuery()\r
      .select('#slot')\r
      .boundingClientRect(function (res) {\r
        $this.setData({\r
          collapseHeight: $this.data.navbarPaddingTop + $this.data.navbarHeight + $this.data.navbarPaddingBottom + Number(res.height),\r
        })\r
      })\r
      .exec()\r
  },\r
  methods: {\r
    goBack() {\r
      wx.navigateBack({\r
        delta: 1,\r
      })\r
    },\r
  },\r
})\r
\`\`\`\r
\r
### \u81EA\u7531\u62D6\u62FD\u6309\u94AE\r
\r
\`\`\`html\r
<!-- btn.wxml -->\r
<view\r
  class="offer-btn"\r
  bindtap="goOfferList"\r
  catchtouchmove="buttonMove"\r
  bindtouchstart="buttonStart"\r
  bindtouchend="buttonEnd"\r
  style="top:{{buttonTop}}px;left:{{buttonLeft}}px;"\r
>\r
</view>\r
\`\`\`\r
\r
\`\`\`css\r
/* btn.wxss */\r
.offer-btn {\r
  position: fixed;\r
  z-index: 991;\r
  bottom: 120rpx;\r
  right: 82rpx;\r
}\r
\`\`\`\r
\r
\`\`\`javascript\r
// btn.js\r
var startPoint\r
Component({\r
  data: {\r
    buttonTop: 0,\r
    buttonLeft: 0,\r
    windowHeight: '',\r
    windowWidth: '',\r
  },\r
  attached() {\r
    let $this = this\r
    wx.getSystemInfo({\r
      success(res) {\r
        $this.setData({\r
          windowHeight: res.windowHeight,\r
          windowWidth: res.windowWidth,\r
          buttonTop: res.windowHeight * 0.8,\r
          buttonLeft: res.windowWidth * 0.8,\r
        })\r
      },\r
    })\r
  },\r
  methods: {\r
    buttonStart(e) {\r
      startPoint = e.touches[0]\r
    },\r
    buttonMove(e) {\r
      var endPoint = e.touches[e.touches.length - 1]\r
      var translateX = endPoint.clientX - startPoint.clientX\r
      var translateY = endPoint.clientY - startPoint.clientY\r
      startPoint = endPoint\r
      var buttonTop = this.data.buttonTop + translateY\r
      var buttonLeft = this.data.buttonLeft + translateX\r
      if (buttonLeft + 50 >= this.data.windowWidth) {\r
        buttonLeft = this.data.windowWidth - 50\r
      }\r
      if (buttonLeft <= 0) {\r
        buttonLeft = 0\r
      }\r
      if (buttonTop <= 0) {\r
        buttonTop = 0\r
      }\r
      if (buttonTop + 50 >= this.data.windowHeight) {\r
        buttonTop = this.data.windowHeight - 50\r
      }\r
      this.setData({\r
        buttonTop: buttonTop,\r
        buttonLeft: buttonLeft,\r
      })\r
    },\r
    buttonEnd(e) {},\r
  },\r
})\r
\`\`\`\r
\r
## \u5E38\u7528\u65B9\u6CD5\r
\r
### \u7236\u5B50\u7EC4\u4EF6\u6D88\u606F\u4F20\u9012\r
\r
- \u5B50\u7EC4\u4EF6\u901A\u77E5\u7236\u7EA7\u7EC4\u4EF6\r
\r
\`\`\`javascript\r
// child.js\r
this.triggerEvent('close', {})\r
\`\`\`\r
\r
\`\`\`html\r
<!-- father.js -->\r
<child-component bind:close="closeHandle"></child-component>\r
\`\`\`\r
\r
- \u7236\u7EC4\u4EF6\u5411\u5B50\u7EC4\u4EF6\u4F20\u9012\u6570\u636E\r
\r
\`\`\`javascript\r
// child.js\r
Component({\r
  properties: {\r
    title: {\r
      type: String,\r
      value: '',\r
    },\r
  },\r
})\r
\`\`\`\r
\r
\`\`\`html\r
<!-- father.js -->\r
<child-component title="\u6807\u9898"></child-component>\r
\`\`\`\r
\r
- \u7236\u7EC4\u4EF6\u83B7\u53D6\u5B50\u7EC4\u4EF6\u5B9E\u4F8B\r
\r
\`\`\`html\r
<!-- father.wxml -->\r
<child-component id="childComponent"></child-component>\r
\`\`\`\r
\r
\`\`\`javascript\r
// father.js\r
this.selectComponent('#childComponent').open()\r
\`\`\`\r
\r
### \u5F15\u5165\u8BA1\u7B97\u5C5E\u6027\r
\r
1. \u6784\u5EFA npm\r
\r
\`\`\`\r
npm init -y\r
\`\`\`\r
\r
2. \u5B89\u88C5\u5FAE\u4FE1\u63D0\u4F9B\u7684\u8BA1\u7B97\u5C5E\u6027\u4F9D\u8D56\r
\r
\`\`\`\r
npm install --save miniprogram-computed\r
\`\`\`\r
\r
3. \u70B9\u51FB\u5FAE\u4FE1\u5F00\u53D1\u8005\u5DE5\u5177\u4E0A\u65B9\u5DE5\u5177\u680F\u7684 \u5DE5\u5177/\u6784\u5EFA npm/\u6784\u5EFA\u5B8C\u6210 \u70B9\u51FB\u786E\u5B9A\u5373\u53EF\r
\r
4. \u5F15\u5165\u8BA1\u7B97\u5C5E\u6027\r
\r
\`\`\`javascript\r
const computedBehavior = require('miniprogram-computed').behavior\r
\r
Page({\r
  // \u8FD9\u91CC\u6CE8\u518C\u5F15\u5165\u7684\u8BA1\u7B97\u5C5E\u6027\r
  behaviors: [computedBehavior],\r
  data: {},\r
})\r
\`\`\`\r
\r
1. \u4F7F\u7528 data \u5B9A\u4E49\u7684\u6570\u636E\r
\r
\`\`\`javascript\r
const computedBehavior = require('miniprogram-computed').behavior\r
Page({\r
  behaviors: [computedBehavior],\r
  data: {\r
    a: 1,\r
  },\r
  computed: {\r
    fixed(data) {\r
      return data.a.toFixed(2)\r
    },\r
  },\r
})\r
\`\`\`\r
\r
6. \u5728\u8BA1\u7B97\u5C5E\u6027\u4E2D\u4F7F\u7528\u5176\u4ED6\u7684\u8BA1\u7B97\u5C5E\u6027\r
\r
\`\`\`javascript\r
const computedBehavior = require('miniprogram-computed').behavior\r
Page({\r
  behaviors: [computedBehavior],\r
  data: {\r
    a: 1,\r
  },\r
  computed: {\r
    fixed(data) {\r
      return data.a.toFixed(2)\r
    },\r
    unit(data) {\r
      return data.fixed + '\u5143'\r
    },\r
  },\r
})\r
\`\`\`\r
\r
7. \u5728\u65B9\u6CD5\u4E2D\u4F7F\u7528\u5176\u4ED6\u7684\u8BA1\u7B97\u5C5E\u6027\r
\r
\`\`\`javascript\r
const computedBehavior = require('miniprogram-computed').behavior\r
Page({\r
  behaviors: [computedBehavior],\r
  data: {\r
    a: 1,\r
    b: '',\r
  },\r
  computed: {\r
    fixed(data) {\r
      return data.a.toFixed(2)\r
    },\r
  },\r
  addUnit() {\r
    this.setData({\r
      b: this.fixed + '\u5143',\r
    })\r
  },\r
})\r
\`\`\`\r
\r
### \u76D1\u542C\u8DEF\u7531\u65B9\u6CD5\r
\r
\`\`\`javascript\r
// \u8BE5\u65B9\u6CD5\u6CA1\u6709\u8BB0\u5F55\u5728\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5F00\u53D1\u6587\u6863\u4E2D\r
wx.onAppRoute(res => {\r
  console.log(res)\r
})\r
\`\`\`\r
\r
### \u7B80\u5355\u7684\u8868\u5355\u9A8C\u8BC1\u51FD\u6570\r
\r
\u51FD\u6570\u4EE3\u7801\uFF1A\r
\r
\`\`\`javascript\r
// validate.js\r
export const simpleValidate = (rules, form) => {\r
  return new Promise((resolve, rejct) => {\r
    let error = []\r
    for (const key in rules) {\r
      if (rules[key] && rules[key].required) {\r
        if (!form[key]) {\r
          error.push(rules[key].msg)\r
        } else {\r
          if (rules[key].validator) {\r
            try {\r
              rules[key].validator(form[key])\r
            } catch (err) {\r
              error.push(err.message)\r
            }\r
          }\r
        }\r
      }\r
    }\r
    if (error.length > 0) {\r
      wx.showToast({\r
        title: error[0],\r
        icon: 'none',\r
      })\r
      resolve(false)\r
    } else {\r
      resolve(true)\r
    }\r
  })\r
}\r
\`\`\`\r
\r
\u4F7F\u7528\u65B9\u6CD5\uFF1A\r
\r
\`\`\`javascript\r
const { simpleValidate } = require('./simple-validate')\r
\r
Page({\r
  data: {\r
    form: {\r
      name: '',\r
      phone: '',\r
    },\r
    rules: {\r
      name: {\r
        required: true,\r
        msg: '\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A',\r
      },\r
      phone: {\r
        required: true,\r
        msg: '\u624B\u673A\u53F7\u4E0D\u80FD\u4E3A\u7A7A',\r
        validator: function (value) {\r
          if (!new RegExp(/^1(3\\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\\d|9[0-35-9])\\d{8}$/).test(value)) {\r
            // new error \u5BFC\u51FA\u62A5\u9519\u4FE1\u606F\r
            throw new Error('\u8BF7\u8F93\u5165\u683C\u5F0F\u6B63\u786E\u7684\u624B\u673A\u53F7')\r
          }\r
        },\r
      },\r
    },\r
  },\r
  submit() {\r
    simpleValidate(this.data.rules, this.data.form).then(validate => {\r
      if (validate) {\r
        // \u901A\u8FC7\u9A8C\u8BC1\r
      }\r
    })\r
  },\r
})\r
\`\`\`\r
\r
## \u5E38\u7528\u7684\u6837\u5F0F\r
\r
### \u81EA\u5B9A\u4E49 check \u7EC4\u4EF6\u6837\u5F0F\r
\r
\`\`\`css\r
checkbox .wx-checkbox-input {\r
  width: 32rpx;\r
  height: 32rpx;\r
  border-radius: 50%;\r
}\r
\r
checkbox .wx-checkbox-input.wx-checkbox-input-checked {\r
  border-color: #005aa0;\r
  background: #005aa0;\r
}\r
\r
checkbox .wx-checkbox-input.wx-checkbox-input-checked::before {\r
  width: 32rpx;\r
  height: 32rpx;\r
  line-height: 32rpx;\r
  border-radius: 50%;\r
  text-align: center;\r
  font-size: 32rpx;\r
  color: #fff;\r
  background: transparent;\r
  transform: translate(-50%, -50%) scale(1);\r
  -webkit-transform: translate(-50%, -50%) scale(1);\r
}\r
\`\`\`\r
\r
### \u81EA\u5B9A\u4E49 radio \u7EC4\u4EF6\u6837\u5F0F\r
\r
\`\`\`css\r
wx-radio {\r
  -webkit-tap-highlight-color: transparent;\r
  display: inline-block;\r
}\r
\r
wx-radio[hidden] {\r
  display: none;\r
}\r
\r
wx-radio .wx-radio-wrapper {\r
  display: -webkit-inline-flex;\r
  display: inline-flex;\r
  -webkit-align-items: center;\r
  align-items: center;\r
  vertical-align: middle;\r
}\r
\r
wx-radio .wx-radio-input {\r
  -webkit-appearance: none;\r
  appearance: none;\r
  margin-right: 5px;\r
  outline: 0;\r
  border: 1px solid #d1d1d1;\r
  background-color: #ffffff;\r
  border-radius: 50%;\r
  width: 22px;\r
  height: 22px;\r
  position: relative;\r
}\r
\r
wx-radio .wx-radio-input.wx-radio-input-checked {\r
  background-color: #005aa0;\r
  border-color: #005aa0;\r
}\r
\r
wx-radio .wx-radio-input.wx-radio-input-checked:before {\r
  font: normal normal normal 14px/1 'weui';\r
  content: '\\EA08';\r
  color: #ffffff;\r
  font-size: 18px;\r
  position: absolute;\r
  top: 50%;\r
  left: 50%;\r
  transform: translate(-50%, -48%) scale(0.73);\r
  -webkit-transform: translate(-50%, -48%) scale(0.73);\r
}\r
\r
wx-radio .wx-radio-input.wx-radio-input-disabled {\r
  background-color: #e1e1e1;\r
  border-color: #d1d1d1;\r
}\r
\r
wx-radio .wx-radio-input.wx-radio-input-disabled.wx-radio-input-checked {\r
  background-color: #005aa0;\r
  border-color: #005aa0;\r
}\r
\r
wx-radio .wx-radio-input.wx-radio-input-disabled:before {\r
  color: #fff;\r
}\r
\r
wx-radio-group {\r
  display: block;\r
}\r
\r
wx-radio-group[hidden] {\r
  display: none;\r
}\r
\`\`\`\r
\r
## \u91C7\u5751\r
\r
### \u5B57\u4F53\u4E0B\u8F7D\r
\r
- \u5B57\u4F53\u5305\u7684 url \u5FC5\u987B\u4F7F\u7528 https\r
\r
- \u5982\u9047\u4E0B\u8F7D\u5931\u8D25\uFF0C\u5927\u90E8\u5206\u662F\u56E0\u4E3A\u5730\u5740\u6CA1\u6709\u5F00\u542F\u8DE8\u57DF\uFF0C\u5C0F\u7A0B\u5E8F\u4E0B\u8F7D\u5B57\u4F53\u4E0D\u4F1A\u63D0\u793A\u8DE8\u57DF\uFF0C\u9700\u8981\u65B0\u589E \`.html\` \u6587\u4EF6\u5F15\u5165 url \u5B57\u4F53\u6D4B\u8BD5\r
\r
\u793A\u4F8B\u4EE3\u7801\uFF1A\r
\r
\`\`\`javascript\r
wx.loadFontFace({\r
  global: true,\r
  family: 'PangMenZhengDao',\r
  source: 'url("https://xxxxx/font.ttf")',\r
  success(res) {},\r
  error(err) {},\r
})\r
\`\`\`\r
\r
### \u80CC\u666F\u56FE\u7247\r
\r
- \`background-image:url();\` \u4E0D\u80FD\u4F7F\u7528\u672C\u5730\u56FE\u7247\u3001\u56FE\u7247 url \u5E26\u4E2D\u6587\u6216\u8005\u7A7A\u683C\uFF1B\r
\r
- base64 \u867D\u7136\u53EF\u4EE5\u4F7F\u7528\uFF0C\u4F46\u662F\u4F53\u79EF\u8F83\u5927\uFF0C\u4E0D\u5EFA\u8BAE\u4F7F\u7528\uFF1B\r
\r
\u4EE5\u4E0B\u5199\u6CD5\u80CC\u666F\u56FE\u4E0D\u663E\u793A\uFF1A\r
\r
\`\`\`css\r
background-image: url(https://xxxx/\u56FE\u7247.png);\r
\`\`\`\r
\r
### \u5728 wxml \u4E2D\u4F7F\u7528\u51FD\u6570\r
\r
1. \u65B0\u5EFA \`utils.wxs\` \u6587\u4EF6\r
\r
\`\`\`javascript\r
var formatUtils = {\r
  format: function format(val) {\r
    // \u8FD9\u91CC\u4E0D\u80FD\u4F7F\u7528 es6 \u53CA\u4EE5\u540E\u7684\u8BED\u6CD5\r
    return val.toFixed(2)\r
  },\r
}\r
\r
module.exports = {\r
  format: formatUtils.format,\r
}\r
\`\`\`\r
\r
2. \u5728 \`page.wxml\` \u4E2D\u9876\u5C42\u6807\u7B7E\u5F15\u5165\r
\r
\`\`\`html\r
<wxs src="/utils/format.wxs" module="formatUtils"></wxs>\r
<view class="page">\r
  <text>{{formatUtils.format(1)}}</text>\r
</view>\r
\`\`\`\r
\r
### createSelectorQuery\r
\r
\`\`\`javascript\r
// \u5728\u9875\u9762\u4E2D\u4F7F\u7528\r
wx.createSelectorQuery\r
  .select('#id')\r
  .boundingClientRect(function (res) {})\r
  .exec()\r
\r
// \u5728\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E2D\u4F7F\u7528\r
this.createSelectorQuery()\r
  .select('#id')\r
  .boundingClientRect(function (res) {})\r
  .exec()\r
\`\`\`\r
\r
selector \u8BED\u6CD5\uFF1A\r
\r
selector \u7C7B\u4F3C\u4E8E CSS \u7684\u9009\u62E9\u5668\uFF0C\u4F46\u4EC5\u652F\u6301\u4E0B\u5217\u8BED\u6CD5\u3002\r
\r
- ID \u9009\u62E9\u5668\uFF1A#the-id\r
- class \u9009\u62E9\u5668\uFF08\u53EF\u4EE5\u8FDE\u7EED\u6307\u5B9A\u591A\u4E2A\uFF09\uFF1A.a-class.another-class\r
- \u5B50\u5143\u7D20\u9009\u62E9\u5668\uFF1A.the-parent > .the-child\r
- \u540E\u4EE3\u9009\u62E9\u5668\uFF1A.the-ancestor .the-descendant\r
- \u8DE8\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684\u540E\u4EE3\u9009\u62E9\u5668\uFF1A.the-ancestor >>> .the-descendant\r
- \u591A\u9009\u62E9\u5668\u7684\u5E76\u96C6\uFF1A#a-node, .some-other-nodes\r
\r
### data-xxx \u4F20\u503C\r
\r
data-xxx \u4F20\u5165\u7684\u540D\u79F0\u4F1A\u5F3A\u5236\u53D8\u66F4\u4E3A\u5C0F\u5199\uFF0C\u5982 \`data-tagName\` \u5728 \`tapName\` \u65B9\u6CD5\u4E2D\u8FD4\u56DE\u7684 e \u4E2D\u663E\u793A\u4E3A \`tagname\`\r
\r
\`\`\`html\r
<view data-tagName="tag" data-index="0" bindtap="tapName"></view>\r
\`\`\`\r
\r
\`\`\`javascript\r
tapName(e){\r
  console.log(e.currentTarget.dataset.tagname)\r
}\r
\`\`\`\r
`,contentRendered:`<h1 id="\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F" aria-hidden="true">#</a> \u5FAE\u4FE1\u5C0F\u7A0B\u5E8F</h1>
<p>\u8BE5\u6587\u6863\u8BB0\u5F55\u4E86\u5F00\u53D1\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u9879\u76EE\uFF08\u5FAE\u4FE1\u5F00\u53D1\u8005\u5DE5\u5177\uFF0C\u975E\u8DE8\u7AEF\u5E73\u53F0\uFF09\u4E2D\u9047\u5230\u7684\u4E00\u4E9B\u95EE\u9898\uFF0C\u4F8B\u5982\uFF1A\u5E38\u7528\u7684\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u3001\u5E38\u7528\u7684\u6837\u5F0F\u53CA\u51FD\u6570\u3001\u4E00\u4E9B\u91C7\u5751\u7684\u5730\u65B9\u3001\u5E38\u7528\u4E1A\u52A1\u7684\u4EE3\u7801\u5757\u7B49\u3002</p>
<h2 id="\u81EA\u5B9A\u4E49\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u7EC4\u4EF6" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u7EC4\u4EF6</h2>
<h3 id="\u5BFC\u822A\u680F" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u822A\u680F" aria-hidden="true">#</a> \u5BFC\u822A\u680F</h3>
<p>\u7279\u6027\uFF1A</p>
<ul>
<li>
<p>\u8BE5\u81EA\u5B9A\u4E49\u5BFC\u822A\u680F\u5747\u4F7F\u7528\u52A8\u6001\u83B7\u53D6\u7684\u53C2\u6570\uFF0C\u517C\u5BB9\u6027\u597D\uFF0C\u53EF\u6269\u5C55\u6027\u9AD8\uFF1B</p>
</li>
<li>
<p>\u5BFC\u822A\u680F\u6574\u4F53\u91C7\u7528 fixed + absolute \uFF0C\u4EE3\u7801\u6613\u7EF4\u62A4/\u597D\u7406\u89E3\uFF1B</p>
</li>
<li>
<p>\u53EF\u6839\u636E\u4E1A\u52A1\u9700\u8981\u6269\u5C55\u4E0D\u540C\u7684 properties\uFF1B</p>
</li>
<li>
<p>\u81EA\u52A8\u8BA1\u7B97\u63D2\u69FD\u5185\u5BB9\u9AD8\u5EA6\uFF0C\u9632\u6B62\u5F15\u8D77\u5BFC\u822A\u680F\u584C\u9677\uFF1B</p>
</li>
</ul>
<p>\u6548\u679C\u56FE\uFF1A</p>
<p><img src="@source/.vuepress/public/technology/\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F/\u5FAE\u4FE1\u56FE\u7247_20220621145907.png" alt="\u793A\u4F8B\u56FE"></p>
<p>\u4EE3\u7801\uFF1A</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>navbar<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span>
    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>navbar-fixed  {{borderBottom ? <span class="token punctuation">'</span>border-bottom<span class="token punctuation">'</span>:<span class="token punctuation">'</span><span class="token punctuation">'</span>}} {{bottomShadow ? <span class="token punctuation">'</span>bottom-shadow<span class="token punctuation">'</span>:<span class="token punctuation">'</span><span class="token punctuation">'</span>}}<span class="token punctuation">"</span></span>
    <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token selector">background-color:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>backgroundColor<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token selector">; padding:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>navbarPaddingTop<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token selector">px</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>navbarPaddingRight<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token selector">px</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>navbarPaddingBottom<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token selector">px</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>navbarPaddingLeft<span class="token punctuation">}</span><span class="token punctuation">}</span>px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span>
  <span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>navbar-inner<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token selector">height:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>navbarHeight<span class="token punctuation">}</span><span class="token punctuation">}</span>px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span> <span class="token attr-name">bindtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>goBack<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token selector">top:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>navbarInnerTop<span class="token punctuation">}</span><span class="token punctuation">}</span>px</span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>image</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token selector">width:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>backIconWidth<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token selector">; height:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>backIconHeight<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span> <span class="token attr-name"><span class="token namespace">wx:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{showBackIcon}}<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{backIcon}}<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>image</span><span class="token punctuation">></span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span> <span class="token attr-name"><span class="token namespace">wx:</span>if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{{showBackText}}<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token selector">line-height:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>navbarHeight<span class="token punctuation">}</span><span class="token punctuation">}</span>px<span class="token punctuation">;</span><span class="token property">color</span><span class="token punctuation">:</span><span class="token punctuation">{</span><span class="token punctuation">{</span>backTextColor<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>{{backText}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>title<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token selector">width: calc(100% -</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>menuWidth<span class="token punctuation">}</span><span class="token punctuation">}</span>px - 30%<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token property">line-height</span><span class="token punctuation">:</span> <span class="token punctuation">{</span><span class="token punctuation">{</span>navbarHeight<span class="token punctuation">}</span><span class="token punctuation">}</span>px<span class="token punctuation">;</span><span class="token property">color</span><span class="token punctuation">:</span><span class="token punctuation">{</span><span class="token punctuation">{</span>titleColor<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span>{{title}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>slot<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>navbar-height<span class="token punctuation">"</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token selector">height:</span><span class="token punctuation">{</span><span class="token punctuation">{</span>collapseHeight<span class="token punctuation">}</span><span class="token punctuation">}</span>px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">.navbar</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token selector">.navbar-fixed</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100vw<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 9999<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.navbar-fixed.border-bottom</span> <span class="token punctuation">{</span>
  <span class="token property">border-bottom</span><span class="token punctuation">:</span> 1px solid #ddd<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.navbar-fixed.bottom-shadow</span> <span class="token punctuation">{</span>
  <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0px 2px 6px 0px <span class="token function">rgba</span><span class="token punctuation">(</span>10<span class="token punctuation">,</span> 52<span class="token punctuation">,</span> 94<span class="token punctuation">,</span> 0.08<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.navbar-inner</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.left</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">min-width</span><span class="token punctuation">:</span> 50rpx<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>0%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">padding-right</span><span class="token punctuation">:</span> 20rpx<span class="token punctuation">;</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.left text</span> <span class="token punctuation">{</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 28rpx<span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> PingFangSC-Medium<span class="token punctuation">,</span> PingFang SC<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 500<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #555<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.left image</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 28rpx<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 28rpx<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.title</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> PingFangSC-Medium<span class="token punctuation">,</span> PingFang SC<span class="token punctuation">;</span>
  <span class="token property">font-weight</span><span class="token punctuation">:</span> 500<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #030303<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>
  <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'\u5BFC\u822A\u680F'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backIcon</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'https://s1.ax1x.com/2022/06/21/jS9Wzn.png'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">showBackIcon</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">borderBottom</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backText</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'\u8FD4\u56DE'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">slotHeight</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Number<span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">showBackText</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">titleColor</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'#030303'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backTextColor</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'#555'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backgroundColor</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'#fff'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backIconWidth</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'28rpx'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backIconHeight</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'28rpx'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">navbarHeight</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">navbarPaddingTop</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">navbarPaddingBottom</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">navbarPaddingLeft</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">navbarPaddingRight</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">menuWidth</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">statusBarHeight</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">navbarInnerTop</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">collapseHeight</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">attached</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> $<span class="token keyword">this</span> <span class="token operator">=</span> <span class="token keyword">this</span>
    <span class="token keyword">const</span> systemInfo <span class="token operator">=</span> wx<span class="token punctuation">.</span><span class="token function">getSystemInfoSync</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">const</span> menuButtonInfo <span class="token operator">=</span> wx<span class="token punctuation">.</span><span class="token function">getMenuButtonBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">navbarHeight</span><span class="token operator">:</span> menuButtonInfo<span class="token punctuation">.</span>height<span class="token punctuation">,</span>
      <span class="token literal-property property">menuWidth</span><span class="token operator">:</span> menuButtonInfo<span class="token punctuation">.</span>width<span class="token punctuation">,</span>
      <span class="token literal-property property">navbarPaddingTop</span><span class="token operator">:</span> menuButtonInfo<span class="token punctuation">.</span>top<span class="token punctuation">,</span>
      <span class="token literal-property property">navbarPaddingBottom</span><span class="token operator">:</span> menuButtonInfo<span class="token punctuation">.</span>top <span class="token operator">-</span> systemInfo<span class="token punctuation">.</span>statusBarHeight<span class="token punctuation">,</span>
      <span class="token literal-property property">navbarPaddingLeft</span><span class="token operator">:</span> systemInfo<span class="token punctuation">.</span>screenWidth <span class="token operator">-</span> menuButtonInfo<span class="token punctuation">.</span>right<span class="token punctuation">,</span>
      <span class="token literal-property property">navbarPaddingRight</span><span class="token operator">:</span> systemInfo<span class="token punctuation">.</span>screenWidth <span class="token operator">-</span> menuButtonInfo<span class="token punctuation">.</span>right<span class="token punctuation">,</span>
      <span class="token literal-property property">statusBarHeight</span><span class="token operator">:</span> systemInfo<span class="token punctuation">.</span>statusBarHeight<span class="token punctuation">,</span>
      <span class="token literal-property property">navbarInnerTop</span><span class="token operator">:</span> menuButtonInfo<span class="token punctuation">.</span>height <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createSelectorQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token string">'#slot'</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">boundingClientRect</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        $<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">collapseHeight</span><span class="token operator">:</span> $<span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>navbarPaddingTop <span class="token operator">+</span> $<span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>navbarHeight <span class="token operator">+</span> $<span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>navbarPaddingBottom <span class="token operator">+</span> <span class="token function">Number</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">goBack</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      wx<span class="token punctuation">.</span><span class="token function">navigateBack</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">delta</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u81EA\u7531\u62D6\u62FD\u6309\u94AE" tabindex="-1"><a class="header-anchor" href="#\u81EA\u7531\u62D6\u62FD\u6309\u94AE" aria-hidden="true">#</a> \u81EA\u7531\u62D6\u62FD\u6309\u94AE</h3>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- btn.wxml --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span>
  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>offer-btn<span class="token punctuation">"</span></span>
  <span class="token attr-name">bindtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>goOfferList<span class="token punctuation">"</span></span>
  <span class="token attr-name">catchtouchmove</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>buttonMove<span class="token punctuation">"</span></span>
  <span class="token attr-name">bindtouchstart</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>buttonStart<span class="token punctuation">"</span></span>
  <span class="token attr-name">bindtouchend</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>buttonEnd<span class="token punctuation">"</span></span>
  <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token selector">top:</span><span class="token punctuation">{</span><span class="token punctuation">{</span>buttonTop<span class="token punctuation">}</span><span class="token punctuation">}</span>px<span class="token punctuation">;</span><span class="token property">left</span><span class="token punctuation">:</span><span class="token punctuation">{</span><span class="token punctuation">{</span>buttonLeft<span class="token punctuation">}</span><span class="token punctuation">}</span>px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span>
<span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token comment">/* btn.wxss */</span>
<span class="token selector">.offer-btn</span> <span class="token punctuation">{</span>
  <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
  <span class="token property">z-index</span><span class="token punctuation">:</span> 991<span class="token punctuation">;</span>
  <span class="token property">bottom</span><span class="token punctuation">:</span> 120rpx<span class="token punctuation">;</span>
  <span class="token property">right</span><span class="token punctuation">:</span> 82rpx<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// btn.js</span>
<span class="token keyword">var</span> startPoint
<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">buttonTop</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">buttonLeft</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token literal-property property">windowHeight</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token literal-property property">windowWidth</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">attached</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> $<span class="token keyword">this</span> <span class="token operator">=</span> <span class="token keyword">this</span>
    wx<span class="token punctuation">.</span><span class="token function">getSystemInfo</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        $<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          <span class="token literal-property property">windowHeight</span><span class="token operator">:</span> res<span class="token punctuation">.</span>windowHeight<span class="token punctuation">,</span>
          <span class="token literal-property property">windowWidth</span><span class="token operator">:</span> res<span class="token punctuation">.</span>windowWidth<span class="token punctuation">,</span>
          <span class="token literal-property property">buttonTop</span><span class="token operator">:</span> res<span class="token punctuation">.</span>windowHeight <span class="token operator">*</span> <span class="token number">0.8</span><span class="token punctuation">,</span>
          <span class="token literal-property property">buttonLeft</span><span class="token operator">:</span> res<span class="token punctuation">.</span>windowWidth <span class="token operator">*</span> <span class="token number">0.8</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">buttonStart</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      startPoint <span class="token operator">=</span> e<span class="token punctuation">.</span>touches<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">buttonMove</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> endPoint <span class="token operator">=</span> e<span class="token punctuation">.</span>touches<span class="token punctuation">[</span>e<span class="token punctuation">.</span>touches<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
      <span class="token keyword">var</span> translateX <span class="token operator">=</span> endPoint<span class="token punctuation">.</span>clientX <span class="token operator">-</span> startPoint<span class="token punctuation">.</span>clientX
      <span class="token keyword">var</span> translateY <span class="token operator">=</span> endPoint<span class="token punctuation">.</span>clientY <span class="token operator">-</span> startPoint<span class="token punctuation">.</span>clientY
      startPoint <span class="token operator">=</span> endPoint
      <span class="token keyword">var</span> buttonTop <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>buttonTop <span class="token operator">+</span> translateY
      <span class="token keyword">var</span> buttonLeft <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>buttonLeft <span class="token operator">+</span> translateX
      <span class="token keyword">if</span> <span class="token punctuation">(</span>buttonLeft <span class="token operator">+</span> <span class="token number">50</span> <span class="token operator">>=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>windowWidth<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        buttonLeft <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>windowWidth <span class="token operator">-</span> <span class="token number">50</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>buttonLeft <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        buttonLeft <span class="token operator">=</span> <span class="token number">0</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>buttonTop <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        buttonTop <span class="token operator">=</span> <span class="token number">0</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>buttonTop <span class="token operator">+</span> <span class="token number">50</span> <span class="token operator">>=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>windowHeight<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        buttonTop <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>windowHeight <span class="token operator">-</span> <span class="token number">50</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">buttonTop</span><span class="token operator">:</span> buttonTop<span class="token punctuation">,</span>
        <span class="token literal-property property">buttonLeft</span><span class="token operator">:</span> buttonLeft<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">buttonEnd</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5E38\u7528\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u65B9\u6CD5" aria-hidden="true">#</a> \u5E38\u7528\u65B9\u6CD5</h2>
<h3 id="\u7236\u5B50\u7EC4\u4EF6\u6D88\u606F\u4F20\u9012" tabindex="-1"><a class="header-anchor" href="#\u7236\u5B50\u7EC4\u4EF6\u6D88\u606F\u4F20\u9012" aria-hidden="true">#</a> \u7236\u5B50\u7EC4\u4EF6\u6D88\u606F\u4F20\u9012</h3>
<ul>
<li>\u5B50\u7EC4\u4EF6\u901A\u77E5\u7236\u7EA7\u7EC4\u4EF6</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// child.js</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">triggerEvent</span><span class="token punctuation">(</span><span class="token string">'close'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- father.js --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>child-component</span> <span class="token attr-name"><span class="token namespace">bind:</span>close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>closeHandle<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>child-component</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>\u7236\u7EC4\u4EF6\u5411\u5B50\u7EC4\u4EF6\u4F20\u9012\u6570\u636E</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// child.js</span>
<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- father.js --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>child-component</span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>\u6807\u9898<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>child-component</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>\u7236\u7EC4\u4EF6\u83B7\u53D6\u5B50\u7EC4\u4EF6\u5B9E\u4F8B</li>
</ul>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- father.wxml --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>child-component</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>childComponent<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>child-component</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// father.js</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">selectComponent</span><span class="token punctuation">(</span><span class="token string">'#childComponent'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5F15\u5165\u8BA1\u7B97\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5F15\u5165\u8BA1\u7B97\u5C5E\u6027" aria-hidden="true">#</a> \u5F15\u5165\u8BA1\u7B97\u5C5E\u6027</h3>
<ol>
<li>\u6784\u5EFA npm</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm init -y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>\u5B89\u88C5\u5FAE\u4FE1\u63D0\u4F9B\u7684\u8BA1\u7B97\u5C5E\u6027\u4F9D\u8D56</li>
</ol>
<div class="language-text ext-text line-numbers-mode"><pre v-pre class="language-text"><code>npm install --save miniprogram-computed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3">
<li>
<p>\u70B9\u51FB\u5FAE\u4FE1\u5F00\u53D1\u8005\u5DE5\u5177\u4E0A\u65B9\u5DE5\u5177\u680F\u7684 \u5DE5\u5177/\u6784\u5EFA npm/\u6784\u5EFA\u5B8C\u6210 \u70B9\u51FB\u786E\u5B9A\u5373\u53EF</p>
</li>
<li>
<p>\u5F15\u5165\u8BA1\u7B97\u5C5E\u6027</p>
</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> computedBehavior <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'miniprogram-computed'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>behavior

<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// \u8FD9\u91CC\u6CE8\u518C\u5F15\u5165\u7684\u8BA1\u7B97\u5C5E\u6027</span>
  <span class="token literal-property property">behaviors</span><span class="token operator">:</span> <span class="token punctuation">[</span>computedBehavior<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>\u4F7F\u7528 data \u5B9A\u4E49\u7684\u6570\u636E</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> computedBehavior <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'miniprogram-computed'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>behavior
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">behaviors</span><span class="token operator">:</span> <span class="token punctuation">[</span>computedBehavior<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">fixed</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> data<span class="token punctuation">.</span>a<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6">
<li>\u5728\u8BA1\u7B97\u5C5E\u6027\u4E2D\u4F7F\u7528\u5176\u4ED6\u7684\u8BA1\u7B97\u5C5E\u6027</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> computedBehavior <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'miniprogram-computed'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>behavior
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">behaviors</span><span class="token operator">:</span> <span class="token punctuation">[</span>computedBehavior<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">fixed</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> data<span class="token punctuation">.</span>a<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">unit</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> data<span class="token punctuation">.</span>fixed <span class="token operator">+</span> <span class="token string">'\u5143'</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7">
<li>\u5728\u65B9\u6CD5\u4E2D\u4F7F\u7528\u5176\u4ED6\u7684\u8BA1\u7B97\u5C5E\u6027</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> computedBehavior <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'miniprogram-computed'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>behavior
<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">behaviors</span><span class="token operator">:</span> <span class="token punctuation">[</span>computedBehavior<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">fixed</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> data<span class="token punctuation">.</span>a<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">addUnit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setData</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>fixed <span class="token operator">+</span> <span class="token string">'\u5143'</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u76D1\u542C\u8DEF\u7531\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u76D1\u542C\u8DEF\u7531\u65B9\u6CD5" aria-hidden="true">#</a> \u76D1\u542C\u8DEF\u7531\u65B9\u6CD5</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// \u8BE5\u65B9\u6CD5\u6CA1\u6709\u8BB0\u5F55\u5728\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5F00\u53D1\u6587\u6863\u4E2D</span>
wx<span class="token punctuation">.</span><span class="token function">onAppRoute</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7B80\u5355\u7684\u8868\u5355\u9A8C\u8BC1\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u7684\u8868\u5355\u9A8C\u8BC1\u51FD\u6570" aria-hidden="true">#</a> \u7B80\u5355\u7684\u8868\u5355\u9A8C\u8BC1\u51FD\u6570</h3>
<p>\u51FD\u6570\u4EE3\u7801\uFF1A</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// validate.js</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">simpleValidate</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">rules<span class="token punctuation">,</span> form</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> rejct</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> error <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> key <span class="token keyword">in</span> rules<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>rules<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> rules<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">.</span>required<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>form<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          error<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>rules<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">.</span>msg<span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>rules<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">.</span>validator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
              rules<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">validator</span><span class="token punctuation">(</span>form<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
              error<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>err<span class="token punctuation">.</span>message<span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      wx<span class="token punctuation">.</span><span class="token function">showToast</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> error<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">'none'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528\u65B9\u6CD5\uFF1A</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> simpleValidate <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./simple-validate'</span><span class="token punctuation">)</span>

<span class="token function">Page</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">form</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
      <span class="token literal-property property">phone</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">'\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A'</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">phone</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">'\u624B\u673A\u53F7\u4E0D\u80FD\u4E3A\u7A7A'</span><span class="token punctuation">,</span>
        <span class="token function-variable function">validator</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^1(3\\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\\d|9[0-35-9])\\d{8}$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// new error \u5BFC\u51FA\u62A5\u9519\u4FE1\u606F</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'\u8BF7\u8F93\u5165\u683C\u5F0F\u6B63\u786E\u7684\u624B\u673A\u53F7'</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">submit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">simpleValidate</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>rules<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>data<span class="token punctuation">.</span>form<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">validate</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>validate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u901A\u8FC7\u9A8C\u8BC1</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5E38\u7528\u7684\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5E38\u7528\u7684\u6837\u5F0F" aria-hidden="true">#</a> \u5E38\u7528\u7684\u6837\u5F0F</h2>
<h3 id="\u81EA\u5B9A\u4E49-check-\u7EC4\u4EF6\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49-check-\u7EC4\u4EF6\u6837\u5F0F" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49 check \u7EC4\u4EF6\u6837\u5F0F</h3>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">checkbox .wx-checkbox-input</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">checkbox .wx-checkbox-input.wx-checkbox-input-checked</span> <span class="token punctuation">{</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> #005aa0<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #005aa0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">checkbox .wx-checkbox-input.wx-checkbox-input-checked::before</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 32rpx<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span> <span class="token function">scale</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -50%<span class="token punctuation">)</span> <span class="token function">scale</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u81EA\u5B9A\u4E49-radio-\u7EC4\u4EF6\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49-radio-\u7EC4\u4EF6\u6837\u5F0F" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49 radio \u7EC4\u4EF6\u6837\u5F0F</h3>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token selector">wx-radio</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-tap-highlight-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">wx-radio[hidden]</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">wx-radio .wx-radio-wrapper</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> -webkit-inline-flex<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> inline-flex<span class="token punctuation">;</span>
  <span class="token property">-webkit-align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">wx-radio .wx-radio-input</span> <span class="token punctuation">{</span>
  <span class="token property">-webkit-appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">appearance</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">margin-right</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
  <span class="token property">outline</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #d1d1d1<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 22px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 22px<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">wx-radio .wx-radio-input.wx-radio-input-checked</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #005aa0<span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> #005aa0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">wx-radio .wx-radio-input.wx-radio-input-checked:before</span> <span class="token punctuation">{</span>
  <span class="token property">font</span><span class="token punctuation">:</span> normal normal normal 14px/1 <span class="token string">'weui'</span><span class="token punctuation">;</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">'\\EA08'</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 18px<span class="token punctuation">;</span>
  <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
  <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -48%<span class="token punctuation">)</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.73<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">-webkit-transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span> -48%<span class="token punctuation">)</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.73<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">wx-radio .wx-radio-input.wx-radio-input-disabled</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #e1e1e1<span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> #d1d1d1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">wx-radio .wx-radio-input.wx-radio-input-disabled.wx-radio-input-checked</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> #005aa0<span class="token punctuation">;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> #005aa0<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">wx-radio .wx-radio-input.wx-radio-input-disabled:before</span> <span class="token punctuation">{</span>
  <span class="token property">color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">wx-radio-group</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">wx-radio-group[hidden]</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u91C7\u5751" tabindex="-1"><a class="header-anchor" href="#\u91C7\u5751" aria-hidden="true">#</a> \u91C7\u5751</h2>
<h3 id="\u5B57\u4F53\u4E0B\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u5B57\u4F53\u4E0B\u8F7D" aria-hidden="true">#</a> \u5B57\u4F53\u4E0B\u8F7D</h3>
<ul>
<li>
<p>\u5B57\u4F53\u5305\u7684 url \u5FC5\u987B\u4F7F\u7528 https</p>
</li>
<li>
<p>\u5982\u9047\u4E0B\u8F7D\u5931\u8D25\uFF0C\u5927\u90E8\u5206\u662F\u56E0\u4E3A\u5730\u5740\u6CA1\u6709\u5F00\u542F\u8DE8\u57DF\uFF0C\u5C0F\u7A0B\u5E8F\u4E0B\u8F7D\u5B57\u4F53\u4E0D\u4F1A\u63D0\u793A\u8DE8\u57DF\uFF0C\u9700\u8981\u65B0\u589E <code v-pre>.html</code> \u6587\u4EF6\u5F15\u5165 url \u5B57\u4F53\u6D4B\u8BD5</p>
</li>
</ul>
<p>\u793A\u4F8B\u4EE3\u7801\uFF1A</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>wx<span class="token punctuation">.</span><span class="token function">loadFontFace</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">global</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">family</span><span class="token operator">:</span> <span class="token string">'PangMenZhengDao'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">'url("https://xxxxx/font.ttf")'</span><span class="token punctuation">,</span>
  <span class="token function">success</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">error</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u80CC\u666F\u56FE\u7247" tabindex="-1"><a class="header-anchor" href="#\u80CC\u666F\u56FE\u7247" aria-hidden="true">#</a> \u80CC\u666F\u56FE\u7247</h3>
<ul>
<li>
<p><code v-pre>background-image:url();</code> \u4E0D\u80FD\u4F7F\u7528\u672C\u5730\u56FE\u7247\u3001\u56FE\u7247 url \u5E26\u4E2D\u6587\u6216\u8005\u7A7A\u683C\uFF1B</p>
</li>
<li>
<p>base64 \u867D\u7136\u53EF\u4EE5\u4F7F\u7528\uFF0C\u4F46\u662F\u4F53\u79EF\u8F83\u5927\uFF0C\u4E0D\u5EFA\u8BAE\u4F7F\u7528\uFF1B</p>
</li>
</ul>
<p>\u4EE5\u4E0B\u5199\u6CD5\u80CC\u666F\u56FE\u4E0D\u663E\u793A\uFF1A</p>
<div class="language-css ext-css line-numbers-mode"><pre v-pre class="language-css"><code><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>https://xxxx/\u56FE\u7247.png<span class="token punctuation">)</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u5728-wxml-\u4E2D\u4F7F\u7528\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u5728-wxml-\u4E2D\u4F7F\u7528\u51FD\u6570" aria-hidden="true">#</a> \u5728 wxml \u4E2D\u4F7F\u7528\u51FD\u6570</h3>
<ol>
<li>\u65B0\u5EFA <code v-pre>utils.wxs</code> \u6587\u4EF6</li>
</ol>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> formatUtils <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">format</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u8FD9\u91CC\u4E0D\u80FD\u4F7F\u7528 es6 \u53CA\u4EE5\u540E\u7684\u8BED\u6CD5</span>
    <span class="token keyword">return</span> val<span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">format</span><span class="token operator">:</span> formatUtils<span class="token punctuation">.</span>format<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>\u5728 <code v-pre>page.wxml</code> \u4E2D\u9876\u5C42\u6807\u7B7E\u5F15\u5165</li>
</ol>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>wxs</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/utils/format.wxs<span class="token punctuation">"</span></span> <span class="token attr-name">module</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>formatUtils<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>wxs</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>page<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>text</span><span class="token punctuation">></span></span>{{formatUtils.format(1)}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>text</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="createselectorquery" tabindex="-1"><a class="header-anchor" href="#createselectorquery" aria-hidden="true">#</a> createSelectorQuery</h3>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// \u5728\u9875\u9762\u4E2D\u4F7F\u7528</span>
wx<span class="token punctuation">.</span>createSelectorQuery
  <span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token string">'#id'</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">boundingClientRect</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// \u5728\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u4E2D\u4F7F\u7528</span>
<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createSelectorQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">select</span><span class="token punctuation">(</span><span class="token string">'#id'</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">boundingClientRect</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>selector \u8BED\u6CD5\uFF1A</p>
<p>selector \u7C7B\u4F3C\u4E8E CSS \u7684\u9009\u62E9\u5668\uFF0C\u4F46\u4EC5\u652F\u6301\u4E0B\u5217\u8BED\u6CD5\u3002</p>
<ul>
<li>ID \u9009\u62E9\u5668\uFF1A#the-id</li>
<li>class \u9009\u62E9\u5668\uFF08\u53EF\u4EE5\u8FDE\u7EED\u6307\u5B9A\u591A\u4E2A\uFF09\uFF1A.a-class.another-class</li>
<li>\u5B50\u5143\u7D20\u9009\u62E9\u5668\uFF1A.the-parent &gt; .the-child</li>
<li>\u540E\u4EE3\u9009\u62E9\u5668\uFF1A.the-ancestor .the-descendant</li>
<li>\u8DE8\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7684\u540E\u4EE3\u9009\u62E9\u5668\uFF1A.the-ancestor &gt;&gt;&gt; .the-descendant</li>
<li>\u591A\u9009\u62E9\u5668\u7684\u5E76\u96C6\uFF1A#a-node, .some-other-nodes</li>
</ul>
<h3 id="data-xxx-\u4F20\u503C" tabindex="-1"><a class="header-anchor" href="#data-xxx-\u4F20\u503C" aria-hidden="true">#</a> data-xxx \u4F20\u503C</h3>
<p>data-xxx \u4F20\u5165\u7684\u540D\u79F0\u4F1A\u5F3A\u5236\u53D8\u66F4\u4E3A\u5C0F\u5199\uFF0C\u5982 <code v-pre>data-tagName</code> \u5728 <code v-pre>tapName</code> \u65B9\u6CD5\u4E2D\u8FD4\u56DE\u7684 e \u4E2D\u663E\u793A\u4E3A <code v-pre>tagname</code></p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>view</span> <span class="token attr-name">data-tagName</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tag<span class="token punctuation">"</span></span> <span class="token attr-name">data-index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">bindtap</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tapName<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>view</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">tapName</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>currentTarget<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>tagname<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/technology/\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F.html",pathLocale:"/",permalink:null,routeMeta:{title:"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F"},slug:"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F",filePath:"D:/Documents/wangfunfun-documents-online/docs/technology/\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F.md",filePathRelative:"docs/technology/\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F.md",componentFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/docs/technology/\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F.html.vue",componentFilePathRelative:"pages/docs/technology/\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F.html.vue",componentFileChunkName:"v-4b4887bc",dataFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/docs/technology/\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F.html.js",dataFilePathRelative:"pages/docs/technology/\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F.html.js",dataFileChunkName:"v-4b4887bc",htmlFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/dist/docs/technology/\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F.html",htmlFilePathRelative:"docs/technology/\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F.html"},{data:{key:"v-acdd9360",path:"/docs/theme-reco/api.html",title:"api",lang:"en-US",frontmatter:{title:"api",date:"2020/05/29"},excerpt:"",headers:[],git:{createdTime:1655877926e3,updatedTime:1655879489e3,contributors:[{name:"wangfunfun",email:"15376960583@189.cn",commits:3}]},filePathRelative:"docs/theme-reco/api.md"},key:"v-acdd9360",path:"/docs/theme-reco/api.html",title:"api",lang:"en-US",frontmatter:{title:"api",date:"2020/05/29"},excerpt:"",headers:[],content:`
This is api.`,contentRendered:`<p>This is api.</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/theme-reco/api.html",pathLocale:"/",permalink:null,routeMeta:{title:"api"},slug:"api",filePath:"D:/Documents/wangfunfun-documents-online/docs/theme-reco/api.md",filePathRelative:"docs/theme-reco/api.md",componentFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/docs/theme-reco/api.html.vue",componentFilePathRelative:"pages/docs/theme-reco/api.html.vue",componentFileChunkName:"v-acdd9360",dataFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/docs/theme-reco/api.html.js",dataFilePathRelative:"pages/docs/theme-reco/api.html.js",dataFileChunkName:"v-acdd9360",htmlFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/dist/docs/theme-reco/api.html",htmlFilePathRelative:"docs/theme-reco/api.html"},{data:{key:"v-5cd03a29",path:"/docs/theme-reco/home.html",title:"theme-reco",lang:"en-US",frontmatter:{title:"theme-reco",date:"2020/05/29"},excerpt:"",headers:[],git:{createdTime:1655877926e3,updatedTime:1655879489e3,contributors:[{name:"wangfunfun",email:"15376960583@189.cn",commits:3}]},filePathRelative:"docs/theme-reco/home.md"},key:"v-5cd03a29",path:"/docs/theme-reco/home.html",title:"theme-reco",lang:"en-US",frontmatter:{title:"theme-reco",date:"2020/05/29"},excerpt:"",headers:[],content:`
This is theme-reco.`,contentRendered:`<p>This is theme-reco.</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/theme-reco/home.html",pathLocale:"/",permalink:null,routeMeta:{title:"theme-reco"},slug:"home",filePath:"D:/Documents/wangfunfun-documents-online/docs/theme-reco/home.md",filePathRelative:"docs/theme-reco/home.md",componentFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/docs/theme-reco/home.html.vue",componentFilePathRelative:"pages/docs/theme-reco/home.html.vue",componentFileChunkName:"v-5cd03a29",dataFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/docs/theme-reco/home.html.js",dataFilePathRelative:"pages/docs/theme-reco/home.html.js",dataFileChunkName:"v-5cd03a29",htmlFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/dist/docs/theme-reco/home.html",htmlFilePathRelative:"docs/theme-reco/home.html"},{data:{key:"v-456cc6d6",path:"/docs/theme-reco/plugin.html",title:"plugin",lang:"en-US",frontmatter:{title:"plugin",date:"2020/05/28"},excerpt:"",headers:[],git:{createdTime:1655877926e3,updatedTime:1655879489e3,contributors:[{name:"wangfunfun",email:"15376960583@189.cn",commits:3}]},filePathRelative:"docs/theme-reco/plugin.md"},key:"v-456cc6d6",path:"/docs/theme-reco/plugin.html",title:"plugin",lang:"en-US",frontmatter:{title:"plugin",date:"2020/05/28"},excerpt:"",headers:[],content:`
This is plugin.`,contentRendered:`<p>This is plugin.</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/theme-reco/plugin.html",pathLocale:"/",permalink:null,routeMeta:{title:"plugin"},slug:"plugin",filePath:"D:/Documents/wangfunfun-documents-online/docs/theme-reco/plugin.md",filePathRelative:"docs/theme-reco/plugin.md",componentFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/docs/theme-reco/plugin.html.vue",componentFilePathRelative:"pages/docs/theme-reco/plugin.html.vue",componentFileChunkName:"v-456cc6d6",dataFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/docs/theme-reco/plugin.html.js",dataFilePathRelative:"pages/docs/theme-reco/plugin.html.js",dataFileChunkName:"v-456cc6d6",htmlFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/dist/docs/theme-reco/plugin.html",htmlFilePathRelative:"docs/theme-reco/plugin.html"},{data:{key:"v-65959fc1",path:"/docs/theme-reco/theme.html",title:"theme",lang:"en-US",frontmatter:{title:"theme",date:"2020/05/27"},excerpt:"",headers:[],git:{createdTime:1655877926e3,updatedTime:1655879489e3,contributors:[{name:"wangfunfun",email:"15376960583@189.cn",commits:3}]},filePathRelative:"docs/theme-reco/theme.md"},key:"v-65959fc1",path:"/docs/theme-reco/theme.html",title:"theme",lang:"en-US",frontmatter:{title:"theme",date:"2020/05/27"},excerpt:"",headers:[],content:`
This is theme.`,contentRendered:`<p>This is theme.</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/docs/theme-reco/theme.html",pathLocale:"/",permalink:null,routeMeta:{title:"theme"},slug:"theme",filePath:"D:/Documents/wangfunfun-documents-online/docs/theme-reco/theme.md",filePathRelative:"docs/theme-reco/theme.md",componentFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/docs/theme-reco/theme.html.vue",componentFilePathRelative:"pages/docs/theme-reco/theme.html.vue",componentFileChunkName:"v-65959fc1",dataFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/docs/theme-reco/theme.html.js",dataFilePathRelative:"pages/docs/theme-reco/theme.html.js",dataFileChunkName:"v-65959fc1",htmlFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/dist/docs/theme-reco/theme.html",htmlFilePathRelative:"docs/theme-reco/theme.html"},{data:{key:"v-2eb9b31a",path:"/blogs/category1/2019/092101.html",title:"second page in category1",lang:"en-US",frontmatter:{title:"second page in category1",date:"2019/09/21",tags:["tag2"],categories:["category1"]},excerpt:"",headers:[],git:{createdTime:1655877926e3,updatedTime:1655879489e3,contributors:[{name:"wangfunfun",email:"15376960583@189.cn",commits:3}]},filePathRelative:"blogs/category1/2019/092101.md"},key:"v-2eb9b31a",path:"/blogs/category1/2019/092101.html",title:"second page in category1",lang:"en-US",frontmatter:{title:"second page in category1",date:"2019/09/21",tags:["tag2"],categories:["category1"]},excerpt:"",headers:[],content:`
second page in category1`,contentRendered:`<p>second page in category1</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/category1/2019/092101.html",pathLocale:"/",permalink:null,routeMeta:{title:"second page in category1"},slug:"092101",filePath:"D:/Documents/wangfunfun-documents-online/blogs/category1/2019/092101.md",filePathRelative:"blogs/category1/2019/092101.md",componentFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/blogs/category1/2019/092101.html.vue",componentFilePathRelative:"pages/blogs/category1/2019/092101.html.vue",componentFileChunkName:"v-2eb9b31a",dataFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/blogs/category1/2019/092101.html.js",dataFilePathRelative:"pages/blogs/category1/2019/092101.html.js",dataFileChunkName:"v-2eb9b31a",htmlFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/dist/blogs/category1/2019/092101.html",htmlFilePathRelative:"blogs/category1/2019/092101.html"},{data:{key:"v-32598bfc",path:"/blogs/category1/2018/121501.html",title:"first page in category1",lang:"en-US",frontmatter:{title:"first page in category1",date:"2018/12/15",tags:["tag1"],categories:["category1"]},excerpt:"",headers:[],git:{createdTime:1655877926e3,updatedTime:1655879489e3,contributors:[{name:"wangfunfun",email:"15376960583@189.cn",commits:3}]},filePathRelative:"blogs/category1/2018/121501.md"},key:"v-32598bfc",path:"/blogs/category1/2018/121501.html",title:"first page in category1",lang:"en-US",frontmatter:{title:"first page in category1",date:"2018/12/15",tags:["tag1"],categories:["category1"]},excerpt:"",headers:[],content:`
first page in category1`,contentRendered:`<p>first page in category1</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/category1/2018/121501.html",pathLocale:"/",permalink:null,routeMeta:{title:"first page in category1"},slug:"121501",filePath:"D:/Documents/wangfunfun-documents-online/blogs/category1/2018/121501.md",filePathRelative:"blogs/category1/2018/121501.md",componentFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/blogs/category1/2018/121501.html.vue",componentFilePathRelative:"pages/blogs/category1/2018/121501.html.vue",componentFileChunkName:"v-32598bfc",dataFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/blogs/category1/2018/121501.html.js",dataFilePathRelative:"pages/blogs/category1/2018/121501.html.js",dataFileChunkName:"v-32598bfc",htmlFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/dist/blogs/category1/2018/121501.html",htmlFilePathRelative:"blogs/category1/2018/121501.html"},{data:{key:"v-16458837",path:"/blogs/category2/2017/092101.html",title:"second page in category2",lang:"en-US",frontmatter:{title:"second page in category2",date:"2017/09/21",tags:["tag4"],categories:["category2"]},excerpt:"",headers:[],git:{createdTime:1655877926e3,updatedTime:1655879489e3,contributors:[{name:"wangfunfun",email:"15376960583@189.cn",commits:3}]},filePathRelative:"blogs/category2/2017/092101.md"},key:"v-16458837",path:"/blogs/category2/2017/092101.html",title:"second page in category2",lang:"en-US",frontmatter:{title:"second page in category2",date:"2017/09/21",tags:["tag4"],categories:["category2"]},excerpt:"",headers:[],content:`
second page in category2`,contentRendered:`<p>second page in category2</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/category2/2017/092101.html",pathLocale:"/",permalink:null,routeMeta:{title:"second page in category2"},slug:"092101",filePath:"D:/Documents/wangfunfun-documents-online/blogs/category2/2017/092101.md",filePathRelative:"blogs/category2/2017/092101.md",componentFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/blogs/category2/2017/092101.html.vue",componentFilePathRelative:"pages/blogs/category2/2017/092101.html.vue",componentFileChunkName:"v-16458837",dataFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/blogs/category2/2017/092101.html.js",dataFilePathRelative:"pages/blogs/category2/2017/092101.html.js",dataFileChunkName:"v-16458837",htmlFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/dist/blogs/category2/2017/092101.html",htmlFilePathRelative:"blogs/category2/2017/092101.html"},{data:{key:"v-19e56119",path:"/blogs/category2/2016/121501.html",title:"first page in category2",lang:"en-US",frontmatter:{title:"first page in category2",date:"2016/12/15",tags:["tag3"],categories:["category2"]},excerpt:"",headers:[],git:{createdTime:1655877926e3,updatedTime:1655879489e3,contributors:[{name:"wangfunfun",email:"15376960583@189.cn",commits:3}]},filePathRelative:"blogs/category2/2016/121501.md"},key:"v-19e56119",path:"/blogs/category2/2016/121501.html",title:"first page in category2",lang:"en-US",frontmatter:{title:"first page in category2",date:"2016/12/15",tags:["tag3"],categories:["category2"]},excerpt:"",headers:[],content:`
first page in category2`,contentRendered:`<p>first page in category2</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/category2/2016/121501.html",pathLocale:"/",permalink:null,routeMeta:{title:"first page in category2"},slug:"121501",filePath:"D:/Documents/wangfunfun-documents-online/blogs/category2/2016/121501.md",filePathRelative:"blogs/category2/2016/121501.md",componentFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/blogs/category2/2016/121501.html.vue",componentFilePathRelative:"pages/blogs/category2/2016/121501.html.vue",componentFileChunkName:"v-19e56119",dataFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/blogs/category2/2016/121501.html.js",dataFilePathRelative:"pages/blogs/category2/2016/121501.html.js",dataFileChunkName:"v-19e56119",htmlFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/dist/blogs/category2/2016/121501.html",htmlFilePathRelative:"blogs/category2/2016/121501.html"}],p1={categories:{pagination:10,extendedPages:[{},{},{}],items:{reco:{pages:[{data:{key:"v-6bb1ef33",path:"/blogs/other/guide.html",title:"vuepress-theme-reco",lang:"en-US",frontmatter:{title:"vuepress-theme-reco",date:"2019/04/09",categories:["reco"]},excerpt:"",headers:[{level:2,title:"Use",slug:"use",children:[]},{level:2,title:"Play Together",slug:"play-together",children:[{level:3,title:"0.x",slug:"_0-x",children:[]},{level:3,title:"1.x",slug:"_1-x",children:[]},{level:3,title:"CLI",slug:"cli",children:[]}]},{level:2,title:"License",slug:"license",children:[]}],git:{createdTime:1655877926e3,updatedTime:1655879489e3,contributors:[{name:"wangfunfun",email:"15376960583@189.cn",commits:3}]},filePathRelative:"blogs/other/guide.md"},key:"v-6bb1ef33",path:"/blogs/other/guide.html",title:"vuepress-theme-reco",lang:"en-US",frontmatter:{title:"vuepress-theme-reco",date:"2019/04/09",categories:["reco"]},excerpt:"",headers:[{level:2,title:"Use",slug:"use",children:[]},{level:2,title:"Play Together",slug:"play-together",children:[{level:3,title:"0.x",slug:"_0-x",children:[]},{level:3,title:"1.x",slug:"_1-x",children:[]},{level:3,title:"CLI",slug:"cli",children:[]}]},{level:2,title:"License",slug:"license",children:[]}],content:`
![vuepress](https://img.shields.io/badge/vuepress-0.14.8-brightgreen.svg)
![leancloud-storage](https://img.shields.io/badge/leancloud--storage-3.10.1-orange.svg)
![valine](https://img.shields.io/badge/valine-1.3.4-blue.svg)

::: tip \u4ECB\u7ECD
1. \u8FD9\u662F\u4E00\u4E2Avuepress\u4E3B\u9898\uFF0C\u65E8\u5728\u6DFB\u52A0\u535A\u5BA2\u6240\u9700\u7684\u5206\u7C7B\u3001TAB\u5899\u3001\u5206\u9875\u3001\u8BC4\u8BBA\u7B49\u80FD\uFF1B<br>
2. \u4E3B\u9898\u8FFD\u6C42\u6781\u7B80\uFF0C\u6839\u636E vuepress \u7684\u9ED8\u8BA4\u4E3B\u9898\u4FEE\u6539\u800C\u6210\uFF0C\u5B98\u65B9\u7684\u4E3B\u9898\u914D\u7F6E\u4ECD\u7136\u9002\u7528\uFF1B<br>
3. \u4F60\u53EF\u4EE5\u6253\u5F00 [\u5348\u540E\u5357\u6742](http://recoluan.gitlab.io) \u6765\u67E5\u770B\u6548\u679C\u3002
:::

## Use

**Build**

\`\`\`bash
npm run build

# or

yarn build
\`\`\`

**Server**

\`\`\`bash
npm run dev

# or

yarn dev
\`\`\`

## Play Together

### 0.x

\`vuepress-theme-reco@0.x\` \u662F\u57FA\u4E8E \`vuepress@0.x\` \u7684\u535A\u5BA2\u4E3B\u9898\u3002

\`vuepress@0.x\` \u529F\u80FD\u6BD4\u8F83\u7B80\u5355\uFF0C\u53EA\u9002\u5408\u4E66\u5199\u7B80\u5355\u7684\u6587\u6863\uFF0C\u4F46\u597D\u5728\u652F\u6301\u4E3B\u9898\u81EA\u5B9A\u4E49\uFF0C\u800C\u4E2A\u4EBA\u53C8\u5E0C\u671B\u80FD\u591F\u7528\u5B83\u6765\u4E66\u5199\u535A\u5BA2\uFF0C\u539F\u56E0\u5C31\u662F\u5B83\u8DB3\u591F\u7684\u7B80\u6D01\uFF0C\u6BEB\u65E0\u7591\u95EE\uFF0C\u8FD9\u4E5F\u7B26\u5408\u5F88\u591A\u7A0B\u5E8F\u5458\u7684\u89C2\u5FF5\uFF0C\u4E5F\u5C31\u662F\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\`vuepress-theme-reco@0.x\` \u7684\u7B2C\u4E00\u4E2A\u7248\u672C\u7ECF\u8FC7\u4E00\u4E2A\u901A\u5BB5\u800C\u4EA7\u751F\u3002

\u4E3B\u9898\u5F00\u6E90\u4E0D\u4E45\uFF0C\u5F88\u591A\u670B\u53CB\u901A\u8FC7\u5404\u79CD\u8054\u7CFB\u65B9\u5F0F\uFF0C\u7ED9\u5230\u5F88\u591A\u597D\u7684\u610F\u89C1\u548C\u5EFA\u8BAE\uFF0C\u6240\u4EE5\u6211\u4E2A\u4EBA\u4E5F\u5728\u79EF\u6781\u5730\u66F4\u65B0\u3002

\u56E0\u4E3A\u6211\u662F\u4E00\u540D\u524D\u7AEF\u5F00\u53D1\u5DE5\u7A0B\u5E08\uFF0C\u5F00\u53D1\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u603B\u662F\u60F3\u7740\u80FD\u4E0D\u80FD\u52A0\u5165\u4E00\u4E9B\u70AB\u9177\u7684\u6548\u679C\uFF0C\u6709\u5F88\u591A\u6B21\u90FD\u662F\u6DFB\u52A0\u4E0A\u53C8\u53BB\u6389\uFF0C\u53CD\u53CD\u590D\u590D\uFF0C\u6700\u540E\u90FD\u662F\u88AB **\u7B80\u6D01** \u7684\u8FD9\u4E2A\u539F\u5219\u963B\u6B62\u6389\uFF0C\u6BD5\u7ADF\uFF0C\u73B0\u5728\u6211\u662F\u5C06\u5B83\u5F53\u4F5C\u4E00\u4E2A\u4EA7\u54C1\u6765\u770B\u5F85\uFF0C\u5E76\u4E0D\u662F\u4E00\u4E2A\u6280\u672F\u6216\u8005\u662F\u6280\u5DE7\u7684\u5C1D\u8BD5\u9879\u76EE\u3002

### 1.x

\u968F\u7740\u4E0D\u65AD\u6709\u7528\u6237\u8FC7\u6765\u8BE2\u95EE\uFF1A\u4E3A\u4EC0\u4E48 \`vuepress-theme-reco@0.x\` \u4E0D\u80FD\u5728 \`vuepress@1.x\` \u4E0A\u4F7F\u7528\uFF1F\u672C\u6765\u53EA\u662F\u6253\u7B97\u5BF9 \`vuepress-theme-reco@0.x\` \u8FDB\u884C\u7B80\u5355\u7684bug\u4FEE\u590D\u7684\u6211\uFF0C\u7EC8\u7A76\u8FD8\u662F\u5FCD\u4E0D\u4F4F\uFF0C\u5F00\u59CB\u4E86 \`vuepress-theme-reco@1.x\` \u7684\u5F00\u53D1\u3002\u53C8\u662F\u5728\u4E00\u4E2A\u5BC2\u9759\u7684\u51CC\u6668\u4E24\u70B9\u534A\uFF08\u665A\u4E0A\u5C31\u662F\u51FA\u6D3B\u5FEB\uFF09\uFF0C\u6211\u9ED8\u9ED8\u5730\u5F00\u59CB\u4E86\u3002

\u4E3B\u9898\u5347\u7EA7\u7684\u5173\u952E\u4E5F\u5C31\u662F \`@vuepress/plugin-blog\` \u8FD9\u6B3E\u5B98\u65B9\u63D2\u4EF6\uFF0C\u5B83\u4E0D\u9700\u8981\u518D\u53BB\u9EBB\u70E6\u5730\u8FC7\u6EE4\u6570\u636E\uFF0C\u5C06\u5206\u7C7B\u548C\u6807\u7B7E\u7684\u76F8\u5173\u4FE1\u606F\u76F4\u63A5\u5B58\u5728 \`$categories\` \u548C \`$tags\` \u8FD9\u4E24\u4E2A\u5168\u5C40\u53D8\u91CF\u4E2D\u3002\u501F\u52A9\u4E8E \`@vuepress/plugin-blog\`\uFF0C\u5206\u7C7B\u548C\u6807\u7B7E\u529F\u80FD\u66F4\u5BB9\u6613\u5B9E\u73B0\uFF0C\u4F46\u4E5F\u6709\u4E86\u4E00\u4E9B\u5C40\u9650\u3002\u63A5\u4E0B\u6765\u4E24\u4E09\u5929\u7684\u65F6\u95F4\uFF0C\u90FD\u662F\u5728\u8FDB\u884C\u529F\u80FD\u7684\u8FC1\u79FB\u548C\u4E00\u4E9Bbug\u7684\u4FEE\u590D\u3002

\`vuepress-theme-reco@0.x\` \u7684\u5F00\u53D1\u4E2D\uFF0C\u66F4\u52A0\u6DF1\u523B\u5730\u660E\u767D\u4E86\u6A21\u5757\u5316\u548C\u7EC4\u4EF6\u5316\u7F16\u7A0B\u7684\u91CD\u8981\u6027\uFF0C\u5982\u679C\u5F53\u521D\u6CA1\u6709\u628A\u4E00\u4E9B\u529F\u80FD\u8FDB\u884C\u5C01\u88C5\uFF0C\u800C\u662F\u76F4\u63A5\u7B80\u5355\u7684\u590D\u5236\uFF0C\u8FD9\u6B21\u5347\u7EA7\u4E5F\u4E0D\u4F1A\u8FD9\u4E48\u987A\u5229\u3002\u6A21\u5757\u62C6\u5206\u7684\u8D8A\u7EC6\uFF0C\u4F7F\u7528\u5C31\u4F1A\u8D8A\u7075\u6D3B\u3002

### CLI

\u8FD8\u662F\u8877\u5FC3\u5730\u5E0C\u671B\u80FD\u6709\u66F4\u591A\u7684\u670B\u53CB\u53C2\u4E0E\u8FDB\u6765\uFF0C\u66F4\u5FEB\u5730\u53BB\u5B8C\u5584\u5B83\u3002\u63A5\u4E0B\u6765\u65F6\u95F4\u5141\u8BB8\u7684\u60C5\u51B5\u4E0B\uFF0C\u6211\u4F1A\u5F00\u6E90\u4E00\u6B3E\u81EA\u52A8\u751F\u6210\u535A\u5BA2\u7684\u811A\u624B\u67B6\uFF0C\u7565\u8FC7\u914D\u7F6E\u6B65\u9AA4\uFF0C\u76F4\u63A5\u4E66\u5199\u4F18\u8D28\u5185\u5BB9\uFF0C\u8FD9\u4E5F\u662F\u6211\u540E\u6765\u9010\u6E10\u5F62\u6210\u7684\u4E00\u79CD\u4FE1\u5FF5\uFF0C\u5C31\u662F\u5E0C\u671B\u80FD\u8BA9\u8FD9\u6B3E\u4E3B\u9898\uFF0C\u529F\u80FD\u8D8A\u5B8C\u5584\uFF0C\u4F7F\u7528\u8D8A\u6765\u8D8A\u7B80\u5355\u3002

## License
[MIT](https://github.com/recoluan/vuepress-theme-reco/blob/master/LICENSE)`,contentRendered:`<p><img src="https://img.shields.io/badge/vuepress-0.14.8-brightgreen.svg" alt="vuepress">
<img src="https://img.shields.io/badge/leancloud--storage-3.10.1-orange.svg" alt="leancloud-storage">
<img src="https://img.shields.io/badge/valine-1.3.4-blue.svg" alt="valine"></p>
<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">\u4ECB\u7ECD</p><ol>
<li>\u8FD9\u662F\u4E00\u4E2Avuepress\u4E3B\u9898\uFF0C\u65E8\u5728\u6DFB\u52A0\u535A\u5BA2\u6240\u9700\u7684\u5206\u7C7B\u3001TAB\u5899\u3001\u5206\u9875\u3001\u8BC4\u8BBA\u7B49\u80FD\uFF1B<br></li>
<li>\u4E3B\u9898\u8FFD\u6C42\u6781\u7B80\uFF0C\u6839\u636E vuepress \u7684\u9ED8\u8BA4\u4E3B\u9898\u4FEE\u6539\u800C\u6210\uFF0C\u5B98\u65B9\u7684\u4E3B\u9898\u914D\u7F6E\u4ECD\u7136\u9002\u7528\uFF1B<br></li>
<li>\u4F60\u53EF\u4EE5\u6253\u5F00 <a href="http://recoluan.gitlab.io" target="_blank" rel="noopener noreferrer">\u5348\u540E\u5357\u6742<ExternalLinkIcon/></a> \u6765\u67E5\u770B\u6548\u679C\u3002</li>
</ol>
</div><h2 id="use" tabindex="-1"><a class="header-anchor" href="#use" aria-hidden="true">#</a> Use</h2>
<p><strong>Build</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run build

<span class="token comment"># or</span>

<span class="token function">yarn</span> build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Server</strong></p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code><span class="token function">npm</span> run dev

<span class="token comment"># or</span>

<span class="token function">yarn</span> dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="play-together" tabindex="-1"><a class="header-anchor" href="#play-together" aria-hidden="true">#</a> Play Together</h2>
<h3 id="_0-x" tabindex="-1"><a class="header-anchor" href="#_0-x" aria-hidden="true">#</a> 0.x</h3>
<p><code v-pre>vuepress-theme-reco@0.x</code> \u662F\u57FA\u4E8E <code v-pre>vuepress@0.x</code> \u7684\u535A\u5BA2\u4E3B\u9898\u3002</p>
<p><code v-pre>vuepress@0.x</code> \u529F\u80FD\u6BD4\u8F83\u7B80\u5355\uFF0C\u53EA\u9002\u5408\u4E66\u5199\u7B80\u5355\u7684\u6587\u6863\uFF0C\u4F46\u597D\u5728\u652F\u6301\u4E3B\u9898\u81EA\u5B9A\u4E49\uFF0C\u800C\u4E2A\u4EBA\u53C8\u5E0C\u671B\u80FD\u591F\u7528\u5B83\u6765\u4E66\u5199\u535A\u5BA2\uFF0C\u539F\u56E0\u5C31\u662F\u5B83\u8DB3\u591F\u7684\u7B80\u6D01\uFF0C\u6BEB\u65E0\u7591\u95EE\uFF0C\u8FD9\u4E5F\u7B26\u5408\u5F88\u591A\u7A0B\u5E8F\u5458\u7684\u89C2\u5FF5\uFF0C\u4E5F\u5C31\u662F\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C<code v-pre>vuepress-theme-reco@0.x</code> \u7684\u7B2C\u4E00\u4E2A\u7248\u672C\u7ECF\u8FC7\u4E00\u4E2A\u901A\u5BB5\u800C\u4EA7\u751F\u3002</p>
<p>\u4E3B\u9898\u5F00\u6E90\u4E0D\u4E45\uFF0C\u5F88\u591A\u670B\u53CB\u901A\u8FC7\u5404\u79CD\u8054\u7CFB\u65B9\u5F0F\uFF0C\u7ED9\u5230\u5F88\u591A\u597D\u7684\u610F\u89C1\u548C\u5EFA\u8BAE\uFF0C\u6240\u4EE5\u6211\u4E2A\u4EBA\u4E5F\u5728\u79EF\u6781\u5730\u66F4\u65B0\u3002</p>
<p>\u56E0\u4E3A\u6211\u662F\u4E00\u540D\u524D\u7AEF\u5F00\u53D1\u5DE5\u7A0B\u5E08\uFF0C\u5F00\u53D1\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u603B\u662F\u60F3\u7740\u80FD\u4E0D\u80FD\u52A0\u5165\u4E00\u4E9B\u70AB\u9177\u7684\u6548\u679C\uFF0C\u6709\u5F88\u591A\u6B21\u90FD\u662F\u6DFB\u52A0\u4E0A\u53C8\u53BB\u6389\uFF0C\u53CD\u53CD\u590D\u590D\uFF0C\u6700\u540E\u90FD\u662F\u88AB <strong>\u7B80\u6D01</strong> \u7684\u8FD9\u4E2A\u539F\u5219\u963B\u6B62\u6389\uFF0C\u6BD5\u7ADF\uFF0C\u73B0\u5728\u6211\u662F\u5C06\u5B83\u5F53\u4F5C\u4E00\u4E2A\u4EA7\u54C1\u6765\u770B\u5F85\uFF0C\u5E76\u4E0D\u662F\u4E00\u4E2A\u6280\u672F\u6216\u8005\u662F\u6280\u5DE7\u7684\u5C1D\u8BD5\u9879\u76EE\u3002</p>
<h3 id="_1-x" tabindex="-1"><a class="header-anchor" href="#_1-x" aria-hidden="true">#</a> 1.x</h3>
<p>\u968F\u7740\u4E0D\u65AD\u6709\u7528\u6237\u8FC7\u6765\u8BE2\u95EE\uFF1A\u4E3A\u4EC0\u4E48 <code v-pre>vuepress-theme-reco@0.x</code> \u4E0D\u80FD\u5728 <code v-pre>vuepress@1.x</code> \u4E0A\u4F7F\u7528\uFF1F\u672C\u6765\u53EA\u662F\u6253\u7B97\u5BF9 <code v-pre>vuepress-theme-reco@0.x</code> \u8FDB\u884C\u7B80\u5355\u7684bug\u4FEE\u590D\u7684\u6211\uFF0C\u7EC8\u7A76\u8FD8\u662F\u5FCD\u4E0D\u4F4F\uFF0C\u5F00\u59CB\u4E86 <code v-pre>vuepress-theme-reco@1.x</code> \u7684\u5F00\u53D1\u3002\u53C8\u662F\u5728\u4E00\u4E2A\u5BC2\u9759\u7684\u51CC\u6668\u4E24\u70B9\u534A\uFF08\u665A\u4E0A\u5C31\u662F\u51FA\u6D3B\u5FEB\uFF09\uFF0C\u6211\u9ED8\u9ED8\u5730\u5F00\u59CB\u4E86\u3002</p>
<p>\u4E3B\u9898\u5347\u7EA7\u7684\u5173\u952E\u4E5F\u5C31\u662F <code v-pre>@vuepress/plugin-blog</code> \u8FD9\u6B3E\u5B98\u65B9\u63D2\u4EF6\uFF0C\u5B83\u4E0D\u9700\u8981\u518D\u53BB\u9EBB\u70E6\u5730\u8FC7\u6EE4\u6570\u636E\uFF0C\u5C06\u5206\u7C7B\u548C\u6807\u7B7E\u7684\u76F8\u5173\u4FE1\u606F\u76F4\u63A5\u5B58\u5728 <code v-pre>$categories</code> \u548C <code v-pre>$tags</code> \u8FD9\u4E24\u4E2A\u5168\u5C40\u53D8\u91CF\u4E2D\u3002\u501F\u52A9\u4E8E <code v-pre>@vuepress/plugin-blog</code>\uFF0C\u5206\u7C7B\u548C\u6807\u7B7E\u529F\u80FD\u66F4\u5BB9\u6613\u5B9E\u73B0\uFF0C\u4F46\u4E5F\u6709\u4E86\u4E00\u4E9B\u5C40\u9650\u3002\u63A5\u4E0B\u6765\u4E24\u4E09\u5929\u7684\u65F6\u95F4\uFF0C\u90FD\u662F\u5728\u8FDB\u884C\u529F\u80FD\u7684\u8FC1\u79FB\u548C\u4E00\u4E9Bbug\u7684\u4FEE\u590D\u3002</p>
<p><code v-pre>vuepress-theme-reco@0.x</code> \u7684\u5F00\u53D1\u4E2D\uFF0C\u66F4\u52A0\u6DF1\u523B\u5730\u660E\u767D\u4E86\u6A21\u5757\u5316\u548C\u7EC4\u4EF6\u5316\u7F16\u7A0B\u7684\u91CD\u8981\u6027\uFF0C\u5982\u679C\u5F53\u521D\u6CA1\u6709\u628A\u4E00\u4E9B\u529F\u80FD\u8FDB\u884C\u5C01\u88C5\uFF0C\u800C\u662F\u76F4\u63A5\u7B80\u5355\u7684\u590D\u5236\uFF0C\u8FD9\u6B21\u5347\u7EA7\u4E5F\u4E0D\u4F1A\u8FD9\u4E48\u987A\u5229\u3002\u6A21\u5757\u62C6\u5206\u7684\u8D8A\u7EC6\uFF0C\u4F7F\u7528\u5C31\u4F1A\u8D8A\u7075\u6D3B\u3002</p>
<h3 id="cli" tabindex="-1"><a class="header-anchor" href="#cli" aria-hidden="true">#</a> CLI</h3>
<p>\u8FD8\u662F\u8877\u5FC3\u5730\u5E0C\u671B\u80FD\u6709\u66F4\u591A\u7684\u670B\u53CB\u53C2\u4E0E\u8FDB\u6765\uFF0C\u66F4\u5FEB\u5730\u53BB\u5B8C\u5584\u5B83\u3002\u63A5\u4E0B\u6765\u65F6\u95F4\u5141\u8BB8\u7684\u60C5\u51B5\u4E0B\uFF0C\u6211\u4F1A\u5F00\u6E90\u4E00\u6B3E\u81EA\u52A8\u751F\u6210\u535A\u5BA2\u7684\u811A\u624B\u67B6\uFF0C\u7565\u8FC7\u914D\u7F6E\u6B65\u9AA4\uFF0C\u76F4\u63A5\u4E66\u5199\u4F18\u8D28\u5185\u5BB9\uFF0C\u8FD9\u4E5F\u662F\u6211\u540E\u6765\u9010\u6E10\u5F62\u6210\u7684\u4E00\u79CD\u4FE1\u5FF5\uFF0C\u5C31\u662F\u5E0C\u671B\u80FD\u8BA9\u8FD9\u6B3E\u4E3B\u9898\uFF0C\u529F\u80FD\u8D8A\u5B8C\u5584\uFF0C\u4F7F\u7528\u8D8A\u6765\u8D8A\u7B80\u5355\u3002</p>
<h2 id="license" tabindex="-1"><a class="header-anchor" href="#license" aria-hidden="true">#</a> License</h2>
<p><a href="https://github.com/recoluan/vuepress-theme-reco/blob/master/LICENSE" target="_blank" rel="noopener noreferrer">MIT<ExternalLinkIcon/></a></p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/other/guide.html",pathLocale:"/",permalink:null,routeMeta:{title:"vuepress-theme-reco"},slug:"guide",filePath:"D:/Documents/wangfunfun-documents-online/blogs/other/guide.md",filePathRelative:"blogs/other/guide.md",componentFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/blogs/other/guide.html.vue",componentFilePathRelative:"pages/blogs/other/guide.html.vue",componentFileChunkName:"v-6bb1ef33",dataFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/blogs/other/guide.html.js",dataFilePathRelative:"pages/blogs/other/guide.html.js",dataFileChunkName:"v-6bb1ef33",htmlFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/dist/blogs/other/guide.html",htmlFilePathRelative:"blogs/other/guide.html"}],length:1,label:"reco"},category1:{length:2,pages:[{data:{key:"v-2eb9b31a",path:"/blogs/category1/2019/092101.html",title:"second page in category1",lang:"en-US",frontmatter:{title:"second page in category1",date:"2019/09/21",tags:["tag2"],categories:["category1"]},excerpt:"",headers:[],git:{createdTime:1655877926e3,updatedTime:1655879489e3,contributors:[{name:"wangfunfun",email:"15376960583@189.cn",commits:3}]},filePathRelative:"blogs/category1/2019/092101.md"},key:"v-2eb9b31a",path:"/blogs/category1/2019/092101.html",title:"second page in category1",lang:"en-US",frontmatter:{title:"second page in category1",date:"2019/09/21",tags:["tag2"],categories:["category1"]},excerpt:"",headers:[],content:`
second page in category1`,contentRendered:`<p>second page in category1</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/category1/2019/092101.html",pathLocale:"/",permalink:null,routeMeta:{title:"second page in category1"},slug:"092101",filePath:"D:/Documents/wangfunfun-documents-online/blogs/category1/2019/092101.md",filePathRelative:"blogs/category1/2019/092101.md",componentFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/blogs/category1/2019/092101.html.vue",componentFilePathRelative:"pages/blogs/category1/2019/092101.html.vue",componentFileChunkName:"v-2eb9b31a",dataFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/blogs/category1/2019/092101.html.js",dataFilePathRelative:"pages/blogs/category1/2019/092101.html.js",dataFileChunkName:"v-2eb9b31a",htmlFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/dist/blogs/category1/2019/092101.html",htmlFilePathRelative:"blogs/category1/2019/092101.html"},{data:{key:"v-32598bfc",path:"/blogs/category1/2018/121501.html",title:"first page in category1",lang:"en-US",frontmatter:{title:"first page in category1",date:"2018/12/15",tags:["tag1"],categories:["category1"]},excerpt:"",headers:[],git:{createdTime:1655877926e3,updatedTime:1655879489e3,contributors:[{name:"wangfunfun",email:"15376960583@189.cn",commits:3}]},filePathRelative:"blogs/category1/2018/121501.md"},key:"v-32598bfc",path:"/blogs/category1/2018/121501.html",title:"first page in category1",lang:"en-US",frontmatter:{title:"first page in category1",date:"2018/12/15",tags:["tag1"],categories:["category1"]},excerpt:"",headers:[],content:`
first page in category1`,contentRendered:`<p>first page in category1</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/category1/2018/121501.html",pathLocale:"/",permalink:null,routeMeta:{title:"first page in category1"},slug:"121501",filePath:"D:/Documents/wangfunfun-documents-online/blogs/category1/2018/121501.md",filePathRelative:"blogs/category1/2018/121501.md",componentFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/blogs/category1/2018/121501.html.vue",componentFilePathRelative:"pages/blogs/category1/2018/121501.html.vue",componentFileChunkName:"v-32598bfc",dataFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/blogs/category1/2018/121501.html.js",dataFilePathRelative:"pages/blogs/category1/2018/121501.html.js",dataFileChunkName:"v-32598bfc",htmlFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/dist/blogs/category1/2018/121501.html",htmlFilePathRelative:"blogs/category1/2018/121501.html"}],label:"category1"},category2:{length:2,pages:[{data:{key:"v-16458837",path:"/blogs/category2/2017/092101.html",title:"second page in category2",lang:"en-US",frontmatter:{title:"second page in category2",date:"2017/09/21",tags:["tag4"],categories:["category2"]},excerpt:"",headers:[],git:{createdTime:1655877926e3,updatedTime:1655879489e3,contributors:[{name:"wangfunfun",email:"15376960583@189.cn",commits:3}]},filePathRelative:"blogs/category2/2017/092101.md"},key:"v-16458837",path:"/blogs/category2/2017/092101.html",title:"second page in category2",lang:"en-US",frontmatter:{title:"second page in category2",date:"2017/09/21",tags:["tag4"],categories:["category2"]},excerpt:"",headers:[],content:`
second page in category2`,contentRendered:`<p>second page in category2</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/category2/2017/092101.html",pathLocale:"/",permalink:null,routeMeta:{title:"second page in category2"},slug:"092101",filePath:"D:/Documents/wangfunfun-documents-online/blogs/category2/2017/092101.md",filePathRelative:"blogs/category2/2017/092101.md",componentFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/blogs/category2/2017/092101.html.vue",componentFilePathRelative:"pages/blogs/category2/2017/092101.html.vue",componentFileChunkName:"v-16458837",dataFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/blogs/category2/2017/092101.html.js",dataFilePathRelative:"pages/blogs/category2/2017/092101.html.js",dataFileChunkName:"v-16458837",htmlFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/dist/blogs/category2/2017/092101.html",htmlFilePathRelative:"blogs/category2/2017/092101.html"},{data:{key:"v-19e56119",path:"/blogs/category2/2016/121501.html",title:"first page in category2",lang:"en-US",frontmatter:{title:"first page in category2",date:"2016/12/15",tags:["tag3"],categories:["category2"]},excerpt:"",headers:[],git:{createdTime:1655877926e3,updatedTime:1655879489e3,contributors:[{name:"wangfunfun",email:"15376960583@189.cn",commits:3}]},filePathRelative:"blogs/category2/2016/121501.md"},key:"v-19e56119",path:"/blogs/category2/2016/121501.html",title:"first page in category2",lang:"en-US",frontmatter:{title:"first page in category2",date:"2016/12/15",tags:["tag3"],categories:["category2"]},excerpt:"",headers:[],content:`
first page in category2`,contentRendered:`<p>first page in category2</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/category2/2016/121501.html",pathLocale:"/",permalink:null,routeMeta:{title:"first page in category2"},slug:"121501",filePath:"D:/Documents/wangfunfun-documents-online/blogs/category2/2016/121501.md",filePathRelative:"blogs/category2/2016/121501.md",componentFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/blogs/category2/2016/121501.html.vue",componentFilePathRelative:"pages/blogs/category2/2016/121501.html.vue",componentFileChunkName:"v-19e56119",dataFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/blogs/category2/2016/121501.html.js",dataFilePathRelative:"pages/blogs/category2/2016/121501.html.js",dataFileChunkName:"v-19e56119",htmlFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/dist/blogs/category2/2016/121501.html",htmlFilePathRelative:"blogs/category2/2016/121501.html"}],label:"category2"}},layout:"Categories"},tags:{pagination:10,extendedPages:[{},{},{},{}],items:{tag2:{pages:[{data:{key:"v-2eb9b31a",path:"/blogs/category1/2019/092101.html",title:"second page in category1",lang:"en-US",frontmatter:{title:"second page in category1",date:"2019/09/21",tags:["tag2"],categories:["category1"]},excerpt:"",headers:[],git:{createdTime:1655877926e3,updatedTime:1655879489e3,contributors:[{name:"wangfunfun",email:"15376960583@189.cn",commits:3}]},filePathRelative:"blogs/category1/2019/092101.md"},key:"v-2eb9b31a",path:"/blogs/category1/2019/092101.html",title:"second page in category1",lang:"en-US",frontmatter:{title:"second page in category1",date:"2019/09/21",tags:["tag2"],categories:["category1"]},excerpt:"",headers:[],content:`
second page in category1`,contentRendered:`<p>second page in category1</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/category1/2019/092101.html",pathLocale:"/",permalink:null,routeMeta:{title:"second page in category1"},slug:"092101",filePath:"D:/Documents/wangfunfun-documents-online/blogs/category1/2019/092101.md",filePathRelative:"blogs/category1/2019/092101.md",componentFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/blogs/category1/2019/092101.html.vue",componentFilePathRelative:"pages/blogs/category1/2019/092101.html.vue",componentFileChunkName:"v-2eb9b31a",dataFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/blogs/category1/2019/092101.html.js",dataFilePathRelative:"pages/blogs/category1/2019/092101.html.js",dataFileChunkName:"v-2eb9b31a",htmlFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/dist/blogs/category1/2019/092101.html",htmlFilePathRelative:"blogs/category1/2019/092101.html"}],length:1,label:"tag2"},tag1:{pages:[{data:{key:"v-32598bfc",path:"/blogs/category1/2018/121501.html",title:"first page in category1",lang:"en-US",frontmatter:{title:"first page in category1",date:"2018/12/15",tags:["tag1"],categories:["category1"]},excerpt:"",headers:[],git:{createdTime:1655877926e3,updatedTime:1655879489e3,contributors:[{name:"wangfunfun",email:"15376960583@189.cn",commits:3}]},filePathRelative:"blogs/category1/2018/121501.md"},key:"v-32598bfc",path:"/blogs/category1/2018/121501.html",title:"first page in category1",lang:"en-US",frontmatter:{title:"first page in category1",date:"2018/12/15",tags:["tag1"],categories:["category1"]},excerpt:"",headers:[],content:`
first page in category1`,contentRendered:`<p>first page in category1</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/category1/2018/121501.html",pathLocale:"/",permalink:null,routeMeta:{title:"first page in category1"},slug:"121501",filePath:"D:/Documents/wangfunfun-documents-online/blogs/category1/2018/121501.md",filePathRelative:"blogs/category1/2018/121501.md",componentFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/blogs/category1/2018/121501.html.vue",componentFilePathRelative:"pages/blogs/category1/2018/121501.html.vue",componentFileChunkName:"v-32598bfc",dataFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/blogs/category1/2018/121501.html.js",dataFilePathRelative:"pages/blogs/category1/2018/121501.html.js",dataFileChunkName:"v-32598bfc",htmlFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/dist/blogs/category1/2018/121501.html",htmlFilePathRelative:"blogs/category1/2018/121501.html"}],length:1,label:"tag1"},tag4:{pages:[{data:{key:"v-16458837",path:"/blogs/category2/2017/092101.html",title:"second page in category2",lang:"en-US",frontmatter:{title:"second page in category2",date:"2017/09/21",tags:["tag4"],categories:["category2"]},excerpt:"",headers:[],git:{createdTime:1655877926e3,updatedTime:1655879489e3,contributors:[{name:"wangfunfun",email:"15376960583@189.cn",commits:3}]},filePathRelative:"blogs/category2/2017/092101.md"},key:"v-16458837",path:"/blogs/category2/2017/092101.html",title:"second page in category2",lang:"en-US",frontmatter:{title:"second page in category2",date:"2017/09/21",tags:["tag4"],categories:["category2"]},excerpt:"",headers:[],content:`
second page in category2`,contentRendered:`<p>second page in category2</p>
`,date:"0000-00-00",deps:[],hoistedTags:[],links:[],pathInferred:"/blogs/category2/2017/092101.html",pathLocale:"/",permalink:null,routeMeta:{title:"second page in category2"},slug:"092101",filePath:"D:/Documents/wangfunfun-documents-online/blogs/category2/2017/092101.md",filePathRelative:"blogs/category2/2017/092101.md",componentFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/blogs/category2/2017/092101.html.vue",componentFilePathRelative:"pages/blogs/category2/2017/092101.html.vue",componentFileChunkName:"v-16458837",dataFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/.temp/pages/blogs/category2/2017/092101.html.js",dataFilePathRelative:"pages/blogs/category2/2017/092101.html.js",dataFileChunkName:"v-16458837",htmlFilePath:"D:/Documents/wangfunfun-documents-online/.vuepress/dist/blogs/category2/2017/092101.html",htmlFilePathRelative:"blogs/category2/2017/092101.html"}],length:1,label:"tag4"},tag3:{pages:[{data:{key:"v-19e56119",path:"/blogs/category2/2016/121501.html",title:"first page in category2",lang:"en-US",frontmatter:{title:"first page in category2",date:"2016/12/15",tags:["tag3"],categories:["category2"]},excerpt:"",headers:[],git:{createdTime:1655877926e3,updatedTime:1655879489e3,contributors:[{name:"wangfunfun",email:"15376960583@189.cn",commits:3}]},filePathRelative:"blogs/category2/2016/121501.md"},key:"v-19e56119",path:"/blogs/category2/2016/121501.html",title:"first page in category2",lang:"en-US",frontmatter:{title:"first page in category2",date:"2016/12/15",tags:["tag3"],categories:["category2"]},excerpt:"",headers:[],content:`
first page in category2`,contentRendered:`<p>first page in category2</p>