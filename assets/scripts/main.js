/*=============== LOADER ===============*/


/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

// Menu show
// validando se nav-toggle existe
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// Menu hidden
// validando se nav-close existe

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*====== REMOVE MENU MOBILE ======*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // Quando clicar em algum nav__link, remove o show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*====== CHANGE BACKGROUND HEADER ======*/
function scrollHeader(){
    const header = document.getElementById('header')
    // Quando o scroll for maior que 150vh, adiciona a classe scrol-header à tag header
    if(this.scrollY >= 150) header.classList.add('scroll-header');else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader)

/*====== MIXITUP FILTER PRODUCTS ======*/


/* Filtro padrao dos Produtos */ 


/* Link para ativar os products */ 


/*====== SHOW SCROLL UP ======*/ 


/*====== SCROLL SECTIONS ACTIVE LINK ======*/