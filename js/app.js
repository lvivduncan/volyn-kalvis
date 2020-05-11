// https://github.com/lvivduncan/levus-nav
{const e=document.querySelector("#levus-menu"),s=document.createElement("div");s.className="levus-wrapper";const t=e.querySelectorAll("li");function changeMenu(){window.innerWidth<1200?(e.classList.remove("desktop"),e.classList.add("mobile")):(e.classList.remove("mobile"),e.classList.add("desktop"))}function showMenu(){e.classList.contains("show")?e.classList.remove("show"):e.classList.add("show")}function showUl(e){e.stopPropagation(),e.target.classList.contains("parent")&&this.classList.toggle("show")}t.forEach(e=>e.childNodes.length>1?e.className="parent":""),window.addEventListener("resize",changeMenu),document.addEventListener("DOMContentLoaded",changeMenu),document.addEventListener("DOMContentLoaded",t=>e.append(s)),s.addEventListener("click",showMenu),t.forEach(e=>{e.addEventListener("click",showUl)})}

/* 
// https://github.com/lvivduncan/levus-modal
function levusModal(el,s){const t=document.querySelector(el),o=document.querySelector(s);t.addEventListener("click",e=>{e.stopPropagation(),o.classList="levus-modal active",document.body.classList="levus-body"}),document.body.addEventListener("click",e=>{o.classList="levus-modal",document.body.classList=""})}

// search
levusModal('#search','.search');

// phone
levusModal('#phone', '.phone');
*/