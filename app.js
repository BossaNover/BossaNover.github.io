var hamburger = document.querySelector('.hamburger-menu-link');

console.log(hamburger);

  hamburger.addEventListener('click', (event)=> {
    console.log(event.type);
    console.log(event.preventDefault);
    
   var header = document.querySelector('.header');
    console.log(header);
  })