let nav = document.querySelector(".nav");
let header = document.querySelector("header")
let quemBtn = document.querySelector("#quemLink")
let depoimentosBtn = document.querySelector("#depoimentosLink")
let contatosBtn = document.querySelector("#contatosLink")
let status = false
let html = document.querySelector("html");
let btnNavOpen = document.getElementById('btnNavOpen')
btnNavOpen.addEventListener('click', () => {
    nav.classList.toggle('show');
    html.classList.toggle('scroll')
    console.log(header.clientWidth);
})
quemBtn.addEventListener('click', () => {
    nav.classList.toggle('show');
    if(header.clientWidth < 650)
    html.classList.toggle('scroll')
})
depoimentosBtn.addEventListener('click', () => {
    nav.classList.toggle('show');
    if(header.clientWidth < 650)
    html.classList.toggle('scroll')
})
contatosBtn.addEventListener('click', () => {
    nav.classList.toggle('show');
    if(header.clientWidth < 650)
    html.classList.toggle('scroll')
})