var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=e.parcelRequire4193;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var s={id:e,exports:{}};return t[e]=s,i.call(s.exports,s,s.exports),s.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequire4193=i);var s=i("bsOZu");let a=!1,o=0;const d=document.querySelector(".item-todo__button-add-todo"),l=[];function c({target:e}){const t=+e.parentNode.parentNode.parentNode.getAttribute("id"),n=l.findIndex((({id:e})=>e===t));l.splice(n,1),u()}function r({target:e}){const t=e.parentNode.parentNode.parentNode,n=+t.getAttribute("id");o=n;const i=t.querySelector(".tasks-list__item-title").innerHTML,d=t.querySelector(".tasks-list__item-desc").innerHTML;s.modalTitle.value=i,s.modalDesc.value=d,a=!1,(0,s.showEditMenu)()}function u(e=l){const t=document.querySelector(".tasks-list");t.innerHTML="",e.forEach((({id:e,titleTask:n,description:i,time:s,colorItem:a})=>{const o=document.createElement("li");o.classList.add("tasks-list__item"),o.setAttribute("id",e),o.setAttribute("draggable",!0),o.style.background=a;const d=document.createElement("div");d.classList.add("tasks-list__item-titles");const l=document.createElement("p");l.classList.add("tasks-list__item-title"),l.innerText=n;const u=document.createElement("p");u.classList.add("tasks-list__item-desc"),u.innerText=i;const m=document.createElement("p");m.classList.add("tasks-list__item-user"),m.innerText="";const p=document.createElement("div");p.classList.add("tasks-list__item-actions");const _=document.createElement("div");_.classList.add("tasks-list__item-actions-editing");const f=document.createElement("button");f.classList.add("tasks-list__item-actions-edit"),f.innerHTML="Edit",f.addEventListener("click",r);const L=document.createElement("button");L.classList.add("tasks-list__item-actions-delete"),L.innerHTML="Delete",L.addEventListener("click",c);const k=document.createElement("button");k.classList.add("tasks-list__item-actions-jump"),k.innerHTML=">";const v=document.createElement("p");v.classList.add("tasks-list__item-actions-time"),v.innerHTML=s,d.append(l),d.append(u),d.append(m),_.append(f),_.append(L),p.append(_),p.append(k),p.append(v),o.append(d),o.append(p),t.append(o)})),document.querySelector(".item-todo__header-counter").innerHTML=l.length}d.addEventListener("click",(function(){a=!0,(0,s.showEditMenu)()})),s.modalBtnConfirm.addEventListener("click",(function(){if(a){let e={hour:"numeric",minute:"numeric"},t=new Date,n=function(){const e=Math.floor(256*Math.random()),t=Math.floor(256*Math.random()),n=Math.floor(256*Math.random());return`#${e.toString(16)}${t.toString(16)}${n.toString(16)}`}(),i={id:Date.now(),titleTask:s.modalTitle.value,description:s.modalDesc.value,time:t.toLocaleString("ru",e),colorItem:n};l.push(i)}else{let e=l.findIndex((e=>e.id===o));l[e].titleTask=s.modalTitle.value,l[e].description=s.modalDesc.value}u(),s.modalWrapper.classList.remove("active"),s.modalTitle.value="",s.modalDesc.value=""}));
//# sourceMappingURL=index.3c56eead.js.map
