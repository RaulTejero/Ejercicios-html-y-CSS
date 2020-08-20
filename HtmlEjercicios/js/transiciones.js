const $button = document.querySelector("#button");
const $caja = document.querySelector("#caja4");


$button.addEventListener("click",()=>{
    $caja.className = "animacion";
    $caja.textContent = "Activado";
    $caja.style.paddingTop = "40px";
    $caja.style.backgroundColor = "green";
})