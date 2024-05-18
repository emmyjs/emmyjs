(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();var Ue=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Oe(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Q={boxFlex:!0,boxFlexGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,strokeDashoffset:!0,strokeOpacity:!0,strokeWidth:!0};function Ge(n,e){return n+e.charAt(0).toUpperCase()+e.substring(1)}var Ye=["Webkit","ms","Moz","O"];Object.keys(Q).forEach(function(n){Ye.forEach(function(e){Q[Ge(e,n)]=Q[n]})});var Je={background:{backgroundImage:!0,backgroundPosition:!0,backgroundRepeat:!0,backgroundColor:!0},border:{borderWidth:!0,borderStyle:!0,borderColor:!0},borderBottom:{borderBottomWidth:!0,borderBottomStyle:!0,borderBottomColor:!0},borderLeft:{borderLeftWidth:!0,borderLeftStyle:!0,borderLeftColor:!0},borderRight:{borderRightWidth:!0,borderRightStyle:!0,borderRightColor:!0},borderTop:{borderTopWidth:!0,borderTopStyle:!0,borderTopColor:!0},font:{fontStyle:!0,fontVariant:!0,fontWeight:!0,fontSize:!0,lineHeight:!0,fontFamily:!0}},Qe={isUnitlessNumber:Q,shorthandPropertyExpansions:Je},Xe=Qe,Ze=/^ms-/,Ke=/([A-Z])/g;function et(n){return n.replace(Ke,"-$1").toLowerCase()}function tt(n){return et(n).replace(Ze,"-ms-")}var nt=tt,rt=Xe.isUnitlessNumber,ot=nt,at=Array.isArray,pe=Object.keys,it=/^(normal|none|(\b(url\([^)]*\)|chapter_counter|attr\([^)]*\)|(no-)?(open|close)-quote|inherit)((\b\s*)|$|\s+))+)$/;function ge(n,e){return!rt[n]&&typeof e=="number"?e=""+e+"px":n==="content"&&!it.test(e)&&(e="'"+e.replace(/'/g,"\\'")+"'"),ot(n)+": "+e+";  "}function lt(n){var e="";if(!n||pe(n).length===0)return e;for(var t=pe(n),r=0,o=t.length;r<o;r++){var a=t[r],i=n[a];if(at(i))for(var l=0,s=i.length;l<s;l++)e+=ge(a,i[l]);else e+=ge(a,i)}return e}var st=lt;const ut=Oe(st);var ct=Object.prototype.propertyIsEnumerable;function dt(n){if(n==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(n)}function ht(n){var e=Object.getOwnPropertyNames(n);return Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(n))),e.filter(function(t){return ct.call(n,t)})}var ft=Object.assign||function(n,e){for(var t,r,o=dt(n),a=1;a<arguments.length;a++){t=arguments[a],r=ht(Object(t));for(var i=0;i<r.length;i++)o[r[i]]=t[r[i]]}return o},Y=Array.isArray,mt=ft,pt=3;function Me(n,e){this.callBefore=e&&e.before||this.noop,this.callAfter=e&&e.after||this.noop,this.callProcess=e&&e.process;var t=this;this.scope=null,this.interpreter=n,this.interpreter.setRenderer(this),this.render=function(o,a,i){if(!o)throw new Error("JSX element is not presented");if(typeof o=="string"?o={tag:o,props:ye(a)?a:null,children:Array.isArray(i)?i:null}:typeof o=="function"&&(o={tag:[o.name||o.displayName||"",o],props:ye(a)?a:null,children:Array.isArray(i)?i:null}),!t.isTagDescriptor(o))throw new Error("Top level element should be a tag or function which returns a tag");return t.scope={},o=t.callBefore(o),t.callProcess?t.callProcess(function(){o=t.renderChild(o)}):o=t.renderChild(o),o=t.callAfter(o),t.scope=null,o}}Me.prototype={renderChild:function(n){return n==null?null:this.isTagDescriptor(n)?this.handleTag(n):n},walkChildren:function(n,e,t){var r=n.length,o=0,a;for(t=t|0;o<r;o++)if(a=n[o],a!=null){if(Y(a)&&t<pt){this.walkChildren(a,e);continue}e(this.renderChild(a))}},handleTag:function(n){var e=n.tag,t=n.props,r=n.children,o,a;if(t=Y(t)?mt.apply(null,t):t||null,Y(e)){a=e[1],e=e[0];var i;return this.interpreter.hasCustomOverride(e)?(i=this.interpreter.custom(e,a,t,r),this.check(i,"custom")):i=a(t,r,e),this.renderChild(i)}return t=t&&this.interpreter.props(e,t),this.check(t,"props"),o=this.interpreter.enter(e,t),this.check(o,"enter"),Y(r)&&r.length&&(r=this.interpreter.children(e,r,o),this.check(r,"children"),o=this.handleChildren(e,r,o)),o=this.interpreter.leave(e,o),this.check(o,"leave"),o},handleChildren:function(n,e,t){var r=this;return this.walkChildren(e,function(o){t=r.interpreter.child(n,t,o),r.check(t,"child")}),t},handlePrivimite:function(n){return n},isPrimitive:function(n){switch(typeof n){case"string":case"boolean":case"number":return!0}return!1},isTagDescriptor:function(n){return n&&typeof n=="object"&&"tag"in n&&"props"in n&&"children"in n},check:function(n,e){if(typeof n>"u")throw new Error("Source ["+e+"] returned undefined");return n},noop:function(n){return n}};function ye(n){return typeof n=="object"&&n&&!Y(n)}var gt=Me;function Ie(n,e){var t=this;this.name=n,this.tags={},this.renderer=null,e&&Object.keys(e).forEach(function(r){var o=e[r];t.addTagHandler(r,o)})}Ie.prototype={addTagHandler:function(n,e){this.tags[n]=e},getHandler:function(n){var e=this.tags[n]||this.tags["*"];if(!e)throw new Error("JSX ["+n+"] is not found and [*] is missing");return e},hasCustomOverride:function(n){var e=this.getHandler(n);return!!e.custom},setRenderer:function(n){this.renderer=n},call:function(n,e){var t=this[n].apply(this,e);return typeof t>"u"&&console.log("Interpreter call ["+n+"] returned undefined"),t},props:function(n,e){var t=this.getHandler(n);return t.props?t.props.call(this.renderer,e,n):e},child:function(n,e,t){var r=this.getHandler(n);return r.child?r.child.call(this.renderer,t,e,n):e},enter:function(n,e){var t=this.getHandler(n);if(!t.enter)throw new Error("JSX Interpreter handler should provide [enter] method");return t.enter.call(this.renderer,n,e)},leave:function(n,e){var t=this.getHandler(n);return t.leave?t.leave.call(this.renderer,e,n):e},custom:function(n,e,t,r){var o=this.getHandler(n);return o.custom.call(this.renderer,e,t,r,n)},children:function(n,e,t){var r=this.getHandler(n);return r.children?r.children.call(this.renderer,e,t,n):e}};var yt=Ie,vt=gt,xt=yt,ve={},bt={register:function(e,t){e=e.toLowerCase();var r=new xt(e,t.tags),o=new vt(r,{before:t.before,after:t.after,process:t.process});return ve[e]=o,o},render:function(e,t){if(t=t.toLowerCase(),t=t&&ve[t],!t)throw new Error("Renderer ["+t+"] not found");return t.render(e)}},wt=bt;/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */var kt=/["'&<>]/,Ct=Et;function Et(n){var e=""+n,t=kt.exec(e);if(!t)return e;var r,o="",a=0,i=0;for(a=t.index;a<e.length;a++){switch(e.charCodeAt(a)){case 34:r="&quot;";break;case 38:r="&amp;";break;case 39:r="&#39;";break;case 60:r="&lt;";break;case 62:r="&gt;";break;default:continue}i!==a&&(o+=e.substring(i,a)),i=a+1,o+=r}return i!==a?o+e.substring(i,a):o}function Ne(n,e){this.name=n,this.props=e,this.children=[]}Ne.prototype.toString=function(){var n=this.props?" "+this.props:"";return"<"+this.name+n+">"+this.children.join("")+"</"+this.name+">"};var St=Ne,jt=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],At=wt,X=Ct,le=St,Ft=Object.prototype.hasOwnProperty,Lt=jt.reduce(function(n,e){return n[e]=!0,n},Object.create(null)),Tt=At.register("HTML",{tags:{"*":{enter:function(n,e){if(X(n)!==n)throw new Error("Incorrect tag name: "+n);return new le(n,e)},leave:function(n,e){return n},child:function(n,e){return n==null||(n instanceof le||(n=X(n+"")),e.children.push(n)),e},props:function(n){return Object.keys(n).map(function(e){return Ot(e,e&&n[e])}).join(" ")},children:function(n,e,t){if(typeof Lt[t.toLowerCase()]<"u")throw new Error("Tag <"+t+" /> cannot have children");return n}}},after:function(n){return n.toString()}}),Rt=Tt;function Ot(n,e){return!n||e==null||e instanceof le?"":(n==="className"?n="class":n==="cssFor"?n="for":n=n.toLowerCase(),n==="style"&&(e=Mt(e)),typeof e=="string"||(e=JSON.stringify(e)),X(n)+'="'+X(e)+'"')}function Mt(n){if(typeof n=="string")return n;var e="";for(var t in n)if(Ft.call(n,t)){var r=n[t];t=t.replace(/[A-Z]/g,function(o){return"-"+o.toLowerCase()}),t.search(/moz-|webkit-|o-|ms-/)===0&&(t="-"+t),e+=(e?" ":"")+t+": "+r+";"}return e}const _=String.raw,It=Rt.render,B={},_e=n=>{Object.entries(n).forEach(([e,t])=>{B[e]=t})};function Pe(n){return n.replace(/<\/?[^>]+>/g,t=>{const r=t.slice(0,-1);if(/^[A-Z]/.test(t.slice(1,-1))){const o=r.split(" ")[0].slice(1),a=r.split(" ").slice(1);return`<emmy-${o.toLowerCase()} ${a.join(" ")}>`}else if(/^[A-Z]/.test(t.slice(2,-2))){const o=r.split(" ")[0].slice(2),a=r.split(" ").slice(1);return`</emmy-${o.toLowerCase()} ${a.join(" ")}>`}return t}).replace(/<emmy-[^>]+\/>/g,t=>{const r=t.slice(6,-2);return`<emmy-${r}></emmy-${r}>`})}function Nt(n){const e={};return n.split("").forEach(t=>{const[r,o]=t.split(":");r&&o&&(e[r.trim()]=o.trim())}),e}function _t(n){if(typeof n!="string")return ut(n).trim();const e=Nt(n);let t="";for(const r in e)e.hasOwnProperty(r)&&(t+=`${r}: ${e[r]} `);return t.trim()}function U(n){return/^[A-Z]/.test(n)&&(n="emmy-"+n.toLowerCase()),n}function xe(n){return n.map(e=>typeof e=="function"?e():e)}function Pt(n){let e=n;return[()=>e,o=>{e=o}]}const Dt="flex flex-col justify-center items-center space-y-3 text-center w-full h-fit box-border";class De extends HTMLElement{constructor(){super(),this.contentGenerator=()=>"",this.callback=e=>{},this.Style={}}addStyle(e){for(const[t,r]of Object.entries(e))this.Style[t]=_t(r),t=="this"&&this.setAttribute("style",this.Style[t])}render(e,t){if(typeof e!="function"&&typeof e!="string")try{const r=It(e);console.log(r),this.contentGenerator=()=>r}catch{this.contentGenerator=()=>e}else typeof e!="function"?this.contentGenerator=()=>e:this.contentGenerator=e;t&&typeof t=="function"&&(this.callback=t)}}class Ht extends De{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.shadowRoot.innerHTML=Pe(this.contentGenerator(this)),this.callback.call(this,this)}querySelector(e){return this.shadowRoot.querySelector(U(e))}}class ee extends De{connectedCallback(){this.innerHTML=Pe(this.contentGenerator(this)),this.callback.call(this,this)}querySelector(e){return HTMLElement.prototype.querySelector.call(this,U(e))}}function Wt(n,e){const t=this.effectCallback;if(!e||e.length===0){this.effectCallback=o=>{t(o),n.call(o,o)};return}let r=xe(e);this.effectCallback=o=>{t(o);const a=xe(e);JSON.stringify(r)!==JSON.stringify(a)&&(r=a,n.call(o,o))},e.find(o=>{if(typeof o=="string"&&o==="didMount"){const a=this.callback;this.callback=i=>{a.call(i,i),n.call(i,i)}}return!1})}function zt(n){n.useState=Pt.bind(n),n.useEffect=Wt.bind(n)}class be extends ee{constructor(e){super(),this.effectCallback=r=>{},zt.call(this,this),this.setState({rerenderCount:0});const t=e.call(this,{el:this,props:()=>this.props,children:()=>this.innerHTML});this.render(t)}get props(){return Array.from(this.attributes).reduce((e,t)=>{const r=t.name==="class"?"className":t.name;return Object.assign(Object.assign({},e),{[r]:()=>this.getAttribute(t.name)})},{})}set props(e){for(const[t,r]of Object.entries(e)){if(t==="className"){this.className=r;continue}this.setAttribute(t,r)}}connectedCallback(){super.connectedCallback(),this.effectCallback(this)}static get observedAttributes(){return["state"]}attributeChangedCallback(e,t,r){e==="state"&&this.connectedCallback()}patchState(e){const t=this.state(),r=Object.assign(t,e);this.setState(r)}rerender(){this.patchState({rerenderCount:this.state().rerenderCount+1})}state(){return JSON.parse(this.getAttribute("state").replace(/'/g,'"')||"")}setState(e){this.setAttribute("state",JSON.stringify(e).replace(/"/g,"'"))}querySelector(e){const t=HTMLElement.prototype.querySelector.call(this,U(e));return t.__proto__.addEventListener=(r,o)=>{const a=i=>{o(i),this.rerender()};HTMLElement.prototype.addEventListener.call(t,r,a)},t}}class V extends ee{constructor(){super(),this.render("",()=>{const t="emmy-"+(this.getAttribute("to")||"").toLowerCase(),r=this.getAttribute("href")==="/"?"/root":this.getAttribute("href")||"/404";V.routes[r]=`<${t}></${t}>`})}}V.routes={};class Vt extends ee{constructor(){super(),this.className=Dt,this.handleLocation=()=>{const e=window.location.pathname,t=(e==="/"?V.routes["/root"]:V.routes[e])||V.routes["/404"]||_`<h1>404</h1>`;this.innerHTML!==t&&(this.innerHTML=t)},window.route=e=>{e.preventDefault();const t=e.target;window.location.pathname!==t.href&&(window.history.pushState({},"",t.href),this.handleLocation())},window.onpopstate=this.handleLocation,this.render("",()=>this.handleLocation())}}function Z(n,e){return customElements.get(U(e))?(console.warn(`Custom element ${U(e)} already defined`),n):(customElements.define(U(e),n),n)}function Bt(n,e){return void 0}function N(n,e){if(typeof n=="string")return Bt();try{const t=new n;if(t instanceof Ht||t instanceof ee||t instanceof be)return Z(n,e);throw new Error("Not a valid component")}catch{class r extends be{constructor(){super(n)}}return Z(r,e)}}Z(V,"Route");Z(Vt,"Router");var He={exports:{}};/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */(function(n){(function(e,t){n.exports?n.exports=t():e.Toastify=t()})(Ue,function(e){var t=function(i){return new t.lib.init(i)},r="1.12.0";t.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},t.lib=t.prototype={toastify:r,constructor:t,init:function(i){return i||(i={}),this.options={},this.toastElement=null,this.options.text=i.text||t.defaults.text,this.options.node=i.node||t.defaults.node,this.options.duration=i.duration===0?0:i.duration||t.defaults.duration,this.options.selector=i.selector||t.defaults.selector,this.options.callback=i.callback||t.defaults.callback,this.options.destination=i.destination||t.defaults.destination,this.options.newWindow=i.newWindow||t.defaults.newWindow,this.options.close=i.close||t.defaults.close,this.options.gravity=i.gravity==="bottom"?"toastify-bottom":t.defaults.gravity,this.options.positionLeft=i.positionLeft||t.defaults.positionLeft,this.options.position=i.position||t.defaults.position,this.options.backgroundColor=i.backgroundColor||t.defaults.backgroundColor,this.options.avatar=i.avatar||t.defaults.avatar,this.options.className=i.className||t.defaults.className,this.options.stopOnFocus=i.stopOnFocus===void 0?t.defaults.stopOnFocus:i.stopOnFocus,this.options.onClick=i.onClick||t.defaults.onClick,this.options.offset=i.offset||t.defaults.offset,this.options.escapeMarkup=i.escapeMarkup!==void 0?i.escapeMarkup:t.defaults.escapeMarkup,this.options.ariaLive=i.ariaLive||t.defaults.ariaLive,this.options.style=i.style||t.defaults.style,i.backgroundColor&&(this.options.style.background=i.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var i=document.createElement("div");i.className="toastify on "+this.options.className,this.options.position?i.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(i.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):i.className+=" toastify-right",i.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var l in this.options.style)i.style[l]=this.options.style[l];if(this.options.ariaLive&&i.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)i.appendChild(this.options.node);else if(this.options.escapeMarkup?i.innerText=this.options.text:i.innerHTML=this.options.text,this.options.avatar!==""){var s=document.createElement("img");s.src=this.options.avatar,s.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?i.appendChild(s):i.insertAdjacentElement("afterbegin",s)}if(this.options.close===!0){var u=document.createElement("button");u.type="button",u.setAttribute("aria-label","Close"),u.className="toast-close",u.innerHTML="&#10006;",u.addEventListener("click",(function(m){m.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}).bind(this));var c=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&c>360?i.insertAdjacentElement("afterbegin",u):i.appendChild(u)}if(this.options.stopOnFocus&&this.options.duration>0){var d=this;i.addEventListener("mouseover",function(m){window.clearTimeout(i.timeOutValue)}),i.addEventListener("mouseleave",function(){i.timeOutValue=window.setTimeout(function(){d.removeElement(i)},d.options.duration)})}if(typeof this.options.destination<"u"&&i.addEventListener("click",(function(m){m.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}).bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&i.addEventListener("click",(function(m){m.stopPropagation(),this.options.onClick()}).bind(this)),typeof this.options.offset=="object"){var h=o("x",this.options),f=o("y",this.options),p=this.options.position=="left"?h:"-"+h,g=this.options.gravity=="toastify-top"?f:"-"+f;i.style.transform="translate("+p+","+g+")"}return i},showToast:function(){this.toastElement=this.buildToast();var i;if(typeof this.options.selector=="string"?i=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?i=this.options.selector:i=document.body,!i)throw"Root element is not defined";var l=t.defaults.oldestFirst?i.firstChild:i.lastChild;return i.insertBefore(this.toastElement,l),t.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout((function(){this.removeElement(this.toastElement)}).bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(i){i.className=i.className.replace(" on",""),window.setTimeout((function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),i.parentNode&&i.parentNode.removeChild(i),this.options.callback.call(i),t.reposition()}).bind(this),400)}},t.reposition=function(){for(var i={top:15,bottom:15},l={top:15,bottom:15},s={top:15,bottom:15},u=document.getElementsByClassName("toastify"),c,d=0;d<u.length;d++){a(u[d],"toastify-top")===!0?c="toastify-top":c="toastify-bottom";var h=u[d].offsetHeight;c=c.substr(9,c.length-1);var f=15,p=window.innerWidth>0?window.innerWidth:screen.width;p<=360?(u[d].style[c]=s[c]+"px",s[c]+=h+f):a(u[d],"toastify-left")===!0?(u[d].style[c]=i[c]+"px",i[c]+=h+f):(u[d].style[c]=l[c]+"px",l[c]+=h+f)}return this};function o(i,l){return l.offset[i]?isNaN(l.offset[i])?l.offset[i]:l.offset[i]+"px":"0px"}function a(i,l){return!i||typeof l!="string"?!1:!!(i.className&&i.className.trim().split(/\s+/gi).indexOf(l)>-1)}return t.lib.init.prototype=t.lib,t})})(He);var $t=He.exports;const qt=Oe($t);var L=function(){return L=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++){t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},L.apply(this,arguments)};function Ut(n,e,t,r){function o(a){return a instanceof t?a:new t(function(i){i(a)})}return new(t||(t=Promise))(function(a,i){function l(c){try{u(r.next(c))}catch(d){i(d)}}function s(c){try{u(r.throw(c))}catch(d){i(d)}}function u(c){c.done?a(c.value):o(c.value).then(l,s)}u((r=r.apply(n,e||[])).next())})}function Gt(n,e){var t={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,o,a,i;return i={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(i[Symbol.iterator]=function(){return this}),i;function l(u){return function(c){return s([u,c])}}function s(u){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,u[0]&&(t=0)),t;)try{if(r=1,o&&(a=u[0]&2?o.return:u[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,u[1])).done)return a;switch(o=0,a&&(u=[u[0]&2,a.value]),u[0]){case 0:case 1:a=u;break;case 4:return t.label++,{value:u[1],done:!1};case 5:t.label++,o=u[1],u=[0];continue;case 7:u=t.ops.pop(),t.trys.pop();continue;default:if(a=t.trys,!(a=a.length>0&&a[a.length-1])&&(u[0]===6||u[0]===2)){t=0;continue}if(u[0]===3&&(!a||u[1]>a[0]&&u[1]<a[3])){t.label=u[1];break}if(u[0]===6&&t.label<a[1]){t.label=a[1],a=u;break}if(a&&t.label<a[2]){t.label=a[2],t.ops.push(u);break}a[2]&&t.ops.pop(),t.trys.pop();continue}u=e.call(n,t)}catch(c){u=[6,c],o=0}finally{r=a=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function b(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],r=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&r>=n.length&&(n=void 0),{value:n&&n[r++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function M(n,e){var t=typeof Symbol=="function"&&n[Symbol.iterator];if(!t)return n;var r=t.call(n),o,a=[],i;try{for(;(e===void 0||e-- >0)&&!(o=r.next()).done;)a.push(o.value)}catch(l){i={error:l}}finally{try{o&&!o.done&&(t=r.return)&&t.call(r)}finally{if(i)throw i.error}}return a}var Yt="ENTRIES",We="KEYS",ze="VALUES",I="",te=function(){function n(e,t){var r=e._tree,o=Array.from(r.keys());this.set=e,this._type=t,this._path=o.length>0?[{node:r,keys:o}]:[]}return n.prototype.next=function(){var e=this.dive();return this.backtrack(),e},n.prototype.dive=function(){if(this._path.length===0)return{done:!0,value:void 0};var e=q(this._path),t=e.node,r=e.keys;if(q(r)===I)return{done:!1,value:this.result()};var o=t.get(q(r));return this._path.push({node:o,keys:Array.from(o.keys())}),this.dive()},n.prototype.backtrack=function(){if(this._path.length!==0){var e=q(this._path).keys;e.pop(),!(e.length>0)&&(this._path.pop(),this.backtrack())}},n.prototype.key=function(){return this.set._prefix+this._path.map(function(e){var t=e.keys;return q(t)}).filter(function(e){return e!==I}).join("")},n.prototype.value=function(){return q(this._path).node.get(I)},n.prototype.result=function(){switch(this._type){case ze:return this.value();case We:return this.key();default:return[this.key(),this.value()]}},n.prototype[Symbol.iterator]=function(){return this},n}(),q=function(n){return n[n.length-1]},Jt=function(n,e,t){var r=new Map;if(e===void 0)return r;for(var o=e.length+1,a=o+t,i=new Uint8Array(a*o).fill(t+1),l=0;l<o;++l)i[l]=l;for(var s=1;s<a;++s)i[s*o]=s;return Ve(n,e,t,r,i,1,o,""),r},Ve=function(n,e,t,r,o,a,i,l){var s,u,c=a*i;try{e:for(var d=b(n.keys()),h=d.next();!h.done;h=d.next()){var f=h.value;if(f===I){var p=o[c-1];p<=t&&r.set(l,[n.get(f),p])}else{for(var g=a,m=0;m<f.length;++m,++g){for(var v=f[m],x=i*g,y=x-i,E=o[x],S=Math.max(0,g-t-1),R=Math.min(i-1,g+t),w=S;w<R;++w){var C=v!==e[w],j=o[y+w]+ +C,A=o[y+w+1]+1,T=o[x+w]+1,k=o[x+w+1]=Math.min(j,A,T);k<E&&(E=k)}if(E>t)continue e}Ve(n.get(f),e,t,r,o,g,i,l+f)}}}catch(O){s={error:O}}finally{try{h&&!h.done&&(u=d.return)&&u.call(d)}finally{if(s)throw s.error}}},ne=function(){function n(e,t){e===void 0&&(e=new Map),t===void 0&&(t=""),this._size=void 0,this._tree=e,this._prefix=t}return n.prototype.atPrefix=function(e){var t,r;if(!e.startsWith(this._prefix))throw new Error("Mismatched prefix");var o=M(K(this._tree,e.slice(this._prefix.length)),2),a=o[0],i=o[1];if(a===void 0){var l=M(de(i),2),s=l[0],u=l[1];try{for(var c=b(s.keys()),d=c.next();!d.done;d=c.next()){var h=d.value;if(h!==I&&h.startsWith(u)){var f=new Map;return f.set(h.slice(u.length),s.get(h)),new n(f,e)}}}catch(p){t={error:p}}finally{try{d&&!d.done&&(r=c.return)&&r.call(c)}finally{if(t)throw t.error}}}return new n(a,e)},n.prototype.clear=function(){this._size=void 0,this._tree.clear()},n.prototype.delete=function(e){return this._size=void 0,Qt(this._tree,e)},n.prototype.entries=function(){return new te(this,Yt)},n.prototype.forEach=function(e){var t,r;try{for(var o=b(this),a=o.next();!a.done;a=o.next()){var i=M(a.value,2),l=i[0],s=i[1];e(l,s,this)}}catch(u){t={error:u}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(t)throw t.error}}},n.prototype.fuzzyGet=function(e,t){return Jt(this._tree,e,t)},n.prototype.get=function(e){var t=se(this._tree,e);return t!==void 0?t.get(I):void 0},n.prototype.has=function(e){var t=se(this._tree,e);return t!==void 0&&t.has(I)},n.prototype.keys=function(){return new te(this,We)},n.prototype.set=function(e,t){if(typeof e!="string")throw new Error("key must be a string");this._size=void 0;var r=re(this._tree,e);return r.set(I,t),this},Object.defineProperty(n.prototype,"size",{get:function(){if(this._size)return this._size;this._size=0;for(var e=this.entries();!e.next().done;)this._size+=1;return this._size},enumerable:!1,configurable:!0}),n.prototype.update=function(e,t){if(typeof e!="string")throw new Error("key must be a string");this._size=void 0;var r=re(this._tree,e);return r.set(I,t(r.get(I))),this},n.prototype.fetch=function(e,t){if(typeof e!="string")throw new Error("key must be a string");this._size=void 0;var r=re(this._tree,e),o=r.get(I);return o===void 0&&r.set(I,o=t()),o},n.prototype.values=function(){return new te(this,ze)},n.prototype[Symbol.iterator]=function(){return this.entries()},n.from=function(e){var t,r,o=new n;try{for(var a=b(e),i=a.next();!i.done;i=a.next()){var l=M(i.value,2),s=l[0],u=l[1];o.set(s,u)}}catch(c){t={error:c}}finally{try{i&&!i.done&&(r=a.return)&&r.call(a)}finally{if(t)throw t.error}}return o},n.fromObject=function(e){return n.from(Object.entries(e))},n}(),K=function(n,e,t){var r,o;if(t===void 0&&(t=[]),e.length===0||n==null)return[n,t];try{for(var a=b(n.keys()),i=a.next();!i.done;i=a.next()){var l=i.value;if(l!==I&&e.startsWith(l))return t.push([n,l]),K(n.get(l),e.slice(l.length),t)}}catch(s){r={error:s}}finally{try{i&&!i.done&&(o=a.return)&&o.call(a)}finally{if(r)throw r.error}}return t.push([n,e]),K(void 0,"",t)},se=function(n,e){var t,r;if(e.length===0||n==null)return n;try{for(var o=b(n.keys()),a=o.next();!a.done;a=o.next()){var i=a.value;if(i!==I&&e.startsWith(i))return se(n.get(i),e.slice(i.length))}}catch(l){t={error:l}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(t)throw t.error}}},re=function(n,e){var t,r,o=e.length;e:for(var a=0;n&&a<o;){try{for(var i=(t=void 0,b(n.keys())),l=i.next();!l.done;l=i.next()){var s=l.value;if(s!==I&&e[a]===s[0]){for(var u=Math.min(o-a,s.length),c=1;c<u&&e[a+c]===s[c];)++c;var d=n.get(s);if(c===s.length)n=d;else{var h=new Map;h.set(s.slice(c),d),n.set(e.slice(a,a+c),h),n.delete(s),n=h}a+=c;continue e}}}catch(p){t={error:p}}finally{try{l&&!l.done&&(r=i.return)&&r.call(i)}finally{if(t)throw t.error}}var f=new Map;return n.set(e.slice(a),f),f}return n},Qt=function(n,e){var t=M(K(n,e),2),r=t[0],o=t[1];if(r!==void 0){if(r.delete(I),r.size===0)Be(o);else if(r.size===1){var a=M(r.entries().next().value,2),i=a[0],l=a[1];$e(o,i,l)}}},Be=function(n){if(n.length!==0){var e=M(de(n),2),t=e[0],r=e[1];if(t.delete(r),t.size===0)Be(n.slice(0,-1));else if(t.size===1){var o=M(t.entries().next().value,2),a=o[0],i=o[1];a!==I&&$e(n.slice(0,-1),a,i)}}},$e=function(n,e,t){if(n.length!==0){var r=M(de(n),2),o=r[0],a=r[1];o.set(a+e,t),o.delete(a)}},de=function(n){return n[n.length-1]},G,he="or",qe="and",Xt="and_not",Zt=function(){function n(e){if((e==null?void 0:e.fields)==null)throw new Error('MiniSearch: option "fields" must be provided');var t=e.autoVacuum==null||e.autoVacuum===!0?ie:e.autoVacuum;this._options=L(L(L({},ae),e),{autoVacuum:t,searchOptions:L(L({},we),e.searchOptions||{}),autoSuggestOptions:L(L({},rn),e.autoSuggestOptions||{})}),this._index=new ne,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldIds={},this._fieldLength=new Map,this._avgFieldLength=[],this._nextId=0,this._storedFields=new Map,this._dirtCount=0,this._currentVacuum=null,this._enqueuedVacuum=null,this._enqueuedVacuumConditions=ce,this.addFields(this._options.fields)}return n.prototype.add=function(e){var t,r,o,a,i,l,s=this._options,u=s.extractField,c=s.tokenize,d=s.processTerm,h=s.fields,f=s.idField,p=u(e,f);if(p==null)throw new Error('MiniSearch: document does not have ID field "'.concat(f,'"'));if(this._idToShortId.has(p))throw new Error("MiniSearch: duplicate ID ".concat(p));var g=this.addDocumentId(p);this.saveStoredFields(g,e);try{for(var m=b(h),v=m.next();!v.done;v=m.next()){var x=v.value,y=u(e,x);if(y!=null){var E=c(y.toString(),x),S=this._fieldIds[x],R=new Set(E).size;this.addFieldLength(g,S,this._documentCount-1,R);try{for(var w=(o=void 0,b(E)),C=w.next();!C.done;C=w.next()){var j=C.value,A=d(j,x);if(Array.isArray(A))try{for(var T=(i=void 0,b(A)),k=T.next();!k.done;k=T.next()){var O=k.value;this.addTerm(S,g,O)}}catch(F){i={error:F}}finally{try{k&&!k.done&&(l=T.return)&&l.call(T)}finally{if(i)throw i.error}}else A&&this.addTerm(S,g,A)}}catch(F){o={error:F}}finally{try{C&&!C.done&&(a=w.return)&&a.call(w)}finally{if(o)throw o.error}}}}}catch(F){t={error:F}}finally{try{v&&!v.done&&(r=m.return)&&r.call(m)}finally{if(t)throw t.error}}},n.prototype.addAll=function(e){var t,r;try{for(var o=b(e),a=o.next();!a.done;a=o.next()){var i=a.value;this.add(i)}}catch(l){t={error:l}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(t)throw t.error}}},n.prototype.addAllAsync=function(e,t){var r=this;t===void 0&&(t={});var o=t.chunkSize,a=o===void 0?10:o,i={chunk:[],promise:Promise.resolve()},l=e.reduce(function(c,d,h){var f=c.chunk,p=c.promise;return f.push(d),(h+1)%a===0?{chunk:[],promise:p.then(function(){return new Promise(function(g){return setTimeout(g,0)})}).then(function(){return r.addAll(f)})}:{chunk:f,promise:p}},i),s=l.chunk,u=l.promise;return u.then(function(){return r.addAll(s)})},n.prototype.remove=function(e){var t,r,o,a,i,l,s=this._options,u=s.tokenize,c=s.processTerm,d=s.extractField,h=s.fields,f=s.idField,p=d(e,f);if(p==null)throw new Error('MiniSearch: document does not have ID field "'.concat(f,'"'));var g=this._idToShortId.get(p);if(g==null)throw new Error("MiniSearch: cannot remove document with ID ".concat(p,": it is not in the index"));try{for(var m=b(h),v=m.next();!v.done;v=m.next()){var x=v.value,y=d(e,x);if(y!=null){var E=u(y.toString(),x),S=this._fieldIds[x],R=new Set(E).size;this.removeFieldLength(g,S,this._documentCount,R);try{for(var w=(o=void 0,b(E)),C=w.next();!C.done;C=w.next()){var j=C.value,A=c(j,x);if(Array.isArray(A))try{for(var T=(i=void 0,b(A)),k=T.next();!k.done;k=T.next()){var O=k.value;this.removeTerm(S,g,O)}}catch(F){i={error:F}}finally{try{k&&!k.done&&(l=T.return)&&l.call(T)}finally{if(i)throw i.error}}else A&&this.removeTerm(S,g,A)}}catch(F){o={error:F}}finally{try{C&&!C.done&&(a=w.return)&&a.call(w)}finally{if(o)throw o.error}}}}}catch(F){t={error:F}}finally{try{v&&!v.done&&(r=m.return)&&r.call(m)}finally{if(t)throw t.error}}this._storedFields.delete(g),this._documentIds.delete(g),this._idToShortId.delete(p),this._fieldLength.delete(g),this._documentCount-=1},n.prototype.removeAll=function(e){var t,r;if(e)try{for(var o=b(e),a=o.next();!a.done;a=o.next()){var i=a.value;this.remove(i)}}catch(l){t={error:l}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(t)throw t.error}}else{if(arguments.length>0)throw new Error("Expected documents to be present. Omit the argument to remove all documents.");this._index=new ne,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldLength=new Map,this._avgFieldLength=[],this._storedFields=new Map,this._nextId=0}},n.prototype.discard=function(e){var t=this,r=this._idToShortId.get(e);if(r==null)throw new Error("MiniSearch: cannot discard document with ID ".concat(e,": it is not in the index"));this._idToShortId.delete(e),this._documentIds.delete(r),this._storedFields.delete(r),(this._fieldLength.get(r)||[]).forEach(function(o,a){t.removeFieldLength(r,a,t._documentCount,o)}),this._fieldLength.delete(r),this._documentCount-=1,this._dirtCount+=1,this.maybeAutoVacuum()},n.prototype.maybeAutoVacuum=function(){if(this._options.autoVacuum!==!1){var e=this._options.autoVacuum,t=e.minDirtFactor,r=e.minDirtCount,o=e.batchSize,a=e.batchWait;this.conditionalVacuum({batchSize:o,batchWait:a},{minDirtCount:r,minDirtFactor:t})}},n.prototype.discardAll=function(e){var t,r,o=this._options.autoVacuum;try{this._options.autoVacuum=!1;try{for(var a=b(e),i=a.next();!i.done;i=a.next()){var l=i.value;this.discard(l)}}catch(s){t={error:s}}finally{try{i&&!i.done&&(r=a.return)&&r.call(a)}finally{if(t)throw t.error}}}finally{this._options.autoVacuum=o}this.maybeAutoVacuum()},n.prototype.replace=function(e){var t=this._options,r=t.idField,o=t.extractField,a=o(e,r);this.discard(a),this.add(e)},n.prototype.vacuum=function(e){return e===void 0&&(e={}),this.conditionalVacuum(e)},n.prototype.conditionalVacuum=function(e,t){var r=this;return this._currentVacuum?(this._enqueuedVacuumConditions=this._enqueuedVacuumConditions&&t,this._enqueuedVacuum!=null?this._enqueuedVacuum:(this._enqueuedVacuum=this._currentVacuum.then(function(){var o=r._enqueuedVacuumConditions;return r._enqueuedVacuumConditions=ce,r.performVacuuming(e,o)}),this._enqueuedVacuum)):this.vacuumConditionsMet(t)===!1?Promise.resolve():(this._currentVacuum=this.performVacuuming(e),this._currentVacuum)},n.prototype.performVacuuming=function(e,t){return Ut(this,void 0,void 0,function(){var r,o,a,i,l,s,u,c,d,h,f,p,g,m,v,x,y,E,S,R,w,C,j,A,T;return Gt(this,function(k){switch(k.label){case 0:if(r=this._dirtCount,!this.vacuumConditionsMet(t))return[3,10];o=e.batchSize||ue.batchSize,a=e.batchWait||ue.batchWait,i=1,k.label=1;case 1:k.trys.push([1,7,8,9]),l=b(this._index),s=l.next(),k.label=2;case 2:if(s.done)return[3,6];u=M(s.value,2),c=u[0],d=u[1];try{for(h=(C=void 0,b(d)),f=h.next();!f.done;f=h.next()){p=M(f.value,2),g=p[0],m=p[1];try{for(v=(A=void 0,b(m)),x=v.next();!x.done;x=v.next())y=M(x.value,1),E=y[0],!this._documentIds.has(E)&&(m.size<=1?d.delete(g):m.delete(E))}catch(O){A={error:O}}finally{try{x&&!x.done&&(T=v.return)&&T.call(v)}finally{if(A)throw A.error}}}}catch(O){C={error:O}}finally{try{f&&!f.done&&(j=h.return)&&j.call(h)}finally{if(C)throw C.error}}return this._index.get(c).size===0&&this._index.delete(c),i%o!==0?[3,4]:[4,new Promise(function(O){return setTimeout(O,a)})];case 3:k.sent(),k.label=4;case 4:i+=1,k.label=5;case 5:return s=l.next(),[3,2];case 6:return[3,9];case 7:return S=k.sent(),R={error:S},[3,9];case 8:try{s&&!s.done&&(w=l.return)&&w.call(l)}finally{if(R)throw R.error}return[7];case 9:this._dirtCount-=r,k.label=10;case 10:return[4,null];case 11:return k.sent(),this._currentVacuum=this._enqueuedVacuum,this._enqueuedVacuum=null,[2]}})})},n.prototype.vacuumConditionsMet=function(e){if(e==null)return!0;var t=e.minDirtCount,r=e.minDirtFactor;return t=t||ie.minDirtCount,r=r||ie.minDirtFactor,this.dirtCount>=t&&this.dirtFactor>=r},Object.defineProperty(n.prototype,"isVacuuming",{get:function(){return this._currentVacuum!=null},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"dirtCount",{get:function(){return this._dirtCount},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"dirtFactor",{get:function(){return this._dirtCount/(1+this._documentCount+this._dirtCount)},enumerable:!1,configurable:!0}),n.prototype.has=function(e){return this._idToShortId.has(e)},n.prototype.getStoredFields=function(e){var t=this._idToShortId.get(e);if(t!=null)return this._storedFields.get(t)},n.prototype.search=function(e,t){var r,o;t===void 0&&(t={});var a=this.executeQuery(e,t),i=[];try{for(var l=b(a),s=l.next();!s.done;s=l.next()){var u=M(s.value,2),c=u[0],d=u[1],h=d.score,f=d.terms,p=d.match,g=f.length||1,m={id:this._documentIds.get(c),score:h*g,terms:Object.keys(p),queryTerms:f,match:p};Object.assign(m,this._storedFields.get(c)),(t.filter==null||t.filter(m))&&i.push(m)}}catch(v){r={error:v}}finally{try{s&&!s.done&&(o=l.return)&&o.call(l)}finally{if(r)throw r.error}}return e===n.wildcard&&t.boostDocument==null&&this._options.searchOptions.boostDocument==null||i.sort(Ce),i},n.prototype.autoSuggest=function(e,t){var r,o,a,i;t===void 0&&(t={}),t=L(L({},this._options.autoSuggestOptions),t);var l=new Map;try{for(var s=b(this.search(e,t)),u=s.next();!u.done;u=s.next()){var c=u.value,d=c.score,h=c.terms,f=h.join(" "),p=l.get(f);p!=null?(p.score+=d,p.count+=1):l.set(f,{score:d,terms:h,count:1})}}catch(S){r={error:S}}finally{try{u&&!u.done&&(o=s.return)&&o.call(s)}finally{if(r)throw r.error}}var g=[];try{for(var m=b(l),v=m.next();!v.done;v=m.next()){var x=M(v.value,2),p=x[0],y=x[1],d=y.score,h=y.terms,E=y.count;g.push({suggestion:p,terms:h,score:d/E})}}catch(S){a={error:S}}finally{try{v&&!v.done&&(i=m.return)&&i.call(m)}finally{if(a)throw a.error}}return g.sort(Ce),g},Object.defineProperty(n.prototype,"documentCount",{get:function(){return this._documentCount},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"termCount",{get:function(){return this._index.size},enumerable:!1,configurable:!0}),n.loadJSON=function(e,t){if(t==null)throw new Error("MiniSearch: loadJSON should be given the same options used when serializing the index");return this.loadJS(JSON.parse(e),t)},n.getDefault=function(e){if(ae.hasOwnProperty(e))return oe(ae,e);throw new Error('MiniSearch: unknown option "'.concat(e,'"'))},n.loadJS=function(e,t){var r,o,a,i,l,s,u=e.index,c=e.documentCount,d=e.nextId,h=e.documentIds,f=e.fieldIds,p=e.fieldLength,g=e.averageFieldLength,m=e.storedFields,v=e.dirtCount,x=e.serializationVersion;if(x!==1&&x!==2)throw new Error("MiniSearch: cannot deserialize an index created with an incompatible version");var y=new n(t);y._documentCount=c,y._nextId=d,y._documentIds=J(h),y._idToShortId=new Map,y._fieldIds=f,y._fieldLength=J(p),y._avgFieldLength=g,y._storedFields=J(m),y._dirtCount=v||0,y._index=new ne;try{for(var E=b(y._documentIds),S=E.next();!S.done;S=E.next()){var R=M(S.value,2),w=R[0],C=R[1];y._idToShortId.set(C,w)}}catch(W){r={error:W}}finally{try{S&&!S.done&&(o=E.return)&&o.call(E)}finally{if(r)throw r.error}}try{for(var j=b(u),A=j.next();!A.done;A=j.next()){var T=M(A.value,2),k=T[0],O=T[1],F=new Map;try{for(var H=(l=void 0,b(Object.keys(O))),P=H.next();!P.done;P=H.next()){var z=P.value,$=O[z];x===1&&($=$.ds),F.set(parseInt(z,10),J($))}}catch(W){l={error:W}}finally{try{P&&!P.done&&(s=H.return)&&s.call(H)}finally{if(l)throw l.error}}y._index.set(k,F)}}catch(W){a={error:W}}finally{try{A&&!A.done&&(i=j.return)&&i.call(j)}finally{if(a)throw a.error}}return y},n.prototype.executeQuery=function(e,t){var r=this;if(t===void 0&&(t={}),e===n.wildcard)return this.executeWildcardQuery(t);if(typeof e!="string"){var o=L(L(L({},t),e),{queries:void 0}),a=e.queries.map(function(m){return r.executeQuery(m,o)});return this.combineResults(a,o.combineWith)}var i=this._options,l=i.tokenize,s=i.processTerm,u=i.searchOptions,c=L(L({tokenize:l,processTerm:s},u),t),d=c.tokenize,h=c.processTerm,f=d(e).flatMap(function(m){return h(m)}).filter(function(m){return!!m}),p=f.map(nn(c)),g=p.map(function(m){return r.executeQuerySpec(m,c)});return this.combineResults(g,c.combineWith)},n.prototype.executeQuerySpec=function(e,t){var r,o,a,i,l=L(L({},this._options.searchOptions),t),s=(l.fields||this._options.fields).reduce(function(z,$){var W;return L(L({},z),(W={},W[$]=oe(l.boost,$)||1,W))},{}),u=l.boostDocument,c=l.weights,d=l.maxFuzzy,h=l.bm25,f=L(L({},we.weights),c),p=f.fuzzy,g=f.prefix,m=this._index.get(e.term),v=this.termResults(e.term,e.term,1,m,s,u,h),x,y;if(e.prefix&&(x=this._index.atPrefix(e.term)),e.fuzzy){var E=e.fuzzy===!0?.2:e.fuzzy,S=E<1?Math.min(d,Math.round(e.term.length*E)):E;S&&(y=this._index.fuzzyGet(e.term,S))}if(x)try{for(var R=b(x),w=R.next();!w.done;w=R.next()){var C=M(w.value,2),j=C[0],A=C[1],T=j.length-e.term.length;if(T){y==null||y.delete(j);var k=g*j.length/(j.length+.3*T);this.termResults(e.term,j,k,A,s,u,h,v)}}}catch(z){r={error:z}}finally{try{w&&!w.done&&(o=R.return)&&o.call(R)}finally{if(r)throw r.error}}if(y)try{for(var O=b(y.keys()),F=O.next();!F.done;F=O.next()){var j=F.value,H=M(y.get(j),2),P=H[0],T=H[1];if(T){var k=p*j.length/(j.length+T);this.termResults(e.term,j,k,P,s,u,h,v)}}}catch(z){a={error:z}}finally{try{F&&!F.done&&(i=O.return)&&i.call(O)}finally{if(a)throw a.error}}return v},n.prototype.executeWildcardQuery=function(e){var t,r,o=new Map,a=L(L({},this._options.searchOptions),e);try{for(var i=b(this._documentIds),l=i.next();!l.done;l=i.next()){var s=M(l.value,2),u=s[0],c=s[1],d=a.boostDocument?a.boostDocument(c,"",this._storedFields.get(u)):1;o.set(u,{score:d,terms:[],match:{}})}}catch(h){t={error:h}}finally{try{l&&!l.done&&(r=i.return)&&r.call(i)}finally{if(t)throw t.error}}return o},n.prototype.combineResults=function(e,t){if(t===void 0&&(t=he),e.length===0)return new Map;var r=t.toLowerCase();return e.reduce(Kt[r])||new Map},n.prototype.toJSON=function(){var e,t,r,o,a=[];try{for(var i=b(this._index),l=i.next();!l.done;l=i.next()){var s=M(l.value,2),u=s[0],c=s[1],d={};try{for(var h=(r=void 0,b(c)),f=h.next();!f.done;f=h.next()){var p=M(f.value,2),g=p[0],m=p[1];d[g]=Object.fromEntries(m)}}catch(v){r={error:v}}finally{try{f&&!f.done&&(o=h.return)&&o.call(h)}finally{if(r)throw r.error}}a.push([u,d])}}catch(v){e={error:v}}finally{try{l&&!l.done&&(t=i.return)&&t.call(i)}finally{if(e)throw e.error}}return{documentCount:this._documentCount,nextId:this._nextId,documentIds:Object.fromEntries(this._documentIds),fieldIds:this._fieldIds,fieldLength:Object.fromEntries(this._fieldLength),averageFieldLength:this._avgFieldLength,storedFields:Object.fromEntries(this._storedFields),dirtCount:this._dirtCount,index:a,serializationVersion:2}},n.prototype.termResults=function(e,t,r,o,a,i,l,s){var u,c,d,h,f;if(s===void 0&&(s=new Map),o==null)return s;try{for(var p=b(Object.keys(a)),g=p.next();!g.done;g=p.next()){var m=g.value,v=a[m],x=this._fieldIds[m],y=o.get(x);if(y!=null){var E=y.size,S=this._avgFieldLength[x];try{for(var R=(d=void 0,b(y.keys())),w=R.next();!w.done;w=R.next()){var C=w.value;if(!this._documentIds.has(C)){this.removeTerm(x,C,t),E-=1;continue}var j=i?i(this._documentIds.get(C),t,this._storedFields.get(C)):1;if(j){var A=y.get(C),T=this._fieldLength.get(C)[x],k=tn(A,E,this._documentCount,T,S,l),O=r*v*j*k,F=s.get(C);if(F){F.score+=O,on(F.terms,e);var H=oe(F.match,t);H?H.push(m):F.match[t]=[m]}else s.set(C,{score:O,terms:[e],match:(f={},f[t]=[m],f)})}}}catch(P){d={error:P}}finally{try{w&&!w.done&&(h=R.return)&&h.call(R)}finally{if(d)throw d.error}}}}}catch(P){u={error:P}}finally{try{g&&!g.done&&(c=p.return)&&c.call(p)}finally{if(u)throw u.error}}return s},n.prototype.addTerm=function(e,t,r){var o=this._index.fetch(r,Ee),a=o.get(e);if(a==null)a=new Map,a.set(t,1),o.set(e,a);else{var i=a.get(t);a.set(t,(i||0)+1)}},n.prototype.removeTerm=function(e,t,r){if(!this._index.has(r)){this.warnDocumentChanged(t,e,r);return}var o=this._index.fetch(r,Ee),a=o.get(e);a==null||a.get(t)==null?this.warnDocumentChanged(t,e,r):a.get(t)<=1?a.size<=1?o.delete(e):a.delete(t):a.set(t,a.get(t)-1),this._index.get(r).size===0&&this._index.delete(r)},n.prototype.warnDocumentChanged=function(e,t,r){var o,a;try{for(var i=b(Object.keys(this._fieldIds)),l=i.next();!l.done;l=i.next()){var s=l.value;if(this._fieldIds[s]===t){this._options.logger("warn","MiniSearch: document with ID ".concat(this._documentIds.get(e),' has changed before removal: term "').concat(r,'" was not present in field "').concat(s,'". Removing a document after it has changed can corrupt the index!'),"version_conflict");return}}}catch(u){o={error:u}}finally{try{l&&!l.done&&(a=i.return)&&a.call(i)}finally{if(o)throw o.error}}},n.prototype.addDocumentId=function(e){var t=this._nextId;return this._idToShortId.set(e,t),this._documentIds.set(t,e),this._documentCount+=1,this._nextId+=1,t},n.prototype.addFields=function(e){for(var t=0;t<e.length;t++)this._fieldIds[e[t]]=t},n.prototype.addFieldLength=function(e,t,r,o){var a=this._fieldLength.get(e);a==null&&this._fieldLength.set(e,a=[]),a[t]=o;var i=this._avgFieldLength[t]||0,l=i*r+o;this._avgFieldLength[t]=l/(r+1)},n.prototype.removeFieldLength=function(e,t,r,o){if(r===1){this._avgFieldLength[t]=0;return}var a=this._avgFieldLength[t]*r-o;this._avgFieldLength[t]=a/(r-1)},n.prototype.saveStoredFields=function(e,t){var r,o,a=this._options,i=a.storeFields,l=a.extractField;if(!(i==null||i.length===0)){var s=this._storedFields.get(e);s==null&&this._storedFields.set(e,s={});try{for(var u=b(i),c=u.next();!c.done;c=u.next()){var d=c.value,h=l(t,d);h!==void 0&&(s[d]=h)}}catch(f){r={error:f}}finally{try{c&&!c.done&&(o=u.return)&&o.call(u)}finally{if(r)throw r.error}}}},n.wildcard=Symbol("*"),n}(),oe=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)?n[e]:void 0},Kt=(G={},G[he]=function(n,e){var t,r;try{for(var o=b(e.keys()),a=o.next();!a.done;a=o.next()){var i=a.value,l=n.get(i);if(l==null)n.set(i,e.get(i));else{var s=e.get(i),u=s.score,c=s.terms,d=s.match;l.score=l.score+u,l.match=Object.assign(l.match,d),ke(l.terms,c)}}}catch(h){t={error:h}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(t)throw t.error}}return n},G[qe]=function(n,e){var t,r,o=new Map;try{for(var a=b(e.keys()),i=a.next();!i.done;i=a.next()){var l=i.value,s=n.get(l);if(s!=null){var u=e.get(l),c=u.score,d=u.terms,h=u.match;ke(s.terms,d),o.set(l,{score:s.score+c,terms:s.terms,match:Object.assign(s.match,h)})}}}catch(f){t={error:f}}finally{try{i&&!i.done&&(r=a.return)&&r.call(a)}finally{if(t)throw t.error}}return o},G[Xt]=function(n,e){var t,r;try{for(var o=b(e.keys()),a=o.next();!a.done;a=o.next()){var i=a.value;n.delete(i)}}catch(l){t={error:l}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(t)throw t.error}}return n},G),en={k:1.2,b:.7,d:.5},tn=function(n,e,t,r,o,a){var i=a.k,l=a.b,s=a.d,u=Math.log(1+(t-e+.5)/(e+.5));return u*(s+n*(i+1)/(n+i*(1-l+l*r/o)))},nn=function(n){return function(e,t,r){var o=typeof n.fuzzy=="function"?n.fuzzy(e,t,r):n.fuzzy||!1,a=typeof n.prefix=="function"?n.prefix(e,t,r):n.prefix===!0;return{term:e,fuzzy:o,prefix:a}}},ae={idField:"id",extractField:function(n,e){return n[e]},tokenize:function(n){return n.split(an)},processTerm:function(n){return n.toLowerCase()},fields:void 0,searchOptions:void 0,storeFields:[],logger:function(n,e){typeof(console==null?void 0:console[n])=="function"&&console[n](e)},autoVacuum:!0},we={combineWith:he,prefix:!1,fuzzy:!1,maxFuzzy:6,boost:{},weights:{fuzzy:.45,prefix:.375},bm25:en},rn={combineWith:qe,prefix:function(n,e,t){return e===t.length-1}},ue={batchSize:1e3,batchWait:10},ce={minDirtFactor:.1,minDirtCount:20},ie=L(L({},ue),ce),on=function(n,e){n.includes(e)||n.push(e)},ke=function(n,e){var t,r;try{for(var o=b(e),a=o.next();!a.done;a=o.next()){var i=a.value;n.includes(i)||n.push(i)}}catch(l){t={error:l}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(t)throw t.error}}},Ce=function(n,e){var t=n.score,r=e.score;return r-t},Ee=function(){return new Map},J=function(n){var e,t,r=new Map;try{for(var o=b(Object.keys(n)),a=o.next();!a.done;a=o.next()){var i=a.value;r.set(parseInt(i,10),n[i])}}catch(l){e={error:l}}finally{try{a&&!a.done&&(t=o.return)&&t.call(o)}finally{if(e)throw e.error}}return r},an=/[\n\r -#%-*,-/:;?@[-\]_{}\u00A0\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]+/u;_e({markdown:{cli:`<section class="flex flex-col justify-top items-left text-left p-4 pt-0 mb-4 w-full sm:w-[90%] md:w-[70%] h-fit box-border gap-6"><h1 class="text-3xl md:text-5xl font-extrabold mb-2 text-purple-600 dark:text-purple-300" >Using Emmy.js with create-emmy</h1>
<h2 class="text-3xl font-extrabold mb-2 text-emerald-600 dark:text-emerald-300" >What is create-emmy?</h2>
<p><code>create-emmy</code> is a command-line interface (CLI) for creating Emmy.js applications. It is a tool that helps you to create a new Emmy.js app with a single command.</p>
<p><a class="underline text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-400 "  href="https://www.youtube.com/watch?v=rOxAJ9c068c">You can see a tutorial on how to use create-emmy here</a></p>
<p>
  <strong>Note:</strong> This tutorial is under construction. Please check back later.
</p>

<h2 class="text-3xl font-extrabold mb-2 text-emerald-600 dark:text-emerald-300" >Quick Start</h2>
<p>That's it! You've successfully used Emmy.js with the command-line interface (CLI) <code>create-emmy</code>. 🚀</p>
<hr>
Might be useful to you. Give it a try! 🚀

<ul class="list-disc list-inside text-lg font-normal mb-2 text-gray-600 dark:text-gray-300" >
<li><a class="underline text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-400 "  href="/documentation">Quick Start with Emmy.js</a></li>
</ul>
</section>`,index:`<section class="flex flex-col justify-top items-left text-left p-4 pt-0 mb-4 w-full sm:w-[90%] md:w-[70%] h-fit box-border gap-6"><h1 class="text-3xl md:text-5xl font-extrabold mb-2 text-purple-600 dark:text-purple-300" >Quick Start with Emmy.js</h1>
<p>Emmy.js is a JavaScript library for building user interfaces using functional web components. Inspired by React.js, it uses the platform's native APIs to render components, in a declarative way.</p>
<p>It's core library <code>emmy-dom</code> allows you to create components using functional components, class components, and page components. It also includes hooks and a router to create single page applications.</p>
<h2 class="text-3xl font-extrabold mb-2 text-emerald-600 dark:text-emerald-300" >Functional Components</h2>
<p>You can use functional components to create components without classes. Functional components are just functions that return a HTML code or a function that returns HTML code. The following example shows how to create a functional component:</p>
<pre><code class="language-javascript">import { load, html } from 'emmy-dom'

function helloWorld() {
  return html\`&lt;h1&gt;Hello World!&lt;/h1&gt;\`
}

load(helloWorld, 'HelloWorld')
</code></pre>
<h2 class="text-3xl font-extrabold mb-2 text-emerald-600 dark:text-emerald-300" >Page Components</h2>
<p>You can use page components to create components that are rendered only once, from a html file. The following example shows how to create a page component:</p>
<pre><code class="language-html">&lt;!-- home.html --&gt;
&lt;h1&gt;Hello World!&lt;/h1&gt;
</code></pre>
<pre><code class="language-javascript">import { load } from 'emmy-dom'

load('/home.html', 'Home')
</code></pre>
<h2 class="text-3xl font-extrabold mb-2 text-emerald-600 dark:text-emerald-300" >Class Components</h2>
<p>You can use class components to create components with classes. The following example shows how to create a class component:</p>
<h3 class="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-300" >Light Components</h3>
<pre><code class="language-javascript">import { LightComponent, launch, html } from 'emmy-dom'

class HelloWorld extends LightComponent {
  constructor() {
    super()
    this.render(html\`&lt;h1&gt;Hello World!&lt;/h1&gt;\`)
  }
}

launch(HelloWorld, 'HelloWorld')
</code></pre>
<h3 class="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-300" >Shadow Components</h3>
<pre><code class="language-javascript">import { Component, launch, html } from 'emmy-dom'

class HelloWorld extends Component {
  constructor() {
    super()
    this.render(html\`&lt;h1&gt;Hello World!&lt;/h1&gt;\`)
  }
}

launch(HelloWorld, 'HelloWorld')
</code></pre>
<h2 class="text-3xl font-extrabold mb-2 text-emerald-600 dark:text-emerald-300" >Emmy Hooks</h2>
<p>Emmy Hooks are inspired by React Hooks. You can use them to add state to your functional components without manually managing the <code>state</code> property. </p>
<h3 class="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-300" >useState</h3>
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
<h3 class="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-300" >useEffect</h3>
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
<h2 class="text-3xl font-extrabold mb-2 text-emerald-600 dark:text-emerald-300" >Why Functional Components?</h2>
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
<h2 class="text-3xl font-extrabold mb-2 text-emerald-600 dark:text-emerald-300" >Declarative Props</h2>
<p>We have beem using <code>el</code> to access the component instance (like <code>this</code> in class components). You can also get the props passed to the component using <code>props</code> property.</p>
<p>The following example shows how to use props in a functional component:</p>
<pre><code class="language-javascript">import { load, html } from 'emmy-dom'

function helloWorld({ props }) {
  return html\`&lt;h1&gt;Hello \${props().name()}!&lt;/h1&gt;\`
}

load(helloWorld, 'HelloWorld')
</code></pre>
<h3 class="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-300" >Declarative Children</h3>
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
<h3 class="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-300" >Setting Props</h3>
<p>You can set props using the <code>el.props</code> setter. The following example shows how to set props in a functional component:</p>
<pre><code class="language-javascript">import { load, html } from 'emmy-dom'

function helloWorld({ el, props }) {
  el.props = { name: 'World' }
  return html\`&lt;h1&gt;Hello \${props().name()}!&lt;/h1&gt;\`
}

load(helloWorld, 'HelloWorld')
</code></pre>
<p>This do not modify the other props passed to the component. It only adds or modifies the props you set.</p>
<h2 class="text-3xl font-extrabold mb-2 text-emerald-600 dark:text-emerald-300" >Emmy Router</h2>
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

<ul class="list-disc list-inside text-lg font-normal mb-2 text-gray-600 dark:text-gray-300" >
<li><a class="underline text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-400 "  href="/documentation/cli">Using Emmy.js with create-emmy</a></li>
<li><a class="underline text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-400 "  href="/documentation/rails">Adding Emmy.js to your Ruby on Rails project 
<img class="inline h-[3rem]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain-wordmark.svg" /></a></li>
<li><a class="underline text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-400 "  href="/documentation/vite">Adding Emmy.js to your Vite project <img class="inline h-[1.5rem]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" /></a></li>
</ul>
</section>`,rails:`<section class="flex flex-col justify-top items-left text-left p-4 pt-0 mb-4 w-full sm:w-[90%] md:w-[70%] h-fit box-border gap-6"><h1 class="text-3xl md:text-5xl font-extrabold mb-2 text-purple-600 dark:text-purple-300" >Adding Emmy.js to your Ruby on Rails project <img class="inline h-[5rem]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain-wordmark.svg" /></h1>
<h2 class="text-3xl font-extrabold mb-2 text-emerald-600 dark:text-emerald-300" >Quick Start</h2>
<ol class="list-decimal list-inside text-lg font-normal mb-2 text-gray-600 dark:text-gray-300" >
<li>Install the <code>emmy-dom</code> npm package:</li>
</ol>
<pre><code class="language-bash">npm i emmy-dom
</code></pre>
<ol class="list-decimal list-inside text-lg font-normal mb-2 text-gray-600 dark:text-gray-300"  start="2">
<li>Use importmap to import the <code>emmy-dom</code> package:</li>
</ol>
<pre><code class="language-bash">./bin/importmap pin emmy-dom --download
</code></pre>
<ol class="list-decimal list-inside text-lg font-normal mb-2 text-gray-600 dark:text-gray-300"  start="3">
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

<ul class="list-disc list-inside text-lg font-normal mb-2 text-gray-600 dark:text-gray-300" >
<li><a class="underline text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-400 "  href="/documentation">Quick Start with Emmy.js</a></li>
<li><a class="underline text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-400 "  href="/documentation/cli">Using Emmy.js with create-emmy</a></li>
</ul>
</section>`,vite:`<section class="flex flex-col justify-top items-left text-left p-4 pt-0 mb-4 w-full sm:w-[90%] md:w-[70%] h-fit box-border gap-6"><h1 class="text-3xl md:text-5xl font-extrabold mb-2 text-purple-600 dark:text-purple-300" >Adding Emmy.js to your Vite project <img class="inline h-[3rem]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" /></h1>
<h2 class="text-3xl font-extrabold mb-2 text-emerald-600 dark:text-emerald-300" >Quick Start</h2>
<ol class="list-decimal list-inside text-lg font-normal mb-2 text-gray-600 dark:text-gray-300" >
<li>Install the <code>emmy-dom</code> npm package:</li>
</ol>
<pre><code class="language-bash">npm i emmy-dom
</code></pre>
<ol class="list-decimal list-inside text-lg font-normal mb-2 text-gray-600 dark:text-gray-300"  start="2">
<li>If you are using a base path in your Vite project, you will need to add the following to your <code>vite.config.js</code> file:</li>
</ol>
<pre><code class="language-javascript">export default {
  base: '/your-base-path/'
}
</code></pre>
<p>This way, apps hosted in url paths like <code>https://example.com/your-base-path/</code> will work properly. If you are not using a base path, you can skip this step.</p>
<ol class="list-decimal list-inside text-lg font-normal mb-2 text-gray-600 dark:text-gray-300"  start="3">
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
<ol class="list-decimal list-inside text-lg font-normal mb-2 text-gray-600 dark:text-gray-300"  start="4">
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
<ol class="list-decimal list-inside text-lg font-normal mb-2 text-gray-600 dark:text-gray-300"  start="5">
<li>Run your Vite project:</li>
</ol>
<pre><code class="language-bash">npm run dev
</code></pre>
<ol class="list-decimal list-inside text-lg font-normal mb-2 text-gray-600 dark:text-gray-300"  start="6">
<li>Open your browser and navigate to <code>http://localhost:3000</code>. You should see a counter that increments when you click the <code>+</code> button.</li>
</ol>
<p>That's it! You've successfully added Emmy.js to your Vite project. 🚀</p>
<h2 class="text-3xl font-extrabold mb-2 text-emerald-600 dark:text-emerald-300" >Hosting on GitHub Pages</h2>
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

<ul class="list-disc list-inside text-lg font-normal mb-2 text-gray-600 dark:text-gray-300" >
<li><a class="underline text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-400 "  href="/documentation">Quick Start with Emmy.js</a></li>
<li><a class="underline text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-400 "  href="/documentation/cli">Using Emmy.js with create-emmy</a></li>
</ul>
</section>`},markdownRoutes:`<Route href='/documentation/cli' to='Cli'></Route>
<Route href='/documentation' to='Index'></Route>
<Route href='/documentation/rails' to='Rails'></Route>
<Route href='/documentation/vite' to='Vite'></Route>`});_e({markdown:{cli:`<section class="flex flex-col justify-top items-left text-left p-4 pt-0 mb-4 w-full sm:w-[90%] md:w-[70%] h-fit box-border gap-6"><h1 class="text-3xl md:text-5xl font-extrabold mb-2 text-purple-600 dark:text-purple-300" >Using Emmy.js with create-emmy</h1>
<h2 class="text-3xl font-extrabold mb-2 text-emerald-600 dark:text-emerald-300" >What is create-emmy?</h2>
<p><code>create-emmy</code> is a command-line interface (CLI) for creating Emmy.js applications. It is a tool that helps you to create a new Emmy.js app with a single command.</p>
<p><a class="underline text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-400 "  href="https://www.youtube.com/watch?v=rOxAJ9c068c">You can see a tutorial on how to use create-emmy here</a></p>
<p>
  <strong>Note:</strong> This tutorial is under construction. Please check back later.
</p>

<h2 class="text-3xl font-extrabold mb-2 text-emerald-600 dark:text-emerald-300" >Quick Start</h2>
<p>That's it! You've successfully used Emmy.js with the command-line interface (CLI) <code>create-emmy</code>. 🚀</p>
<hr>
Might be useful to you. Give it a try! 🚀

<ul class="list-disc list-inside text-lg font-normal mb-2 text-gray-600 dark:text-gray-300" >
<li><a class="underline text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-400 "  href="/documentation">Quick Start with Emmy.js</a></li>
</ul>
</section>`,index:`<section class="flex flex-col justify-top items-left text-left p-4 pt-0 mb-4 w-full sm:w-[90%] md:w-[70%] h-fit box-border gap-6"><h1 class="text-3xl md:text-5xl font-extrabold mb-2 text-purple-600 dark:text-purple-300" >Quick Start with Emmy.js</h1>
<p>Emmy.js is a JavaScript library for building user interfaces using functional web components. Inspired by React.js, it uses the platform's native APIs to render components, in a declarative way.</p>
<p>It's core library <code>emmy-dom</code> allows you to create components using functional components, class components, and page components. It also includes hooks and a router to create single page applications.</p>
<h2 class="text-3xl font-extrabold mb-2 text-emerald-600 dark:text-emerald-300" >Functional Components</h2>
<p>You can use functional components to create components without classes. Functional components are just functions that return a HTML code or a function that returns HTML code. The following example shows how to create a functional component:</p>
<pre><code class="language-javascript">import { load, html } from 'emmy-dom'

function helloWorld() {
  return html\`&lt;h1&gt;Hello World!&lt;/h1&gt;\`
}

load(helloWorld, 'HelloWorld')
</code></pre>
<h2 class="text-3xl font-extrabold mb-2 text-emerald-600 dark:text-emerald-300" >Page Components</h2>
<p>You can use page components to create components that are rendered only once, from a html file. The following example shows how to create a page component:</p>
<pre><code class="language-html">&lt;!-- home.html --&gt;
&lt;h1&gt;Hello World!&lt;/h1&gt;
</code></pre>
<pre><code class="language-javascript">import { load } from 'emmy-dom'

load('/home.html', 'Home')
</code></pre>
<h2 class="text-3xl font-extrabold mb-2 text-emerald-600 dark:text-emerald-300" >Class Components</h2>
<p>You can use class components to create components with classes. The following example shows how to create a class component:</p>
<h3 class="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-300" >Light Components</h3>
<pre><code class="language-javascript">import { LightComponent, launch, html } from 'emmy-dom'

class HelloWorld extends LightComponent {
  constructor() {
    super()
    this.render(html\`&lt;h1&gt;Hello World!&lt;/h1&gt;\`)
  }
}

launch(HelloWorld, 'HelloWorld')
</code></pre>
<h3 class="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-300" >Shadow Components</h3>
<pre><code class="language-javascript">import { Component, launch, html } from 'emmy-dom'

class HelloWorld extends Component {
  constructor() {
    super()
    this.render(html\`&lt;h1&gt;Hello World!&lt;/h1&gt;\`)
  }
}

launch(HelloWorld, 'HelloWorld')
</code></pre>
<h2 class="text-3xl font-extrabold mb-2 text-emerald-600 dark:text-emerald-300" >Emmy Hooks</h2>
<p>Emmy Hooks are inspired by React Hooks. You can use them to add state to your functional components without manually managing the <code>state</code> property. </p>
<h3 class="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-300" >useState</h3>
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
<h3 class="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-300" >useEffect</h3>
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
<h2 class="text-3xl font-extrabold mb-2 text-emerald-600 dark:text-emerald-300" >Why Functional Components?</h2>
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
<h2 class="text-3xl font-extrabold mb-2 text-emerald-600 dark:text-emerald-300" >Declarative Props</h2>
<p>We have beem using <code>el</code> to access the component instance (like <code>this</code> in class components). You can also get the props passed to the component using <code>props</code> property.</p>
<p>The following example shows how to use props in a functional component:</p>
<pre><code class="language-javascript">import { load, html } from 'emmy-dom'

function helloWorld({ props }) {
  return html\`&lt;h1&gt;Hello \${props().name()}!&lt;/h1&gt;\`
}

load(helloWorld, 'HelloWorld')
</code></pre>
<h3 class="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-300" >Declarative Children</h3>
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
<h3 class="text-2xl font-bold mb-2 text-blue-600 dark:text-blue-300" >Setting Props</h3>
<p>You can set props using the <code>el.props</code> setter. The following example shows how to set props in a functional component:</p>
<pre><code class="language-javascript">import { load, html } from 'emmy-dom'

function helloWorld({ el, props }) {
  el.props = { name: 'World' }
  return html\`&lt;h1&gt;Hello \${props().name()}!&lt;/h1&gt;\`
}

load(helloWorld, 'HelloWorld')
</code></pre>
<p>This do not modify the other props passed to the component. It only adds or modifies the props you set.</p>
<h2 class="text-3xl font-extrabold mb-2 text-emerald-600 dark:text-emerald-300" >Emmy Router</h2>
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

<ul class="list-disc list-inside text-lg font-normal mb-2 text-gray-600 dark:text-gray-300" >
<li><a class="underline text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-400 "  href="/documentation/cli">Using Emmy.js with create-emmy</a></li>
<li><a class="underline text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-400 "  href="/documentation/rails">Adding Emmy.js to your Ruby on Rails project 
<img class="inline h-[3rem]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain-wordmark.svg" /></a></li>
<li><a class="underline text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-400 "  href="/documentation/vite">Adding Emmy.js to your Vite project <img class="inline h-[1.5rem]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" /></a></li>
</ul>
</section>`,rails:`<section class="flex flex-col justify-top items-left text-left p-4 pt-0 mb-4 w-full sm:w-[90%] md:w-[70%] h-fit box-border gap-6"><h1 class="text-3xl md:text-5xl font-extrabold mb-2 text-purple-600 dark:text-purple-300" >Adding Emmy.js to your Ruby on Rails project <img class="inline h-[5rem]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rails/rails-plain-wordmark.svg" /></h1>
<h2 class="text-3xl font-extrabold mb-2 text-emerald-600 dark:text-emerald-300" >Quick Start</h2>
<ol class="list-decimal list-inside text-lg font-normal mb-2 text-gray-600 dark:text-gray-300" >
<li>Install the <code>emmy-dom</code> npm package:</li>
</ol>
<pre><code class="language-bash">npm i emmy-dom
</code></pre>
<ol class="list-decimal list-inside text-lg font-normal mb-2 text-gray-600 dark:text-gray-300"  start="2">
<li>Use importmap to import the <code>emmy-dom</code> package:</li>
</ol>
<pre><code class="language-bash">./bin/importmap pin emmy-dom --download
</code></pre>
<ol class="list-decimal list-inside text-lg font-normal mb-2 text-gray-600 dark:text-gray-300"  start="3">
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

<ul class="list-disc list-inside text-lg font-normal mb-2 text-gray-600 dark:text-gray-300" >
<li><a class="underline text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-400 "  href="/documentation">Quick Start with Emmy.js</a></li>
<li><a class="underline text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-400 "  href="/documentation/cli">Using Emmy.js with create-emmy</a></li>
</ul>
</section>`,vite:`<section class="flex flex-col justify-top items-left text-left p-4 pt-0 mb-4 w-full sm:w-[90%] md:w-[70%] h-fit box-border gap-6"><h1 class="text-3xl md:text-5xl font-extrabold mb-2 text-purple-600 dark:text-purple-300" >Adding Emmy.js to your Vite project <img class="inline h-[3rem]" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" /></h1>
<h2 class="text-3xl font-extrabold mb-2 text-emerald-600 dark:text-emerald-300" >Quick Start</h2>
<ol class="list-decimal list-inside text-lg font-normal mb-2 text-gray-600 dark:text-gray-300" >
<li>Install the <code>emmy-dom</code> npm package:</li>
</ol>
<pre><code class="language-bash">npm i emmy-dom
</code></pre>
<ol class="list-decimal list-inside text-lg font-normal mb-2 text-gray-600 dark:text-gray-300"  start="2">
<li>If you are using a base path in your Vite project, you will need to add the following to your <code>vite.config.js</code> file:</li>
</ol>
<pre><code class="language-javascript">export default {
  base: '/your-base-path/'
}
</code></pre>
<p>This way, apps hosted in url paths like <code>https://example.com/your-base-path/</code> will work properly. If you are not using a base path, you can skip this step.</p>
<ol class="list-decimal list-inside text-lg font-normal mb-2 text-gray-600 dark:text-gray-300"  start="3">
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
<ol class="list-decimal list-inside text-lg font-normal mb-2 text-gray-600 dark:text-gray-300"  start="4">
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
<ol class="list-decimal list-inside text-lg font-normal mb-2 text-gray-600 dark:text-gray-300"  start="5">
<li>Run your Vite project:</li>
</ol>
<pre><code class="language-bash">npm run dev
</code></pre>
<ol class="list-decimal list-inside text-lg font-normal mb-2 text-gray-600 dark:text-gray-300"  start="6">
<li>Open your browser and navigate to <code>http://localhost:3000</code>. You should see a counter that increments when you click the <code>+</code> button.</li>
</ol>
<p>That's it! You've successfully added Emmy.js to your Vite project. 🚀</p>
<h2 class="text-3xl font-extrabold mb-2 text-emerald-600 dark:text-emerald-300" >Hosting on GitHub Pages</h2>
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

<ul class="list-disc list-inside text-lg font-normal mb-2 text-gray-600 dark:text-gray-300" >
<li><a class="underline text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-400 "  href="/documentation">Quick Start with Emmy.js</a></li>
<li><a class="underline text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-400 "  href="/documentation/cli">Using Emmy.js with create-emmy</a></li>
</ul>
</section>`},markdownRoutes:`<Route href='/documentation/cli' to='Cli'></Route>
<Route href='/documentation' to='Index'></Route>
<Route href='/documentation/rails' to='Rails'></Route>
<Route href='/documentation/vite' to='Vite'></Route>`});function ln({el:n}){return n.className="flex flex-col justify-between items-center text-center w-full gap-6",_`
    <main class='flex flex-col justify-center items-center gap-8 max-w-[80%] lg:max-w-full'>
      <h1 class='text-3xl md:text-5xl drop-shadow-lg font-extrabold text-purple-600 dark:text-purple-300 leading-relaxed'>Our Story</h1>
      <section class='flex flex-col justify-center items-center gap-6 lg:max-w-[70%]'>
        <h2 class='text-2xl drop-shadow-lg font-semibold text-emerald-600 dark:text-emerald-300'>The Beginning</h2>
        <article class='flex flex-col md:flex-row justify-center items-center gap-6'>
          <figure class='w-full flex flex-col justify-left items-center gap-2 hidden md:block'>
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
    <footer class='dark:text-white text-slate-900 text-center p-6 w-full flex justify-center gap-0 sm:justify-between'>
      <a href='https://github.com/emmyjs/emmyjs' target='_blank' rel='noopener noreferrer' class='inline-block'>
        <svg class='w-4 h-4 mr-2 inline-block' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20'>
          <path fill-rule='evenodd' d='M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z' clip-rule='evenodd'/>
        </svg>
      </a>
      <p>Made with <span class='text-red-500'>&#9829;</span> by <a href='https://www.linkedin.com/in/eanorambuena/' target='_blank' rel='noopener noreferrer'>@eanorambuena</a></p>
    </footer>
  `}N(ln,"About");document.querySelectorAll("emmy-about").forEach(n=>{n.connectedCallback()});function sn({el:n}){return n.className="flex flex-col justify-space-between space-y-3 text-center w-full h-full box-border",_`
    <Header />
    <Route href='/' to='Home' />
    <Route href='/our-story' to='About' />
    <Route href='/getting-started' to='Docs' />
    <Route href='/docs' to='Docs' />
    <Route href='/status' to='Status' />
    ${B.markdownRoutes}
    <Route href='/404' to='Code404' />
    <Router />
  `}N(sn,"App");document.querySelectorAll("emmy-app").forEach(n=>{n.connectedCallback()});function un({el:n}){return n.className="flex flex-col justify-center items-center text-center w-full h-fit box-border",_`
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
        <a href='https://www.youtube.com/watch?v=rOxAJ9c068c' class='inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 focus:ring-blue-900'>
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
          <a href='/documentation' class='text-blue-600 text-blue-500 hover:underline font-medium text-lg inline-flex items-center'>Read more
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
          <a href='https://www.youtube.com/watch?v=rOxAJ9c068c' class='text-blue-600 text-blue-500 hover:underline font-medium text-lg inline-flex items-center'>Read more
            <svg class='w-3.5 h-3.5 ml-2' aria-hidden='true' fill='none' viewBox='0 0 14 10'>
              <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M1 5h12m0 0L9 1m4 4L9 9'/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  `}N(un,"Docs");document.querySelectorAll("emmy-docs").forEach(n=>{n.connectedCallback()});function cn({el:n}){return n.className="flex flex-col justify-between items-center text-center w-full h-[80dvh] gap-4",_`
    <main class='flex flex-col justify-center items-center gap-6'>
      <h1 class='text-3xl md:text-5xl font-extrabold text-purple-600 dark:text-purple-300 leading-relaxed'>Hello from Emmy.js!</h1>
      <a href='https://www.npmjs.com/package/emmy-dom' class='flex flex-col items-center gap-4'>
        <section id='confetti' class='flex flex-col gap-4 items-center'>
          <h2 class='text-2xl font-bold text-gray-800 dark:text-gray-200'>
            Thank you for the
            <strong class='text-emerald-600 dark:text-emerald-300'>${2e3}+</strong>
            downloads on npm!
          </h2>
          <img class='w-[90%]' alt='downloads' src='https://camo.githubusercontent.com/797c23189a69f45f9359dc3bf0d4caf80cdcbaf69331b3a8898f3d7a1aad3ca5/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f64742f656d6d792d646f6d' data-canonical-src='https://img.shields.io/npm/dt/emmy-dom' style='max-width: 100%;'>
        </section>
      </a>
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
      <a href='https://github.com/emmyjs' class='text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mb-2'>
        <svg class='w-4 h-4 mr-2' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20'>
          <path fill-rule='evenodd' d='M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z' clip-rule='evenodd'/>
        </svg>
        View Emmy.js on GitHub
      </a>
    </main>
    <footer class='dark:text-white text-slate-900 text-center p-6 w-full flex justify-center gap-0 sm:justify-between'>
      <a href='https://github.com/emmyjs/emmyjs' target='_blank' rel='noopener noreferrer' class='inline-block'>
        <svg class='w-4 h-4 mr-2 inline-block' aria-hidden='true' fill='currentColor' viewBox='0 0 20 20'>
          <path fill-rule='evenodd' d='M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z' clip-rule='evenodd'/>
        </svg>
      </a>
      <p>Made with <span class='text-red-500'>&#9829;</span> by <a href='https://www.linkedin.com/in/eanorambuena/' target='_blank' rel='noopener noreferrer'>@eanorambuena</a></p>
    </footer>
  `}N(cn,"Home");document.querySelectorAll("emmy-home").forEach(n=>{n.connectedCallback()});function dn({el:n}){return n.className="flex flex-col justify-center items-center text-center max-w-[90%] lg:max-w-full h-fit box-border",B.markdown.cli}N(dn,"Cli");document.querySelectorAll("emmy-cli").forEach(n=>{n.connectedCallback()});function hn({el:n}){return n.className="flex flex-col justify-center items-center text-center max-w-[90%] lg:max-w-full h-fit box-border",B.markdown.index}N(hn,"Index");document.querySelectorAll("emmy-index").forEach(n=>{n.connectedCallback()});function fn({el:n}){return n.className="flex flex-col justify-center items-center text-center max-w-[90%] lg:max-w-full h-fit box-border",B.markdown.rails}N(fn,"Rails");document.querySelectorAll("emmy-rails").forEach(n=>{n.connectedCallback()});function mn({el:n}){return n.className="flex flex-col justify-center items-center text-center max-w-[90%] lg:max-w-full h-fit box-border",B.markdown.vite}N(mn,"Vite");document.querySelectorAll("emmy-vite").forEach(n=>{n.connectedCallback()});function pn({el:n}){return n.className="flex flex-col justify-center items-center text-center w-full h-fit mb-[10%] gap-4",_`
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
  `}N(pn,"Status");document.querySelectorAll("emmy-status").forEach(n=>{n.connectedCallback()});function gn({el:n}){n.className="flex flex-col justify-center items-center space-y-3";const[e,t]=n.useState(0),r=i=>{qt({text:`Counter value changed to ${e()}`,style:{background:"#1F2937",color:"#fff",borderRadius:"10px"},gravity:"bottom",position:i,duration:600}).showToast()},o=()=>{t(e()+1),r("right")},a=()=>{t(e()-1),r("left")};return n.useEffect(()=>{n.querySelector("#plusButton").addEventListener("click",o),n.querySelector("#minusButton").addEventListener("click",a)},[]),()=>_`
    <h2 class='text-2xl font-bold'>Counter</h2>
    <p id='counter'>${e()}</p>
    <div class='flex flex-row justify-center items-center space-x-2'>
      <button id='plusButton' class='font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-50 border border-gray-300 focus:outline-none focus:ring-4 hover:bg-gray-100 focus:ring-gray-300 dark:text-white dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>
        +
      </button>
      <button id='minusButton' class='font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 bg-gray-50 border border-gray-300 focus:outline-none focus:ring-4 hover:bg-gray-100 focus:ring-gray-300 dark:text-white dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'>
        -
      </button>
    </div>
  `}N(gn,"Counter");document.querySelectorAll("emmy-counter").forEach(n=>{n.connectedCallback()});function yn({el:n}){const[e,t]=n.useState(!0);return n.useEffect(()=>{n.querySelector("[data-collapse-toggle]").addEventListener("click",()=>{t(!e())})},[]),n.useEffect(()=>{const r=n.querySelector("#navbar-default");r.setAttribute("aria-expanded",!e()),r.classList=e()?"hidden w-full md:block md:w-auto":"w-full md:block md:w-auto"},[e]),_`
    <nav class='border-gray-200 z-40'>
      <div class='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
        <a href='https://emmyjs.pages.dev' class='flex items-center'>
          <img class='hidden dark:block h-8 mr-3' src='/logo.png' alt='Emmy.js logo'>
          <img class='dark:hidden h-8 w-8 mr-3' src='/android-chrome-512x512.png' alt='Emmy.js logo'>
          <span class='self-center text-2xl font-semibold whitespace-nowrap'>Emmy.js</span>
        </a>
        <Search />
        <button data-collapse-toggle='navbar-default' type='button' class='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600' aria-controls='navbar-default' aria-expanded='false'>
          <span class='sr-only'>Open main menu</span>
          <svg class='w-5 h-5' aria-hidden='true' fill='none' viewBox='0 0 17 14'>
              <path stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M1 1h15M1 7h15M1 13h15'/>
          </svg>
        </button>
        <div class='hidden w-50 md:block md:w-auto' id='navbar-default' aria-expanded='false'>
          <ul class='font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:md:bg-gray-900 border-gray-700'>
            <li>
              <a href='/' onclick='route(event)' class='block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent' aria-current='page'>Home</a>
            </li>
            <li>
              <!-- /documentation doesn't work properly with onclick='route(event)' -->
              <a href='/documentation' class='block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent'>Docs</a>
            </li>
            <li>
              <a href='/our-story' onclick='route(event)' class='block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent'>Our Story</a>
            </li>
            <li>
              <a href='/status' onclick='route(event)' class='block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent'>Status</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `}N(yn,"Header");document.querySelectorAll("emmy-header").forEach(n=>{n.connectedCallback()});function vn({el:n,props:e}){const{type:t}=e();if(!t())return"";let r={unstable:"text-xs font-medium me-2 px-2.5 py-0.5 rounded-full bg-yellow-900 text-yellow-300",stable:"text-xs font-medium me-2 px-2.5 py-0.5 rounded-full bg-green-900 text-green-300",deprecated:"text-xs font-medium me-2 px-2.5 py-0.5 rounded-full bg-red-900 text-red-300",experimental:"text-xs font-medium me-2 px-2.5 py-0.5 rounded-full bg-purple-900 text-purple-300",planned:"text-xs font-medium me-2 px-2.5 py-0.5 rounded-full bg-blue-900 text-blue-300"}[t().trim()];return n.className=`${r} inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium`,t().charAt(0).toUpperCase()+t().slice(1)}N(vn,"Pill");document.querySelectorAll("emmy-pill").forEach(n=>{n.connectedCallback()});function xn({props:n,children:e}){return _`
    <li class='py-3 sm:py-4 justify-between space-x-3 rtl:space-x-reverse flex items-center gap-5'>
      <p class='text-sm font-semibold text-gray-900 truncate dark:text-white'>
        ${e()}
      </p>
      <Pill type='${n().status()}' />
    </li>
  `}N(xn,"Row");document.querySelectorAll("emmy-row").forEach(n=>{n.connectedCallback()});function bn({el:n}){const[e,t]=n.useState(!1),[r,o]=n.useState([]);return n.useEffect(()=>{let a=new Zt({fields:["id","title","content","url"],storeFields:["title","content","url"]});const i=Object.entries(B.markdown??{}).map(([l,s])=>({id:l,title:s.match(/<h1(.*?)>(.*?)<\/h1>/).slice(2).join(""),url:l==="index"?"/documentation":`/documentation/${l}`,content:s}));a.addAll(i),n.querySelector("form").addEventListener("submit",l=>{l.preventDefault();const s=l.target.querySelector("input").value;s&&(o(a.search(s)),r().length===0&&o(i),t(!0))}),n.querySelector("#close-modal").addEventListener("click",()=>t(!1))},[]),()=>_`
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
    <div id='select-modal' tabindex='-1' aria-hidden='${!e()}' class='${e()?"":"hidden"} overflow-y-auto overflow-x-hidden fixed absolute top-50 left-50 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full'>
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
              ${r().map(a=>_`
                <li>
                  <a href='${a.url}' class='inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500'>                        
                    <div class='block'>
                      <div class='w-full text-lg font-semibold'>${a.title}</div>
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
  `}N(bn,"Search");document.querySelectorAll("emmy-search").forEach(n=>{n.connectedCallback()});function wn({el:n}){return n.className="absolute inset-0 bg-gray-900 bg-opacity-90 flex flex-col justify-center items-center w-full h-full",_`<div class='text-white text-3xl font-bold mb-4'>Under construction \u{1f6a7}</div>`}N(wn,"UnderConstruction");document.querySelectorAll("emmy-underconstruction").forEach(n=>{n.connectedCallback()});function fe(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function Se(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}function me(n,e,t){return e&&Se(n.prototype,e),t&&Se(n,t),n}function je(n){return+n.replace(/px/,"")}function kn(n){var e=window.devicePixelRatio,t=getComputedStyle(n),r=je(t.getPropertyValue("width")),o=je(t.getPropertyValue("height"));n.setAttribute("width",(r*e).toString()),n.setAttribute("height",(o*e).toString())}function D(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,r=Math.random()*(e-n)+n;return Math.floor(r*Math.pow(10,t))/Math.pow(10,t)}function Ae(n){return n[D(0,n.length)]}var Cn=.00125,En=5e-4,Sn=9e-4,jn=1e-5,An=6,Fn=80,Ln=.9,Tn=1.7,Rn=.2,On=.6,Mn=.03,In=.07,Fe=15,Le=82,Nn=150,_n=100,Pn=250,Dn=40,Hn=["#fcf403","#62fc03","#f4fc03","#03e7fc","#03fca5","#a503fc","#fc03ad","#fc03c2"];function Te(n){var e=1920;return Math.log(n)/Math.log(e)}var Re=function(){function n(e){fe(this,n);var t=e.initialPosition,r=e.direction,o=e.confettiRadius,a=e.confettiColors,i=e.emojis,l=e.emojiSize,s=e.canvasWidth,u=D(Ln,Tn,3),c=u*Te(s);this.confettiSpeed={x:c,y:c},this.finalConfettiSpeedX=D(Rn,On,3),this.rotationSpeed=i.length?.01:D(Mn,In,3)*Te(s),this.dragForceCoefficient=D(En,Sn,6),this.radius={x:o,y:o},this.initialRadius=o,this.rotationAngle=r==="left"?D(0,.2,3):D(-.2,0,3),this.emojiSize=l,this.emojiRotationAngle=D(0,2*Math.PI),this.radiusYUpdateDirection="down";var d=r==="left"?D(Le,Fe)*Math.PI/180:D(-Fe,-Le)*Math.PI/180;this.absCos=Math.abs(Math.cos(d)),this.absSin=Math.abs(Math.sin(d));var h=D(-Nn,0),f={x:t.x+(r==="left"?-h:h)*this.absCos,y:t.y-h*this.absSin};this.currentPosition=Object.assign({},f),this.initialPosition=Object.assign({},f),this.color=i.length?null:Ae(a),this.emoji=i.length?Ae(i):null,this.createdAt=new Date().getTime(),this.direction=r}return me(n,[{key:"draw",value:function(t){var r=this.currentPosition,o=this.radius,a=this.color,i=this.emoji,l=this.rotationAngle,s=this.emojiRotationAngle,u=this.emojiSize,c=window.devicePixelRatio;a?(t.fillStyle=a,t.beginPath(),t.ellipse(r.x*c,r.y*c,o.x*c,o.y*c,l,0,2*Math.PI),t.fill()):i&&(t.font="".concat(u,"px serif"),t.save(),t.translate(c*r.x,c*r.y),t.rotate(s),t.textAlign="center",t.fillText(i,0,0),t.restore())}},{key:"updatePosition",value:function(t,r){var o=this.confettiSpeed,a=this.dragForceCoefficient,i=this.finalConfettiSpeedX,l=this.radiusYUpdateDirection,s=this.rotationSpeed,u=this.createdAt,c=this.direction,d=r-u;if(o.x>i&&(this.confettiSpeed.x-=a*t),this.currentPosition.x+=o.x*(c==="left"?-this.absCos:this.absCos)*t,this.currentPosition.y=this.initialPosition.y-o.y*this.absSin*d+Cn*Math.pow(d,2)/2,this.rotationSpeed-=this.emoji?1e-4:jn*t,this.rotationSpeed<0&&(this.rotationSpeed=0),this.emoji){this.emojiRotationAngle+=this.rotationSpeed*t%(2*Math.PI);return}l==="down"?(this.radius.y-=t*s,this.radius.y<=0&&(this.radius.y=0,this.radiusYUpdateDirection="up")):(this.radius.y+=t*s,this.radius.y>=this.initialRadius&&(this.radius.y=this.initialRadius,this.radiusYUpdateDirection="down"))}},{key:"getIsVisibleOnCanvas",value:function(t){return this.currentPosition.y<t+_n}}]),n}();function Wn(){var n=document.createElement("canvas");return n.style.position="fixed",n.style.width="100%",n.style.height="100%",n.style.top="0",n.style.left="0",n.style.zIndex="1000",n.style.pointerEvents="none",document.body.appendChild(n),n}function zn(n){var e=n.confettiRadius,t=e===void 0?An:e,r=n.confettiNumber,o=r===void 0?n.confettiesNumber||(n.emojis?Dn:Pn):r,a=n.confettiColors,i=a===void 0?Hn:a,l=n.emojis,s=l===void 0?n.emojies||[]:l,u=n.emojiSize,c=u===void 0?Fn:u;return n.emojies&&console.error("emojies argument is deprecated, please use emojis instead"),n.confettiesNumber&&console.error("confettiesNumber argument is deprecated, please use confettiNumber instead"),{confettiRadius:t,confettiNumber:o,confettiColors:i,emojis:s,emojiSize:c}}var Vn=function(){function n(e){var t=this;fe(this,n),this.canvasContext=e,this.shapes=[],this.promise=new Promise(function(r){return t.resolvePromise=r})}return me(n,[{key:"getBatchCompletePromise",value:function(){return this.promise}},{key:"addShapes",value:function(){var t;(t=this.shapes).push.apply(t,arguments)}},{key:"complete",value:function(){var t;return this.shapes.length?!1:((t=this.resolvePromise)===null||t===void 0||t.call(this),!0)}},{key:"processShapes",value:function(t,r,o){var a=this,i=t.timeDelta,l=t.currentTime;this.shapes=this.shapes.filter(function(s){return s.updatePosition(i,l),s.draw(a.canvasContext),o?s.getIsVisibleOnCanvas(r):!0})}}]),n}(),Bn=function(){function n(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};fe(this,n),this.activeConfettiBatches=[],this.canvas=e.canvas||Wn(),this.canvasContext=this.canvas.getContext("2d"),this.requestAnimationFrameRequested=!1,this.lastUpdated=new Date().getTime(),this.iterationIndex=0,this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}return me(n,[{key:"loop",value:function(){this.requestAnimationFrameRequested=!1,kn(this.canvas);var t=new Date().getTime(),r=t-this.lastUpdated,o=this.canvas.offsetHeight,a=this.iterationIndex%10===0;this.activeConfettiBatches=this.activeConfettiBatches.filter(function(i){return i.processShapes({timeDelta:r,currentTime:t},o,a),a?!i.complete():!0}),this.iterationIndex++,this.queueAnimationFrameIfNeeded(t)}},{key:"queueAnimationFrameIfNeeded",value:function(t){this.requestAnimationFrameRequested||this.activeConfettiBatches.length<1||(this.requestAnimationFrameRequested=!0,this.lastUpdated=t||new Date().getTime(),requestAnimationFrame(this.loop))}},{key:"addConfetti",value:function(){for(var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=zn(t),o=r.confettiRadius,a=r.confettiNumber,i=r.confettiColors,l=r.emojis,s=r.emojiSize,u=this.canvas.getBoundingClientRect(),c=u.width,d=u.height,h=d*5/7,f={x:0,y:h},p={x:c,y:h},g=new Vn(this.canvasContext),m=0;m<a/2;m++){var v=new Re({initialPosition:f,direction:"right",confettiRadius:o,confettiColors:i,confettiNumber:a,emojis:l,emojiSize:s,canvasWidth:c}),x=new Re({initialPosition:p,direction:"left",confettiRadius:o,confettiColors:i,confettiNumber:a,emojis:l,emojiSize:s,canvasWidth:c});g.addShapes(v,x)}return this.activeConfettiBatches.push(g),this.queueAnimationFrameIfNeeded(),g.getBatchCompletePromise()}},{key:"clearCanvas",value:function(){this.activeConfettiBatches=[]}},{key:"destroyCanvas",value:function(){this.canvas.remove()}}]),n}();hljs.highlightAll();const $n=new Bn;$n.addConfetti();
