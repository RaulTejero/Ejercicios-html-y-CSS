const $button = document.querySelector("#button");
const $caja = document.querySelector("#caja4");


$button.addEventListener("click",()=>{
    $caja.className = "item4";
    $caja.textContent = "Ya has pulsado";
})