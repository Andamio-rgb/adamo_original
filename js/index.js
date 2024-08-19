var abrir = document.querySelector("#abrir");
var cerrar = document.querySelector("#cerrar");
var nav = document.querySelector(".link");

abrir.addEventListener("click", ()=>{
    nav.classList.add("mostrar");
})

cerrar.addEventListener("click", ()=>{
    nav.classList.remove("mostrar");
})