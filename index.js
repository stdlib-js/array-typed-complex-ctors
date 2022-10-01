// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).ctors=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,t=Object.defineProperty,n=Object.prototype,i=n.toString,o=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__;r=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var l,c,s,h;if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||f.call(e,r)?(l=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=l):e[r]=t.value),s="get"in t,h="set"in t,c&&(s||h))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&o&&o.call(e,r,t.get),h&&a&&a.call(e,r,t.set),e};var l=r;function c(e,r,t){l(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function s(e){return"number"==typeof e}var h="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return h&&"symbol"==typeof Symbol.toStringTag}var m=Object.prototype.toString;var g=Object.prototype.hasOwnProperty;function p(e,r){return null!=e&&g.call(e,r)}var b="function"==typeof Symbol?Symbol.toStringTag:"";var w=y()?function(e){var r,t,n;if(null==e)return m.call(e);t=e[b],r=p(e,b);try{e[b]=void 0}catch(r){return m.call(e)}return n=m.call(e),r?e[b]=t:delete e[b],n}:function(e){return m.call(e)},v=Number,d=v.prototype.toString;var E=y();function _(e){return"object"==typeof e&&(e instanceof v||(E?function(e){try{return d.call(e),!0}catch(e){return!1}}(e):"[object Number]"===w(e)))}function T(e){return s(e)||_(e)}c(T,"isPrimitive",s),c(T,"isObject",_);var j=Number.POSITIVE_INFINITY,x=v.NEGATIVE_INFINITY,A=Math.floor;function B(e){return A(e)===e}function L(e){return e<j&&e>x&&B(e)}function S(e){return s(e)&&L(e)}function V(e){return _(e)&&L(e.valueOf())}function R(e){return S(e)||V(e)}function k(e){return S(e)&&e>=0}function O(e){return V(e)&&e.valueOf()>=0}function M(e){return k(e)||O(e)}c(R,"isPrimitive",S),c(R,"isObject",V),c(M,"isPrimitive",k),c(M,"isObject",O);function N(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&B(e.length)&&e.length>=0&&e.length<=4294967295}function P(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&B(e.length)&&e.length>=0&&e.length<=9007199254740991}var F="function"==typeof ArrayBuffer;function C(e){return F&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===w(e)}var Y=Array.isArray?Array.isArray:function(e){return"[object Array]"===w(e)};function I(e){return"object"==typeof e&&null!==e&&!Y(e)}var W=/./;function G(e){return"boolean"==typeof e}var J=Boolean.prototype.toString;var U=y();function X(e){return"object"==typeof e&&(e instanceof Boolean||(U?function(e){try{return J.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===w(e)))}function q(e){return G(e)||X(e)}function z(){return new Function("return this;")()}c(q,"isPrimitive",G),c(q,"isObject",X);var D="object"==typeof self?self:null,H="object"==typeof window?window:null,K="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Q="object"==typeof K?K:null;var Z=function(e){if(arguments.length){if(!G(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return z()}if(D)return D;if(H)return H;if(Q)return Q;throw new Error("unexpected error. Unable to resolve global object.")}(),$=Z.document&&Z.document.childNodes,ee=Int8Array;function re(){return/^\s*function\s*([^(]*)/i}var te=/^\s*function\s*([^(]*)/i;function ne(e){return null!==e&&"object"==typeof e}function ie(e){var r,t,n,i;if(("Object"===(t=w(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=te.exec(n.toString()))return r[1]}return ne(i=e)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}c(re,"REGEXP",te),c(ne,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(r){var t,n;if(!Y(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(ne));var oe="function"==typeof W||"object"==typeof ee||"function"==typeof $?function(e){return ie(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?ie(e).toLowerCase():r};function ae(e){return"function"===oe(e)}function ue(e,r){if(!(this instanceof ue))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!s(e))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+e+"`.");if(!s(r))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+r+"`.");return l(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),l(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}c(ue,"BYTES_PER_ELEMENT",8),c(ue.prototype,"BYTES_PER_ELEMENT",8),c(ue.prototype,"byteLength",16),c(ue.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),c(ue.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var fe="function"==typeof Math.fround?Math.fround:null,le="function"==typeof Float32Array;var ce="function"==typeof Float32Array?Float32Array:null;var se="function"==typeof Float32Array?Float32Array:void 0;var he=function(){var e,r,t;if("function"!=typeof ce)return!1;try{r=new ce([1,3.14,-3.14,5e40]),t=r,e=(le&&t instanceof Float32Array||"[object Float32Array]"===w(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===j}catch(r){e=!1}return e}()?se:function(){throw new Error("not implemented")},ye=new he(1);var me="function"==typeof fe?fe:function(e){return ye[0]=e,ye[0]};function ge(e,r){if(!(this instanceof ge))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!s(e))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+e+"`.");if(!s(r))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+r+"`.");return l(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:me(e)}),l(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:me(r)}),this}function pe(e){return e instanceof ue||e instanceof ge||"object"==typeof e&&null!==e&&"number"==typeof e.re&&"number"==typeof e.im}function be(e){return B(e/2)}function we(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&p(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}c(ge,"BYTES_PER_ELEMENT",4),c(ge.prototype,"BYTES_PER_ELEMENT",4),c(ge.prototype,"byteLength",8),c(ge.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),c(ge.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var ve=we()?Symbol.iterator:null;function de(e,r,t){l(e,r,{configurable:!1,enumerable:!1,get:t})}var Ee="function"==typeof Float64Array;var _e="function"==typeof Float64Array?Float64Array:null;var Te="function"==typeof Float64Array?Float64Array:void 0;var je=function(){var e,r,t;if("function"!=typeof _e)return!1;try{r=new _e([1,3.14,-3.14,NaN]),t=r,e=(Ee&&t instanceof Float64Array||"[object Float64Array]"===w(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?Te:function(){throw new Error("not implemented")};function xe(e){return e.re}function Ae(e){return e.im}function Be(e,r){return new he(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function Le(e,r){return new je(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function Se(e,r){return e[r]}function Ve(e,r){return e.get(r)}function Re(e,r,t){e[r]=t}function ke(e,r,t){e.set(t,r)}function Oe(e){var r=Boolean(e.get&&e.set);return{data:e,accessors:r,getter:r?Ve:Se,setter:r?ke:Re}}function Me(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(N(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!pe(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");r.push(xe(n),Ae(n))}return r}function Ne(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,N(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!pe(o))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+o+"`.");n.push(xe(o),Ae(o))}return n}function Pe(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!pe(n=r[i]))return null;e[o]=xe(n),e[o+1]=Ae(n),o+=2}return e}var Fe=2*je.BYTES_PER_ELEMENT,Ce=we();function Ye(e){return e instanceof Je||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function Ie(e){return e===Je||"Complex64Array"===e.name}function We(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===Fe/2}function Ge(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===Fe}function Je(){var e,r,t,n;if(r=arguments.length,!(this instanceof Je))return 0===r?new Je:1===r?new Je(arguments[0]):2===r?new Je(arguments[0],arguments[1]):new Je(arguments[0],arguments[1],arguments[2]);if(0===r)t=new je(0);else if(1===r)if(k(arguments[0]))t=new je(2*arguments[0]);else if(P(arguments[0]))if((n=(t=arguments[0]).length)&&Y(t)&&pe(t[0])){if(null===(t=Pe(new je(2*n),t))){if(!be(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new je(arguments[0])}}else{if(We(t))t=Be(t,0);else if(Ge(t))t=Le(t,0);else if(!be(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new je(t)}else if(C(arguments[0])){if(!B((t=arguments[0]).byteLength/Fe))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+Fe+". Byte length: `"+t.byteLength+"`.");t=new je(t)}else{if(!I(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===Ce)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!ae(t[ve]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!ae((t=t[ve]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=Me(t))instanceof Error)throw t;t=new je(t)}else{if(!C(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!k(e=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+e+"`.");if(!B(e/Fe))throw new RangeError("invalid argument. Byte offset must be a multiple of "+Fe+". Value: `"+e+"`.");if(2===r){if(!B((n=t.byteLength-e)/Fe))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+Fe+". View byte length: `"+n+"`.");t=new je(t,e)}else{if(!k(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*Fe>t.byteLength-e)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*Fe+"`.");t=new je(t,e,2*n)}}return c(this,"_buffer",t),c(this,"_length",t.length/2),this}function Ue(e){return e.re}function Xe(e){return e.im}function qe(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(N(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!pe(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");r.push(Ue(n),Xe(n))}return r}function ze(e,r,t){var n,i,o,a;for(n=[],a=-1;!(i=e.next()).done;)if(a+=1,N(o=r.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!pe(o))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+o+"`.");n.push(Ue(o),Xe(o))}return n}function De(e,r){var t,n,i,o;for(t=r.length,o=0,i=0;i<t;i++){if(!pe(n=r[i]))return null;e[o]=Ue(n),e[o+1]=Xe(n),o+=2}return e}c(Je,"BYTES_PER_ELEMENT",Fe),c(Je,"name","Complex128Array"),c(Je,"from",(function(e){var r,t,n,i,o,a,u,f,l,c,s;if(!ae(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Ie(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!ae(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(r=arguments[2])}if(Ye(e)){if(u=e.length,n){for(o=(i=new this(u))._buffer,s=0,c=0;c<u;c++){if(pe(l=n.call(r,e.get(c),c)))o[s]=xe(l),o[s+1]=Ae(l);else{if(!(N(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");o[s]=l[0],o[s+1]=l[1]}s+=2}return i}return new this(e)}if(P(e)){if(n){for(u=e.length,a=Oe(e),c=0;c<u;c++)if(!pe(a.getter(e,c))){f=!0;break}if(f){if(!be(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(o=(i=new this(u/2))._buffer,c=0;c<u;c++)o[c]=n.call(r,a.getter(e,c),c);return i}for(o=(i=new this(u))._buffer,s=0,c=0;c<u;c++){if(pe(l=n.call(r,a.getter(e,c),c)))o[s]=xe(l),o[s+1]=Ae(l);else{if(!(N(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");o[s]=l[0],o[s+1]=l[1]}s+=2}return i}return new this(e)}if(I(e)&&Ce&&ae(e[ve])){if(!ae((o=e[ve]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?Ne(o,n,r):Me(o))instanceof Error)throw a;for(o=(i=new this(u=a.length/2))._buffer,c=0;c<u;c++)o[c]=a[c];return i}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")})),c(Je,"of",(function(){var e,r;if(!ae(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Ie(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),de(Je.prototype,"buffer",(function(){return this._buffer.buffer})),de(Je.prototype,"byteLength",(function(){return this._buffer.byteLength})),de(Je.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),c(Je.prototype,"BYTES_PER_ELEMENT",Je.BYTES_PER_ELEMENT),c(Je.prototype,"copyWithin",(function(e,r){if(!Ye(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),c(Je.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!Ye(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,c(t={},"next",(function(){var r;if(o+=1,i||o>=n)return{done:!0};return r=new ue(e[a+=2],e[a+1]),{value:[o,r],done:!1}})),c(t,"return",(function(e){if(i=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),ve&&c(t,ve,(function(){return r.entries()})),t})),c(Je.prototype,"get",(function(e){var r;if(!Ye(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!k(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return new ue((r=this._buffer)[e*=2],r[e+1])})),de(Je.prototype,"length",(function(){return this._length})),c(Je.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!Ye(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!k(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(pe(e)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=xe(e),void(n[t+1]=Ae(e))}if(Ye(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*Fe,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new je(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!P(e))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.");for(a=e.length,f=0;f<a;f++)if(!pe(e[f])){o=!0;break}if(o){if(!be(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*Fe,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new je(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=xe(u),n[t+1]=Ae(u),t+=2}}));var He=2*he.BYTES_PER_ELEMENT,Ke=we();function Qe(e){return e instanceof rr||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function Ze(e){return e===rr||"Complex128Array"===e.name}function $e(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===He}function er(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===2*He}function rr(){var e,r,t,n;if(r=arguments.length,!(this instanceof rr))return 0===r?new rr:1===r?new rr(arguments[0]):2===r?new rr(arguments[0],arguments[1]):new rr(arguments[0],arguments[1],arguments[2]);if(0===r)t=new he(0);else if(1===r)if(k(arguments[0]))t=new he(2*arguments[0]);else if(P(arguments[0]))if((n=(t=arguments[0]).length)&&Y(t)&&pe(t[0])){if(null===(t=De(new he(2*n),t))){if(!be(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new he(arguments[0])}}else{if($e(t))t=Be(t,0);else if(er(t))t=Le(t,0);else if(!be(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new he(t)}else if(C(arguments[0])){if(!B((t=arguments[0]).byteLength/He))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+He+". Byte length: `"+t.byteLength+"`.");t=new he(t)}else{if(!I(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===Ke)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!ae(t[ve]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!ae((t=t[ve]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=qe(t))instanceof Error)throw t;t=new he(t)}else{if(!C(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!k(e=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+e+"`.");if(!B(e/He))throw new RangeError("invalid argument. Byte offset must be a multiple of "+He+". Value: `"+e+"`.");if(2===r){if(!B((n=t.byteLength-e)/He))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+He+". View byte length: `"+n+"`.");t=new he(t,e)}else{if(!k(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*He>t.byteLength-e)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*He+"`.");t=new he(t,e,2*n)}}return c(this,"_buffer",t),c(this,"_length",t.length/2),this}c(rr,"BYTES_PER_ELEMENT",He),c(rr,"name","Complex64Array"),c(rr,"from",(function(e){var r,t,n,i,o,a,u,f,l,c,s;if(!ae(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Ze(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!ae(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(r=arguments[2])}if(Qe(e)){if(u=e.length,n){for(o=(i=new this(u))._buffer,s=0,c=0;c<u;c++){if(pe(l=n.call(r,e.get(c),c)))o[s]=Ue(l),o[s+1]=Xe(l);else{if(!(N(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");o[s]=l[0],o[s+1]=l[1]}s+=2}return i}return new this(e)}if(P(e)){if(n){for(u=e.length,a=Oe(e),c=0;c<u;c++)if(!pe(a.getter(e,c))){f=!0;break}if(f){if(!be(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(o=(i=new this(u/2))._buffer,c=0;c<u;c++)o[c]=n.call(r,a.getter(e,c),c);return i}for(o=(i=new this(u))._buffer,s=0,c=0;c<u;c++){if(pe(l=n.call(r,a.getter(e,c),c)))o[s]=Ue(l),o[s+1]=Xe(l);else{if(!(N(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");o[s]=l[0],o[s+1]=l[1]}s+=2}return i}return new this(e)}if(I(e)&&Ke&&ae(e[ve])){if(!ae((o=e[ve]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?ze(o,n,r):qe(o))instanceof Error)throw a;for(o=(i=new this(u=a.length/2))._buffer,c=0;c<u;c++)o[c]=a[c];return i}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")})),c(rr,"of",(function(){var e,r;if(!ae(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Ze(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),de(rr.prototype,"buffer",(function(){return this._buffer.buffer})),de(rr.prototype,"byteLength",(function(){return this._buffer.byteLength})),de(rr.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),c(rr.prototype,"BYTES_PER_ELEMENT",rr.BYTES_PER_ELEMENT),c(rr.prototype,"copyWithin",(function(e,r){if(!Qe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),c(rr.prototype,"entries",(function(){var e,r,t,n,i,o,a;if(!Qe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,o=-1,a=-2,c(t={},"next",(function(){var r;if(o+=1,i||o>=n)return{done:!0};return r=new ge(e[a+=2],e[a+1]),{value:[o,r],done:!1}})),c(t,"return",(function(e){if(i=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),ve&&c(t,ve,(function(){return r.entries()})),t})),c(rr.prototype,"get",(function(e){var r;if(!Qe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!k(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return new ge((r=this._buffer)[e*=2],r[e+1])})),de(rr.prototype,"length",(function(){return this._length})),c(rr.prototype,"set",(function(e){var r,t,n,i,o,a,u,f,l;if(!Qe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!k(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(pe(e)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=Ue(e),void(n[t+1]=Xe(e))}if(Qe(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*He,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new he(r.length),f=0;f<r.length;f++)i[f]=r[f];r=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!P(e))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.");for(a=e.length,f=0;f<a;f++)if(!pe(e[f])){o=!0;break}if(o){if(!be(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*He,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(i=new he(a),f=0;f<a;f++)i[f]=r[f];r=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=Ue(u),n[t+1]=Xe(u),t+=2}}));var tr={complex128:Je,complex64:rr};return function(e){return tr[e]||null}}));
//# sourceMappingURL=index.js.map
