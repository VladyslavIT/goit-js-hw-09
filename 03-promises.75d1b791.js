!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},n.parcelRequired7c6=r);var i=r("iU1Pc"),a=document.querySelector(".form"),f={};function l(e,n){return new Promise((function(o,t){var r=Math.random()>.3;setTimeout((function(){r?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}!function(){var e=localStorage.getItem("formInfo");if(e){var n=JSON.parse(e);for(var o in n)n.hasOwnProperty(o)&&(a[o].value=n[o]||"")}}();a.addEventListener("input",(function(e){f[e.target.name]=e.target.value,localStorage.setItem("formInfo",JSON.stringify(f))})),a.addEventListener("submit",(function(n){n.preventDefault();for(var o=+f.delay,t=+f.step,r=+f.amount,a=1;a<=r;a+=1)l(a,o).then((function(n){var o=n.position,t=n.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(n){var o=n.position,t=n.delay;e(i).Notify.failure("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))})),o+=t;localStorage.removeItem("formInfo")}))}();
//# sourceMappingURL=03-promises.75d1b791.js.map
