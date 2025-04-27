 const nv = document.querySelector(".nav");
 const men = document.querySelector(".menu__ham img");

 men.addEventListener("click", ()=>{
    nv.classList.toggle(`active`);
 });