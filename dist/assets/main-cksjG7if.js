(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();var Ue=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ge(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Ye=Object.prototype.propertyIsEnumerable;function Je(n){if(n==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(n)}function Qe(n){var e=Object.getOwnPropertyNames(n);return Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(n))),e.filter(function(t){return Ye.call(n,t)})}var Xe=Object.assign||function(n,e){for(var t,r,i=Je(n),o=1;o<arguments.length;o++){t=arguments[o],r=Qe(Object(t));for(var a=0;a<r.length;a++)i[r[a]]=t[r[a]]}return i},Y=Array.isArray,Ze=Xe,Ke=3;function Re(n,e){this.callBefore=e&&e.before||this.noop,this.callAfter=e&&e.after||this.noop,this.callProcess=e&&e.process;var t=this;this.scope=null,this.interpreter=n,this.interpreter.setRenderer(this),this.render=function(i,o,a){if(!i)throw new Error("JSX element is not presented");if(typeof i=="string"?i={tag:i,props:pe(o)?o:null,children:Array.isArray(a)?a:null}:typeof i=="function"&&(i={tag:[i.name||i.displayName||"",i],props:pe(o)?o:null,children:Array.isArray(a)?a:null}),!t.isTagDescriptor(i))throw new Error("Top level element should be a tag or function which returns a tag");return t.scope={},i=t.callBefore(i),t.callProcess?t.callProcess(function(){i=t.renderChild(i)}):i=t.renderChild(i),i=t.callAfter(i),t.scope=null,i}}Re.prototype={renderChild:function(n){return n==null?null:this.isTagDescriptor(n)?this.handleTag(n):n},walkChildren:function(n,e,t){var r=n.length,i=0,o;for(t=t|0;i<r;i++)if(o=n[i],o!=null){if(Y(o)&&t<Ke){this.walkChildren(o,e);continue}e(this.renderChild(o))}},handleTag:function(n){var e=n.tag,t=n.props,r=n.children,i,o;if(t=Y(t)?Ze.apply(null,t):t||null,Y(e)){o=e[1],e=e[0];var a;return this.interpreter.hasCustomOverride(e)?(a=this.interpreter.custom(e,o,t,r),this.check(a,"custom")):a=o(t,r,e),this.renderChild(a)}return t=t&&this.interpreter.props(e,t),this.check(t,"props"),i=this.interpreter.enter(e,t),this.check(i,"enter"),Y(r)&&r.length&&(r=this.interpreter.children(e,r,i),this.check(r,"children"),i=this.handleChildren(e,r,i)),i=this.interpreter.leave(e,i),this.check(i,"leave"),i},handleChildren:function(n,e,t){var r=this;return this.walkChildren(e,function(i){t=r.interpreter.child(n,t,i),r.check(t,"child")}),t},handlePrivimite:function(n){return n},isPrimitive:function(n){switch(typeof n){case"string":case"boolean":case"number":return!0}return!1},isTagDescriptor:function(n){return n&&typeof n=="object"&&"tag"in n&&"props"in n&&"children"in n},check:function(n,e){if(typeof n>"u")throw new Error("Source ["+e+"] returned undefined");return n},noop:function(n){return n}};function pe(n){return typeof n=="object"&&n&&!Y(n)}var et=Re;function Me(n,e){var t=this;this.name=n,this.tags={},this.renderer=null,e&&Object.keys(e).forEach(function(r){var i=e[r];t.addTagHandler(r,i)})}Me.prototype={addTagHandler:function(n,e){this.tags[n]=e},getHandler:function(n){var e=this.tags[n]||this.tags["*"];if(!e)throw new Error("JSX ["+n+"] is not found and [*] is missing");return e},hasCustomOverride:function(n){var e=this.getHandler(n);return!!e.custom},setRenderer:function(n){this.renderer=n},call:function(n,e){var t=this[n].apply(this,e);return typeof t>"u"&&console.log("Interpreter call ["+n+"] returned undefined"),t},props:function(n,e){var t=this.getHandler(n);return t.props?t.props.call(this.renderer,e,n):e},child:function(n,e,t){var r=this.getHandler(n);return r.child?r.child.call(this.renderer,t,e,n):e},enter:function(n,e){var t=this.getHandler(n);if(!t.enter)throw new Error("JSX Interpreter handler should provide [enter] method");return t.enter.call(this.renderer,n,e)},leave:function(n,e){var t=this.getHandler(n);return t.leave?t.leave.call(this.renderer,e,n):e},custom:function(n,e,t,r){var i=this.getHandler(n);return i.custom.call(this.renderer,e,t,r,n)},children:function(n,e,t){var r=this.getHandler(n);return r.children?r.children.call(this.renderer,e,t,n):e}};var tt=Me,nt=et,rt=tt,ge={},ot={register:function(e,t){e=e.toLowerCase();var r=new rt(e,t.tags),i=new nt(r,{before:t.before,after:t.after,process:t.process});return ge[e]=i,i},render:function(e,t){if(t=t.toLowerCase(),t=t&&ge[t],!t)throw new Error("Renderer ["+t+"] not found");return t.render(e)}},it=ot;/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */var at=/["'&<>]/,st=lt;function lt(n){var e=""+n,t=at.exec(e);if(!t)return e;var r,i="",o=0,a=0;for(o=t.index;o<e.length;o++){switch(e.charCodeAt(o)){case 34:r="&quot;";break;case 38:r="&amp;";break;case 39:r="&#39;";break;case 60:r="&lt;";break;case 62:r="&gt;";break;default:continue}a!==o&&(i+=e.substring(a,o)),a=o+1,i+=r}return a!==o?i+e.substring(a,o):i}function Ie(n,e){this.name=n,this.props=e,this.children=[]}Ie.prototype.toString=function(){var n=this.props?" "+this.props:"";return"<"+this.name+n+">"+this.children.join("")+"</"+this.name+">"};var ut=Ie,ct=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],dt=it,X=st,se=ut,ht=Object.prototype.hasOwnProperty,ft=ct.reduce(function(n,e){return n[e]=!0,n},Object.create(null)),mt=dt.register("HTML",{tags:{"*":{enter:function(n,e){if(X(n)!==n)throw new Error("Incorrect tag name: "+n);return new se(n,e)},leave:function(n,e){return n},child:function(n,e){return n==null||(n instanceof se||(n=X(n+"")),e.children.push(n)),e},props:function(n){return Object.keys(n).map(function(e){return gt(e,e&&n[e])}).join(" ")},children:function(n,e,t){if(typeof ft[t.toLowerCase()]<"u")throw new Error("Tag <"+t+" /> cannot have children");return n}}},after:function(n){return n.toString()}}),pt=mt;function gt(n,e){return!n||e==null||e instanceof se?"":(n==="className"?n="class":n==="cssFor"?n="for":n=n.toLowerCase(),n==="style"&&(e=vt(e)),typeof e=="string"||(e=JSON.stringify(e)),X(n)+'="'+X(e)+'"')}function vt(n){if(typeof n=="string")return n;var e="";for(var t in n)if(ht.call(n,t)){var r=n[t];t=t.replace(/[A-Z]/g,function(i){return"-"+i.toLowerCase()}),t.search(/moz-|webkit-|o-|ms-/)===0&&(t="-"+t),e+=(e?" ":"")+t+": "+r+";"}return e}function ve(n){return n.map(e=>typeof e=="function"?e():e)}function yt(n){let e=n;return[()=>e,i=>{e=i}]}function bt(n,e){if(globalThis.navigator.userAgent==="Node"){console.warn("useEffect is not supported on the server");return}const r=this.effectCallback;if(!e||e.length===0){this.effectCallback=o=>{r(o),n.call(o,o)};return}let i=ve(e);this.effectCallback=o=>{r(o);const a=ve(e);JSON.stringify(i)!==JSON.stringify(a)&&(i=a,n.call(o,o))},e.find(o=>{if(typeof o=="string"&&o==="didMount"){const a=this.callback;this.callback=s=>{a.call(s,s),n.call(s,s)}}return!1})}const Q={boxFlex:!0,boxFlexGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,strokeDashoffset:!0,strokeOpacity:!0,strokeWidth:!0};function wt(n,e){return n+e.charAt(0).toUpperCase()+e.substring(1)}const xt=["Webkit","ms","Moz","O"];Object.keys(Q).forEach(function(n){xt.forEach(function(e){Q[wt(e,n)]=Q[n]})});const Ct=/^ms-/,kt=/([A-Z])/g;function Et(n){return n.replace(kt,"-$1").toLowerCase()}function St(n){return Et(n).replace(Ct,"-ms-")}const jt=Array.isArray,ye=Object.keys,At=/^(normal|none|(\b(url\([^)]*\)|chapter_counter|attr\([^)]*\)|(no-)?(open|close)-quote|inherit)((\b\s*)|$|\s+))+)$/;function be(n,e){return!Q[n]&&typeof e=="number"?e=""+e+"px":n==="content"&&!At.test(e)&&(e="'"+e.replace(/'/g,"\\'")+"'"),St(n)+": "+e+"; "}function Ft(n){let e="";if(!n||ye(n).length===0)return e;const t=ye(n);for(let r=0,i=t.length;r<i;r++){const o=t[r],a=n[o];if(jt(a))for(let s=0,l=a.length;s<l;s++)e+=be(o,a[s]);else e+=be(o,a)}return e.trim()}function Ne(n){return n.replace(/<\/?[^>]+>/g,t=>{const r=t.slice(0,-1);if(/^[A-Z]/.test(t.slice(1,-1))){const i=r.split(" ")[0].slice(1),o=r.split(" ").slice(1);return`<emmy-${`${i.toLowerCase()} ${o.join(" ")}`.trim()}>`}else if(/^[A-Z]/.test(t.slice(2,-2)))return`</emmy-${r.split(" ")[0].slice(2).toLocaleLowerCase()}>`;return t}).replace(/<emmy-[^>]+\/>/g,t=>{const r=t.slice(6,-2),i=r.split(" ")[0];return`<emmy-${r.trim()}></emmy-${i}>`})}function Lt(n){const e={};return n.split(";").forEach(t=>{const[r,i]=t.split(":");r&&i&&(e[r.trim()]=i.trim())}),e}function Tt(n){if(typeof n!="string")return Ft(n);const e=Lt(n);let t="";for(const r in e)e.hasOwnProperty(r)&&(t+=`${r}: ${e[r]}; `);return t.trim()}function U(n){return/^[A-Z]/.test(n)&&(n="emmy-"+n.toLowerCase()),n}const B={},_e=n=>{Object.entries(n).forEach(([e,t])=>{B[e]=t})},_=String.raw,Ot="flex flex-col justify-center items-center space-y-3 text-center w-full h-fit box-border";var De=function(n,e,t,r){function i(o){return o instanceof t?o:new t(function(a){a(o)})}return new(t||(t=Promise))(function(o,a){function s(c){try{u(r.next(c))}catch(d){a(d)}}function l(c){try{u(r.throw(c))}catch(d){a(d)}}function u(c){c.done?o(c.value):i(c.value).then(s,l)}u((r=r.apply(n,e||[])).next())})};const Rt=pt.render;class Pe extends HTMLElement{constructor(){super(),this.contentGenerator=()=>"",this.callback=e=>{},this.Style={}}addStyle(e){for(const[t,r]of Object.entries(e))this.Style[t]=Tt(r),t=="this"&&this.setAttribute("style",this.Style[t])}render(e,t){if(typeof e!="function"&&typeof e!="string")try{const r=Rt(e);console.log(r),this.contentGenerator=()=>r}catch{this.contentGenerator=()=>e}else typeof e!="function"?this.contentGenerator=()=>e:this.contentGenerator=e;t&&typeof t=="function"&&(this.callback=t)}}class Mt extends Pe{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.shadowRoot.innerHTML=Ne(this.contentGenerator(this)),this.callback.call(this,this)}querySelector(e){return this.shadowRoot.querySelector(U(e))}}class ee extends Pe{connectedCallback(){this.innerHTML=Ne(this.contentGenerator(this)),this.callback.call(this,this)}querySelector(e){return HTMLElement.prototype.querySelector.call(this,U(e))}}function It(n){n.useState=yt.bind(n),n.useEffect=bt.bind(n)}class we extends ee{constructor(e){super(),this.effectCallback=r=>{},It.call(this,this),this.setState({rerenderCount:0});const t=e.call(this,{el:this,props:()=>this.props,children:()=>this.innerHTML});this.render(t)}get props(){return Array.from(this.attributes).reduce((e,t)=>{const r=t.name==="class"?"className":t.name;return Object.assign(Object.assign({},e),{[r]:()=>this.getAttribute(t.name)})},{})}set props(e){for(const[t,r]of Object.entries(e)){if(t==="className"){this.className=r;continue}this.setAttribute(t,r)}}connectedCallback(){super.connectedCallback(),this.effectCallback(this)}static get observedAttributes(){return["state"]}attributeChangedCallback(e,t,r){e==="state"&&this.connectedCallback()}patchState(e){const t=this.state(),r=Object.assign(t,e);this.setState(r)}rerender(){this.patchState({rerenderCount:this.state().rerenderCount+1})}state(){return JSON.parse(this.getAttribute("state").replace(/'/g,'"')||"")}setState(e){this.setAttribute("state",JSON.stringify(e).replace(/"/g,"'"))}querySelector(e){const t=HTMLElement.prototype.querySelector.call(this,U(e));return t.__proto__.addEventListener=(r,i)=>{const o=a=>{i(a),this.rerender()};HTMLElement.prototype.addEventListener.call(t,r,o)},t}}class V extends ee{constructor(){super(),this.render("",()=>{const t="emmy-"+(this.getAttribute("to")||"").toLowerCase(),r=this.getAttribute("href")==="/"?"/root":this.getAttribute("href")||"/404";V.routes[r]=`<${t}></${t}>`})}}V.routes={};class Nt extends ee{constructor(){super(),this.className=Ot,this.handleLocation=()=>{const e=window.location.pathname,t=(e==="/"?V.routes["/root"]:V.routes[e])||V.routes["/404"]||_`<h1>404</h1>`;this.innerHTML!==t&&(this.innerHTML=t)},window.route=e=>{e.preventDefault();const t=e.target;window.location.pathname!==t.href&&(window.history.pushState({},"",t.href),this.handleLocation())},window.onpopstate=this.handleLocation,this.render("",()=>this.handleLocation())}}function Z(n,e){return customElements.get(U(e))?(console.warn(`Custom element ${U(e)} already defined`),n):(customElements.define(U(e),n),n)}function _t(n,e){return De(this,void 0,void 0,function*(){const r=yield(yield fetch(n)).text();return N(()=>r,e)})}function N(n,e){return De(this,void 0,void 0,function*(){if(typeof n=="string")return yield _t(n,e);try{const t=new n;if(t instanceof Mt||t instanceof ee||t instanceof we)return Z(n,e);throw new Error("Not a valid component")}catch{class r extends we{constructor(){super(n)}}return Z(r,e)}})}Z(V,"Route");Z(Nt,"Router");var He={exports:{}};/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */(function(n){(function(e,t){n.exports?n.exports=t():e.Toastify=t()})(Ue,function(e){var t=function(a){return new t.lib.init(a)},r="1.12.0";t.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},t.lib=t.prototype={toastify:r,constructor:t,init:function(a){return a||(a={}),this.options={},this.toastElement=null,this.options.text=a.text||t.defaults.text,this.options.node=a.node||t.defaults.node,this.options.duration=a.duration===0?0:a.duration||t.defaults.duration,this.options.selector=a.selector||t.defaults.selector,this.options.callback=a.callback||t.defaults.callback,this.options.destination=a.destination||t.defaults.destination,this.options.newWindow=a.newWindow||t.defaults.newWindow,this.options.close=a.close||t.defaults.close,this.options.gravity=a.gravity==="bottom"?"toastify-bottom":t.defaults.gravity,this.options.positionLeft=a.positionLeft||t.defaults.positionLeft,this.options.position=a.position||t.defaults.position,this.options.backgroundColor=a.backgroundColor||t.defaults.backgroundColor,this.options.avatar=a.avatar||t.defaults.avatar,this.options.className=a.className||t.defaults.className,this.options.stopOnFocus=a.stopOnFocus===void 0?t.defaults.stopOnFocus:a.stopOnFocus,this.options.onClick=a.onClick||t.defaults.onClick,this.options.offset=a.offset||t.defaults.offset,this.options.escapeMarkup=a.escapeMarkup!==void 0?a.escapeMarkup:t.defaults.escapeMarkup,this.options.ariaLive=a.ariaLive||t.defaults.ariaLive,this.options.style=a.style||t.defaults.style,a.backgroundColor&&(this.options.style.background=a.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var a=document.createElement("div");a.className="toastify on "+this.options.className,this.options.position?a.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(a.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):a.className+=" toastify-right",a.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var s in this.options.style)a.style[s]=this.options.style[s];if(this.options.ariaLive&&a.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)a.appendChild(this.options.node);else if(this.options.escapeMarkup?a.innerText=this.options.text:a.innerHTML=this.options.text,this.options.avatar!==""){var l=document.createElement("img");l.src=this.options.avatar,l.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?a.appendChild(l):a.insertAdjacentElement("afterbegin",l)}if(this.options.close===!0){var u=document.createElement("button");u.type="button",u.setAttribute("aria-label","Close"),u.className="toast-close",u.innerHTML="&#10006;",u.addEventListener("click",(function(m){m.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}).bind(this));var c=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&c>360?a.insertAdjacentElement("afterbegin",u):a.appendChild(u)}if(this.options.stopOnFocus&&this.options.duration>0){var d=this;a.addEventListener("mouseover",function(m){window.clearTimeout(a.timeOutValue)}),a.addEventListener("mouseleave",function(){a.timeOutValue=window.setTimeout(function(){d.removeElement(a)},d.options.duration)})}if(typeof this.options.destination<"u"&&a.addEventListener("click",(function(m){m.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}).bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&a.addEventListener("click",(function(m){m.stopPropagation(),this.options.onClick()}).bind(this)),typeof this.options.offset=="object"){var h=i("x",this.options),f=i("y",this.options),p=this.options.position=="left"?h:"-"+h,g=this.options.gravity=="toastify-top"?f:"-"+f;a.style.transform="translate("+p+","+g+")"}return a},showToast:function(){this.toastElement=this.buildToast();var a;if(typeof this.options.selector=="string"?a=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?a=this.options.selector:a=document.body,!a)throw"Root element is not defined";var s=t.defaults.oldestFirst?a.firstChild:a.lastChild;return a.insertBefore(this.toastElement,s),t.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout((function(){this.removeElement(this.toastElement)}).bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(a){a.className=a.className.replace(" on",""),window.setTimeout((function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),a.parentNode&&a.parentNode.removeChild(a),this.options.callback.call(a),t.reposition()}).bind(this),400)}},t.reposition=function(){for(var a={top:15,bottom:15},s={top:15,bottom:15},l={top:15,bottom:15},u=document.getElementsByClassName("toastify"),c,d=0;d<u.length;d++){o(u[d],"toastify-top")===!0?c="toastify-top":c="toastify-bottom";var h=u[d].offsetHeight;c=c.substr(9,c.length-1);var f=15,p=window.innerWidth>0?window.innerWidth:screen.width;p<=360?(u[d].style[c]=l[c]+"px",l[c]+=h+f):o(u[d],"toastify-left")===!0?(u[d].style[c]=a[c]+"px",a[c]+=h+f):(u[d].style[c]=s[c]+"px",s[c]+=h+f)}return this};function i(a,s){return s.offset[a]?isNaN(s.offset[a])?s.offset[a]:s.offset[a]+"px":"0px"}function o(a,s){return!a||typeof s!="string"?!1:!!(a.className&&a.className.trim().split(/\s+/gi).indexOf(s)>-1)}return t.lib.init.prototype=t.lib,t})})(He);var Dt=He.exports;const Pt=Ge(Dt);var L=function(){return L=Object.assign||function(e){for(var t,r=1,i=arguments.length;r<i;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},L.apply(this,arguments)};function Ht(n,e,t,r){function i(o){return o instanceof t?o:new t(function(a){a(o)})}return new(t||(t=Promise))(function(o,a){function s(c){try{u(r.next(c))}catch(d){a(d)}}function l(c){try{u(r.throw(c))}catch(d){a(d)}}function u(c){c.done?o(c.value):i(c.value).then(s,l)}u((r=r.apply(n,e||[])).next())})}function Wt(n,e){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,u[0]&&(t=0)),t;)try{if(r=1,i&&(o=u[0]&2?i.return:u[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;switch(i=0,o&&(u=[u[0]&2,o.value]),u[0]){case 0:case 1:o=u;break;case 4:return t.label++,{value:u[1],done:!1};case 5:t.label++,i=u[1],u=[0];continue;case 7:u=t.ops.pop(),t.trys.pop();continue;default:if(o=t.trys,!(o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){t=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){t.label=u[1];break}if(u[0]===6&&t.label<o[1]){t.label=o[1],o=u;break}if(o&&t.label<o[2]){t.label=o[2],t.ops.push(u);break}o[2]&&t.ops.pop(),t.trys.pop();continue}u=e.call(n,t)}catch(c){u=[6,c],i=0}finally{r=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function w(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],r=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&r>=n.length&&(n=void 0),{value:n&&n[r++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function M(n,e){var t=typeof Symbol=="function"&&n[Symbol.iterator];if(!t)return n;var r=t.call(n),i,o=[],a;try{for(;(e===void 0||e-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(s){a={error:s}}finally{try{i&&!i.done&&(t=r.return)&&t.call(r)}finally{if(a)throw a.error}}return o}var zt="ENTRIES",We="KEYS",ze="VALUES",I="",te=function(){function n(e,t){var r=e._tree,i=Array.from(r.keys());this.set=e,this._type=t,this._path=i.length>0?[{node:r,keys:i}]:[]}return n.prototype.next=function(){var e=this.dive();return this.backtrack(),e},n.prototype.dive=function(){if(this._path.length===0)return{done:!0,value:void 0};var e=q(this._path),t=e.node,r=e.keys;if(q(r)===I)return{done:!1,value:this.result()};var i=t.get(q(r));return this._path.push({node:i,keys:Array.from(i.keys())}),this.dive()},n.prototype.backtrack=function(){if(this._path.length!==0){var e=q(this._path).keys;e.pop(),!(e.length>0)&&(this._path.pop(),this.backtrack())}},n.prototype.key=function(){return this.set._prefix+this._path.map(function(e){var t=e.keys;return q(t)}).filter(function(e){return e!==I}).join("")},n.prototype.value=function(){return q(this._path).node.get(I)},n.prototype.result=function(){switch(this._type){case ze:return this.value();case We:return this.key();default:return[this.key(),this.value()]}},n.prototype[Symbol.iterator]=function(){return this},n}(),q=function(n){return n[n.length-1]},Vt=function(n,e,t){var r=new Map;if(e===void 0)return r;for(var i=e.length+1,o=i+t,a=new Uint8Array(o*i).fill(t+1),s=0;s<i;++s)a[s]=s;for(var l=1;l<o;++l)a[l*i]=l;return Ve(n,e,t,r,a,1,i,""),r},Ve=function(n,e,t,r,i,o,a,s){var l,u,c=o*a;try{e:for(var d=w(n.keys()),h=d.next();!h.done;h=d.next()){var f=h.value;if(f===I){var p=i[c-1];p<=t&&r.set(s,[n.get(f),p])}else{for(var g=o,m=0;m<f.length;++m,++g){for(var y=f[m],b=a*g,v=b-a,E=i[b],S=Math.max(0,g-t-1),O=Math.min(a-1,g+t),x=S;x<O;++x){var k=y!==e[x],j=i[v+x]+ +k,A=i[v+x+1]+1,T=i[b+x]+1,C=i[b+x+1]=Math.min(j,A,T);C<E&&(E=C)}if(E>t)continue e}Ve(n.get(f),e,t,r,i,g,a,s+f)}}}catch(R){l={error:R}}finally{try{h&&!h.done&&(u=d.return)&&u.call(d)}finally{if(l)throw l.error}}},ne=function(){function n(e,t){e===void 0&&(e=new Map),t===void 0&&(t=""),this._size=void 0,this._tree=e,this._prefix=t}return n.prototype.atPrefix=function(e){var t,r;if(!e.startsWith(this._prefix))throw new Error("Mismatched prefix");var i=M(K(this._tree,e.slice(this._prefix.length)),2),o=i[0],a=i[1];if(o===void 0){var s=M(de(a),2),l=s[0],u=s[1];try{for(var c=w(l.keys()),d=c.next();!d.done;d=c.next()){var h=d.value;if(h!==I&&h.startsWith(u)){var f=new Map;return f.set(h.slice(u.length),l.get(h)),new n(f,e)}}}catch(p){t={error:p}}finally{try{d&&!d.done&&(r=c.return)&&r.call(c)}finally{if(t)throw t.error}}}return new n(o,e)},n.prototype.clear=function(){this._size=void 0,this._tree.clear()},n.prototype.delete=function(e){return this._size=void 0,Bt(this._tree,e)},n.prototype.entries=function(){return new te(this,zt)},n.prototype.forEach=function(e){var t,r;try{for(var i=w(this),o=i.next();!o.done;o=i.next()){var a=M(o.value,2),s=a[0],l=a[1];e(s,l,this)}}catch(u){t={error:u}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(t)throw t.error}}},n.prototype.fuzzyGet=function(e,t){return Vt(this._tree,e,t)},n.prototype.get=function(e){var t=le(this._tree,e);return t!==void 0?t.get(I):void 0},n.prototype.has=function(e){var t=le(this._tree,e);return t!==void 0&&t.has(I)},n.prototype.keys=function(){return new te(this,We)},n.prototype.set=function(e,t){if(typeof e!="string")throw new Error("key must be a string");this._size=void 0;var r=re(this._tree,e);return r.set(I,t),this},Object.defineProperty(n.prototype,"size",{get:function(){if(this._size)return this._size;this._size=0;for(var e=this.entries();!e.next().done;)this._size+=1;return this._size},enumerable:!1,configurable:!0}),n.prototype.update=function(e,t){if(typeof e!="string")throw new Error("key must be a string");this._size=void 0;var r=re(this._tree,e);return r.set(I,t(r.get(I))),this},n.prototype.fetch=function(e,t){if(typeof e!="string")throw new Error("key must be a string");this._size=void 0;var r=re(this._tree,e),i=r.get(I);return i===void 0&&r.set(I,i=t()),i},n.prototype.values=function(){return new te(this,ze)},n.prototype[Symbol.iterator]=function(){return this.entries()},n.from=function(e){var t,r,i=new n;try{for(var o=w(e),a=o.next();!a.done;a=o.next()){var s=M(a.value,2),l=s[0],u=s[1];i.set(l,u)}}catch(c){t={error:c}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(t)throw t.error}}return i},n.fromObject=function(e){return n.from(Object.entries(e))},n}(),K=function(n,e,t){var r,i;if(t===void 0&&(t=[]),e.length===0||n==null)return[n,t];try{for(var o=w(n.keys()),a=o.next();!a.done;a=o.next()){var s=a.value;if(s!==I&&e.startsWith(s))return t.push([n,s]),K(n.get(s),e.slice(s.length),t)}}catch(l){r={error:l}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(r)throw r.error}}return t.push([n,e]),K(void 0,"",t)},le=function(n,e){var t,r;if(e.length===0||n==null)return n;try{for(var i=w(n.keys()),o=i.next();!o.done;o=i.next()){var a=o.value;if(a!==I&&e.startsWith(a))return le(n.get(a),e.slice(a.length))}}catch(s){t={error:s}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(t)throw t.error}}},re=function(n,e){var t,r,i=e.length;e:for(var o=0;n&&o<i;){try{for(var a=(t=void 0,w(n.keys())),s=a.next();!s.done;s=a.next()){var l=s.value;if(l!==I&&e[o]===l[0]){for(var u=Math.min(i-o,l.length),c=1;c<u&&e[o+c]===l[c];)++c;var d=n.get(l);if(c===l.length)n=d;else{var h=new Map;h.set(l.slice(c),d),n.set(e.slice(o,o+c),h),n.delete(l),n=h}o+=c;continue e}}}catch(p){t={error:p}}finally{try{s&&!s.done&&(r=a.return)&&r.call(a)}finally{if(t)throw t.error}}var f=new Map;return n.set(e.slice(o),f),f}return n},Bt=function(n,e){var t=M(K(n,e),2),r=t[0],i=t[1];if(r!==void 0){if(r.delete(I),r.size===0)Be(i);else if(r.size===1){var o=M(r.entries().next().value,2),a=o[0],s=o[1];$e(i,a,s)}}},Be=function(n){if(n.length!==0){var e=M(de(n),2),t=e[0],r=e[1];if(t.delete(r),t.size===0)Be(n.slice(0,-1));else if(t.size===1){var i=M(t.entries().next().value,2),o=i[0],a=i[1];o!==I&&$e(n.slice(0,-1),o,a)}}},$e=function(n,e,t){if(n.length!==0){var r=M(de(n),2),i=r[0],o=r[1];i.set(o+e,t),i.delete(o)}},de=function(n){return n[n.length-1]},G,he="or",qe="and",$t="and_not",qt=function(){function n(e){if((e==null?void 0:e.fields)==null)throw new Error('MiniSearch: option "fields" must be provided');var t=e.autoVacuum==null||e.autoVacuum===!0?ae:e.autoVacuum;this._options=L(L(L({},ie),e),{autoVacuum:t,searchOptions:L(L({},xe),e.searchOptions||{}),autoSuggestOptions:L(L({},Qt),e.autoSuggestOptions||{})}),this._index=new ne,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldIds={},this._fieldLength=new Map,this._avgFieldLength=[],this._nextId=0,this._storedFields=new Map,this._dirtCount=0,this._currentVacuum=null,this._enqueuedVacuum=null,this._enqueuedVacuumConditions=ce,this.addFields(this._options.fields)}return n.prototype.add=function(e){var t,r,i,o,a,s,l=this._options,u=l.extractField,c=l.tokenize,d=l.processTerm,h=l.fields,f=l.idField,p=u(e,f);if(p==null)throw new Error('MiniSearch: document does not have ID field "'.concat(f,'"'));if(this._idToShortId.has(p))throw new Error("MiniSearch: duplicate ID ".concat(p));var g=this.addDocumentId(p);this.saveStoredFields(g,e);try{for(var m=w(h),y=m.next();!y.done;y=m.next()){var b=y.value,v=u(e,b);if(v!=null){var E=c(v.toString(),b),S=this._fieldIds[b],O=new Set(E).size;this.addFieldLength(g,S,this._documentCount-1,O);try{for(var x=(i=void 0,w(E)),k=x.next();!k.done;k=x.next()){var j=k.value,A=d(j,b);if(Array.isArray(A))try{for(var T=(a=void 0,w(A)),C=T.next();!C.done;C=T.next()){var R=C.value;this.addTerm(S,g,R)}}catch(F){a={error:F}}finally{try{C&&!C.done&&(s=T.return)&&s.call(T)}finally{if(a)throw a.error}}else A&&this.addTerm(S,g,A)}}catch(F){i={error:F}}finally{try{k&&!k.done&&(o=x.return)&&o.call(x)}finally{if(i)throw i.error}}}}}catch(F){t={error:F}}finally{try{y&&!y.done&&(r=m.return)&&r.call(m)}finally{if(t)throw t.error}}},n.prototype.addAll=function(e){var t,r;try{for(var i=w(e),o=i.next();!o.done;o=i.next()){var a=o.value;this.add(a)}}catch(s){t={error:s}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(t)throw t.error}}},n.prototype.addAllAsync=function(e,t){var r=this;t===void 0&&(t={});var i=t.chunkSize,o=i===void 0?10:i,a={chunk:[],promise:Promise.resolve()},s=e.reduce(function(c,d,h){var f=c.chunk,p=c.promise;return f.push(d),(h+1)%o===0?{chunk:[],promise:p.then(function(){return new Promise(function(g){return setTimeout(g,0)})}).then(function(){return r.addAll(f)})}:{chunk:f,promise:p}},a),l=s.chunk,u=s.promise;return u.then(function(){return r.addAll(l)})},n.prototype.remove=function(e){var t,r,i,o,a,s,l=this._options,u=l.tokenize,c=l.processTerm,d=l.extractField,h=l.fields,f=l.idField,p=d(e,f);if(p==null)throw new Error('MiniSearch: document does not have ID field "'.concat(f,'"'));var g=this._idToShortId.get(p);if(g==null)throw new Error("MiniSearch: cannot remove document with ID ".concat(p,": it is not in the index"));try{for(var m=w(h),y=m.next();!y.done;y=m.next()){var b=y.value,v=d(e,b);if(v!=null){var E=u(v.toString(),b),S=this._fieldIds[b],O=new Set(E).size;this.removeFieldLength(g,S,this._documentCount,O);try{for(var x=(i=void 0,w(E)),k=x.next();!k.done;k=x.next()){var j=k.value,A=c(j,b);if(Array.isArray(A))try{for(var T=(a=void 0,w(A)),C=T.next();!C.done;C=T.next()){var R=C.value;this.removeTerm(S,g,R)}}catch(F){a={error:F}}finally{try{C&&!C.done&&(s=T.return)&&s.call(T)}finally{if(a)throw a.error}}else A&&this.removeTerm(S,g,A)}}catch(F){i={error:F}}finally{try{k&&!k.done&&(o=x.return)&&o.call(x)}finally{if(i)throw i.error}}}}}catch(F){t={error:F}}finally{try{y&&!y.done&&(r=m.return)&&r.call(m)}finally{if(t)throw t.error}}this._storedFields.delete(g),this._documentIds.delete(g),this._idToShortId.delete(p),this._fieldLength.delete(g),this._documentCount-=1},n.prototype.removeAll=function(e){var t,r;if(e)try{for(var i=w(e),o=i.next();!o.done;o=i.next()){var a=o.value;this.remove(a)}}catch(s){t={error:s}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(t)throw t.error}}else{if(arguments.length>0)throw new Error("Expected documents to be present. Omit the argument to remove all documents.");this._index=new ne,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldLength=new Map,this._avgFieldLength=[],this._storedFields=new Map,this._nextId=0}},n.prototype.discard=function(e){var t=this,r=this._idToShortId.get(e);if(r==null)throw new Error("MiniSearch: cannot discard document with ID ".concat(e,": it is not in the index"));this._idToShortId.delete(e),this._documentIds.delete(r),this._storedFields.delete(r),(this._fieldLength.get(r)||[]).forEach(function(i,o){t.removeFieldLength(r,o,t._documentCount,i)}),this._fieldLength.delete(r),this._documentCount-=1,this._dirtCount+=1,this.maybeAutoVacuum()},n.prototype.maybeAutoVacuum=function(){if(this._options.autoVacuum!==!1){var e=this._options.autoVacuum,t=e.minDirtFactor,r=e.minDirtCount,i=e.batchSize,o=e.batchWait;this.conditionalVacuum({batchSize:i,batchWait:o},{minDirtCount:r,minDirtFactor:t})}},n.prototype.discardAll=function(e){var t,r,i=this._options.autoVacuum;try{this._options.autoVacuum=!1;try{for(var o=w(e),a=o.next();!a.done;a=o.next()){var s=a.value;this.discard(s)}}catch(l){t={error:l}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(t)throw t.error}}}finally{this._options.autoVacuum=i}this.maybeAutoVacuum()},n.prototype.replace=function(e){var t=this._options,r=t.idField,i=t.extractField,o=i(e,r);this.discard(o),this.add(e)},n.prototype.vacuum=function(e){return e===void 0&&(e={}),this.conditionalVacuum(e)},n.prototype.conditionalVacuum=function(e,t){var r=this;return this._currentVacuum?(this._enqueuedVacuumConditions=this._enqueuedVacuumConditions&&t,this._enqueuedVacuum!=null?this._enqueuedVacuum:(this._enqueuedVacuum=this._currentVacuum.then(function(){var i=r._enqueuedVacuumConditions;return r._enqueuedVacuumConditions=ce,r.performVacuuming(e,i)}),this._enqueuedVacuum)):this.vacuumConditionsMet(t)===!1?Promise.resolve():(this._currentVacuum=this.performVacuuming(e),this._currentVacuum)},n.prototype.performVacuuming=function(e,t){return Ht(this,void 0,void 0,function(){var r,i,o,a,s,l,u,c,d,h,f,p,g,m,y,b,v,E,S,O,x,k,j,A,T;return Wt(this,function(C){switch(C.label){case 0:if(r=this._dirtCount,!this.vacuumConditionsMet(t))return[3,10];i=e.batchSize||ue.batchSize,o=e.batchWait||ue.batchWait,a=1,C.label=1;case 1:C.trys.push([1,7,8,9]),s=w(this._index),l=s.next(),C.label=2;case 2:if(l.done)return[3,6];u=M(l.value,2),c=u[0],d=u[1];try{for(h=(k=void 0,w(d)),f=h.next();!f.done;f=h.next()){p=M(f.value,2),g=p[0],m=p[1];try{for(y=(A=void 0,w(m)),b=y.next();!b.done;b=y.next())v=M(b.value,1),E=v[0],!this._documentIds.has(E)&&(m.size<=1?d.delete(g):m.delete(E))}catch(R){A={error:R}}finally{try{b&&!b.done&&(T=y.return)&&T.call(y)}finally{if(A)throw A.error}}}}catch(R){k={error:R}}finally{try{f&&!f.done&&(j=h.return)&&j.call(h)}finally{if(k)throw k.error}}return this._index.get(c).size===0&&this._index.delete(c),a%i!==0?[3,4]:[4,new Promise(function(R){return setTimeout(R,o)})];case 3:C.sent(),C.label=4;case 4:a+=1,C.label=5;case 5:return l=s.next(),[3,2];case 6:return[3,9];case 7:return S=C.sent(),O={error:S},[3,9];case 8:try{l&&!l.done&&(x=s.return)&&x.call(s)}finally{if(O)throw O.error}return[7];case 9:this._dirtCount-=r,C.label=10;case 10:return[4,null];case 11:return C.sent(),this._currentVacuum=this._enqueuedVacuum,this._enqueuedVacuum=null,[2]}})})},n.prototype.vacuumConditionsMet=function(e){if(e==null)return!0;var t=e.minDirtCount,r=e.minDirtFactor;return t=t||ae.minDirtCount,r=r||ae.minDirtFactor,this.dirtCount>=t&&this.dirtFactor>=r},Object.defineProperty(n.prototype,"isVacuuming",{get:function(){return this._currentVacuum!=null},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"dirtCount",{get:function(){return this._dirtCount},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"dirtFactor",{get:function(){return this._dirtCount/(1+this._documentCount+this._dirtCount)},enumerable:!1,configurable:!0}),n.prototype.has=function(e){return this._idToShortId.has(e)},n.prototype.getStoredFields=function(e){var t=this._idToShortId.get(e);if(t!=null)return this._storedFields.get(t)},n.prototype.search=function(e,t){var r,i;t===void 0&&(t={});var o=this.executeQuery(e,t),a=[];try{for(var s=w(o),l=s.next();!l.done;l=s.next()){var u=M(l.value,2),c=u[0],d=u[1],h=d.score,f=d.terms,p=d.match,g=f.length||1,m={id:this._documentIds.get(c),score:h*g,terms:Object.keys(p),queryTerms:f,match:p};Object.assign(m,this._storedFields.get(c)),(t.filter==null||t.filter(m))&&a.push(m)}}catch(y){r={error:y}}finally{try{l&&!l.done&&(i=s.return)&&i.call(s)}finally{if(r)throw r.error}}return e===n.wildcard&&t.boostDocument==null&&this._options.searchOptions.boostDocument==null||a.sort(ke),a},n.prototype.autoSuggest=function(e,t){var r,i,o,a;t===void 0&&(t={}),t=L(L({},this._options.autoSuggestOptions),t);var s=new Map;try{for(var l=w(this.search(e,t)),u=l.next();!u.done;u=l.next()){var c=u.value,d=c.score,h=c.terms,f=h.join(" "),p=s.get(f);p!=null?(p.score+=d,p.count+=1):s.set(f,{score:d,terms:h,count:1})}}catch(S){r={error:S}}finally{try{u&&!u.done&&(i=l.return)&&i.call(l)}finally{if(r)throw r.error}}var g=[];try{for(var m=w(s),y=m.next();!y.done;y=m.next()){var b=M(y.value,2),p=b[0],v=b[1],d=v.score,h=v.terms,E=v.count;g.push({suggestion:p,terms:h,score:d/E})}}catch(S){o={error:S}}finally{try{y&&!y.done&&(a=m.return)&&a.call(m)}finally{if(o)throw o.error}}return g.sort(ke),g},Object.defineProperty(n.prototype,"documentCount",{get:function(){return this._documentCount},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"termCount",{get:function(){return this._index.size},enumerable:!1,configurable:!0}),n.loadJSON=function(e,t){if(t==null)throw new Error("MiniSearch: loadJSON should be given the same options used when serializing the index");return this.loadJS(JSON.parse(e),t)},n.getDefault=function(e){if(ie.hasOwnProperty(e))return oe(ie,e);throw new Error('MiniSearch: unknown option "'.concat(e,'"'))},n.loadJS=function(e,t){var r,i,o,a,s,l,u=e.index,c=e.documentCount,d=e.nextId,h=e.documentIds,f=e.fieldIds,p=e.fieldLength,g=e.averageFieldLength,m=e.storedFields,y=e.dirtCount,b=e.serializationVersion;if(b!==1&&b!==2)throw new Error("MiniSearch: cannot deserialize an index created with an incompatible version");var v=new n(t);v._documentCount=c,v._nextId=d,v._documentIds=J(h),v._idToShortId=new Map,v._fieldIds=f,v._fieldLength=J(p),v._avgFieldLength=g,v._storedFields=J(m),v._dirtCount=y||0,v._index=new ne;try{for(var E=w(v._documentIds),S=E.next();!S.done;S=E.next()){var O=M(S.value,2),x=O[0],k=O[1];v._idToShortId.set(k,x)}}catch(W){r={error:W}}finally{try{S&&!S.done&&(i=E.return)&&i.call(E)}finally{if(r)throw r.error}}try{for(var j=w(u),A=j.next();!A.done;A=j.next()){var T=M(A.value,2),C=T[0],R=T[1],F=new Map;try{for(var H=(s=void 0,w(Object.keys(R))),D=H.next();!D.done;D=H.next()){var z=D.value,$=R[z];b===1&&($=$.ds),F.set(parseInt(z,10),J($))}}catch(W){s={error:W}}finally{try{D&&!D.done&&(l=H.return)&&l.call(H)}finally{if(s)throw s.error}}v._index.set(C,F)}}catch(W){o={error:W}}finally{try{A&&!A.done&&(a=j.return)&&a.call(j)}finally{if(o)throw o.error}}return v},n.prototype.executeQuery=function(e,t){var r=this;if(t===void 0&&(t={}),e===n.wildcard)return this.executeWildcardQuery(t);if(typeof e!="string"){var i=L(L(L({},t),e),{queries:void 0}),o=e.queries.map(function(m){return r.executeQuery(m,i)});return this.combineResults(o,i.combineWith)}var a=this._options,s=a.tokenize,l=a.processTerm,u=a.searchOptions,c=L(L({tokenize:s,processTerm:l},u),t),d=c.tokenize,h=c.processTerm,f=d(e).flatMap(function(m){return h(m)}).filter(function(m){return!!m}),p=f.map(Jt(c)),g=p.map(function(m){return r.executeQuerySpec(m,c)});return this.combineResults(g,c.combineWith)},n.prototype.executeQuerySpec=function(e,t){var r,i,o,a,s=L(L({},this._options.searchOptions),t),l=(s.fields||this._options.fields).reduce(function(z,$){var W;return L(L({},z),(W={},W[$]=oe(s.boost,$)||1,W))},{}),u=s.boostDocument,c=s.weights,d=s.maxFuzzy,h=s.bm25,f=L(L({},xe.weights),c),p=f.fuzzy,g=f.prefix,m=this._index.get(e.term),y=this.termResults(e.term,e.term,1,m,l,u,h),b,v;if(e.prefix&&(b=this._index.atPrefix(e.term)),e.fuzzy){var E=e.fuzzy===!0?.2:e.fuzzy,S=E<1?Math.min(d,Math.round(e.term.length*E)):E;S&&(v=this._index.fuzzyGet(e.term,S))}if(b)try{for(var O=w(b),x=O.next();!x.done;x=O.next()){var k=M(x.value,2),j=k[0],A=k[1],T=j.length-e.term.length;if(T){v==null||v.delete(j);var C=g*j.length/(j.length+.3*T);this.termResults(e.term,j,C,A,l,u,h,y)}}}catch(z){r={error:z}}finally{try{x&&!x.done&&(i=O.return)&&i.call(O)}finally{if(r)throw r.error}}if(v)try{for(var R=w(v.keys()),F=R.next();!F.done;F=R.next()){var j=F.value,H=M(v.get(j),2),D=H[0],T=H[1];if(T){var C=p*j.length/(j.length+T);this.termResults(e.term,j,C,D,l,u,h,y)}}}catch(z){o={error:z}}finally{try{F&&!F.done&&(a=R.return)&&a.call(R)}finally{if(o)throw o.error}}return y},n.prototype.executeWildcardQuery=function(e){var t,r,i=new Map,o=L(L({},this._options.searchOptions),e);try{for(var a=w(this._documentIds),s=a.next();!s.done;s=a.next()){var l=M(s.value,2),u=l[0],c=l[1],d=o.boostDocument?o.boostDocument(c,"",this._storedFields.get(u)):1;i.set(u,{score:d,terms:[],match:{}})}}catch(h){t={error:h}}finally{try{s&&!s.done&&(r=a.return)&&r.call(a)}finally{if(t)throw t.error}}return i},n.prototype.combineResults=function(e,t){if(t===void 0&&(t=he),e.length===0)return new Map;var r=t.toLowerCase();return e.reduce(Ut[r])||new Map},n.prototype.toJSON=function(){var e,t,r,i,o=[];try{for(var a=w(this._index),s=a.next();!s.done;s=a.next()){var l=M(s.value,2),u=l[0],c=l[1],d={};try{for(var h=(r=void 0,w(c)),f=h.next();!f.done;f=h.next()){var p=M(f.value,2),g=p[0],m=p[1];d[g]=Object.fromEntries(m)}}catch(y){r={error:y}}finally{try{f&&!f.done&&(i=h.return)&&i.call(h)}finally{if(r)throw r.error}}o.push([u,d])}}catch(y){e={error:y}}finally{try{s&&!s.done&&(t=a.return)&&t.call(a)}finally{if(e)throw e.error}}return{documentCount:this._documentCount,nextId:this._nextId,documentIds:Object.fromEntries(this._documentIds),fieldIds:this._fieldIds,fieldLength:Object.fromEntries(this._fieldLength),averageFieldLength:this._avgFieldLength,storedFields:Object.fromEntries(this._storedFields),dirtCount:this._dirtCount,index:o,serializationVersion:2}},n.prototype.termResults=function(e,t,r,i,o,a,s,l){var u,c,d,h,f;if(l===void 0&&(l=new Map),i==null)return l;try{for(var p=w(Object.keys(o)),g=p.next();!g.done;g=p.next()){var m=g.value,y=o[m],b=this._fieldIds[m],v=i.get(b);if(v!=null){var E=v.size,S=this._avgFieldLength[b];try{for(var O=(d=void 0,w(v.keys())),x=O.next();!x.done;x=O.next()){var k=x.value;if(!this._documentIds.has(k)){this.removeTerm(b,k,t),E-=1;continue}var j=a?a(this._documentIds.get(k),t,this._storedFields.get(k)):1;if(j){var A=v.get(k),T=this._fieldLength.get(k)[b],C=Yt(A,E,this._documentCount,T,S,s),R=r*y*j*C,F=l.get(k);if(F){F.score+=R,Xt(F.terms,e);var H=oe(F.match,t);H?H.push(m):F.match[t]=[m]}else l.set(k,{score:R,terms:[e],match:(f={},f[t]=[m],f)})}}}catch(D){d={error:D}}finally{try{x&&!x.done&&(h=O.return)&&h.call(O)}finally{if(d)throw d.error}}}}}catch(D){u={error:D}}finally{try{g&&!g.done&&(c=p.return)&&c.call(p)}finally{if(u)throw u.error}}return l},n.prototype.addTerm=function(e,t,r){var i=this._index.fetch(r,Ee),o=i.get(e);if(o==null)o=new Map,o.set(t,1),i.set(e,o);else{var a=o.get(t);o.set(t,(a||0)+1)}},n.prototype.removeTerm=function(e,t,r){if(!this._index.has(r)){this.warnDocumentChanged(t,e,r);return}var i=this._index.fetch(r,Ee),o=i.get(e);o==null||o.get(t)==null?this.warnDocumentChanged(t,e,r):o.get(t)<=1?o.size<=1?i.delete(e):o.delete(t):o.set(t,o.get(t)-1),this._index.get(r).size===0&&this._index.delete(r)},n.prototype.warnDocumentChanged=function(e,t,r){var i,o;try{for(var a=w(Object.keys(this._fieldIds)),s=a.next();!s.done;s=a.next()){var l=s.value;if(this._fieldIds[l]===t){this._options.logger("warn","MiniSearch: document with ID ".concat(this._documentIds.get(e),' has changed before removal: term "').concat(r,'" was not present in field "').concat(l,'". Removing a document after it has changed can corrupt the index!'),"version_conflict");return}}}catch(u){i={error:u}}finally{try{s&&!s.done&&(o=a.return)&&o.call(a)}finally{if(i)throw i.error}}},n.prototype.addDocumentId=function(e){var t=this._nextId;return this._idToShortId.set(e,t),this._documentIds.set(t,e),this._documentCount+=1,this._nextId+=1,t},n.prototype.addFields=function(e){for(var t=0;t<e.length;t++)this._fieldIds[e[t]]=t},n.prototype.addFieldLength=function(e,t,r,i){var o=this._fieldLength.get(e);o==null&&this._fieldLength.set(e,o=[]),o[t]=i;var a=this._avgFieldLength[t]||0,s=a*r+i;this._avgFieldLength[t]=s/(r+1)},n.prototype.removeFieldLength=function(e,t,r,i){if(r===1){this._avgFieldLength[t]=0;return}var o=this._avgFieldLength[t]*r-i;this._avgFieldLength[t]=o/(r-1)},n.prototype.saveStoredFields=function(e,t){var r,i,o=this._options,a=o.storeFields,s=o.extractField;if(!(a==null||a.length===0)){var l=this._storedFields.get(e);l==null&&this._storedFields.set(e,l={});try{for(var u=w(a),c=u.next();!c.done;c=u.next()){var d=c.value,h=s(t,d);h!==void 0&&(l[d]=h)}}catch(f){r={error:f}}finally{try{c&&!c.done&&(i=u.return)&&i.call(u)}finally{if(r)throw r.error}}}},n.wildcard=Symbol("*"),n}(),oe=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)?n[e]:void 0},Ut=(G={},G[he]=function(n,e){var t,r;try{for(var i=w(e.keys()),o=i.next();!o.done;o=i.next()){var a=o.value,s=n.get(a);if(s==null)n.set(a,e.get(a));else{var l=e.get(a),u=l.score,c=l.terms,d=l.match;s.score=s.score+u,s.match=Object.assign(s.match,d),Ce(s.terms,c)}}}catch(h){t={error:h}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(t)throw t.error}}return n},G[qe]=function(n,e){var t,r,i=new Map;try{for(var o=w(e.keys()),a=o.next();!a.done;a=o.next()){var s=a.value,l=n.get(s);if(l!=null){var u=e.get(s),c=u.score,d=u.terms,h=u.match;Ce(l.terms,d),i.set(s,{score:l.score+c,terms:l.terms,match:Object.assign(l.match,h)})}}}catch(f){t={error:f}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(t)throw t.error}}return i},G[$t]=function(n,e){var t,r;try{for(var i=w(e.keys()),o=i.next();!o.done;o=i.next()){var a=o.value;n.delete(a)}}catch(s){t={error:s}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(t)throw t.error}}return n},G),Gt={k:1.2,b:.7,d:.5},Yt=function(n,e,t,r,i,o){var a=o.k,s=o.b,l=o.d,u=Math.log(1+(t-e+.5)/(e+.5));return u*(l+n*(a+1)/(n+a*(1-s+s*r/i)))},Jt=function(n){return function(e,t,r){var i=typeof n.fuzzy=="function"?n.fuzzy(e,t,r):n.fuzzy||!1,o=typeof n.prefix=="function"?n.prefix(e,t,r):n.prefix===!0;return{term:e,fuzzy:i,prefix:o}}},ie={idField:"id",extractField:function(n,e){return n[e]},tokenize:function(n){return n.split(Zt)},processTerm:function(n){return n.toLowerCase()},fields:void 0,searchOptions:void 0,storeFields:[],logger:function(n,e){typeof(console==null?void 0:console[n])=="function"&&console[n](e)},autoVacuum:!0},xe={combineWith:he,prefix:!1,fuzzy:!1,maxFuzzy:6,boost:{},weights:{fuzzy:.45,prefix:.375},bm25:Gt},Qt={combineWith:qe,prefix:function(n,e,t){return e===t.length-1}},ue={batchSize:1e3,batchWait:10},ce={minDirtFactor:.1,minDirtCount:20},ae=L(L({},ue),ce),Xt=function(n,e){n.includes(e)||n.push(e)},Ce=function(n,e){var t,r;try{for(var i=w(e),o=i.next();!o.done;o=i.next()){var a=o.value;n.includes(a)||n.push(a)}}catch(s){t={error:s}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(t)throw t.error}}},ke=function(n,e){var t=n.score,r=e.score;return r-t},Ee=function(){return new Map},J=function(n){var e,t,r=new Map;try{for(var i=w(Object.keys(n)),o=i.next();!o.done;o=i.next()){var a=o.value;r.set(parseInt(a,10),n[a])}}catch(s){e={error:s}}finally{try{o&&!o.done&&(t=i.return)&&t.call(i)}finally{if(e)throw e.error}}return r},Zt=/[\n\r -#%-*,-/:;?@[-\]_{}\u00A0\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]+/u;_e({markdown:{cli:`<section class="markdown flex flex-col justify-top items-left text-left p-4 pt-0 mb-4 w-full sm:w-[90%] md:w-[70%] h-fit box-border gap-6"><h1>Using Emmy.js with create-emmy</h1>
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
<Route href='/documentation/vite' to='Vite'></Route>`});function Kt(n){return{current:n}}function en({el:n}){return n.className="flex flex-col justify-between items-center text-center w-full gap-6",_`
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
  `}N(en,"About");document.querySelectorAll("emmy-about").forEach(n=>{n.connectedCallback()});function tn({el:n}){return n.className="flex flex-col justify-space-between gap-2 text-center w-full h-full box-border",_`
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
  `}N(tn,"App");document.querySelectorAll("emmy-app").forEach(n=>{n.connectedCallback()});function nn({el:n}){return n.className="flex flex-col justify-center items-center text-center w-full h-fit box-border",_`
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
  `}N(nn,"Docs");document.querySelectorAll("emmy-docs").forEach(n=>{n.connectedCallback()});function rn({el:n}){return n.className="flex flex-col justify-between items-center text-center w-full h-[80dvh] gap-4",_`
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
  `}N(rn,"Home");document.querySelectorAll("emmy-home").forEach(n=>{n.connectedCallback()});function on({el:n}){return n.className="flex flex-col justify-center items-center text-center max-w-[90%] lg:max-w-full h-fit box-border",B.markdown.cli}N(on,"Cli");document.querySelectorAll("emmy-cli").forEach(n=>{n.connectedCallback()});function an({el:n}){return n.className="flex flex-col justify-center items-center text-center max-w-[90%] lg:max-w-full h-fit box-border",B.markdown.index}N(an,"Index");document.querySelectorAll("emmy-index").forEach(n=>{n.connectedCallback()});function sn({el:n}){return n.className="flex flex-col justify-center items-center text-center max-w-[90%] lg:max-w-full h-fit box-border",B.markdown.rails}N(sn,"Rails");document.querySelectorAll("emmy-rails").forEach(n=>{n.connectedCallback()});function ln({el:n}){return n.className="flex flex-col justify-center items-center text-center max-w-[90%] lg:max-w-full h-fit box-border",B.markdown.vite}N(ln,"Vite");document.querySelectorAll("emmy-vite").forEach(n=>{n.connectedCallback()});function un({el:n}){return n.className="flex flex-col justify-center items-center text-center w-full h-fit mb-[10%] gap-4",_`
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
  `}N(un,"Status");document.querySelectorAll("emmy-status").forEach(n=>{n.connectedCallback()});function cn({el:n}){n.className="flex flex-col justify-center items-center space-y-3";const e=Kt(0),t=o=>{Pt({text:`Counter value changed to ${e.current}`,style:{background:"#1F2937",color:"#fff",borderRadius:"10px"},gravity:"bottom",position:o,duration:600}).showToast()},r=()=>{e.current++,t("right")},i=()=>{e.current--,t("left")};return n.useEffect(()=>{n.querySelector("#plusButton").addEventListener("click",r),n.querySelector("#minusButton").addEventListener("click",i),console.log("rerendered")},["didMount"]),()=>_`
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
  `}N(cn,"Counter");document.querySelectorAll("emmy-counter").forEach(n=>{n.connectedCallback()});function dn({el:n}){const[e,t]=n.useState(!0);return n.useEffect(()=>{n.querySelector("[data-collapse-toggle]").addEventListener("click",()=>{t(!e())})},[]),n.useEffect(()=>{const r=n.querySelector("#navbar-default");r.setAttribute("aria-expanded",!e()),r.classList=e()?"hidden w-full md:block md:w-auto":"w-full md:block md:w-auto"},[e]),_`
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
  `}N(dn,"Header");document.querySelectorAll("emmy-header").forEach(n=>{n.connectedCallback()});function hn({el:n,props:e}){const{type:t}=e();if(!t())return"";let r={unstable:"bg-yellow-900 text-yellow-300",stable:"bg-green-900 text-green-300",deprecated:"bg-red-900 text-red-300",experimental:"bg-purple-900 text-purple-300",planned:"bg-blue-900 text-blue-300"}[t().trim()];return n.className=`${r} inline-flex items-center me-2 px-2.5 py-0.5 rounded-full text-xs font-medium`,t().charAt(0).toUpperCase()+t().slice(1)}N(hn,"Pill");document.querySelectorAll("emmy-pill").forEach(n=>{n.connectedCallback()});function fn({props:n,children:e}){return _`
    <li class='py-3 sm:py-4 justify-between space-x-3 rtl:space-x-reverse flex items-center gap-5'>
      <p class='text-sm font-semibold text-gray-900 truncate dark:text-white'>
        ${e()}
      </p>
      <Pill type='${n().status()}' />
    </li>
  `}N(fn,"Row");document.querySelectorAll("emmy-row").forEach(n=>{n.connectedCallback()});function mn({el:n}){const[e,t]=n.useState(!1),[r,i]=n.useState([]);return n.useEffect(()=>{let o=new qt({fields:["id","title","content","url"],storeFields:["title","content","url"]});const a=Object.entries(B.markdown??{}).map(([s,l])=>({id:s,title:l.match(/<h1(.*?)>(.*?)<\/h1>/).slice(2).join(""),url:s==="index"?"/documentation":`/documentation/${s}`,content:l}));o.addAll(a),n.querySelector("form").addEventListener("submit",s=>{s.preventDefault();const l=s.target.querySelector("input").value;l&&(i(o.search(l)),r().length===0&&i(a),t(!0))}),n.querySelector("#close-modal").addEventListener("click",()=>t(!1))},[]),()=>_`
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
              ${r().map(o=>_`
                <li>
                  <a href='${o.url}' class='inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500'>                        
                    <div class='block'>
                      <div class='w-full text-lg font-semibold'>${o.title}</div>
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
  `}N(mn,"Search");document.querySelectorAll("emmy-search").forEach(n=>{n.connectedCallback()});function pn({el:n}){return n.className="absolute inset-0 bg-gray-900 bg-opacity-90 flex flex-col justify-center items-center w-full h-full",_`<div class='text-white text-3xl font-bold mb-4'>Under construction \u{1f6a7}</div>`}N(pn,"UnderConstruction");document.querySelectorAll("emmy-underconstruction").forEach(n=>{n.connectedCallback()});function gn({el:n}){return n.className="dark:text-white text-slate-900 text-center p-6 w-full flex justify-center gap-0 sm:justify-between",_`
    <a href='https://github.com/emmyjs/emmyjs' target='_blank' rel='noopener noreferrer' class='inline-block'>
      <svg class='w-4 h-4 mr-2 inline-block' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20'>
        <path fill-rule='evenodd' d='M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z' clip-rule='evenodd'/>
      </svg>
    </a>
    <p>Made with <span class='text-red-500'>&#9829;</span> by <a href='https://www.linkedin.com/in/eanorambuena/' target='_blank' rel='noopener noreferrer'>@eanorambuena</a></p>
  `}N(gn,"Footer");document.querySelectorAll("emmy-footer").forEach(n=>{n.connectedCallback()});function fe(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function Se(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function me(n,e,t){return e&&Se(n.prototype,e),t&&Se(n,t),n}function je(n){return+n.replace(/px/,"")}function vn(n){var e=window.devicePixelRatio,t=getComputedStyle(n),r=je(t.getPropertyValue("width")),i=je(t.getPropertyValue("height"));n.setAttribute("width",(r*e).toString()),n.setAttribute("height",(i*e).toString())}function P(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,r=Math.random()*(e-n)+n;return Math.floor(r*Math.pow(10,t))/Math.pow(10,t)}function Ae(n){return n[P(0,n.length)]}var yn=.00125,bn=5e-4,wn=9e-4,xn=1e-5,Cn=6,kn=80,En=.9,Sn=1.7,jn=.2,An=.6,Fn=.03,Ln=.07,Fe=15,Le=82,Tn=150,On=100,Rn=250,Mn=40,In=["#fcf403","#62fc03","#f4fc03","#03e7fc","#03fca5","#a503fc","#fc03ad","#fc03c2"];function Te(n){var e=1920;return Math.log(n)/Math.log(e)}var Oe=function(){function n(e){fe(this,n);var t=e.initialPosition,r=e.direction,i=e.confettiRadius,o=e.confettiColors,a=e.emojis,s=e.emojiSize,l=e.canvasWidth,u=P(En,Sn,3),c=u*Te(l);this.confettiSpeed={x:c,y:c},this.finalConfettiSpeedX=P(jn,An,3),this.rotationSpeed=a.length?.01:P(Fn,Ln,3)*Te(l),this.dragForceCoefficient=P(bn,wn,6),this.radius={x:i,y:i},this.initialRadius=i,this.rotationAngle=r==="left"?P(0,.2,3):P(-.2,0,3),this.emojiSize=s,this.emojiRotationAngle=P(0,2*Math.PI),this.radiusYUpdateDirection="down";var d=r==="left"?P(Le,Fe)*Math.PI/180:P(-Fe,-Le)*Math.PI/180;this.absCos=Math.abs(Math.cos(d)),this.absSin=Math.abs(Math.sin(d));var h=P(-Tn,0),f={x:t.x+(r==="left"?-h:h)*this.absCos,y:t.y-h*this.absSin};this.currentPosition=Object.assign({},f),this.initialPosition=Object.assign({},f),this.color=a.length?null:Ae(o),this.emoji=a.length?Ae(a):null,this.createdAt=new Date().getTime(),this.direction=r}return me(n,[{key:"draw",value:function(t){var r=this.currentPosition,i=this.radius,o=this.color,a=this.emoji,s=this.rotationAngle,l=this.emojiRotationAngle,u=this.emojiSize,c=window.devicePixelRatio;o?(t.fillStyle=o,t.beginPath(),t.ellipse(r.x*c,r.y*c,i.x*c,i.y*c,s,0,2*Math.PI),t.fill()):a&&(t.font="".concat(u,"px serif"),t.save(),t.translate(c*r.x,c*r.y),t.rotate(l),t.textAlign="center",t.fillText(a,0,0),t.restore())}},{key:"updatePosition",value:function(t,r){var i=this.confettiSpeed,o=this.dragForceCoefficient,a=this.finalConfettiSpeedX,s=this.radiusYUpdateDirection,l=this.rotationSpeed,u=this.createdAt,c=this.direction,d=r-u;if(i.x>a&&(this.confettiSpeed.x-=o*t),this.currentPosition.x+=i.x*(c==="left"?-this.absCos:this.absCos)*t,this.currentPosition.y=this.initialPosition.y-i.y*this.absSin*d+yn*Math.pow(d,2)/2,this.rotationSpeed-=this.emoji?1e-4:xn*t,this.rotationSpeed<0&&(this.rotationSpeed=0),this.emoji){this.emojiRotationAngle+=this.rotationSpeed*t%(2*Math.PI);return}s==="down"?(this.radius.y-=t*l,this.radius.y<=0&&(this.radius.y=0,this.radiusYUpdateDirection="up")):(this.radius.y+=t*l,this.radius.y>=this.initialRadius&&(this.radius.y=this.initialRadius,this.radiusYUpdateDirection="down"))}},{key:"getIsVisibleOnCanvas",value:function(t){return this.currentPosition.y<t+On}}]),n}();function Nn(){var n=document.createElement("canvas");return n.style.position="fixed",n.style.width="100%",n.style.height="100%",n.style.top="0",n.style.left="0",n.style.zIndex="1000",n.style.pointerEvents="none",document.body.appendChild(n),n}function _n(n){var e=n.confettiRadius,t=e===void 0?Cn:e,r=n.confettiNumber,i=r===void 0?n.confettiesNumber||(n.emojis?Mn:Rn):r,o=n.confettiColors,a=o===void 0?In:o,s=n.emojis,l=s===void 0?n.emojies||[]:s,u=n.emojiSize,c=u===void 0?kn:u;return n.emojies&&console.error("emojies argument is deprecated, please use emojis instead"),n.confettiesNumber&&console.error("confettiesNumber argument is deprecated, please use confettiNumber instead"),{confettiRadius:t,confettiNumber:i,confettiColors:a,emojis:l,emojiSize:c}}var Dn=function(){function n(e){var t=this;fe(this,n),this.canvasContext=e,this.shapes=[],this.promise=new Promise(function(r){return t.resolvePromise=r})}return me(n,[{key:"getBatchCompletePromise",value:function(){return this.promise}},{key:"addShapes",value:function(){var t;(t=this.shapes).push.apply(t,arguments)}},{key:"complete",value:function(){var t;return this.shapes.length?!1:((t=this.resolvePromise)===null||t===void 0||t.call(this),!0)}},{key:"processShapes",value:function(t,r,i){var o=this,a=t.timeDelta,s=t.currentTime;this.shapes=this.shapes.filter(function(l){return l.updatePosition(a,s),l.draw(o.canvasContext),i?l.getIsVisibleOnCanvas(r):!0})}}]),n}(),Pn=function(){function n(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};fe(this,n),this.activeConfettiBatches=[],this.canvas=e.canvas||Nn(),this.canvasContext=this.canvas.getContext("2d"),this.requestAnimationFrameRequested=!1,this.lastUpdated=new Date().getTime(),this.iterationIndex=0,this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}return me(n,[{key:"loop",value:function(){this.requestAnimationFrameRequested=!1,vn(this.canvas);var t=new Date().getTime(),r=t-this.lastUpdated,i=this.canvas.offsetHeight,o=this.iterationIndex%10===0;this.activeConfettiBatches=this.activeConfettiBatches.filter(function(a){return a.processShapes({timeDelta:r,currentTime:t},i,o),o?!a.complete():!0}),this.iterationIndex++,this.queueAnimationFrameIfNeeded(t)}},{key:"queueAnimationFrameIfNeeded",value:function(t){this.requestAnimationFrameRequested||this.activeConfettiBatches.length<1||(this.requestAnimationFrameRequested=!0,this.lastUpdated=t||new Date().getTime(),requestAnimationFrame(this.loop))}},{key:"addConfetti",value:function(){for(var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=_n(t),i=r.confettiRadius,o=r.confettiNumber,a=r.confettiColors,s=r.emojis,l=r.emojiSize,u=this.canvas.getBoundingClientRect(),c=u.width,d=u.height,h=d*5/7,f={x:0,y:h},p={x:c,y:h},g=new Dn(this.canvasContext),m=0;m<o/2;m++){var y=new Oe({initialPosition:f,direction:"right",confettiRadius:i,confettiColors:a,confettiNumber:o,emojis:s,emojiSize:l,canvasWidth:c}),b=new Oe({initialPosition:p,direction:"left",confettiRadius:i,confettiColors:a,confettiNumber:o,emojis:s,emojiSize:l,canvasWidth:c});g.addShapes(y,b)}return this.activeConfettiBatches.push(g),this.queueAnimationFrameIfNeeded(),g.getBatchCompletePromise()}},{key:"clearCanvas",value:function(){this.activeConfettiBatches=[]}},{key:"destroyCanvas",value:function(){this.canvas.remove()}}]),n}();hljs.highlightAll();const Hn=new Pn;Hn.addConfetti();
