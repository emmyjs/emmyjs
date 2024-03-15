(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();var lt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ye(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Z={boxFlex:!0,boxFlexGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,strokeDashoffset:!0,strokeOpacity:!0,strokeWidth:!0};function st(t,e){return t+e.charAt(0).toUpperCase()+e.substring(1)}var ut=["Webkit","ms","Moz","O"];Object.keys(Z).forEach(function(t){ut.forEach(function(e){Z[st(e,t)]=Z[t]})});var ct={background:{backgroundImage:!0,backgroundPosition:!0,backgroundRepeat:!0,backgroundColor:!0},border:{borderWidth:!0,borderStyle:!0,borderColor:!0},borderBottom:{borderBottomWidth:!0,borderBottomStyle:!0,borderBottomColor:!0},borderLeft:{borderLeftWidth:!0,borderLeftStyle:!0,borderLeftColor:!0},borderRight:{borderRightWidth:!0,borderRightStyle:!0,borderRightColor:!0},borderTop:{borderTopWidth:!0,borderTopStyle:!0,borderTopColor:!0},font:{fontStyle:!0,fontVariant:!0,fontWeight:!0,fontSize:!0,lineHeight:!0,fontFamily:!0}},dt={isUnitlessNumber:Z,shorthandPropertyExpansions:ct},ht=dt,ft=/^ms-/,mt=/([A-Z])/g;function pt(t){return t.replace(mt,"-$1").toLowerCase()}function gt(t){return pt(t).replace(ft,"-ms-")}var yt=gt,vt=ht.isUnitlessNumber,bt=yt,xt=Array.isArray,ke=Object.keys,wt=/^(normal|none|(\b(url\([^)]*\)|chapter_counter|attr\([^)]*\)|(no-)?(open|close)-quote|inherit)((\b\s*)|$|\s+))+)$/;function Ce(t,e){return!vt[t]&&typeof e=="number"?e=""+e+"px":t==="content"&&!wt.test(e)&&(e="'"+e.replace(/'/g,"\\'")+"'"),bt(t)+": "+e+";  "}function kt(t){var e="";if(!t||ke(t).length===0)return e;for(var r=ke(t),n=0,o=r.length;n<o;n++){var i=r[n],a=t[i];if(xt(a))for(var l=0,s=a.length;l<s;l++)e+=Ce(i,a[l]);else e+=Ce(i,a)}return e}var Ct=kt;const St=ye(Ct);var Et=Object.prototype.propertyIsEnumerable;function jt(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function At(t){var e=Object.getOwnPropertyNames(t);return Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(t))),e.filter(function(r){return Et.call(t,r)})}var Ft=Object.assign||function(t,e){for(var r,n,o=jt(t),i=1;i<arguments.length;i++){r=arguments[i],n=At(Object(r));for(var a=0;a<n.length;a++)o[n[a]]=r[n[a]]}return o},J=Array.isArray,Tt=Ft,Lt=3;function Be(t,e){this.callBefore=e&&e.before||this.noop,this.callAfter=e&&e.after||this.noop,this.callProcess=e&&e.process;var r=this;this.scope=null,this.interpreter=t,this.interpreter.setRenderer(this),this.render=function(o,i,a){if(!o)throw new Error("JSX element is not presented");if(typeof o=="string"?o={tag:o,props:Se(i)?i:null,children:Array.isArray(a)?a:null}:typeof o=="function"&&(o={tag:[o.name||o.displayName||"",o],props:Se(i)?i:null,children:Array.isArray(a)?a:null}),!r.isTagDescriptor(o))throw new Error("Top level element should be a tag or function which returns a tag");return r.scope={},o=r.callBefore(o),r.callProcess?r.callProcess(function(){o=r.renderChild(o)}):o=r.renderChild(o),o=r.callAfter(o),r.scope=null,o}}Be.prototype={renderChild:function(t){return t==null?null:this.isTagDescriptor(t)?this.handleTag(t):t},walkChildren:function(t,e,r){var n=t.length,o=0,i;for(r=r|0;o<n;o++)if(i=t[o],i!=null){if(J(i)&&r<Lt){this.walkChildren(i,e);continue}e(this.renderChild(i))}},handleTag:function(t){var e=t.tag,r=t.props,n=t.children,o,i;if(r=J(r)?Tt.apply(null,r):r||null,J(e)){i=e[1],e=e[0];var a;return this.interpreter.hasCustomOverride(e)?(a=this.interpreter.custom(e,i,r,n),this.check(a,"custom")):a=i(r,n,e),this.renderChild(a)}return r=r&&this.interpreter.props(e,r),this.check(r,"props"),o=this.interpreter.enter(e,r),this.check(o,"enter"),J(n)&&n.length&&(n=this.interpreter.children(e,n,o),this.check(n,"children"),o=this.handleChildren(e,n,o)),o=this.interpreter.leave(e,o),this.check(o,"leave"),o},handleChildren:function(t,e,r){var n=this;return this.walkChildren(e,function(o){r=n.interpreter.child(t,r,o),n.check(r,"child")}),r},handlePrivimite:function(t){return t},isPrimitive:function(t){switch(typeof t){case"string":case"boolean":case"number":return!0}return!1},isTagDescriptor:function(t){return t&&typeof t=="object"&&"tag"in t&&"props"in t&&"children"in t},check:function(t,e){if(typeof t>"u")throw new Error("Source ["+e+"] returned undefined");return t},noop:function(t){return t}};function Se(t){return typeof t=="object"&&t&&!J(t)}var Ot=Be;function Ve(t,e){var r=this;this.name=t,this.tags={},this.renderer=null,e&&Object.keys(e).forEach(function(n){var o=e[n];r.addTagHandler(n,o)})}Ve.prototype={addTagHandler:function(t,e){this.tags[t]=e},getHandler:function(t){var e=this.tags[t]||this.tags["*"];if(!e)throw new Error("JSX ["+t+"] is not found and [*] is missing");return e},hasCustomOverride:function(t){var e=this.getHandler(t);return!!e.custom},setRenderer:function(t){this.renderer=t},call:function(t,e){var r=this[t].apply(this,e);return typeof r>"u"&&console.log("Interpreter call ["+t+"] returned undefined"),r},props:function(t,e){var r=this.getHandler(t);return r.props?r.props.call(this.renderer,e,t):e},child:function(t,e,r){var n=this.getHandler(t);return n.child?n.child.call(this.renderer,r,e,t):e},enter:function(t,e){var r=this.getHandler(t);if(!r.enter)throw new Error("JSX Interpreter handler should provide [enter] method");return r.enter.call(this.renderer,t,e)},leave:function(t,e){var r=this.getHandler(t);return r.leave?r.leave.call(this.renderer,e,t):e},custom:function(t,e,r,n){var o=this.getHandler(t);return o.custom.call(this.renderer,e,r,n,t)},children:function(t,e,r){var n=this.getHandler(t);return n.children?n.children.call(this.renderer,e,r,t):e}};var Rt=Ve,Mt=Ot,It=Rt,Ee={},Nt={register:function(e,r){e=e.toLowerCase();var n=new It(e,r.tags),o=new Mt(n,{before:r.before,after:r.after,process:r.process});return Ee[e]=o,o},render:function(e,r){if(r=r.toLowerCase(),r=r&&Ee[r],!r)throw new Error("Renderer ["+r+"] not found");return r.render(e)}},$t=Nt;/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */var _t=/["'&<>]/,Pt=Ht;function Ht(t){var e=""+t,r=_t.exec(e);if(!r)return e;var n,o="",i=0,a=0;for(i=r.index;i<e.length;i++){switch(e.charCodeAt(i)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 39:n="&#39;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}a!==i&&(o+=e.substring(a,i)),a=i+1,o+=n}return a!==i?o+e.substring(a,i):o}function qe(t,e){this.name=t,this.props=e,this.children=[]}qe.prototype.toString=function(){var t=this.props?" "+this.props:"";return"<"+this.name+t+">"+this.children.join("")+"</"+this.name+">"};var Dt=qe,Wt=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],zt=$t,te=Pt,he=Dt,Bt=Object.prototype.hasOwnProperty,Vt=Wt.reduce(function(t,e){return t[e]=!0,t},Object.create(null)),qt=zt.register("HTML",{tags:{"*":{enter:function(t,e){if(te(t)!==t)throw new Error("Incorrect tag name: "+t);return new he(t,e)},leave:function(t,e){return t},child:function(t,e){return t==null||(t instanceof he||(t=te(t+"")),e.children.push(t)),e},props:function(t){return Object.keys(t).map(function(e){return Ut(e,e&&t[e])}).join(" ")},children:function(t,e,r){if(typeof Vt[r.toLowerCase()]<"u")throw new Error("Tag <"+r+" /> cannot have children");return t}}},after:function(t){return t.toString()}}),Gt=qt;function Ut(t,e){return!t||e==null||e instanceof he?"":(t==="className"?t="class":t==="cssFor"?t="for":t=t.toLowerCase(),t==="style"&&(e=Jt(e)),typeof e=="string"||(e=JSON.stringify(e)),te(t)+'="'+te(e)+'"')}function Jt(t){if(typeof t=="string")return t;var e="";for(var r in t)if(Bt.call(t,r)){var n=t[r];r=r.replace(/[A-Z]/g,function(o){return"-"+o.toLowerCase()}),r.search(/moz-|webkit-|o-|ms-/)===0&&(r="-"+r),e+=(e?" ":"")+r+": "+n+";"}return e}const Yt=String.raw,Xt=Gt.render,Qt=t=>{Object.entries(t).forEach(([e,r])=>{})};function Zt(t){return t.replace(/<\/?[^>]+>/g,r=>{const n=r.slice(0,-1);if(/^[A-Z]/.test(r.slice(1,-1))){const o=n.split(" ")[0].slice(1),i=n.split(" ").slice(1);return`<emmy-${o.toLowerCase()} ${i.join(" ")}>`}else if(/^[A-Z]/.test(r.slice(2,-2))){const o=n.split(" ")[0].slice(2),i=n.split(" ").slice(1);return`</emmy-${o.toLowerCase()} ${i.join(" ")}>`}return r}).replace(/<emmy-[^>]+\/>/g,r=>{const n=r.slice(6,-2);return`<emmy-${n}></emmy-${n}>`})}function Kt(t){const e={};return t.split("").forEach(r=>{const[n,o]=r.split(":");n&&o&&(e[n.trim()]=o.trim())}),e}function er(t){if(typeof t!="string")return St(t).trim();const e=Kt(t);let r="";for(const n in e)e.hasOwnProperty(n)&&(r+=`${n}: ${e[n]} `);return r.trim()}function K(t){return/^[A-Z]/.test(t)&&(t="emmy-"+t.toLowerCase()),t}const tr="flex flex-col justify-center items-center space-y-3 text-center w-full h-fit box-border";let rr=class extends HTMLElement{constructor(){super(),this.contentGenerator=()=>"",this.callback=e=>{},this.Style={}}addStyle(e){for(const[r,n]of Object.entries(e))this.Style[r]=er(n),r=="this"&&this.setAttribute("style",this.Style[r])}render(e,r){if(typeof e!="function"&&typeof e!="string")try{const n=Xt(e);console.log(n),this.contentGenerator=()=>n}catch{this.contentGenerator=()=>e}else typeof e!="function"?this.contentGenerator=()=>e:this.contentGenerator=e;r&&typeof r=="function"&&(this.callback=r)}},Ge=class extends rr{connectedCallback(){this.innerHTML=Zt(this.contentGenerator(this)),this.callback.call(this,this)}querySelector(e){return HTMLElement.prototype.querySelector.call(this,K(e))}},X=class Ue extends Ge{constructor(){super(),this.render("",()=>{const r="emmy-"+(this.getAttribute("to")||"").toLowerCase(),n=this.getAttribute("href")==="/"?"/root":this.getAttribute("href")||"/404";Ue.routes[n]=`<${r}></${r}>`})}};X.routes={};let nr=class extends Ge{constructor(){super(),this.className=tr,this.handleLocation=()=>{const e=window.location.pathname,r=(e==="/"?X.routes["/root"]:X.routes[e])||X.routes["/404"]||Yt`<h1>404</h1>`;this.innerHTML!==r&&(this.innerHTML=r)},window.route=e=>{e.preventDefault();const r=e.target;window.location.pathname!==r.href&&(window.history.pushState({},"",r.href),this.handleLocation())},window.onpopstate=this.handleLocation,this.render("",()=>this.handleLocation())}};function Je(t,e){return customElements.get(K(e))?(console.warn(`Custom element ${K(e)} already defined`),t):(customElements.define(K(e),t),t)}Je(X,"Route");Je(nr,"Router");var or=Object.prototype.propertyIsEnumerable;function ir(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function ar(t){var e=Object.getOwnPropertyNames(t);return Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(t))),e.filter(function(r){return or.call(t,r)})}var lr=Object.assign||function(t,e){for(var r,n,o=ir(t),i=1;i<arguments.length;i++){r=arguments[i],n=ar(Object(r));for(var a=0;a<n.length;a++)o[n[a]]=r[n[a]]}return o},Y=Array.isArray,sr=lr,ur=3;function Ye(t,e){this.callBefore=e&&e.before||this.noop,this.callAfter=e&&e.after||this.noop,this.callProcess=e&&e.process;var r=this;this.scope=null,this.interpreter=t,this.interpreter.setRenderer(this),this.render=function(o,i,a){if(!o)throw new Error("JSX element is not presented");if(typeof o=="string"?o={tag:o,props:je(i)?i:null,children:Array.isArray(a)?a:null}:typeof o=="function"&&(o={tag:[o.name||o.displayName||"",o],props:je(i)?i:null,children:Array.isArray(a)?a:null}),!r.isTagDescriptor(o))throw new Error("Top level element should be a tag or function which returns a tag");return r.scope={},o=r.callBefore(o),r.callProcess?r.callProcess(function(){o=r.renderChild(o)}):o=r.renderChild(o),o=r.callAfter(o),r.scope=null,o}}Ye.prototype={renderChild:function(t){return t==null?null:this.isTagDescriptor(t)?this.handleTag(t):t},walkChildren:function(t,e,r){var n=t.length,o=0,i;for(r=r|0;o<n;o++)if(i=t[o],i!=null){if(Y(i)&&r<ur){this.walkChildren(i,e);continue}e(this.renderChild(i))}},handleTag:function(t){var e=t.tag,r=t.props,n=t.children,o,i;if(r=Y(r)?sr.apply(null,r):r||null,Y(e)){i=e[1],e=e[0];var a;return this.interpreter.hasCustomOverride(e)?(a=this.interpreter.custom(e,i,r,n),this.check(a,"custom")):a=i(r,n,e),this.renderChild(a)}return r=r&&this.interpreter.props(e,r),this.check(r,"props"),o=this.interpreter.enter(e,r),this.check(o,"enter"),Y(n)&&n.length&&(n=this.interpreter.children(e,n,o),this.check(n,"children"),o=this.handleChildren(e,n,o)),o=this.interpreter.leave(e,o),this.check(o,"leave"),o},handleChildren:function(t,e,r){var n=this;return this.walkChildren(e,function(o){r=n.interpreter.child(t,r,o),n.check(r,"child")}),r},handlePrivimite:function(t){return t},isPrimitive:function(t){switch(typeof t){case"string":case"boolean":case"number":return!0}return!1},isTagDescriptor:function(t){return t&&typeof t=="object"&&"tag"in t&&"props"in t&&"children"in t},check:function(t,e){if(typeof t>"u")throw new Error("Source ["+e+"] returned undefined");return t},noop:function(t){return t}};function je(t){return typeof t=="object"&&t&&!Y(t)}var cr=Ye;function Xe(t,e){var r=this;this.name=t,this.tags={},this.renderer=null,e&&Object.keys(e).forEach(function(n){var o=e[n];r.addTagHandler(n,o)})}Xe.prototype={addTagHandler:function(t,e){this.tags[t]=e},getHandler:function(t){var e=this.tags[t]||this.tags["*"];if(!e)throw new Error("JSX ["+t+"] is not found and [*] is missing");return e},hasCustomOverride:function(t){var e=this.getHandler(t);return!!e.custom},setRenderer:function(t){this.renderer=t},call:function(t,e){var r=this[t].apply(this,e);return typeof r>"u"&&console.log("Interpreter call ["+t+"] returned undefined"),r},props:function(t,e){var r=this.getHandler(t);return r.props?r.props.call(this.renderer,e,t):e},child:function(t,e,r){var n=this.getHandler(t);return n.child?n.child.call(this.renderer,r,e,t):e},enter:function(t,e){var r=this.getHandler(t);if(!r.enter)throw new Error("JSX Interpreter handler should provide [enter] method");return r.enter.call(this.renderer,t,e)},leave:function(t,e){var r=this.getHandler(t);return r.leave?r.leave.call(this.renderer,e,t):e},custom:function(t,e,r,n){var o=this.getHandler(t);return o.custom.call(this.renderer,e,r,n,t)},children:function(t,e,r){var n=this.getHandler(t);return n.children?n.children.call(this.renderer,e,r,t):e}};var dr=Xe,hr=cr,fr=dr,Ae={},mr={register:function(e,r){e=e.toLowerCase();var n=new fr(e,r.tags),o=new hr(n,{before:r.before,after:r.after,process:r.process});return Ae[e]=o,o},render:function(e,r){if(r=r.toLowerCase(),r=r&&Ae[r],!r)throw new Error("Renderer ["+r+"] not found");return r.render(e)}},pr=mr;/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */var gr=/["'&<>]/,yr=vr;function vr(t){var e=""+t,r=gr.exec(e);if(!r)return e;var n,o="",i=0,a=0;for(i=r.index;i<e.length;i++){switch(e.charCodeAt(i)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 39:n="&#39;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}a!==i&&(o+=e.substring(a,i)),a=i+1,o+=n}return a!==i?o+e.substring(a,i):o}function Qe(t,e){this.name=t,this.props=e,this.children=[]}Qe.prototype.toString=function(){var t=this.props?" "+this.props:"";return"<"+this.name+t+">"+this.children.join("")+"</"+this.name+">"};var br=Qe,xr=["area","base","br","col","command","embed","hr","img","input","keygen","link","meta","param","source","track","wbr"],wr=pr,re=yr,fe=br,kr=Object.prototype.hasOwnProperty,Cr=xr.reduce(function(t,e){return t[e]=!0,t},Object.create(null)),Sr=wr.register("HTML",{tags:{"*":{enter:function(t,e){if(re(t)!==t)throw new Error("Incorrect tag name: "+t);return new fe(t,e)},leave:function(t,e){return t},child:function(t,e){return t==null||(t instanceof fe||(t=re(t+"")),e.children.push(t)),e},props:function(t){return Object.keys(t).map(function(e){return jr(e,e&&t[e])}).join(" ")},children:function(t,e,r){if(typeof Cr[r.toLowerCase()]<"u")throw new Error("Tag <"+r+" /> cannot have children");return t}}},after:function(t){return t.toString()}}),Er=Sr;function jr(t,e){return!t||e==null||e instanceof fe?"":(t==="className"?t="class":t==="cssFor"?t="for":t=t.toLowerCase(),t==="style"&&(e=Ar(e)),typeof e=="string"||(e=JSON.stringify(e)),re(t)+'="'+re(e)+'"')}function Ar(t){if(typeof t=="string")return t;var e="";for(var r in t)if(kr.call(t,r)){var n=t[r];r=r.replace(/[A-Z]/g,function(o){return"-"+o.toLowerCase()}),r.search(/moz-|webkit-|o-|ms-/)===0&&(r="-"+r),e+=(e?" ":"")+r+": "+n+";"}return e}function Fe(t){return t.map(e=>typeof e=="function"?e():e)}function Fr(t){let e=t;return[()=>e,o=>{e=o}]}function Tr(t,e){const r=this.effectCallback;if(!e||e.length===0){this.effectCallback=o=>{r(o),t.call(o,o)};return}let n=Fe(e);this.effectCallback=o=>{r(o);const i=Fe(e);JSON.stringify(n)!==JSON.stringify(i)&&(n=i,t.call(o,o))},e.find(o=>{if(typeof o=="string"&&o==="didMount"){const i=this.callback;this.callback=a=>{i.call(a,a),t.call(a,a)}}return!1})}var ee={boxFlex:!0,boxFlexGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,strokeDashoffset:!0,strokeOpacity:!0,strokeWidth:!0};function Lr(t,e){return t+e.charAt(0).toUpperCase()+e.substring(1)}var Or=["Webkit","ms","Moz","O"];Object.keys(ee).forEach(function(t){Or.forEach(function(e){ee[Lr(e,t)]=ee[t]})});var Rr={background:{backgroundImage:!0,backgroundPosition:!0,backgroundRepeat:!0,backgroundColor:!0},border:{borderWidth:!0,borderStyle:!0,borderColor:!0},borderBottom:{borderBottomWidth:!0,borderBottomStyle:!0,borderBottomColor:!0},borderLeft:{borderLeftWidth:!0,borderLeftStyle:!0,borderLeftColor:!0},borderRight:{borderRightWidth:!0,borderRightStyle:!0,borderRightColor:!0},borderTop:{borderTopWidth:!0,borderTopStyle:!0,borderTopColor:!0},font:{fontStyle:!0,fontVariant:!0,fontWeight:!0,fontSize:!0,lineHeight:!0,fontFamily:!0}},Mr={isUnitlessNumber:ee,shorthandPropertyExpansions:Rr},Ir=Mr,Nr=/^ms-/,$r=/([A-Z])/g;function _r(t){return t.replace($r,"-$1").toLowerCase()}function Pr(t){return _r(t).replace(Nr,"-ms-")}var Hr=Pr,Dr=Ir.isUnitlessNumber,Wr=Hr,zr=Array.isArray,Te=Object.keys,Br=/^(normal|none|(\b(url\([^)]*\)|chapter_counter|attr\([^)]*\)|(no-)?(open|close)-quote|inherit)((\b\s*)|$|\s+))+)$/;function Le(t,e){return!Dr[t]&&typeof e=="number"?e=""+e+"px":t==="content"&&!Br.test(e)&&(e="'"+e.replace(/'/g,"\\'")+"'"),Wr(t)+": "+e+";  "}function Vr(t){var e="";if(!t||Te(t).length===0)return e;for(var r=Te(t),n=0,o=r.length;n<o;n++){var i=r[n],a=t[i];if(zr(a))for(var l=0,s=a.length;l<s;l++)e+=Le(i,a[l]);else e+=Le(i,a)}return e}var qr=Vr;const Gr=ye(qr);function Ze(t){return t.replace(/<\/?[^>]+>/g,r=>{const n=r.slice(0,-1);if(/^[A-Z]/.test(r.slice(1,-1))){const o=n.split(" ")[0].slice(1),i=n.split(" ").slice(1);return`<emmy-${o.toLowerCase()} ${i.join(" ")}>`}else if(/^[A-Z]/.test(r.slice(2,-2))){const o=n.split(" ")[0].slice(2),i=n.split(" ").slice(1);return`</emmy-${o.toLowerCase()} ${i.join(" ")}>`}return r}).replace(/<emmy-[^>]+\/>/g,r=>{const n=r.slice(6,-2);return`<emmy-${n}></emmy-${n}>`})}function Ur(t){const e={};return t.split("").forEach(r=>{const[n,o]=r.split(":");n&&o&&(e[n.trim()]=o.trim())}),e}function Jr(t){if(typeof t!="string")return Gr(t).trim();const e=Ur(t);let r="";for(const n in e)e.hasOwnProperty(n)&&(r+=`${n}: ${e[n]} `);return r.trim()}function G(t){return/^[A-Z]/.test(t)&&(t="emmy-"+t.toLowerCase()),t}const B={},Yr=t=>{Object.entries(t).forEach(([e,r])=>{B[e]=r})},$=String.raw,Xr="flex flex-col justify-center items-center space-y-3 text-center w-full h-fit box-border",Qr=Er.render;class Ke extends HTMLElement{constructor(){super(),this.contentGenerator=()=>"",this.callback=e=>{},this.Style={}}addStyle(e){for(const[r,n]of Object.entries(e))this.Style[r]=Jr(n),r=="this"&&this.setAttribute("style",this.Style[r])}render(e,r){if(typeof e!="function"&&typeof e!="string")try{const n=Qr(e);console.log(n),this.contentGenerator=()=>n}catch{this.contentGenerator=()=>e}else typeof e!="function"?this.contentGenerator=()=>e:this.contentGenerator=e;r&&typeof r=="function"&&(this.callback=r)}}class Zr extends Ke{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.shadowRoot.innerHTML=Ze(this.contentGenerator(this)),this.callback.call(this,this)}querySelector(e){return this.shadowRoot.querySelector(G(e))}}class ie extends Ke{connectedCallback(){this.innerHTML=Ze(this.contentGenerator(this)),this.callback.call(this,this)}querySelector(e){return HTMLElement.prototype.querySelector.call(this,G(e))}}function Kr(t){t.useState=Fr.bind(t),t.useEffect=Tr.bind(t)}class Oe extends ie{constructor(e){super(),this.effectCallback=n=>{},Kr.call(this,this),this.setState({rerenderCount:0});const r=e.call(this,{el:this,props:()=>this.props,children:()=>this.innerHTML});this.render(r)}get props(){return Array.from(this.attributes).reduce((e,r)=>{const n=r.name==="class"?"className":r.name;return Object.assign(Object.assign({},e),{[n]:()=>this.getAttribute(r.name)})},{})}set props(e){for(const[r,n]of Object.entries(e)){if(r==="className"){this.className=n;continue}this.setAttribute(r,n)}}connectedCallback(){super.connectedCallback(),this.effectCallback(this)}static get observedAttributes(){return["state"]}attributeChangedCallback(e,r,n){e==="state"&&this.connectedCallback()}patchState(e){const r=this.state(),n=Object.assign(r,e);this.setState(n)}rerender(){this.patchState({rerenderCount:this.state().rerenderCount+1})}state(){return JSON.parse(this.getAttribute("state").replace(/'/g,'"')||"")}setState(e){this.setAttribute("state",JSON.stringify(e).replace(/"/g,"'"))}querySelector(e){const r=HTMLElement.prototype.querySelector.call(this,G(e));return r.__proto__.addEventListener=(n,o)=>{const i=a=>{o(a),this.rerender()};HTMLElement.prototype.addEventListener.call(r,n,i)},r}}class z extends ie{constructor(){super(),this.render("",()=>{const r="emmy-"+(this.getAttribute("to")||"").toLowerCase(),n=this.getAttribute("href")==="/"?"/root":this.getAttribute("href")||"/404";z.routes[n]=`<${r}></${r}>`})}}z.routes={};class en extends ie{constructor(){super(),this.className=Xr,this.handleLocation=()=>{const e=window.location.pathname,r=(e==="/"?z.routes["/root"]:z.routes[e])||z.routes["/404"]||$`<h1>404</h1>`;this.innerHTML!==r&&(this.innerHTML=r)},window.route=e=>{e.preventDefault();const r=e.target;window.location.pathname!==r.href&&(window.history.pushState({},"",r.href),this.handleLocation())},window.onpopstate=this.handleLocation,this.render("",()=>this.handleLocation())}}function ne(t,e){return customElements.get(G(e))?(console.warn(`Custom element ${G(e)} already defined`),t):(customElements.define(G(e),t),t)}function tn(t,e){return void 0}function N(t,e){if(typeof t=="string")return tn();try{const r=new t;if(r instanceof Zr||r instanceof ie||r instanceof Oe)return ne(t,e);throw new Error("Not a valid component")}catch{class n extends Oe{constructor(){super(t)}}return ne(n,e)}}ne(z,"Route");ne(en,"Router");var et={exports:{}};/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */(function(t){(function(e,r){t.exports?t.exports=r():e.Toastify=r()})(lt,function(e){var r=function(a){return new r.lib.init(a)},n="1.12.0";r.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},r.lib=r.prototype={toastify:n,constructor:r,init:function(a){return a||(a={}),this.options={},this.toastElement=null,this.options.text=a.text||r.defaults.text,this.options.node=a.node||r.defaults.node,this.options.duration=a.duration===0?0:a.duration||r.defaults.duration,this.options.selector=a.selector||r.defaults.selector,this.options.callback=a.callback||r.defaults.callback,this.options.destination=a.destination||r.defaults.destination,this.options.newWindow=a.newWindow||r.defaults.newWindow,this.options.close=a.close||r.defaults.close,this.options.gravity=a.gravity==="bottom"?"toastify-bottom":r.defaults.gravity,this.options.positionLeft=a.positionLeft||r.defaults.positionLeft,this.options.position=a.position||r.defaults.position,this.options.backgroundColor=a.backgroundColor||r.defaults.backgroundColor,this.options.avatar=a.avatar||r.defaults.avatar,this.options.className=a.className||r.defaults.className,this.options.stopOnFocus=a.stopOnFocus===void 0?r.defaults.stopOnFocus:a.stopOnFocus,this.options.onClick=a.onClick||r.defaults.onClick,this.options.offset=a.offset||r.defaults.offset,this.options.escapeMarkup=a.escapeMarkup!==void 0?a.escapeMarkup:r.defaults.escapeMarkup,this.options.ariaLive=a.ariaLive||r.defaults.ariaLive,this.options.style=a.style||r.defaults.style,a.backgroundColor&&(this.options.style.background=a.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var a=document.createElement("div");a.className="toastify on "+this.options.className,this.options.position?a.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(a.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):a.className+=" toastify-right",a.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var l in this.options.style)a.style[l]=this.options.style[l];if(this.options.ariaLive&&a.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)a.appendChild(this.options.node);else if(this.options.escapeMarkup?a.innerText=this.options.text:a.innerHTML=this.options.text,this.options.avatar!==""){var s=document.createElement("img");s.src=this.options.avatar,s.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?a.appendChild(s):a.insertAdjacentElement("afterbegin",s)}if(this.options.close===!0){var u=document.createElement("button");u.type="button",u.setAttribute("aria-label","Close"),u.className="toast-close",u.innerHTML="&#10006;",u.addEventListener("click",(function(m){m.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}).bind(this));var c=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&c>360?a.insertAdjacentElement("afterbegin",u):a.appendChild(u)}if(this.options.stopOnFocus&&this.options.duration>0){var d=this;a.addEventListener("mouseover",function(m){window.clearTimeout(a.timeOutValue)}),a.addEventListener("mouseleave",function(){a.timeOutValue=window.setTimeout(function(){d.removeElement(a)},d.options.duration)})}if(typeof this.options.destination<"u"&&a.addEventListener("click",(function(m){m.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}).bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&a.addEventListener("click",(function(m){m.stopPropagation(),this.options.onClick()}).bind(this)),typeof this.options.offset=="object"){var h=o("x",this.options),f=o("y",this.options),p=this.options.position=="left"?h:"-"+h,g=this.options.gravity=="toastify-top"?f:"-"+f;a.style.transform="translate("+p+","+g+")"}return a},showToast:function(){this.toastElement=this.buildToast();var a;if(typeof this.options.selector=="string"?a=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?a=this.options.selector:a=document.body,!a)throw"Root element is not defined";var l=r.defaults.oldestFirst?a.firstChild:a.lastChild;return a.insertBefore(this.toastElement,l),r.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout((function(){this.removeElement(this.toastElement)}).bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(a){a.className=a.className.replace(" on",""),window.setTimeout((function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),a.parentNode&&a.parentNode.removeChild(a),this.options.callback.call(a),r.reposition()}).bind(this),400)}},r.reposition=function(){for(var a={top:15,bottom:15},l={top:15,bottom:15},s={top:15,bottom:15},u=document.getElementsByClassName("toastify"),c,d=0;d<u.length;d++){i(u[d],"toastify-top")===!0?c="toastify-top":c="toastify-bottom";var h=u[d].offsetHeight;c=c.substr(9,c.length-1);var f=15,p=window.innerWidth>0?window.innerWidth:screen.width;p<=360?(u[d].style[c]=s[c]+"px",s[c]+=h+f):i(u[d],"toastify-left")===!0?(u[d].style[c]=a[c]+"px",a[c]+=h+f):(u[d].style[c]=l[c]+"px",l[c]+=h+f)}return this};function o(a,l){return l.offset[a]?isNaN(l.offset[a])?l.offset[a]:l.offset[a]+"px":"0px"}function i(a,l){return!a||typeof l!="string"?!1:!!(a.className&&a.className.trim().split(/\s+/gi).indexOf(l)>-1)}return r.lib.init.prototype=r.lib,r})})(et);var rn=et.exports;const nn=ye(rn);var T=function(){return T=Object.assign||function(e){for(var r,n=1,o=arguments.length;n<o;n++){r=arguments[n];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},T.apply(this,arguments)};function on(t,e,r,n){function o(i){return i instanceof r?i:new r(function(a){a(i)})}return new(r||(r=Promise))(function(i,a){function l(c){try{u(n.next(c))}catch(d){a(d)}}function s(c){try{u(n.throw(c))}catch(d){a(d)}}function u(c){c.done?i(c.value):o(c.value).then(l,s)}u((n=n.apply(t,e||[])).next())})}function an(t,e){var r={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,o,i,a;return a={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function l(u){return function(c){return s([u,c])}}function s(u){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,u[0]&&(r=0)),r;)try{if(n=1,o&&(i=u[0]&2?o.return:u[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,u[1])).done)return i;switch(o=0,i&&(u=[u[0]&2,i.value]),u[0]){case 0:case 1:i=u;break;case 4:return r.label++,{value:u[1],done:!1};case 5:r.label++,o=u[1],u=[0];continue;case 7:u=r.ops.pop(),r.trys.pop();continue;default:if(i=r.trys,!(i=i.length>0&&i[i.length-1])&&(u[0]===6||u[0]===2)){r=0;continue}if(u[0]===3&&(!i||u[1]>i[0]&&u[1]<i[3])){r.label=u[1];break}if(u[0]===6&&r.label<i[1]){r.label=i[1],i=u;break}if(i&&r.label<i[2]){r.label=i[2],r.ops.push(u);break}i[2]&&r.ops.pop(),r.trys.pop();continue}u=e.call(t,r)}catch(c){u=[6,c],o=0}finally{n=i=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}function x(t){var e=typeof Symbol=="function"&&Symbol.iterator,r=e&&t[e],n=0;if(r)return r.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function M(t,e){var r=typeof Symbol=="function"&&t[Symbol.iterator];if(!r)return t;var n=r.call(t),o,i=[],a;try{for(;(e===void 0||e-- >0)&&!(o=n.next()).done;)i.push(o.value)}catch(l){a={error:l}}finally{try{o&&!o.done&&(r=n.return)&&r.call(n)}finally{if(a)throw a.error}}return i}var ln="ENTRIES",tt="KEYS",rt="VALUES",I="",ae=function(){function t(e,r){var n=e._tree,o=Array.from(n.keys());this.set=e,this._type=r,this._path=o.length>0?[{node:n,keys:o}]:[]}return t.prototype.next=function(){var e=this.dive();return this.backtrack(),e},t.prototype.dive=function(){if(this._path.length===0)return{done:!0,value:void 0};var e=q(this._path),r=e.node,n=e.keys;if(q(n)===I)return{done:!1,value:this.result()};var o=r.get(q(n));return this._path.push({node:o,keys:Array.from(o.keys())}),this.dive()},t.prototype.backtrack=function(){if(this._path.length!==0){var e=q(this._path).keys;e.pop(),!(e.length>0)&&(this._path.pop(),this.backtrack())}},t.prototype.key=function(){return this.set._prefix+this._path.map(function(e){var r=e.keys;return q(r)}).filter(function(e){return e!==I}).join("")},t.prototype.value=function(){return q(this._path).node.get(I)},t.prototype.result=function(){switch(this._type){case rt:return this.value();case tt:return this.key();default:return[this.key(),this.value()]}},t.prototype[Symbol.iterator]=function(){return this},t}(),q=function(t){return t[t.length-1]},sn=function(t,e,r){var n=new Map;if(e===void 0)return n;for(var o=e.length+1,i=o+r,a=new Uint8Array(i*o).fill(r+1),l=0;l<o;++l)a[l]=l;for(var s=1;s<i;++s)a[s*o]=s;return nt(t,e,r,n,a,1,o,""),n},nt=function(t,e,r,n,o,i,a,l){var s,u,c=i*a;try{e:for(var d=x(t.keys()),h=d.next();!h.done;h=d.next()){var f=h.value;if(f===I){var p=o[c-1];p<=r&&n.set(l,[t.get(f),p])}else{for(var g=i,m=0;m<f.length;++m,++g){for(var v=f[m],b=a*g,y=b-a,S=o[b],E=Math.max(0,g-r-1),O=Math.min(a-1,g+r),w=E;w<O;++w){var C=v!==e[w],j=o[y+w]+ +C,A=o[y+w+1]+1,L=o[b+w]+1,k=o[b+w+1]=Math.min(j,A,L);k<S&&(S=k)}if(S>r)continue e}nt(t.get(f),e,r,n,o,g,a,l+f)}}}catch(R){s={error:R}}finally{try{h&&!h.done&&(u=d.return)&&u.call(d)}finally{if(s)throw s.error}}},le=function(){function t(e,r){e===void 0&&(e=new Map),r===void 0&&(r=""),this._size=void 0,this._tree=e,this._prefix=r}return t.prototype.atPrefix=function(e){var r,n;if(!e.startsWith(this._prefix))throw new Error("Mismatched prefix");var o=M(oe(this._tree,e.slice(this._prefix.length)),2),i=o[0],a=o[1];if(i===void 0){var l=M(ve(a),2),s=l[0],u=l[1];try{for(var c=x(s.keys()),d=c.next();!d.done;d=c.next()){var h=d.value;if(h!==I&&h.startsWith(u)){var f=new Map;return f.set(h.slice(u.length),s.get(h)),new t(f,e)}}}catch(p){r={error:p}}finally{try{d&&!d.done&&(n=c.return)&&n.call(c)}finally{if(r)throw r.error}}}return new t(i,e)},t.prototype.clear=function(){this._size=void 0,this._tree.clear()},t.prototype.delete=function(e){return this._size=void 0,un(this._tree,e)},t.prototype.entries=function(){return new ae(this,ln)},t.prototype.forEach=function(e){var r,n;try{for(var o=x(this),i=o.next();!i.done;i=o.next()){var a=M(i.value,2),l=a[0],s=a[1];e(l,s,this)}}catch(u){r={error:u}}finally{try{i&&!i.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}},t.prototype.fuzzyGet=function(e,r){return sn(this._tree,e,r)},t.prototype.get=function(e){var r=me(this._tree,e);return r!==void 0?r.get(I):void 0},t.prototype.has=function(e){var r=me(this._tree,e);return r!==void 0&&r.has(I)},t.prototype.keys=function(){return new ae(this,tt)},t.prototype.set=function(e,r){if(typeof e!="string")throw new Error("key must be a string");this._size=void 0;var n=se(this._tree,e);return n.set(I,r),this},Object.defineProperty(t.prototype,"size",{get:function(){if(this._size)return this._size;this._size=0;for(var e=this.entries();!e.next().done;)this._size+=1;return this._size},enumerable:!1,configurable:!0}),t.prototype.update=function(e,r){if(typeof e!="string")throw new Error("key must be a string");this._size=void 0;var n=se(this._tree,e);return n.set(I,r(n.get(I))),this},t.prototype.fetch=function(e,r){if(typeof e!="string")throw new Error("key must be a string");this._size=void 0;var n=se(this._tree,e),o=n.get(I);return o===void 0&&n.set(I,o=r()),o},t.prototype.values=function(){return new ae(this,rt)},t.prototype[Symbol.iterator]=function(){return this.entries()},t.from=function(e){var r,n,o=new t;try{for(var i=x(e),a=i.next();!a.done;a=i.next()){var l=M(a.value,2),s=l[0],u=l[1];o.set(s,u)}}catch(c){r={error:c}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}return o},t.fromObject=function(e){return t.from(Object.entries(e))},t}(),oe=function(t,e,r){var n,o;if(r===void 0&&(r=[]),e.length===0||t==null)return[t,r];try{for(var i=x(t.keys()),a=i.next();!a.done;a=i.next()){var l=a.value;if(l!==I&&e.startsWith(l))return r.push([t,l]),oe(t.get(l),e.slice(l.length),r)}}catch(s){n={error:s}}finally{try{a&&!a.done&&(o=i.return)&&o.call(i)}finally{if(n)throw n.error}}return r.push([t,e]),oe(void 0,"",r)},me=function(t,e){var r,n;if(e.length===0||t==null)return t;try{for(var o=x(t.keys()),i=o.next();!i.done;i=o.next()){var a=i.value;if(a!==I&&e.startsWith(a))return me(t.get(a),e.slice(a.length))}}catch(l){r={error:l}}finally{try{i&&!i.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}},se=function(t,e){var r,n,o=e.length;e:for(var i=0;t&&i<o;){try{for(var a=(r=void 0,x(t.keys())),l=a.next();!l.done;l=a.next()){var s=l.value;if(s!==I&&e[i]===s[0]){for(var u=Math.min(o-i,s.length),c=1;c<u&&e[i+c]===s[c];)++c;var d=t.get(s);if(c===s.length)t=d;else{var h=new Map;h.set(s.slice(c),d),t.set(e.slice(i,i+c),h),t.delete(s),t=h}i+=c;continue e}}}catch(p){r={error:p}}finally{try{l&&!l.done&&(n=a.return)&&n.call(a)}finally{if(r)throw r.error}}var f=new Map;return t.set(e.slice(i),f),f}return t},un=function(t,e){var r=M(oe(t,e),2),n=r[0],o=r[1];if(n!==void 0){if(n.delete(I),n.size===0)ot(o);else if(n.size===1){var i=M(n.entries().next().value,2),a=i[0],l=i[1];it(o,a,l)}}},ot=function(t){if(t.length!==0){var e=M(ve(t),2),r=e[0],n=e[1];if(r.delete(n),r.size===0)ot(t.slice(0,-1));else if(r.size===1){var o=M(r.entries().next().value,2),i=o[0],a=o[1];i!==I&&it(t.slice(0,-1),i,a)}}},it=function(t,e,r){if(t.length!==0){var n=M(ve(t),2),o=n[0],i=n[1];o.set(i+e,r),o.delete(i)}},ve=function(t){return t[t.length-1]},U,be="or",at="and",cn="and_not",dn=function(){function t(e){if((e==null?void 0:e.fields)==null)throw new Error('MiniSearch: option "fields" must be provided');var r=e.autoVacuum==null||e.autoVacuum===!0?de:e.autoVacuum;this._options=T(T(T({},ce),e),{autoVacuum:r,searchOptions:T(T({},Re),e.searchOptions||{}),autoSuggestOptions:T(T({},gn),e.autoSuggestOptions||{})}),this._index=new le,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldIds={},this._fieldLength=new Map,this._avgFieldLength=[],this._nextId=0,this._storedFields=new Map,this._dirtCount=0,this._currentVacuum=null,this._enqueuedVacuum=null,this._enqueuedVacuumConditions=ge,this.addFields(this._options.fields)}return t.prototype.add=function(e){var r,n,o,i,a,l,s=this._options,u=s.extractField,c=s.tokenize,d=s.processTerm,h=s.fields,f=s.idField,p=u(e,f);if(p==null)throw new Error('MiniSearch: document does not have ID field "'.concat(f,'"'));if(this._idToShortId.has(p))throw new Error("MiniSearch: duplicate ID ".concat(p));var g=this.addDocumentId(p);this.saveStoredFields(g,e);try{for(var m=x(h),v=m.next();!v.done;v=m.next()){var b=v.value,y=u(e,b);if(y!=null){var S=c(y.toString(),b),E=this._fieldIds[b],O=new Set(S).size;this.addFieldLength(g,E,this._documentCount-1,O);try{for(var w=(o=void 0,x(S)),C=w.next();!C.done;C=w.next()){var j=C.value,A=d(j,b);if(Array.isArray(A))try{for(var L=(a=void 0,x(A)),k=L.next();!k.done;k=L.next()){var R=k.value;this.addTerm(E,g,R)}}catch(F){a={error:F}}finally{try{k&&!k.done&&(l=L.return)&&l.call(L)}finally{if(a)throw a.error}}else A&&this.addTerm(E,g,A)}}catch(F){o={error:F}}finally{try{C&&!C.done&&(i=w.return)&&i.call(w)}finally{if(o)throw o.error}}}}}catch(F){r={error:F}}finally{try{v&&!v.done&&(n=m.return)&&n.call(m)}finally{if(r)throw r.error}}},t.prototype.addAll=function(e){var r,n;try{for(var o=x(e),i=o.next();!i.done;i=o.next()){var a=i.value;this.add(a)}}catch(l){r={error:l}}finally{try{i&&!i.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}},t.prototype.addAllAsync=function(e,r){var n=this;r===void 0&&(r={});var o=r.chunkSize,i=o===void 0?10:o,a={chunk:[],promise:Promise.resolve()},l=e.reduce(function(c,d,h){var f=c.chunk,p=c.promise;return f.push(d),(h+1)%i===0?{chunk:[],promise:p.then(function(){return new Promise(function(g){return setTimeout(g,0)})}).then(function(){return n.addAll(f)})}:{chunk:f,promise:p}},a),s=l.chunk,u=l.promise;return u.then(function(){return n.addAll(s)})},t.prototype.remove=function(e){var r,n,o,i,a,l,s=this._options,u=s.tokenize,c=s.processTerm,d=s.extractField,h=s.fields,f=s.idField,p=d(e,f);if(p==null)throw new Error('MiniSearch: document does not have ID field "'.concat(f,'"'));var g=this._idToShortId.get(p);if(g==null)throw new Error("MiniSearch: cannot remove document with ID ".concat(p,": it is not in the index"));try{for(var m=x(h),v=m.next();!v.done;v=m.next()){var b=v.value,y=d(e,b);if(y!=null){var S=u(y.toString(),b),E=this._fieldIds[b],O=new Set(S).size;this.removeFieldLength(g,E,this._documentCount,O);try{for(var w=(o=void 0,x(S)),C=w.next();!C.done;C=w.next()){var j=C.value,A=c(j,b);if(Array.isArray(A))try{for(var L=(a=void 0,x(A)),k=L.next();!k.done;k=L.next()){var R=k.value;this.removeTerm(E,g,R)}}catch(F){a={error:F}}finally{try{k&&!k.done&&(l=L.return)&&l.call(L)}finally{if(a)throw a.error}}else A&&this.removeTerm(E,g,A)}}catch(F){o={error:F}}finally{try{C&&!C.done&&(i=w.return)&&i.call(w)}finally{if(o)throw o.error}}}}}catch(F){r={error:F}}finally{try{v&&!v.done&&(n=m.return)&&n.call(m)}finally{if(r)throw r.error}}this._storedFields.delete(g),this._documentIds.delete(g),this._idToShortId.delete(p),this._fieldLength.delete(g),this._documentCount-=1},t.prototype.removeAll=function(e){var r,n;if(e)try{for(var o=x(e),i=o.next();!i.done;i=o.next()){var a=i.value;this.remove(a)}}catch(l){r={error:l}}finally{try{i&&!i.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}else{if(arguments.length>0)throw new Error("Expected documents to be present. Omit the argument to remove all documents.");this._index=new le,this._documentCount=0,this._documentIds=new Map,this._idToShortId=new Map,this._fieldLength=new Map,this._avgFieldLength=[],this._storedFields=new Map,this._nextId=0}},t.prototype.discard=function(e){var r=this,n=this._idToShortId.get(e);if(n==null)throw new Error("MiniSearch: cannot discard document with ID ".concat(e,": it is not in the index"));this._idToShortId.delete(e),this._documentIds.delete(n),this._storedFields.delete(n),(this._fieldLength.get(n)||[]).forEach(function(o,i){r.removeFieldLength(n,i,r._documentCount,o)}),this._fieldLength.delete(n),this._documentCount-=1,this._dirtCount+=1,this.maybeAutoVacuum()},t.prototype.maybeAutoVacuum=function(){if(this._options.autoVacuum!==!1){var e=this._options.autoVacuum,r=e.minDirtFactor,n=e.minDirtCount,o=e.batchSize,i=e.batchWait;this.conditionalVacuum({batchSize:o,batchWait:i},{minDirtCount:n,minDirtFactor:r})}},t.prototype.discardAll=function(e){var r,n,o=this._options.autoVacuum;try{this._options.autoVacuum=!1;try{for(var i=x(e),a=i.next();!a.done;a=i.next()){var l=a.value;this.discard(l)}}catch(s){r={error:s}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}}finally{this._options.autoVacuum=o}this.maybeAutoVacuum()},t.prototype.replace=function(e){var r=this._options,n=r.idField,o=r.extractField,i=o(e,n);this.discard(i),this.add(e)},t.prototype.vacuum=function(e){return e===void 0&&(e={}),this.conditionalVacuum(e)},t.prototype.conditionalVacuum=function(e,r){var n=this;return this._currentVacuum?(this._enqueuedVacuumConditions=this._enqueuedVacuumConditions&&r,this._enqueuedVacuum!=null?this._enqueuedVacuum:(this._enqueuedVacuum=this._currentVacuum.then(function(){var o=n._enqueuedVacuumConditions;return n._enqueuedVacuumConditions=ge,n.performVacuuming(e,o)}),this._enqueuedVacuum)):this.vacuumConditionsMet(r)===!1?Promise.resolve():(this._currentVacuum=this.performVacuuming(e),this._currentVacuum)},t.prototype.performVacuuming=function(e,r){return on(this,void 0,void 0,function(){var n,o,i,a,l,s,u,c,d,h,f,p,g,m,v,b,y,S,E,O,w,C,j,A,L;return an(this,function(k){switch(k.label){case 0:if(n=this._dirtCount,!this.vacuumConditionsMet(r))return[3,10];o=e.batchSize||pe.batchSize,i=e.batchWait||pe.batchWait,a=1,k.label=1;case 1:k.trys.push([1,7,8,9]),l=x(this._index),s=l.next(),k.label=2;case 2:if(s.done)return[3,6];u=M(s.value,2),c=u[0],d=u[1];try{for(h=(C=void 0,x(d)),f=h.next();!f.done;f=h.next()){p=M(f.value,2),g=p[0],m=p[1];try{for(v=(A=void 0,x(m)),b=v.next();!b.done;b=v.next())y=M(b.value,1),S=y[0],!this._documentIds.has(S)&&(m.size<=1?d.delete(g):m.delete(S))}catch(R){A={error:R}}finally{try{b&&!b.done&&(L=v.return)&&L.call(v)}finally{if(A)throw A.error}}}}catch(R){C={error:R}}finally{try{f&&!f.done&&(j=h.return)&&j.call(h)}finally{if(C)throw C.error}}return this._index.get(c).size===0&&this._index.delete(c),a%o!==0?[3,4]:[4,new Promise(function(R){return setTimeout(R,i)})];case 3:k.sent(),k.label=4;case 4:a+=1,k.label=5;case 5:return s=l.next(),[3,2];case 6:return[3,9];case 7:return E=k.sent(),O={error:E},[3,9];case 8:try{s&&!s.done&&(w=l.return)&&w.call(l)}finally{if(O)throw O.error}return[7];case 9:this._dirtCount-=n,k.label=10;case 10:return[4,null];case 11:return k.sent(),this._currentVacuum=this._enqueuedVacuum,this._enqueuedVacuum=null,[2]}})})},t.prototype.vacuumConditionsMet=function(e){if(e==null)return!0;var r=e.minDirtCount,n=e.minDirtFactor;return r=r||de.minDirtCount,n=n||de.minDirtFactor,this.dirtCount>=r&&this.dirtFactor>=n},Object.defineProperty(t.prototype,"isVacuuming",{get:function(){return this._currentVacuum!=null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"dirtCount",{get:function(){return this._dirtCount},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"dirtFactor",{get:function(){return this._dirtCount/(1+this._documentCount+this._dirtCount)},enumerable:!1,configurable:!0}),t.prototype.has=function(e){return this._idToShortId.has(e)},t.prototype.getStoredFields=function(e){var r=this._idToShortId.get(e);if(r!=null)return this._storedFields.get(r)},t.prototype.search=function(e,r){var n,o;r===void 0&&(r={});var i=this.executeQuery(e,r),a=[];try{for(var l=x(i),s=l.next();!s.done;s=l.next()){var u=M(s.value,2),c=u[0],d=u[1],h=d.score,f=d.terms,p=d.match,g=f.length||1,m={id:this._documentIds.get(c),score:h*g,terms:Object.keys(p),queryTerms:f,match:p};Object.assign(m,this._storedFields.get(c)),(r.filter==null||r.filter(m))&&a.push(m)}}catch(v){n={error:v}}finally{try{s&&!s.done&&(o=l.return)&&o.call(l)}finally{if(n)throw n.error}}return e===t.wildcard&&r.boostDocument==null&&this._options.searchOptions.boostDocument==null||a.sort(Ie),a},t.prototype.autoSuggest=function(e,r){var n,o,i,a;r===void 0&&(r={}),r=T(T({},this._options.autoSuggestOptions),r);var l=new Map;try{for(var s=x(this.search(e,r)),u=s.next();!u.done;u=s.next()){var c=u.value,d=c.score,h=c.terms,f=h.join(" "),p=l.get(f);p!=null?(p.score+=d,p.count+=1):l.set(f,{score:d,terms:h,count:1})}}catch(E){n={error:E}}finally{try{u&&!u.done&&(o=s.return)&&o.call(s)}finally{if(n)throw n.error}}var g=[];try{for(var m=x(l),v=m.next();!v.done;v=m.next()){var b=M(v.value,2),p=b[0],y=b[1],d=y.score,h=y.terms,S=y.count;g.push({suggestion:p,terms:h,score:d/S})}}catch(E){i={error:E}}finally{try{v&&!v.done&&(a=m.return)&&a.call(m)}finally{if(i)throw i.error}}return g.sort(Ie),g},Object.defineProperty(t.prototype,"documentCount",{get:function(){return this._documentCount},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"termCount",{get:function(){return this._index.size},enumerable:!1,configurable:!0}),t.loadJSON=function(e,r){if(r==null)throw new Error("MiniSearch: loadJSON should be given the same options used when serializing the index");return this.loadJS(JSON.parse(e),r)},t.getDefault=function(e){if(ce.hasOwnProperty(e))return ue(ce,e);throw new Error('MiniSearch: unknown option "'.concat(e,'"'))},t.loadJS=function(e,r){var n,o,i,a,l,s,u=e.index,c=e.documentCount,d=e.nextId,h=e.documentIds,f=e.fieldIds,p=e.fieldLength,g=e.averageFieldLength,m=e.storedFields,v=e.dirtCount,b=e.serializationVersion;if(b!==1&&b!==2)throw new Error("MiniSearch: cannot deserialize an index created with an incompatible version");var y=new t(r);y._documentCount=c,y._nextId=d,y._documentIds=Q(h),y._idToShortId=new Map,y._fieldIds=f,y._fieldLength=Q(p),y._avgFieldLength=g,y._storedFields=Q(m),y._dirtCount=v||0,y._index=new le;try{for(var S=x(y._documentIds),E=S.next();!E.done;E=S.next()){var O=M(E.value,2),w=O[0],C=O[1];y._idToShortId.set(C,w)}}catch(D){n={error:D}}finally{try{E&&!E.done&&(o=S.return)&&o.call(S)}finally{if(n)throw n.error}}try{for(var j=x(u),A=j.next();!A.done;A=j.next()){var L=M(A.value,2),k=L[0],R=L[1],F=new Map;try{for(var H=(l=void 0,x(Object.keys(R))),_=H.next();!_.done;_=H.next()){var W=_.value,V=R[W];b===1&&(V=V.ds),F.set(parseInt(W,10),Q(V))}}catch(D){l={error:D}}finally{try{_&&!_.done&&(s=H.return)&&s.call(H)}finally{if(l)throw l.error}}y._index.set(k,F)}}catch(D){i={error:D}}finally{try{A&&!A.done&&(a=j.return)&&a.call(j)}finally{if(i)throw i.error}}return y},t.prototype.executeQuery=function(e,r){var n=this;if(r===void 0&&(r={}),e===t.wildcard)return this.executeWildcardQuery(r);if(typeof e!="string"){var o=T(T(T({},r),e),{queries:void 0}),i=e.queries.map(function(m){return n.executeQuery(m,o)});return this.combineResults(i,o.combineWith)}var a=this._options,l=a.tokenize,s=a.processTerm,u=a.searchOptions,c=T(T({tokenize:l,processTerm:s},u),r),d=c.tokenize,h=c.processTerm,f=d(e).flatMap(function(m){return h(m)}).filter(function(m){return!!m}),p=f.map(pn(c)),g=p.map(function(m){return n.executeQuerySpec(m,c)});return this.combineResults(g,c.combineWith)},t.prototype.executeQuerySpec=function(e,r){var n,o,i,a,l=T(T({},this._options.searchOptions),r),s=(l.fields||this._options.fields).reduce(function(W,V){var D;return T(T({},W),(D={},D[V]=ue(l.boost,V)||1,D))},{}),u=l.boostDocument,c=l.weights,d=l.maxFuzzy,h=l.bm25,f=T(T({},Re.weights),c),p=f.fuzzy,g=f.prefix,m=this._index.get(e.term),v=this.termResults(e.term,e.term,1,m,s,u,h),b,y;if(e.prefix&&(b=this._index.atPrefix(e.term)),e.fuzzy){var S=e.fuzzy===!0?.2:e.fuzzy,E=S<1?Math.min(d,Math.round(e.term.length*S)):S;E&&(y=this._index.fuzzyGet(e.term,E))}if(b)try{for(var O=x(b),w=O.next();!w.done;w=O.next()){var C=M(w.value,2),j=C[0],A=C[1],L=j.length-e.term.length;if(L){y==null||y.delete(j);var k=g*j.length/(j.length+.3*L);this.termResults(e.term,j,k,A,s,u,h,v)}}}catch(W){n={error:W}}finally{try{w&&!w.done&&(o=O.return)&&o.call(O)}finally{if(n)throw n.error}}if(y)try{for(var R=x(y.keys()),F=R.next();!F.done;F=R.next()){var j=F.value,H=M(y.get(j),2),_=H[0],L=H[1];if(L){var k=p*j.length/(j.length+L);this.termResults(e.term,j,k,_,s,u,h,v)}}}catch(W){i={error:W}}finally{try{F&&!F.done&&(a=R.return)&&a.call(R)}finally{if(i)throw i.error}}return v},t.prototype.executeWildcardQuery=function(e){var r,n,o=new Map,i=T(T({},this._options.searchOptions),e);try{for(var a=x(this._documentIds),l=a.next();!l.done;l=a.next()){var s=M(l.value,2),u=s[0],c=s[1],d=i.boostDocument?i.boostDocument(c,"",this._storedFields.get(u)):1;o.set(u,{score:d,terms:[],match:{}})}}catch(h){r={error:h}}finally{try{l&&!l.done&&(n=a.return)&&n.call(a)}finally{if(r)throw r.error}}return o},t.prototype.combineResults=function(e,r){if(r===void 0&&(r=be),e.length===0)return new Map;var n=r.toLowerCase();return e.reduce(hn[n])||new Map},t.prototype.toJSON=function(){var e,r,n,o,i=[];try{for(var a=x(this._index),l=a.next();!l.done;l=a.next()){var s=M(l.value,2),u=s[0],c=s[1],d={};try{for(var h=(n=void 0,x(c)),f=h.next();!f.done;f=h.next()){var p=M(f.value,2),g=p[0],m=p[1];d[g]=Object.fromEntries(m)}}catch(v){n={error:v}}finally{try{f&&!f.done&&(o=h.return)&&o.call(h)}finally{if(n)throw n.error}}i.push([u,d])}}catch(v){e={error:v}}finally{try{l&&!l.done&&(r=a.return)&&r.call(a)}finally{if(e)throw e.error}}return{documentCount:this._documentCount,nextId:this._nextId,documentIds:Object.fromEntries(this._documentIds),fieldIds:this._fieldIds,fieldLength:Object.fromEntries(this._fieldLength),averageFieldLength:this._avgFieldLength,storedFields:Object.fromEntries(this._storedFields),dirtCount:this._dirtCount,index:i,serializationVersion:2}},t.prototype.termResults=function(e,r,n,o,i,a,l,s){var u,c,d,h,f;if(s===void 0&&(s=new Map),o==null)return s;try{for(var p=x(Object.keys(i)),g=p.next();!g.done;g=p.next()){var m=g.value,v=i[m],b=this._fieldIds[m],y=o.get(b);if(y!=null){var S=y.size,E=this._avgFieldLength[b];try{for(var O=(d=void 0,x(y.keys())),w=O.next();!w.done;w=O.next()){var C=w.value;if(!this._documentIds.has(C)){this.removeTerm(b,C,r),S-=1;continue}var j=a?a(this._documentIds.get(C),r,this._storedFields.get(C)):1;if(j){var A=y.get(C),L=this._fieldLength.get(C)[b],k=mn(A,S,this._documentCount,L,E,l),R=n*v*j*k,F=s.get(C);if(F){F.score+=R,yn(F.terms,e);var H=ue(F.match,r);H?H.push(m):F.match[r]=[m]}else s.set(C,{score:R,terms:[e],match:(f={},f[r]=[m],f)})}}}catch(_){d={error:_}}finally{try{w&&!w.done&&(h=O.return)&&h.call(O)}finally{if(d)throw d.error}}}}}catch(_){u={error:_}}finally{try{g&&!g.done&&(c=p.return)&&c.call(p)}finally{if(u)throw u.error}}return s},t.prototype.addTerm=function(e,r,n){var o=this._index.fetch(n,Ne),i=o.get(e);if(i==null)i=new Map,i.set(r,1),o.set(e,i);else{var a=i.get(r);i.set(r,(a||0)+1)}},t.prototype.removeTerm=function(e,r,n){if(!this._index.has(n)){this.warnDocumentChanged(r,e,n);return}var o=this._index.fetch(n,Ne),i=o.get(e);i==null||i.get(r)==null?this.warnDocumentChanged(r,e,n):i.get(r)<=1?i.size<=1?o.delete(e):i.delete(r):i.set(r,i.get(r)-1),this._index.get(n).size===0&&this._index.delete(n)},t.prototype.warnDocumentChanged=function(e,r,n){var o,i;try{for(var a=x(Object.keys(this._fieldIds)),l=a.next();!l.done;l=a.next()){var s=l.value;if(this._fieldIds[s]===r){this._options.logger("warn","MiniSearch: document with ID ".concat(this._documentIds.get(e),' has changed before removal: term "').concat(n,'" was not present in field "').concat(s,'". Removing a document after it has changed can corrupt the index!'),"version_conflict");return}}}catch(u){o={error:u}}finally{try{l&&!l.done&&(i=a.return)&&i.call(a)}finally{if(o)throw o.error}}},t.prototype.addDocumentId=function(e){var r=this._nextId;return this._idToShortId.set(e,r),this._documentIds.set(r,e),this._documentCount+=1,this._nextId+=1,r},t.prototype.addFields=function(e){for(var r=0;r<e.length;r++)this._fieldIds[e[r]]=r},t.prototype.addFieldLength=function(e,r,n,o){var i=this._fieldLength.get(e);i==null&&this._fieldLength.set(e,i=[]),i[r]=o;var a=this._avgFieldLength[r]||0,l=a*n+o;this._avgFieldLength[r]=l/(n+1)},t.prototype.removeFieldLength=function(e,r,n,o){if(n===1){this._avgFieldLength[r]=0;return}var i=this._avgFieldLength[r]*n-o;this._avgFieldLength[r]=i/(n-1)},t.prototype.saveStoredFields=function(e,r){var n,o,i=this._options,a=i.storeFields,l=i.extractField;if(!(a==null||a.length===0)){var s=this._storedFields.get(e);s==null&&this._storedFields.set(e,s={});try{for(var u=x(a),c=u.next();!c.done;c=u.next()){var d=c.value,h=l(r,d);h!==void 0&&(s[d]=h)}}catch(f){n={error:f}}finally{try{c&&!c.done&&(o=u.return)&&o.call(u)}finally{if(n)throw n.error}}}},t.wildcard=Symbol("*"),t}(),ue=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:void 0},hn=(U={},U[be]=function(t,e){var r,n;try{for(var o=x(e.keys()),i=o.next();!i.done;i=o.next()){var a=i.value,l=t.get(a);if(l==null)t.set(a,e.get(a));else{var s=e.get(a),u=s.score,c=s.terms,d=s.match;l.score=l.score+u,l.match=Object.assign(l.match,d),Me(l.terms,c)}}}catch(h){r={error:h}}finally{try{i&&!i.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}return t},U[at]=function(t,e){var r,n,o=new Map;try{for(var i=x(e.keys()),a=i.next();!a.done;a=i.next()){var l=a.value,s=t.get(l);if(s!=null){var u=e.get(l),c=u.score,d=u.terms,h=u.match;Me(s.terms,d),o.set(l,{score:s.score+c,terms:s.terms,match:Object.assign(s.match,h)})}}}catch(f){r={error:f}}finally{try{a&&!a.done&&(n=i.return)&&n.call(i)}finally{if(r)throw r.error}}return o},U[cn]=function(t,e){var r,n;try{for(var o=x(e.keys()),i=o.next();!i.done;i=o.next()){var a=i.value;t.delete(a)}}catch(l){r={error:l}}finally{try{i&&!i.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}return t},U),fn={k:1.2,b:.7,d:.5},mn=function(t,e,r,n,o,i){var a=i.k,l=i.b,s=i.d,u=Math.log(1+(r-e+.5)/(e+.5));return u*(s+t*(a+1)/(t+a*(1-l+l*n/o)))},pn=function(t){return function(e,r,n){var o=typeof t.fuzzy=="function"?t.fuzzy(e,r,n):t.fuzzy||!1,i=typeof t.prefix=="function"?t.prefix(e,r,n):t.prefix===!0;return{term:e,fuzzy:o,prefix:i}}},ce={idField:"id",extractField:function(t,e){return t[e]},tokenize:function(t){return t.split(vn)},processTerm:function(t){return t.toLowerCase()},fields:void 0,searchOptions:void 0,storeFields:[],logger:function(t,e){typeof(console==null?void 0:console[t])=="function"&&console[t](e)},autoVacuum:!0},Re={combineWith:be,prefix:!1,fuzzy:!1,maxFuzzy:6,boost:{},weights:{fuzzy:.45,prefix:.375},bm25:fn},gn={combineWith:at,prefix:function(t,e,r){return e===r.length-1}},pe={batchSize:1e3,batchWait:10},ge={minDirtFactor:.1,minDirtCount:20},de=T(T({},pe),ge),yn=function(t,e){t.includes(e)||t.push(e)},Me=function(t,e){var r,n;try{for(var o=x(e),i=o.next();!i.done;i=o.next()){var a=i.value;t.includes(a)||t.push(a)}}catch(l){r={error:l}}finally{try{i&&!i.done&&(n=o.return)&&n.call(o)}finally{if(r)throw r.error}}},Ie=function(t,e){var r=t.score,n=e.score;return n-r},Ne=function(){return new Map},Q=function(t){var e,r,n=new Map;try{for(var o=x(Object.keys(t)),i=o.next();!i.done;i=o.next()){var a=i.value;n.set(parseInt(a,10),t[a])}}catch(l){e={error:l}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(e)throw e.error}}return n},vn=/[\n\r -#%-*,-/:;?@[-\]_{}\u00A0\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]+/u;Qt({markdown:{cli:`<section class="flex flex-col justify-top items-left text-left p-4 pt-0 mb-4 w-full sm:w-[90%] md:w-[70%] h-fit box-border gap-6"><h1 class="text-3xl md:text-5xl font-extrabold mb-2 text-purple-600 dark:text-purple-300" >Using Emmy.js with create-emmy</h1>
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
<p>Emmy.js is a JavaScript library for building user interfaces. Inspired by React.js, it uses the platform's native APIs to render components, in a declarative way.</p>
<p>It's core library <code>emmy-dom</code> allows you to create components using functional components, class components, and page components. It also includes hooks and a router to create single page applications.</p>
<h2 class="text-3xl font-extrabold mb-2 text-emerald-600 dark:text-emerald-300" >Functional Components</h2>
<p>You can use functional components to create components without classes. Functional components are just functions that return a string of HTML code or a function that returns a string of HTML code. The following example shows how to create a functional component:</p>
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
<Route href='/documentation/vite' to='Vite'></Route>`});Yr({markdown:{cli:`<section class="flex flex-col justify-top items-left text-left p-4 pt-0 mb-4 w-full sm:w-[90%] md:w-[70%] h-fit box-border gap-6"><h1 class="text-3xl md:text-5xl font-extrabold mb-2 text-purple-600 dark:text-purple-300" >Using Emmy.js with create-emmy</h1>
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
<p>Emmy.js is a JavaScript library for building user interfaces. Inspired by React.js, it uses the platform's native APIs to render components, in a declarative way.</p>
<p>It's core library <code>emmy-dom</code> allows you to create components using functional components, class components, and page components. It also includes hooks and a router to create single page applications.</p>
<h2 class="text-3xl font-extrabold mb-2 text-emerald-600 dark:text-emerald-300" >Functional Components</h2>
<p>You can use functional components to create components without classes. Functional components are just functions that return a string of HTML code or a function that returns a string of HTML code. The following example shows how to create a functional component:</p>
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
<Route href='/documentation/vite' to='Vite'></Route>`});function bn({el:t}){return t.className="flex flex-col justify-between items-center text-center w-full gap-6",$`
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
  `}N(bn,"About");document.querySelectorAll("emmy-about").forEach(t=>{t.connectedCallback()});function xn({el:t}){return t.className="flex flex-col justify-space-between space-y-3 text-center w-full h-full box-border",$`
    <Header />
    <Route href='/' to='Home' />
    <Route href='/our-story' to='About' />
    <Route href='/getting-started' to='Docs' />
    <Route href='/docs' to='Docs' />
    <Route href='/status' to='Status' />
    ${B.markdownRoutes}
    <Route href='/404' to='Code404' />
    <Router />
  `}N(xn,"App");document.querySelectorAll("emmy-app").forEach(t=>{t.connectedCallback()});function wn({el:t}){return t.className="flex flex-col justify-center items-center text-center w-full h-fit box-border",$`
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
  `}N(wn,"Docs");document.querySelectorAll("emmy-docs").forEach(t=>{t.connectedCallback()});function kn({el:t}){return t.className="flex flex-col justify-between items-center text-center w-full h-[80dvh] gap-4",$`
    <main class='flex flex-col justify-center items-center gap-6'>
      <h1 class='text-3xl md:text-5xl font-extrabold text-purple-600 dark:text-purple-300 leading-relaxed'>Hello from Emmy.js!</h1>
      <a href='https://www.npmjs.com/package/emmy-dom' class='flex flex-col items-center gap-4'>
        <section id='confetti' class='flex flex-col gap-4 items-center'>
          <h2 class='text-2xl font-bold text-gray-800 dark:text-gray-200'>Thank you for the <strong class='text-emerald-600 dark:text-emerald-300'>1500+</strong> downloads on npm!</h2>
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
  `}N(kn,"Home");document.querySelectorAll("emmy-home").forEach(t=>{t.connectedCallback()});function Cn({el:t}){return t.className="flex flex-col justify-center items-center text-center max-w-[90%] lg:max-w-full h-fit box-border",B.markdown.cli}N(Cn,"Cli");document.querySelectorAll("emmy-cli").forEach(t=>{t.connectedCallback()});function Sn({el:t}){return t.className="flex flex-col justify-center items-center text-center max-w-[90%] lg:max-w-full h-fit box-border",B.markdown.index}N(Sn,"Index");document.querySelectorAll("emmy-index").forEach(t=>{t.connectedCallback()});function En({el:t}){return t.className="flex flex-col justify-center items-center text-center max-w-[90%] lg:max-w-full h-fit box-border",B.markdown.rails}N(En,"Rails");document.querySelectorAll("emmy-rails").forEach(t=>{t.connectedCallback()});function jn({el:t}){return t.className="flex flex-col justify-center items-center text-center max-w-[90%] lg:max-w-full h-fit box-border",B.markdown.vite}N(jn,"Vite");document.querySelectorAll("emmy-vite").forEach(t=>{t.connectedCallback()});function An({el:t}){return t.className="flex flex-col justify-center items-center text-center w-full h-fit mb-[10%] gap-4",$`
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
  `}N(An,"Status");document.querySelectorAll("emmy-status").forEach(t=>{t.connectedCallback()});function Fn({el:t}){t.className="flex flex-col justify-center items-center space-y-3";const[e,r]=t.useState(0),n=a=>{nn({text:`Counter value changed to ${e()}`,style:{background:"#1F2937",color:"#fff",borderRadius:"10px"},gravity:"bottom",position:a,duration:600}).showToast()},o=()=>{r(e()+1),n("right")},i=()=>{r(e()-1),n("left")};return t.useEffect(()=>{t.querySelector("#plusButton").addEventListener("click",o),t.querySelector("#minusButton").addEventListener("click",i)},[]),()=>$`
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
  `}N(Fn,"Counter");document.querySelectorAll("emmy-counter").forEach(t=>{t.connectedCallback()});function Tn({el:t}){const[e,r]=t.useState(!0);return t.useEffect(()=>{t.querySelector("[data-collapse-toggle]").addEventListener("click",()=>{r(!e())})},[]),t.useEffect(()=>{const n=t.querySelector("#navbar-default");n.setAttribute("aria-expanded",!e()),n.classList=e()?"hidden w-full md:block md:w-auto":"w-full md:block md:w-auto"},[e]),$`
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
  `}N(Tn,"Header");document.querySelectorAll("emmy-header").forEach(t=>{t.connectedCallback()});function Ln({el:t,props:e}){const{type:r}=e();if(!r())return"";let n={unstable:"text-xs font-medium me-2 px-2.5 py-0.5 rounded-full bg-yellow-900 text-yellow-300",stable:"text-xs font-medium me-2 px-2.5 py-0.5 rounded-full bg-green-900 text-green-300",deprecated:"text-xs font-medium me-2 px-2.5 py-0.5 rounded-full bg-red-900 text-red-300",experimental:"text-xs font-medium me-2 px-2.5 py-0.5 rounded-full bg-purple-900 text-purple-300",planned:"text-xs font-medium me-2 px-2.5 py-0.5 rounded-full bg-blue-900 text-blue-300"}[r().trim()];return t.className=`${n} inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium`,r().charAt(0).toUpperCase()+r().slice(1)}N(Ln,"Pill");document.querySelectorAll("emmy-pill").forEach(t=>{t.connectedCallback()});function On({props:t,children:e}){return $`
    <li class='py-3 sm:py-4 justify-between space-x-3 rtl:space-x-reverse flex items-center gap-5'>
      <p class='text-sm font-semibold text-gray-900 truncate dark:text-white'>
        ${e()}
      </p>
      <Pill type='${t().status()}' />
    </li>
  `}N(On,"Row");document.querySelectorAll("emmy-row").forEach(t=>{t.connectedCallback()});function Rn({el:t}){const[e,r]=t.useState(!1),[n,o]=t.useState([]);return t.useEffect(()=>{let i=new dn({fields:["id","title","content","url"],storeFields:["title","content","url"]});const a=Object.entries(B.markdown??{}).map(([l,s])=>({id:l,title:s.match(/<h1(.*?)>(.*?)<\/h1>/).slice(2).join(""),url:l==="index"?"/documentation":`/documentation/${l}`,content:s}));i.addAll(a),t.querySelector("form").addEventListener("submit",l=>{l.preventDefault();const s=l.target.querySelector("input").value;s&&(o(i.search(s)),n().length===0&&o(a),r(!0))}),t.querySelector("#close-modal").addEventListener("click",()=>r(!1))},[]),()=>$`
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
            <p class='text-gray-500 dark:text-gray-400 mb-4'>${n().length} ${n().length===1?"result":"results"} found</p>
            <ul class='space-y-4 mb-4'>
              ${n().map(i=>$`
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
  `}N(Rn,"Search");document.querySelectorAll("emmy-search").forEach(t=>{t.connectedCallback()});function Mn({el:t}){return t.className="absolute inset-0 bg-gray-900 bg-opacity-90 flex flex-col justify-center items-center w-full h-full",$`<div class='text-white text-3xl font-bold mb-4'>Under construction \u{1f6a7}</div>`}N(Mn,"UnderConstruction");document.querySelectorAll("emmy-underconstruction").forEach(t=>{t.connectedCallback()});function xe(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function $e(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function we(t,e,r){return e&&$e(t.prototype,e),r&&$e(t,r),t}function _e(t){return+t.replace(/px/,"")}function In(t){var e=window.devicePixelRatio,r=getComputedStyle(t),n=_e(r.getPropertyValue("width")),o=_e(r.getPropertyValue("height"));t.setAttribute("width",(n*e).toString()),t.setAttribute("height",(o*e).toString())}function P(t,e){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,n=Math.random()*(e-t)+t;return Math.floor(n*Math.pow(10,r))/Math.pow(10,r)}function Pe(t){return t[P(0,t.length)]}var Nn=.00125,$n=5e-4,_n=9e-4,Pn=1e-5,Hn=6,Dn=80,Wn=.9,zn=1.7,Bn=.2,Vn=.6,qn=.03,Gn=.07,He=15,De=82,Un=150,Jn=100,Yn=250,Xn=40,Qn=["#fcf403","#62fc03","#f4fc03","#03e7fc","#03fca5","#a503fc","#fc03ad","#fc03c2"];function We(t){var e=1920;return Math.log(t)/Math.log(e)}var ze=function(){function t(e){xe(this,t);var r=e.initialPosition,n=e.direction,o=e.confettiRadius,i=e.confettiColors,a=e.emojis,l=e.emojiSize,s=e.canvasWidth,u=P(Wn,zn,3),c=u*We(s);this.confettiSpeed={x:c,y:c},this.finalConfettiSpeedX=P(Bn,Vn,3),this.rotationSpeed=a.length?.01:P(qn,Gn,3)*We(s),this.dragForceCoefficient=P($n,_n,6),this.radius={x:o,y:o},this.initialRadius=o,this.rotationAngle=n==="left"?P(0,.2,3):P(-.2,0,3),this.emojiSize=l,this.emojiRotationAngle=P(0,2*Math.PI),this.radiusYUpdateDirection="down";var d=n==="left"?P(De,He)*Math.PI/180:P(-He,-De)*Math.PI/180;this.absCos=Math.abs(Math.cos(d)),this.absSin=Math.abs(Math.sin(d));var h=P(-Un,0),f={x:r.x+(n==="left"?-h:h)*this.absCos,y:r.y-h*this.absSin};this.currentPosition=Object.assign({},f),this.initialPosition=Object.assign({},f),this.color=a.length?null:Pe(i),this.emoji=a.length?Pe(a):null,this.createdAt=new Date().getTime(),this.direction=n}return we(t,[{key:"draw",value:function(r){var n=this.currentPosition,o=this.radius,i=this.color,a=this.emoji,l=this.rotationAngle,s=this.emojiRotationAngle,u=this.emojiSize,c=window.devicePixelRatio;i?(r.fillStyle=i,r.beginPath(),r.ellipse(n.x*c,n.y*c,o.x*c,o.y*c,l,0,2*Math.PI),r.fill()):a&&(r.font="".concat(u,"px serif"),r.save(),r.translate(c*n.x,c*n.y),r.rotate(s),r.textAlign="center",r.fillText(a,0,0),r.restore())}},{key:"updatePosition",value:function(r,n){var o=this.confettiSpeed,i=this.dragForceCoefficient,a=this.finalConfettiSpeedX,l=this.radiusYUpdateDirection,s=this.rotationSpeed,u=this.createdAt,c=this.direction,d=n-u;if(o.x>a&&(this.confettiSpeed.x-=i*r),this.currentPosition.x+=o.x*(c==="left"?-this.absCos:this.absCos)*r,this.currentPosition.y=this.initialPosition.y-o.y*this.absSin*d+Nn*Math.pow(d,2)/2,this.rotationSpeed-=this.emoji?1e-4:Pn*r,this.rotationSpeed<0&&(this.rotationSpeed=0),this.emoji){this.emojiRotationAngle+=this.rotationSpeed*r%(2*Math.PI);return}l==="down"?(this.radius.y-=r*s,this.radius.y<=0&&(this.radius.y=0,this.radiusYUpdateDirection="up")):(this.radius.y+=r*s,this.radius.y>=this.initialRadius&&(this.radius.y=this.initialRadius,this.radiusYUpdateDirection="down"))}},{key:"getIsVisibleOnCanvas",value:function(r){return this.currentPosition.y<r+Jn}}]),t}();function Zn(){var t=document.createElement("canvas");return t.style.position="fixed",t.style.width="100%",t.style.height="100%",t.style.top="0",t.style.left="0",t.style.zIndex="1000",t.style.pointerEvents="none",document.body.appendChild(t),t}function Kn(t){var e=t.confettiRadius,r=e===void 0?Hn:e,n=t.confettiNumber,o=n===void 0?t.confettiesNumber||(t.emojis?Xn:Yn):n,i=t.confettiColors,a=i===void 0?Qn:i,l=t.emojis,s=l===void 0?t.emojies||[]:l,u=t.emojiSize,c=u===void 0?Dn:u;return t.emojies&&console.error("emojies argument is deprecated, please use emojis instead"),t.confettiesNumber&&console.error("confettiesNumber argument is deprecated, please use confettiNumber instead"),{confettiRadius:r,confettiNumber:o,confettiColors:a,emojis:s,emojiSize:c}}var eo=function(){function t(e){var r=this;xe(this,t),this.canvasContext=e,this.shapes=[],this.promise=new Promise(function(n){return r.resolvePromise=n})}return we(t,[{key:"getBatchCompletePromise",value:function(){return this.promise}},{key:"addShapes",value:function(){var r;(r=this.shapes).push.apply(r,arguments)}},{key:"complete",value:function(){var r;return this.shapes.length?!1:((r=this.resolvePromise)===null||r===void 0||r.call(this),!0)}},{key:"processShapes",value:function(r,n,o){var i=this,a=r.timeDelta,l=r.currentTime;this.shapes=this.shapes.filter(function(s){return s.updatePosition(a,l),s.draw(i.canvasContext),o?s.getIsVisibleOnCanvas(n):!0})}}]),t}(),to=function(){function t(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};xe(this,t),this.activeConfettiBatches=[],this.canvas=e.canvas||Zn(),this.canvasContext=this.canvas.getContext("2d"),this.requestAnimationFrameRequested=!1,this.lastUpdated=new Date().getTime(),this.iterationIndex=0,this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}return we(t,[{key:"loop",value:function(){this.requestAnimationFrameRequested=!1,In(this.canvas);var r=new Date().getTime(),n=r-this.lastUpdated,o=this.canvas.offsetHeight,i=this.iterationIndex%10===0;this.activeConfettiBatches=this.activeConfettiBatches.filter(function(a){return a.processShapes({timeDelta:n,currentTime:r},o,i),i?!a.complete():!0}),this.iterationIndex++,this.queueAnimationFrameIfNeeded(r)}},{key:"queueAnimationFrameIfNeeded",value:function(r){this.requestAnimationFrameRequested||this.activeConfettiBatches.length<1||(this.requestAnimationFrameRequested=!0,this.lastUpdated=r||new Date().getTime(),requestAnimationFrame(this.loop))}},{key:"addConfetti",value:function(){for(var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=Kn(r),o=n.confettiRadius,i=n.confettiNumber,a=n.confettiColors,l=n.emojis,s=n.emojiSize,u=this.canvas.getBoundingClientRect(),c=u.width,d=u.height,h=d*5/7,f={x:0,y:h},p={x:c,y:h},g=new eo(this.canvasContext),m=0;m<i/2;m++){var v=new ze({initialPosition:f,direction:"right",confettiRadius:o,confettiColors:a,confettiNumber:i,emojis:l,emojiSize:s,canvasWidth:c}),b=new ze({initialPosition:p,direction:"left",confettiRadius:o,confettiColors:a,confettiNumber:i,emojis:l,emojiSize:s,canvasWidth:c});g.addShapes(v,b)}return this.activeConfettiBatches.push(g),this.queueAnimationFrameIfNeeded(),g.getBatchCompletePromise()}},{key:"clearCanvas",value:function(){this.activeConfettiBatches=[]}},{key:"destroyCanvas",value:function(){this.canvas.remove()}}]),t}();hljs.highlightAll();const ro=new to;ro.addConfetti();
