!function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=1)}([function(e,r){const t=function(e,r,t,n=null){if(!e)throw new Error("Parameter nodeTrigger is not defined");if(!r)throw new Error("Parameter nodeList is not defined");e.addEventListener("click",()=>{r.classList.toggle(t),n&&n()})};r.addToggle=t,r.addForEach=function(e,r,n,o=null){const i=[...document.querySelectorAll(e)],u=[...document.querySelectorAll(r)];if(!i)throw new Error("No triggers Found");if(!u)throw new Error("No nodeList Found");if(i.length!==u.length)throw new Error("Triggers and nodesList do Not have The same length");i.forEach(e=>{t(e,u.shift(),n,o)})},r.addFor=function(e,r,n,o=null){const i=document.querySelector(e),u=document.querySelector(r);if(!i)throw new Error(`No Trigger Found with class ${e} `);if(!u)throw new Error(`No nodeList Found with class ${r} `);t(i,u,n,o)}},function(e,r,t){"use strict";t.r(r);var n=t(0);Object(n.addFor)(".js-btn-menu",".js-nav-list","show-menu"),Object(n.addFor)(".js-btn-close",".js-nav-list","show-menu")}]);