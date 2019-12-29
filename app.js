let hamburger = document.querySelector('.hamburger-menu-link');
let close = document.querySelector('.close');
let header = document.querySelector('.header'); // здесь ставим точку, т.к.м.б. ещё и id, кроме класса.

const clicker = () => {
  header.classList.toggle('header_fullscreen'); //здесь точки не надо ставить, т.к. метод для класса -classList
};  //toggle - это переключатель. Он заменяет методы add и remove.

hamburger.addEventListener('click', clicker); 
close.addEventListener('click', clicker);
