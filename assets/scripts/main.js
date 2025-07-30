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

/*======  FILTER PRODUCTS ======*/
  const buttons = document.querySelectorAll('[data-filter]');
const items = document.querySelectorAll('.products__card');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    items.forEach(item => {
      const category = item.dataset.category;
      const shouldShow = filter === 'all' || category === filter;

      if (shouldShow) {
        // Exibe e força repaint antes de remover a classe hide
        item.style.display = 'block';
        setTimeout(() => item.classList.remove('hide'), 10);
      } else {
        // Aplica a transição
        item.classList.add('hide');
        // Aguarda a transição terminar antes de esconder completamente
        setTimeout(() => item.style.display = 'none', 300);
      }
    });
  });
});


/* Link para ativar os products */ 
const linkProducts = document.querySelectorAll('.products__item');

function activeProducts() {
    linkProducts.forEach(l => l.classList.remove('active-product'))
    this.classList.add('active-product')
}

linkProducts.forEach(l=>l.addEventListener('click', activeProducts))

/*====== SHOW SCROLL UP ======*/ 
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  //Quando o scroll for maior que 350vh, adiciona a classe show-scroll à tag com  a classse scroll-top
  if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp)

/*====== SCROLL SECTIONS ACTIVE LINK ======*/

const sections = document.querySelectorAll('section[id]')

function scrollAtive(){
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
     sectionTop = current.offsetTop - 58,
     sectionId = current.getAttribute('id')

     if(scrollY > sectionTop && scrollY <= scetionTop + sectionHeight)
      document.querySelector(`.nav__menu a[href*='${sectionId}']`).classList.add('active-link')
    else
      document.querySelector(`.nav__menu a[href*='${sectionId}']`).classList.remove('active-link')
    })
}