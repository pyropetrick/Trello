!function(){function e(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},s=t.parcelRequire4193;null==s&&((s=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var s={id:e,exports:{}};return o[e]=s,t.call(s.exports,s,s.exports),s.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequire4193=s),s.register("cNVft",(function(t,o){e(t.exports,"btnAddTodo",(function(){return m})),e(t.exports,"btnDeleteAll",(function(){return g})),e(t.exports,"initStorage",(function(){return f})),e(t.exports,"addTodo",(function(){return L})),e(t.exports,"deleteAllCards",(function(){return h})),e(t.exports,"onWarningConfirm",(function(){return k})),e(t.exports,"onConfirm",(function(){return y}));var n=s("kfrop"),a=s("jzQFI");let r=!1,d=0,i=0,l=!1,c=[],u=[],p=[];const m=document.querySelector(".card__button-add-todo"),g=document.querySelector(".card__button-delete-all"),f=()=>{(0,a.getFromStorage)("todos")&&(c=(0,a.getFromStorage)("todos"),x(c,".todos-list")),(0,a.getFromStorage)("progress")&&(u=(0,a.getFromStorage)("progress"),x(u,".progress-list")),(0,a.getFromStorage)("done")&&(p=(0,a.getFromStorage)("done"),x(p,".done-list"))};function L(){r=!0,(0,n.showEditMenu)()}function h(){(0,n.showWarning)("Вы уверены что хотите удалить все выполненные задачи?"),l=!0}function k(){l?(p=[],x(p,".done-list"),(0,a.deleteFromStorage)("done")):N(i),(0,n.closeWarning)()}function _({target:e}){const t=+e.parentNode.parentNode.parentNode.getAttribute("id"),o=c.findIndex((({id:e})=>e===t));c.splice(o,1),x(c,".todos-list"),c.length?(0,a.addToStorage)({key:"todos",value:c}):(0,a.deleteFromStorage)("todos")}function b({target:e}){const t=+e.parentNode.parentNode.parentNode.getAttribute("id"),o=p.findIndex((({id:e})=>e===t));p.splice(o,1),x(p,".done-list"),p.length?(0,a.addToStorage)({key:"done",value:p}):(0,a.deleteFromStorage)("done")}function T({target:e}){const t=e.parentNode.parentNode.parentNode,o=+t.getAttribute("id");d=o;const s=t.querySelector(".tasks-list__item-title").innerHTML,a=t.querySelector(".tasks-list__item-desc").innerHTML;n.modalTitle.value=s,n.modalDesc.value=a,r=!1,(0,n.showEditMenu)()}function v(e,t){document.querySelector(t).innerText=e.length}function S({target:e}){const t=+e.parentNode.parentNode.parentNode.getAttribute("id"),o=u.findIndex((({id:e})=>e===t));p.push(u[o]),u.splice(o,1),x(u,".progress-list"),x(p,".done-list"),u.length?(0,a.addToStorage)({key:"progress",value:u}):(0,a.deleteFromStorage)("progress"),(0,a.addToStorage)({key:"done",value:p})}function M({target:e}){const t=+e.parentNode.parentNode.parentNode.getAttribute("id"),o=u.findIndex((({id:e})=>e===t));c.push(u[o]),u.splice(o,1),x(u,".progress-list"),x(c,".todos-list"),u.length?(0,a.addToStorage)({key:"progress",value:u}):(0,a.deleteFromStorage)("progress"),(0,a.addToStorage)({key:"todos",value:c})}function E({target:e}){const t=+e.parentNode.parentNode.getAttribute("id"),o=c.findIndex((({id:e})=>e===t));u.length>=6?(l=!1,i=o,(0,n.showWarning)(`Вы пытаетесь добавить ${u.length+1} карточку в рабочую область. Вы уверены что справитесь с таким количеством задач ? `)):N(o)}function N(e){u.push(c[e]),c.splice(e,1),x(c,".todos-list"),x(u,".progress-list"),c.length?(0,a.addToStorage)({key:"todos",value:c}):(0,a.deleteFromStorage)("todos"),(0,a.addToStorage)({key:"progress",value:u}),(0,n.closeWarning)()}function x(e,t){const o=document.querySelector(t);o.innerHTML="",e.forEach((({id:e,titleTask:n,description:s,time:a,colorItem:r,userName:d})=>{const i=document.createElement("li");i.classList.add("tasks-list__item"),i.setAttribute("id",e),i.setAttribute("draggable",!0),i.style.background=r;const l=document.createElement("div");l.classList.add("tasks-list__item-titles");const c=document.createElement("p");c.classList.add("tasks-list__item-title"),c.innerText=n;const u=document.createElement("p");u.classList.add("tasks-list__item-desc"),u.innerText=s;const p=document.createElement("p");p.classList.add("tasks-list__item-user"),p.innerText=d;const m=document.createElement("div");m.classList.add("tasks-list__item-actions");const g=document.createElement("div");if(g.classList.add("tasks-list__item-actions-editing"),".todos-list"===t){const e=document.createElement("button");e.classList.add("tasks-list__item-actions-edit"),e.classList.add("button-card"),e.innerHTML="Edit",e.addEventListener("click",T);const t=document.createElement("button");t.classList.add("tasks-list__item-actions-delete"),t.classList.add("button-card"),t.innerHTML="Delete",t.addEventListener("click",_);const o=document.createElement("button");o.classList.add("tasks-list__item-actions-jump"),o.classList.add("button-card"),o.innerHTML=">",o.addEventListener("click",E),g.append(e),g.append(t),m.append(g),m.append(o)}else if(".progress-list"===t){const e=document.createElement("button");e.classList.add("tasks-list__item-actions-back"),e.classList.add("button-card"),e.innerHTML="Back",e.addEventListener("click",M);const t=document.createElement("button");t.classList.add("tasks-list__item-actions-complete"),t.classList.add("button-card"),t.innerHTML="Complete",t.addEventListener("click",S),m.classList.add("progress-actions"),g.append(e),g.append(t),m.append(g)}else if(".done-list"===t){const e=document.createElement("button");e.classList.add("tasks-list__item-actions-delete"),e.classList.add("button-card"),e.innerHTML="Delete",e.addEventListener("click",b),i.style.background="#00ce1b",m.classList.add("done-actions"),g.append(e),m.append(g)}const f=document.createElement("p");f.classList.add("tasks-list__item-actions-time"),f.innerHTML=a,l.append(c),l.append(u),l.append(p),m.append(f),i.append(l),i.append(m),o.append(i)})),v(c,".todos-counter"),v(p,".done-counter"),v(u,".progress-counter")}function y(){if(r){let e={hour:"numeric",minute:"numeric"},t=new Date,o=function(){const e=Math.floor(256*Math.random()),t=Math.floor(256*Math.random()),o=Math.floor(256*Math.random());return`#${e.toString(16)}${t.toString(16)}${o.toString(16)}`}(),s={id:+`${Math.floor(10*Math.random())}${Math.floor(10*Math.random())}${Math.floor(10*Math.random())}${Math.floor(10*Math.random())}${Math.floor(10*Math.random())}${Math.floor(10*Math.random())}`,titleTask:n.modalTitle.value,description:n.modalDesc.value,time:t.toLocaleString("ru",e),colorItem:o,userName:n.currentUserName};c.push(s)}else{let e=c.findIndex((e=>e.id===d));c[e].titleTask=n.modalTitle.value,c[e].description=n.modalDesc.value,c[e].userName=n.currentUserName}x(c,".todos-list"),(0,a.addToStorage)({key:"todos",value:c}),n.modalWrapper.classList.remove("active"),n.modalTitle.value="",n.modalDesc.value=""}})),s("cNVft")}();
//# sourceMappingURL=index.22971f0b.js.map
