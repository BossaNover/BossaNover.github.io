let hamburger = document.querySelector('.hamburger-menu-link');
let close = document.querySelector('.close');
let header = document.querySelector('.header'); // здесь ставим точку, т.к.м.б. ещё и id, кроме класса.

const clicker = () => {
  header.classList.toggle('header_fullscreen'); //здесь точки не надо ставить, т.к. метод для класса -classList
};  //toggle - это переключатель. Он заменяет методы add и remove.

hamburger.addEventListener('click', clicker); 
close.addEventListener('click', clicker);


let burgersCompHover = document.querySelector('.burgers-comp__hover');
console.log(burgersCompHover.elements);

let burgersComp = document.querySelector('.burgers-comp');

console.log(burgersComp.elements);

//let burgersCompClose = document.querySelector('.burgers-comp__close');
//let burgersCompHover = document.querySelector('.burgers-comp__hover');

//burgersCompClose.style.offsetHeight = "0px";


//burgersCompClose.addEventListener('click', function (e) {   
//  burgersCompHover.offsetHeight = '0px';       // --так не работает, почему -непонятно. style.offsetHeight тоже.
//} )

//console.log(burgersCompHover.offsetHeight); - а это свойство работает (выше почему-то нет, только на экран выводит)