import"./assets/modulepreload-polyfill-ec808ebb.js";const r="feedback-form-state",o=document.querySelector(".feedback-form"),n=o.querySelector("input"),s=o.querySelector("textarea");window.addEventListener("DOMContentLoaded",()=>{const t=localStorage.getItem(r);if(t){const e=JSON.parse(t);n.value=e.email||"",s.value=e.text||""}});o.addEventListener("submit",t=>{t.preventDefault();const e=n.value.trim(),a=s.value.trim();e===""&&a===""?alert("Please fill out the form"):console.log({email:e,text:a}),localStorage.removeItem(r),o.reset()});o.addEventListener("input",()=>{const t=n.value.trim(),e=s.value.trim(),a=JSON.stringify({email:t,text:e});localStorage.setItem(r,a)});
//# sourceMappingURL=commonHelpers2.js.map
