(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();const Q={boxFlex:!0,boxFlexGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,strokeDashoffset:!0,strokeOpacity:!0,strokeWidth:!0};function Ue(n,e){return n+e.charAt(0).toUpperCase()+e.substring(1)}const Ge=["Webkit","ms","Moz","O"];Object.keys(Q).forEach(function(n){Ge.forEach(function(e){Q[Ue(e,n)]=Q[n]})});const Ye=/^ms-/,Je=/([A-Z])/g;function Qe(n){return n.replace(Je,"-$1").toLowerCase()}function Xe(n){return Qe(n).replace(Ye,"-ms-")}const Ze=Array.isArray,pe=Object.keys,Ke=/^(normal|none|(\b(url\([^)]*\)|chapter_counter|attr\([^)]*\)|(no-)?(open|close)-quote|inherit)((\b\s*)|$|\s+))+)$/;function ge(n,e){return!Q[n]&&typeof e=="number"?e=""+e+"px":n==="content"&&!Ke.test(e)&&(e="'"+e.replace(/'/g,"\\'")+"'"),Xe(n)+": "+e+"; "}function et(n){let e="";if(!n||pe(n).length===0)return e;const t=pe(n);for(let r=0,a=t.length;r<a;r++){const i=t[r],o=n[i];if(Ze(o))for(let s=0,l=o.length;s<l;s++)e+=ge(i,o[s]);else e+=ge(i,o)}return e.trim()}var tt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function nt(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var rt=Object.prototype.propertyIsEnumerable;function ot(n){if(n==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(n)}function it(n){var e=Object.getOwnPropertyNames(n);return Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(n))),e.filter(function(t){return rt.call(n,t)})}var at=Object.assign||function(n,e){for(var t,r,a=ot(n),i=1;i<arguments.length;i++){t=arguments[i],r=it(Object(t));for(var o=0;o<r.length;o++)a[r[o]]=t[r[o]]}return a},Y=Array.isArray,st=at,lt=3;function Re(n,e){this.callBefore=e&&e.before||this.noop,this.callAfter=e&&e.after||this.noop,this.callProcess=e&&e.process;var t=this;this.scope=null,this.interpreter=n,this.interpreter.setRenderer(this),this.render=function(a,i,o){if(!a)throw new Error("JSX element is not presented");if(typeof a=="string"?a={tag:a,props:ve(i)?i:null,children:Array.isArray(o)?o:null}:typeof a=="function"&&(a={tag:[a.name||a.displayName||"",a],props:ve(i)?i:null,children:Array.isArray(o)?o:null}),!t.isTagDescriptor(a))throw new Error("Top level element should be a tag or function which returns a tag");return t.scope={},a=t.callBefore(a),t.callProcess?t.callProcess(function(){a=t.renderChild(a)}):a=t.renderChild(a),a=t.callAfter(a),t.scope=null,a}}Re.prototype={renderChild:function(n){return n==null?null:this.isTagDescriptor(n)?this.handleTag(n):n},walkChildren:function(n,e,t){var r=n.length,a=0,i;for(t=t|0;a<r;a++)if(i=n[a],i!=null){if(Y(i)&&t<lt){this.walkChildren(i,e);continue}e(this.renderChild(i))}},handleTag:function(n){var e=n.tag,t=n.props,r=n.children,a,i;if(t=Y(t)?st.apply(null,t):t||null,Y(e)){i=e[1],e=e[0];var o;return this.interpreter.hasCustomOverride(e)?(o=this.interpreter.custom(e,i,t,r),this.check(o,"custom")):o=i(t,r,e),this.renderChild(o)}return t=t&&this.interpreter.props(e,t),this.check(t,"props"),a=this.interpreter.enter(e,t),this.check(a,"enter"),Y(r)&&r.length&&(r=this.interpreter.children(e,r,a),this.check(r,"children"),a=this.handleChildren(e,r,a)),a=this.interpreter.leave(e,a),this.check(a,"leave"),a},handleChildren:function(n,e,t){var r=this;return this.walkChildren(e,function(a){t=r.interpreter.child(n,t,a),r.check(t,"child")}),t},handlePrivimite:function(n){return n},isPrimitive:function(n){switch(typeof n){case"string":case"boolean":case"number":return!0}return!1},isTagDescriptor:function(n){return n&&typeof n=="object"&&"tag"in n&&"props"in n&&"children"in n},check:function(n,e){if(typeof n>"u")throw new Error("Source ["+e+"] returned undefined");return n},noop:function(n){return n}};function ve(n){return typeof n=="object"&&n&&!Y(n)}var ut=Re;function Me(n,e){var t=this;this.name=n,this.tags={},this.renderer=null,e&&Object.keys(e).forEach(function(r){var a=e[r];t.addTagHandler(r,a)})}Me.prototype={addTagHandler:function(n,e){this.tags[n]=e},getHandler:function(n){var e=this.tags[n]||this.tags["*"];if(!e)throw new Error("JSX ["+n+"] is not found and [*] is missing");return e},hasCustomOverride:function(n){var e=this.getHandler(n);return!!e.custom},setRenderer:function(n){this.renderer=n},call:function(n,e){var t=this[n].apply(this,e);return typeof t>"u"&&console.log("Interpreter call ["+n+"] returned undefined"),t},props:function(n,e){var t=this.getHandler(n);return t.props?t.props.call(this.renderer,e,n):e},child:function(n,e,t){var r=this.getHandler(n);return r.child?r.child.call(this.renderer,t,e,n):e},enter:function(n,e){var t=this.getHandler(n);if(!t.enter)throw new Error("JSX Interpreter handler should provide [enter] method");return t.enter.call(this.renderer,n,e)},leave:function(n,e){var t=this.getHandler(n);return t.leave?t.leave.call(this.renderer,e,n):e},custom:function(n,e,t,r){var a=this.getHandler(n);return a.custom.call(this.renderer,e,t,r,n)},children:function(n,e,t){var r=this.getHandler(n);return r.children?r.children.call(this.renderer,e,t,n):e}};var ct=Me,dt=ut,ht=ct,ye={},ft={register:function(e,t){e=e.toLowerCase();var r=new ht(e,t.tags),a=new dt(r,{before:t.before,after:t.after,process:t.process});return ye[e]=a,a},render:function(e,t){if(t=t.toLowerCase(),t=t&&ye[t],!t)throw new Error("Renderer ["+t+"] not found");return t.render(e)}},mt=ft;/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */var pt=/["'&<>]/,gt=vt;function vt(n){var e=""+n,t=pt.exec(e);if(!t)return e;var r,a="",i=0,o=0;for(i=t.index;i<e.length;i++){switch(e.charCodeAt(i)){case 34:r="&quot;";break;case 38:r="&amp;";break;case 39:r="&#39;";break;case 60:r="&lt;";break;case 62:r="&gt;";break;default:continue}o!==i&&(a+=e.substring(o,i)),o=i+1,a+=r}return o!==i?a+e.substring(o,i):a}function Ie(n,e){this.name=n,this.props=e,this.children=[]}Ie.prototype.toString=function(){var n=this.props?" "+this.props:"";return"<"+this.name+n+">"+this.children.join("")+"</"+this.name+">"};var yt=Ie,bt=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],wt=mt,X=gt,se=yt,xt=Object.prototype.hasOwnProperty,Ct=bt.reduce(function(n,e){return n[e]=!0,n},Object.create(null)),kt=wt.register("HTML",{tags:{"*":{enter:function(n,e){if(X(n)!==n)throw new Error("Incorrect tag name: "+n);return new se(n,e)},leave:function(n,e){return n},child:function(n,e){return n==null||(n instanceof se||(n=X(n+"")),e.children.push(n)),e},props:function(n){return Object.keys(n).map(function(e){return St(e,e&&n[e])}).join(" ")},children:function(n,e,t){if(typeof Ct[t.toLowerCase()]<"u")throw new Error("Tag <"+t+" /> cannot have children");return n}}},after:function(n){return n.toString()}}),Et=kt;function St(n,e){return!n||e==null||e instanceof se?"":(n==="className"?n="class":n==="cssFor"?n="for":n=n.toLowerCase(),n==="style"&&(e=jt(e)),typeof e=="string"||(e=JSON.stringify(e)),X(n)+'="'+X(e)+'"')}function jt(n){if(typeof n=="string")return n;var e="";for(var t in n)if(xt.call(n,t)){var r=n[t];t=t.replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()}),t.search(/moz-|webkit-|o-|ms-/)===0&&(t="-"+t),e+=(e?" ":"")+t+": "+r+";"}return e}const At=Et.render;function Ne(n){return n.replace(/<\/?[^>]+>/g,t=>{const r=t.slice(0,-1);if(/^[A-Z]/.test(t.slice(1,-1))){const a=r.split(" ")[0].slice(1),i=r.split(" ").slice(1);return`<emmy-${`${a.toLowerCase()} ${i.join(" ")}`.trim()}>`}else if(/^[A-Z]/.test(t.slice(2,-2)))return`</emmy-${r.split(" ")[0].slice(2).toLocaleLowerCase()}>`;return t}).replace(/<emmy-[^>]+\/>/g,t=>{const r=t.slice(6,-2),a=r.split(" ")[0];return`<emmy-${r.trim()}></emmy-${a}>`})}function Ft(n){const e={};return n.split(";").forEach(t=>{const[r,a]=t.split(":");r&&a&&(e[r.trim()]=a.trim())}),e}function Lt(n){if(typeof n!="string")return et(n);const e=Ft(n);let t="";for(const r in e)e.hasOwnProperty(r)&&(t+=`${r}: ${e[r]}; `);return t.trim()}function U(n){return/^[A-Z]/.test(n)&&(n="emmy-"+n.toLowerCase()),n}const B={},_e=n=>{Object.entries(n).forEach(([e,t])=>{B[e]=t})},_=String.raw,Tt="flex flex-col justify-center items-center space-y-3 text-center w-full h-fit box-border";function Ot(){return globalThis.navigator.userAgent==="Node"||globalThis.hasOwnProperty("process")}function Rt(n){n.useState=Mt.bind(n),n.useEffect=It.bind(n)}function be(n){return n.map(e=>typeof e=="function"?e():e)}function Mt(n){let e=n;return[()=>e,a=>{e=a}]}function It(n,e,t=Ot){if(t()){console.warn("Skipping useEffect on server");return}const r=this.effectCallback;if(!e||e.length===0){this.effectCallback=o=>{r(o),n.call(o,o)};return}let a=be(e);this.effectCallback=o=>{r(o);const s=be(e);JSON.stringify(a)!==JSON.stringify(s)&&(a=s,n.call(o,o))};let i=!1;e.find(o=>{if(typeof o=="string"&&o==="didMount"){const s=this.callback;this.callback=l=>{s.call(l,l),!i&&(i=!0,n.call(l,l))}}return!1})}var De=function(n,e,t,r){function a(i){return i instanceof t?i:new t(function(o){o(i)})}return new(t||(t=Promise))(function(i,o){function s(c){try{u(r.next(c))}catch(d){o(d)}}function l(c){try{u(r.throw(c))}catch(d){o(d)}}function u(c){c.done?i(c.value):a(c.value).then(s,l)}u((r=r.apply(n,e||[])).next())})};class Pe extends HTMLElement{constructor(){super(),this.contentGenerator=()=>"",this.callback=e=>{},this.Style={}}addStyle(e){for(const[t,r]of Object.entries(e))this.Style[t]=Lt(r),t=="this"&&this.setAttribute("style",this.Style[t])}render(e,t){if(typeof e!="function"&&typeof e!="string")try{const r=At(e);console.log(r),this.contentGenerator=()=>r}catch{this.contentGenerator=()=>e}else typeof e!="function"?this.contentGenerator=()=>e:this.contentGenerator=e;t&&typeof t=="function"&&(this.callback=t)}}class Nt extends Pe{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.shadowRoot.innerHTML=Ne(this.contentGenerator(this)),this.callback.call(this,this)}querySelector(e){return this.shadowRoot.querySelector(U(e))}}class ee extends Pe{connectedCallback(){this.innerHTML=Ne(this.contentGenerator(this)),this.callback.call(this,this)}querySelector(e){return HTMLElement.prototype.querySelector.call(this,U(e))}}class we extends ee{constructor(e){super(),this.effectCallback=r=>{},Rt.call(this,this),this.setState({rerenderCount:0});const t=e.call(this,{el:this,props:()=>this.props,children:()=>this.innerHTML});this.render(t)}get props(){return Array.from(this.attributes).reduce((e,t)=>{const r=t.name==="class"?"className":t.name;return Object.assign(Object.assign({},e),{[r]:()=>this.getAttribute(t.name)})},{})}set props(e){for(const[t,r]of Object.entries(e)){if(t==="className"){this.className=r;continue}this.setAttribute(t,r)}}connectedCallback(){super.connectedCallback(),this.effectCallback(this)}static get observedAttributes(){return["state"]}attributeChangedCallback(e,t,r){e==="state"&&this.connectedCallback()}patchState(e){const t=this.state(),r=Object.assign(t,e);this.setState(r)}rerender(){this.patchState({rerenderCount:this.state().rerenderCount+1})}state(){return JSON.parse(this.getAttribute("state").replace(/'/g,'"')||"")}setState(e){this.setAttribute("state",JSON.stringify(e).replace(/"/g,"'"))}querySelector(e){const t=HTMLElement.prototype.querySelector.call(this,U(e));return t.__proto__.addEventListener=(r,a)=>{const i=o=>{a(o),this.rerender()};HTMLElement.prototype.addEventListener.call(t,r,i)},t}}class V extends ee{constructor(){super(),this.render("",()=>{const t="emmy-"+(this.getAttribute("to")||"").toLowerCase(),r=this.getAttribute("href")==="/"?"/root":this.getAttribute("href")||"/404";V.routes[r]=`<${t}></${t}>`})}}V.routes={};class _t extends ee{constructor(){super(),this.className=Tt,this.handleLocation=()=>{const e=window.location.pathname,t=(e==="/"?V.routes["/root"]:V.routes[e])||V.routes["/404"]||_`<h1>404</h1>`;this.innerHTML!==t&&(this.innerHTML=t)},window.route=e=>{e.preventDefault();const t=e.target;window.location.pathname!==t.href&&(window.history.pushState({},"",t.href),this.handleLocation())},window.onpopstate=this.handleLocation,this.render("",()=>this.handleLocation())}}function Z(n,e){return customElements.get(U(e))?(console.warn(`Custom element ${U(e)} already defined`),n):(customElements.define(U(e),n),n)}function Dt(n,e){return De(this,void 0,void 0,function*(){const r=yield(yield fetch(n)).text();return N(()=>r,e)})}function N(n,e){return De(this,void 0,void 0,function*(){if(typeof n=="string")return yield Dt(n,e);try{const t=new n;if(t instanceof Nt||t instanceof ee||t instanceof we)return Z(n,e);throw new Error("Not a valid component")}catch{class r extends we{constructor(){super(n)}}return Z(r,e)}})}Z(V,"Route");Z(_t,"Router");var He={exports:{}};/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */(function(n){(function(e,t){n.exports?n.exports=t():e.Toastify=t()})(tt,function(e){var t=function(o){return new t.lib.init(o)},r="1.12.0";t.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},t.lib=t.prototype={toastify:r,constructor:t,init:function(o){return o||(o={}),this.options={},this.toastElement=null,this.options.text=o.text||t.defaults.text,this.options.node=o.node||t.defaults.node,this.options.duration=o.duration===0?0:o.duration||t.defaults.duration,this.options.selector=o.selector||t.defaults.selector,this.options.callback=o.callback||t.defaults.callback,this.options.destination=o.destination||t.defaults.destination,this.options.newWindow=o.newWindow||t.defaults.newWindow,this.options.close=o.close||t.defaults.close,this.options.gravity=o.gravity==="bottom"?"toastify-bottom":t.defaults.gravity,this.options.positionLeft=o.positionLeft||t.defaults.positionLeft,this.options.position=o.position||t.defaults.position,this.options.backgroundColor=o.backgroundColor||t.defaults.backgroundColor,this.options.avatar=o.avatar||t.defaults.avatar,this.options.className=o.className||t.defaults.className,this.options.stopOnFocus=o.stopOnFocus===void 0?t.defaults.stopOnFocus:o.stopOnFocus,this.options.onClick=o.onClick||t.defaults.onClick,this.options.offset=o.offset||t.defaults.offset,this.options.escapeMarkup=o.escapeMarkup!==void 0?o.escapeMarkup:t.defaults.escapeMarkup,this.options.ariaLive=o.ariaLive||t.defaults.ariaLive,this.options.style=o.style||t.defaults.style,o.backgroundColor&&(this.options.style.background=o.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var o=document.createElement("div");o.className="toastify on "+this.options.className,this.options.position?o.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(o.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):o.className+=" toastify-right",o.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var s in this.options.style)o.style[s]=this.options.style[s];if(this.options.ariaLive&&o.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)o.appendChild(this.options.node);else if(this.options.escapeMarkup?o.innerText=this.options.text:o.innerHTML=this.options.text,this.options.avatar!==""){var l=document.createElement("img");l.src=this.options.avatar,l.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?o.appendChild(l):o.insertAdjacentElement("afterbegin",l)}if(this.options.close===!0){var u=document.createElement("button");u.type="button",u.setAttribute("aria-label","Close"),u.className="toast-close",u.innerHTML="&#10006;",u.addEventListener("click",(function(m){m.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}).bind(this));var c=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&c>360?o.insertAdjacentElement("afterbegin",u):o.appendChild(u)}if(this.options.stopOnFocus&&this.options.duration>0){var d=this;o.addEventListener("mouseover",function(m){window.clearTimeout(o.timeOutValue)}),o.addEventListener("mouseleave",function(){o.timeOutValue=window.setTimeout(function(){d.removeElement(o)},d.options.duration)})}if(typeof this.options.destination<"u"&&o.addEventListener("click",(function(m){m.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}).bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&o.addEventListener("click",(function(m){m.stopPropagation(),this.options.onClick()}).bind(this)),typeof this.options.offset=="object"){var h=a("x",this.options),f=a("y",this.options),p=this.options.position=="left"?h:"-"+h,g=this.options.gravity=="toastify-top"?f:"-"+f;o.style.transform="translate("+p+","+g+")"}return o},showToast:function(){this.toastElement=this.buildToast();var o;if(typeof this.options.selector=="string"?o=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?o=this.options.selector:o=document.body,!o)throw"Root element is not defined";var s=t.defaults.oldestFirst?o.firstChild:o.lastChild;return o.insertBefore(this.toastElement,s),t.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout((function(){this.removeElement(this.toastElement)}).bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(o){o.className=o.className.replace(" on",""),window.setTimeout((function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),o.parentNode&&o.parentNode.removeChild(o),this.options.callback.call(o),t.reposition()}).bind(this),400)}},t.reposition=function(){for(var o={top:15,bottom:15},s={top:15,bottom:15},l={top:15,bottom:15},u=document.getElementsByClassName("toastify"),c,d=0;d<u.length;d++){i(u[d],"toastify-top")===!0?c="toastify-top":c="toastify-bottom";var h=u[d].offsetHeight;c=c.substr(9,c.length-1);var f=15,p=window.innerWidth>0?window.innerWidth:screen.width;p<=360?(u[d].style[c]=l[c]+"px",l[c]+=h+f):i(u[d],"toastify-left")===!0?(u[d].style[c]=o[c]+"px",o[c]+=h+f):(u[d].style[c]=s[c]+"px",s[c]+=h+f)}return this};function a(o,s){return s.offset[o]?isNaN(s.offset[o])?s.offset[o]:s.offset[o]+"px":"0px"}function i(o,s){return!o||typeof s!="string"?!1:!!(o.className&&o.className.trim().split(/\s+/gi).indexOf(s)>-1)}return t.lib.init.prototype=t.lib,t})})(He);var Pt=He.exports;const Ht=nt(Pt);var L=function(){return L=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},L.apply(this,arguments)};function Wt(n,e,t,r){function a(i){return i instanceof t?i:new t(function(o){o(i)})}return new(t||(t=Promise))(function(i,o){function s(c){try{u(r.next(c))}catch(d){o(d)}}function l(c){try{u(r.throw(c))}catch(d){o(d)}}function u(c){c.done?i(c.value):a(c.value).then(s,l)}u((r=r.apply(n,e||[])).next())})}function zt(n,e){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,a,i,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;o&&(o=0,u[0]&&(t=0)),t;)try{if(r=1,a&&(i=u[0]&2?a.return:u[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,u[1])).done)return i;switch(a=0,i&&(u=[u[0]&2,i.value]),u[0]){case 0:case 1:i=u;break;case 4:return t.label++,{value:u[1],done:!1};case 5:t.label++,a=u[1],u=[0];continue;case 7:u=t.ops.pop(),t.trys.pop();continue;default:if(i=t.trys,!(i=i.length>0&&i[i.length-1])&&(u[0]===6||u[0]===2)){t=0;continue}if(u[0]===3&&(!i||u[1]>i[0]&&u[1]<i[3])){t.label=u[1];break}if(u[0]===6&&t.label<i[1]){t.label=i[1],i=u;break}if(i&&t.label<i[2]){t.label=i[2],t.ops.push(u);break}i[2]&&t.ops.pop(),t.trys.pop();continue}u=e.call(n,t)}catch(c){u=[6,c],a=0}finally{r=i=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function w(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],r=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&r>=n.length&&(n=void 0),{value:n&&n[r++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function M(n,e){var t=typeof Symbol=="function"&&n[Symbol.iterator];if(!t)return n;var r=t.call(n),a,i=[],o;try{for(;(e===void 0||e-- >0)&&!(a=r.next()).done;)i.push(a.value)}catch(s){o={error:s}}finally{try{a&&!a.done&&(t=r.return)&&t.call(r)}finally{if(o)throw o.error}}return i}var Vt="ENTRIES",We="KEYS",ze="VALUES",I="",te=function(){function n(e,t){var r=e._tree,a=Array.from(r.keys());this.set=e,this._type=t,this._path=a.length>0?[{node:r,keys:a}]:[]}return n.prototype.next=function(){var e=this.dive();return this.backtrack(),e},n.prototype.dive=function(){if(this._path.length===0)return{done:!0,value:void 0};var e=q(this._path),t=e.node,r=e.keys;if(q(r)===I)return{done:!1,value:this.result()};var a=t.get(q(r));return this._path.push({node:a,keys:Array.from(a.keys())}),this.dive()},n.prototype.backtrack=function(){if(this._path.length!==0){var e=q(this._path).keys;e.pop(),!(e.length>0)&&(this._path.pop(),this.backtrack())}},n.prototype.key=function(){return this.set._prefix+this._path.map(function(e){var t=e.keys;return q(t)}).filter(function(e){return e!==I}).join("")},n.prototype.value=function(){return q(this._path).node.get(I)},n.prototype.result=function(){switch(this._type){case ze:return this.value();case We:return this.key();default:return[this.key(),this.value()]}},n.prototype[Symbol.iterator]=function(){return this},n}(),q=function(n){return n[n.length-1]},Bt=function(n,e,t){var r=new Map;if(e===void 0)return r;for(var a=e.length+1,i=a+t,o=new Uint8Array(i*a).fill(t+1),s=0;s<a;++s)o[s]=s;for(var l=1;l<i;++l)o[l*a]=l;return Ve(n,e,t,r,o,1,a,""),r},Ve=function(n,e,t,r,a,i,o,s){var l,u,c=i*o;try{e:for(var d=w(n.keys()),h=d.next();!h.done;h=d.next()){var f=h.value;if(f===I){var p=a[c-1];p<=t&&r.set(s,[n.get(f),p])}else{for(var g=i,m=0;m<f.length;++m,++g){for(var y=f[m],b=o*g,v=b-o,E=a[b],S=Math.max(0,g-t-1),O=Math.min(o-1,g+t),x=S;x<O;++x){var k=y!==e[x],j=a[v+x]+ +k,A=a[v+x+1]+1,T=a[b+x]+1,C=a[b+x+1]=Math.min(j,A,T);C<E&&(E=C)}if(E>t)continue e}Ve(n.get(f),e,t,r,a,g,o,s+f)}}}catch(R){l={error:R}}finally{try{h&&!h.done&&(u=d.return)&&u.call(d)}finally{if(l)throw l.error}}},ne=function(){function n(e,t){e===void 0&&(e=new Map),t===void 0&&(t=""),this._size=void 0,this._tree=e,this._prefix=t}return n.prototype.atPrefix=function(e){var t,r;if(!e.startsWith(this._prefix))throw new Error("Mismatched prefix");var a=M(K(this._tree,e.slice(this._prefix.length)),2),i=a[0],o=a[1];if(i===void 0){var s=M(de(o),2),l=s[0],u=s[1];try{for(var c=w(l.keys()),d=c.next();!d.done;d=c.next()){var h=d.value;if(h!==I&&h.startsWith(u)){var f=new Map;return f.set(h.slice(u.length),l.get(h)),new n(f,e)}}}catch(p){t={error:p}}finally{try{d&&!d.done&&(r=c.return)&&r.call(c)}finally{if(t)throw t.error}}}return new n(i,e)},n.prototype.clear=function(){this._size=void 0,this._tree.clear()},n.prototype.delete=function(e){return this._size=void 0,$t(this._tree,e)},n.prototype.entries=function(){return new te(this,Vt)},n.prototype.forEach=function(e){var t,r;try{for(var a=w(this),i=a.next();!i.done;i=a.next()){var o=M(i.value,2),s=o[0],l=o[1];e(s,l,this)}}catch(u){t={error:u}}finally{try{i&&!i.done&&(r=a.return)&&r.call(a)}finally{if(t)throw t.error}}},n.prototype.fuzzyGet=function(e,t){return Bt(this._tree,e,t)},n.prototype.get=function(e){var t=le(this._tree,e);return t!==void 0?t.get(I):void 0},n.prototype.has=function(e){var t=le(this._tree,e);return t!==void 0&&t.has(I)},n.prototype.keys=function(){return new te(this,We)},n.prototype.set=function(e,t){if(typeof e!="string")throw new Error("key must be a string");this._size=void 0;var r=re(this._tree,e);return r.set(I,t),this},Object.defineProperty(n.prototype,"size",{get:function(){if(this._size)return this._size;this._size=0;for(var e=this.entries();!e.next().done;)this._size+=1;return this._size},enumerable:!1,configurable:!0}),n.prototype.update=function(e,t){if(typeof e!="string")throw new Error("key must be a string");this._size=void 0;var r=re(this._tree,e);return r.set(I,t(r.get(I))),this},n.prototype.fetch=function(e,t){if(typeof e!="string")throw new Error("key must be a string");this._size=void 0;var r=re(this._tree,e),a=r.get(I);return a===void 0&&r.set(I,a=t()),a},n.prototype.values=function(){return new te(this,ze)},n.prototype[Symbol.iterator]=function(){return this.entries()},n.from=function(e){var t,r,a=new n;try{for(var i=w(e),o=i.next();!o.done;o=i.next()){var s=M(o.value,2),l=s[0],u=s[1];a.set(l,u)}}catch(c){t={error:c}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(t)throw t.error}}return a},n.fromObject=function(e){return n.from(Object.entries(e))},n}(),K=function(n,e,t){var r,a;if(t===void 0&&(t=[]),e.length===0||n==null)return[n,t];try{for(var i=w(n.keys()),o=i.next();!o.done;o=i.next()){var s=o.value;if(s!==I&&e.startsWith(s))return t.push([n,s]),K(n.get(s),e.slice(s.length),t)}}catch(l){r={error:l}}finally{try{o&&!o.done&&(a=i.return)&&a.call(i)}finally{if(r)throw r.error}}return t.push([n,e]),K(void 0,"",t)},le=function(n,e){var t,r;if(e.length===0||n==null)return n;try{for(var a=w(n.keys()),i=a.next();!i.done;i=a.next()){var o=i.value;if(o!==I&&e.startsWith(o))return le(n.get(o),e.slice(o.length))}}catch(s){t={error:s}}finally{try{i&&!i.done&&(r=a.return)&&r.call(a)}finally{if(t)throw t.error}}},re=function(n,e){var t,r,a=e.length;e:for(var i=0;n&&i<a;){try{for(var o=(t=void 0,w(n.keys())),s=o.next();!s.done;s=o.next()){var l=s.value;if(l!==I&&e[i]===l[0]){for(var u=Math.min(a-i,l.length),c=1;c<u&&e[i+c]===l[c];)++c;var d=n.get(l);if(c===l.length)n=d;else{var h=new Map;h.set(l.slice(c),d),n.set(e.slice(i,i+c),h),n.delete(l),n=h}i+=c;continue e}}}catch(p){t={error:p}}finally{try{s&&!s.done&&(r=o.return)&&r.call(o)}finally{if(t)throw t.error}}var f=new Map;return n.set(e.slice(i),f),f}return n},$t=function(n,e){var t=M(K(n,e),2),r=t[0],a=t[1];if(r!==void 0){if(r.delete(I),r.size===0)Be(a);else if(r.size===1){var i=M(r.entries().next().value,2),o=i[0],s=i[1];$e(a,o,s)}}},Be=function(n){if(n.length!==0){var e=M(de(n),2),t=e[0],r=e[1];if(t.delete(r),t.size===0)Be(n.slice(0,-1));else if(t.size===1){var a=M(t.entries().next().value,2),i=a[0],o=a[1];i!==I&&$e(n.slice(0,-1),i,o)}}},$e=function(n,e,t){if(n.length!==0){var r=M(de(n),2),a=r[0],i=r[1];a.set(i+e,t),a.delete(i)}},de=function(n){return n[n.length-1]},G,he="or",qe="and",qt="and_not",Ut=function(){function n(e){if((e==null?void 0:e.fields)==null)throw new Error('MiniSearch: option "fields" must be provided');var t=e.autoVacuum==null||e.autoVacuum===!0?ae:e.autoVacuum;this._options=L(L(L({},ie),e),{autoVacuum:t,searchOptions:L(L({},xe),e.searchOptions||{}),autoSuggestOptions:L(L({},Xt),e.autoSuggestOptions||{})}),this._index=new ne,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldIds={},this._fieldLength=new Map,this._avgFieldLength=[],this._nextId=0,this._storedFields=new Map,this._dirtCount=0,this._currentVacuum=null,this._enqueuedVacuum=null,this._enqueuedVacuumConditions=ce,this.addFields(this._options.fields)}return n.prototype.add=function(e){var t,r,a,i,o,s,l=this._options,u=l.extractField,c=l.tokenize,d=l.processTerm,h=l.fields,f=l.idField,p=u(e,f);if(p==null)throw new Error('MiniSearch: document does not have ID field "'.concat(f,'"'));if(this._idToShortId.has(p))throw new Error("MiniSearch: duplicate ID ".concat(p));var g=this.addDocumentId(p);this.saveStoredFields(g,e);try{for(var m=w(h),y=m.next();!y.done;y=m.next()){var b=y.value,v=u(e,b);if(v!=null){var E=c(v.toString(),b),S=this._fieldIds[b],O=new Set(E).size;this.addFieldLength(g,S,this._documentCount-1,O);try{for(var x=(a=void 0,w(E)),k=x.next();!k.done;k=x.next()){var j=k.value,A=d(j,b);if(Array.isArray(A))try{for(var T=(o=void 0,w(A)),C=T.next();!C.done;C=T.next()){var R=C.value;this.addTerm(S,g,R)}}catch(F){o={error:F}}finally{try{C&&!C.done&&(s=T.return)&&s.call(T)}finally{if(o)throw o.error}}else A&&this.addTerm(S,g,A)}}catch(F){a={error:F}}finally{try{k&&!k.done&&(i=x.return)&&i.call(x)}finally{if(a)throw a.error}}}}}catch(F){t={error:F}}finally{try{y&&!y.done&&(r=m.return)&&r.call(m)}finally{if(t)throw t.error}}},n.prototype.addAll=function(e){var t,r;try{for(var a=w(e),i=a.next();!i.done;i=a.next()){var o=i.value;this.add(o)}}catch(s){t={error:s}}finally{try{i&&!i.done&&(r=a.return)&&r.call(a)}finally{if(t)throw t.error}}},n.prototype.addAllAsync=function(e,t){var r=this;t===void 0&&(t={});var a=t.chunkSize,i=a===void 0?10:a,o={chunk:[],promise:Promise.resolve()},s=e.reduce(function(c,d,h){var f=c.chunk,p=c.promise;return f.push(d),(h+1)%i===0?{chunk:[],promise:p.then(function(){return new Promise(function(g){return setTimeout(g,0)})}).then(function(){return r.addAll(f)})}:{chunk:f,promise:p}},o),l=s.chunk,u=s.promise;return u.then(function(){return r.addAll(l)})},n.prototype.remove=function(e){var t,r,a,i,o,s,l=this._options,u=l.tokenize,c=l.processTerm,d=l.extractField,h=l.fields,f=l.idField,p=d(e,f);if(p==null)throw new Error('MiniSearch: document does not have ID field "'.concat(f,'"'));var g=this._idToShortId.get(p);if(g==null)throw new Error("MiniSearch: cannot remove document with ID ".concat(p,": it is not in the index"));try{for(var m=w(h),y=m.next();!y.done;y=m.next()){var b=y.value,v=d(e,b);if(v!=null){var E=u(v.toString(),b),S=this._fieldIds[b],O=new Set(E).size;this.removeFieldLength(g,S,this._documentCount,O);try{for(var x=(a=void 0,w(E)),k=x.next();!k.done;k=x.next()){var j=k.value,A=c(j,b);if(Array.isArray(A))try{for(var T=(o=void 0,w(A)),C=T.next();!C.done;C=T.next()){var R=C.value;this.removeTerm(S,g,R)}}catch(F){o={error:F}}finally{try{C&&!C.done&&(s=T.return)&&s.call(T)}finally{if(o)throw o.error}}else A&&this.removeTerm(S,g,A)}}catch(F){a={error:F}}finally{try{k&&!k.done&&(i=x.return)&&i.call(x)}finally{if(a)throw a.error}}}}}catch(F){t={error:F}}finally{try{y&&!y.done&&(r=m.return)&&r.call(m)}finally{if(t)throw t.error}}this._storedFields.delete(g),this._documentIds.delete(g),this._idToShortId.delete(p),this._fieldLength.delete(g),this._documentCount-=1},n.prototype.removeAll=function(e){var t,r;if(e)try{for(var a=w(e),i=a.next();!i.done;i=a.next()){var o=i.value;this.remove(o)}}catch(s){t={error:s}}finally{try{i&&!i.done&&(r=a.return)&&r.call(a)}finally{if(t)throw t.error}}else{if(arguments.length>0)throw new Error("Expected documents to be present. Omit the argument to remove all documents.");this._index=new ne,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldLength=new Map,this._avgFieldLength=[],this._storedFields=new Map,this._nextId=0}},n.prototype.discard=function(e){var t=this,r=this._idToShortId.get(e);if(r==null)throw new Error("MiniSearch: cannot discard document with ID ".concat(e,": it is not in the index"));this._idToShortId.delete(e),this._documentIds.delete(r),this._storedFields.delete(r),(this._fieldLength.get(r)||[]).forEach(function(a,i){t.removeFieldLength(r,i,t._documentCount,a)}),this._fieldLength.delete(r),this._documentCount-=1,this._dirtCount+=1,this.maybeAutoVacuum()},n.prototype.maybeAutoVacuum=function(){if(this._options.autoVacuum!==!1){var e=this._options.autoVacuum,t=e.minDirtFactor,r=e.minDirtCount,a=e.batchSize,i=e.batchWait;this.conditionalVacuum({batchSize:a,batchWait:i},{minDirtCount:r,minDirtFactor:t})}},n.prototype.discardAll=function(e){var t,r,a=this._options.autoVacuum;try{this._options.autoVacuum=!1;try{for(var i=w(e),o=i.next();!o.done;o=i.next()){var s=o.value;this.discard(s)}}catch(l){t={error:l}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(t)throw t.error}}}finally{this._options.autoVacuum=a}this.maybeAutoVacuum()},n.prototype.replace=function(e){var t=this._options,r=t.idField,a=t.extractField,i=a(e,r);this.discard(i),this.add(e)},n.prototype.vacuum=function(e){return e===void 0&&(e={}),this.conditionalVacuum(e)},n.prototype.conditionalVacuum=function(e,t){var r=this;return this._currentVacuum?(this._enqueuedVacuumConditions=this._enqueuedVacuumConditions&&t,this._enqueuedVacuum!=null?this._enqueuedVacuum:(this._enqueuedVacuum=this._currentVacuum.then(function(){var a=r._enqueuedVacuumConditions;return r._enqueuedVacuumConditions=ce,r.performVacuuming(e,a)}),this._enqueuedVacuum)):this.vacuumConditionsMet(t)===!1?Promise.resolve():(this._currentVacuum=this.performVacuuming(e),this._currentVacuum)},n.prototype.performVacuuming=function(e,t){return Wt(this,void 0,void 0,function(){var r,a,i,o,s,l,u,c,d,h,f,p,g,m,y,b,v,E,S,O,x,k,j,A,T;return zt(this,function(C){switch(C.label){case 0:if(r=this._dirtCount,!this.vacuumConditionsMet(t))return[3,10];a=e.batchSize||ue.batchSize,i=e.batchWait||ue.batchWait,o=1,C.label=1;case 1:C.trys.push([1,7,8,9]),s=w(this._index),l=s.next(),C.label=2;case 2:if(l.done)return[3,6];u=M(l.value,2),c=u[0],d=u[1];try{for(h=(k=void 0,w(d)),f=h.next();!f.done;f=h.next()){p=M(f.value,2),g=p[0],m=p[1];try{for(y=(A=void 0,w(m)),b=y.next();!b.done;b=y.next())v=M(b.value,1),E=v[0],!this._documentIds.has(E)&&(m.size<=1?d.delete(g):m.delete(E))}catch(R){A={error:R}}finally{try{b&&!b.done&&(T=y.return)&&T.call(y)}finally{if(A)throw A.error}}}}catch(R){k={error:R}}finally{try{f&&!f.done&&(j=h.return)&&j.call(h)}finally{if(k)throw k.error}}return this._index.get(c).size===0&&this._index.delete(c),o%a!==0?[3,4]:[4,new Promise(function(R){return setTimeout(R,i)})];case 3:C.sent(),C.label=4;case 4:o+=1,C.label=5;case 5:return l=s.next(),[3,2];case 6:return[3,9];case 7:return S=C.sent(),O={error:S},[3,9];case 8:try{l&&!l.done&&(x=s.return)&&x.call(s)}finally{if(O)throw O.error}return[7];case 9:this._dirtCount-=r,C.label=10;case 10:return[4,null];case 11:return C.sent(),this._currentVacuum=this._enqueuedVacuum,this._enqueuedVacuum=null,[2]}})})},n.prototype.vacuumConditionsMet=function(e){if(e==null)return!0;var t=e.minDirtCount,r=e.minDirtFactor;return t=t||ae.minDirtCount,r=r||ae.minDirtFactor,this.dirtCount>=t&&this.dirtFactor>=r},Object.defineProperty(n.prototype,"isVacuuming",{get:function(){return this._currentVacuum!=null},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"dirtCount",{get:function(){return this._dirtCount},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"dirtFactor",{get:function(){return this._dirtCount/(1+this._documentCount+this._dirtCount)},enumerable:!1,configurable:!0}),n.prototype.has=function(e){return this._idToShortId.has(e)},n.prototype.getStoredFields=function(e){var t=this._idToShortId.get(e);if(t!=null)return this._storedFields.get(t)},n.prototype.search=function(e,t){var r,a;t===void 0&&(t={});var i=this.executeQuery(e,t),o=[];try{for(var s=w(i),l=s.next();!l.done;l=s.next()){var u=M(l.value,2),c=u[0],d=u[1],h=d.score,f=d.terms,p=d.match,g=f.length||1,m={id:this._documentIds.get(c),score:h*g,terms:Object.keys(p),queryTerms:f,match:p};Object.assign(m,this._storedFields.get(c)),(t.filter==null||t.filter(m))&&o.push(m)}}catch(y){r={error:y}}finally{try{l&&!l.done&&(a=s.return)&&a.call(s)}finally{if(r)throw r.error}}return e===n.wildcard&&t.boostDocument==null&&this._options.searchOptions.boostDocument==null||o.sort(ke),o},n.prototype.autoSuggest=function(e,t){var r,a,i,o;t===void 0&&(t={}),t=L(L({},this._options.autoSuggestOptions),t);var s=new Map;try{for(var l=w(this.search(e,t)),u=l.next();!u.done;u=l.next()){var c=u.value,d=c.score,h=c.terms,f=h.join(" "),p=s.get(f);p!=null?(p.score+=d,p.count+=1):s.set(f,{score:d,terms:h,count:1})}}catch(S){r={error:S}}finally{try{u&&!u.done&&(a=l.return)&&a.call(l)}finally{if(r)throw r.error}}var g=[];try{for(var m=w(s),y=m.next();!y.done;y=m.next()){var b=M(y.value,2),p=b[0],v=b[1],d=v.score,h=v.terms,E=v.count;g.push({suggestion:p,terms:h,score:d/E})}}catch(S){i={error:S}}finally{try{y&&!y.done&&(o=m.return)&&o.call(m)}finally{if(i)throw i.error}}return g.sort(ke),g},Object.defineProperty(n.prototype,"documentCount",{get:function(){return this._documentCount},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"termCount",{get:function(){return this._index.size},enumerable:!1,configurable:!0}),n.loadJSON=function(e,t){if(t==null)throw new Error("MiniSearch: loadJSON should be given the same options used when serializing the index");return this.loadJS(JSON.parse(e),t)},n.getDefault=function(e){if(ie.hasOwnProperty(e))return oe(ie,e);throw new Error('MiniSearch: unknown option "'.concat(e,'"'))},n.loadJS=function(e,t){var r,a,i,o,s,l,u=e.index,c=e.documentCount,d=e.nextId,h=e.documentIds,f=e.fieldIds,p=e.fieldLength,g=e.averageFieldLength,m=e.storedFields,y=e.dirtCount,b=e.serializationVersion;if(b!==1&&b!==2)throw new Error("MiniSearch: cannot deserialize an index created with an incompatible version");var v=new n(t);v._documentCount=c,v._nextId=d,v._documentIds=J(h),v._idToShortId=new Map,v._fieldIds=f,v._fieldLength=J(p),v._avgFieldLength=g,v._storedFields=J(m),v._dirtCount=y||0,v._index=new ne;try{for(var E=w(v._documentIds),S=E.next();!S.done;S=E.next()){var O=M(S.value,2),x=O[0],k=O[1];v._idToShortId.set(k,x)}}catch(W){r={error:W}}finally{try{S&&!S.done&&(a=E.return)&&a.call(E)}finally{if(r)throw r.error}}try{for(var j=w(u),A=j.next();!A.done;A=j.next()){var T=M(A.value,2),C=T[0],R=T[1],F=new Map;try{for(var H=(s=void 0,w(Object.keys(R))),D=H.next();!D.done;D=H.next()){var z=D.value,$=R[z];b===1&&($=$.ds),F.set(parseInt(z,10),J($))}}catch(W){s={error:W}}finally{try{D&&!D.done&&(l=H.return)&&l.call(H)}finally{if(s)throw s.error}}v._index.set(C,F)}}catch(W){i={error:W}}finally{try{A&&!A.done&&(o=j.return)&&o.call(j)}finally{if(i)throw i.error}}return v},n.prototype.executeQuery=function(e,t){var r=this;if(t===void 0&&(t={}),e===n.wildcard)return this.executeWildcardQuery(t);if(typeof e!="string"){var a=L(L(L({},t),e),{queries:void 0}),i=e.queries.map(function(m){return r.executeQuery(m,a)});return this.combineResults(i,a.combineWith)}var o=this._options,s=o.tokenize,l=o.processTerm,u=o.searchOptions,c=L(L({tokenize:s,processTerm:l},u),t),d=c.tokenize,h=c.processTerm,f=d(e).flatMap(function(m){return h(m)}).filter(function(m){return!!m}),p=f.map(Qt(c)),g=p.map(function(m){return r.executeQuerySpec(m,c)});return this.combineResults(g,c.combineWith)},n.prototype.executeQuerySpec=function(e,t){var r,a,i,o,s=L(L({},this._options.searchOptions),t),l=(s.fields||this._options.fields).reduce(function(z,$){var W;return L(L({},z),(W={},W[$]=oe(s.boost,$)||1,W))},{}),u=s.boostDocument,c=s.weights,d=s.maxFuzzy,h=s.bm25,f=L(L({},xe.weights),c),p=f.fuzzy,g=f.prefix,m=this._index.get(e.term),y=this.termResults(e.term,e.term,1,m,l,u,h),b,v;if(e.prefix&&(b=this._index.atPrefix(e.term)),e.fuzzy){var E=e.fuzzy===!0?.2:e.fuzzy,S=E<1?Math.min(d,Math.round(e.term.length*E)):E;S&&(v=this._index.fuzzyGet(e.term,S))}if(b)try{for(var O=w(b),x=O.next();!x.done;x=O.next()){var k=M(x.value,2),j=k[0],A=k[1],T=j.length-e.term.length;if(T){v==null||v.delete(j);var C=g*j.length/(j.length+.3*T);this.termResults(e.term,j,C,A,l,u,h,y)}}}catch(z){r={error:z}}finally{try{x&&!x.done&&(a=O.return)&&a.call(O)}finally{if(r)throw r.error}}if(v)try{for(var R=w(v.keys()),F=R.next();!F.done;F=R.next()){var j=F.value,H=M(v.get(j),2),D=H[0],T=H[1];if(T){var C=p*j.length/(j.length+T);this.termResults(e.term,j,C,D,l,u,h,y)}}}catch(z){i={error:z}}finally{try{F&&!F.done&&(o=R.return)&&o.call(R)}finally{if(i)throw i.error}}return y},n.prototype.executeWildcardQuery=function(e){var t,r,a=new Map,i=L(L({},this._options.searchOptions),e);try{for(var o=w(this._documentIds),s=o.next();!s.done;s=o.next()){var l=M(s.value,2),u=l[0],c=l[1],d=i.boostDocument?i.boostDocument(c,"",this._storedFields.get(u)):1;a.set(u,{score:d,terms:[],match:{}})}}catch(h){t={error:h}}finally{try{s&&!s.done&&(r=o.return)&&r.call(o)}finally{if(t)throw t.error}}return a},n.prototype.combineResults=function(e,t){if(t===void 0&&(t=he),e.length===0)return new Map;var r=t.toLowerCase();return e.reduce(Gt[r])||new Map},n.prototype.toJSON=function(){var e,t,r,a,i=[];try{for(var o=w(this._index),s=o.next();!s.done;s=o.next()){var l=M(s.value,2),u=l[0],c=l[1],d={};try{for(var h=(r=void 0,w(c)),f=h.next();!f.done;f=h.next()){var p=M(f.value,2),g=p[0],m=p[1];d[g]=Object.fromEntries(m)}}catch(y){r={error:y}}finally{try{f&&!f.done&&(a=h.return)&&a.call(h)}finally{if(r)throw r.error}}i.push([u,d])}}catch(y){e={error:y}}finally{try{s&&!s.done&&(t=o.return)&&t.call(o)}finally{if(e)throw e.error}}return{documentCount:this._documentCount,nextId:this._nextId,documentIds:Object.fromEntries(this._documentIds),fieldIds:this._fieldIds,fieldLength:Object.fromEntries(this._fieldLength),averageFieldLength:this._avgFieldLength,storedFields:Object.fromEntries(this._storedFields),dirtCount:this._dirtCount,index:i,serializationVersion:2}},n.prototype.termResults=function(e,t,r,a,i,o,s,l){var u,c,d,h,f;if(l===void 0&&(l=new Map),a==null)return l;try{for(var p=w(Object.keys(i)),g=p.next();!g.done;g=p.next()){var m=g.value,y=i[m],b=this._fieldIds[m],v=a.get(b);if(v!=null){var E=v.size,S=this._avgFieldLength[b];try{for(var O=(d=void 0,w(v.keys())),x=O.next();!x.done;x=O.next()){var k=x.value;if(!this._documentIds.has(k)){this.removeTerm(b,k,t),E-=1;continue}var j=o?o(this._documentIds.get(k),t,this._storedFields.get(k)):1;if(j){var A=v.get(k),T=this._fieldLength.get(k)[b],C=Jt(A,E,this._documentCount,T,S,s),R=r*y*j*C,F=l.get(k);if(F){F.score+=R,Zt(F.terms,e);var H=oe(F.match,t);H?H.push(m):F.match[t]=[m]}else l.set(k,{score:R,terms:[e],match:(f={},f[t]=[m],f)})}}}catch(D){d={error:D}}finally{try{x&&!x.done&&(h=O.return)&&h.call(O)}finally{if(d)throw d.error}}}}}catch(D){u={error:D}}finally{try{g&&!g.done&&(c=p.return)&&c.call(p)}finally{if(u)throw u.error}}return l},n.prototype.addTerm=function(e,t,r){var a=this._index.fetch(r,Ee),i=a.get(e);if(i==null)i=new Map,i.set(t,1),a.set(e,i);else{var o=i.get(t);i.set(t,(o||0)+1)}},n.prototype.removeTerm=function(e,t,r){if(!this._index.has(r)){this.warnDocumentChanged(t,e,r);return}var a=this._index.fetch(r,Ee),i=a.get(e);i==null||i.get(t)==null?this.warnDocumentChanged(t,e,r):i.get(t)<=1?i.size<=1?a.delete(e):i.delete(t):i.set(t,i.get(t)-1),this._index.get(r).size===0&&this._index.delete(r)},n.prototype.warnDocumentChanged=function(e,t,r){var a,i;try{for(var o=w(Object.keys(this._fieldIds)),s=o.next();!s.done;s=o.next()){var l=s.value;if(this._fieldIds[l]===t){this._options.logger("warn","MiniSearch: document with ID ".concat(this._documentIds.get(e),' has changed before removal: term "').concat(r,'" was not present in field "').concat(l,'". Removing a document after it has changed can corrupt the index!'),"version_conflict");return}}}catch(u){a={error:u}}finally{try{s&&!s.done&&(i=o.return)&&i.call(o)}finally{if(a)throw a.error}}},n.prototype.addDocumentId=function(e){var t=this._nextId;return this._idToShortId.set(e,t),this._documentIds.set(t,e),this._documentCount+=1,this._nextId+=1,t},n.prototype.addFields=function(e){for(var t=0;t<e.length;t++)this._fieldIds[e[t]]=t},n.prototype.addFieldLength=function(e,t,r,a){var i=this._fieldLength.get(e);i==null&&this._fieldLength.set(e,i=[]),i[t]=a;var o=this._avgFieldLength[t]||0,s=o*r+a;this._avgFieldLength[t]=s/(r+1)},n.prototype.removeFieldLength=function(e,t,r,a){if(r===1){this._avgFieldLength[t]=0;return}var i=this._avgFieldLength[t]*r-a;this._avgFieldLength[t]=i/(r-1)},n.prototype.saveStoredFields=function(e,t){var r,a,i=this._options,o=i.storeFields,s=i.extractField;if(!(o==null||o.length===0)){var l=this._storedFields.get(e);l==null&&this._storedFields.set(e,l={});try{for(var u=w(o),c=u.next();!c.done;c=u.next()){var d=c.value,h=s(t,d);h!==void 0&&(l[d]=h)}}catch(f){r={error:f}}finally{try{c&&!c.done&&(a=u.return)&&a.call(u)}finally{if(r)throw r.error}}}},n.wildcard=Symbol("*"),n}(),oe=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)?n[e]:void 0},Gt=(G={},G[he]=function(n,e){var t,r;try{for(var a=w(e.keys()),i=a.next();!i.done;i=a.next()){var o=i.value,s=n.get(o);if(s==null)n.set(o,e.get(o));else{var l=e.get(o),u=l.score,c=l.terms,d=l.match;s.score=s.score+u,s.match=Object.assign(s.match,d),Ce(s.terms,c)}}}catch(h){t={error:h}}finally{try{i&&!i.done&&(r=a.return)&&r.call(a)}finally{if(t)throw t.error}}return n},G[qe]=function(n,e){var t,r,a=new Map;try{for(var i=w(e.keys()),o=i.next();!o.done;o=i.next()){var s=o.value,l=n.get(s);if(l!=null){var u=e.get(s),c=u.score,d=u.terms,h=u.match;Ce(l.terms,d),a.set(s,{score:l.score+c,terms:l.terms,match:Object.assign(l.match,h)})}}}catch(f){t={error:f}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(t)throw t.error}}return a},G[qt]=function(n,e){var t,r;try{for(var a=w(e.keys()),i=a.next();!i.done;i=a.next()){var o=i.value;n.delete(o)}}catch(s){t={error:s}}finally{try{i&&!i.done&&(r=a.return)&&r.call(a)}finally{if(t)throw t.error}}return n},G),Yt={k:1.2,b:.7,d:.5},Jt=function(n,e,t,r,a,i){var o=i.k,s=i.b,l=i.d,u=Math.log(1+(t-e+.5)/(e+.5));return u*(l+n*(o+1)/(n+o*(1-s+s*r/a)))},Qt=function(n){return function(e,t,r){var a=typeof n.fuzzy=="function"?n.fuzzy(e,t,r):n.fuzzy||!1,i=typeof n.prefix=="function"?n.prefix(e,t,r):n.prefix===!0;return{term:e,fuzzy:a,prefix:i}}},ie={idField:"id",extractField:function(n,e){return n[e]},tokenize:function(n){return n.split(Kt)},processTerm:function(n){return n.toLowerCase()},fields:void 0,searchOptions:void 0,storeFields:[],logger:function(n,e){typeof(console==null?void 0:console[n])=="function"&&console[n](e)},autoVacuum:!0},xe={combineWith:he,prefix:!1,fuzzy:!1,maxFuzzy:6,boost:{},weights:{fuzzy:.45,prefix:.375},bm25:Yt},Xt={combineWith:qe,prefix:function(n,e,t){return e===t.length-1}},ue={batchSize:1e3,batchWait:10},ce={minDirtFactor:.1,minDirtCount:20},ae=L(L({},ue),ce),Zt=function(n,e){n.includes(e)||n.push(e)},Ce=function(n,e){var t,r;try{for(var a=w(e),i=a.next();!i.done;i=a.next()){var o=i.value;n.includes(o)||n.push(o)}}catch(s){t={error:s}}finally{try{i&&!i.done&&(r=a.return)&&r.call(a)}finally{if(t)throw t.error}}},ke=function(n,e){var t=n.score,r=e.score;return r-t},Ee=function(){return new Map},J=function(n){var e,t,r=new Map;try{for(var a=w(Object.keys(n)),i=a.next();!i.done;i=a.next()){var o=i.value;r.set(parseInt(o,10),n[o])}}catch(s){e={error:s}}finally{try{i&&!i.done&&(t=a.return)&&t.call(a)}finally{if(e)throw e.error}}return r},Kt=/[\n\r -#%-*,-/:;?@[-\]_{}\u00A0\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]+/u;_e({markdown:{cli:`<section class="markdown flex flex-col justify-top items-left text-left p-4 pt-0 mb-4 w-full sm:w-[90%] md:w-[70%] h-fit box-border gap-6"><h1>Using Emmy.js with create-emmy</h1>
<h2>What is create-emmy?</h2>
<p><code>create-emmy</code> is a command-line interface (CLI) for creating Emmy.js applications. It is a tool that helps you to create a new Emmy.js app with a single command.</p>
<p><a href="https://www.youtube.com/watch?v=rOxAJ9c068c">You can see a tutorial on how to use create-emmy here</a></p>
<p>
  <strong>Note:</strong> This tutorial is under construction. Please check back later.
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
<div class='bg-yellow-900 text-yellow-300 inline-flex items-center me-2 px-2.5 py-0.5 rounded-full text-xs font-medium'>Unestable</div>

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
<Route href='/documentation/vite' to='Vite'></Route>`});_e({markdown:{cli:`<section class="markdown flex flex-col justify-top items-left text-left p-4 pt-0 mb-4 w-full sm:w-[90%] md:w-[70%] h-fit box-border gap-6"><h1>Using Emmy.js with create-emmy</h1>
<h2>What is create-emmy?</h2>
<p><code>create-emmy</code> is a command-line interface (CLI) for creating Emmy.js applications. It is a tool that helps you to create a new Emmy.js app with a single command.</p>
<p><a href="https://www.youtube.com/watch?v=rOxAJ9c068c">You can see a tutorial on how to use create-emmy here</a></p>
<p>
  <strong>Note:</strong> This tutorial is under construction. Please check back later.
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
<div class='bg-yellow-900 text-yellow-300 inline-flex items-center me-2 px-2.5 py-0.5 rounded-full text-xs font-medium'>Unestable</div>

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
<Route href='/documentation/vite' to='Vite'></Route>`});function en(n){return{current:n}}function tn({el:n}){return n.className="flex flex-col justify-between items-center text-center w-full gap-6",_`
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
  `}N(tn,"About");document.querySelectorAll("emmy-about").forEach(n=>{n.connectedCallback()});function nn({el:n}){return n.className="flex flex-col justify-space-between gap-2 text-center w-full h-full box-border",_`
    <Header />
    <Route href='/' to='Home' />
    <Route href='/our-story' to='About' />
    <Route href='/getting-started' to='Docs' />
    <Route href='/docs' to='Docs' />
    <Route href='/status' to='Status' />
    ${B.markdownRoutes}
    <Route href='/404' to='Code404' />
    <Router />
    <Footer />
  `}N(nn,"App");document.querySelectorAll("emmy-app").forEach(n=>{n.connectedCallback()});function rn({el:n}){return n.className="flex flex-col justify-center items-center text-center w-full h-fit box-border",_`
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
  `}N(rn,"Docs");document.querySelectorAll("emmy-docs").forEach(n=>{n.connectedCallback()});function on({el:n}){return n.className="flex flex-col justify-between items-center text-center w-full h-[80dvh] gap-4",_`
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
  `}N(on,"Home");document.querySelectorAll("emmy-home").forEach(n=>{n.connectedCallback()});function an({el:n}){return n.className="flex flex-col justify-center items-center text-center max-w-[90%] lg:max-w-full h-fit box-border",B.markdown.cli}N(an,"Cli");document.querySelectorAll("emmy-cli").forEach(n=>{n.connectedCallback()});function sn({el:n}){return n.className="flex flex-col justify-center items-center text-center max-w-[90%] lg:max-w-full h-fit box-border",B.markdown.index}N(sn,"Index");document.querySelectorAll("emmy-index").forEach(n=>{n.connectedCallback()});function ln({el:n}){return n.className="flex flex-col justify-center items-center text-center max-w-[90%] lg:max-w-full h-fit box-border",B.markdown.rails}N(ln,"Rails");document.querySelectorAll("emmy-rails").forEach(n=>{n.connectedCallback()});function un({el:n}){return n.className="flex flex-col justify-center items-center text-center max-w-[90%] lg:max-w-full h-fit box-border",B.markdown.vite}N(un,"Vite");document.querySelectorAll("emmy-vite").forEach(n=>{n.connectedCallback()});function cn({el:n}){return n.className="flex flex-col justify-center items-center text-center w-full h-fit mb-[10%] gap-4",_`
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
  `}N(cn,"Status");document.querySelectorAll("emmy-status").forEach(n=>{n.connectedCallback()});function dn({el:n}){n.className="flex flex-col justify-center items-center space-y-3";const e=en(0),t=i=>{Ht({text:`Counter value changed to ${e.current}`,style:{background:"#1F2937",color:"#fff",borderRadius:"10px"},gravity:"bottom",position:i,duration:600}).showToast()},r=()=>{e.current++,t("right")},a=()=>{e.current--,t("left")};return n.useEffect(()=>{n.querySelector("#plusButton").addEventListener("click",r),n.querySelector("#minusButton").addEventListener("click",a)},[]),()=>_`
    <h2 class='text-2xl font-bold'>Counter</h2>
    <p id='counter'>${e.current}</p>
    <div class='flex flex-row justify-center items-center space-x-2'>
      <button id='plusButton' class='font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-50 border border-gray-300 focus:outline-none focus:ring-4 hover:bg-gray-100 focus:ring-gray-300 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>
        +
      </button>
      <button id='minusButton' class='font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-50 border border-gray-300 focus:outline-none focus:ring-4 hover:bg-gray-100 focus:ring-gray-300 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>
        -
      </button>
    </div>
  `}N(dn,"Counter");document.querySelectorAll("emmy-counter").forEach(n=>{n.connectedCallback()});function hn({el:n}){const[e,t]=n.useState(!0);return n.useEffect(()=>{n.querySelector("[data-collapse-toggle]").addEventListener("click",()=>{t(!e())})},[]),n.useEffect(()=>{const r=n.querySelector("#navbar-default");r.setAttribute("aria-expanded",!e()),r.classList=e()?"hidden w-full md:block md:w-auto":"w-full md:block md:w-auto"},[e]),_`
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
  `}N(hn,"Header");document.querySelectorAll("emmy-header").forEach(n=>{n.connectedCallback()});function fn({el:n,props:e}){const{type:t}=e();if(!t())return"";let r={unstable:"bg-yellow-900 text-yellow-300",stable:"bg-green-900 text-green-300",deprecated:"bg-red-900 text-red-300",experimental:"bg-purple-900 text-purple-300",planned:"bg-blue-900 text-blue-300"}[t().trim()];return n.className=`${r} inline-flex items-center me-2 px-2.5 py-0.5 rounded-full text-xs font-medium`,t().charAt(0).toUpperCase()+t().slice(1)}N(fn,"Pill");document.querySelectorAll("emmy-pill").forEach(n=>{n.connectedCallback()});function mn({props:n,children:e}){return _`
    <li class='py-3 sm:py-4 justify-between space-x-3 rtl:space-x-reverse flex items-center gap-5'>
      <p class='text-sm font-semibold text-gray-900 truncate dark:text-white'>
        ${e()}
      </p>
      <Pill type='${n().status()}' />
    </li>
  `}N(mn,"Row");document.querySelectorAll("emmy-row").forEach(n=>{n.connectedCallback()});function pn({el:n}){const[e,t]=n.useState(!1),[r,a]=n.useState([]);return n.useEffect(()=>{let i=new Ut({fields:["id","title","content","url"],storeFields:["title","content","url"]});const o=Object.entries(B.markdown??{}).map(([s,l])=>({id:s,title:l.match(/<h1(.*?)>(.*?)<\/h1>/).slice(2).join(""),url:s==="index"?"/documentation":`/documentation/${s}`,content:l}));i.addAll(o),n.querySelector("form").addEventListener("submit",s=>{s.preventDefault();const l=s.target.querySelector("input").value;l&&(a(i.search(l)),r().length===0&&a(o),t(!0))}),n.querySelector("#close-modal").addEventListener("click",()=>t(!1))},[]),()=>_`
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
    <div id='select-modal' tabindex='-1' aria-hidden='${!e()}' class='${e()?"":"hidden"} overflow-y-auto overflow-x-hidden absolute top-50 left-50 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full'>
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
            <p class='text-gray-500 dark:text-gray-400 mb-4'>${r().length} ${r().length===1?"result":"results"} found</p>
            <ul class='space-y-4 mb-4'>
              ${r().map(i=>_`
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
  `}N(pn,"Search");document.querySelectorAll("emmy-search").forEach(n=>{n.connectedCallback()});function gn({el:n}){return n.className="absolute inset-0 bg-gray-900 bg-opacity-90 flex flex-col justify-center items-center w-full h-full",_`<div class='text-white text-3xl font-bold mb-4'>Under construction \u{1f6a7}</div>`}N(gn,"UnderConstruction");document.querySelectorAll("emmy-underconstruction").forEach(n=>{n.connectedCallback()});function vn({el:n}){return n.className="dark:text-white text-slate-900 text-center p-6 w-full flex justify-center gap-0 sm:justify-between",_`
    <a href='https://github.com/emmyjs/emmyjs' target='_blank' rel='noopener noreferrer' class='inline-block'>
      <svg class='w-4 h-4 mr-2 inline-block' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20'>
        <path fill-rule='evenodd' d='M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z' clip-rule='evenodd'/>
      </svg>
    </a>
    <p>Made with <span class='text-red-500'>&#9829;</span> by <a href='https://www.linkedin.com/in/eanorambuena/' target='_blank' rel='noopener noreferrer'>@eanorambuena</a></p>
  `}N(vn,"Footer");document.querySelectorAll("emmy-footer").forEach(n=>{n.connectedCallback()});function fe(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function Se(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function me(n,e,t){return e&&Se(n.prototype,e),t&&Se(n,t),n}function je(n){return+n.replace(/px/,"")}function yn(n){var e=window.devicePixelRatio,t=getComputedStyle(n),r=je(t.getPropertyValue("width")),a=je(t.getPropertyValue("height"));n.setAttribute("width",(r*e).toString()),n.setAttribute("height",(a*e).toString())}function P(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,r=Math.random()*(e-n)+n;return Math.floor(r*Math.pow(10,t))/Math.pow(10,t)}function Ae(n){return n[P(0,n.length)]}var bn=.00125,wn=5e-4,xn=9e-4,Cn=1e-5,kn=6,En=80,Sn=.9,jn=1.7,An=.2,Fn=.6,Ln=.03,Tn=.07,Fe=15,Le=82,On=150,Rn=100,Mn=250,In=40,Nn=["#fcf403","#62fc03","#f4fc03","#03e7fc","#03fca5","#a503fc","#fc03ad","#fc03c2"];function Te(n){var e=1920;return Math.log(n)/Math.log(e)}var Oe=function(){function n(e){fe(this,n);var t=e.initialPosition,r=e.direction,a=e.confettiRadius,i=e.confettiColors,o=e.emojis,s=e.emojiSize,l=e.canvasWidth,u=P(Sn,jn,3),c=u*Te(l);this.confettiSpeed={x:c,y:c},this.finalConfettiSpeedX=P(An,Fn,3),this.rotationSpeed=o.length?.01:P(Ln,Tn,3)*Te(l),this.dragForceCoefficient=P(wn,xn,6),this.radius={x:a,y:a},this.initialRadius=a,this.rotationAngle=r==="left"?P(0,.2,3):P(-.2,0,3),this.emojiSize=s,this.emojiRotationAngle=P(0,2*Math.PI),this.radiusYUpdateDirection="down";var d=r==="left"?P(Le,Fe)*Math.PI/180:P(-Fe,-Le)*Math.PI/180;this.absCos=Math.abs(Math.cos(d)),this.absSin=Math.abs(Math.sin(d));var h=P(-On,0),f={x:t.x+(r==="left"?-h:h)*this.absCos,y:t.y-h*this.absSin};this.currentPosition=Object.assign({},f),this.initialPosition=Object.assign({},f),this.color=o.length?null:Ae(i),this.emoji=o.length?Ae(o):null,this.createdAt=new Date().getTime(),this.direction=r}return me(n,[{key:"draw",value:function(t){var r=this.currentPosition,a=this.radius,i=this.color,o=this.emoji,s=this.rotationAngle,l=this.emojiRotationAngle,u=this.emojiSize,c=window.devicePixelRatio;i?(t.fillStyle=i,t.beginPath(),t.ellipse(r.x*c,r.y*c,a.x*c,a.y*c,s,0,2*Math.PI),t.fill()):o&&(t.font="".concat(u,"px serif"),t.save(),t.translate(c*r.x,c*r.y),t.rotate(l),t.textAlign="center",t.fillText(o,0,0),t.restore())}},{key:"updatePosition",value:function(t,r){var a=this.confettiSpeed,i=this.dragForceCoefficient,o=this.finalConfettiSpeedX,s=this.radiusYUpdateDirection,l=this.rotationSpeed,u=this.createdAt,c=this.direction,d=r-u;if(a.x>o&&(this.confettiSpeed.x-=i*t),this.currentPosition.x+=a.x*(c==="left"?-this.absCos:this.absCos)*t,this.currentPosition.y=this.initialPosition.y-a.y*this.absSin*d+bn*Math.pow(d,2)/2,this.rotationSpeed-=this.emoji?1e-4:Cn*t,this.rotationSpeed<0&&(this.rotationSpeed=0),this.emoji){this.emojiRotationAngle+=this.rotationSpeed*t%(2*Math.PI);return}s==="down"?(this.radius.y-=t*l,this.radius.y<=0&&(this.radius.y=0,this.radiusYUpdateDirection="up")):(this.radius.y+=t*l,this.radius.y>=this.initialRadius&&(this.radius.y=this.initialRadius,this.radiusYUpdateDirection="down"))}},{key:"getIsVisibleOnCanvas",value:function(t){return this.currentPosition.y<t+Rn}}]),n}();function _n(){var n=document.createElement("canvas");return n.style.position="fixed",n.style.width="100%",n.style.height="100%",n.style.top="0",n.style.left="0",n.style.zIndex="1000",n.style.pointerEvents="none",document.body.appendChild(n),n}function Dn(n){var e=n.confettiRadius,t=e===void 0?kn:e,r=n.confettiNumber,a=r===void 0?n.confettiesNumber||(n.emojis?In:Mn):r,i=n.confettiColors,o=i===void 0?Nn:i,s=n.emojis,l=s===void 0?n.emojies||[]:s,u=n.emojiSize,c=u===void 0?En:u;return n.emojies&&console.error("emojies argument is deprecated, please use emojis instead"),n.confettiesNumber&&console.error("confettiesNumber argument is deprecated, please use confettiNumber instead"),{confettiRadius:t,confettiNumber:a,confettiColors:o,emojis:l,emojiSize:c}}var Pn=function(){function n(e){var t=this;fe(this,n),this.canvasContext=e,this.shapes=[],this.promise=new Promise(function(r){return t.resolvePromise=r})}return me(n,[{key:"getBatchCompletePromise",value:function(){return this.promise}},{key:"addShapes",value:function(){var t;(t=this.shapes).push.apply(t,arguments)}},{key:"complete",value:function(){var t;return this.shapes.length?!1:((t=this.resolvePromise)===null||t===void 0||t.call(this),!0)}},{key:"processShapes",value:function(t,r,a){var i=this,o=t.timeDelta,s=t.currentTime;this.shapes=this.shapes.filter(function(l){return l.updatePosition(o,s),l.draw(i.canvasContext),a?l.getIsVisibleOnCanvas(r):!0})}}]),n}(),Hn=function(){function n(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};fe(this,n),this.activeConfettiBatches=[],this.canvas=e.canvas||_n(),this.canvasContext=this.canvas.getContext("2d"),this.requestAnimationFrameRequested=!1,this.lastUpdated=new Date().getTime(),this.iterationIndex=0,this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}return me(n,[{key:"loop",value:function(){this.requestAnimationFrameRequested=!1,yn(this.canvas);var t=new Date().getTime(),r=t-this.lastUpdated,a=this.canvas.offsetHeight,i=this.iterationIndex%10===0;this.activeConfettiBatches=this.activeConfettiBatches.filter(function(o){return o.processShapes({timeDelta:r,currentTime:t},a,i),i?!o.complete():!0}),this.iterationIndex++,this.queueAnimationFrameIfNeeded(t)}},{key:"queueAnimationFrameIfNeeded",value:function(t){this.requestAnimationFrameRequested||this.activeConfettiBatches.length<1||(this.requestAnimationFrameRequested=!0,this.lastUpdated=t||new Date().getTime(),requestAnimationFrame(this.loop))}},{key:"addConfetti",value:function(){for(var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=Dn(t),a=r.confettiRadius,i=r.confettiNumber,o=r.confettiColors,s=r.emojis,l=r.emojiSize,u=this.canvas.getBoundingClientRect(),c=u.width,d=u.height,h=d*5/7,f={x:0,y:h},p={x:c,y:h},g=new Pn(this.canvasContext),m=0;m<i/2;m++){var y=new Oe({initialPosition:f,direction:"right",confettiRadius:a,confettiColors:o,confettiNumber:i,emojis:s,emojiSize:l,canvasWidth:c}),b=new Oe({initialPosition:p,direction:"left",confettiRadius:a,confettiColors:o,confettiNumber:i,emojis:s,emojiSize:l,canvasWidth:c});g.addShapes(y,b)}return this.activeConfettiBatches.push(g),this.queueAnimationFrameIfNeeded(),g.getBatchCompletePromise()}},{key:"clearCanvas",value:function(){this.activeConfettiBatches=[]}},{key:"destroyCanvas",value:function(){this.canvas.remove()}}]),n}();hljs.highlightAll();const Wn=new Hn;Wn.addConfetti();
