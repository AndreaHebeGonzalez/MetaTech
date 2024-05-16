const abrirMenu = document.querySelector('.header__menu-abrir');
const cerrarMenu = document.querySelector('.navbar__menu-cerrar');
const navegador = document.querySelector('.navbar');

eventListeners();
function eventListeners() {
    abrirMenu.addEventListener('click', abrir);
    cerrarMenu.addEventListener('click', cerrar);
}

function abrir() {
    navegador.style.left = '-2.6%';
    
}

function cerrar() {
    navegador.style.left = '-100%';
}
