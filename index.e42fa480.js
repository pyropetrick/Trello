function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequire4193;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){r[e]=t},t.parcelRequire4193=o),o.register("bsOZu",(function(t,n){e(t.exports,"modalTitle",(function(){return r})),e(t.exports,"modalDesc",(function(){return o})),e(t.exports,"modalBtnConfirm",(function(){return u})),e(t.exports,"modalBtnCancel",(function(){return i})),e(t.exports,"modalWrapper",(function(){return c})),e(t.exports,"userList",(function(){return s})),e(t.exports,"currentUserName",(function(){return l})),e(t.exports,"showEditMenu",(function(){return a})),e(t.exports,"onCancel",(function(){return d})),e(t.exports,"setItem",(function(){return f})),e(t.exports,"updateTrelloTime",(function(){return p})),e(t.exports,"getListUsers",(function(){return m}));const r=document.querySelector(".modal__input-title"),o=document.querySelector(".modal__input-description "),u=document.querySelector(".modal__btn-confirm"),i=document.querySelector(".modal__btn-cancel"),c=document.querySelector(".modal__wrapper"),s=document.querySelector(".user__list");let l="";const a=()=>{c.classList.add("active")},d=()=>{c.classList.remove("active"),o.value="",r.value=""};function f({target:e}){const t=e.value;l=e.children[t-1].innerHTML,console.log(l)}function p(){let e=new Date;document.querySelector(".header__time").innerText=e.toLocaleString("ru",{hour:"numeric",minute:"numeric"})}async function m(){console.log("start");const e=await fetch("https://jsonplaceholder.typicode.com/users");if(200===e.status){!function(e){e.forEach((({id:e,username:t})=>{const n=document.createElement("option");n.classList.add("optionUser"),n.value=e,n.innerHTML=t,s.append(n)}))}(await e.json())}}})),o("bsOZu");
//# sourceMappingURL=index.e42fa480.js.map
