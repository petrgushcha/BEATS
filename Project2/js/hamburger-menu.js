const openButten = document.querySelector("#openOverlay");
const close = document.querySelector("#close")
const hamburgerMenu = document.querySelector("#hamburgerMenu")

openButten.addEventListener("click", e =>{
    e.preventDefault();

    hamburgerMenu.style.display ='flex';
})

close.addEventListener("click", e =>{
    e.preventDefault();

    hamburgerMenu.style.display ='none';
})