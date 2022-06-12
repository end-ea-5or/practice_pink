let navMain = document.querySelector('.main-nav');
let navToggle = navMain.querySelector('.main-nav__toggle');
// navMain.classList.remove('main-nav--nojs');
navToggle.addEventListener('click', () => {
  //navMain.classList.toggle('main-nav--closed');
  navMain.classList.toggle('main-nav--opened');
});
