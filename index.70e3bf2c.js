!function(){const e=document.querySelector(".delete-all__btn"),t={hour:"numeric",minute:"numeric"};function a(){const e=document.querySelector(".done-card__card-list"),a=document.createElement("li");a.classList.add("progress-card__card-item");const n=document.createElement("div");n.classList.add("card-item__btn--wrapper");const c=document.createElement("button");c.classList.add("card-item__btn-back"),c.classList.add("card-item__btn"),c.textContent="delete";const d=document.createElement("div");d.classList.add("card-item__descr--wrapper");const s=document.createElement("p");s.classList.add("card-item__title");const r=document.createElement("span");s.classList.add("card-item__stat-title"),r.textContent="Title: ";const o=document.createElement("p");o.classList.add("card-item__descr");const m=document.createElement("span");m.classList.add("card-item__stat-descr"),m.textContent="Description: ";const i=document.createElement("div");i.classList.add("card-item__footer--wrapper");const p=document.createElement("p");p.classList.add("card-item__footer-user");const l=document.createElement("span");l.classList.add("card-item__footer-user-text"),l.textContent="user: ";const _=document.createElement("p");_.classList.add("card-item__footer-date");const u=document.createElement("span");u.classList.add("card-item__footer-user-date"),u.innerText=`${new Intl.DateTimeFormat("ru",t).format(new Date)}`,n.append(c),d.append(s),s.append(r),d.append(o),o.append(m),i.append(p),p.append(l),i.append(_),_.append(u),a.append(n),a.append(d),a.append(i),e.append(a)}document.addEventListener("click",(e=>{if(e.target.matches(".card-item__btn-complt"))return a()}),!1),e.addEventListener("click",a)}();
//# sourceMappingURL=index.70e3bf2c.js.map
