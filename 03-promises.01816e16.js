function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var i=r("eWCmQ");const l=document.querySelector(".form"),a={};function s(e,t){return new Promise(((o,n)=>{const r=Math.random()>.3;setTimeout((()=>{r?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}!function(){const e=localStorage.getItem("formInfo");if(e){const t=JSON.parse(e);for(const e in t)t.hasOwnProperty(e)&&(l[e].value=t[e]||"")}}();l.addEventListener("input",(e=>{a[e.target.name]=e.target.value,localStorage.setItem("formInfo",JSON.stringify(a))})),l.addEventListener("submit",(t=>{t.preventDefault();let o=+a.delay;const n=+a.step,r=+a.amount;for(let t=1;t<=r;t+=1)s(t,o).then((({position:t,delay:o})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`)})).catch((({position:t,delay:o})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`)})),o+=n;localStorage.removeItem("formInfo")}));
//# sourceMappingURL=03-promises.01816e16.js.map