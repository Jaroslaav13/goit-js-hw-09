import"./assets/modulepreload-polyfill-ec808ebb.js";const n="feedback-form-state",t=document.querySelector(".feedback-form"),r=t.querySelector("input"),c=t.querySelector("textarea");t.addEventListener("submit",e=>{e.preventDefault()});t.addEventListener("input",()=>{const e=r.value.trim(),o=c.value.trim(),a=`${e}, ${o}`;localStorage.setItem(n,a)});
//# sourceMappingURL=commonHelpers2.js.map
