(()=>{"use strict";var n={56:(n,t,r)=>{n.exports=function(n){var t=r.nc;t&&n.setAttribute("nonce",t)}},72:n=>{var t=[];function r(n){for(var r=-1,e=0;e<t.length;e++)if(t[e].identifier===n){r=e;break}return r}function e(n,e){for(var i={},a=[],c=0;c<n.length;c++){var u=n[c],f=e.base?u[0]+e.base:u[0],s=i[f]||0,p="".concat(f," ").concat(s);i[f]=s+1;var l=r(p),A={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==l)t[l].references++,t[l].updater(A);else{var d=o(A,e);e.byIndex=c,t.splice(c,0,{identifier:p,updater:d,references:1})}a.push(p)}return a}function o(n,t){var r=t.domAPI(t);return r.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;r.update(n=t)}else r.remove()}}n.exports=function(n,o){var i=e(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=r(i[a]);t[c].references--}for(var u=e(n,o),f=0;f<i.length;f++){var s=r(i[f]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}i=u}}},113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var r="",e=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),e&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=n(t),e&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(n,r,e,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(e)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(a[u]=!0)}for(var f=0;f<n.length;f++){var s=[].concat(n[f]);e&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),r&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=r):s[2]=r),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),t.push(s))}},t}},354:n=>{n.exports=function(n){var t=n[1],r=n[3];if(!r)return t;if("function"==typeof btoa){var e=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e),i="/*# ".concat(o," */");return[t].concat([i]).join("\n")}return[t].join("\n")}},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},659:n=>{var t={};n.exports=function(n,r){var e=function(n){if(void 0===t[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}t[n]=r}return t[n]}(n);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(r)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(r){!function(n,t,r){var e="";r.supports&&(e+="@supports (".concat(r.supports,") {")),r.media&&(e+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(e+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),e+=r.css,o&&(e+="}"),r.media&&(e+="}"),r.supports&&(e+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(e,n,t.options)}(t,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},958:(n,t,r)=>{r.d(t,{A:()=>c});var e=r(354),o=r.n(e),i=r(314),a=r.n(i)()(o());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]),a.push([n.id,":root {\n  --cor-fundo: rgb(241, 135, 153);\n  --cor-fundo-clara: rgb(243, 175, 187);\n  --cor-fundo-dark: rgb(236, 86, 111);\n}\n\n* {\n  box-sizing: border-box;\n  outline: none;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: var(--cor-fundo);\n  font-family: 'Poppins', 'serif';\n  font-size: 1.3em;\n  line-height: 1.5em;\n}\n\n.container {\n  max-width: 640px;\n  margin: 50px auto;\n  background: #fff;\n  padding: 20px;\n  border-radius: 10px;\n}\n\nform input, form label, form button {\n  display: block;\n  width: 100%;\n  margin-bottom: 10px;\n  border-radius: 8px;\n}\n\nform input {\n  font-size: 24px;\n  height: 50px;\n  padding: 0 20px;\n}\n\nform input:focus {\n  outline: 2px solid var(--cor-fundo);\n}\n\nform button {\n  border: none;\n  background: var(--cor-fundo);\n  color: #fff;\n  font-size: 18px;\n  font-weight: bold;\n  height: 50px;\n  cursor: pointer;\n  margin-top: 30px;\n}\n\nform button:hover {\n  background: var(--cor-fundo-dark);\n}\n\n.container h1 {\n  text-align: center;\n  margin-bottom: 40px;\n}\n\n.cpf-gerado {\n  font-size: 2em;\n  color: var(--cor-fundo);\n  text-align: center;\n  font-weight: bold;\n  margin-bottom: 40px;\n  letter-spacing: 2px;\n}\n","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AAEA;EACE,+BAA+B;EAC/B,qCAAqC;EACrC,mCAAmC;AACrC;;AAEA;EACE,sBAAsB;EACtB,aAAa;AACf;;AAEA;EACE,SAAS;EACT,UAAU;EACV,4BAA4B;EAC5B,+BAA+B;EAC/B,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,gBAAgB;EAChB,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,YAAY;EACZ,4BAA4B;EAC5B,WAAW;EACX,eAAe;EACf,iBAAiB;EACjB,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,mBAAmB;AACrB",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n\n:root {\n  --cor-fundo: rgb(241, 135, 153);\n  --cor-fundo-clara: rgb(243, 175, 187);\n  --cor-fundo-dark: rgb(236, 86, 111);\n}\n\n* {\n  box-sizing: border-box;\n  outline: none;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: var(--cor-fundo);\n  font-family: 'Poppins', 'serif';\n  font-size: 1.3em;\n  line-height: 1.5em;\n}\n\n.container {\n  max-width: 640px;\n  margin: 50px auto;\n  background: #fff;\n  padding: 20px;\n  border-radius: 10px;\n}\n\nform input, form label, form button {\n  display: block;\n  width: 100%;\n  margin-bottom: 10px;\n  border-radius: 8px;\n}\n\nform input {\n  font-size: 24px;\n  height: 50px;\n  padding: 0 20px;\n}\n\nform input:focus {\n  outline: 2px solid var(--cor-fundo);\n}\n\nform button {\n  border: none;\n  background: var(--cor-fundo);\n  color: #fff;\n  font-size: 18px;\n  font-weight: bold;\n  height: 50px;\n  cursor: pointer;\n  margin-top: 30px;\n}\n\nform button:hover {\n  background: var(--cor-fundo-dark);\n}\n\n.container h1 {\n  text-align: center;\n  margin-bottom: 40px;\n}\n\n.cpf-gerado {\n  font-size: 2em;\n  color: var(--cor-fundo);\n  text-align: center;\n  font-weight: bold;\n  margin-bottom: 40px;\n  letter-spacing: 2px;\n}\n"],sourceRoot:""}]);const c=a}},t={};function r(e){var o=t[e];if(void 0!==o)return o.exports;var i=t[e]={id:e,exports:{}};return n[e](i,i.exports,r),i.exports}function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},e(n)}function o(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=Array(t);r<t;r++)e[r]=n[r];return e}function i(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,a(e.key),e)}}function a(n){var t=function(n){if("object"!=e(n)||!n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var r=t.call(n,"string");if("object"!=e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==e(t)?t:t+""}r.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return r.d(t,{a:t}),t},r.d=(n,t)=>{for(var e in t)r.o(t,e)&&!r.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:t[e]})},r.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),r.nc=void 0;var c=function(){function n(t){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),Object.defineProperty(this,"cpfLimpo",{writable:!1,enumerable:!0,configurable:!1,value:t.replace(/\D+/g,"")})}return t=n,e=[{key:"geraDigito",value:function(n){var t,r=0,e=n.length+1,i=function(n,t){var r="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!r){if(Array.isArray(n)||(r=function(n,t){if(n){if("string"==typeof n)return o(n,t);var r={}.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(n,t):void 0}}(n))||t&&n&&"number"==typeof n.length){r&&(n=r);var e=0,i=function(){};return{s:i,n:function(){return e>=n.length?{done:!0}:{done:!1,value:n[e++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,u=!1;return{s:function(){r=r.call(n)},n:function(){var n=r.next();return c=n.done,n},e:function(n){u=!0,a=n},f:function(){try{c||null==r.return||r.return()}finally{if(u)throw a}}}}(n);try{for(i.s();!(t=i.n()).done;){var a=t.value;r+=e*Number(a),e--}}catch(n){i.e(n)}finally{i.f()}var c=11-r%11;return c<=9?String(c):"0"}}],(r=[{key:"éSequência",value:function(){return this.cpfLimpo.charAt(0).repeat(11)===this.cpfLimpo}},{key:"geraNovoCpf",value:function(){var t=this.cpfLimpo.slice(0,-2),r=n.geraDigito(t),e=n.geraDigito(t+r);this.novoCPF=t+r+e}},{key:"valida",value:function(){return!!this.cpfLimpo&&"string"==typeof this.cpfLimpo&&11===this.cpfLimpo.length&&!this.éSequência()&&(this.geraNovoCpf(),this.novoCPF===this.cpfLimpo)}}])&&i(t.prototype,r),e&&i(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,r,e}();function u(n){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},u(n)}function f(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,s(e.key),e)}}function s(n){var t=function(n){if("object"!=u(n)||!n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var r=t.call(n,"string");if("object"!=u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==u(t)?t:t+""}var p,l=function(){return n=function n(){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n)},t=[{key:"rand",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e8,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:999999999;return String(Math.floor(Math.random()*(t-n)+n))}},{key:"formatado",value:function(n){return n.slice(0,3)+"."+n.slice(3,6)+"."+n.slice(6,9)+"-"+n.slice(9,11)}},{key:"geraNovoCPF",value:function(){var n=this.rand(),t=c.geraDigito(n),r=n+t+c.geraDigito(n+t);return this.formatado(r)}}],t&&f(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,t}(),A=r(72),d=r.n(A),m=r(825),g=r.n(m),v=r(659),b=r.n(v),y=r(56),h=r.n(y),C=r(540),E=r.n(C),B=r(113),x=r.n(B),w=r(958),S={};S.styleTagTransform=x(),S.setAttributes=h(),S.insert=b().bind(null,"head"),S.domAPI=g(),S.insertStyleElement=E(),d()(w.A,S),w.A&&w.A.locals&&w.A.locals,p=new l,document.querySelector(".cpf-gerado").innerHTML=p.geraNovoCPF()})();
//# sourceMappingURL=bundle.js.map