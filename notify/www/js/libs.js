/*! jQuery v2.0.0b2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license

*/(function(e,t){function n(e){var t=e.length,n=ot.type(e);return ot.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}function r(e){var t=ht[e]={};return ot.each(e.match(at)||[],function(e,n){t[n]=!0}),t}function i(){this.cache={},this.expando=ot.expando+Math.random()}function o(e){gt.discard(e),mt.discard(e)}function s(e,n,r){var i;if(r===t&&1===e.nodeType)if(i="data-"+n.replace(vt,"-$1").toLowerCase(),r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:yt.test(r)?JSON.parse(r):r}catch(o){}gt.set(e,n,r)}else r=t;return r}function a(){return!0}function u(){return!1}function c(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}function l(e,t,n){t=t||0;var r;if(ot.isFunction(t))return ot.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return ot.grep(e,function(e){return e===t===n});if("string"==typeof t){if(r=ot.grep(e,function(e){return 1===e.nodeType}),qt.test(t))return ot.filter(t,r,!n);t=ot.filter(t,r)}return ot.grep(e,function(e){return tt.call(t,e)>=0===n})}function f(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function p(e){var t=e.getAttributeNode("type");return e.type=(t&&t.specified)+"/"+e.type,e}function d(e){var t=_t.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function h(e,t){for(var n=e.length,r=0;n>r;r++)mt.set(e[r],"globalEval",!t||mt.get(t[r],"globalEval"))}function g(e,t){var n,r,i,o,s,a,u,c;if(1===t.nodeType){if(mt.hasData(e)&&(o=mt.access(e),s=ot.extend({},o),c=o.events,mt.set(t,s),c)){delete s.handle,s.events={};for(i in c)for(n=0,r=c[i].length;r>n;n++)ot.event.add(t,i,c[i][n])}gt.hasData(e)&&(a=gt.access(e),u=ot.extend({},a),gt.set(t,u))}}function m(e,n){var r=e.getElementsByTagName?e.getElementsByTagName(n||"*"):e.querySelectorAll?e.querySelectorAll(n||"*"):[];return n===t||n&&ot.nodeName(e,n)?ot.merge([e],r):r}function y(e,t){var n=t.nodeName.toLowerCase();"input"===n&&Wt.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}function v(e,t){if(t in e)return t;for(var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=nn.length;i--;)if(t=nn[i]+n,t in e)return t;return r}function x(e,t){return e=t||e,"none"===ot.css(e,"display")||!ot.contains(e.ownerDocument,e)}function b(t){return e.getComputedStyle(t,null)}function w(e,t){for(var n,r,i,o=[],s=0,a=e.length;a>s;s++)r=e[s],r.style&&(o[s]=ot._data(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&x(r)&&(o[s]=ot._data(r,"olddisplay",k(r.nodeName)))):o[s]||(i=x(r),(n&&"none"!==n||!i)&&ot._data(r,"olddisplay",i?n:ot.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}function T(e,t,n){var r=Gt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function C(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;4>o;o+=2)"margin"===n&&(s+=ot.css(e,n+tn[o],!0,i)),r?("content"===n&&(s-=ot.css(e,"padding"+tn[o],!0,i)),"margin"!==n&&(s-=ot.css(e,"border"+tn[o]+"Width",!0,i))):(s+=ot.css(e,"padding"+tn[o],!0,i),"padding"!==n&&(s+=ot.css(e,"border"+tn[o]+"Width",!0,i)));return s}function N(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=b(e),s=ot.support.boxSizing&&"border-box"===ot.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Xt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Jt.test(i))return i;r=s&&(ot.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+C(e,t,n||(s?"border":"content"),r,o)+"px"}function k(e){var t=X,n=Kt[e];return n||(n=S(e,t),"none"!==n&&n||(Ut=(Ut||ot("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Ut[0].contentWindow||Ut[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=S(e,t),Ut.detach()),Kt[e]=n),n}function S(e,t){var n=ot(t.createElement(e)).appendTo(t.body),r=ot.css(n[0],"display");return n.remove(),r}function E(e,t,n,r){var i;if(ot.isArray(t))ot.each(t,function(t,i){n||on.test(e)?r(e,i):E(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==ot.type(t))r(e,t);else for(i in t)E(e+"["+i+"]",t[i],n,r)}function D(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(at)||[];if(ot.isFunction(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function j(e,n,r,i){function o(u){var c;return s[u]=!0,ot.each(e[u]||[],function(e,u){var l=u(n,r,i);return"string"!=typeof l||a||s[l]?a?!(c=l):t:(n.dataTypes.unshift(l),o(l),!1)}),c}var s={},a=e===Tn;return o(n.dataTypes[0])||!s["*"]&&o("*")}function A(e,n){var r,i,o=ot.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((o[r]?e:i||(i={}))[r]=n[r]);return i&&ot.extend(!0,e,i),e}function L(e,n,r){for(var i,o,s,a,u=e.contents,c=e.dataTypes;"*"===c[0];)c.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("Content-Type"));if(i)for(o in u)if(u[o]&&u[o].test(i)){c.unshift(o);break}if(c[0]in r)s=c[0];else{for(o in r){if(!c[0]||e.converters[o+" "+c[0]]){s=o;break}a||(a=o)}s=s||a}return s?(s!==c[0]&&c.unshift(s),r[s]):t}function q(e,t,n,r){var i,o,s,a,u,c={},l=e.dataTypes.slice();if(l[1])for(s in e.converters)c[s.toLowerCase()]=e.converters[s];for(o=l.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=l.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(s=c[u+" "+o]||c["* "+o],!s)for(i in c)if(a=i.split(" "),a[1]===o&&(s=c[u+" "+a[0]]||c["* "+a[0]])){s===!0?s=c[i]:c[i]!==!0&&(o=a[0],l.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(f){return{state:"parsererror",error:s?f:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}function H(){return setTimeout(function(){Ln=t}),Ln=ot.now()}function O(e,t){ot.each(t,function(t,n){for(var r=(Pn[t]||[]).concat(Pn["*"]),i=0,o=r.length;o>i;i++)if(r[i].call(e,t,n))return})}function F(e,t,n){var r,i,o=0,s=Mn.length,a=ot.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=Ln||H(),n=Math.max(0,c.startTime+c.duration-t),r=n/c.duration||0,o=1-r,s=0,u=c.tweens.length;u>s;s++)c.tweens[s].run(o);return a.notifyWith(e,[c,o,n]),1>o&&u?n:(a.resolveWith(e,[c]),!1)},c=a.promise({elem:e,props:ot.extend({},t),opts:ot.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Ln||H(),duration:n.duration,tweens:[],createTween:function(t,n){var r=ot.Tween(e,c.opts,t,n,c.opts.specialEasing[t]||c.opts.easing);return c.tweens.push(r),r},stop:function(t){var n=0,r=t?c.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)c.tweens[n].run(1);return t?a.resolveWith(e,[c,t]):a.rejectWith(e,[c,t]),this}}),l=c.props;for(M(l,c.opts.specialEasing);s>o;o++)if(r=Mn[o].call(c,e,l,c.opts))return r;return O(c,l),ot.isFunction(c.opts.start)&&c.opts.start.call(e,c),ot.fx.timer(ot.extend(u,{elem:e,anim:c,queue:c.opts.queue})),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always)}function M(e,t){var n,r,i,o,s;for(n in e)if(r=ot.camelCase(n),i=t[r],o=e[n],ot.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=ot.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function P(e,t,n){var r,i,o,s,a,u,c,l,f,p=this,d=e.style,h={},g=[],m=e.nodeType&&x(e);n.queue||(l=ot._queueHooks(e,"fx"),null==l.unqueued&&(l.unqueued=0,f=l.empty.fire,l.empty.fire=function(){l.unqueued||f()}),l.unqueued++,p.always(function(){p.always(function(){l.unqueued--,ot.queue(e,"fx").length||l.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],"inline"===ot.css(e,"display")&&"none"===ot.css(e,"float")&&(d.display="inline-block")),n.overflow&&(d.overflow="hidden",p.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(r in t)if(o=t[r],Hn.exec(o)){if(delete t[r],u=u||"toggle"===o,o===(m?"hide":"show"))continue;g.push(r)}if(s=g.length){a=ot._data(e,"fxshow")||ot._data(e,"fxshow",{}),"hidden"in a&&(m=a.hidden),u&&(a.hidden=!m),m?ot(e).show():p.done(function(){ot(e).hide()}),p.done(function(){var t;ot._removeData(e,"fxshow");for(t in h)ot.style(e,t,h[t])});for(r=0;s>r;r++)i=g[r],c=p.createTween(i,m?a[i]:0),h[i]=a[i]||ot.style(e,i),i in a||(a[i]=c.start,m&&(c.end=c.start,c.start="width"===i||"height"===i?1:0))}}function R(e,t,n,r,i){return new R.prototype.init(e,t,n,r,i)}function W(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=tn[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function B(e){return ot.isWindow(e)?e:9===e.nodeType&&e.defaultView}var $,_,I=typeof t,z=e.location,X=e.document,U=X.documentElement,Y=e.jQuery,V=e.$,G={},J=[],Q="2.0.0b2",K=J.concat,Z=J.push,et=J.slice,tt=J.indexOf,nt=G.toString,rt=G.hasOwnProperty,it=Q.trim,ot=function(e,t){return new ot.fn.init(e,t,$)},st=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,at=/\S+/g,ut=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,ct=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,lt=/^-ms-/,ft=/-([\da-z])/gi,pt=function(e,t){return t.toUpperCase()},dt=function(){X.removeEventListener("DOMContentLoaded",dt,!1),e.removeEventListener("load",dt,!1),ot.ready()};ot.fn=ot.prototype={jquery:Q,constructor:ot,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:ut.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof ot?n[0]:n,ot.merge(this,ot.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:X,!0)),ct.test(i[1])&&ot.isPlainObject(n))for(i in n)ot.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=X.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=X,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):ot.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),ot.makeArray(e,this))},selector:"",length:0,size:function(){return this.length},toArray:function(){return et.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=ot.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return ot.each(this,e,t)},ready:function(e){return ot.ready.promise().done(e),this},slice:function(){return this.pushStack(et.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(ot.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:Z,sort:[].sort,splice:[].splice},ot.fn.init.prototype=ot.fn,ot.extend=ot.fn.extend=function(){var e,n,r,i,o,s,a=arguments[0]||{},u=1,c=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[1]||{},u=2),"object"==typeof a||ot.isFunction(a)||(a={}),c===u&&(a=this,--u);c>u;u++)if(null!=(e=arguments[u]))for(n in e)r=a[n],i=e[n],a!==i&&(l&&i&&(ot.isPlainObject(i)||(o=ot.isArray(i)))?(o?(o=!1,s=r&&ot.isArray(r)?r:[]):s=r&&ot.isPlainObject(r)?r:{},a[n]=ot.extend(l,s,i)):i!==t&&(a[n]=i));return a},ot.extend({expando:"jQuery"+(Q+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===ot&&(e.$=V),t&&e.jQuery===ot&&(e.jQuery=Y),ot},isReady:!1,readyWait:1,holdReady:function(e){e?ot.readyWait++:ot.ready(!0)},ready:function(e){(e===!0?--ot.readyWait:ot.isReady)||(ot.isReady=!0,e!==!0&&--ot.readyWait>0||(_.resolveWith(X,[ot]),ot.fn.trigger&&ot(X).trigger("ready").off("ready")))},isFunction:function(e){return"function"===ot.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?G[nt.call(e)]||"object":typeof e},isPlainObject:function(e){if("object"!==ot.type(e)||e.nodeType||ot.isWindow(e))return!1;try{if(e.constructor&&!rt.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||X;var r=ct.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=ot.buildFragment([e],t,i),i&&ot(i).remove(),ot.merge([],r.childNodes))},parseJSON:JSON.parse,parseXML:function(e){var n,r;if(!e||"string"!=typeof e)return null;try{r=new DOMParser,n=r.parseFromString(e,"text/xml")}catch(i){n=t}return(!n||n.getElementsByTagName("parsererror").length)&&ot.error("Invalid XML: "+e),n},noop:function(){},globalEval:function(e){var t=eval;ot.trim(e)&&t(e+";")},camelCase:function(e){return e.replace(lt,"ms-").replace(ft,pt)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,r){var i,o=0,s=e.length,a=n(e);if(r){if(a)for(;s>o&&(i=t.apply(e[o],r),i!==!1);o++);else for(o in e)if(i=t.apply(e[o],r),i===!1)break}else if(a)for(;s>o&&(i=t.call(e[o],o,e[o]),i!==!1);o++);else for(o in e)if(i=t.call(e[o],o,e[o]),i===!1)break;return e},trim:function(e){return null==e?"":it.call(e)},makeArray:function(e,t){var r=t||[];return null!=e&&(n(Object(e))?ot.merge(r,"string"==typeof e?[e]:e):Z.call(r,e)),r},inArray:function(e,t,n){return null==t?-1:tt.call(t,e,n)},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else for(;n[o]!==t;)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,s=e.length;for(n=!!n;s>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,r){var i,o=0,s=e.length,a=n(e),u=[];if(a)for(;s>o;o++)i=t(e[o],o,r),null!=i&&(u[u.length]=i);else for(o in e)i=t(e[o],o,r),null!=i&&(u[u.length]=i);return K.apply([],u)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(r=e[n],n=e,e=r),ot.isFunction(e)?(i=et.call(arguments,2),o=function(){return e.apply(n||this,i.concat(et.call(arguments)))},o.guid=e.guid=e.guid||ot.guid++,o):t},access:function(e,n,r,i,o,s,a){var u=0,c=e.length,l=null==r;if("object"===ot.type(r)){o=!0;for(u in r)ot.access(e,n,u,r[u],!0,s,a)}else if(i!==t&&(o=!0,ot.isFunction(i)||(a=!0),l&&(a?(n.call(e,i),n=null):(l=n,n=function(e,t,n){return l.call(ot(e),n)})),n))for(;c>u;u++)n(e[u],r,a?i:i.call(e[u],u,n(e[u],r)));return o?e:l?n.call(e):c?n(e[0],r):s},now:Date.now}),ot.ready.promise=function(t){return _||(_=ot.Deferred(),"complete"===X.readyState?setTimeout(ot.ready):(X.addEventListener("DOMContentLoaded",dt,!1),e.addEventListener("load",dt,!1))),_.promise(t)},ot.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){G["[object "+t+"]"]=t.toLowerCase()}),$=ot(X);var ht={};ot.Callbacks=function(e){e="string"==typeof e?ht[e]||r(e):ot.extend({},e);var n,i,o,s,a,u,c=[],l=!e.once&&[],f=function(t){for(n=e.memory&&t,i=!0,u=s||0,s=0,a=c.length,o=!0;c&&a>u;u++)if(c[u].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}o=!1,c&&(l?l.length&&f(l.shift()):n?c=[]:p.disable())},p={add:function(){if(c){var t=c.length;(function r(t){ot.each(t,function(t,n){var i=ot.type(n);"function"===i?e.unique&&p.has(n)||c.push(n):n&&n.length&&"string"!==i&&r(n)})})(arguments),o?a=c.length:n&&(s=t,f(n))}return this},remove:function(){return c&&ot.each(arguments,function(e,t){for(var n;(n=ot.inArray(t,c,n))>-1;)c.splice(n,1),o&&(a>=n&&a--,u>=n&&u--)}),this},has:function(e){return e?ot.inArray(e,c)>-1:!(!c||!c.length)},empty:function(){return c=[],a=0,this},disable:function(){return c=l=n=t,this},disabled:function(){return!c},lock:function(){return l=t,n||p.disable(),this},locked:function(){return!l},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],!c||i&&!l||(o?l.push(t):f(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},ot.extend({Deferred:function(e){var t=[["resolve","done",ot.Callbacks("once memory"),"resolved"],["reject","fail",ot.Callbacks("once memory"),"rejected"],["notify","progress",ot.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return ot.Deferred(function(n){ot.each(t,function(t,o){var s=o[0],a=ot.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&ot.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?ot.extend(e,r):r}},i={};return r.pipe=r.then,ot.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,r,i=0,o=et.call(arguments),s=o.length,a=1!==s||e&&ot.isFunction(e.promise)?s:0,u=1===a?e:ot.Deferred(),c=function(e,n,r){return function(i){n[e]=this,r[e]=arguments.length>1?et.call(arguments):i,r===t?u.notifyWith(n,r):--a||u.resolveWith(n,r)}};if(s>1)for(t=Array(s),n=Array(s),r=Array(s);s>i;i++)o[i]&&ot.isFunction(o[i].promise)?o[i].promise().done(c(i,r,o)).fail(u.reject).progress(c(i,n,t)):--a;return a||u.resolveWith(r,o),u.promise()}}),ot.support=function(t){var n=X.createElement("input"),r=X.createDocumentFragment(),i=X.createElement("div"),o=X.createElement("select"),s=o.appendChild(X.createElement("option"));return n.type?(n.type="checkbox",t.checkOn=""===n.value,t.optSelected=s.selected,t.boxModel="CSS1Compat"===X.compatMode,t.reliableMarginRight=!0,t.boxSizingReliable=!0,t.pixelPosition=!1,n.checked=!0,t.noCloneChecked=n.cloneNode(!0).checked,o.disabled=!0,t.optDisabled=!s.disabled,n=X.createElement("input"),n.value="t",n.type="radio",t.radioValue="t"===n.value,n.setAttribute("checked","t"),n.setAttribute("name","t"),r.appendChild(n),t.checkClone=r.cloneNode(!0).cloneNode(!0).lastChild.checked,t.focusinBubbles="onfocusin"in e,i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===i.style.backgroundClip,ot(function(){var n,r,o="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",s=X.getElementsByTagName("body")[0];s&&(n=X.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",s.appendChild(n).appendChild(i),i.innerHTML="",i.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=4===i.offsetWidth,t.doesNotIncludeMarginInBodyOffset=1!==s.offsetTop,e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(i,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(i,null)||{width:"4px"}).width,r=i.appendChild(X.createElement("div")),r.style.cssText=i.style.cssText=o,r.style.marginRight=r.style.width="0",i.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),s.removeChild(n))}),t):t}({});var gt,mt,yt=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,vt=/([A-Z])/g;i.uid=1,i.prototype={key:function(e){var t={},n=e[this.expando];if(!n){n=i.uid++,t[this.expando]={value:n};try{Object.defineProperties(e,t)}catch(r){t[this.expando]=n,ot.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(ot.isEmptyObject(o))this.cache[i]=t;else for(r in t)o[r]=t[r];return this},get:function(e,n){var r=this.cache[this.key(e)];return n===t?r:r[n]},access:function(e,n,r){return n===t||n&&"string"==typeof n&&r===t?this.get(e,n):(this.set(e,n,r),r!==t?r:n)},remove:function(e,n){var r,i,o=this.key(e),s=this.cache[o];if(n===t)this.cache[o]={};else{ot.isArray(n)?i=n.concat(n.map(ot.camelCase)):n in s?i=[n]:(i=ot.camelCase(n),i=i in s?[i]:i.match(at)||[]),r=i.length;for(;r--;)delete s[i[r]]}},hasData:function(e){return!ot.isEmptyObject(this.cache[this.key(e)])},discard:function(e){delete this.cache[this.key(e)]}},gt=new i,mt=new i,ot.extend({acceptData:function(){return!0},hasData:function(e){return gt.hasData(e)||mt.hasData(e)},data:function(e,t,n){return gt.access(e,t,n)},removeData:function(e,t){return gt.remove(e,t)},_data:function(e,t,n){return mt.access(e,t,n)},_removeData:function(e,t){return mt.remove(e,t)}}),ot.fn.extend({data:function(e,n){var r,i,o=this[0],a=0,u=null;if(e===t){if(this.length&&(u=gt.get(o),1===o.nodeType&&!mt.get(o,"hasDataAttrs"))){for(r=o.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=ot.camelCase(i.substring(5)),s(o,i,u[i]));mt.set(o,"hasDataAttrs",!0)}return u}return"object"==typeof e?this.each(function(){gt.set(this,e)}):ot.access(this,function(n){var r,i=ot.camelCase(e);return n===t?(r=gt.get(o,e),r!==t?r:(r=s(o,e,t),r!==t?r:(r=gt.get(o,i),r!==t?r:t))):(this.each(function(){var r=gt.get(this,i);gt.set(this,i,n),/-/.test(e)&&r!==t&&gt.set(this,e,n)}),t)},null,n,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){gt.remove(this,e)})}}),ot.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=ot._data(e,n),r&&(!i||ot.isArray(r)?i=ot._data(e,n,ot.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=ot.queue(e,t),r=n.length,i=n.shift(),o=ot._queueHooks(e,t),s=function(){ot.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),o.cur=i,i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return ot._data(e,n)||ot._data(e,n,{empty:ot.Callbacks("once memory").add(function(){ot._removeData(e,t+"queue"),ot._removeData(e,n)})})}}),ot.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?ot.queue(this[0],e):n===t?this:this.each(function(){var t=ot.queue(this,e,n);ot._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&ot.dequeue(this,e)})},dequeue:function(e){return this.each(function(){ot.dequeue(this,e)})},delay:function(e,t){return e=ot.fx?ot.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=ot.Deferred(),s=this,a=this.length,u=function(){--i||o.resolveWith(s,[s])};for("string"!=typeof e&&(n=e,e=t),e=e||"fx";a--;)r=ot._data(s[a],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(u));return u(),o.promise(n)}});var xt,bt,wt=/[\t\r\n]/g,Tt=/\r/g,Ct=/^(?:input|select|textarea|button|object)$/i,Nt=/^(?:a|area)$/i,kt=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i;ot.fn.extend({attr:function(e,t){return ot.access(this,ot.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){ot.removeAttr(this,e)})},prop:function(e,t){return ot.access(this,ot.prop,e,t,arguments.length>1)},removeProp:function(e){return e=ot.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,s=0,a=this.length,u="string"==typeof e&&e;if(ot.isFunction(e))return this.each(function(t){ot(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(at)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(wt," "):" ")){for(o=0;i=t[o++];)0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=ot.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,s=0,a=this.length,u=0===arguments.length||"string"==typeof e&&e;if(ot.isFunction(e))return this.each(function(t){ot(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(at)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(wt," "):"")){for(o=0;i=t[o++];)for(;r.indexOf(" "+i+" ")>=0;)r=r.replace(" "+i+" "," ");n.className=e?ot.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e,r="boolean"==typeof t;return ot.isFunction(e)?this.each(function(n){ot(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n)for(var i,o=0,s=ot(this),a=t,u=e.match(at)||[];i=u[o++];)a=r?a:!s.hasClass(i),s[a?"addClass":"removeClass"](i);else(n===I||"boolean"===n)&&(this.className&&ot._data(this,"__className__",this.className),this.className=this.className||e===!1?"":ot._data(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,r=this.length;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(wt," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=ot.isFunction(e),this.each(function(r){var o,s=ot(this);1===this.nodeType&&(o=i?e.call(this,r,s.val()):e,null==o?o="":"number"==typeof o?o+="":ot.isArray(o)&&(o=ot.map(o,function(e){return null==e?"":e+""})),n=ot.valHooks[this.type]||ot.valHooks[this.nodeName.toLowerCase()],n&&"set"in n&&n.set(this,o,"value")!==t||(this.value=o))});if(o)return n=ot.valHooks[o.type]||ot.valHooks[o.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(o,"value"))!==t?r:(r=o.value,"string"==typeof r?r.replace(Tt,""):null==r?"":r)}}}),ot.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;a>u;u++)if(n=r[u],!(!n.selected&&u!==i||(ot.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&ot.nodeName(n.parentNode,"optgroup"))){if(t=ot(n).val(),o)return t;s.push(t)}return s},set:function(e,t){var n=ot.makeArray(t);return ot(e).find("option").each(function(){this.selected=ot.inArray(ot(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attr:function(e,n,r){var i,o,s,a=e.nodeType;if(e&&3!==a&&8!==a&&2!==a)return typeof e.getAttribute===I?ot.prop(e,n,r):(s=1!==a||!ot.isXMLDoc(e),s&&(n=n.toLowerCase(),o=ot.attrHooks[n]||(kt.test(n)?bt:xt)),r===t?o&&s&&"get"in o&&null!==(i=o.get(e,n))?i:(typeof e.getAttribute!==I&&(i=e.getAttribute(n)),null==i?t:i):null!==r?o&&s&&"set"in o&&(i=o.set(e,r,n))!==t?i:(e.setAttribute(n,r+""),r):(ot.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(at);if(o&&1===e.nodeType)for(;n=o[i++];)r=ot.propFix[n]||n,kt.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!ot.support.radioValue&&"radio"===t&&ot.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,o,s,a=e.nodeType;if(e&&3!==a&&8!==a&&2!==a)return s=1!==a||!ot.isXMLDoc(e),s&&(n=ot.propFix[n]||n,o=ot.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):Ct.test(e.nodeName)||Nt.test(e.nodeName)&&e.href?0:t}}}}),bt={get:function(e,n){return null!==e.getAttribute(n)?n.toLowerCase():t},set:function(e,t,n){return t===!1?ot.removeAttr(e,n):e.setAttribute(n,n),n}},ot.support.checkOn||ot.each(["radio","checkbox"],function(){ot.valHooks[this]={get:function(e){return null===e.getAttribute("value")?"on":e.value}}}),ot.each(["radio","checkbox"],function(){ot.valHooks[this]=ot.extend(ot.valHooks[this],{set:function(e,n){return ot.isArray(n)?e.checked=ot.inArray(ot(e).val(),n)>=0:t}})}),ot.support.optSelected||(ot.propHooks.selected=ot.extend(ot.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}));var St=/^key/,Et=/^(?:mouse|contextmenu)|click/,Dt=/^(?:focusinfocus|focusoutblur)$/,jt=/^([^.]*)(?:\.(.+)|)$/;ot.event={global:{},add:function(e,n,r,i,o){var s,a,u,c,l,f,p,d,h,g,m,y=mt.get(e);if(y){for(r.handler&&(s=r,r=s.handler,o=s.selector),r.guid||(r.guid=ot.guid++),(c=y.events)||(c=y.events={}),(a=y.handle)||(a=y.handle=function(e){return typeof ot===I||e&&ot.event.triggered===e.type?t:ot.event.dispatch.apply(a.elem,arguments)},a.elem=e),n=(n||"").match(at)||[""],l=n.length;l--;)u=jt.exec(n[l])||[],h=m=u[1],g=(u[2]||"").split(".").sort(),h&&(p=ot.event.special[h]||{},h=(o?p.delegateType:p.bindType)||h,p=ot.event.special[h]||{},f=ot.extend({type:h,origType:m,data:i,handler:r,guid:r.guid,selector:o,needsContext:o&&ot.expr.match.needsContext.test(o),namespace:g.join(".")},s),(d=c[h])||(d=c[h]=[],d.delegateCount=0,p.setup&&p.setup.call(e,i,g,a)!==!1||e.addEventListener&&e.addEventListener(h,a,!1)),p.add&&(p.add.call(e,f),f.handler.guid||(f.handler.guid=r.guid)),o?d.splice(d.delegateCount++,0,f):d.push(f),ot.event.global[h]=!0);e=null}},remove:function(e,t,n,r,i){var o,s,a,u,c,l,f,p,d,h,g,m=mt.hasData(e)&&mt.get(e);if(m&&(u=m.events)){for(t=(t||"").match(at)||[""],c=t.length;c--;)if(a=jt.exec(t[c])||[],d=g=a[1],h=(a[2]||"").split(".").sort(),d){for(f=ot.event.special[d]||{},d=(r?f.delegateType:f.bindType)||d,p=u[d]||[],a=a[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=p.length;o--;)l=p[o],!i&&g!==l.origType||n&&n.guid!==l.guid||a&&!a.test(l.namespace)||r&&r!==l.selector&&("**"!==r||!l.selector)||(p.splice(o,1),l.selector&&p.delegateCount--,f.remove&&f.remove.call(e,l));s&&!p.length&&(f.teardown&&f.teardown.call(e,h,m.handle)!==!1||ot.removeEvent(e,d,m.handle),delete u[d])}else for(d in u)ot.event.remove(e,d+t[c],n,r,!0);ot.isEmptyObject(u)&&(delete m.handle,ot._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,a,u,c,l,f,p,d=[i||X],h=rt.call(n,"type")?n.type:n,g=rt.call(n,"namespace")?n.namespace.split("."):[];if(a=u=i=i||X,3!==i.nodeType&&8!==i.nodeType&&!Dt.test(h+ot.event.triggered)&&(h.indexOf(".")>=0&&(g=h.split("."),h=g.shift(),g.sort()),l=0>h.indexOf(":")&&"on"+h,n=n[ot.expando]?n:new ot.Event(h,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=g.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:ot.makeArray(r,[n]),p=ot.event.special[h]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!ot.isWindow(i)){for(c=p.delegateType||h,Dt.test(c+h)||(a=a.parentNode);a;a=a.parentNode)d.push(a),u=a;u===(i.ownerDocument||X)&&d.push(u.defaultView||u.parentWindow||e)}for(s=0;(a=d[s++])&&!n.isPropagationStopped();)n.type=s>1?c:p.bindType||h,f=(ot._data(a,"events")||{})[n.type]&&ot._data(a,"handle"),f&&f.apply(a,r),f=l&&a[l],f&&ot.acceptData(a)&&f.apply&&f.apply(a,r)===!1&&n.preventDefault();return n.type=h,o||n.isDefaultPrevented()||p._default&&p._default.apply(i.ownerDocument,r)!==!1||"click"===h&&ot.nodeName(i,"a")||!ot.acceptData(i)||l&&ot.isFunction(i[h])&&!ot.isWindow(i)&&(u=i[l],u&&(i[l]=null),ot.event.triggered=h,i[h](),ot.event.triggered=t,u&&(i[l]=u)),n.result}},dispatch:function(e){e=ot.event.fix(e);var n,r,i,o,s,a=[],u=et.call(arguments),c=(ot._data(this,"events")||{})[e.type]||[],l=ot.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){for(a=ot.event.handlers.call(this,e,c),n=0;(o=a[n++])&&!e.isPropagationStopped();)for(e.currentTarget=o.elem,r=0;(s=o.handlers[r++])&&!e.isImmediatePropagationStopped();)(!e.namespace_re||e.namespace_re.test(s.namespace))&&(e.handleObj=s,e.data=s.data,i=((ot.event.special[s.origType]||{}).handle||s.handler).apply(o.elem,u),i!==t&&(e.result=i)===!1&&(e.preventDefault(),e.stopPropagation()));return l.postDispatch&&l.postDispatch.call(this,e),e.result
}},handlers:function(e,n){var r,i,o,s,a=[],u=n.delegateCount,c=e.target;if(u&&c.nodeType&&(!e.button||"click"!==e.type))for(;c!=this;c=c.parentNode||this)if(c.disabled!==!0||"click"!==e.type){for(i=[],r=0;u>r;r++)s=n[r],o=s.selector+" ",i[o]===t&&(i[o]=s.needsContext?ot(o,this).index(c)>=0:ot.find(o,this,null,[c]).length),i[o]&&i.push(s);i.length&&a.push({elem:c,handlers:i})}return n.length>u&&a.push({elem:this,handlers:n.slice(u)}),a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button;return null==e.pageX&&null!=n.clientX&&(r=e.target.ownerDocument||X,i=r.documentElement,o=r.body,e.pageX=n.clientX+(i&&i.scrollLeft||o&&o.scrollLeft||0)-(i&&i.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(i&&i.scrollTop||o&&o.scrollTop||0)-(i&&i.clientTop||o&&o.clientTop||0)),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},fix:function(e){if(e[ot.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];for(s||(this.fixHooks[i]=s=Et.test(i)?this.mouseHooks:St.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new ot.Event(o),t=r.length;t--;)n=r[t],e[n]=o[n];return 3===e.target.nodeType&&(e.target=e.target.parentNode),s.filter?s.filter(e,o):e},special:{load:{noBubble:!0},click:{trigger:function(){return"checkbox"===this.type&&this.click&&ot.nodeName(this,"input")?(this.click(),!1):t}},focus:{trigger:function(){return this!==X.activeElement&&this.focus?(this.focus(),!1):t},delegateType:"focusin"},blur:{trigger:function(){return this===X.activeElement&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=ot.extend(new ot.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?ot.event.trigger(i,null,t):ot.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},ot.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},ot.Event=function(e,n){return this instanceof ot.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&&e.getPreventDefault()?a:u):this.type=e,n&&ot.extend(this,n),this.timeStamp=e&&e.timeStamp||ot.now(),this[ot.expando]=!0,t):new ot.Event(e,n)},ot.Event.prototype={isDefaultPrevented:u,isPropagationStopped:u,isImmediatePropagationStopped:u,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=a,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=a,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=a,this.stopPropagation()}},ot.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){ot.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!ot.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),ot.support.focusinBubbles||ot.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){ot.event.simulate(t,e.target,ot.event.fix(e),!0)};ot.event.special[t]={setup:function(){0===n++&&X.addEventListener(e,r,!0)},teardown:function(){0===--n&&X.removeEventListener(e,r,!0)}}}),ot.fn.extend({on:function(e,n,r,i,o){var s,a;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=u;else if(!i)return this;return 1===o&&(s=i,i=function(e){return ot().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=ot.guid++)),this.each(function(){ot.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,ot(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=u),this.each(function(){ot.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){ot.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?ot.event.trigger(e,n,r,!0):t}}),function(e,t){function n(e){return yt.test(e+"")}function r(){var e,t=[];return e=function(n,r){return t.push(n+=" ")>N.cacheLength&&delete e[t.shift()],e[n]=r}}function i(e){return e[W]=!0,e}function o(e){var t=q.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t=null}}function s(e,t,n,r){var i,o,s,a,u,c,l,d,h,g;if((t?t.ownerDocument||t:B)!==q&&L(t),t=t||q,n=n||[],!e||"string"!=typeof e)return n;if(1!==(a=t.nodeType)&&9!==a)return[];if(!O&&!r){if(i=vt.exec(e))if(s=i[1]){if(9===a){if(o=t.getElementById(s),!o||!o.parentNode)return n;if(o.id===s)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(s))&&R(t,o)&&o.id===s)return n.push(o),n}else{if(i[2])return et.apply(n,t.getElementsByTagName(e)),n;if((s=i[3])&&$.getByClassName&&t.getElementsByClassName)return et.apply(n,t.getElementsByClassName(s)),n}if($.qsa&&!F.test(e)){if(l=!0,d=W,h=t,g=9===a&&e,1===a&&"object"!==t.nodeName.toLowerCase()){for(c=f(e),(l=t.getAttribute("id"))?d=l.replace(wt,"\\$&"):t.setAttribute("id",d),d="[id='"+d+"'] ",u=c.length;u--;)c[u]=d+p(c[u]);h=mt.test(e)&&t.parentNode||t,g=c.join(",")}if(g)try{return et.apply(n,h.querySelectorAll(g)),n}catch(m){}finally{l||t.removeAttribute("id")}}}return b(e.replace(lt,"$1"),t,n,r)}function a(e,t){var n=t&&e,r=n&&(~t.sourceIndex||J)-(~e.sourceIndex||J);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function u(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function c(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function l(e){return i(function(t){return t=+t,i(function(n,r){for(var i,o=e([],n.length,t),s=o.length;s--;)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}function f(e,t){var n,r,i,o,a,u,c,l=X[e+" "];if(l)return t?0:l.slice(0);for(a=e,u=[],c=N.preFilter;a;){(!n||(r=ft.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),u.push(i=[])),n=!1,(r=pt.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(lt," ")}),a=a.slice(n.length));for(o in N.filter)!(r=gt[o].exec(a))||c[o]&&!(r=c[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?s.error(e):X(e,u).slice(0)}function p(e){for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value;return r}function d(e,t,n){var r=t.dir,i=n&&"parentNode"===r,o=I++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,s){var a,u,c,l=_+" "+o;if(s){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,s))return!0}else for(;t=t[r];)if(1===t.nodeType||i)if(c=t[W]||(t[W]={}),(u=c[r])&&u[0]===l){if((a=u[1])===!0||a===C)return a===!0}else if(u=c[r]=[l],u[1]=e(t,n,s)||C,u[1]===!0)return!0}}function h(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function g(e,t,n,r,i){for(var o,s=[],a=0,u=e.length,c=null!=t;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),c&&t.push(a));return s}function m(e,t,n,r,o,s){return r&&!r[W]&&(r=m(r)),o&&!o[W]&&(o=m(o,s)),i(function(i,s,a,u){var c,l,f,p=[],d=[],h=s.length,m=i||x(t||"*",a.nodeType?[a]:a,[]),y=!e||!i&&t?m:g(m,p,e,a,u),v=n?o||(i?e:h||r)?[]:s:y;if(n&&n(y,v,a,u),r)for(c=g(v,d),r(c,[],a,u),l=c.length;l--;)(f=c[l])&&(v[d[l]]=!(y[d[l]]=f));if(i){if(o||e){if(o){for(c=[],l=v.length;l--;)(f=v[l])&&c.push(y[l]=f);o(null,v=[],c,u)}for(l=v.length;l--;)(f=v[l])&&(c=o?nt.call(i,f):p[l])>-1&&(i[c]=!(s[c]=f))}}else v=g(v===s?v.splice(h,v.length):v),o?o(null,s,v,u):et.apply(s,v)})}function y(e){for(var t,n,r,i=e.length,o=N.relative[e[0].type],s=o||N.relative[" "],a=o?1:0,u=d(function(e){return e===t},s,!0),c=d(function(e){return nt.call(t,e)>-1},s,!0),l=[function(e,n,r){return!o&&(r||n!==D)||((t=n).nodeType?u(e,n,r):c(e,n,r))}];i>a;a++)if(n=N.relative[e[a].type])l=[d(h(l),n)];else{if(n=N.filter[e[a].type].apply(null,e[a].matches),n[W]){for(r=++a;i>r&&!N.relative[e[r].type];r++);return m(a>1&&h(l),a>1&&p(e.slice(0,a-1)).replace(lt,"$1"),n,r>a&&y(e.slice(a,r)),i>r&&y(e=e.slice(r)),i>r&&p(e))}l.push(n)}return h(l)}function v(e,t){var n=0,r=t.length>0,o=e.length>0,a=function(i,a,u,c,l){var f,p,d,h=[],m=0,y="0",v=i&&[],x=null!=l,b=D,w=i||o&&N.find.TAG("*",l&&a.parentNode||a),T=_+=null==b?1:Math.random()||.1;for(x&&(D=a!==q&&a,C=n);null!=(f=w[y]);y++){if(o&&f){for(p=0;d=e[p++];)if(d(f,a,u)){c.push(f);break}x&&(_=T,C=++n)}r&&((f=!d&&f)&&m--,i&&v.push(f))}if(m+=y,r&&y!==m){for(p=0;d=t[p++];)d(v,h,a,u);if(i){if(m>0)for(;y--;)v[y]||h[y]||(h[y]=K.call(c));h=g(h)}et.apply(c,h),x&&!i&&h.length>0&&m+t.length>1&&s.uniqueSort(c)}return x&&(_=T,D=b),v};return r?i(a):a}function x(e,t,n){for(var r=0,i=t.length;i>r;r++)s(e,t[r],n);return n}function b(e,t,n,r){var i,o,s,a,u,c=f(e);if(!r&&1===c.length){if(o=c[0]=c[0].slice(0),o.length>2&&"ID"===(s=o[0]).type&&9===t.nodeType&&!O&&N.relative[o[1].type]){if(t=(N.find.ID(s.matches[0].replace(Ct,Nt),t)||[])[0],!t)return n;e=e.slice(o.shift().value.length)}for(i=gt.needsContext.test(e)?0:o.length;i--&&(s=o[i],!N.relative[a=s.type]);)if((u=N.find[a])&&(r=u(s.matches[0].replace(Ct,Nt),mt.test(o[0].type)&&t.parentNode||t))){if(o.splice(i,1),e=r.length&&p(o),!e)return et.apply(n,r),n;break}}return E(e,c)(r,t,O,n,mt.test(e)),n}function w(){}var T,C,N,k,S,E,D,j,A,L,q,H,O,F,M,P,R,W="sizzle"+-new Date,B=e.document,$={},_=0,I=0,z=r(),X=r(),U=r(),Y=!1,V=function(){return 0},G=typeof t,J=1<<31,Q=[],K=Q.pop,Z=Q.push,et=Q.push,tt=Q.slice,nt=Q.indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(this[t]===e)return t;return-1},rt="[\\x20\\t\\r\\n\\f]",it="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",st=it.replace("w","w#"),at="([*^$|!~]?=)",ut="\\["+rt+"*("+it+")"+rt+"*(?:"+at+rt+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+st+")|)|)"+rt+"*\\]",ct=":("+it+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+ut.replace(3,8)+")*)|.*)\\)|)",lt=RegExp("^"+rt+"+|((?:^|[^\\\\])(?:\\\\.)*)"+rt+"+$","g"),ft=RegExp("^"+rt+"*,"+rt+"*"),pt=RegExp("^"+rt+"*([\\x20\\t\\r\\n\\f>+~])"+rt+"*"),dt=RegExp(ct),ht=RegExp("^"+st+"$"),gt={ID:RegExp("^#("+it+")"),CLASS:RegExp("^\\.("+it+")"),NAME:RegExp("^\\[name=['\"]?("+it+")['\"]?\\]"),TAG:RegExp("^("+it.replace("w","w*")+")"),ATTR:RegExp("^"+ut),PSEUDO:RegExp("^"+ct),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+rt+"*(even|odd|(([+-]|)(\\d*)n|)"+rt+"*(?:([+-]|)"+rt+"*(\\d+)|))"+rt+"*\\)|)","i"),needsContext:RegExp("^"+rt+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+rt+"*((?:-\\d)?\\d*)"+rt+"*\\)|)(?=[^-]|$)","i")},mt=/[\x20\t\r\n\f]*[+~]/,yt=/^[^{]+\{\s*\[native code/,vt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,xt=/^(?:input|select|textarea|button)$/i,bt=/^h\d$/i,wt=/'|\\/g,Tt=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,Ct=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,Nt=function(e,t){var n="0x"+t-65536;return n!==n?t:0>n?String.fromCharCode(n+65536):String.fromCharCode(55296|n>>10,56320|1023&n)};try{et.apply(Q=tt.call(B.childNodes),B.childNodes),Q[B.childNodes.length].nodeType}catch(kt){et={apply:Q.length?function(e,t){Z.apply(e,tt.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}S=s.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},L=s.setDocument=function(e){var r=e?e.ownerDocument||e:B;return r!==q&&9===r.nodeType&&r.documentElement?(q=r,H=r.documentElement,O=S(r),$.tagNameNoComments=o(function(e){return e.appendChild(r.createComment("")),!e.getElementsByTagName("*").length}),$.attributes=o(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return"boolean"!==t&&"string"!==t}),$.getByClassName=o(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",e.getElementsByClassName&&e.getElementsByClassName("e").length?(e.lastChild.className="e",2===e.getElementsByClassName("e").length):!1}),$.getByName=o(function(e){e.id=W+0,e.appendChild(q.createElement("a")).setAttribute("name",W),e.appendChild(q.createElement("i")).setAttribute("name",W),H.appendChild(e);var t=r.getElementsByName&&r.getElementsByName(W).length===2+r.getElementsByName(W+0).length;return H.removeChild(e),t}),$.sortDetached=o(function(e){return e.compareDocumentPosition&&1&e.compareDocumentPosition(q.createElement("div"))}),N.attrHandle=o(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==G&&"#"===e.firstChild.getAttribute("href")})?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},$.getByName?(N.find.ID=function(e,t){if(typeof t.getElementById!==G&&!O){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},N.filter.ID=function(e){var t=e.replace(Ct,Nt);return function(e){return e.getAttribute("id")===t}}):(N.find.ID=function(e,n){if(typeof n.getElementById!==G&&!O){var r=n.getElementById(e);return r?r.id===e||typeof r.getAttributeNode!==G&&r.getAttributeNode("id").value===e?[r]:t:[]}},N.filter.ID=function(e){var t=e.replace(Ct,Nt);return function(e){var n=typeof e.getAttributeNode!==G&&e.getAttributeNode("id");return n&&n.value===t}}),N.find.TAG=$.tagNameNoComments?function(e,n){return typeof n.getElementsByTagName!==G?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},N.find.NAME=$.getByName&&function(e,n){return typeof n.getElementsByName!==G?n.getElementsByName(name):t},N.find.CLASS=$.getByClassName&&function(e,n){return typeof n.getElementsByClassName===G||O?t:n.getElementsByClassName(e)},M=[],F=[":focus"],($.qsa=n(r.querySelectorAll))&&(o(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||F.push("\\["+rt+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||F.push(":checked")}),o(function(e){e.innerHTML="<input type='hidden' i=''/>",e.querySelectorAll("[i^='']").length&&F.push("[*^$]="+rt+"*(?:\"\"|'')"),e.querySelectorAll(":enabled").length||F.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),F.push(",.*:")})),($.matchesSelector=n(P=H.matchesSelector||H.mozMatchesSelector||H.webkitMatchesSelector||H.oMatchesSelector||H.msMatchesSelector))&&o(function(e){$.disconnectedMatch=P.call(e,"div"),P.call(e,"[s!='']:x"),M.push("!=",ct)}),F=RegExp(F.join("|")),M=M.length&&RegExp(M.join("|")),R=n(H.contains)||H.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},V=H.compareDocumentPosition?function(e,t){if(e===t)return Y=!0,0;var n=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return n?1&n||j&&t.compareDocumentPosition(e)===n?e===r||R(B,e)?-1:t===r||R(B,t)?1:A?nt.call(A,e)-nt.call(A,t):0:4&n?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var n,i=0,o=e.parentNode,s=t.parentNode,u=[e],c=[t];if(e===t)return Y=!0,0;if(!o||!s)return e===r?-1:t===r?1:o?-1:s?1:0;if(o===s)return a(e,t);for(n=e;n=n.parentNode;)u.unshift(n);for(n=t;n=n.parentNode;)c.unshift(n);for(;u[i]===c[i];)i++;return i?a(u[i],c[i]):u[i]===B?-1:c[i]===B?1:0},q):q},s.matches=function(e,t){return s(e,null,null,t)},s.matchesSelector=function(e,t){if((e.ownerDocument||e)!==q&&L(e),t=t.replace(Tt,"='$1']"),!(!$.matchesSelector||O||M&&M.test(t)||F.test(t)))try{var n=P.call(e,t);if(n||$.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(r){}return s(t,q,null,[e]).length>0},s.contains=function(e,t){return(e.ownerDocument||e)!==q&&L(e),R(e,t)},s.attr=function(e,t){var n;return(e.ownerDocument||e)!==q&&L(e),O||(t=t.toLowerCase()),(n=N.attrHandle[t])?n(e):O||$.attributes?e.getAttribute(t):((n=e.getAttributeNode(t))||e.getAttribute(t))&&e[t]===!0?t:n&&n.specified?n.value:null},s.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},s.uniqueSort=function(e){var t,n=[],r=0,i=0;if(Y=!$.detectDuplicates,j=!$.sortDetached,A=!$.sortStable&&e.slice(0),e.sort(V),Y){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}return e},k=s.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=k(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=k(t);return n},N=s.selectors={cacheLength:50,createPseudo:i,match:gt,find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Ct,Nt),e[3]=(e[4]||e[5]||"").replace(Ct,Nt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||s.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&s.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return gt.CHILD.test(e[0])?null:(e[4]?e[2]=e[4]:n&&dt.test(n)&&(t=f(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){return"*"===e?function(){return!0}:(e=e.replace(Ct,Nt).toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=z[e+" "];return t||(t=RegExp("(^|"+rt+")"+e+"("+rt+"|$)"))&&z(e,function(e){return t.test(e.className||typeof e.getAttribute!==G&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=s.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var c,l,f,p,d,h,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,y=a&&t.nodeName.toLowerCase(),v=!u&&!a;if(m){if(o){for(;g;){for(f=t;f=f[g];)if(a?f.nodeName.toLowerCase()===y:1===f.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[s?m.firstChild:m.lastChild],s&&v){for(l=m[W]||(m[W]={}),c=l[e]||[],d=c[0]===_&&c[1],p=c[0]===_&&c[2],f=d&&m.childNodes[d];f=++d&&f&&f[g]||(p=d=0)||h.pop();)if(1===f.nodeType&&++p&&f===t){l[e]=[_,d,p];break}}else if(v&&(c=(t[W]||(t[W]={}))[e])&&c[0]===_)p=c[1];else for(;(f=++d&&f&&f[g]||(p=d=0)||h.pop())&&((a?f.nodeName.toLowerCase()!==y:1!==f.nodeType)||!++p||(v&&((f[W]||(f[W]={}))[e]=[_,p]),f!==t)););return p-=i,p===r||0===p%r&&p/r>=0}}},PSEUDO:function(e,t){var n,r=N.pseudos[e]||N.setFilters[e.toLowerCase()]||s.error("unsupported pseudo: "+e);return r[W]?r(t):r.length>1?(n=[e,e,"",t],N.setFilters.hasOwnProperty(e.toLowerCase())?i(function(e,n){for(var i,o=r(e,t),s=o.length;s--;)i=nt.call(e,o[s]),e[i]=!(n[i]=o[s])}):function(e){return r(e,0,n)}):r}},pseudos:{not:i(function(e){var t=[],n=[],r=E(e.replace(lt,"$1"));return r[W]?i(function(e,t,n,i){for(var o,s=r(e,null,i,[]),a=e.length;a--;)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:i(function(e){return function(t){return s(e,t).length>0}}),contains:i(function(e){return function(t){return(t.textContent||t.innerText||k(t)).indexOf(e)>-1}}),lang:i(function(e){return ht.test(e||"")||s.error("unsupported lang: "+e),e=e.replace(Ct,Nt).toLowerCase(),function(t){var n;do if(n=O?t.getAttribute("xml:lang")||t.getAttribute("lang"):t.lang)return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===H},focus:function(e){return e===q.activeElement&&(!q.hasFocus||q.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!N.pseudos.empty(e)},header:function(e){return bt.test(e.nodeName)},input:function(e){return xt.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:l(function(){return[0]}),last:l(function(e,t){return[t-1]}),eq:l(function(e,t,n){return[0>n?n+t:n]}),even:l(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:l(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:l(function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r);return e}),gt:l(function(e,t,n){for(var r=0>n?n+t:n;t>++r;)e.push(r);return e})}};for(T in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})N.pseudos[T]=u(T);for(T in{submit:!0,reset:!0})N.pseudos[T]=c(T);E=s.compile=function(e,t){var n,r=[],i=[],o=U[e+" "];if(!o){for(t||(t=f(e)),n=t.length;n--;)o=y(t[n]),o[W]?r.push(o):i.push(o);o=U(e,v(i,r))}return o},N.pseudos.nth=N.pseudos.eq,w.prototype=N.filters=N.pseudos,N.setFilters=new w,$.sortStable=W.split("").sort(V).join("")===W,L(),[0,0].sort(V),$.detectDuplicates=Y,s.attr=ot.attr,ot.find=s,ot.expr=s.selectors,ot.expr[":"]=ot.expr.pseudos,ot.unique=s.uniqueSort,ot.text=s.getText,ot.isXMLDoc=s.isXML,ot.contains=s.contains}(e);var At=/Until$/,Lt=/^(?:parents|prev(?:Until|All))/,qt=/^.[^:#\[\.,]*$/,Ht=ot.expr.match.needsContext,Ot={children:!0,contents:!0,next:!0,prev:!0};ot.fn.extend({find:function(e){var t,n,r,i=this.length;if("string"!=typeof e)return t=this,this.pushStack(ot(e).filter(function(){for(r=0;i>r;r++)if(ot.contains(t[r],this))return!0}));for(n=[],r=0;i>r;r++)ot.find(e,this[r],n);return n=this.pushStack(i>1?ot.unique(n):n),n.selector=(this.selector?this.selector+" ":"")+e,n},has:function(e){var t=ot(e,this),n=t.length;return this.filter(function(){for(var e=0;n>e;e++)if(ot.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(l(this,e,!1))},filter:function(e){return this.pushStack(l(this,e,!0))},is:function(e){return!!e&&("string"==typeof e?Ht.test(e)?ot(e,this.context).index(this[0])>=0:ot.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){for(var n,r=0,i=this.length,o=[],s=Ht.test(e)||"string"!=typeof e?ot(e,t||this.context):0;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(s?s.index(n)>-1:1===n.nodeType&&ot.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?ot.unique(o):o)},index:function(e){return e?"string"==typeof e?tt.call(ot(e),this[0]):tt.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?ot(e,t):ot.makeArray(e&&e.nodeType?[e]:e),r=ot.merge(this.get(),n);return this.pushStack(ot.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),ot.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return ot.dir(e,"parentNode")},parentsUntil:function(e,t,n){return ot.dir(e,"parentNode",n)},next:function(e){return c(e,"nextSibling")},prev:function(e){return c(e,"previousSibling")},nextAll:function(e){return ot.dir(e,"nextSibling")},prevAll:function(e){return ot.dir(e,"previousSibling")},nextUntil:function(e,t,n){return ot.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return ot.dir(e,"previousSibling",n)},siblings:function(e){return ot.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return ot.sibling(e.firstChild)},contents:function(e){return ot.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:ot.merge([],e.childNodes)}},function(e,t){ot.fn[e]=function(n,r){var i=ot.map(this,t,n);return At.test(e)||(r=n),r&&"string"==typeof r&&(i=ot.filter(r,i)),this.length>1&&(Ot[e]||ot.unique(i),Lt.test(e)&&i.reverse()),this.pushStack(i)}}),ot.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),1===t.length?ot.find.matchesSelector(t[0],e)?[t[0]]:[]:ot.find.matches(e,t)},dir:function(e,n,r){for(var i=[],o=r!==t;(e=e[n])&&9!==e.nodeType;)if(1===e.nodeType){if(o&&ot(e).is(r))break;i.push(e)}return i},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});var Ft=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Mt=/<([\w:]+)/,Pt=/<|&#?\w+;/,Rt=/<(?:script|style|link)/i,Wt=/^(?:checkbox|radio)$/i,Bt=/checked\s*(?:[^=]|=\s*.checked.)/i,$t=/^$|\/(?:java|ecma)script/i,_t=/^true\/(.*)/,It=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,zt={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};zt.optgroup=zt.option,zt.tbody=zt.tfoot=zt.colgroup=zt.caption=zt.col=zt.thead,zt.th=zt.td,ot.fn.extend({text:function(e){return ot.access(this,function(e){return e===t?ot.text(this):this.empty().append((this[0]&&this[0].ownerDocument||X).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){var t;return ot.isFunction(e)?this.each(function(t){ot(this).wrapAll(e.call(this,t))}):(this[0]&&(t=ot(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return ot.isFunction(e)?this.each(function(t){ot(this).wrapInner(e.call(this,t))}):this.each(function(){var t=ot(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=ot.isFunction(e);return this.each(function(n){ot(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){ot.nodeName(this,"body")||ot(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&this.insertBefore(e,this.firstChild)})},before:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,!1,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var n,r=0,i=this.length;i>r;r++)n=this[r],(!e||ot.filter(e,[n]).length>0)&&(t||1!==n.nodeType||ot.cleanData(m(n)),n.parentNode&&(t&&ot.contains(n.ownerDocument,n)&&h(m(n,"script")),n.parentNode.removeChild(n)));return this},empty:function(){for(var e,t=0,n=this.length;n>t;t++)e=this[t],1===e.nodeType&&(ot.cleanData(m(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return ot.clone(this,e,t)})},html:function(e){return ot.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t&&1===n.nodeType)return n.innerHTML;if("string"==typeof e&&!Rt.test(e)&&!zt[(Mt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(Ft,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(ot.cleanData(m(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){var t=ot.isFunction(e);return t||"string"==typeof e||(e=ot(e).not(this).detach()),""!==e?this.domManip([e],!0,function(e){var t=this.nextSibling,n=this.parentNode;n&&(ot(this).remove(),n.insertBefore(e,t))}):this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=K.apply([],e);var i,o,s,a,u,c,l=0,h=this.length,g=this,y=h-1,v=e[0],x=ot.isFunction(v);if(x||!(1>=h||"string"!=typeof v||ot.support.checkClone)&&Bt.test(v))return this.each(function(i){var o=g.eq(i);x&&(e[0]=v.call(this,i,n?o.html():t)),o.domManip(e,n,r)});if(h&&(i=ot.buildFragment(e,this[0].ownerDocument,!1,this),o=i.firstChild,1===i.childNodes.length&&(i=o),o)){for(n=n&&ot.nodeName(o,"tr"),s=ot.map(m(i,"script"),p),a=s.length;h>l;l++)u=i,l!==y&&(u=ot.clone(u,!0,!0),a&&ot.merge(s,m(u,"script"))),r.call(n&&ot.nodeName(this[l],"table")?f(this[l],"tbody"):this[l],u,l);if(a)for(c=s[s.length-1].ownerDocument,ot.map(s,d),l=0;a>l;l++)u=s[l],$t.test(u.type||"")&&!mt.access(u,"globalEval")&&ot.contains(c,u)&&(u.src?ot.ajax({url:u.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):ot.globalEval(u.textContent.replace(It,"")))}return this}}),ot.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){ot.fn[e]=function(e){for(var n,r=[],i=ot(e),o=i.length-1,s=0;o>=s;s++)n=s===o?this:this.clone(!0),ot(i[s])[t](n),Z.apply(r,n.get());return this.pushStack(r)}}),ot.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=ot.contains(e.ownerDocument,e);if(!(ot.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||ot.isXMLDoc(e)))for(s=m(a),o=m(e),r=0,i=o.length;i>r;r++)y(o[r],s[r]);if(t)if(n)for(o=o||m(e),s=s||m(a),r=0,i=o.length;i>r;r++)g(o[r],s[r]);else g(e,a);return s=m(a,"script"),s.length>0&&h(s,!u&&m(e,"script")),a},buildFragment:function(e,t,n,r){for(var i,o,s,a,u,c,l=0,f=e.length,p=t.createDocumentFragment(),d=[];f>l;l++)if(i=e[l],i||0===i)if("object"===ot.type(i))ot.merge(d,i.nodeType?[i]:i);else if(Pt.test(i)){for(o=o||p.appendChild(t.createElement("div")),s=(Mt.exec(i)||["",""])[1].toLowerCase(),a=zt[s]||zt._default,o.innerHTML=a[1]+i.replace(Ft,"<$1></$2>")+a[2],c=a[0];c--;)o=o.firstChild;ot.merge(d,o.childNodes),o=p.firstChild,o.textContent=""}else d.push(t.createTextNode(i));for(p.textContent="",l=0;i=d[l++];)if((!r||-1===ot.inArray(i,r))&&(u=ot.contains(i.ownerDocument,i),o=m(p.appendChild(i),"script"),u&&h(o),n))for(c=0;i=o[c++];)$t.test(i.type||"")&&n.push(i);return p},cleanData:function(e,t){for(var n,r,i,s=e.length,a=0,u=ot.event.special;s>a;a++){if(r=e[a],(t||ot.acceptData(r))&&(n=mt.access(r)))for(i in n.events)u[i]?ot.event.remove(r,i):ot.removeEvent(r,i,n.handle);o(r)}}});var Xt,Ut,Yt=/^(none|table(?!-c[ea]).+)/,Vt=/^margin/,Gt=RegExp("^("+st+")(.*)$","i"),Jt=RegExp("^("+st+")(?!px)[a-z%]+$","i"),Qt=RegExp("^([+-])=("+st+")","i"),Kt={BODY:"block"},Zt={position:"absolute",visibility:"hidden",display:"block"},en={letterSpacing:0,fontWeight:400},tn=["Top","Right","Bottom","Left"],nn=["Webkit","O","Moz","ms"];ot.fn.extend({css:function(e,n){return ot.access(this,function(e,n,r){var i,o,s={},a=0;if(ot.isArray(n)){for(i=b(e),o=n.length;o>a;a++)s[n[a]]=ot.css(e,n[a],!1,i);return s}return r!==t?ot.style(e,n,r):ot.css(e,n)},e,n,arguments.length>1)},show:function(){return w(this,!0)},hide:function(){return w(this)},toggle:function(e){var t="boolean"==typeof e;return this.each(function(){(t?e:x(this))?ot(this).show():ot(this).hide()})}}),ot.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Xt(e,"opacity");
    return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,s,a,u=ot.camelCase(n),c=e.style;return n=ot.cssProps[u]||(ot.cssProps[u]=v(c,u)),a=ot.cssHooks[n]||ot.cssHooks[u],r===t?a&&"get"in a&&(o=a.get(e,!1,i))!==t?o:c[n]:(s=typeof r,"string"===s&&(o=Qt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(ot.css(e,n)),s="number"),null==r||"number"===s&&isNaN(r)||("number"!==s||ot.cssNumber[u]||(r+="px"),ot.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(c[n]="inherit"),a&&"set"in a&&(r=a.set(e,r,i))===t||(c[n]=r)),t)}},css:function(e,n,r,i){var o,s,a,u=ot.camelCase(n);return n=ot.cssProps[u]||(ot.cssProps[u]=v(e.style,u)),a=ot.cssHooks[n]||ot.cssHooks[u],a&&"get"in a&&(o=a.get(e,!0,r)),o===t&&(o=Xt(e,n,i)),"normal"===o&&n in en&&(o=en[n]),""===r||r?(s=parseFloat(o),r===!0||ot.isNumeric(s)?s||0:o):o},swap:function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i}}),Xt=function(e,n,r){var i,o,s,a=r||b(e),u=a?a.getPropertyValue(n)||a[n]:t,c=e.style;return a&&(""!==u||ot.contains(e.ownerDocument,e)||(u=ot.style(e,n)),Jt.test(u)&&Vt.test(n)&&(i=c.width,o=c.minWidth,s=c.maxWidth,c.minWidth=c.maxWidth=c.width=u,u=a.width,c.width=i,c.minWidth=o,c.maxWidth=s)),u},ot.each(["height","width"],function(e,n){ot.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Yt.test(ot.css(e,"display"))?ot.swap(e,Zt,function(){return N(e,n,i)}):N(e,n,i):t},set:function(e,t,r){var i=r&&b(e);return T(e,t,r?C(e,n,r,ot.support.boxSizing&&"border-box"===ot.css(e,"boxSizing",!1,i),i):0)}}}),ot(function(){ot.support.reliableMarginRight||(ot.cssHooks.marginRight={get:function(e,n){return n?ot.swap(e,{display:"inline-block"},Xt,[e,"marginRight"]):t}}),!ot.support.pixelPosition&&ot.fn.position&&ot.each(["top","left"],function(e,n){ot.cssHooks[n]={get:function(e,r){return r?(r=Xt(e,n),Jt.test(r)?ot(e).position()[n]+"px":r):t}}})}),ot.expr&&ot.expr.filters&&(ot.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight},ot.expr.filters.visible=function(e){return!ot.expr.filters.hidden(e)}),ot.each({margin:"",padding:"",border:"Width"},function(e,t){ot.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];4>r;r++)i[e+tn[r]+t]=o[r]||o[r-2]||o[0];return i}},Vt.test(e)||(ot.cssHooks[e+t].set=T)});var rn=/%20/g,on=/\[\]$/,sn=/\r?\n/g,an=/^(?:submit|button|image|reset|file)$/i,un=/^(?:input|select|textarea|keygen)/i;ot.fn.extend({serialize:function(){return ot.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=ot.prop(this,"elements");return e?ot.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!ot(this).is(":disabled")&&un.test(this.nodeName)&&!an.test(e)&&(this.checked||!Wt.test(e))}).map(function(e,t){var n=ot(this).val();return null==n?null:ot.isArray(n)?ot.map(n,function(e){return{name:t.name,value:e.replace(sn,"\r\n")}}):{name:t.name,value:n.replace(sn,"\r\n")}}).get()}}),ot.param=function(e,n){var r,i=[],o=function(e,t){t=ot.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=ot.ajaxSettings&&ot.ajaxSettings.traditional),ot.isArray(e)||e.jquery&&!ot.isPlainObject(e))ot.each(e,function(){o(this.name,this.value)});else for(r in e)E(r,e[r],n,o);return i.join("&").replace(rn,"+")},ot.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){ot.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),ot.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)};var cn,ln,fn=ot.now(),pn=/\?/,dn=/#.*$/,hn=/([?&])_=[^&]*/,gn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,mn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,yn=/^(?:GET|HEAD)$/,vn=/^\/\//,xn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,bn=ot.fn.load,wn={},Tn={},Cn="*/".concat("*");try{ln=z.href}catch(Nn){ln=X.createElement("a"),ln.href="",ln=ln.href}cn=xn.exec(ln.toLowerCase())||[],ot.fn.load=function(e,n,r){if("string"!=typeof e&&bn)return bn.apply(this,arguments);var i,o,s,a=this,u=e.indexOf(" ");return u>=0&&(i=e.slice(u,e.length),e=e.slice(0,u)),ot.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(o="POST"),a.length>0&&ot.ajax({url:e,type:o,dataType:"html",data:n}).done(function(e){s=arguments,a.html(i?ot("<div>").append(ot.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){a.each(r,s||[e.responseText,t,e])}),this},ot.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){ot.fn[t]=function(e){return this.on(t,e)}}),ot.each(["get","post"],function(e,n){ot[n]=function(e,r,i,o){return ot.isFunction(r)&&(o=o||i,i=r,r=t),ot.ajax({url:e,type:n,dataType:o,data:r,success:i})}}),ot.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ln,type:"GET",isLocal:mn.test(cn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Cn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":ot.parseJSON,"text xml":ot.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?A(A(e,ot.ajaxSettings),t):A(ot.ajaxSettings,e)},ajaxPrefilter:D(wn),ajaxTransport:D(Tn),ajax:function(e,n){function r(e,n,r,a){var c,f,v,x,w,C=n;2!==b&&(b=2,u&&clearTimeout(u),i=t,s=a||"",T.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(x=L(p,T,r)),x=q(p,x,T,c),c?(p.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(ot.lastModified[o]=w),w=T.getResponseHeader("etag"),w&&(ot.etag[o]=w)),204===e?C="nocontent":304===e?C="notmodified":(C=x.state,f=x.data,v=x.error,c=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),T.status=e,T.statusText=(n||C)+"",c?g.resolveWith(d,[f,C,T]):g.rejectWith(d,[T,C,v]),T.statusCode(y),y=t,l&&h.trigger(c?"ajaxSuccess":"ajaxError",[T,p,c?f:v]),m.fireWith(d,[T,C]),l&&(h.trigger("ajaxComplete",[T,p]),--ot.active||ot.event.trigger("ajaxStop")))}"object"==typeof e&&(n=e,e=t),n=n||{};var i,o,s,a,u,c,l,f,p=ot.ajaxSetup({},n),d=p.context||p,h=p.context&&(d.nodeType||d.jquery)?ot(d):ot.event,g=ot.Deferred(),m=ot.Callbacks("once memory"),y=p.statusCode||{},v={},x={},b=0,w="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!a)for(a={};t=gn.exec(s);)a[t[1].toLowerCase()]=t[2];t=a[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?s:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=x[n]=x[n]||e,v[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)y[t]=[y[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||w;return i&&i.abort(t),r(0,t),this}};if(g.promise(T).complete=m.add,T.success=T.done,T.error=T.fail,p.url=((e||p.url||ln)+"").replace(dn,"").replace(vn,cn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=ot.trim(p.dataType||"*").toLowerCase().match(at)||[""],null==p.crossDomain&&(c=xn.exec(p.url.toLowerCase()),p.crossDomain=!(!c||c[1]===cn[1]&&c[2]===cn[2]&&(c[3]||("http:"===c[1]?80:443))==(cn[3]||("http:"===cn[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=ot.param(p.data,p.traditional)),j(wn,p,n,T),2===b)return T;l=p.global,l&&0===ot.active++&&ot.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!yn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(pn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=hn.test(o)?o.replace(hn,"$1_="+fn++):o+(pn.test(o)?"&":"?")+"_="+fn++)),p.ifModified&&(ot.lastModified[o]&&T.setRequestHeader("If-Modified-Since",ot.lastModified[o]),ot.etag[o]&&T.setRequestHeader("If-None-Match",ot.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&T.setRequestHeader("Content-Type",p.contentType),T.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Cn+"; q=0.01":""):p.accepts["*"]);for(f in p.headers)T.setRequestHeader(f,p.headers[f]);if(p.beforeSend&&(p.beforeSend.call(d,T,p)===!1||2===b))return T.abort();w="abort";for(f in{success:1,error:1,complete:1})T[f](p[f]);if(i=j(Tn,p,n,T)){T.readyState=1,l&&h.trigger("ajaxSend",[T,p]),p.async&&p.timeout>0&&(u=setTimeout(function(){T.abort("timeout")},p.timeout));try{b=1,i.send(v,r)}catch(C){if(!(2>b))throw C;r(-1,C)}}else r(-1,"No Transport");return T},getScript:function(e,n){return ot.get(e,t,n,"script")},getJSON:function(e,t,n){return ot.get(e,t,n,"json")}}),ot.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return ot.globalEval(e),e}}}),ot.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),ot.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=ot("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),X.head.appendChild(t[0])},abort:function(){n&&n()}}}});var kn=[],Sn=/(=)\?(?=&|$)|\?\?/;ot.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=kn.pop()||ot.expando+"_"+fn++;return this[e]=!0,e}}),ot.ajaxPrefilter("json jsonp",function(n,r,i){var o,s,a,u=n.jsonp!==!1&&(Sn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Sn.test(n.data)&&"data");return u||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=ot.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,u?n[u]=n[u].replace(Sn,"$1"+o):n.jsonp!==!1&&(n.url+=(pn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return a||ot.error(o+" was not called"),a[0]},n.dataTypes[0]="json",s=e[o],e[o]=function(){a=arguments},i.always(function(){e[o]=s,n[o]&&(n.jsonpCallback=r.jsonpCallback,kn.push(o)),a&&ot.isFunction(s)&&s(a[0]),a=s=t}),"script"):t}),ot.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var En=ot.ajaxSettings.xhr(),Dn={0:200,1223:204},jn=0,An={};e.ActiveXObject&&ot(e).on("unload",function(){for(var e in An)An[e]();An=t}),ot.support.cors=!!En&&"withCredentials"in En,ot.support.ajax=En=!!En,ot.ajaxTransport(function(e){var n;return ot.support.cors||En&&!e.crossDomain?{send:function(r,i){var o,s,a=e.xhr();if(a.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(o in e.xhrFields)a[o]=e.xhrFields[o];e.mimeType&&a.overrideMimeType&&a.overrideMimeType(e.mimeType),e.crossDomain||r["X-Requested-With"]||(r["X-Requested-With"]="XMLHttpRequest");for(o in r)a.setRequestHeader(o,r[o]);n=function(e){return function(){n&&(delete An[s],n=a.onload=a.onerror=null,"abort"===e?a.abort():"error"===e?i(a.status||404,a.statusText):i(Dn[a.status]||a.status,a.statusText,"string"==typeof a.responseText?{text:a.responseText}:t,a.getAllResponseHeaders()))}},a.onload=n(),a.onerror=n("error"),n=An[s=jn++]=n("abort"),a.send(e.hasContent&&e.data||null)},abort:function(){n&&n()}}:t});var Ln,qn,Hn=/^(?:toggle|show|hide)$/,On=RegExp("^(?:([+-])=|)("+st+")([a-z%]*)$","i"),Fn=/queueHooks$/,Mn=[P],Pn={"*":[function(e,t){var n,r,i=this.createTween(e,t),o=On.exec(t),s=i.cur(),a=+s||0,u=1,c=20;if(o){if(n=+o[2],r=o[3]||(ot.cssNumber[e]?"":"px"),"px"!==r&&a){a=ot.css(i.elem,e,!0)||n||1;do u=u||".5",a/=u,ot.style(i.elem,e,a+r);while(u!==(u=i.cur()/s)&&1!==u&&--c)}i.unit=r,i.start=a,i.end=o[1]?a+(o[1]+1)*n:n}return i}]};ot.Animation=ot.extend(F,{tweener:function(e,t){ot.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var n,r=0,i=e.length;i>r;r++)n=e[r],Pn[n]=Pn[n]||[],Pn[n].unshift(t)},prefilter:function(e,t){t?Mn.unshift(e):Mn.push(e)}}),ot.Tween=R,R.prototype={constructor:R,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(ot.cssNumber[n]?"":"px")},cur:function(){var e=R.propHooks[this.prop];return e&&e.get?e.get(this):R.propHooks._default.get(this)},run:function(e){var t,n=R.propHooks[this.prop];return this.pos=t=this.options.duration?ot.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):R.propHooks._default.set(this),this}},R.prototype.init.prototype=R.prototype,R.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=ot.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){ot.fx.step[e.prop]?ot.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[ot.cssProps[e.prop]]||ot.cssHooks[e.prop])?ot.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},R.propHooks.scrollTop=R.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},ot.each(["toggle","show","hide"],function(e,t){var n=ot.fn[t];ot.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(W(t,!0),e,r,i)}}),ot.fn.extend({fadeTo:function(e,t,n,r){return this.filter(x).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=ot.isEmptyObject(e),o=ot.speed(t,n,r),s=function(){var t=F(this,ot.extend({},e),o);s.finish=function(){t.stop(!0)},(i||ot._data(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=ot.timers,s=ot._data(this);if(n)s[n]&&s[n].stop&&i(s[n]);else for(n in s)s[n]&&s[n].stop&&Fn.test(n)&&i(s[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&ot.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=ot._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=ot.timers,s=r?r.length:0;for(n.finish=!0,ot.queue(this,e,[]),i&&i.cur&&i.cur.finish&&i.cur.finish.call(this),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),ot.each({slideDown:W("show"),slideUp:W("hide"),slideToggle:W("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){ot.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),ot.speed=function(e,t,n){var r=e&&"object"==typeof e?ot.extend({},e):{complete:n||!n&&t||ot.isFunction(e)&&e,duration:e,easing:n&&t||t&&!ot.isFunction(t)&&t};return r.duration=ot.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in ot.fx.speeds?ot.fx.speeds[r.duration]:ot.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){ot.isFunction(r.old)&&r.old.call(this),r.queue&&ot.dequeue(this,r.queue)},r},ot.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},ot.timers=[],ot.fx=R.prototype.init,ot.fx.tick=function(){var e,n=ot.timers,r=0;for(Ln=ot.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||ot.fx.stop(),Ln=t},ot.fx.timer=function(e){e()&&ot.timers.push(e)&&ot.fx.start()},ot.fx.interval=13,ot.fx.start=function(){qn||(qn=setInterval(ot.fx.tick,ot.fx.interval))},ot.fx.stop=function(){clearInterval(qn),qn=null},ot.fx.speeds={slow:600,fast:200,_default:400},ot.fx.step={},ot.expr&&ot.expr.filters&&(ot.expr.filters.animated=function(e){return ot.grep(ot.timers,function(t){return e===t.elem}).length}),ot.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){ot.offset.setOffset(this,e,t)});var n,r,i=this[0],o={top:0,left:0},s=i&&i.ownerDocument;if(s)return n=s.documentElement,ot.contains(n,i)?(typeof i.getBoundingClientRect!==I&&(o=i.getBoundingClientRect()),r=B(s),{top:o.top+r.pageYOffset-n.clientTop,left:o.left+r.pageXOffset-n.clientLeft}):o},ot.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,c,l=ot.css(e,"position"),f=ot(e),p={};"static"===l&&(e.style.position="relative"),a=f.offset(),o=ot.css(e,"top"),u=ot.css(e,"left"),c=("absolute"===l||"fixed"===l)&&(o+u).indexOf("auto")>-1,c?(r=f.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),ot.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(p.top=t.top-a.top+s),null!=t.left&&(p.left=t.left-a.left+i),"using"in t?t.using.call(e,p):f.css(p)}},ot.fn.extend({position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===ot.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),ot.nodeName(e[0],"html")||(r=e.offset()),r.top+=ot.css(e[0],"borderTopWidth",!0),r.left+=ot.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-ot.css(n,"marginTop",!0),left:t.left-r.left-ot.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||U;e&&!ot.nodeName(e,"html")&&"static"===ot.css(e,"position");)e=e.offsetParent;return e||U})}}),ot.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(n,r){var i="pageYOffset"===r;ot.fn[n]=function(o){return ot.access(this,function(n,o,s){var a=B(n);return s===t?a?a[r]:n[o]:(a?a.scrollTo(i?e.pageXOffset:s,i?s:e.pageYOffset):n[o]=s,t)},n,o,arguments.length,null)}}),ot.each({Height:"height",Width:"width"},function(e,n){ot.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){ot.fn[i]=function(i,o){var s=arguments.length&&(r||"boolean"!=typeof i),a=r||(i===!0||o===!0?"margin":"border");return ot.access(this,function(n,r,i){var o;return ot.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?ot.css(n,r,a):ot.style(n,r,i,a)},n,s?i:t,s,null)}})}),ot.fn.andSelf=ot.fn.addBack,"object"==typeof module&&"object"==typeof module.exports?module.exports=ot:(e.jQuery=e.$=ot,"function"==typeof define&&define.amd&&define("jquery",[],function(){return ot}))})(this);

/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.5",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.5",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.5",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.5",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.5",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.5",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),
    d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.5",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);


/**
 * bootbox.js v4.4.0
 *
 * http://bootboxjs.com/license.txt
 */
!function(a,b){"use strict";"function"==typeof define&&define.amd?define(["jquery"],b):"object"==typeof exports?module.exports=b(require("jquery")):a.bootbox=b(a.jQuery)}(this,function a(b,c){"use strict";function d(a){var b=q[o.locale];return b?b[a]:q.en[a]}function e(a,c,d){a.stopPropagation(),a.preventDefault();var e=b.isFunction(d)&&d.call(c,a)===!1;e||c.modal("hide")}function f(a){var b,c=0;for(b in a)c++;return c}function g(a,c){var d=0;b.each(a,function(a,b){c(a,b,d++)})}function h(a){var c,d;if("object"!=typeof a)throw new Error("Please supply an object of options");if(!a.message)throw new Error("Please specify a message");return a=b.extend({},o,a),a.buttons||(a.buttons={}),c=a.buttons,d=f(c),g(c,function(a,e,f){if(b.isFunction(e)&&(e=c[a]={callback:e}),"object"!==b.type(e))throw new Error("button with key "+a+" must be an object");e.label||(e.label=a),e.className||(e.className=2>=d&&f===d-1?"btn-primary":"btn-default")}),a}function i(a,b){var c=a.length,d={};if(1>c||c>2)throw new Error("Invalid argument length");return 2===c||"string"==typeof a[0]?(d[b[0]]=a[0],d[b[1]]=a[1]):d=a[0],d}function j(a,c,d){return b.extend(!0,{},a,i(c,d))}function k(a,b,c,d){var e={className:"bootbox-"+a,buttons:l.apply(null,b)};return m(j(e,d,c),b)}function l(){for(var a={},b=0,c=arguments.length;c>b;b++){var e=arguments[b],f=e.toLowerCase(),g=e.toUpperCase();a[f]={label:d(g)}}return a}function m(a,b){var d={};return g(b,function(a,b){d[b]=!0}),g(a.buttons,function(a){if(d[a]===c)throw new Error("button key "+a+" is not allowed (options are "+b.join("\n")+")")}),a}var n={dialog:"<div class='bootbox modal' tabindex='-1' role='dialog'><div class='modal-dialog'><div class='modal-content'><div class='modal-body'><div class='bootbox-body'></div></div></div></div></div>",header:"<div class='modal-header'><h4 class='modal-title'></h4></div>",footer:"<div class='modal-footer'></div>",closeButton:"<button type='button' class='bootbox-close-button close' data-dismiss='modal' aria-hidden='true'>&times;</button>",form:"<form class='bootbox-form'></form>",inputs:{text:"<input class='bootbox-input bootbox-input-text form-control' autocomplete=off type=text />",textarea:"<textarea class='bootbox-input bootbox-input-textarea form-control'></textarea>",email:"<input class='bootbox-input bootbox-input-email form-control' autocomplete='off' type='email' />",select:"<select class='bootbox-input bootbox-input-select form-control'></select>",checkbox:"<div class='checkbox'><label><input class='bootbox-input bootbox-input-checkbox' type='checkbox' /></label></div>",date:"<input class='bootbox-input bootbox-input-date form-control' autocomplete=off type='date' />",time:"<input class='bootbox-input bootbox-input-time form-control' autocomplete=off type='time' />",number:"<input class='bootbox-input bootbox-input-number form-control' autocomplete=off type='number' />",password:"<input class='bootbox-input bootbox-input-password form-control' autocomplete='off' type='password' />"}},o={locale:"en",backdrop:"static",animate:!0,className:null,closeButton:!0,show:!0,container:"body"},p={};p.alert=function(){var a;if(a=k("alert",["ok"],["message","callback"],arguments),a.callback&&!b.isFunction(a.callback))throw new Error("alert requires callback property to be a function when provided");return a.buttons.ok.callback=a.onEscape=function(){return b.isFunction(a.callback)?a.callback.call(this):!0},p.dialog(a)},p.confirm=function(){var a;if(a=k("confirm",["cancel","confirm"],["message","callback"],arguments),a.buttons.cancel.callback=a.onEscape=function(){return a.callback.call(this,!1)},a.buttons.confirm.callback=function(){return a.callback.call(this,!0)},!b.isFunction(a.callback))throw new Error("confirm requires a callback");return p.dialog(a)},p.prompt=function(){var a,d,e,f,h,i,k;if(f=b(n.form),d={className:"bootbox-prompt",buttons:l("cancel","confirm"),value:"",inputType:"text"},a=m(j(d,arguments,["title","callback"]),["cancel","confirm"]),i=a.show===c?!0:a.show,a.message=f,a.buttons.cancel.callback=a.onEscape=function(){return a.callback.call(this,null)},a.buttons.confirm.callback=function(){var c;switch(a.inputType){case"text":case"textarea":case"email":case"select":case"date":case"time":case"number":case"password":c=h.val();break;case"checkbox":var d=h.find("input:checked");c=[],g(d,function(a,d){c.push(b(d).val())})}return a.callback.call(this,c)},a.show=!1,!a.title)throw new Error("prompt requires a title");if(!b.isFunction(a.callback))throw new Error("prompt requires a callback");if(!n.inputs[a.inputType])throw new Error("invalid prompt type");switch(h=b(n.inputs[a.inputType]),a.inputType){case"text":case"textarea":case"email":case"date":case"time":case"number":case"password":h.val(a.value);break;case"select":var o={};if(k=a.inputOptions||[],!b.isArray(k))throw new Error("Please pass an array of input options");if(!k.length)throw new Error("prompt with select requires options");g(k,function(a,d){var e=h;if(d.value===c||d.text===c)throw new Error("given options in wrong format");d.group&&(o[d.group]||(o[d.group]=b("<optgroup/>").attr("label",d.group)),e=o[d.group]),e.append("<option value='"+d.value+"'>"+d.text+"</option>")}),g(o,function(a,b){h.append(b)}),h.val(a.value);break;case"checkbox":var q=b.isArray(a.value)?a.value:[a.value];if(k=a.inputOptions||[],!k.length)throw new Error("prompt with checkbox requires options");if(!k[0].value||!k[0].text)throw new Error("given options in wrong format");h=b("<div/>"),g(k,function(c,d){var e=b(n.inputs[a.inputType]);e.find("input").attr("value",d.value),e.find("label").append(d.text),g(q,function(a,b){b===d.value&&e.find("input").prop("checked",!0)}),h.append(e)})}return a.placeholder&&h.attr("placeholder",a.placeholder),a.pattern&&h.attr("pattern",a.pattern),a.maxlength&&h.attr("maxlength",a.maxlength),f.append(h),f.on("submit",function(a){a.preventDefault(),a.stopPropagation(),e.find(".btn-primary").click()}),e=p.dialog(a),e.off("shown.bs.modal"),e.on("shown.bs.modal",function(){h.focus()}),i===!0&&e.modal("show"),e},p.dialog=function(a){a=h(a);var d=b(n.dialog),f=d.find(".modal-dialog"),i=d.find(".modal-body"),j=a.buttons,k="",l={onEscape:a.onEscape};if(b.fn.modal===c)throw new Error("$.fn.modal is not defined; please double check you have included the Bootstrap JavaScript library. See http://getbootstrap.com/javascript/ for more details.");if(g(j,function(a,b){k+="<button data-bb-handler='"+a+"' type='button' class='btn "+b.className+"'>"+b.label+"</button>",l[a]=b.callback}),i.find(".bootbox-body").html(a.message),a.animate===!0&&d.addClass("fade"),a.className&&d.addClass(a.className),"large"===a.size?f.addClass("modal-lg"):"small"===a.size&&f.addClass("modal-sm"),a.title&&i.before(n.header),a.closeButton){var m=b(n.closeButton);a.title?d.find(".modal-header").prepend(m):m.css("margin-top","-10px").prependTo(i)}return a.title&&d.find(".modal-title").html(a.title),k.length&&(i.after(n.footer),d.find(".modal-footer").html(k)),d.on("hidden.bs.modal",function(a){a.target===this&&d.remove()}),d.on("shown.bs.modal",function(){d.find(".btn-primary:first").focus()}),"static"!==a.backdrop&&d.on("click.dismiss.bs.modal",function(a){d.children(".modal-backdrop").length&&(a.currentTarget=d.children(".modal-backdrop").get(0)),a.target===a.currentTarget&&d.trigger("escape.close.bb")}),d.on("escape.close.bb",function(a){l.onEscape&&e(a,d,l.onEscape)}),d.on("click",".modal-footer button",function(a){var c=b(this).data("bb-handler");e(a,d,l[c])}),d.on("click",".bootbox-close-button",function(a){e(a,d,l.onEscape)}),d.on("keyup",function(a){27===a.which&&d.trigger("escape.close.bb")}),b(a.container).append(d),d.modal({backdrop:a.backdrop?"static":!1,keyboard:!1,show:!1}),a.show&&d.modal("show"),d},p.setDefaults=function(){var a={};2===arguments.length?a[arguments[0]]=arguments[1]:a=arguments[0],b.extend(o,a)},p.hideAll=function(){return b(".bootbox").modal("hide"),p};var q={bg_BG:{OK:"??",CANCEL:"?????",CONFIRM:"????????????"},br:{OK:"OK",CANCEL:"Cancelar",CONFIRM:"Sim"},cs:{OK:"OK",CANCEL:"Zrusit",CONFIRM:"Potvrdit"},da:{OK:"OK",CANCEL:"Annuller",CONFIRM:"Accepter"},de:{OK:"OK",CANCEL:"Abbrechen",CONFIRM:"Akzeptieren"},el:{OK:"Εντάξει",CANCEL:"Ακύρωση",CONFIRM:"Επιβεβαίωση"},en:{OK:"OK",CANCEL:"Cancel",CONFIRM:"OK"},es:{OK:"OK",CANCEL:"Cancelar",CONFIRM:"Aceptar"},et:{OK:"OK",CANCEL:"Katkesta",CONFIRM:"OK"},fa:{OK:"????",CANCEL:"???",CONFIRM:"?????"},fi:{OK:"OK",CANCEL:"Peruuta",CONFIRM:"OK"},fr:{OK:"OK",CANCEL:"Annuler",CONFIRM:"D'accord"},he:{OK:"?????",CANCEL:"?????",CONFIRM:"?????"},hu:{OK:"OK",CANCEL:"Megsem",CONFIRM:"Megerosit"},hr:{OK:"OK",CANCEL:"Odustani",CONFIRM:"Potvrdi"},id:{OK:"OK",CANCEL:"Batal",CONFIRM:"OK"},it:{OK:"OK",CANCEL:"Annulla",CONFIRM:"Conferma"},ja:{OK:"OK",CANCEL:"?????",CONFIRM:"??"},lt:{OK:"Gerai",CANCEL:"Atsaukti",CONFIRM:"Patvirtinti"},lv:{OK:"Labi",CANCEL:"Atcelt",CONFIRM:"Apstiprinat"},nl:{OK:"OK",CANCEL:"Annuleren",CONFIRM:"Accepteren"},no:{OK:"OK",CANCEL:"Avbryt",CONFIRM:"OK"},pl:{OK:"OK",CANCEL:"Anuluj",CONFIRM:"Potwierdz"},pt:{OK:"OK",CANCEL:"Cancelar",CONFIRM:"Confirmar"},ru:{OK:"OK",CANCEL:"??????",CONFIRM:"?????????"},sq:{OK:"OK",CANCEL:"Anulo",CONFIRM:"Prano"},sv:{OK:"OK",CANCEL:"Avbryt",CONFIRM:"OK"},th:{OK:"????",CANCEL:"??????",CONFIRM:"??????"},tr:{OK:"Tamam",CANCEL:"Iptal",CONFIRM:"Onayla"},zh_CN:{OK:"OK",CANCEL:"??",CONFIRM:"??"},zh_TW:{OK:"OK",CANCEL:"??",CONFIRM:"??"}};return p.addLocale=function(a,c){return b.each(["OK","CANCEL","CONFIRM"],function(a,b){if(!c[b])throw new Error("Please supply a translation for '"+b+"'")}),q[a]={OK:c.OK,CANCEL:c.CANCEL,CONFIRM:c.CONFIRM},p},p.removeLocale=function(a){return delete q[a],p},p.setLocale=function(a){return p.setDefaults("locale",a)},p.init=function(c){return a(c||b)},p});

//NIKOS DROSAKIS JAVASCRIPT LIBRARY
//PRINT
(function(a){
    a.createModal=function(b){
        defaults={title:"",message:"Message!",closeButton:true,scrollable:false};var b=a.extend({},defaults,b);
        var c=(b.scrollable===true)?'style="max-height: 420px;overflow-y: auto;"':"";
        html='<div class="modal fade" id="printModal">';
        html+='<div class="modal-dialog" style="width:950px !important;">';
        html+='<div class="modal-content">';
        html+='<div class="modal-header">';

        if(b.title.length>0){
            html+='<h4 class="modal-title">'+b.title+"</h4>"
        }

        html+="</div>";
        html+='<div class="modal-body" '+c+">";
        html+=b.message;
        html+="</div>";
        html+='<div class="modal-footer">';

        if(b.closeButton===true){
            html+='<button type="button" class="btn btn-primary" data-dismiss="modal">'+dic.CLOSE+'</button>';
        }
        html+="</div></div></div></div>";

        a("body").prepend(html);
        a("#printModal").modal().on("hidden.bs.modal",function(){a(this).remove()})
        a("#printModal").modal().on("click","#pntButton",function(){$(this).print();})
    }
})($);

//VARIABLES
function _(variable){return document.querySelector(variable);}
function log(variable){if (window.console)return console.log(variable);}

function isInt(n) {  return n % 1 === 0; }
//function get() { var vars = {}; var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {vars[key] = value;});return vars;}
function action_done(myString){document.getElementById("topBoard").innerHTML=myString;}
function redir(dir){window.location=dir;}
function reset(divid){$('#'+divid).html('');
//set autoloader
    $('#speedloaderCon').show();
}
function resetNoLoader(divid){
    $('#'+divid).html('');
}

//toggles from read to edit mode
function toggle_edit(readid,editid){
    var read=$('#'+readid);
    var edit=$('#'+editid);
    if (read.css('display')=='none'){
        edit.hide('fast');
        read.show('fast');
    }else {
        edit.show('fast');
        read.hide('fast');
    }
}
function toggle_edit_all(readid,editid){
    var read=$(readid);
    var edit=$(editid);
    if (read.css('display')=='none'){
        edit.hide('fast');
        read.show('fast');
    }else {
        edit.show('fast');
        read.hide('fast');
    }
}
function toggle_visibility(id) {
    var e = document.getElementById(id);
    if(e.style.display == 'block')
        e.style.display = 'none';
    else
        e.style.display = 'block';
    $('.nada').not('#'+id).hide();
}
//toggles from read to edit mode
function opener(editid){
    var edit= $('#'+editid);
    if (_('#'+editid).style.display=='none'){
        edit.show('normal');
    }else {
        edit.hide('normal');
    }
}

function opener_all(editid){
    var edit= $(editid);
    if (edit.css('display')=='none'){
        edit.show('normal');
    }else {
        edit.hide('normal');
    }
}
function opener2(editid){
    var edit= $('#'+editid);
    if (edit.css('display')=='none'){
        edit.css('display','block');
    }else {
        edit.css('display','none');
    }
}
//close all others
function opener3(editid, listToClose){
    var edit= $('#'+editid);
    if (_('#'+editid).style.display=='none') {
        // $('.oppener').css('display', 'none');
        edit.css('display', 'block');
        for(var i in listToClose){
            $('#'+listToClose[i]).css('display','none');
        }
    }else{
        edit.css('display', 'none');
    }

}

function opener_more(editid,labelid,what){
    if (_('#'+editid).style.display=='none'){
        $('#'+editid).show('normal');
        $('#'+labelid).text('<<'+dic.LESS);
    }else {
        $('#'+editid).hide('normal');
        $('#'+labelid).text(dic.MORE+'>>');
    }
}
function toggle(readid,editid){
    if( _('#'+readid).style.display=='none'){
        $('#'+editid).fadeOut(500, function() { $(this).hide(); });
        $('#'+readid).fadeIn(500, function() { $(this).show(); });
        _('#'+readid).style.display='block';
    }else{
        $('#'+readid).fadeOut(500, function() { $(this).hide(); });
        $('#'+editid).fadeOut(500, function() { $(this).show(); });
    }
}
function toggle1(readid,editid){
    if( _('#'+readid).style.display=='none'){
        $('#'+editid).css('display','none');
        $('#'+readid).css('display','block');
    }else{
        $('#'+readid).css('display','none');
        $('#'+editid).css('display','block');
    }
}

function thisOptionValue(id) {
    var e=document.getElementById(id);
    var selected=e.options[e.selectedIndex].value;
    return selected;
}

function checkedAll (form) {
    checked=false;
    var aa= document.getElementById('form');
    if (checked == false)	{
        checked = true
    }	else	{
        checked = false
    }
    for (var i =0; i < aa.elements.length; i++)	{
        aa.elements[i].checked = checked;
    }
}
/*
find selected radio value
*/
function getRadioValue(radioname,formid) {
    return $('input[name='+radioname+']:checked', '#'+formid).val();
}
/*

FIXES OLD BROWSERS

*/
if(typeof String.prototype.trim !== 'function') {
    String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, '');
    }
}
/*

		AJAX REQUEST

*/
function ajax(params,file,echo_div){
    var echo_div;

    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    } else { // code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    if (typeof echo_div != 'undefined'){
        xmlhttp.onreadystatechange=function()  {
            if (xmlhttp.readyState==4 && xmlhttp.status==200) {
                document.getElementById(echo_div).innerHTML=xmlhttp.responseText;

            }
        }
    }
    xmlhttp.open("POST",file+params,true);

    xmlhttp.send();
}

function hash() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() +  s4() + s4() + s4() + s4() + s4() + s4();
}
/*

		DOM EVENTS

*/
function hide(elementid){
    if (document.querySelector('#'+elementid).style.display == 'block'){
        return null;
    } else {
        document.querySelector('#'+elementid).style.display = 'none';
    }
}
/*

	DATE AND TIMING INTERVALS

*/
function timeDifference(timestamp) {
    //now
    var current = Date.now();
    var jstimestamp = timestamp * 1000;

    var msnow = 15 * 1000;
    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;
    var elapsed = current - jstimestamp;
    //return elapsed;
    if (elapsed < 0) {
        var future = jstimestamp - current;
        if (future < msPerMinute) {
            return Math.round(future/1000) +' '+ dic.SECONDS;
        }
        else if (future < msPerHour) {
            return Math.round(future/msPerMinute) +' '+ dic.MINUTES;
        }
        else if (future < msPerDay ) {
            return Math.round(future/msPerHour ) +' '+ dic.HOURS;
        }
        else if (future < msPerMonth) {
            return Math.round(future/msPerDay) +' '+ dic.DAYS;
        }
        else if (future < msPerYear) {
            return 'approx ' + Math.round(future/msPerMonth) +' '+ dic.MONTHS;
        }
        else {
            return 'approx ' + Math.round(future/msPerYear ) +' '+ dic.YEARS1;
        }
    }   else  {
        if (elapsed < msPerMinute) {
            return Math.round(elapsed/1000) +' '+ dic.SECONDS+' '+ dic.AGO;
        }
        else if (elapsed < msPerHour) {
            return Math.round(elapsed/msPerMinute) +' '+ dic.MINUTES+' '+dic.AGO;
        }
        else if (elapsed < msPerDay ) {
            return Math.round(elapsed/msPerHour ) +' '+ dic.HOURS+' '+ dic.AGO;
        }
        else if (elapsed < msPerMonth) {
            return Math.round(elapsed/msPerDay) +' '+ dic.DAYS+' '+ dic.AGO;
        }
        else if (elapsed < msPerYear) {
            return 'approx ' + Math.round(elapsed/msPerMonth) +' '+ dic.MONTHS+' '+ dic.AGO;
        }
        else {
            return 'approx ' + Math.round(elapsed/msPerYear ) +' '+ dic.YEARS1+' '+ dic.AGO;
        }
    }
}

function chrono(){
    var startTime = 0;
    var start = 0;
    var end = 0;
    var diff = 0;
    var timerID = 0;
    end = new Date()
    diff = end - start
    diff = new Date(diff)
    var sec = diff.getSeconds()
    var min = diff.getMinutes()
    var hr = min > 59 ? 1 : 0
    var day = hr > 23 ? 1 : 0
    //need to reset to 2
    if (min < 10){
        min = "0" + min
    }
    if (sec < 10){
        sec = "0" + sec
    }
    document.getElementById("chronotime").innerHTML = (day !=0 ? (day + ":") : "") + (hr !=0 ? (hr + ":") : "") + ( min !=0 ? (min + ":" ) : "") + sec
    timerID = setTimeout("chrono()", 1000)
}

function greeklish(str){
    var str= str.replace(/[\#\[\]\/\{\}\(\)\*\<\>\%\@\:\>\<\~\"\'\=\*\+\!\;\-\,\?\.\\\^\$\|]/g, "");
    var greekLetters=[' ','α','β','γ','δ','ε','ζ','η','θ','ι','κ','λ','μ','ν','ξ','ο','π','ρ','σ','τ','υ','φ','χ','ψ','ω','Α','Β','Γ','Δ','Ε','Ζ','Η','Θ','Ι','Κ','Λ','Μ','Ν','Ξ','Ο','Π','Ρ','Σ','Τ','Υ','Φ','Χ','Ψ','Ω','ά','έ','ή','ί','ό','ύ','ώ','ς'];
    var enLetters=['_','a','v','g','d','e','z','i','th','i','k','l','m','n','x','o','p','r','s','t','u','f','h','ps','o','A','B','G','D','E','Z','I','Th','I','K','L','M','N','X','O','P','R','S','T','Y','F','Ch','Ps','O','a','e','i','i','o','u','o','s'];
    string = str_replace(greekLetters, enLetters,str);
    return string.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
}

function onlystrings(str){
    return str.replace(/[^a-zA-Z0-9]/g, '');
}

function link_exist(image_url){
    var http = new XMLHttpRequest();
    if (image_url !='/uploads/null'){
        http.open('HEAD', image_url, false);
        http.send();
        return http.status != 404;
    }
}
function roundrank(rank){
    if (rank > 0){
        var arank =rank /2;
        return (Math.ceil(arank/5)*5);
    }
}

function btype_from_buscat(buscat){
    if (buscat < 13){return 1;}
    else if (buscat == 13){return 2;}
    else if (buscat == 14){return 3;}
    else if (buscat > 14 && buscat < 21){return 4;}
    else if (buscat > 20 && buscat < 25){return 5;}
    else if (buscat > 24 && buscat < 39){return 6;}
    else if (buscat > 38 && buscat < 49){return 7;}
    else if (buscat > 48 && buscat < 98){return 8;}
    else if (buscat > 97 && buscat < 105){return 9;}
    else if (buscat > 104 && buscat < 118){return 10;}
    else if (buscat > 117 && buscat < 129){return 11;}
    else if (buscat > 128 && buscat < 147){return 12;}
    else if (buscat > 146 && buscat < 155){return 13;}
    else if (buscat > 154 && buscat < 158){return 14;}
    else if (buscat > 157 && buscat < 165){return 15;}
    else if (buscat > 164 && buscat < 167){return 16;}
    else if (buscat > 166 && buscat < 170){return 17;}
    else if (buscat > 169 && buscat < 174){return 18;}
    else if (buscat > 173 && buscat < 177){return 19;}
    else if (buscat > 176 && buscat < 183){return 20;}
    else if (buscat > 182 && buscat < 187){return 21;}
    else if (buscat > 186 && buscat < 190){return 22;}
    else if (buscat > 189 && buscat < 199){return 23;}
    else if (buscat == 199){return 24;}
}


/*******************************************************/
/*				PHP FUNCTIONS TO JAVASCRIPT 	---thanks to phpjs.org		*/
/*******************************************************/
function str_replace(search, replace, subject, count) {
    var i = 0,
        j = 0,
        temp = '',
        repl = '',
        sl = 0,
        fl = 0,
        f = [].concat(search),
        r = [].concat(replace),
        s = subject,
        ra = Object.prototype.toString.call(r) === '[object Array]',
        sa = Object.prototype.toString.call(s) === '[object Array]';
    s = [].concat(s);
    if (count) {
        this.window[count] = 0;
    }

    for (i = 0, sl = s.length; i < sl; i++) {
        if (s[i] === '') {
            continue;
        }
        for (j = 0, fl = f.length; j < fl; j++) {
            temp = s[i] + '';
            repl = ra ? (r[j] !== undefined ? r[j] : '') : r[0];
            s[i] = (temp)
                .split(f[j])
                .join(repl);
            if (count && s[i] !== temp) {
                this.window[count] += (temp.length - s[i].length) / f[j].length;
            }
        }
    }
    return sa ? s : s[0];
}


function array_combine(keys, values) {
    var new_array = {},
        keycount = keys && keys.length,
        i = 0;

    // input sanitation
    if (typeof keys !== 'object' || typeof values !== 'object' || // Only accept arrays or array-like objects
        typeof keycount !== 'number' || typeof values.length !== 'number' || !keycount) { // Require arrays to have a count
        return false;
    }

    // number of elements does not match
    if (keycount != values.length) {
        return false;
    }

    for (i = 0; i < keycount; i++) {
        new_array[keys[i]] = values[i];
    }

    return new_array;
}

function explode(delimiter, string, limit) {
    if (arguments.length < 2 || typeof delimiter === 'undefined' || typeof string === 'undefined') return null;
    if (delimiter === '' || delimiter === false || delimiter === null) return false;
    if (typeof delimiter === 'function' || typeof delimiter === 'object' || typeof string === 'function' || typeof string ===
        'object') {
        return {
            0: ''
        };
    }
    if (delimiter === true) delimiter = '1';

    // Here we go...
    delimiter += '';
    string += '';

    var s = string.split(delimiter);

    if (typeof limit === 'undefined') return s;

    // Support for limit
    if (limit === 0) limit = 1;

    // Positive limit
    if (limit > 0) {
        if (limit >= s.length) return s;
        return s.slice(0, limit - 1)
            .concat([s.slice(limit - 1)
                .join(delimiter)
            ]);
    }

    // Negative limit
    if (-limit >= s.length) return [];

    s.splice(s.length + limit);
    return s;
}

function implode(glue, pieces) {
    var i = '',
        retVal = '',
        tGlue = '';
    if (arguments.length === 1) {
        pieces = glue;
        glue = '';
    }
    if (typeof pieces === 'object') {
        if (Object.prototype.toString.call(pieces) === '[object Array]') {
            return pieces.join(glue);
        }
        for (i in pieces) {
            retVal += tGlue + pieces[i];
            tGlue = glue;
        }
        return retVal;
    }
    return pieces;
}

function array_unique(inputArr) {
    var key = '',
        tmp_arr2 = {},
        val = '';

    var __array_search = function(needle, haystack) {
        var fkey = '';
        for (fkey in haystack) {
            if (haystack.hasOwnProperty(fkey)) {
                if ((haystack[fkey] + '') === (needle + '')) {
                    return fkey;
                }
            }
        }
        return false;
    };

    for (key in inputArr) {
        if (inputArr.hasOwnProperty(key)) {
            val = inputArr[key];
            if (false === __array_search(val, tmp_arr2)) {
                tmp_arr2[key] = val;
            }
        }
    }

    return tmp_arr2;
}

function in_array(needle, haystack, argStrict) {
    var key = '',
        strict = !! argStrict;

    //we prevent the double check (strict && arr[key] === ndl) || (!strict && arr[key] == ndl)
    //in just one for, in order to improve the performance
    //deciding wich type of comparation will do before walk array
    if (strict) {
        for (key in haystack) {
            if (haystack[key] === needle) {
                return true;
            }
        }
    } else {
        for (key in haystack) {
            if (haystack[key] == needle) {
                return true;
            }
        }
    }

    return false;
}

function range(low, high, step) {
    var matrix = [];
    var inival, endval, plus;
    var walker = step || 1;
    var chars = false;

    if (!isNaN(low) && !isNaN(high)) {
        inival = low;
        endval = high;
    } else if (isNaN(low) && isNaN(high)) {
        chars = true;
        inival = low.charCodeAt(0);
        endval = high.charCodeAt(0);
    } else {
        inival = (isNaN(low) ? 0 : low);
        endval = (isNaN(high) ? 0 : high);
    }

    plus = ((inival > endval) ? false : true);
    if (plus) {
        while (inival <= endval) {
            matrix.push(((chars) ? String.fromCharCode(inival) : inival));
            inival += walker;
        }
    } else {
        while (inival >= endval) {
            matrix.push(((chars) ? String.fromCharCode(inival) : inival));
            inival -= walker;
        }
    }

    return matrix;
}
function timestamp(myDate){
    myDate=myDate.split("-");
    var newDate=myDate[1]+"/"+myDate[0]+"/"+myDate[2];
    return new Date(newDate).getTime();
}


function date(format, timestamp) {
    var that = this;
    var jsdate, f;
    // Keep this here (works, but for code commented-out below for file size reasons)
    // var tal= [];
    var txt_words = [
        'Sun', 'Mon', 'Tues', 'Wednes', 'Thurs', 'Fri', 'Satur',
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    // trailing backslash -> (dropped)
    // a backslash followed by any character (including backslash) -> the character
    // empty string -> empty string
    var formatChr = /\\?(.?)/gi;
    var formatChrCb = function(t, s) {
        return f[t] ? f[t]() : s;
    };
    var _pad = function(n, c) {
        n = String(n);
        while (n.length < c) {
            n = '0' + n;
        }
        return n;
    };
    f = {
        // Day
        d: function() { // Day of month w/leading 0; 01..31
            return _pad(f.j(), 2);
        },
        D: function() { // Shorthand day name; Mon...Sun
            return f.l()
                .slice(0, 3);
        },
        j: function() { // Day of month; 1..31
            return jsdate.getDate();
        },
        l: function() { // Full day name; Monday...Sunday
            return txt_words[f.w()] + 'day';
        },
        N: function() { // ISO-8601 day of week; 1[Mon]..7[Sun]
            return f.w() || 7;
        },
        S: function() { // Ordinal suffix for day of month; st, nd, rd, th
            var j = f.j();
            var i = j % 10;
            if (i <= 3 && parseInt((j % 100) / 10, 10) == 1) {
                i = 0;
            }
            return ['st', 'nd', 'rd'][i - 1] || 'th';
        },
        w: function() { // Day of week; 0[Sun]..6[Sat]
            return jsdate.getDay();
        },
        z: function() { // Day of year; 0..365
            var a = new Date(f.Y(), f.n() - 1, f.j());
            var b = new Date(f.Y(), 0, 1);
            return Math.round((a - b) / 864e5);
        },

        // Week
        W: function() { // ISO-8601 week number
            var a = new Date(f.Y(), f.n() - 1, f.j() - f.N() + 3);
            var b = new Date(a.getFullYear(), 0, 4);
            return _pad(1 + Math.round((a - b) / 864e5 / 7), 2);
        },

        // Month
        F: function() { // Full month name; January...December
            return txt_words[6 + f.n()];
        },
        m: function() { // Month w/leading 0; 01...12
            return _pad(f.n(), 2);
        },
        M: function() { // Shorthand month name; Jan...Dec
            return f.F()
                .slice(0, 3);
        },
        n: function() { // Month; 1...12
            return jsdate.getMonth() + 1;
        },
        t: function() { // Days in month; 28...31
            return (new Date(f.Y(), f.n(), 0))
                .getDate();
        },

        // Year
        L: function() { // Is leap year?; 0 or 1
            var j = f.Y();
            return j % 4 === 0 & j % 100 !== 0 | j % 400 === 0;
        },
        o: function() { // ISO-8601 year
            var n = f.n();
            var W = f.W();
            var Y = f.Y();
            return Y + (n === 12 && W < 9 ? 1 : n === 1 && W > 9 ? -1 : 0);
        },
        Y: function() { // Full year; e.g. 1980...2010
            return jsdate.getFullYear();
        },
        y: function() { // Last two digits of year; 00...99
            return f.Y()
                .toString()
                .slice(-2);
        },

        // Time
        a: function() { // am or pm
            return jsdate.getHours() > 11 ? 'pm' : 'am';
        },
        A: function() { // AM or PM
            return f.a()
                .toUpperCase();
        },
        B: function() { // Swatch Internet time; 000..999
            var H = jsdate.getUTCHours() * 36e2;
            // Hours
            var i = jsdate.getUTCMinutes() * 60;
            // Minutes
            var s = jsdate.getUTCSeconds(); // Seconds
            return _pad(Math.floor((H + i + s + 36e2) / 86.4) % 1e3, 3);
        },
        g: function() { // 12-Hours; 1..12
            return f.G() % 12 || 12;
        },
        G: function() { // 24-Hours; 0..23
            return jsdate.getHours();
        },
        h: function() { // 12-Hours w/leading 0; 01..12
            return _pad(f.g(), 2);
        },
        H: function() { // 24-Hours w/leading 0; 00..23
            return _pad(f.G(), 2);
        },
        i: function() { // Minutes w/leading 0; 00..59
            return _pad(jsdate.getMinutes(), 2);
        },
        s: function() { // Seconds w/leading 0; 00..59
            return _pad(jsdate.getSeconds(), 2);
        },
        u: function() { // Microseconds; 000000-999000
            return _pad(jsdate.getMilliseconds() * 1000, 6);
        },

        // Timezone
        e: function() { // Timezone identifier; e.g. Atlantic/Azores, ...
            // The following works, but requires inclusion of the very large
            // timezone_abbreviations_list() function.
            /*              return that.date_default_timezone_get();
             */
            throw 'Not supported (see source code of date() for timezone on how to add support)';
        },
        I: function() { // DST observed?; 0 or 1
            // Compares Jan 1 minus Jan 1 UTC to Jul 1 minus Jul 1 UTC.
            // If they are not equal, then DST is observed.
            var a = new Date(f.Y(), 0);
            // Jan 1
            var c = Date.UTC(f.Y(), 0);
            // Jan 1 UTC
            var b = new Date(f.Y(), 6);
            // Jul 1
            var d = Date.UTC(f.Y(), 6); // Jul 1 UTC
            return ((a - c) !== (b - d)) ? 1 : 0;
        },
        O: function() { // Difference to GMT in hour format; e.g. +0200
            var tzo = jsdate.getTimezoneOffset();
            var a = Math.abs(tzo);
            return (tzo > 0 ? '-' : '+') + _pad(Math.floor(a / 60) * 100 + a % 60, 4);
        },
        P: function() { // Difference to GMT w/colon; e.g. +02:00
            var O = f.O();
            return (O.substr(0, 3) + ':' + O.substr(3, 2));
        },
        T: function() {
            return 'UTC';
        },
        Z: function() { // Timezone offset in seconds (-43200...50400)
            return -jsdate.getTimezoneOffset() * 60;
        },

        // Full Date/Time
        c: function() { // ISO-8601 date.
            return 'Y-m-d\\TH:i:sP'.replace(formatChr, formatChrCb);
        },
        r: function() { // RFC 2822
            return 'D, d M Y H:i:s O'.replace(formatChr, formatChrCb);
        },
        U: function() { // Seconds since UNIX epoch
            return jsdate / 1000 | 0;
        }
    };
    this.date = function(format, timestamp) {
        that = this;
        jsdate = (timestamp === undefined ? new Date() : // Not provided
                (timestamp instanceof Date) ? new Date(timestamp) : // JS Date()
                    new Date(timestamp * 1000) // UNIX timestamp (auto-convert to int)
        );
        return format.replace(formatChr, formatChrCb);
    };
    return this.date(format, timestamp);
}

function ucfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function array_flip (trans) {
    var key, tmp_ar = {}

    // Duck-type check for our own array()-created PHPJS_Array
    if (trans && typeof trans === 'object' && trans.change_key_case) {
        return trans.flip()
    }

    for (key in trans) {
        if (!trans.hasOwnProperty(key)) {
            continue
        }
        tmp_ar[trans[key]] = key
    }

    return tmp_ar
}
/*
* px
* */
function diagonal_size(){
    var z= Math.pow(screen.width,2) + Math.pow(screen.height,2);
    return Math.sqrt(z);
}

function md5(string) {

    function RotateLeft(lValue, iShiftBits) {
        return (lValue<<iShiftBits) | (lValue>>>(32-iShiftBits));
    }

    function AddUnsigned(lX,lY) {
        var lX4,lY4,lX8,lY8,lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF)+(lY & 0x3FFFFFFF);
        if (lX4 & lY4) {
            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
        }
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
            } else {
                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
            }
        } else {
            return (lResult ^ lX8 ^ lY8);
        }
    }

    function F(x,y,z) { return (x & y) | ((~x) & z); }
    function G(x,y,z) { return (x & z) | (y & (~z)); }
    function H(x,y,z) { return (x ^ y ^ z); }
    function I(x,y,z) { return (y ^ (x | (~z))); }

    function FF(a,b,c,d,x,s,ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function GG(a,b,c,d,x,s,ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function HH(a,b,c,d,x,s,ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function II(a,b,c,d,x,s,ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    };

    function ConvertToWordArray(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWords_temp1=lMessageLength + 8;
        var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1 % 64))/64;
        var lNumberOfWords = (lNumberOfWords_temp2+1)*16;
        var lWordArray=Array(lNumberOfWords-1);
        var lBytePosition = 0;
        var lByteCount = 0;
        while ( lByteCount < lMessageLength ) {
            lWordCount = (lByteCount-(lByteCount % 4))/4;
            lBytePosition = (lByteCount % 4)*8;
            lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount)<<lBytePosition));
            lByteCount++;
        }
        lWordCount = (lByteCount-(lByteCount % 4))/4;
        lBytePosition = (lByteCount % 4)*8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80<<lBytePosition);
        lWordArray[lNumberOfWords-2] = lMessageLength<<3;
        lWordArray[lNumberOfWords-1] = lMessageLength>>>29;
        return lWordArray;
    };

    function WordToHex(lValue) {
        var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;
        for (lCount = 0;lCount<=3;lCount++) {
            lByte = (lValue>>>(lCount*8)) & 255;
            WordToHexValue_temp = "0" + lByte.toString(16);
            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2);
        }
        return WordToHexValue;
    };

    function Utf8Encode(string) {
        string = string.replace(/\r\n/g,"\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {

            var c = string.charCodeAt(n);

            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }

        return utftext;
    };

    var x=Array();
    var k,AA,BB,CC,DD,a,b,c,d;
    var S11=7, S12=12, S13=17, S14=22;
    var S21=5, S22=9 , S23=14, S24=20;
    var S31=4, S32=11, S33=16, S34=23;
    var S41=6, S42=10, S43=15, S44=21;

    string = Utf8Encode(string);

    x = ConvertToWordArray(string);

    a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;

    for (k=0;k<x.length;k+=16) {
        AA=a; BB=b; CC=c; DD=d;
        a=FF(a,b,c,d,x[k+0], S11,0xD76AA478);
        d=FF(d,a,b,c,x[k+1], S12,0xE8C7B756);
        c=FF(c,d,a,b,x[k+2], S13,0x242070DB);
        b=FF(b,c,d,a,x[k+3], S14,0xC1BDCEEE);
        a=FF(a,b,c,d,x[k+4], S11,0xF57C0FAF);
        d=FF(d,a,b,c,x[k+5], S12,0x4787C62A);
        c=FF(c,d,a,b,x[k+6], S13,0xA8304613);
        b=FF(b,c,d,a,x[k+7], S14,0xFD469501);
        a=FF(a,b,c,d,x[k+8], S11,0x698098D8);
        d=FF(d,a,b,c,x[k+9], S12,0x8B44F7AF);
        c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);
        b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);
        a=FF(a,b,c,d,x[k+12],S11,0x6B901122);
        d=FF(d,a,b,c,x[k+13],S12,0xFD987193);
        c=FF(c,d,a,b,x[k+14],S13,0xA679438E);
        b=FF(b,c,d,a,x[k+15],S14,0x49B40821);
        a=GG(a,b,c,d,x[k+1], S21,0xF61E2562);
        d=GG(d,a,b,c,x[k+6], S22,0xC040B340);
        c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);
        b=GG(b,c,d,a,x[k+0], S24,0xE9B6C7AA);
        a=GG(a,b,c,d,x[k+5], S21,0xD62F105D);
        d=GG(d,a,b,c,x[k+10],S22,0x2441453);
        c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);
        b=GG(b,c,d,a,x[k+4], S24,0xE7D3FBC8);
        a=GG(a,b,c,d,x[k+9], S21,0x21E1CDE6);
        d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);
        c=GG(c,d,a,b,x[k+3], S23,0xF4D50D87);
        b=GG(b,c,d,a,x[k+8], S24,0x455A14ED);
        a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905);
        d=GG(d,a,b,c,x[k+2], S22,0xFCEFA3F8);
        c=GG(c,d,a,b,x[k+7], S23,0x676F02D9);
        b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);
        a=HH(a,b,c,d,x[k+5], S31,0xFFFA3942);
        d=HH(d,a,b,c,x[k+8], S32,0x8771F681);
        c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);
        b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);
        a=HH(a,b,c,d,x[k+1], S31,0xA4BEEA44);
        d=HH(d,a,b,c,x[k+4], S32,0x4BDECFA9);
        c=HH(c,d,a,b,x[k+7], S33,0xF6BB4B60);
        b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);
        a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6);
        d=HH(d,a,b,c,x[k+0], S32,0xEAA127FA);
        c=HH(c,d,a,b,x[k+3], S33,0xD4EF3085);
        b=HH(b,c,d,a,x[k+6], S34,0x4881D05);
        a=HH(a,b,c,d,x[k+9], S31,0xD9D4D039);
        d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);
        c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);
        b=HH(b,c,d,a,x[k+2], S34,0xC4AC5665);
        a=II(a,b,c,d,x[k+0], S41,0xF4292244);
        d=II(d,a,b,c,x[k+7], S42,0x432AFF97);
        c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);
        b=II(b,c,d,a,x[k+5], S44,0xFC93A039);
        a=II(a,b,c,d,x[k+12],S41,0x655B59C3);
        d=II(d,a,b,c,x[k+3], S42,0x8F0CCC92);
        c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);
        b=II(b,c,d,a,x[k+1], S44,0x85845DD1);
        a=II(a,b,c,d,x[k+8], S41,0x6FA87E4F);
        d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);
        c=II(c,d,a,b,x[k+6], S43,0xA3014314);
        b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);
        a=II(a,b,c,d,x[k+4], S41,0xF7537E82);
        d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);
        c=II(c,d,a,b,x[k+2], S43,0x2AD7D2BB);
        b=II(b,c,d,a,x[k+9], S44,0xEB86D391);
        a=AddUnsigned(a,AA);
        b=AddUnsigned(b,BB);
        c=AddUnsigned(c,CC);
        d=AddUnsigned(d,DD);
    }

    var temp = WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d);

    return temp.toLowerCase();
}

function sizeobj (obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};
function toTitleCase(str) {
    return str.replace(/(?:^|\s)\w/g, function(match) {
        return match.toUpperCase();
    });
}
/* from 0 to num
* */
function randomize(num){
    return Math.floor(Math.random() * num) +2;
}

function editDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    var costs = new Array();
    for (var i = 0; i <= s1.length; i++) {
        var lastValue = i;
        for (var j = 0; j <= s2.length; j++) {
            if (i == 0)
                costs[j] = j;
            else {
                if (j > 0) {
                    var newValue = costs[j - 1];
                    if (s1.charAt(i - 1) != s2.charAt(j - 1))
                        newValue = Math.min(Math.min(newValue, lastValue),
                            costs[j]) + 1;
                    costs[j - 1] = lastValue;
                    lastValue = newValue;
                }
            }
        }
        if (i > 0)
            costs[s2.length] = lastValue;
    }
    return costs[s2.length];
}
function similarity(s1, s2) {
    var longer = s1;
    var shorter = s2;
    if (s1.length < s2.length) {
        longer = s2;
        shorter = s1;
    }
    var longerLength = longer.length;
    if (longerLength == 0) {
        return 1.0;
    }
    return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}



/*bootstrap-notify.js*/

/*
 * Project: Bootstrap Notify = v3.1.5
 * Description: Turns standard Bootstrap alerts into "Growl-like" notifications.
 * Author: Mouse0270 aka Robert McIntosh
 * License: MIT License
 * Website: https://github.com/mouse0270/bootstrap-growl
 */

/* global define:false, require: false, jQuery:false */

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS
        factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    // Create the defaults once
    var defaults = {
        element: 'body',
        position: null,
        type: "info",
        allow_dismiss: true,
        allow_duplicates: true,
        newest_on_top: false,
        showProgressbar: false,
        placement: {
            from: "top",
            align: "right"
        },
        offset: 20,
        spacing: 10,
        z_index: 1031,
        delay: 5000,
        timer: 1000,
        url_target: '_blank',
        mouse_over: null,
        animate: {
            enter: 'animated fadeInDown',
            exit: 'animated fadeOutUp'
        },
        onShow: null,
        onShown: null,
        onClose: null,
        onClosed: null,
        onClick: null,
        icon_type: 'class',
        template: '<div data-notify="container" class="col-xs-11 col-sm-4 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">&times;</button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
    };

    String.format = function () {
        var args = arguments;
        var str = arguments[0];
        return str.replace(/(\{\{\d\}\}|\{\d\})/g, function (str) {
            if (str.substring(0, 2) === "{{") return str;
            var num = parseInt(str.match(/\d/)[0]);
            return args[num + 1];
        });
    };

    function isDuplicateNotification(notification) {
        var isDupe = false;

        $('[data-notify="container"]').each(function (i, el) {
            var $el = $(el);
            var title = $el.find('[data-notify="title"]').html().trim();
            var message = $el.find('[data-notify="message"]').html().trim();

            // The input string might be different than the actual parsed HTML string!
            // (<br> vs <br /> for example)
            // So we have to force-parse this as HTML here!
            var isSameTitle = title === $("<div>" + notification.settings.content.title + "</div>").html().trim();
            var isSameMsg = message === $("<div>" + notification.settings.content.message + "</div>").html().trim();
            var isSameType = $el.hasClass('alert-' + notification.settings.type);

            if (isSameTitle && isSameMsg && isSameType) {
                //we found the dupe. Set the var and stop checking.
                isDupe = true;
            }
            return !isDupe;
        });

        return isDupe;
    }

    function Notify(element, content, options) {
        // Setup Content of Notify
        var contentObj = {
            content: {
                message: typeof content === 'object' ? content.message : content,
                title: content.title ? content.title : '',
                icon: content.icon ? content.icon : '',
                url: content.url ? content.url : '#',
                target: content.target ? content.target : '-'
            }
        };

        options = $.extend(true, {}, contentObj, options);
        this.settings = $.extend(true, {}, defaults, options);
        this._defaults = defaults;
        if (this.settings.content.target === "-") {
            this.settings.content.target = this.settings.url_target;
        }
        this.animations = {
            start: 'webkitAnimationStart oanimationstart MSAnimationStart animationstart',
            end: 'webkitAnimationEnd oanimationend MSAnimationEnd animationend'
        };

        if (typeof this.settings.offset === 'number') {
            this.settings.offset = {
                x: this.settings.offset,
                y: this.settings.offset
            };
        }

        //if duplicate messages are not allowed, then only continue if this new message is not a duplicate of one that it already showing
        if (this.settings.allow_duplicates || (!this.settings.allow_duplicates && !isDuplicateNotification(this))) {
            this.init();
        }
    }

    $.extend(Notify.prototype, {
        init: function () {
            var self = this;

            this.buildNotify();
            if (this.settings.content.icon) {
                this.setIcon();
            }
            if (this.settings.content.url != "#") {
                this.styleURL();
            }
            this.styleDismiss();
            this.placement();
            this.bind();

            this.notify = {
                $ele: this.$ele,
                update: function (command, update) {
                    var commands = {};
                    if (typeof command === "string") {
                        commands[command] = update;
                    } else {
                        commands = command;
                    }
                    for (var cmd in commands) {
                        switch (cmd) {
                            case "type":
                                this.$ele.removeClass('alert-' + self.settings.type);
                                this.$ele.find('[data-notify="progressbar"] > .progress-bar').removeClass('progress-bar-' + self.settings.type);
                                self.settings.type = commands[cmd];
                                this.$ele.addClass('alert-' + commands[cmd]).find('[data-notify="progressbar"] > .progress-bar').addClass('progress-bar-' + commands[cmd]);
                                break;
                            case "icon":
                                var $icon = this.$ele.find('[data-notify="icon"]');
                                if (self.settings.icon_type.toLowerCase() === 'class') {
                                    $icon.removeClass(self.settings.content.icon).addClass(commands[cmd]);
                                } else {
                                    if (!$icon.is('img')) {
                                        $icon.find('img');
                                    }
                                    $icon.attr('src', commands[cmd]);
                                }
                                self.settings.content.icon = commands[command];
                                break;
                            case "progress":
                                var newDelay = self.settings.delay - (self.settings.delay * (commands[cmd] / 100));
                                this.$ele.data('notify-delay', newDelay);
                                this.$ele.find('[data-notify="progressbar"] > div').attr('aria-valuenow', commands[cmd]).css('width', commands[cmd] + '%');
                                break;
                            case "url":
                                this.$ele.find('[data-notify="url"]').attr('href', commands[cmd]);
                                break;
                            case "target":
                                this.$ele.find('[data-notify="url"]').attr('target', commands[cmd]);
                                break;
                            default:
                                this.$ele.find('[data-notify="' + cmd + '"]').html(commands[cmd]);
                        }
                    }
                    var posX = this.$ele.outerHeight() + parseInt(self.settings.spacing) + parseInt(self.settings.offset.y);
                    self.reposition(posX);
                },
                close: function () {
                    self.close();
                }
            };

        },
        buildNotify: function () {
            var content = this.settings.content;
            this.$ele = $(String.format(this.settings.template, this.settings.type, content.title, content.message, content.url, content.target));
            this.$ele.attr('data-notify-position', this.settings.placement.from + '-' + this.settings.placement.align);
            if (!this.settings.allow_dismiss) {
                this.$ele.find('[data-notify="dismiss"]').css('display', 'none');
            }
            if ((this.settings.delay <= 0 && !this.settings.showProgressbar) || !this.settings.showProgressbar) {
                this.$ele.find('[data-notify="progressbar"]').remove();
            }
        },
        setIcon: function () {
            if (this.settings.icon_type.toLowerCase() === 'class') {
                this.$ele.find('[data-notify="icon"]').addClass(this.settings.content.icon);
            } else {
                if (this.$ele.find('[data-notify="icon"]').is('img')) {
                    this.$ele.find('[data-notify="icon"]').attr('src', this.settings.content.icon);
                } else {
                    this.$ele.find('[data-notify="icon"]').append('<img src="' + this.settings.content.icon + '" alt="Notify Icon" />');
                }
            }
        },
        styleDismiss: function () {
            this.$ele.find('[data-notify="dismiss"]').css({
                position: 'absolute',
                right: '10px',
                top: '5px',
                zIndex: this.settings.z_index + 2
            });
        },
        styleURL: function () {
            this.$ele.find('[data-notify="url"]').css({
                backgroundImage: 'url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)',
                height: '100%',
                left: 0,
                position: 'absolute',
                top: 0,
                width: '100%',
                zIndex: this.settings.z_index + 1
            });
        },
        placement: function () {
            var self = this,
                offsetAmt = this.settings.offset.y,
                css = {
                    display: 'inline-block',
                    margin: '0px auto',
                    position: this.settings.position ? this.settings.position : (this.settings.element === 'body' ? 'fixed' : 'absolute'),
                    transition: 'all .5s ease-in-out',
                    zIndex: this.settings.z_index
                },
                hasAnimation = false,
                settings = this.settings;

            $('[data-notify-position="' + this.settings.placement.from + '-' + this.settings.placement.align + '"]:not([data-closing="true"])').each(function () {
                offsetAmt = Math.max(offsetAmt, parseInt($(this).css(settings.placement.from)) + parseInt($(this).outerHeight()) + parseInt(settings.spacing));
            });
            if (this.settings.newest_on_top === true) {
                offsetAmt = this.settings.offset.y;
            }
            css[this.settings.placement.from] = offsetAmt + 'px';

            switch (this.settings.placement.align) {
                case "left":
                case "right":
                    css[this.settings.placement.align] = this.settings.offset.x + 'px';
                    break;
                case "center":
                    css.left = 0;
                    css.right = 0;
                    break;
            }
            this.$ele.css(css).addClass(this.settings.animate.enter);
            $.each(Array('webkit-', 'moz-', 'o-', 'ms-', ''), function (index, prefix) {
                self.$ele[0].style[prefix + 'AnimationIterationCount'] = 1;
            });

            $(this.settings.element).append(this.$ele);

            if (this.settings.newest_on_top === true) {
                offsetAmt = (parseInt(offsetAmt) + parseInt(this.settings.spacing)) + this.$ele.outerHeight();
                this.reposition(offsetAmt);
            }

            if ($.isFunction(self.settings.onShow)) {
                self.settings.onShow.call(this.$ele);
            }

            this.$ele.one(this.animations.start, function () {
                hasAnimation = true;
            }).one(this.animations.end, function () {
                self.$ele.removeClass(self.settings.animate.enter);
                if ($.isFunction(self.settings.onShown)) {
                    self.settings.onShown.call(this);
                }
            });

            setTimeout(function () {
                if (!hasAnimation) {
                    if ($.isFunction(self.settings.onShown)) {
                        self.settings.onShown.call(this);
                    }
                }
            }, 600);
        },
        bind: function () {
            var self = this;

            this.$ele.find('[data-notify="dismiss"]').on('click', function () {
                self.close();
            });

            if ($.isFunction(self.settings.onClick)) {
                this.$ele.on('click', function (event) {
                    if (event.target != self.$ele.find('[data-notify="dismiss"]')[0]) {
                        self.settings.onClick.call(this, event);
                    }
                });
            }

            this.$ele.mouseover(function () {
                $(this).data('data-hover', "true");
            }).mouseout(function () {
                $(this).data('data-hover', "false");
            });
            this.$ele.data('data-hover', "false");

            if (this.settings.delay > 0) {
                self.$ele.data('notify-delay', self.settings.delay);
                var timer = setInterval(function () {
                    var delay = parseInt(self.$ele.data('notify-delay')) - self.settings.timer;
                    if ((self.$ele.data('data-hover') === 'false' && self.settings.mouse_over === "pause") || self.settings.mouse_over != "pause") {
                        var percent = ((self.settings.delay - delay) / self.settings.delay) * 100;
                        self.$ele.data('notify-delay', delay);
                        self.$ele.find('[data-notify="progressbar"] > div').attr('aria-valuenow', percent).css('width', percent + '%');
                    }
                    if (delay <= -(self.settings.timer)) {
                        clearInterval(timer);
                        self.close();
                    }
                }, self.settings.timer);
            }
        },
        close: function () {
            var self = this,
                posX = parseInt(this.$ele.css(this.settings.placement.from)),
                hasAnimation = false;

            this.$ele.attr('data-closing', 'true').addClass(this.settings.animate.exit);
            self.reposition(posX);

            if ($.isFunction(self.settings.onClose)) {
                self.settings.onClose.call(this.$ele);
            }

            this.$ele.one(this.animations.start, function () {
                hasAnimation = true;
            }).one(this.animations.end, function () {
                $(this).remove();
                if ($.isFunction(self.settings.onClosed)) {
                    self.settings.onClosed.call(this);
                }
            });

            setTimeout(function () {
                if (!hasAnimation) {
                    self.$ele.remove();
                    if ($.isFunction(self.settings.onClosed)) {
                        self.settings.onClosed.call(this);
                    }
                }
            }, 600);
        },
        reposition: function (posX) {
            var self = this,
                notifies = '[data-notify-position="' + this.settings.placement.from + '-' + this.settings.placement.align + '"]:not([data-closing="true"])',
                $elements = this.$ele.nextAll(notifies);
            if (this.settings.newest_on_top === true) {
                $elements = this.$ele.prevAll(notifies);
            }
            $elements.each(function () {
                $(this).css(self.settings.placement.from, posX);
                posX = (parseInt(posX) + parseInt(self.settings.spacing)) + $(this).outerHeight();
            });
        }
    });

    $.notify = function (content, options) {
        var plugin = new Notify(this, content, options);
        return plugin.notify;
    };
    $.notifyDefaults = function (options) {
        defaults = $.extend(true, {}, defaults, options);
        return defaults;
    };

    $.notifyClose = function (selector) {

        if (typeof selector === "undefined" || selector === "all") {
            $('[data-notify]').find('[data-notify="dismiss"]').trigger('click');
        }else if(selector === 'success' || selector === 'info' || selector === 'warning' || selector === 'danger'){
            $('.alert-' + selector + '[data-notify]').find('[data-notify="dismiss"]').trigger('click');
        } else if(selector){
            $(selector + '[data-notify]').find('[data-notify="dismiss"]').trigger('click');
        }
        else {
            $('[data-notify-position="' + selector + '"]').find('[data-notify="dismiss"]').trigger('click');
        }
    };

    $.notifyCloseExcept = function (selector) {

        if(selector === 'success' || selector === 'info' || selector === 'warning' || selector === 'danger'){
            $('[data-notify]').not('.alert-' + selector).find('[data-notify="dismiss"]').trigger('click');
        } else{
            $('[data-notify]').not(selector).find('[data-notify="dismiss"]').trigger('click');
        }
    };


}));