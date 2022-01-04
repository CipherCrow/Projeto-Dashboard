const toggleMenu    = document.querySelector(".nav__toggle");
const body          = document.querySelector("body");
const navegacao     = document.querySelector(".navegacao");

function openMenu(){
    body.classList.toggle("open-menu");
    toggleMenu.classList.toggle("fa-bars");
    toggleMenu.classList.toggle("fa-times");
}

toggleMenu.addEventListener("click",openMenu);