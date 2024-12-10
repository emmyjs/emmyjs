(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();const Q={boxFlex:!0,boxFlexGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,strokeDashoffset:!0,strokeOpacity:!0,strokeWidth:!0};function $e(e,t){return e+t.charAt(0).toUpperCase()+t.substring(1)}const Ue=["Webkit","ms","Moz","O"];Object.keys(Q).forEach(function(e){Ue.forEach(function(t){Q[$e(t,e)]=Q[e]})});const Ge=/^ms-/,Je=/([A-Z])/g;function Ye(e){return e.replace(Je,"-$1").toLowerCase()}function Qe(e){return Ye(e).replace(Ge,"-ms-")}const Xe=Array.isArray,me=Object.keys,Ze=/^(normal|none|(\b(url\([^)]*\)|chapter_counter|attr\([^)]*\)|(no-)?(open|close)-quote|inherit)((\b\s*)|$|\s+))+)$/;function ge(e,t){return!Q[e]&&typeof t=="number"?t=""+t+"px":e==="content"&&!Ze.test(t)&&(t="'"+t.replace(/'/g,"\\'")+"'"),Qe(e)+": "+t+"; "}function Ke(e){let t="";if(!e||me(e).length===0)return t;const n=me(e);for(let o=0,a=n.length;o<a;o++){const i=n[o],r=e[i];if(Xe(r))for(let s=0,l=r.length;s<l;s++)t+=ge(i,r[s]);else t+=ge(i,r)}return t.trim()}var et=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function tt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var nt=Object.prototype.propertyIsEnumerable;function ot(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function rt(e){var t=Object.getOwnPropertyNames(e);return Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(e))),t.filter(function(n){return nt.call(e,n)})}var it=Object.assign||function(e,t){for(var n,o,a=ot(e),i=1;i<arguments.length;i++){n=arguments[i],o=rt(Object(n));for(var r=0;r<o.length;r++)a[o[r]]=n[o[r]]}return a},J=Array.isArray,at=it,st=3;function Re(e,t){this.callBefore=t&&t.before||this.noop,this.callAfter=t&&t.after||this.noop,this.callProcess=t&&t.process;var n=this;this.scope=null,this.interpreter=e,this.interpreter.setRenderer(this),this.render=function(a,i,r){if(!a)throw new Error("JSX element is not presented");if(typeof a=="string"?a={tag:a,props:ye(i)?i:null,children:Array.isArray(r)?r:null}:typeof a=="function"&&(a={tag:[a.name||a.displayName||"",a],props:ye(i)?i:null,children:Array.isArray(r)?r:null}),!n.isTagDescriptor(a))throw new Error("Top level element should be a tag or function which returns a tag");return n.scope={},a=n.callBefore(a),n.callProcess?n.callProcess(function(){a=n.renderChild(a)}):a=n.renderChild(a),a=n.callAfter(a),n.scope=null,a}}Re.prototype={renderChild:function(e){return e==null?null:this.isTagDescriptor(e)?this.handleTag(e):e},walkChildren:function(e,t,n){var o=e.length,a=0,i;for(n=n|0;a<o;a++)if(i=e[a],i!=null){if(J(i)&&n<st){this.walkChildren(i,t);continue}t(this.renderChild(i))}},handleTag:function(e){var t=e.tag,n=e.props,o=e.children,a,i;if(n=J(n)?at.apply(null,n):n||null,J(t)){i=t[1],t=t[0];var r;return this.interpreter.hasCustomOverride(t)?(r=this.interpreter.custom(t,i,n,o),this.check(r,"custom")):r=i(n,o,t),this.renderChild(r)}return n=n&&this.interpreter.props(t,n),this.check(n,"props"),a=this.interpreter.enter(t,n),this.check(a,"enter"),J(o)&&o.length&&(o=this.interpreter.children(t,o,a),this.check(o,"children"),a=this.handleChildren(t,o,a)),a=this.interpreter.leave(t,a),this.check(a,"leave"),a},handleChildren:function(e,t,n){var o=this;return this.walkChildren(t,function(a){n=o.interpreter.child(e,n,a),o.check(n,"child")}),n},handlePrivimite:function(e){return e},isPrimitive:function(e){switch(typeof e){case"string":case"boolean":case"number":return!0}return!1},isTagDescriptor:function(e){return e&&typeof e=="object"&&"tag"in e&&"props"in e&&"children"in e},check:function(e,t){if(typeof e>"u")throw new Error("Source ["+t+"] returned undefined");return e},noop:function(e){return e}};function ye(e){return typeof e=="object"&&e&&!J(e)}var lt=Re;function Le(e,t){var n=this;this.name=e,this.tags={},this.renderer=null,t&&Object.keys(t).forEach(function(o){var a=t[o];n.addTagHandler(o,a)})}Le.prototype={addTagHandler:function(e,t){this.tags[e]=t},getHandler:function(e){var t=this.tags[e]||this.tags["*"];if(!t)throw new Error("JSX ["+e+"] is not found and [*] is missing");return t},hasCustomOverride:function(e){var t=this.getHandler(e);return!!t.custom},setRenderer:function(e){this.renderer=e},call:function(e,t){var n=this[e].apply(this,t);return typeof n>"u"&&console.log("Interpreter call ["+e+"] returned undefined"),n},props:function(e,t){var n=this.getHandler(e);return n.props?n.props.call(this.renderer,t,e):t},child:function(e,t,n){var o=this.getHandler(e);return o.child?o.child.call(this.renderer,n,t,e):t},enter:function(e,t){var n=this.getHandler(e);if(!n.enter)throw new Error("JSX Interpreter handler should provide [enter] method");return n.enter.call(this.renderer,e,t)},leave:function(e,t){var n=this.getHandler(e);return n.leave?n.leave.call(this.renderer,t,e):t},custom:function(e,t,n,o){var a=this.getHandler(e);return a.custom.call(this.renderer,t,n,o,e)},children:function(e,t,n){var o=this.getHandler(e);return o.children?o.children.call(this.renderer,t,n,e):t}};var ut=Le,ct=lt,dt=ut,ve={},ht={register:function(t,n){t=t.toLowerCase();var o=new dt(t,n.tags),a=new ct(o,{before:n.before,after:n.after,process:n.process});return ve[t]=a,a},render:function(t,n){if(n=n.toLowerCase(),n=n&&ve[n],!n)throw new Error("Renderer ["+n+"] not found");return n.render(t)}},pt=ht;/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */var ft=/["'&<>]/,mt=gt;function gt(e){var t=""+e,n=ft.exec(t);if(!n)return t;var o,a="",i=0,r=0;for(i=n.index;i<t.length;i++){switch(t.charCodeAt(i)){case 34:o="&quot;";break;case 38:o="&amp;";break;case 39:o="&#39;";break;case 60:o="&lt;";break;case 62:o="&gt;";break;default:continue}r!==i&&(a+=t.substring(r,i)),r=i+1,a+=o}return r!==i?a+t.substring(r,i):a}function Ie(e,t){this.name=e,this.props=t,this.children=[]}Ie.prototype.toString=function(){var e=this.props?" "+this.props:"";return"<"+this.name+e+">"+this.children.join("")+"</"+this.name+">"};var yt=Ie,vt=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],bt=pt,X=mt,se=yt,wt=Object.prototype.hasOwnProperty,xt=vt.reduce(function(e,t){return e[t]=!0,e},Object.create(null)),Ct=bt.register("HTML",{tags:{"*":{enter:function(e,t){if(X(e)!==e)throw new Error("Incorrect tag name: "+e);return new se(e,t)},leave:function(e,t){return e},child:function(e,t){return e==null||(e instanceof se||(e=X(e+"")),t.children.push(e)),t},props:function(e){return Object.keys(e).map(function(t){return St(t,t&&e[t])}).join(" ")},children:function(e,t,n){if(typeof xt[n.toLowerCase()]<"u")throw new Error("Tag <"+n+" /> cannot have children");return e}}},after:function(e){return e.toString()}}),jt=Ct;function St(e,t){return!e||t==null||t instanceof se?"":(e==="className"?e="class":e==="cssFor"?e="for":e=e.toLowerCase(),e==="style"&&(t=kt(t)),typeof t=="string"||(t=JSON.stringify(t)),X(e)+'="'+X(t)+'"')}function kt(e){if(typeof e=="string")return e;var t="";for(var n in e)if(wt.call(e,n)){var o=e[n];n=n.replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()}),n.search(/moz-|webkit-|o-|ms-/)===0&&(n="-"+n),t+=(t?" ":"")+n+": "+o+";"}return t}const Et=jt.render;function Oe(e){return e.replace(/<\/?[^>]+>/g,n=>{const o=n.slice(0,-1);if(/^[A-Z]/.test(n.slice(1,-1))){const a=o.split(" ")[0].slice(1),i=o.split(" ").slice(1);return`<emmy-${`${a.toLowerCase()} ${i.join(" ")}`.trim()}>`}else if(/^[A-Z]/.test(n.slice(2,-2)))return`</emmy-${o.split(" ")[0].slice(2).toLocaleLowerCase()}>`;return n}).replace(/<emmy-[^>]+\/>/g,n=>{const o=n.slice(6,-2),a=o.split(" ")[0];return`<emmy-${o.trim()}></emmy-${a}>`})}function At(e){const t={};return e.split(";").forEach(n=>{const[o,a]=n.split(":");o&&a&&(t[o.trim()]=a.trim())}),t}function qt(e){if(typeof e!="string")return Ke(e);const t=At(e);let n="";for(const o in t)t.hasOwnProperty(o)&&(n+=`${o}: ${t[o]}; `);return n.trim()}function U(e){return/^[A-Z]/.test(e)&&(e="emmy-"+e.toLowerCase()),e}const W={},Me=e=>{Object.entries(e).forEach(([t,n])=>{W[t]=n})},N=String.raw,Ft="flex flex-col justify-center items-center space-y-3 text-center w-full h-fit box-border";function Tt(){var e;return((e=globalThis.navigator)===null||e===void 0?void 0:e.userAgent)==="Node"||globalThis.hasOwnProperty("process")}function Rt(e){e.useState=Lt.bind(e),e.useEffect=It.bind(e)}function be(e){return e.map(t=>typeof t=="function"?t():t)}function Lt(e){let t=e;return[()=>t,a=>{t=a}]}function It(e,t,n=Tt){if(n()){console.warn("Skipping useEffect on server");return}const o=this.effectCallback;if(!t||t.length===0){this.effectCallback=r=>{o(r),e.call(r,r)};return}let a=be(t);this.effectCallback=r=>{o(r);const s=be(t);JSON.stringify(a)!==JSON.stringify(s)&&(a=s,e.call(r,r))};let i=!1;t.find(r=>{if(typeof r=="string"&&r==="didMount"){const s=this.callback;this.callback=l=>{s.call(l,l),!i&&(i=!0,e.call(l,l))}}return!1})}var Ne=function(e,t,n,o){function a(i){return i instanceof n?i:new n(function(r){r(i)})}return new(n||(n=Promise))(function(i,r){function s(c){try{u(o.next(c))}catch(d){r(d)}}function l(c){try{u(o.throw(c))}catch(d){r(d)}}function u(c){c.done?i(c.value):a(c.value).then(s,l)}u((o=o.apply(e,t||[])).next())})};class _e extends HTMLElement{constructor(){super(),this.contentGenerator=()=>"",this.callback=t=>{},this.Style={}}addStyle(t){for(const[n,o]of Object.entries(t))this.Style[n]=qt(o),n=="this"&&this.setAttribute("style",this.Style[n])}render(t,n){if(typeof t!="function"&&typeof t!="string")try{const o=Et(t);console.log(o),this.contentGenerator=()=>o}catch{this.contentGenerator=()=>t}else typeof t!="function"?this.contentGenerator=()=>t:this.contentGenerator=t;n&&typeof n=="function"&&(this.callback=n)}}class Ot extends _e{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.shadowRoot.innerHTML=Oe(this.contentGenerator(this)),this.callback.call(this,this)}querySelector(t){return this.shadowRoot.querySelector(U(t))}}class ee extends _e{connectedCallback(){this.innerHTML=Oe(this.contentGenerator(this)),this.callback.call(this,this)}querySelector(t){return HTMLElement.prototype.querySelector.call(this,U(t))}}class we extends ee{constructor(t){super(),this.effectCallback=o=>{},Rt.call(this,this),this.setState({rerenderCount:0});const n=t.call(this,{el:this,props:()=>this.props,children:()=>this.innerHTML});this.render(n)}get props(){return Array.from(this.attributes).reduce((t,n)=>{const o=n.name==="class"?"className":n.name;return Object.assign(Object.assign({},t),{[o]:()=>this.getAttribute(n.name)})},{})}set props(t){for(const[n,o]of Object.entries(t)){if(n==="className"){this.className=o;continue}this.setAttribute(n,o)}}connectedCallback(){super.connectedCallback(),this.effectCallback(this)}static get observedAttributes(){return["state"]}attributeChangedCallback(t,n,o){t==="state"&&this.connectedCallback()}patchState(t){const n=this.state(),o=Object.assign(n,t);this.setState(o)}rerender(){this.patchState({rerenderCount:this.state().rerenderCount+1})}state(){return JSON.parse(this.getAttribute("state").replace(/'/g,'"')||"")}setState(t){this.setAttribute("state",JSON.stringify(t).replace(/"/g,"'"))}querySelector(t){const n=HTMLElement.prototype.querySelector.call(this,U(t));return n.__proto__.addEventListener=(o,a)=>{const i=r=>{a(r),this.rerender()};HTMLElement.prototype.addEventListener.call(n,o,i)},n}}class V extends ee{constructor(){super(),this.render("",()=>{const n="emmy-"+(this.getAttribute("to")||"").toLowerCase(),o=this.getAttribute("href")==="/"?"/root":this.getAttribute("href")||"/404";V.routes[o]=`<${n}></${n}>`})}}V.routes={};class Mt extends ee{constructor(){super(),this.className=Ft,this.handleLocation=()=>{const t=window.location.pathname,n=(t==="/"?V.routes["/root"]:V.routes[t])||V.routes["/404"]||N`<h1>404</h1>`;this.innerHTML!==n&&(this.innerHTML=n)},window.route=t=>{t.preventDefault();const n=t.target;window.location.pathname!==n.href&&(window.history.pushState({},"",n.href),this.handleLocation())},window.onpopstate=this.handleLocation,this.render("",()=>this.handleLocation())}}function Z(e,t){return customElements.get(U(t))?(console.warn(`Custom element ${U(t)} already defined`),e):(customElements.define(U(t),e),e)}function Nt(e,t){return Ne(this,void 0,void 0,function*(){const o=yield(yield fetch(e)).text();return O(()=>o,t)})}function O(e,t){return Ne(this,void 0,void 0,function*(){if(typeof e=="string")return yield Nt(e,t);try{const n=new e;if(n instanceof Ot||n instanceof ee||n instanceof we)return Z(e,t);throw new Error("Not a valid component")}catch{class o extends we{constructor(){super(e)}}return Z(o,t)}})}Z(V,"Route");Z(Mt,"Router");var De={exports:{}};/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */(function(e){(function(t,n){e.exports?e.exports=n():t.Toastify=n()})(et,function(t){var n=function(r){return new n.lib.init(r)},o="1.12.0";n.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},n.lib=n.prototype={toastify:o,constructor:n,init:function(r){return r||(r={}),this.options={},this.toastElement=null,this.options.text=r.text||n.defaults.text,this.options.node=r.node||n.defaults.node,this.options.duration=r.duration===0?0:r.duration||n.defaults.duration,this.options.selector=r.selector||n.defaults.selector,this.options.callback=r.callback||n.defaults.callback,this.options.destination=r.destination||n.defaults.destination,this.options.newWindow=r.newWindow||n.defaults.newWindow,this.options.close=r.close||n.defaults.close,this.options.gravity=r.gravity==="bottom"?"toastify-bottom":n.defaults.gravity,this.options.positionLeft=r.positionLeft||n.defaults.positionLeft,this.options.position=r.position||n.defaults.position,this.options.backgroundColor=r.backgroundColor||n.defaults.backgroundColor,this.options.avatar=r.avatar||n.defaults.avatar,this.options.className=r.className||n.defaults.className,this.options.stopOnFocus=r.stopOnFocus===void 0?n.defaults.stopOnFocus:r.stopOnFocus,this.options.onClick=r.onClick||n.defaults.onClick,this.options.offset=r.offset||n.defaults.offset,this.options.escapeMarkup=r.escapeMarkup!==void 0?r.escapeMarkup:n.defaults.escapeMarkup,this.options.ariaLive=r.ariaLive||n.defaults.ariaLive,this.options.style=r.style||n.defaults.style,r.backgroundColor&&(this.options.style.background=r.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var r=document.createElement("div");r.className="toastify on "+this.options.className,this.options.position?r.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(r.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):r.className+=" toastify-right",r.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var s in this.options.style)r.style[s]=this.options.style[s];if(this.options.ariaLive&&r.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)r.appendChild(this.options.node);else if(this.options.escapeMarkup?r.innerText=this.options.text:r.innerHTML=this.options.text,this.options.avatar!==""){var l=document.createElement("img");l.src=this.options.avatar,l.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?r.appendChild(l):r.insertAdjacentElement("afterbegin",l)}if(this.options.close===!0){var u=document.createElement("button");u.type="button",u.setAttribute("aria-label","Close"),u.className="toast-close",u.innerHTML="&#10006;",u.addEventListener("click",(function(f){f.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}).bind(this));var c=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&c>360?r.insertAdjacentElement("afterbegin",u):r.appendChild(u)}if(this.options.stopOnFocus&&this.options.duration>0){var d=this;r.addEventListener("mouseover",function(f){window.clearTimeout(r.timeOutValue)}),r.addEventListener("mouseleave",function(){r.timeOutValue=window.setTimeout(function(){d.removeElement(r)},d.options.duration)})}if(typeof this.options.destination<"u"&&r.addEventListener("click",(function(f){f.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}).bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&r.addEventListener("click",(function(f){f.stopPropagation(),this.options.onClick()}).bind(this)),typeof this.options.offset=="object"){var h=a("x",this.options),p=a("y",this.options),m=this.options.position=="left"?h:"-"+h,g=this.options.gravity=="toastify-top"?p:"-"+p;r.style.transform="translate("+m+","+g+")"}return r},showToast:function(){this.toastElement=this.buildToast();var r;if(typeof this.options.selector=="string"?r=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?r=this.options.selector:r=document.body,!r)throw"Root element is not defined";var s=n.defaults.oldestFirst?r.firstChild:r.lastChild;return r.insertBefore(this.toastElement,s),n.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout((function(){this.removeElement(this.toastElement)}).bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(r){r.className=r.className.replace(" on",""),window.setTimeout((function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),r.parentNode&&r.parentNode.removeChild(r),this.options.callback.call(r),n.reposition()}).bind(this),400)}},n.reposition=function(){for(var r={top:15,bottom:15},s={top:15,bottom:15},l={top:15,bottom:15},u=document.getElementsByClassName("toastify"),c,d=0;d<u.length;d++){i(u[d],"toastify-top")===!0?c="toastify-top":c="toastify-bottom";var h=u[d].offsetHeight;c=c.substr(9,c.length-1);var p=15,m=window.innerWidth>0?window.innerWidth:screen.width;m<=360?(u[d].style[c]=l[c]+"px",l[c]+=h+p):i(u[d],"toastify-left")===!0?(u[d].style[c]=r[c]+"px",r[c]+=h+p):(u[d].style[c]=s[c]+"px",s[c]+=h+p)}return this};function a(r,s){return s.offset[r]?isNaN(s.offset[r])?s.offset[r]:s.offset[r]+"px":"0px"}function i(r,s){return!r||typeof s!="string"?!1:!!(r.className&&r.className.trim().split(/\s+/gi).indexOf(s)>-1)}return n.lib.init.prototype=n.lib,n})})(De);var _t=De.exports;const Dt=tt(_t);var F=function(){return F=Object.assign||function(t){for(var n,o=1,a=arguments.length;o<a;o++){n=arguments[o];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},F.apply(this,arguments)};function Pt(e,t,n,o){function a(i){return i instanceof n?i:new n(function(r){r(i)})}return new(n||(n=Promise))(function(i,r){function s(c){try{u(o.next(c))}catch(d){r(d)}}function l(c){try{u(o.throw(c))}catch(d){r(d)}}function u(c){c.done?i(c.value):a(c.value).then(s,l)}u((o=o.apply(e,[])).next())})}function Ht(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},o,a,i,r;return r={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(r[Symbol.iterator]=function(){return this}),r;function s(u){return function(c){return l([u,c])}}function l(u){if(o)throw new TypeError("Generator is already executing.");for(;r&&(r=0,u[0]&&(n=0)),n;)try{if(o=1,a&&(i=u[0]&2?a.return:u[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,u[1])).done)return i;switch(a=0,i&&(u=[u[0]&2,i.value]),u[0]){case 0:case 1:i=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,a=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!i||u[1]>i[0]&&u[1]<i[3])){n.label=u[1];break}if(u[0]===6&&n.label<i[1]){n.label=i[1],i=u;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(u);break}i[2]&&n.ops.pop(),n.trys.pop();continue}u=t.call(e,n)}catch(c){u=[6,c],a=0}finally{o=i=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function w(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],o=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&o>=e.length&&(e=void 0),{value:e&&e[o++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function I(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var o=n.call(e),a,i=[],r;try{for(;(t===void 0||t-- >0)&&!(a=o.next()).done;)i.push(a.value)}catch(s){r={error:s}}finally{try{a&&!a.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}return i}var Wt="ENTRIES",Pe="KEYS",He="VALUES",M="",te=function(){function e(t,n){var o=t._tree,a=Array.from(o.keys());this.set=t,this._type=n,this._path=a.length>0?[{node:o,keys:a}]:[]}return e.prototype.next=function(){var t=this.dive();return this.backtrack(),t},e.prototype.dive=function(){if(this._path.length===0)return{done:!0,value:void 0};var t=$(this._path),n=t.node,o=t.keys;if($(o)===M)return{done:!1,value:this.result()};var a=n.get($(o));return this._path.push({node:a,keys:Array.from(a.keys())}),this.dive()},e.prototype.backtrack=function(){if(this._path.length!==0){var t=$(this._path).keys;t.pop(),!(t.length>0)&&(this._path.pop(),this.backtrack())}},e.prototype.key=function(){return this.set._prefix+this._path.map(function(t){var n=t.keys;return $(n)}).filter(function(t){return t!==M}).join("")},e.prototype.value=function(){return $(this._path).node.get(M)},e.prototype.result=function(){switch(this._type){case He:return this.value();case Pe:return this.key();default:return[this.key(),this.value()]}},e.prototype[Symbol.iterator]=function(){return this},e}(),$=function(e){return e[e.length-1]},zt=function(e,t,n){var o=new Map;if(t===void 0)return o;for(var a=t.length+1,i=a+n,r=new Uint8Array(i*a).fill(n+1),s=0;s<a;++s)r[s]=s;for(var l=1;l<i;++l)r[l*a]=l;return We(e,t,n,o,r,1,a,""),o},We=function(e,t,n,o,a,i,r,s){var l,u,c=i*r;try{e:for(var d=w(e.keys()),h=d.next();!h.done;h=d.next()){var p=h.value;if(p===M){var m=a[c-1];m<=n&&o.set(s,[e.get(p),m])}else{for(var g=i,f=0;f<p.length;++f,++g){for(var v=p[f],b=r*g,y=b-r,S=a[b],k=Math.max(0,g-n-1),R=Math.min(r-1,g+n),x=k;x<R;++x){var j=v!==t[x],E=a[y+x]+ +j,A=a[y+x+1]+1,T=a[b+x]+1,C=a[b+x+1]=Math.min(E,A,T);C<S&&(S=C)}if(S>n)continue e}We(e.get(p),t,n,o,a,g,r,s+p)}}}catch(L){l={error:L}}finally{try{h&&!h.done&&(u=d.return)&&u.call(d)}finally{if(l)throw l.error}}},ne=function(){function e(t,n){t===void 0&&(t=new Map),n===void 0&&(n=""),this._size=void 0,this._tree=t,this._prefix=n}return e.prototype.atPrefix=function(t){var n,o;if(!t.startsWith(this._prefix))throw new Error("Mismatched prefix");var a=I(K(this._tree,t.slice(this._prefix.length)),2),i=a[0],r=a[1];if(i===void 0){var s=I(de(r),2),l=s[0],u=s[1];try{for(var c=w(l.keys()),d=c.next();!d.done;d=c.next()){var h=d.value;if(h!==M&&h.startsWith(u)){var p=new Map;return p.set(h.slice(u.length),l.get(h)),new e(p,t)}}}catch(m){n={error:m}}finally{try{d&&!d.done&&(o=c.return)&&o.call(c)}finally{if(n)throw n.error}}}return new e(i,t)},e.prototype.clear=function(){this._size=void 0,this._tree.clear()},e.prototype.delete=function(t){return this._size=void 0,Vt(this._tree,t)},e.prototype.entries=function(){return new te(this,Wt)},e.prototype.forEach=function(t){var n,o;try{for(var a=w(this),i=a.next();!i.done;i=a.next()){var r=I(i.value,2),s=r[0],l=r[1];t(s,l,this)}}catch(u){n={error:u}}finally{try{i&&!i.done&&(o=a.return)&&o.call(a)}finally{if(n)throw n.error}}},e.prototype.fuzzyGet=function(t,n){return zt(this._tree,t,n)},e.prototype.get=function(t){var n=le(this._tree,t);return n!==void 0?n.get(M):void 0},e.prototype.has=function(t){var n=le(this._tree,t);return n!==void 0&&n.has(M)},e.prototype.keys=function(){return new te(this,Pe)},e.prototype.set=function(t,n){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;var o=oe(this._tree,t);return o.set(M,n),this},Object.defineProperty(e.prototype,"size",{get:function(){if(this._size)return this._size;this._size=0;for(var t=this.entries();!t.next().done;)this._size+=1;return this._size},enumerable:!1,configurable:!0}),e.prototype.update=function(t,n){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;var o=oe(this._tree,t);return o.set(M,n(o.get(M))),this},e.prototype.fetch=function(t,n){if(typeof t!="string")throw new Error("key must be a string");this._size=void 0;var o=oe(this._tree,t),a=o.get(M);return a===void 0&&o.set(M,a=n()),a},e.prototype.values=function(){return new te(this,He)},e.prototype[Symbol.iterator]=function(){return this.entries()},e.from=function(t){var n,o,a=new e;try{for(var i=w(t),r=i.next();!r.done;r=i.next()){var s=I(r.value,2),l=s[0],u=s[1];a.set(l,u)}}catch(c){n={error:c}}finally{try{r&&!r.done&&(o=i.return)&&o.call(i)}finally{if(n)throw n.error}}return a},e.fromObject=function(t){return e.from(Object.entries(t))},e}(),K=function(e,t,n){var o,a;if(n===void 0&&(n=[]),t.length===0||e==null)return[e,n];try{for(var i=w(e.keys()),r=i.next();!r.done;r=i.next()){var s=r.value;if(s!==M&&t.startsWith(s))return n.push([e,s]),K(e.get(s),t.slice(s.length),n)}}catch(l){o={error:l}}finally{try{r&&!r.done&&(a=i.return)&&a.call(i)}finally{if(o)throw o.error}}return n.push([e,t]),K(void 0,"",n)},le=function(e,t){var n,o;if(t.length===0||e==null)return e;try{for(var a=w(e.keys()),i=a.next();!i.done;i=a.next()){var r=i.value;if(r!==M&&t.startsWith(r))return le(e.get(r),t.slice(r.length))}}catch(s){n={error:s}}finally{try{i&&!i.done&&(o=a.return)&&o.call(a)}finally{if(n)throw n.error}}},oe=function(e,t){var n,o,a=t.length;e:for(var i=0;e&&i<a;){try{for(var r=(n=void 0,w(e.keys())),s=r.next();!s.done;s=r.next()){var l=s.value;if(l!==M&&t[i]===l[0]){for(var u=Math.min(a-i,l.length),c=1;c<u&&t[i+c]===l[c];)++c;var d=e.get(l);if(c===l.length)e=d;else{var h=new Map;h.set(l.slice(c),d),e.set(t.slice(i,i+c),h),e.delete(l),e=h}i+=c;continue e}}}catch(m){n={error:m}}finally{try{s&&!s.done&&(o=r.return)&&o.call(r)}finally{if(n)throw n.error}}var p=new Map;return e.set(t.slice(i),p),p}return e},Vt=function(e,t){var n=I(K(e,t),2),o=n[0],a=n[1];if(o!==void 0){if(o.delete(M),o.size===0)ze(a);else if(o.size===1){var i=I(o.entries().next().value,2),r=i[0],s=i[1];Ve(a,r,s)}}},ze=function(e){if(e.length!==0){var t=I(de(e),2),n=t[0],o=t[1];if(n.delete(o),n.size===0)ze(e.slice(0,-1));else if(n.size===1){var a=I(n.entries().next().value,2),i=a[0],r=a[1];i!==M&&Ve(e.slice(0,-1),i,r)}}},Ve=function(e,t,n){if(e.length!==0){var o=I(de(e),2),a=o[0],i=o[1];a.set(i+t,n),a.delete(i)}},de=function(e){return e[e.length-1]},G,he="or",Be="and",Bt="and_not",$t=function(){function e(t){if((t==null?void 0:t.fields)==null)throw new Error('MiniSearch: option "fields" must be provided');var n=t.autoVacuum==null||t.autoVacuum===!0?ae:t.autoVacuum;this._options=F(F(F({},ie),t),{autoVacuum:n,searchOptions:F(F({},xe),t.searchOptions||{}),autoSuggestOptions:F(F({},Qt),t.autoSuggestOptions||{})}),this._index=new ne,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldIds={},this._fieldLength=new Map,this._avgFieldLength=[],this._nextId=0,this._storedFields=new Map,this._dirtCount=0,this._currentVacuum=null,this._enqueuedVacuum=null,this._enqueuedVacuumConditions=ce,this.addFields(this._options.fields)}return e.prototype.add=function(t){var n,o,a,i,r,s,l=this._options,u=l.extractField,c=l.tokenize,d=l.processTerm,h=l.fields,p=l.idField,m=u(t,p);if(m==null)throw new Error('MiniSearch: document does not have ID field "'.concat(p,'"'));if(this._idToShortId.has(m))throw new Error("MiniSearch: duplicate ID ".concat(m));var g=this.addDocumentId(m);this.saveStoredFields(g,t);try{for(var f=w(h),v=f.next();!v.done;v=f.next()){var b=v.value,y=u(t,b);if(y!=null){var S=c(y.toString(),b),k=this._fieldIds[b],R=new Set(S).size;this.addFieldLength(g,k,this._documentCount-1,R);try{for(var x=(a=void 0,w(S)),j=x.next();!j.done;j=x.next()){var E=j.value,A=d(E,b);if(Array.isArray(A))try{for(var T=(r=void 0,w(A)),C=T.next();!C.done;C=T.next()){var L=C.value;this.addTerm(k,g,L)}}catch(q){r={error:q}}finally{try{C&&!C.done&&(s=T.return)&&s.call(T)}finally{if(r)throw r.error}}else A&&this.addTerm(k,g,A)}}catch(q){a={error:q}}finally{try{j&&!j.done&&(i=x.return)&&i.call(x)}finally{if(a)throw a.error}}}}}catch(q){n={error:q}}finally{try{v&&!v.done&&(o=f.return)&&o.call(f)}finally{if(n)throw n.error}}},e.prototype.addAll=function(t){var n,o;try{for(var a=w(t),i=a.next();!i.done;i=a.next()){var r=i.value;this.add(r)}}catch(s){n={error:s}}finally{try{i&&!i.done&&(o=a.return)&&o.call(a)}finally{if(n)throw n.error}}},e.prototype.addAllAsync=function(t,n){var o=this;n===void 0&&(n={});var a=n.chunkSize,i=a===void 0?10:a,r={chunk:[],promise:Promise.resolve()},s=t.reduce(function(c,d,h){var p=c.chunk,m=c.promise;return p.push(d),(h+1)%i===0?{chunk:[],promise:m.then(function(){return new Promise(function(g){return setTimeout(g,0)})}).then(function(){return o.addAll(p)})}:{chunk:p,promise:m}},r),l=s.chunk,u=s.promise;return u.then(function(){return o.addAll(l)})},e.prototype.remove=function(t){var n,o,a,i,r,s,l=this._options,u=l.tokenize,c=l.processTerm,d=l.extractField,h=l.fields,p=l.idField,m=d(t,p);if(m==null)throw new Error('MiniSearch: document does not have ID field "'.concat(p,'"'));var g=this._idToShortId.get(m);if(g==null)throw new Error("MiniSearch: cannot remove document with ID ".concat(m,": it is not in the index"));try{for(var f=w(h),v=f.next();!v.done;v=f.next()){var b=v.value,y=d(t,b);if(y!=null){var S=u(y.toString(),b),k=this._fieldIds[b],R=new Set(S).size;this.removeFieldLength(g,k,this._documentCount,R);try{for(var x=(a=void 0,w(S)),j=x.next();!j.done;j=x.next()){var E=j.value,A=c(E,b);if(Array.isArray(A))try{for(var T=(r=void 0,w(A)),C=T.next();!C.done;C=T.next()){var L=C.value;this.removeTerm(k,g,L)}}catch(q){r={error:q}}finally{try{C&&!C.done&&(s=T.return)&&s.call(T)}finally{if(r)throw r.error}}else A&&this.removeTerm(k,g,A)}}catch(q){a={error:q}}finally{try{j&&!j.done&&(i=x.return)&&i.call(x)}finally{if(a)throw a.error}}}}}catch(q){n={error:q}}finally{try{v&&!v.done&&(o=f.return)&&o.call(f)}finally{if(n)throw n.error}}this._storedFields.delete(g),this._documentIds.delete(g),this._idToShortId.delete(m),this._fieldLength.delete(g),this._documentCount-=1},e.prototype.removeAll=function(t){var n,o;if(t)try{for(var a=w(t),i=a.next();!i.done;i=a.next()){var r=i.value;this.remove(r)}}catch(s){n={error:s}}finally{try{i&&!i.done&&(o=a.return)&&o.call(a)}finally{if(n)throw n.error}}else{if(arguments.length>0)throw new Error("Expected documents to be present. Omit the argument to remove all documents.");this._index=new ne,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldLength=new Map,this._avgFieldLength=[],this._storedFields=new Map,this._nextId=0}},e.prototype.discard=function(t){var n=this,o=this._idToShortId.get(t);if(o==null)throw new Error("MiniSearch: cannot discard document with ID ".concat(t,": it is not in the index"));this._idToShortId.delete(t),this._documentIds.delete(o),this._storedFields.delete(o),(this._fieldLength.get(o)||[]).forEach(function(a,i){n.removeFieldLength(o,i,n._documentCount,a)}),this._fieldLength.delete(o),this._documentCount-=1,this._dirtCount+=1,this.maybeAutoVacuum()},e.prototype.maybeAutoVacuum=function(){if(this._options.autoVacuum!==!1){var t=this._options.autoVacuum,n=t.minDirtFactor,o=t.minDirtCount,a=t.batchSize,i=t.batchWait;this.conditionalVacuum({batchSize:a,batchWait:i},{minDirtCount:o,minDirtFactor:n})}},e.prototype.discardAll=function(t){var n,o,a=this._options.autoVacuum;try{this._options.autoVacuum=!1;try{for(var i=w(t),r=i.next();!r.done;r=i.next()){var s=r.value;this.discard(s)}}catch(l){n={error:l}}finally{try{r&&!r.done&&(o=i.return)&&o.call(i)}finally{if(n)throw n.error}}}finally{this._options.autoVacuum=a}this.maybeAutoVacuum()},e.prototype.replace=function(t){var n=this._options,o=n.idField,a=n.extractField,i=a(t,o);this.discard(i),this.add(t)},e.prototype.vacuum=function(t){return t===void 0&&(t={}),this.conditionalVacuum(t)},e.prototype.conditionalVacuum=function(t,n){var o=this;return this._currentVacuum?(this._enqueuedVacuumConditions=this._enqueuedVacuumConditions&&n,this._enqueuedVacuum!=null?this._enqueuedVacuum:(this._enqueuedVacuum=this._currentVacuum.then(function(){var a=o._enqueuedVacuumConditions;return o._enqueuedVacuumConditions=ce,o.performVacuuming(t,a)}),this._enqueuedVacuum)):this.vacuumConditionsMet(n)===!1?Promise.resolve():(this._currentVacuum=this.performVacuuming(t),this._currentVacuum)},e.prototype.performVacuuming=function(t,n){return Pt(this,void 0,void 0,function(){var o,a,i,r,s,l,u,c,d,h,p,m,g,f,v,b,y,S,k,R,x,j,E,A,T;return Ht(this,function(C){switch(C.label){case 0:if(o=this._dirtCount,!this.vacuumConditionsMet(n))return[3,10];a=t.batchSize||ue.batchSize,i=t.batchWait||ue.batchWait,r=1,C.label=1;case 1:C.trys.push([1,7,8,9]),s=w(this._index),l=s.next(),C.label=2;case 2:if(l.done)return[3,6];u=I(l.value,2),c=u[0],d=u[1];try{for(h=(j=void 0,w(d)),p=h.next();!p.done;p=h.next()){m=I(p.value,2),g=m[0],f=m[1];try{for(v=(A=void 0,w(f)),b=v.next();!b.done;b=v.next())y=I(b.value,1),S=y[0],!this._documentIds.has(S)&&(f.size<=1?d.delete(g):f.delete(S))}catch(L){A={error:L}}finally{try{b&&!b.done&&(T=v.return)&&T.call(v)}finally{if(A)throw A.error}}}}catch(L){j={error:L}}finally{try{p&&!p.done&&(E=h.return)&&E.call(h)}finally{if(j)throw j.error}}return this._index.get(c).size===0&&this._index.delete(c),r%a!==0?[3,4]:[4,new Promise(function(L){return setTimeout(L,i)})];case 3:C.sent(),C.label=4;case 4:r+=1,C.label=5;case 5:return l=s.next(),[3,2];case 6:return[3,9];case 7:return k=C.sent(),R={error:k},[3,9];case 8:try{l&&!l.done&&(x=s.return)&&x.call(s)}finally{if(R)throw R.error}return[7];case 9:this._dirtCount-=o,C.label=10;case 10:return[4,null];case 11:return C.sent(),this._currentVacuum=this._enqueuedVacuum,this._enqueuedVacuum=null,[2]}})})},e.prototype.vacuumConditionsMet=function(t){if(t==null)return!0;var n=t.minDirtCount,o=t.minDirtFactor;return n=n||ae.minDirtCount,o=o||ae.minDirtFactor,this.dirtCount>=n&&this.dirtFactor>=o},Object.defineProperty(e.prototype,"isVacuuming",{get:function(){return this._currentVacuum!=null},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"dirtCount",{get:function(){return this._dirtCount},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"dirtFactor",{get:function(){return this._dirtCount/(1+this._documentCount+this._dirtCount)},enumerable:!1,configurable:!0}),e.prototype.has=function(t){return this._idToShortId.has(t)},e.prototype.getStoredFields=function(t){var n=this._idToShortId.get(t);if(n!=null)return this._storedFields.get(n)},e.prototype.search=function(t,n){var o,a;n===void 0&&(n={});var i=this.executeQuery(t,n),r=[];try{for(var s=w(i),l=s.next();!l.done;l=s.next()){var u=I(l.value,2),c=u[0],d=u[1],h=d.score,p=d.terms,m=d.match,g=p.length||1,f={id:this._documentIds.get(c),score:h*g,terms:Object.keys(m),queryTerms:p,match:m};Object.assign(f,this._storedFields.get(c)),(n.filter==null||n.filter(f))&&r.push(f)}}catch(v){o={error:v}}finally{try{l&&!l.done&&(a=s.return)&&a.call(s)}finally{if(o)throw o.error}}return t===e.wildcard&&n.boostDocument==null&&this._options.searchOptions.boostDocument==null||r.sort(je),r},e.prototype.autoSuggest=function(t,n){var o,a,i,r;n===void 0&&(n={}),n=F(F({},this._options.autoSuggestOptions),n);var s=new Map;try{for(var l=w(this.search(t,n)),u=l.next();!u.done;u=l.next()){var c=u.value,d=c.score,h=c.terms,p=h.join(" "),m=s.get(p);m!=null?(m.score+=d,m.count+=1):s.set(p,{score:d,terms:h,count:1})}}catch(k){o={error:k}}finally{try{u&&!u.done&&(a=l.return)&&a.call(l)}finally{if(o)throw o.error}}var g=[];try{for(var f=w(s),v=f.next();!v.done;v=f.next()){var b=I(v.value,2),m=b[0],y=b[1],d=y.score,h=y.terms,S=y.count;g.push({suggestion:m,terms:h,score:d/S})}}catch(k){i={error:k}}finally{try{v&&!v.done&&(r=f.return)&&r.call(f)}finally{if(i)throw i.error}}return g.sort(je),g},Object.defineProperty(e.prototype,"documentCount",{get:function(){return this._documentCount},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"termCount",{get:function(){return this._index.size},enumerable:!1,configurable:!0}),e.loadJSON=function(t,n){if(n==null)throw new Error("MiniSearch: loadJSON should be given the same options used when serializing the index");return this.loadJS(JSON.parse(t),n)},e.getDefault=function(t){if(ie.hasOwnProperty(t))return re(ie,t);throw new Error('MiniSearch: unknown option "'.concat(t,'"'))},e.loadJS=function(t,n){var o,a,i,r,s,l,u=t.index,c=t.documentCount,d=t.nextId,h=t.documentIds,p=t.fieldIds,m=t.fieldLength,g=t.averageFieldLength,f=t.storedFields,v=t.dirtCount,b=t.serializationVersion;if(b!==1&&b!==2)throw new Error("MiniSearch: cannot deserialize an index created with an incompatible version");var y=new e(n);y._documentCount=c,y._nextId=d,y._documentIds=Y(h),y._idToShortId=new Map,y._fieldIds=p,y._fieldLength=Y(m),y._avgFieldLength=g,y._storedFields=Y(f),y._dirtCount=v||0,y._index=new ne;try{for(var S=w(y._documentIds),k=S.next();!k.done;k=S.next()){var R=I(k.value,2),x=R[0],j=R[1];y._idToShortId.set(j,x)}}catch(H){o={error:H}}finally{try{k&&!k.done&&(a=S.return)&&a.call(S)}finally{if(o)throw o.error}}try{for(var E=w(u),A=E.next();!A.done;A=E.next()){var T=I(A.value,2),C=T[0],L=T[1],q=new Map;try{for(var P=(s=void 0,w(Object.keys(L))),_=P.next();!_.done;_=P.next()){var z=_.value,B=L[z];b===1&&(B=B.ds),q.set(parseInt(z,10),Y(B))}}catch(H){s={error:H}}finally{try{_&&!_.done&&(l=P.return)&&l.call(P)}finally{if(s)throw s.error}}y._index.set(C,q)}}catch(H){i={error:H}}finally{try{A&&!A.done&&(r=E.return)&&r.call(E)}finally{if(i)throw i.error}}return y},e.prototype.executeQuery=function(t,n){var o=this;if(n===void 0&&(n={}),t===e.wildcard)return this.executeWildcardQuery(n);if(typeof t!="string"){var a=F(F(F({},n),t),{queries:void 0}),i=t.queries.map(function(f){return o.executeQuery(f,a)});return this.combineResults(i,a.combineWith)}var r=this._options,s=r.tokenize,l=r.processTerm,u=r.searchOptions,c=F(F({tokenize:s,processTerm:l},u),n),d=c.tokenize,h=c.processTerm,p=d(t).flatMap(function(f){return h(f)}).filter(function(f){return!!f}),m=p.map(Yt(c)),g=m.map(function(f){return o.executeQuerySpec(f,c)});return this.combineResults(g,c.combineWith)},e.prototype.executeQuerySpec=function(t,n){var o,a,i,r,s=F(F({},this._options.searchOptions),n),l=(s.fields||this._options.fields).reduce(function(z,B){var H;return F(F({},z),(H={},H[B]=re(s.boost,B)||1,H))},{}),u=s.boostDocument,c=s.weights,d=s.maxFuzzy,h=s.bm25,p=F(F({},xe.weights),c),m=p.fuzzy,g=p.prefix,f=this._index.get(t.term),v=this.termResults(t.term,t.term,1,f,l,u,h),b,y;if(t.prefix&&(b=this._index.atPrefix(t.term)),t.fuzzy){var S=t.fuzzy===!0?.2:t.fuzzy,k=S<1?Math.min(d,Math.round(t.term.length*S)):S;k&&(y=this._index.fuzzyGet(t.term,k))}if(b)try{for(var R=w(b),x=R.next();!x.done;x=R.next()){var j=I(x.value,2),E=j[0],A=j[1],T=E.length-t.term.length;if(T){y==null||y.delete(E);var C=g*E.length/(E.length+.3*T);this.termResults(t.term,E,C,A,l,u,h,v)}}}catch(z){o={error:z}}finally{try{x&&!x.done&&(a=R.return)&&a.call(R)}finally{if(o)throw o.error}}if(y)try{for(var L=w(y.keys()),q=L.next();!q.done;q=L.next()){var E=q.value,P=I(y.get(E),2),_=P[0],T=P[1];if(T){var C=m*E.length/(E.length+T);this.termResults(t.term,E,C,_,l,u,h,v)}}}catch(z){i={error:z}}finally{try{q&&!q.done&&(r=L.return)&&r.call(L)}finally{if(i)throw i.error}}return v},e.prototype.executeWildcardQuery=function(t){var n,o,a=new Map,i=F(F({},this._options.searchOptions),t);try{for(var r=w(this._documentIds),s=r.next();!s.done;s=r.next()){var l=I(s.value,2),u=l[0],c=l[1],d=i.boostDocument?i.boostDocument(c,"",this._storedFields.get(u)):1;a.set(u,{score:d,terms:[],match:{}})}}catch(h){n={error:h}}finally{try{s&&!s.done&&(o=r.return)&&o.call(r)}finally{if(n)throw n.error}}return a},e.prototype.combineResults=function(t,n){if(n===void 0&&(n=he),t.length===0)return new Map;var o=n.toLowerCase();return t.reduce(Ut[o])||new Map},e.prototype.toJSON=function(){var t,n,o,a,i=[];try{for(var r=w(this._index),s=r.next();!s.done;s=r.next()){var l=I(s.value,2),u=l[0],c=l[1],d={};try{for(var h=(o=void 0,w(c)),p=h.next();!p.done;p=h.next()){var m=I(p.value,2),g=m[0],f=m[1];d[g]=Object.fromEntries(f)}}catch(v){o={error:v}}finally{try{p&&!p.done&&(a=h.return)&&a.call(h)}finally{if(o)throw o.error}}i.push([u,d])}}catch(v){t={error:v}}finally{try{s&&!s.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}return{documentCount:this._documentCount,nextId:this._nextId,documentIds:Object.fromEntries(this._documentIds),fieldIds:this._fieldIds,fieldLength:Object.fromEntries(this._fieldLength),averageFieldLength:this._avgFieldLength,storedFields:Object.fromEntries(this._storedFields),dirtCount:this._dirtCount,index:i,serializationVersion:2}},e.prototype.termResults=function(t,n,o,a,i,r,s,l){var u,c,d,h,p;if(l===void 0&&(l=new Map),a==null)return l;try{for(var m=w(Object.keys(i)),g=m.next();!g.done;g=m.next()){var f=g.value,v=i[f],b=this._fieldIds[f],y=a.get(b);if(y!=null){var S=y.size,k=this._avgFieldLength[b];try{for(var R=(d=void 0,w(y.keys())),x=R.next();!x.done;x=R.next()){var j=x.value;if(!this._documentIds.has(j)){this.removeTerm(b,j,n),S-=1;continue}var E=r?r(this._documentIds.get(j),n,this._storedFields.get(j)):1;if(E){var A=y.get(j),T=this._fieldLength.get(j)[b],C=Jt(A,S,this._documentCount,T,k,s),L=o*v*E*C,q=l.get(j);if(q){q.score+=L,Xt(q.terms,t);var P=re(q.match,n);P?P.push(f):q.match[n]=[f]}else l.set(j,{score:L,terms:[t],match:(p={},p[n]=[f],p)})}}}catch(_){d={error:_}}finally{try{x&&!x.done&&(h=R.return)&&h.call(R)}finally{if(d)throw d.error}}}}}catch(_){u={error:_}}finally{try{g&&!g.done&&(c=m.return)&&c.call(m)}finally{if(u)throw u.error}}return l},e.prototype.addTerm=function(t,n,o){var a=this._index.fetch(o,Se),i=a.get(t);if(i==null)i=new Map,i.set(n,1),a.set(t,i);else{var r=i.get(n);i.set(n,(r||0)+1)}},e.prototype.removeTerm=function(t,n,o){if(!this._index.has(o)){this.warnDocumentChanged(n,t,o);return}var a=this._index.fetch(o,Se),i=a.get(t);i==null||i.get(n)==null?this.warnDocumentChanged(n,t,o):i.get(n)<=1?i.size<=1?a.delete(t):i.delete(n):i.set(n,i.get(n)-1),this._index.get(o).size===0&&this._index.delete(o)},e.prototype.warnDocumentChanged=function(t,n,o){var a,i;try{for(var r=w(Object.keys(this._fieldIds)),s=r.next();!s.done;s=r.next()){var l=s.value;if(this._fieldIds[l]===n){this._options.logger("warn","MiniSearch: document with ID ".concat(this._documentIds.get(t),' has changed before removal: term "').concat(o,'" was not present in field "').concat(l,'". Removing a document after it has changed can corrupt the index!'),"version_conflict");return}}}catch(u){a={error:u}}finally{try{s&&!s.done&&(i=r.return)&&i.call(r)}finally{if(a)throw a.error}}},e.prototype.addDocumentId=function(t){var n=this._nextId;return this._idToShortId.set(t,n),this._documentIds.set(n,t),this._documentCount+=1,this._nextId+=1,n},e.prototype.addFields=function(t){for(var n=0;n<t.length;n++)this._fieldIds[t[n]]=n},e.prototype.addFieldLength=function(t,n,o,a){var i=this._fieldLength.get(t);i==null&&this._fieldLength.set(t,i=[]),i[n]=a;var r=this._avgFieldLength[n]||0,s=r*o+a;this._avgFieldLength[n]=s/(o+1)},e.prototype.removeFieldLength=function(t,n,o,a){if(o===1){this._avgFieldLength[n]=0;return}var i=this._avgFieldLength[n]*o-a;this._avgFieldLength[n]=i/(o-1)},e.prototype.saveStoredFields=function(t,n){var o,a,i=this._options,r=i.storeFields,s=i.extractField;if(!(r==null||r.length===0)){var l=this._storedFields.get(t);l==null&&this._storedFields.set(t,l={});try{for(var u=w(r),c=u.next();!c.done;c=u.next()){var d=c.value,h=s(n,d);h!==void 0&&(l[d]=h)}}catch(p){o={error:p}}finally{try{c&&!c.done&&(a=u.return)&&a.call(u)}finally{if(o)throw o.error}}}},e.wildcard=Symbol("*"),e}(),re=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0},Ut=(G={},G[he]=function(e,t){var n,o;try{for(var a=w(t.keys()),i=a.next();!i.done;i=a.next()){var r=i.value,s=e.get(r);if(s==null)e.set(r,t.get(r));else{var l=t.get(r),u=l.score,c=l.terms,d=l.match;s.score=s.score+u,s.match=Object.assign(s.match,d),Ce(s.terms,c)}}}catch(h){n={error:h}}finally{try{i&&!i.done&&(o=a.return)&&o.call(a)}finally{if(n)throw n.error}}return e},G[Be]=function(e,t){var n,o,a=new Map;try{for(var i=w(t.keys()),r=i.next();!r.done;r=i.next()){var s=r.value,l=e.get(s);if(l!=null){var u=t.get(s),c=u.score,d=u.terms,h=u.match;Ce(l.terms,d),a.set(s,{score:l.score+c,terms:l.terms,match:Object.assign(l.match,h)})}}}catch(p){n={error:p}}finally{try{r&&!r.done&&(o=i.return)&&o.call(i)}finally{if(n)throw n.error}}return a},G[Bt]=function(e,t){var n,o;try{for(var a=w(t.keys()),i=a.next();!i.done;i=a.next()){var r=i.value;e.delete(r)}}catch(s){n={error:s}}finally{try{i&&!i.done&&(o=a.return)&&o.call(a)}finally{if(n)throw n.error}}return e},G),Gt={k:1.2,b:.7,d:.5},Jt=function(e,t,n,o,a,i){var r=i.k,s=i.b,l=i.d,u=Math.log(1+(n-t+.5)/(t+.5));return u*(l+e*(r+1)/(e+r*(1-s+s*o/a)))},Yt=function(e){return function(t,n,o){var a=typeof e.fuzzy=="function"?e.fuzzy(t,n,o):e.fuzzy||!1,i=typeof e.prefix=="function"?e.prefix(t,n,o):e.prefix===!0;return{term:t,fuzzy:a,prefix:i}}},ie={idField:"id",extractField:function(e,t){return e[t]},tokenize:function(e){return e.split(Zt)},processTerm:function(e){return e.toLowerCase()},fields:void 0,searchOptions:void 0,storeFields:[],logger:function(e,t){typeof(console==null?void 0:console[e])=="function"&&console[e](t)},autoVacuum:!0},xe={combineWith:he,prefix:!1,fuzzy:!1,maxFuzzy:6,boost:{},weights:{fuzzy:.45,prefix:.375},bm25:Gt},Qt={combineWith:Be,prefix:function(e,t,n){return t===n.length-1}},ue={batchSize:1e3,batchWait:10},ce={minDirtFactor:.1,minDirtCount:20},ae=F(F({},ue),ce),Xt=function(e,t){e.includes(t)||e.push(t)},Ce=function(e,t){var n,o;try{for(var a=w(t),i=a.next();!i.done;i=a.next()){var r=i.value;e.includes(r)||e.push(r)}}catch(s){n={error:s}}finally{try{i&&!i.done&&(o=a.return)&&o.call(a)}finally{if(n)throw n.error}}},je=function(e,t){var n=e.score,o=t.score;return o-n},Se=function(){return new Map},Y=function(e){var t,n,o=new Map;try{for(var a=w(Object.keys(e)),i=a.next();!i.done;i=a.next()){var r=i.value;o.set(parseInt(r,10),e[r])}}catch(s){t={error:s}}finally{try{i&&!i.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}return o},Zt=/[\n\r -#%-*,-/:;?@[-\]_{}\u00A0\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]+/u;Me({markdown:{cli:`<section class="markdown flex flex-col justify-top items-left text-left p-4 pt-0 mb-4 w-full sm:w-[90%] md:w-[70%] h-fit box-border gap-6"><h1>Using Emmy.js with create-emmy</h1>
<h2>What is create-emmy?</h2>
<p><code>create-emmy</code> is a command-line interface (CLI) for creating Emmy.js applications. It is a tool that helps you to create a new Emmy.js app with a single command.</p>
<p><a href="https://www.youtube.com/watch?v=rOxAJ9c068c">You can see a tutorial on how to use create-emmy here</a></p>
<p>
  <strong>Note:</strong> This tutorial is under construction. Please come back later.
</p>

<h2>Quick Start</h2>
<p>That's it! You've successfully used Emmy.js with the command-line interface (CLI) <code>create-emmy</code>. 🚀</p>
<hr>
Might be useful to you. Give it a try! 🚀

<ul>
<li><a href="/documentation">Quick Start with Emmy.js</a></li>
</ul>
</section>`,index:`<section class="markdown flex flex-col justify-top items-left text-left p-4 pt-0 mb-4 w-full sm:w-[90%] md:w-[70%] h-fit box-border gap-6"><h1>Quick Start with Emmy.js</h1>
<p>Emmy.js is a JavaScript library for building user interfaces using functional web components. Inspired by React.js, it uses the platform's native APIs to render components, in a declarative way.</p>
<p>It's core library <code>emmy-dom</code> allows you to create components using functional components, class components, and page components. It also includes hooks and a router to create single page applications.</p>
<h2>Functional Components</h2>
<p>You can use functional components to create components without classes. Functional components are just functions that return a HTML code or a function that returns HTML code. The following example shows how to create a functional component:</p>
<pre><code class="language-javascript">import { load, html } from 'emmy-dom'

function helloWorld() {
  return html\`&lt;h1&gt;Hello World!&lt;/h1&gt;\`
}

load(helloWorld, 'HelloWorld')
</code></pre>
<h2>Page Components</h2>
<p><span class='bg-yellow-900 text-yellow-300 inline-flex items-center me-2 px-2.5 py-0.5 rounded-full text-xs font-medium w-fit'>Unestable</span><span class='bg-blue-900 text-blue-300 inline-flex items-center me-2 px-2.5 py-0.5 rounded-full text-xs font-medium w-fit'>Node 18.x and beyond | Requires Fetch API</span></p>
<p>You can use page components to create components that are rendered only once, from a html file. The following example shows how to create a page component:</p>
<pre><code class="language-html">&lt;!-- home.html --&gt;
&lt;h1&gt;Hello World!&lt;/h1&gt;
</code></pre>
<pre><code class="language-javascript">import { load } from 'emmy-dom'

await load('/home.html', 'Home')
</code></pre>
<h2>Class Components</h2>
<p>You can use class components to create components with classes. The following example shows how to create a class component:</p>
<h3>Light Components</h3>
<pre><code class="language-javascript">import { LightComponent, launch, html } from 'emmy-dom'

class HelloWorld extends LightComponent {
  constructor() {
    super()
    this.render(html\`&lt;h1&gt;Hello World!&lt;/h1&gt;\`)
  }
}

launch(HelloWorld, 'HelloWorld')
</code></pre>
<h3>Shadow Components</h3>
<pre><code class="language-javascript">import { Component, launch, html } from 'emmy-dom'

class HelloWorld extends Component {
  constructor() {
    super()
    this.render(html\`&lt;h1&gt;Hello World!&lt;/h1&gt;\`)
  }
}

launch(HelloWorld, 'HelloWorld')
</code></pre>
<h2>Emmy Hooks</h2>
<p>Emmy Hooks are inspired by React Hooks. You can use them to add state to your functional components without manually managing the <code>state</code> property. </p>
<h3>useState</h3>
<pre><code class="language-javascript">import { load, html } from 'emmy-dom'

function counter({ el }) {
  const [count, setCount] = el.useState(0)

  el.useEffect(() =&gt; {
    el.querySelector('#increment').addEventListener('click', () =&gt; {
      setCount(count() + 1)
    })
  }, ['didMount'])

  return () =&gt; html\`
    &lt;div&gt;
      &lt;h1&gt;Count: \${count()}&lt;/h1&gt;
      &lt;button id='increment'&gt;+&lt;/button&gt;
    &lt;/div&gt;
  \`
}

load(counter, 'Counter')
</code></pre>
<h3>useEffect</h3>
<pre><code class="language-javascript">import { load, html } from 'emmy-dom'

function counter({ el }) {
  const [count, setCount] = useState(0)

  el.useEffect(() =&gt; {
    el.querySelector('#increment').addEventListener('click', () =&gt; {
      setCount(count() + 1)
    })
  }, ['didMount'])

  el.useEffect(() =&gt; {
    console.log('Count changed to', count())
  }, [count])

  return () =&gt; html\`
    &lt;div&gt;
      &lt;h1&gt;Count: \${count()}&lt;/h1&gt;
      &lt;button id='increment'&gt;+&lt;/button&gt;
    &lt;/div&gt;
  \`
}

load(counter, 'Counter')
</code></pre>
<h2>Why Functional Components?</h2>
<p>Functional components are easier to write than class components. For example, the following class component:</p>
<pre><code class="language-javascript">import { LightComponent, launch, html } from 'emmy-dom'

class OldCounter extends LightComponent {
  constructor() {
    super()

    this.setAttribute('counter', 0)
    this.setAttribute('word', 'a')

    this.render(html\`
      &lt;div class='flex flex-col justify-center items-center space-y-3 text-center w-full h-full'&gt;
        &lt;h1 class='text-3xl font-bold'&gt;Counter&lt;/h1&gt;
        &lt;h3 class='text-3xl font-bold' id='counter'&gt;\${this.getAttribute('counter')}&lt;/h3&gt;
        &lt;h3 class='text-3xl font-bold' id='word'&gt;\${this.getAttribute('word')}&lt;/h3&gt;
        &lt;button id='plusButton' class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'&gt;
          Increment
        &lt;/button&gt;
        &lt;button id='wordButton' class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'&gt;
          Word Change
        &lt;/button&gt;
      &lt;/div&gt;
    \`, (component) =&gt; {
      component.querySelector('#plusButton').addEventListener('click', () =&gt; {
        componentsetAttribute('counter', parseInt(component.getAttribute('counter')) + 1)
      })
      component.querySelector('#wordButton').addEventListener('click', () =&gt; {
        component.setAttribute('word', 'a' + component.getAttribute('word'))
      })
    })
  }

  static get observedAttributes() {
    return ['counter', 'word']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'counter') {
      this.$('#counter').innerHTML = newValue
    }
    else if (name === 'word') {
      this.$('#word').innerHTML = newValue
    }
  }
}

launch(OldCounter, 'OldCounter')
</code></pre>
<p>can be written as the following functional component:</p>
<pre><code class="language-javascript">import { load, html } from 'emmy-dom'

function counter ({ el }) {
  const [count, setCount] = el.useState(0)
  const [word, setWord] = el.useState('a')

  el.useEffect(() =&gt; {
    const handleClick = () =&gt; setCount(count() + 1)
    el.querySelector('#plusButton').addEventListener('click', handleClick)

    const handleWord = () =&gt; setWord('a' + word())
    el.querySelector('#wordButton').addEventListener('click', handleWord)
  }, ['didMount'])

  return () =&gt; html\`
    &lt;div class='flex flex-col justify-center items-center space-y-3 text-center w-full h-full'&gt;
      &lt;h1 class='text-3xl font-bold'&gt;Counter&lt;/h1&gt;
      &lt;h3 class='text-3xl font-bold'&gt;\${count()}&lt;/h3&gt;
      &lt;h3 class='text-3xl font-bold'&gt;\${word()}&lt;/h3&gt;
      &lt;button id='plusButton' class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'&gt;
        Increment
      &lt;/button&gt;
      &lt;button id='wordButton' class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'&gt;
        Word Change
      &lt;/button&gt;
    &lt;/div&gt;
  \`
}

load(counter, 'Counter')
</code></pre>
<h2>Declarative Props</h2>
<p>We have beem using <code>el</code> to access the component instance (like <code>this</code> in class components). You can also get the props passed to the component using <code>props</code> property.</p>
<p>The following example shows how to use props in a functional component:</p>
<pre><code class="language-javascript">import { load, html } from 'emmy-dom'

function helloWorld({ props }) {
  return html\`&lt;h1&gt;Hello \${props().name()}!&lt;/h1&gt;\`
}

load(helloWorld, 'HelloWorld')
</code></pre>
<h3>Declarative Children</h3>
<p>We can also get the children of the component using <code>children</code> property. The following example shows how to use children in a functional component:</p>
<pre><code class="language-javascript">import { load, html } from 'emmy-dom'

function helloWorld({ children }) {
  return html\`
    &lt;div&gt;
      &lt;a href='#'&gt;\${children()}&lt;/a&gt;
    &lt;/div&gt;
  \`
}

load(helloWorld, 'HelloWorld')
</code></pre>
<h3>Setting Props</h3>
<p>You can set props using the <code>el.props</code> setter. The following example shows how to set props in a functional component:</p>
<pre><code class="language-javascript">import { load, html } from 'emmy-dom'

function helloWorld({ el, props }) {
  el.props = { name: 'World' }
  return html\`&lt;h1&gt;Hello \${props().name()}!&lt;/h1&gt;\`
}

load(helloWorld, 'HelloWorld')
</code></pre>
<p>This do not modify the other props passed to the component. It only adds or modifies the props you set.</p>
<h2>Emmy Router</h2>
<p><span class='bg-yellow-900 text-yellow-300 inline-flex items-center me-2 px-2.5 py-0.5 rounded-full text-xs font-medium w-fit'>Unestable</span></p>
<p>Emmy Router is inspired by React Router. You can use it to create a single page application. The following example shows how to create a single page application with Emmy Router:</p>
<pre><code class="language-javascript">import { load, Router, Route, html } from 'emmy-dom'

load('/home.html', 'Home')
load('/about.html', 'About')

const app = () =&gt; html\`
  &lt;div&gt;
    &lt;Route path='/' component='Home' /&gt;
    &lt;Route path='/about' component='About' /&gt;
    &lt;Router /&gt;
  &lt;/div&gt;
\`

load(app, 'App')
</code></pre>
<p>You can add <code>onclick=route(event)</code> attribute to any anchor tag to navigate to the specified route as a single page application. However, SPA Navigation is <strong>UNESTABLE</strong> and <strong>NOT RECOMMENDED</strong> for production yet.</p>
<hr>
Might be useful to you. Give it a try! 🚀

<ul>
<li><a href="/documentation/cli">Using Emmy.js with create-emmy</a></li>
<li><a href="/documentation/rails">Adding Emmy.js to your Ruby on Rails project 
<img class="inline h-[3rem]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain-wordmark.svg" /></a></li>
<li><a href="/documentation/vite">Adding Emmy.js to your Vite project <img class="inline h-[1.5rem]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" /></a></li>
</ul>
</section>`,rails:`<section class="markdown flex flex-col justify-top items-left text-left p-4 pt-0 mb-4 w-full sm:w-[90%] md:w-[70%] h-fit box-border gap-6"><h1>Adding Emmy.js to your Ruby on Rails project <img class="inline h-[5rem]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain-wordmark.svg" /></h1>
<h2>Quick Start</h2>
<ol>
<li>Install the <code>emmy-dom</code> npm package:</li>
</ol>
<pre><code class="language-bash">npm i emmy-dom
</code></pre>
<ol start="2">
<li>Use importmap to import the <code>emmy-dom</code> package:</li>
</ol>
<pre><code class="language-bash">./bin/importmap pin emmy-dom --download
</code></pre>
<ol start="3">
<li>Create a new file called <code>counter.js</code> in the public/javascripts directory and add the following code:</li>
</ol>
<pre><code class="language-javascript">import { load, html } from 'emmy-dom'

function counter({ el }) {
  const [count, setCount] = el.useState(0)

  el.useEffect(() =&gt; {
    el.querySelector('#increment').addEventListener('click', () =&gt; {
      setCount(count() + 1)
    })
  }, ['didMount'])

  return html\`
    &lt;h1&gt;Counter&lt;/h1&gt;
    &lt;p&gt;Count: \${count()}&lt;/p&gt;
    &lt;button id='increment'&gt;+&lt;/button&gt;
  \`
}

load(counter, 'Counter')
</code></pre>
<p>
  <strong>Note:</strong> This tutorial is under construction. Please check back later.
</p>

<p>That's it! You've successfully added Emmy.js to your Ruby on Rails project. 🚀</p>
<hr>
Might be useful to you. Give it a try! 🚀

<ul>
<li><a href="/documentation">Quick Start with Emmy.js</a></li>
<li><a href="/documentation/cli">Using Emmy.js with create-emmy</a></li>
</ul>
</section>`,ssr:`<section class="markdown flex flex-col justify-top items-left text-left p-4 pt-0 mb-4 w-full sm:w-[90%] md:w-[70%] h-fit box-border gap-6"><h1>Adding Server-Side Rendering (SSR) to your Emmy.js project</h1>
<p>Did you know that you can add Server-Side Rendering (SSR) to your Emmy.js project? 🤯
It is based on the Pre-Rendering engine of <a href="https://github.com/skatejs/skatejs/tree/master/packages/ssr">Skate.js</a> 🪦</p>
<h2>Quick Start</h2>
<ol>
<li>Rename your <code>index.html</code> file to <code>template.html</code>:</li>
</ol>
<pre><code class="language-bash">mv index.html template.html
</code></pre>
<ol start="2">
<li>And in your index.html file, replace the <code>emmy-app</code> tag with <code>{content}</code>:</li>
</ol>
<pre><code class="language-html">...
  &lt;body&gt;
    {content}
    &lt;script type='module' src='./app/index.js'&gt;&lt;/script&gt;
  &lt;/body&gt;
...
</code></pre>
<ol start="3">
<li>Replace the import of <code>Emmy</code> in your components file with the following code:</li>
</ol>
<pre><code class="language-js">import { ... } from 'emmy-dom/server'
</code></pre>
<ol start="4">
<li>Create a new file called <code>main.js</code> in the root of your project:</li>
</ol>
<pre><code class="language-bash">touch main.js
</code></pre>
<ol start="5">
<li>Add the following code to <code>main.js</code>:</li>
</ol>
<pre><code class="language-js">import { build, javascript, Emmy } from 'emmy-dom/server'
import { app, App } from './app/index.js'

build({
  app: App,
  dependencies: javascript\`
    import { load, html, jsx, Router, Route, Emmy, loadGlobalEmmy as lge } from 'emmy-dom'
    lge(\${JSON.stringify(Emmy)})
  \`,
  generators: {
    app
  },
  template: './template.html'
})
</code></pre>
<ol start="6">
<li>Modify your <code>package.json</code> file to include the <code>main.js</code> int the scripts:</li>
</ol>
<pre><code class="language-json">{
  ...
  &quot;scripts&quot;: {
    &quot;dev&quot;: &quot;concurrently --raw 'npm run watch' 'vite'&quot;,
    &quot;build&quot;: &quot;npm run ssr &amp;&amp; vite build&quot;,
    &quot;preview&quot;: &quot;vite preview&quot;,
    &quot;watch&quot;: &quot;watch 'npm run ssr' ./app&quot;,
    &quot;ssr&quot;: &quot;bun main.js&quot;
  }
  ...
}
</code></pre>
<ol start="7">
<li>Install the <code>bun</code> package globally. If you haven't already installed it, run the following command:</li>
</ol>
<pre><code class="language-bash">npm install -g bun
</code></pre>
<ol start="8">
<li>Install the <code>concurrently</code> package as a dev dependency:</li>
</ol>
<pre><code class="language-bash">npm install concurrently -D
</code></pre>
<hr>
Might be useful to you. Give it a try! 🚀

<ul>
<li><a href="/documentation">Quick Start with Emmy.js</a></li>
<li><a href="/documentation/vite">Adding Emmy.js to your Vite project <img class="inline h-[1.5rem]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" /></a></li>
</ul>
</section>`,typescript:`<section class="markdown flex flex-col justify-top items-left text-left p-4 pt-0 mb-4 w-full sm:w-[90%] md:w-[70%] h-fit box-border gap-6"><h1>Adding Typescript to your Emmy.js + Vite project <img class="inline h-[3rem]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" /> <img class="inline h-[3rem] mx-[0.5rem]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" /></h1>
<p>Sometimes, you might want to add TypeScript to your Vite project to improve the quality of your codebase and catch errors early in the development process.
This guide will show you how to add TypeScript to your Emmy.js + Vite project.
TypeScript is a statically typed superset of JavaScript that adds optional types to your code.</p>
<p>This guide is based on Robin Wieruch's <a href="https://www.robinwieruch.de/vite-typescript/">Vite with TypeScript</a> article.</p>
<h2>Quick Start</h2>
<ol>
<li>Install the <code>@typescript-eslint/eslint-plugin</code> and <code>@typescript-eslint/parser</code> packages:</li>
</ol>
<pre><code class="language-bash">npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
</code></pre>
<ol start="2">
<li>Add two TypeScript configuration files; one for the browser environment and one for the Node environment:</li>
</ol>
<pre><code class="language-bash">touch tsconfig.json tsconfig.node.json
</code></pre>
<ol start="3">
<li>In the TypeScript file for the browser environment include the following configuration:</li>
</ol>
<pre><code class="language-json">{
  &quot;compilerOptions&quot;: {
    &quot;target&quot;: &quot;ES2020&quot;,
    &quot;useDefineForClassFields&quot;: true,
    &quot;lib&quot;: [&quot;ES2020&quot;, &quot;DOM&quot;, &quot;DOM.Iterable&quot;],
    &quot;module&quot;: &quot;ESNext&quot;,
    &quot;skipLibCheck&quot;: true,

    /* Bundler mode */
    &quot;moduleResolution&quot;: &quot;bundler&quot;,
    &quot;allowImportingTsExtensions&quot;: true,
    &quot;resolveJsonModule&quot;: true,
    &quot;isolatedModules&quot;: true,
    &quot;noEmit&quot;: true,
    &quot;jsx&quot;: &quot;react-jsx&quot;,

    /* Linting */
    &quot;strict&quot;: true,
    &quot;noUnusedLocals&quot;: true,
    &quot;noUnusedParameters&quot;: true,
    &quot;noFallthroughCasesInSwitch&quot;: true
  },
  &quot;include&quot;: [&quot;src&quot;],
  &quot;references&quot;: [{ &quot;path&quot;: &quot;./tsconfig.node.json&quot; }]
}
</code></pre>
<ol start="4">
<li>Then In the TypeScript file for the Node environment include some more configuration:</li>
</ol>
<pre><code class="language-json">{
  &quot;compilerOptions&quot;: {
    &quot;composite&quot;: true,
    &quot;skipLibCheck&quot;: true,
    &quot;module&quot;: &quot;ESNext&quot;,
    &quot;moduleResolution&quot;: &quot;bundler&quot;,
    &quot;allowSyntheticDefaultImports&quot;: true
  },
  &quot;include&quot;: [&quot;vite.config.ts&quot;]
}
</code></pre>
<ol start="5">
<li>Next, rename all JavaScript files (.js) to TypeScript files (.ts).</li>
</ol>
<pre><code class="language-bash">mv src/main.js src/main.ts
mv src/App.js src/App.ts
</code></pre>
<ol start="6">
<li>And in your index.html file, reference the new TypeScript file instead of a JavaScript file:</li>
</ol>
<pre><code class="language-html">...
  &lt;body&gt;
    &lt;emmy-app&gt;&lt;/emmy-app&gt;
    &lt;script type='module' src='./app/index.ts'&gt;&lt;/script&gt;
  &lt;/body&gt;
...
</code></pre>
<ol start="8">
<li>If you are using Tailwind CSS 3 with TypeScript, you need to modify the <code>tailwind.config.js</code> file to include the TypeScript file extensions:</li>
</ol>
<pre><code class="language-javascript">const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/**/*.{html,js,ts}',
    './*.html',
    './styles/*.css',
    './public/*.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var']
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    
    require('@tailwindcss/typography'),
    
  ]
}
</code></pre>
<hr>
Might be useful to you. Give it a try! 🚀

<ul>
<li><a href="/documentation">Quick Start with Emmy.js</a></li>
<li><a href="/documentation/vite">Adding Emmy.js to your Vite project <img class="inline h-[1.5rem]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" /></a></li>
<li><a href="/documentation/ssr">Adding Server-Side Rendering to your Vite project <img class="inline h-[1.5rem]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" /></a></li>
</ul>
</section>`,vite:`<section class="markdown flex flex-col justify-top items-left text-left p-4 pt-0 mb-4 w-full sm:w-[90%] md:w-[70%] h-fit box-border gap-6"><h1>Adding Emmy.js to your Vite project <img class="inline h-[3rem]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" /></h1>
<h2>Quick Start</h2>
<ol>
<li>Install the <code>emmy-dom</code> npm package:</li>
</ol>
<pre><code class="language-bash">npm i emmy-dom
</code></pre>
<ol start="2">
<li>If you are using a base path in your Vite project, you will need to add the following to your <code>vite.config.js</code> file:</li>
</ol>
<pre><code class="language-javascript">export default {
  base: '/your-base-path/'
}
</code></pre>
<p>This way, apps hosted in url paths like <code>https://example.com/your-base-path/</code> will work properly. If you are not using a base path, you can skip this step.</p>
<ol start="3">
<li>Create a new file called <code>counter.js</code> and add the following code:</li>
</ol>
<pre><code class="language-javascript">import { load, html } from 'emmy-dom'

function counter({ el }) {
  const [count, setCount] = el.useState(0)

  el.useEffect(() =&gt; {
    el.querySelector('#increment').addEventListener('click', () =&gt; {
      setCount(count() + 1)
    })
  }, ['didMount'])

  return html\`
    &lt;h1&gt;Counter&lt;/h1&gt;
    &lt;p&gt;Count: \${count()}&lt;/p&gt;
    &lt;button id='increment'&gt;+&lt;/button&gt;
  \`
}

load(counter, 'Counter')
</code></pre>
<ol start="4">
<li>Add the following code to your <code>index.html</code> file:</li>
</ol>
<pre><code class="language-html">...
  &lt;body&gt;
    ...
    &lt;emmy-counter&gt;&lt;/emmy-counter&gt;
    ...
    &lt;script type='module' src='./counter.js'&gt;&lt;/script&gt;
  &lt;/body&gt;
...
</code></pre>
<ol start="5">
<li>Run your Vite project:</li>
</ol>
<pre><code class="language-bash">npm run dev
</code></pre>
<ol start="6">
<li>Open your browser and navigate to <code>http://localhost:3000</code>. You should see a counter that increments when you click the <code>+</code> button.</li>
</ol>
<p>That's it! You've successfully added Emmy.js to your Vite project. 🚀</p>
<h2>Hosting on GitHub Pages</h2>
<p>If you are hosting your Vite project on GitHub Pages, SPA routing might not work properly. No worries! You can mitigate this by adding the following code to your <code>vite.config.js</code> file:</p>
<pre><code class="language-javascript">import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'), // your entry file
        about: resolve(__dirname, 'index.html'), // other pages like about, contact, etc.
        contact: resolve(__dirname, 'index.html')
        ...
      }
    }
  }
})
</code></pre>
<p>This will ensure that all your pages are served the same <code>index.html</code> file. Nevertheless, when the javascript is not loaded, the GitHub Pages server will return a 404 error.</p>
<p>We encourage you to use other hosting services which are more SPA-friendly.</p>
<hr>
Might be useful to you. Give it a try! 🚀

<ul>
<li><a href="/documentation">Quick Start with Emmy.js</a></li>
<li><a href="/documentation/cli">Using Emmy.js with create-emmy</a></li>
</ul>
</section>`},markdownRoutes:`<Route href='/documentation/cli' to='Cli'></Route>
<Route href='/documentation' to='Index'></Route>
<Route href='/documentation/rails' to='Rails'></Route>
<Route href='/documentation/ssr' to='Ssr'></Route>
<Route href='/documentation/typescript' to='Typescript'></Route>
<Route href='/documentation/vite' to='Vite'></Route>`});Me({markdown:{cli:`<section class="markdown flex flex-col justify-top items-left text-left p-4 pt-0 mb-4 w-full sm:w-[90%] md:w-[70%] h-fit box-border gap-6"><h1>Using Emmy.js with create-emmy</h1>
<h2>What is create-emmy?</h2>
<p><code>create-emmy</code> is a command-line interface (CLI) for creating Emmy.js applications. It is a tool that helps you to create a new Emmy.js app with a single command.</p>
<p><a href="https://www.youtube.com/watch?v=rOxAJ9c068c">You can see a tutorial on how to use create-emmy here</a></p>
<p>
  <strong>Note:</strong> This tutorial is under construction. Please come back later.
</p>

<h2>Quick Start</h2>
<p>That's it! You've successfully used Emmy.js with the command-line interface (CLI) <code>create-emmy</code>. 🚀</p>
<hr>
Might be useful to you. Give it a try! 🚀

<ul>
<li><a href="/documentation">Quick Start with Emmy.js</a></li>
</ul>
</section>`,index:`<section class="markdown flex flex-col justify-top items-left text-left p-4 pt-0 mb-4 w-full sm:w-[90%] md:w-[70%] h-fit box-border gap-6"><h1>Quick Start with Emmy.js</h1>
<p>Emmy.js is a JavaScript library for building user interfaces using functional web components. Inspired by React.js, it uses the platform's native APIs to render components, in a declarative way.</p>
<p>It's core library <code>emmy-dom</code> allows you to create components using functional components, class components, and page components. It also includes hooks and a router to create single page applications.</p>
<h2>Functional Components</h2>
<p>You can use functional components to create components without classes. Functional components are just functions that return a HTML code or a function that returns HTML code. The following example shows how to create a functional component:</p>
<pre><code class="language-javascript">import { load, html } from 'emmy-dom'

function helloWorld() {
  return html\`&lt;h1&gt;Hello World!&lt;/h1&gt;\`
}

load(helloWorld, 'HelloWorld')
</code></pre>
<h2>Page Components</h2>
<p><span class='bg-yellow-900 text-yellow-300 inline-flex items-center me-2 px-2.5 py-0.5 rounded-full text-xs font-medium w-fit'>Unestable</span><span class='bg-blue-900 text-blue-300 inline-flex items-center me-2 px-2.5 py-0.5 rounded-full text-xs font-medium w-fit'>Node 18.x and beyond | Requires Fetch API</span></p>
<p>You can use page components to create components that are rendered only once, from a html file. The following example shows how to create a page component:</p>
<pre><code class="language-html">&lt;!-- home.html --&gt;
&lt;h1&gt;Hello World!&lt;/h1&gt;
</code></pre>
<pre><code class="language-javascript">import { load } from 'emmy-dom'

await load('/home.html', 'Home')
</code></pre>
<h2>Class Components</h2>
<p>You can use class components to create components with classes. The following example shows how to create a class component:</p>
<h3>Light Components</h3>
<pre><code class="language-javascript">import { LightComponent, launch, html } from 'emmy-dom'

class HelloWorld extends LightComponent {
  constructor() {
    super()
    this.render(html\`&lt;h1&gt;Hello World!&lt;/h1&gt;\`)
  }
}

launch(HelloWorld, 'HelloWorld')
</code></pre>
<h3>Shadow Components</h3>
<pre><code class="language-javascript">import { Component, launch, html } from 'emmy-dom'

class HelloWorld extends Component {
  constructor() {
    super()
    this.render(html\`&lt;h1&gt;Hello World!&lt;/h1&gt;\`)
  }
}

launch(HelloWorld, 'HelloWorld')
</code></pre>
<h2>Emmy Hooks</h2>
<p>Emmy Hooks are inspired by React Hooks. You can use them to add state to your functional components without manually managing the <code>state</code> property. </p>
<h3>useState</h3>
<pre><code class="language-javascript">import { load, html } from 'emmy-dom'

function counter({ el }) {
  const [count, setCount] = el.useState(0)

  el.useEffect(() =&gt; {
    el.querySelector('#increment').addEventListener('click', () =&gt; {
      setCount(count() + 1)
    })
  }, ['didMount'])

  return () =&gt; html\`
    &lt;div&gt;
      &lt;h1&gt;Count: \${count()}&lt;/h1&gt;
      &lt;button id='increment'&gt;+&lt;/button&gt;
    &lt;/div&gt;
  \`
}

load(counter, 'Counter')
</code></pre>
<h3>useEffect</h3>
<pre><code class="language-javascript">import { load, html } from 'emmy-dom'

function counter({ el }) {
  const [count, setCount] = useState(0)

  el.useEffect(() =&gt; {
    el.querySelector('#increment').addEventListener('click', () =&gt; {
      setCount(count() + 1)
    })
  }, ['didMount'])

  el.useEffect(() =&gt; {
    console.log('Count changed to', count())
  }, [count])

  return () =&gt; html\`
    &lt;div&gt;
      &lt;h1&gt;Count: \${count()}&lt;/h1&gt;
      &lt;button id='increment'&gt;+&lt;/button&gt;
    &lt;/div&gt;
  \`
}

load(counter, 'Counter')
</code></pre>
<h2>Why Functional Components?</h2>
<p>Functional components are easier to write than class components. For example, the following class component:</p>
<pre><code class="language-javascript">import { LightComponent, launch, html } from 'emmy-dom'

class OldCounter extends LightComponent {
  constructor() {
    super()

    this.setAttribute('counter', 0)
    this.setAttribute('word', 'a')

    this.render(html\`
      &lt;div class='flex flex-col justify-center items-center space-y-3 text-center w-full h-full'&gt;
        &lt;h1 class='text-3xl font-bold'&gt;Counter&lt;/h1&gt;
        &lt;h3 class='text-3xl font-bold' id='counter'&gt;\${this.getAttribute('counter')}&lt;/h3&gt;
        &lt;h3 class='text-3xl font-bold' id='word'&gt;\${this.getAttribute('word')}&lt;/h3&gt;
        &lt;button id='plusButton' class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'&gt;
          Increment
        &lt;/button&gt;
        &lt;button id='wordButton' class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'&gt;
          Word Change
        &lt;/button&gt;
      &lt;/div&gt;
    \`, (component) =&gt; {
      component.querySelector('#plusButton').addEventListener('click', () =&gt; {
        componentsetAttribute('counter', parseInt(component.getAttribute('counter')) + 1)
      })
      component.querySelector('#wordButton').addEventListener('click', () =&gt; {
        component.setAttribute('word', 'a' + component.getAttribute('word'))
      })
    })
  }

  static get observedAttributes() {
    return ['counter', 'word']
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'counter') {
      this.$('#counter').innerHTML = newValue
    }
    else if (name === 'word') {
      this.$('#word').innerHTML = newValue
    }
  }
}

launch(OldCounter, 'OldCounter')
</code></pre>
<p>can be written as the following functional component:</p>
<pre><code class="language-javascript">import { load, html } from 'emmy-dom'

function counter ({ el }) {
  const [count, setCount] = el.useState(0)
  const [word, setWord] = el.useState('a')

  el.useEffect(() =&gt; {
    const handleClick = () =&gt; setCount(count() + 1)
    el.querySelector('#plusButton').addEventListener('click', handleClick)

    const handleWord = () =&gt; setWord('a' + word())
    el.querySelector('#wordButton').addEventListener('click', handleWord)
  }, ['didMount'])

  return () =&gt; html\`
    &lt;div class='flex flex-col justify-center items-center space-y-3 text-center w-full h-full'&gt;
      &lt;h1 class='text-3xl font-bold'&gt;Counter&lt;/h1&gt;
      &lt;h3 class='text-3xl font-bold'&gt;\${count()}&lt;/h3&gt;
      &lt;h3 class='text-3xl font-bold'&gt;\${word()}&lt;/h3&gt;
      &lt;button id='plusButton' class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'&gt;
        Increment
      &lt;/button&gt;
      &lt;button id='wordButton' class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'&gt;
        Word Change
      &lt;/button&gt;
    &lt;/div&gt;
  \`
}

load(counter, 'Counter')
</code></pre>
<h2>Declarative Props</h2>
<p>We have beem using <code>el</code> to access the component instance (like <code>this</code> in class components). You can also get the props passed to the component using <code>props</code> property.</p>
<p>The following example shows how to use props in a functional component:</p>
<pre><code class="language-javascript">import { load, html } from 'emmy-dom'

function helloWorld({ props }) {
  return html\`&lt;h1&gt;Hello \${props().name()}!&lt;/h1&gt;\`
}

load(helloWorld, 'HelloWorld')
</code></pre>
<h3>Declarative Children</h3>
<p>We can also get the children of the component using <code>children</code> property. The following example shows how to use children in a functional component:</p>
<pre><code class="language-javascript">import { load, html } from 'emmy-dom'

function helloWorld({ children }) {
  return html\`
    &lt;div&gt;
      &lt;a href='#'&gt;\${children()}&lt;/a&gt;
    &lt;/div&gt;
  \`
}

load(helloWorld, 'HelloWorld')
</code></pre>
<h3>Setting Props</h3>
<p>You can set props using the <code>el.props</code> setter. The following example shows how to set props in a functional component:</p>
<pre><code class="language-javascript">import { load, html } from 'emmy-dom'

function helloWorld({ el, props }) {
  el.props = { name: 'World' }
  return html\`&lt;h1&gt;Hello \${props().name()}!&lt;/h1&gt;\`
}

load(helloWorld, 'HelloWorld')
</code></pre>
<p>This do not modify the other props passed to the component. It only adds or modifies the props you set.</p>
<h2>Emmy Router</h2>
<p><span class='bg-yellow-900 text-yellow-300 inline-flex items-center me-2 px-2.5 py-0.5 rounded-full text-xs font-medium w-fit'>Unestable</span></p>
<p>Emmy Router is inspired by React Router. You can use it to create a single page application. The following example shows how to create a single page application with Emmy Router:</p>
<pre><code class="language-javascript">import { load, Router, Route, html } from 'emmy-dom'

load('/home.html', 'Home')
load('/about.html', 'About')

const app = () =&gt; html\`
  &lt;div&gt;
    &lt;Route path='/' component='Home' /&gt;
    &lt;Route path='/about' component='About' /&gt;
    &lt;Router /&gt;
  &lt;/div&gt;
\`

load(app, 'App')
</code></pre>
<p>You can add <code>onclick=route(event)</code> attribute to any anchor tag to navigate to the specified route as a single page application. However, SPA Navigation is <strong>UNESTABLE</strong> and <strong>NOT RECOMMENDED</strong> for production yet.</p>
<hr>
Might be useful to you. Give it a try! 🚀

<ul>
<li><a href="/documentation/cli">Using Emmy.js with create-emmy</a></li>
<li><a href="/documentation/rails">Adding Emmy.js to your Ruby on Rails project 
<img class="inline h-[3rem]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain-wordmark.svg" /></a></li>
<li><a href="/documentation/vite">Adding Emmy.js to your Vite project <img class="inline h-[1.5rem]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" /></a></li>
</ul>
</section>`,rails:`<section class="markdown flex flex-col justify-top items-left text-left p-4 pt-0 mb-4 w-full sm:w-[90%] md:w-[70%] h-fit box-border gap-6"><h1>Adding Emmy.js to your Ruby on Rails project <img class="inline h-[5rem]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain-wordmark.svg" /></h1>
<h2>Quick Start</h2>
<ol>
<li>Install the <code>emmy-dom</code> npm package:</li>
</ol>
<pre><code class="language-bash">npm i emmy-dom
</code></pre>
<ol start="2">
<li>Use importmap to import the <code>emmy-dom</code> package:</li>
</ol>
<pre><code class="language-bash">./bin/importmap pin emmy-dom --download
</code></pre>
<ol start="3">
<li>Create a new file called <code>counter.js</code> in the public/javascripts directory and add the following code:</li>
</ol>
<pre><code class="language-javascript">import { load, html } from 'emmy-dom'

function counter({ el }) {
  const [count, setCount] = el.useState(0)

  el.useEffect(() =&gt; {
    el.querySelector('#increment').addEventListener('click', () =&gt; {
      setCount(count() + 1)
    })
  }, ['didMount'])

  return html\`
    &lt;h1&gt;Counter&lt;/h1&gt;
    &lt;p&gt;Count: \${count()}&lt;/p&gt;
    &lt;button id='increment'&gt;+&lt;/button&gt;
  \`
}

load(counter, 'Counter')
</code></pre>
<p>
  <strong>Note:</strong> This tutorial is under construction. Please check back later.
</p>

<p>That's it! You've successfully added Emmy.js to your Ruby on Rails project. 🚀</p>
<hr>
Might be useful to you. Give it a try! 🚀

<ul>
<li><a href="/documentation">Quick Start with Emmy.js</a></li>
<li><a href="/documentation/cli">Using Emmy.js with create-emmy</a></li>
</ul>
</section>`,ssr:`<section class="markdown flex flex-col justify-top items-left text-left p-4 pt-0 mb-4 w-full sm:w-[90%] md:w-[70%] h-fit box-border gap-6"><h1>Adding Server-Side Rendering (SSR) to your Emmy.js project</h1>
<p>Did you know that you can add Server-Side Rendering (SSR) to your Emmy.js project? 🤯
It is based on the Pre-Rendering engine of <a href="https://github.com/skatejs/skatejs/tree/master/packages/ssr">Skate.js</a> 🪦</p>
<h2>Quick Start</h2>
<ol>
<li>Rename your <code>index.html</code> file to <code>template.html</code>:</li>
</ol>
<pre><code class="language-bash">mv index.html template.html
</code></pre>
<ol start="2">
<li>And in your index.html file, replace the <code>emmy-app</code> tag with <code>{content}</code>:</li>
</ol>
<pre><code class="language-html">...
  &lt;body&gt;
    {content}
    &lt;script type='module' src='./app/index.js'&gt;&lt;/script&gt;
  &lt;/body&gt;
...
</code></pre>
<ol start="3">
<li>Replace the import of <code>Emmy</code> in your components file with the following code:</li>
</ol>
<pre><code class="language-js">import { ... } from 'emmy-dom/server'
</code></pre>
<ol start="4">
<li>Create a new file called <code>main.js</code> in the root of your project:</li>
</ol>
<pre><code class="language-bash">touch main.js
</code></pre>
<ol start="5">
<li>Add the following code to <code>main.js</code>:</li>
</ol>
<pre><code class="language-js">import { build, javascript, Emmy } from 'emmy-dom/server'
import { app, App } from './app/index.js'

build({
  app: App,
  dependencies: javascript\`
    import { load, html, jsx, Router, Route, Emmy, loadGlobalEmmy as lge } from 'emmy-dom'
    lge(\${JSON.stringify(Emmy)})
  \`,
  generators: {
    app
  },
  template: './template.html'
})
</code></pre>
<ol start="6">
<li>Modify your <code>package.json</code> file to include the <code>main.js</code> int the scripts:</li>
</ol>
<pre><code class="language-json">{
  ...
  &quot;scripts&quot;: {
    &quot;dev&quot;: &quot;concurrently --raw 'npm run watch' 'vite'&quot;,
    &quot;build&quot;: &quot;npm run ssr &amp;&amp; vite build&quot;,
    &quot;preview&quot;: &quot;vite preview&quot;,
    &quot;watch&quot;: &quot;watch 'npm run ssr' ./app&quot;,
    &quot;ssr&quot;: &quot;bun main.js&quot;
  }
  ...
}
</code></pre>
<ol start="7">
<li>Install the <code>bun</code> package globally. If you haven't already installed it, run the following command:</li>
</ol>
<pre><code class="language-bash">npm install -g bun
</code></pre>
<ol start="8">
<li>Install the <code>concurrently</code> package as a dev dependency:</li>
</ol>
<pre><code class="language-bash">npm install concurrently -D
</code></pre>
<hr>
Might be useful to you. Give it a try! 🚀

<ul>
<li><a href="/documentation">Quick Start with Emmy.js</a></li>
<li><a href="/documentation/vite">Adding Emmy.js to your Vite project <img class="inline h-[1.5rem]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" /></a></li>
</ul>
</section>`,typescript:`<section class="markdown flex flex-col justify-top items-left text-left p-4 pt-0 mb-4 w-full sm:w-[90%] md:w-[70%] h-fit box-border gap-6"><h1>Adding Typescript to your Emmy.js + Vite project <img class="inline h-[3rem]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" /> <img class="inline h-[3rem] mx-[0.5rem]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" /></h1>
<p>Sometimes, you might want to add TypeScript to your Vite project to improve the quality of your codebase and catch errors early in the development process.
This guide will show you how to add TypeScript to your Emmy.js + Vite project.
TypeScript is a statically typed superset of JavaScript that adds optional types to your code.</p>
<p>This guide is based on Robin Wieruch's <a href="https://www.robinwieruch.de/vite-typescript/">Vite with TypeScript</a> article.</p>
<h2>Quick Start</h2>
<ol>
<li>Install the <code>@typescript-eslint/eslint-plugin</code> and <code>@typescript-eslint/parser</code> packages:</li>
</ol>
<pre><code class="language-bash">npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
</code></pre>
<ol start="2">
<li>Add two TypeScript configuration files; one for the browser environment and one for the Node environment:</li>
</ol>
<pre><code class="language-bash">touch tsconfig.json tsconfig.node.json
</code></pre>
<ol start="3">
<li>In the TypeScript file for the browser environment include the following configuration:</li>
</ol>
<pre><code class="language-json">{
  &quot;compilerOptions&quot;: {
    &quot;target&quot;: &quot;ES2020&quot;,
    &quot;useDefineForClassFields&quot;: true,
    &quot;lib&quot;: [&quot;ES2020&quot;, &quot;DOM&quot;, &quot;DOM.Iterable&quot;],
    &quot;module&quot;: &quot;ESNext&quot;,
    &quot;skipLibCheck&quot;: true,

    /* Bundler mode */
    &quot;moduleResolution&quot;: &quot;bundler&quot;,
    &quot;allowImportingTsExtensions&quot;: true,
    &quot;resolveJsonModule&quot;: true,
    &quot;isolatedModules&quot;: true,
    &quot;noEmit&quot;: true,
    &quot;jsx&quot;: &quot;react-jsx&quot;,

    /* Linting */
    &quot;strict&quot;: true,
    &quot;noUnusedLocals&quot;: true,
    &quot;noUnusedParameters&quot;: true,
    &quot;noFallthroughCasesInSwitch&quot;: true
  },
  &quot;include&quot;: [&quot;src&quot;],
  &quot;references&quot;: [{ &quot;path&quot;: &quot;./tsconfig.node.json&quot; }]
}
</code></pre>
<ol start="4">
<li>Then In the TypeScript file for the Node environment include some more configuration:</li>
</ol>
<pre><code class="language-json">{
  &quot;compilerOptions&quot;: {
    &quot;composite&quot;: true,
    &quot;skipLibCheck&quot;: true,
    &quot;module&quot;: &quot;ESNext&quot;,
    &quot;moduleResolution&quot;: &quot;bundler&quot;,
    &quot;allowSyntheticDefaultImports&quot;: true
  },
  &quot;include&quot;: [&quot;vite.config.ts&quot;]
}
</code></pre>
<ol start="5">
<li>Next, rename all JavaScript files (.js) to TypeScript files (.ts).</li>
</ol>
<pre><code class="language-bash">mv src/main.js src/main.ts
mv src/App.js src/App.ts
</code></pre>
<ol start="6">
<li>And in your index.html file, reference the new TypeScript file instead of a JavaScript file:</li>
</ol>
<pre><code class="language-html">...
  &lt;body&gt;
    &lt;emmy-app&gt;&lt;/emmy-app&gt;
    &lt;script type='module' src='./app/index.ts'&gt;&lt;/script&gt;
  &lt;/body&gt;
...
</code></pre>
<ol start="8">
<li>If you are using Tailwind CSS 3 with TypeScript, you need to modify the <code>tailwind.config.js</code> file to include the TypeScript file extensions:</li>
</ol>
<pre><code class="language-javascript">const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/**/*.{html,js,ts}',
    './*.html',
    './styles/*.css',
    './public/*.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var']
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    
    require('@tailwindcss/typography'),
    
  ]
}
</code></pre>
<hr>
Might be useful to you. Give it a try! 🚀

<ul>
<li><a href="/documentation">Quick Start with Emmy.js</a></li>
<li><a href="/documentation/vite">Adding Emmy.js to your Vite project <img class="inline h-[1.5rem]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" /></a></li>
<li><a href="/documentation/ssr">Adding Server-Side Rendering to your Vite project <img class="inline h-[1.5rem]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" /></a></li>
</ul>
</section>`,vite:`<section class="markdown flex flex-col justify-top items-left text-left p-4 pt-0 mb-4 w-full sm:w-[90%] md:w-[70%] h-fit box-border gap-6"><h1>Adding Emmy.js to your Vite project <img class="inline h-[3rem]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" /></h1>
<h2>Quick Start</h2>
<ol>
<li>Install the <code>emmy-dom</code> npm package:</li>
</ol>
<pre><code class="language-bash">npm i emmy-dom
</code></pre>
<ol start="2">
<li>If you are using a base path in your Vite project, you will need to add the following to your <code>vite.config.js</code> file:</li>
</ol>
<pre><code class="language-javascript">export default {
  base: '/your-base-path/'
}
</code></pre>
<p>This way, apps hosted in url paths like <code>https://example.com/your-base-path/</code> will work properly. If you are not using a base path, you can skip this step.</p>
<ol start="3">
<li>Create a new file called <code>counter.js</code> and add the following code:</li>
</ol>
<pre><code class="language-javascript">import { load, html } from 'emmy-dom'

function counter({ el }) {
  const [count, setCount] = el.useState(0)

  el.useEffect(() =&gt; {
    el.querySelector('#increment').addEventListener('click', () =&gt; {
      setCount(count() + 1)
    })
  }, ['didMount'])

  return html\`
    &lt;h1&gt;Counter&lt;/h1&gt;
    &lt;p&gt;Count: \${count()}&lt;/p&gt;
    &lt;button id='increment'&gt;+&lt;/button&gt;
  \`
}

load(counter, 'Counter')
</code></pre>
<ol start="4">
<li>Add the following code to your <code>index.html</code> file:</li>
</ol>
<pre><code class="language-html">...
  &lt;body&gt;
    ...
    &lt;emmy-counter&gt;&lt;/emmy-counter&gt;
    ...
    &lt;script type='module' src='./counter.js'&gt;&lt;/script&gt;
  &lt;/body&gt;
...
</code></pre>
<ol start="5">
<li>Run your Vite project:</li>
</ol>
<pre><code class="language-bash">npm run dev
</code></pre>
<ol start="6">
<li>Open your browser and navigate to <code>http://localhost:3000</code>. You should see a counter that increments when you click the <code>+</code> button.</li>
</ol>
<p>That's it! You've successfully added Emmy.js to your Vite project. 🚀</p>
<h2>Hosting on GitHub Pages</h2>
<p>If you are hosting your Vite project on GitHub Pages, SPA routing might not work properly. No worries! You can mitigate this by adding the following code to your <code>vite.config.js</code> file:</p>
<pre><code class="language-javascript">import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'), // your entry file
        about: resolve(__dirname, 'index.html'), // other pages like about, contact, etc.
        contact: resolve(__dirname, 'index.html')
        ...
      }
    }
  }
})
</code></pre>
<p>This will ensure that all your pages are served the same <code>index.html</code> file. Nevertheless, when the javascript is not loaded, the GitHub Pages server will return a 404 error.</p>
<p>We encourage you to use other hosting services which are more SPA-friendly.</p>
<hr>
Might be useful to you. Give it a try! 🚀

<ul>
<li><a href="/documentation">Quick Start with Emmy.js</a></li>
<li><a href="/documentation/cli">Using Emmy.js with create-emmy</a></li>
</ul>
</section>`},markdownRoutes:`<Route href='/documentation/cli' to='Cli'></Route>
<Route href='/documentation' to='Index'></Route>
<Route href='/documentation/rails' to='Rails'></Route>
<Route href='/documentation/ssr' to='Ssr'></Route>
<Route href='/documentation/typescript' to='Typescript'></Route>
<Route href='/documentation/vite' to='Vite'></Route>`});function Kt(e){return{current:e}}function en({el:e}){return e.className="flex flex-col justify-between items-center text-center w-full gap-6",N`
    <main class='flex flex-col justify-center items-center gap-8 max-w-[80%] lg:max-w-full'>
      <h1 class='text-3xl md:text-5xl drop-shadow-lg font-extrabold text-purple-600 dark:text-purple-300 leading-relaxed'>Our Story</h1>
      <section class='flex flex-col justify-center items-center gap-6 lg:max-w-[70%]'>
        <h2 class='text-2xl drop-shadow-lg font-semibold text-emerald-600 dark:text-emerald-300'>The Beginning</h2>
        <article class='flex flex-col md:flex-row justify-center items-center gap-6'>
          <figure class='w-full flex-col justify-left items-center gap-2 hidden md:flex'>
            <img src='./first-emmyjs.png' alt='First Emmy.js landing page' class='rounded-lg shadow-lg'>
            <figcaption>First Emmy.js landing page</figcaption>
          </figure>
          <div class='flex flex-col items-start gap-2'>
            <p class='text-xl text-left'>
              Emmy.js began as a personal project to create <strong class='drop-shadow-lg font-semibold text-purple-600 dark:text-purple-300'>web components</strong> that are <strong class='drop-shadow-lg font-semibold text-emerald-600 dark:text-emerald-300'>easy to use and understand</strong>.
            </p>
            <p class='text-xl text-left'>
              Inspired by the <strong class='drop-shadow-lg font-semibold text-purple-600 dark:text-purple-300'>simplicity of React</strong> and the power of the platform, Emmy.js was born. As a simple javascript file, emmy-dom started as a way to create web components without the need of complex classes.
            </p>
            <p class='text-xl text-left'>
              The <strong class='drop-shadow-lg font-semibold text-purple-600 dark:text-purple-300'>functional approach</strong> to web components was a hit, and the project grew to be a npm package and a growing community.
          </div>
          <figure class='w-full flex flex-col justify-left items-center gap-2 md:hidden'>
            <img src='./first-emmyjs.png' alt='First Emmy.js landing page' class='rounded-lg shadow-lg'>
            <figcaption>First Emmy.js landing page</figcaption>
          </figure>
        </article>
      </section>
      <section class='flex flex-col justify-center items-center gap-6 lg:max-w-[70%]'>
        <h2 class='text-2xl drop-shadow-lg font-semibold text-emerald-600 dark:text-emerald-300'>The Team</h2>
        <article class='flex flex-col md:flex-row justify-center items-center gap-6'>
          <div class='flex flex-col items-start gap-2'>
            <p class='text-xl text-left'>
              Emmy.js is a project by <a href='https://www.linkedin.com/in/eanorambuena/' target='_blank' rel='noopener noreferrer'>Emmanuel Norambuena</a>, a <strong class='drop-shadow-lg font-semibold text-purple-600 dark:text-purple-300'>software engineer</strong> with a passion for creating simple tools.
            </p>
            <p class='text-xl text-left'>
              Lover of <strong class='drop-shadow-lg font-semibold text-blue-600 dark:text-blue-300'>open source</strong>, <strong class='drop-shadow-lg font-semibold text-emerald-600 dark:text-emerald-300'>sustainability</strong> and <strong class='drop-shadow-lg font-semibold text-purple-600 dark:text-purple-300'>community building</strong>, Emmanuel is always looking for ways to make communities better.
            </p>
            <p class='text-xl text-left'>
              Emmanuel is also the General Manager of <a href='https://osuc.dev' target='_blank' rel='noopener noreferrer'><strong class='drop-shadow-lg font-semibold text-blue-600 dark:text-blue-300'>Open Source eUC</strong></a>, a student community that creates and maintains open source projects for the community.
            </p>
          </div>
          <img src='./eanorambuena.webp' alt='Emmanuel Norambuena' class='w-1/4 rounded-full shadow-lg'>
        </article>
      </section>
    </main>
  `}O(en,"About");document.querySelectorAll("emmy-about").forEach(e=>{e.connectedCallback()});function tn({el:e}){return e.className="flex flex-col justify-space-between gap-2 text-center w-full h-full box-border",N`
    <Header />
    <Route href='/' to='Home' />
    <Route href='/our-story' to='About' />
    <Route href='/getting-started' to='Docs' />
    <Route href='/docs' to='Docs' />
    <Route href='/status' to='Status' />
    ${W.markdownRoutes}
    <Route href='/404' to='Code404' />
    <Router />
    <Footer />
  `}O(tn,"App");document.querySelectorAll("emmy-app").forEach(e=>{e.connectedCallback()});function nn({el:e}){return e.className="flex flex-col justify-center items-center text-center w-full h-fit box-border",N`
    <div class='px-4 mx-auto h-fit' style='top: -1rem; box-sizing: border-box; width: 70%'>
      <div class='bg-gray-100 dark:bg-gray-800 border border-gray-700 rounded-lg p-8 md:p-12 mb-8'>
        <a href='https://www.youtube.com/watch?v=rOxAJ9c068c' class='text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md bg-gray-700 text-red-400 mb-2'>
          <svg class='w-2.5 h-2.5 mr-1.5' aria-hidden='true' fill='currentColor' viewBox='0 0 20 14'>
            <path d='M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z'/>
          </svg>
          Tutorial
        </a>
        <h1 class='text-3xl md:text-5xl font-extrabold mb-2'>
          How to build a website with Emmy.js
        </h1>
        <p class='text-lg font-normal text-gray-700 dark:text-gray-400 mb-6'>
          Emmy.js is a JavaScript library for building user interfaces. It is a lightweight library that is easy to learn and use.
        </p>
        <a href='https://www.youtube.com/watch?v=rOxAJ9c068c' class='inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-900'>
          See the tutorial
          <svg class='w-3.5 h-3.5 ml-2' aria-hidden='true' fill='none' viewBox='0 0 14 10'>
            <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M1 5h12m0 0L9 1m4 4L9 9'/>
          </svg>
        </a>
      </div>
      <div class='grid md:grid-cols-2 h-fit gap-8 mb-[10%]'>
        <div class='bg-gray-100 dark:bg-gray-800 border border-gray-700 rounded-lg p-8 md:p-12'>
          <a href='/documentation' class='text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md bg-gray-700 text-green-400 mb-2'>
            <svg class='w-2.5 h-2.5 mr-1.5' aria-hidden='true' fill='currentColor' viewBox='0 0 18 18'>
              <path d='M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z'/>
            </svg>
            Basics
          </a>
          <h2 class='text-3xl font-extrabold mb-2'>
            The basics of Emmy.js
          </h2>
          <p class='text-lg font-normal text-gray-700 dark:text-gray-400 mb-4'>
            Learn the basics of Emmy.js, including how to create a simple application, using components, and how to work with data.
          </p>
          <a href='/documentation' class='text-blue-500 hover:underline font-medium text-lg inline-flex items-center'>Read more
            <svg class='w-3.5 h-3.5 ml-2' aria-hidden='true' fill='none' viewBox='0 0 14 10'>
            <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M1 5h12m0 0L9 1m4 4L9 9'/>
          </svg>
          </a>
        </div>
        <div class='bg-gray-100 dark:bg-gray-800 border border-gray-700 rounded-lg p-8 md:p-12'>
          <a href='https://www.youtube.com/watch?v=rOxAJ9c068c' class='text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md bg-gray-700 text-purple-400 mb-2'>
            <svg class='w-2.5 h-2.5 mr-1.5' aria-hidden='true' fill='none' viewBox='0 0 20 16'>
              <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15'/>
            </svg>
            Examples
          </a>
          <h2 class='text-3xl font-extrabold mb-2'>
            See Emmy.js in action
          </h2>
          <p class='text-lg font-normal text-gray-700 dark:text-gray-400 mb-4'>
            Explore Emmy.js in action with these examples of Emmy.js applications.
          </p>
          <a href='https://www.youtube.com/watch?v=rOxAJ9c068c' class='text-blue-500 hover:underline font-medium text-lg inline-flex items-center'>Read more
            <svg class='w-3.5 h-3.5 ml-2' aria-hidden='true' fill='none' viewBox='0 0 14 10'>
              <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M1 5h12m0 0L9 1m4 4L9 9'/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  `}O(nn,"Docs");document.querySelectorAll("emmy-docs").forEach(e=>{e.connectedCallback()});function on({el:e}){return e.className="flex flex-col justify-between items-center text-center w-full h-[80dvh] gap-4",N`
    <main class='flex flex-col justify-center items-center gap-6 max-w-sm sm:max-w-md lg:max-w-xl xl:max-w-2xl'>
      <h1 class='text-3xl md:text-4xl lg:text-5xl font-extrabold text-purple-600 dark:text-purple-300 leading-relaxed'>Hello from Emmy.js!</h1>
      <h2 class='text-2xl font-bold text-gray-800 dark:text-gray-200 text-balance'>
        A tiny simple way for building user interfaces using 
        <strong class='text-emerald-600 dark:text-emerald-300'>Functional Web Components</strong>
      </h2>
      <p class='text-xl'>
        Run <code style='font-family: source-code-pro, Menlo, Monaco, Consolas'>
          npm install emmy-dom
        </code> and start building your app!
      </p>
      <a href='/getting-started' class='inline-flex items-center justify-center p-5 text-base font-medium rounded-lg text-gray-500 bg-gray-50 border border-gray-300 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:text-white'>
        <img class='hidden dark:block w-6 h-6 mr-2' src='/logo.png' alt='Emmy.js logo'>
        <img class='dark:hidden w-6 h-6 mr-2' src='/android-chrome-512x512.png' alt='Emmy.js logo'>
        <span class='w-full'>Get started with Emmy.js</span>
        <svg class='w-4 h-4 ml-2' aria-hidden='true' fill='none' viewBox='0 0 14 10'>
            <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M1 5h12m0 0L9 1m4 4L9 9'/>
        </svg>
      </a>
      <Counter />
    </main>
  `}O(on,"Home");document.querySelectorAll("emmy-home").forEach(e=>{e.connectedCallback()});function rn({el:e}){return e.className="flex flex-col justify-center items-center text-center max-w-[90%] lg:max-w-full h-fit box-border",W.markdown.cli}O(rn,"Cli");document.querySelectorAll("emmy-cli").forEach(e=>{e.connectedCallback()});function an({el:e}){return e.className="flex flex-col justify-center items-center text-center max-w-[90%] lg:max-w-full h-fit box-border",W.markdown.index}O(an,"Index");document.querySelectorAll("emmy-index").forEach(e=>{e.connectedCallback()});function sn({el:e}){return e.className="flex flex-col justify-center items-center text-center max-w-[90%] lg:max-w-full h-fit box-border",W.markdown.rails}O(sn,"Rails");document.querySelectorAll("emmy-rails").forEach(e=>{e.connectedCallback()});function ln({el:e}){return e.className="flex flex-col justify-center items-center text-center max-w-[90%] lg:max-w-full h-fit box-border",W.markdown.ssr}O(ln,"Ssr");document.querySelectorAll("emmy-ssr").forEach(e=>{e.connectedCallback()});function un({el:e}){return e.className="flex flex-col justify-center items-center text-center max-w-[90%] lg:max-w-full h-fit box-border",W.markdown.typescript}O(un,"Typescript");document.querySelectorAll("emmy-typescript").forEach(e=>{e.connectedCallback()});function cn({el:e}){return e.className="flex flex-col justify-center items-center text-center max-w-[90%] lg:max-w-full h-fit box-border",W.markdown.vite}O(cn,"Vite");document.querySelectorAll("emmy-vite").forEach(e=>{e.connectedCallback()});function dn({el:e}){return e.className="flex flex-col justify-center items-center text-center w-full h-fit mb-[10%] gap-4",N`
    <h1 class='text-3xl md:text-5xl font-extrabold text-purple-600 dark:text-purple-300 leading-relaxed'>Features Status</h1>
    <ul role='list' class='max-w-lg divide-y divide-gray-200 dark:divide-gray-700'>
      <Row status='stable'>Class components</Row>
      <Row status='stable'>Functional Components</Row>
      <Row status='stable'>Declarative props</Row>
      <Row status='stable'>Emmy Hooks</Row>
      <Row status='stable'>Auto-close tags</Row>
      <Row status='experimental'>JSX in Client Components</Row>
      <Row status='experimental'>Emmy Router: Routes</Row>
      <Row status='unstable'>Emmy Router: SPA Navigation</Row>
      <Row status='unstable'>Prerendering</Row>
      <Row status='planned'>Server-side rendering</Row>
      <Row status='experimental'>CLI create-emmy</Row>
    </ul>
    <h2 class='text-2xl font-bold mt-8'>Statuses legend</h2>
    <ul role='list' class='max-w-lg md:max-w-4xl divide-y divide-gray-200 dark:divide-gray-700'>
      <li class='flex items-center py-2 flex-col md:flex-row'>
        <div class='font-bold flex items-center'>
          <div class='w-4 h-4 rounded-full bg-green-500 mr-2'></div>
          Stable
        </div>
        <span class='ml-2'>No breaking changes expected</span>
      </li>
      <li class='flex items-center py-2 flex-col md:flex-row'>
        <div class='font-bold flex items-center'>
          <div class='w-4 h-4 rounded-full bg-purple-500 mr-2'></div>
          Experimental
        </div>
        <span class='ml-2'>No breaking changes expected, but there is a chance</span>
      </li>
      <li class='flex items-center py-2 flex-col md:flex-row'>
        <div class='font-bold flex items-center'>
          <div class='w-4 h-4 rounded-full bg-yellow-500 mr-2'></div>
          Unstable
        </div>
        <span class='ml-2'>Breaking changes are expected</span>
      </li>
      <li class='flex items-center py-2 flex-col md:flex-row'>
        <div class='font-bold flex items-center'>
          <div class='w-4 h-4 rounded-full bg-blue-500 mr-2'></div>
          Planned
        </div>
        <span class='ml-2'>Not implemented yet</span>
      </li>
    </ul>
    <a href='https://emmyjs.github.io/emmy-dom/' class='text-blue-500 dark:text-blue-400 underline'>
      See the code coverage report for more details
    </a>
  `}O(dn,"Status");document.querySelectorAll("emmy-status").forEach(e=>{e.connectedCallback()});function hn({el:e}){e.className="flex flex-col justify-center items-center space-y-3";const t=Kt(0),n=i=>{Dt({text:`Counter value changed to ${t.current}`,style:{background:"#1F2937",color:"#fff",borderRadius:"10px"},gravity:"bottom",position:i,duration:600}).showToast()},o=()=>{t.current++,n("right")},a=()=>{t.current--,n("left")};return e.useEffect(()=>{e.querySelector("#plusButton").addEventListener("click",o),e.querySelector("#minusButton").addEventListener("click",a)},[]),()=>N`
    <h2 class='text-2xl font-bold'>Counter</h2>
    <p id='counter'>${t.current}</p>
    <div class='flex flex-row justify-center items-center space-x-2'>
      <button id='plusButton' class='font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-50 border border-gray-300 focus:outline-none focus:ring-4 hover:bg-gray-100 focus:ring-gray-300 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>
        +
      </button>
      <button id='minusButton' class='font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-50 border border-gray-300 focus:outline-none focus:ring-4 hover:bg-gray-100 focus:ring-gray-300 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>
        -
      </button>
    </div>
  `}O(hn,"Counter");document.querySelectorAll("emmy-counter").forEach(e=>{e.connectedCallback()});function pn({el:e}){const[t,n]=e.useState(!0);return e.useEffect(()=>{e.querySelector("[data-collapse-toggle]").addEventListener("click",()=>{n(!t())})},[]),e.useEffect(()=>{const o=e.querySelector("#navbar-default");o.setAttribute("aria-expanded",!t()),o.classList=t()?"hidden w-full md:block md:w-auto":"w-full md:block md:w-auto"},[t]),N`
    <nav class='border-gray-200 z-40'>
      <div class='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <a href='https://emmyjs.pages.dev' class='flex items-center'>
          <img class='hidden dark:block h-8 mr-3' src='/logo.png' alt='Emmy.js logo'>
          <img class='dark:hidden h-8 w-8 mr-3' src='/android-chrome-512x512.png' alt='Emmy.js logo'>
          <span class='self-center text-2xl font-semibold whitespace-nowrap'>Emmy.js</span>
        </a>
        <Search />
        <button data-collapse-toggle='navbar-default' type='button' class='inline-flex items-center p-2 w-10 h-10 justify-center text-smrounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600' aria-controls='navbar-default' aria-expanded='false'>
          <span class='sr-only'>Open main menu</span>
          <svg class='w-5 h-5' aria-hidden='true' fill='none' viewBox='0 0 17 14'>
              <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M1 1h15M1 7h15M1 13h15'/>
          </svg>
        </button>
        <div class='hidden w-50 md:block md:w-auto' id='navbar-default' aria-expanded='false'>
          <ul class='font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:md:bg-gray-900 border-gray-700'>
            <li>
              <a href='/' onclick='route(event)' class='block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent' aria-current='page'>Home</a>
            </li>
            <li>
              <!-- /documentation doesn't work properly with onclick='route(event)' -->
              <a href='/documentation' class='block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent'>Docs</a>
            </li>
            <li>
              <a href='/our-story' onclick='route(event)' class='block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent'>Our Story</a>
            </li>
            <li>
              <a href='/status' onclick='route(event)' class='block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent'>Status</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `}O(pn,"Header");document.querySelectorAll("emmy-header").forEach(e=>{e.connectedCallback()});function fn({el:e,props:t}){const{type:n}=t();if(!n())return"";let o={unstable:"bg-yellow-900 text-yellow-300",stable:"bg-green-900 text-green-300",deprecated:"bg-red-900 text-red-300",experimental:"bg-purple-900 text-purple-300",planned:"bg-blue-900 text-blue-300"}[n().trim()];return e.className=`${o} inline-flex items-center me-2 px-2.5 py-0.5 rounded-full text-xs font-medium`,n().charAt(0).toUpperCase()+n().slice(1)}O(fn,"Pill");document.querySelectorAll("emmy-pill").forEach(e=>{e.connectedCallback()});function mn({props:e,children:t}){return N`
    <li class='py-3 sm:py-4 justify-between space-x-3 rtl:space-x-reverse flex items-center gap-5'>
      <p class='text-sm font-semibold text-gray-900 truncate dark:text-white'>
        ${t()}
      </p>
      <Pill type='${e().status()}' />
    </li>
  `}O(mn,"Row");document.querySelectorAll("emmy-row").forEach(e=>{e.connectedCallback()});function gn({el:e}){const[t,n]=e.useState(!1),[o,a]=e.useState([]);return e.useEffect(()=>{let i=new $t({fields:["id","title","content","url"],storeFields:["title","content","url"]});const r=Object.entries(W.markdown??{}).map(([s,l])=>({id:s,title:l.match(/<h1(.*?)>(.*?)<\/h1>/).slice(2).join(""),url:s==="index"?"/documentation":`/documentation/${s}`,content:l}));i.addAll(r),e.querySelector("form").addEventListener("submit",s=>{s.preventDefault();const l=s.target.querySelector("input").value;l&&(a(i.search(l)),o().length===0&&a(r),n(!0))}),e.querySelector("#close-modal").addEventListener("click",()=>n(!1))},[]),()=>N`
    <form class='hidden lg:block'>
      <label for='search' class='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'>Search</label>
      <fieldset class='flex flex-row rounded-lg border border-gray-300 bg-gray-50 hover:bg-gray-100 focus:border-blue-500 dark:text-white dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500'>
        <input type='search' id='search' placeholder='Search documentation...' required class='block px-4 ps-10 text-sm border-none rounded-lg text-gray-900 bg-transparent autofill:bg-transparent hover:bg-gray-100 dark:text-white dark:placeholder-gray-400 dark:hover:bg-gray-700 dark:autofill:bg-transparent' />
        <button type='submit' class='text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4'>
          <svg class='w-4 h-4 text-gray-500 dark:text-gray-400' aria-hidden='true' fill='none' viewBox='0 0 20 20'>
            <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'/>
          </svg>
        </button>
      </fieldset>
    </form>
    <!-- Main modal -->
    <div id='select-modal' tabindex='-1' aria-hidden='${!t()}' class='${t()?"":"hidden"} overflow-y-auto overflow-x-hidden absolute top-50 left-50 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full'>
      <section class='p-4 w-full max-w-md max-h-full'>
        <article class='relative bg-white rounded-lg shadow dark:bg-gray-700'>
          <div class='flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600'>
            <h3 class='text-lg font-semibold text-gray-900 dark:text-white'>
              Search results
            </h3>
            <button type='button' class='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white' data-modal-toggle='select-modal' id='close-modal'>
              <svg class='w-3 h-3' aria-hidden='true' fill='none' viewBox='0 0 14 14'>
                <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'/>
              </svg>
              <span class='sr-only'>Close modal</span>
            </button>
          </div>
          <!-- Modal body -->
          <div class='p-4 md:p-5'>
            <p class='text-gray-500 dark:text-gray-400 mb-4'>${o().length} ${o().length===1?"result":"results"} found</p>
            <ul class='space-y-4 mb-4'>
              ${o().map(i=>N`
                <li>
                  <a href='${i.url}' class='inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500'>                        
                    <div class='block'>
                      <div class='w-full text-lg font-semibold'>${i.title}</div>
                    </div>
                    <svg class='w-4 h-4 ms-3 rtl:rotate-180 text-gray-500 dark:text-gray-400' aria-hidden='true' fill='none' viewBox='0 0 14 10'>
                      <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M1 5h12m0 0L9 1m4 4L9 9'/>
                    </svg>
                  </a>
                </li>
              `).join("")}
            </ul>
          </div>
        </article>
      </section>
    </div>
  `}O(gn,"Search");document.querySelectorAll("emmy-search").forEach(e=>{e.connectedCallback()});function yn({el:e}){return e.className="absolute inset-0 bg-gray-900 bg-opacity-90 flex flex-col justify-center items-center w-full h-full",N`<div class='text-white text-3xl font-bold mb-4'>Under construction \u{1f6a7}</div>`}O(yn,"UnderConstruction");document.querySelectorAll("emmy-underconstruction").forEach(e=>{e.connectedCallback()});function vn({el:e}){return e.className="dark:text-white text-slate-900 text-center p-6 w-full flex justify-center gap-0 sm:justify-between",N`
    <a href='https://github.com/emmyjs/emmyjs' target='_blank' rel='noopener noreferrer' class='inline-block'>
      <svg class='w-4 h-4 mr-2 inline-block' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20'>
        <path fill-rule='evenodd' d='M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z' clip-rule='evenodd'/>
      </svg>
    </a>
    <p>Made with <span class='text-red-500'>&#9829;</span> by <a href='https://www.linkedin.com/in/eanorambuena/' target='_blank' rel='noopener noreferrer'>@eanorambuena</a></p>
  `}O(vn,"Footer");document.querySelectorAll("emmy-footer").forEach(e=>{e.connectedCallback()});function pe(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function bn(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function fe(e,t,n){return t&&bn(e.prototype,t),e}function ke(e){return+e.replace(/px/,"")}function wn(e){var t=window.devicePixelRatio,n=getComputedStyle(e),o=ke(n.getPropertyValue("width")),a=ke(n.getPropertyValue("height"));e.setAttribute("width",(o*t).toString()),e.setAttribute("height",(a*t).toString())}function D(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,o=Math.random()*(t-e)+e;return Math.floor(o*Math.pow(10,n))/Math.pow(10,n)}function Ee(e){return e[D(0,e.length)]}var xn=.00125,Cn=5e-4,jn=9e-4,Sn=1e-5,kn=6,En=80,An=.9,qn=1.7,Fn=.2,Tn=.6,Rn=.03,Ln=.07,Ae=15,qe=82,In=150,On=100,Mn=250,Nn=40,_n=["#fcf403","#62fc03","#f4fc03","#03e7fc","#03fca5","#a503fc","#fc03ad","#fc03c2"];function Fe(e){var t=1920;return Math.log(e)/Math.log(t)}var Te=function(){function e(t){pe(this,e);var n=t.initialPosition,o=t.direction,a=t.confettiRadius,i=t.confettiColors,r=t.emojis,s=t.emojiSize,l=t.canvasWidth,u=D(An,qn,3),c=u*Fe(l);this.confettiSpeed={x:c,y:c},this.finalConfettiSpeedX=D(Fn,Tn,3),this.rotationSpeed=r.length?.01:D(Rn,Ln,3)*Fe(l),this.dragForceCoefficient=D(Cn,jn,6),this.radius={x:a,y:a},this.initialRadius=a,this.rotationAngle=o==="left"?D(0,.2,3):D(-.2,0,3),this.emojiSize=s,this.emojiRotationAngle=D(0,2*Math.PI),this.radiusYUpdateDirection="down";var d=o==="left"?D(qe,Ae)*Math.PI/180:D(-Ae,-qe)*Math.PI/180;this.absCos=Math.abs(Math.cos(d)),this.absSin=Math.abs(Math.sin(d));var h=D(-In,0),p={x:n.x+(o==="left"?-h:h)*this.absCos,y:n.y-h*this.absSin};this.currentPosition=Object.assign({},p),this.initialPosition=Object.assign({},p),this.color=r.length?null:Ee(i),this.emoji=r.length?Ee(r):null,this.createdAt=new Date().getTime(),this.direction=o}return fe(e,[{key:"draw",value:function(n){var o=this.currentPosition,a=this.radius,i=this.color,r=this.emoji,s=this.rotationAngle,l=this.emojiRotationAngle,u=this.emojiSize,c=window.devicePixelRatio;i?(n.fillStyle=i,n.beginPath(),n.ellipse(o.x*c,o.y*c,a.x*c,a.y*c,s,0,2*Math.PI),n.fill()):r&&(n.font="".concat(u,"px serif"),n.save(),n.translate(c*o.x,c*o.y),n.rotate(l),n.textAlign="center",n.fillText(r,0,0),n.restore())}},{key:"updatePosition",value:function(n,o){var a=this.confettiSpeed,i=this.dragForceCoefficient,r=this.finalConfettiSpeedX,s=this.radiusYUpdateDirection,l=this.rotationSpeed,u=this.createdAt,c=this.direction,d=o-u;if(a.x>r&&(this.confettiSpeed.x-=i*n),this.currentPosition.x+=a.x*(c==="left"?-this.absCos:this.absCos)*n,this.currentPosition.y=this.initialPosition.y-a.y*this.absSin*d+xn*Math.pow(d,2)/2,this.rotationSpeed-=this.emoji?1e-4:Sn*n,this.rotationSpeed<0&&(this.rotationSpeed=0),this.emoji){this.emojiRotationAngle+=this.rotationSpeed*n%(2*Math.PI);return}s==="down"?(this.radius.y-=n*l,this.radius.y<=0&&(this.radius.y=0,this.radiusYUpdateDirection="up")):(this.radius.y+=n*l,this.radius.y>=this.initialRadius&&(this.radius.y=this.initialRadius,this.radiusYUpdateDirection="down"))}},{key:"getIsVisibleOnCanvas",value:function(n){return this.currentPosition.y<n+On}}]),e}();function Dn(){var e=document.createElement("canvas");return e.style.position="fixed",e.style.width="100%",e.style.height="100%",e.style.top="0",e.style.left="0",e.style.zIndex="1000",e.style.pointerEvents="none",document.body.appendChild(e),e}function Pn(e){var t=e.confettiRadius,n=t===void 0?kn:t,o=e.confettiNumber,a=o===void 0?e.confettiesNumber||(e.emojis?Nn:Mn):o,i=e.confettiColors,r=i===void 0?_n:i,s=e.emojis,l=s===void 0?e.emojies||[]:s,u=e.emojiSize,c=u===void 0?En:u;return e.emojies&&console.error("emojies argument is deprecated, please use emojis instead"),e.confettiesNumber&&console.error("confettiesNumber argument is deprecated, please use confettiNumber instead"),{confettiRadius:n,confettiNumber:a,confettiColors:r,emojis:l,emojiSize:c}}var Hn=function(){function e(t){var n=this;pe(this,e),this.canvasContext=t,this.shapes=[],this.promise=new Promise(function(o){return n.resolvePromise=o})}return fe(e,[{key:"getBatchCompletePromise",value:function(){return this.promise}},{key:"addShapes",value:function(){var n;(n=this.shapes).push.apply(n,arguments)}},{key:"complete",value:function(){var n;return this.shapes.length?!1:((n=this.resolvePromise)===null||n===void 0||n.call(this),!0)}},{key:"processShapes",value:function(n,o,a){var i=this,r=n.timeDelta,s=n.currentTime;this.shapes=this.shapes.filter(function(l){return l.updatePosition(r,s),l.draw(i.canvasContext),a?l.getIsVisibleOnCanvas(o):!0})}}]),e}(),Wn=function(){function e(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};pe(this,e),this.activeConfettiBatches=[],this.canvas=t.canvas||Dn(),this.canvasContext=this.canvas.getContext("2d"),this.requestAnimationFrameRequested=!1,this.lastUpdated=new Date().getTime(),this.iterationIndex=0,this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}return fe(e,[{key:"loop",value:function(){this.requestAnimationFrameRequested=!1,wn(this.canvas);var n=new Date().getTime(),o=n-this.lastUpdated,a=this.canvas.offsetHeight,i=this.iterationIndex%10===0;this.activeConfettiBatches=this.activeConfettiBatches.filter(function(r){return r.processShapes({timeDelta:o,currentTime:n},a,i),i?!r.complete():!0}),this.iterationIndex++,this.queueAnimationFrameIfNeeded(n)}},{key:"queueAnimationFrameIfNeeded",value:function(n){this.requestAnimationFrameRequested||this.activeConfettiBatches.length<1||(this.requestAnimationFrameRequested=!0,this.lastUpdated=n||new Date().getTime(),requestAnimationFrame(this.loop))}},{key:"addConfetti",value:function(){for(var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=Pn(n),a=o.confettiRadius,i=o.confettiNumber,r=o.confettiColors,s=o.emojis,l=o.emojiSize,u=this.canvas.getBoundingClientRect(),c=u.width,d=u.height,h=d*5/7,p={x:0,y:h},m={x:c,y:h},g=new Hn(this.canvasContext),f=0;f<i/2;f++){var v=new Te({initialPosition:p,direction:"right",confettiRadius:a,confettiColors:r,confettiNumber:i,emojis:s,emojiSize:l,canvasWidth:c}),b=new Te({initialPosition:m,direction:"left",confettiRadius:a,confettiColors:r,confettiNumber:i,emojis:s,emojiSize:l,canvasWidth:c});g.addShapes(v,b)}return this.activeConfettiBatches.push(g),this.queueAnimationFrameIfNeeded(),g.getBatchCompletePromise()}},{key:"clearCanvas",value:function(){this.activeConfettiBatches=[]}},{key:"destroyCanvas",value:function(){this.canvas.remove()}}]),e}();hljs.highlightAll();const zn=new Wn;zn.addConfetti();
