!function(){function t(t,e,n,s){Object.defineProperty(t,e,{get:n,set:s,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},s={},i=e.parcelRequire4193;null==i&&((i=function(t){if(t in n)return n[t].exports;if(t in s){var e=s[t];delete s[t];var i={id:t,exports:{}};return n[t]=i,e.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){s[t]=e},e.parcelRequire4193=i),i.register("cNVft",(function(e,n){t(e.exports,"btnAddTodo",(function(){return p})),t(e.exports,"btnDeleteAll",(function(){return m})),t(e.exports,"addTodo",(function(){return f})),t(e.exports,"deleteAllCards",(function(){return g})),t(e.exports,"onWarningConfirm",(function(){return L})),t(e.exports,"onConfirm",(function(){return M}));var s=i("kfrop");let o=!1,d=0,a=0,r=!1;const c=[],l=[];let u=[];const p=document.querySelector(".card__button-add-todo"),m=document.querySelector(".card__button-delete-all");function f(){o=!0,(0,s.showEditMenu)()}function g(){(0,s.showWarning)("Вы уверены что хотите удалить все выполненные задачи?"),r=!0}function L(){r?(u=[],x(u,".done-list")):h(a),(0,s.closeWarning)()}function _({target:t}){const e=+t.parentNode.parentNode.parentNode.getAttribute("id"),n=c.findIndex((({id:t})=>t===e));c.splice(n,1),x(c,".todos-list")}function b({target:t}){const e=+t.parentNode.parentNode.parentNode.getAttribute("id"),n=u.findIndex((({id:t})=>t===e));u.splice(n,1),x(u,".done-list")}function k({target:t}){const e=t.parentNode.parentNode.parentNode,n=+e.getAttribute("id");d=n;const i=e.querySelector(".tasks-list__item-title").innerHTML,a=e.querySelector(".tasks-list__item-desc").innerHTML;s.modalTitle.value=i,s.modalDesc.value=a,o=!1,(0,s.showEditMenu)()}function E(t,e){document.querySelector(e).innerText=t.length}function N({target:t}){const e=+t.parentNode.parentNode.parentNode.getAttribute("id"),n=l.findIndex((({id:t})=>t===e));u.push(l[n]),l.splice(n,1),x(l,".progress-list"),x(u,".done-list")}function T({target:t}){const e=+t.parentNode.parentNode.parentNode.getAttribute("id"),n=l.findIndex((({id:t})=>t===e));c.push(l[n]),l.splice(n,1),x(l,".progress-list"),x(c,".todos-list")}function v({target:t}){const e=+t.parentNode.parentNode.getAttribute("id"),n=c.findIndex((({id:t})=>t===e));l.length>=6?(r=!1,a=n,(0,s.showWarning)("Вы пытаетесь добавить 7 карточку в рабочую область. Вы уверены что справитесь с таким количеством задач ? ")):h(n)}function h(t){l.push(c[t]),c.splice(t,1),x(c,".todos-list"),x(l,".progress-list"),(0,s.closeWarning)()}function x(t,e){const n=document.querySelector(e);n.innerHTML="",t.forEach((({id:t,titleTask:s,description:i,time:o,colorItem:d,userName:a})=>{const r=document.createElement("li");r.classList.add("tasks-list__item"),r.setAttribute("id",t),r.setAttribute("draggable",!0),r.style.background=d;const c=document.createElement("div");c.classList.add("tasks-list__item-titles");const l=document.createElement("p");l.classList.add("tasks-list__item-title"),l.innerText=s;const u=document.createElement("p");u.classList.add("tasks-list__item-desc"),u.innerText=i;const p=document.createElement("p");p.classList.add("tasks-list__item-user"),p.innerText=a;const m=document.createElement("div");m.classList.add("tasks-list__item-actions");const f=document.createElement("div");if(f.classList.add("tasks-list__item-actions-editing"),".todos-list"===e){const t=document.createElement("button");t.classList.add("tasks-list__item-actions-edit"),t.classList.add("button-card"),t.innerHTML="Edit",t.addEventListener("click",k);const e=document.createElement("button");e.classList.add("tasks-list__item-actions-delete"),e.classList.add("button-card"),e.innerHTML="Delete",e.addEventListener("click",_);const n=document.createElement("button");n.classList.add("tasks-list__item-actions-jump"),n.classList.add("button-card"),n.innerHTML=">",n.addEventListener("click",v),f.append(t),f.append(e),m.append(f),m.append(n)}else if(".progress-list"===e){const t=document.createElement("button");t.classList.add("tasks-list__item-actions-back"),t.classList.add("button-card"),t.innerHTML="Back",t.addEventListener("click",T);const e=document.createElement("button");e.classList.add("tasks-list__item-actions-complete"),e.classList.add("button-card"),e.innerHTML="Complete",e.addEventListener("click",N),f.append(t),f.append(e),m.append(f)}else if(".done-list"===e){const t=document.createElement("button");t.classList.add("tasks-list__item-actions-delete"),t.classList.add("button-card"),t.innerHTML="Delete",t.addEventListener("click",b),r.style.background="#00ce1b",f.append(t),m.append(f)}const g=document.createElement("p");g.classList.add("tasks-list__item-actions-time"),g.innerHTML=o,c.append(l),c.append(u),c.append(p),m.append(g),r.append(c),r.append(m),n.append(r)})),E(c,".todos-counter"),E(u,".done-counter"),E(l,".progress-counter")}function M(){if(o){let t={hour:"numeric",minute:"numeric"},e=new Date,n=function(){const t=Math.floor(256*Math.random()),e=Math.floor(256*Math.random()),n=Math.floor(256*Math.random());return`#${t.toString(16)}${e.toString(16)}${n.toString(16)}`}(),i={id:Date.now(),titleTask:s.modalTitle.value,description:s.modalDesc.value,time:e.toLocaleString("ru",t),colorItem:n,userName:s.currentUserName};c.push(i)}else{let t=c.findIndex((t=>t.id===d));c[t].titleTask=s.modalTitle.value,c[t].description=s.modalDesc.value,c[t].userName=s.currentUserName}x(c,".todos-list"),s.modalWrapper.classList.remove("active"),s.modalTitle.value="",s.modalDesc.value=""}})),i("cNVft")}();
//# sourceMappingURL=index.d57a0632.js.map