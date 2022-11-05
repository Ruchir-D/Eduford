/* To Toggle the menu on and off */

const cross = document.querySelector('.fa-xmark');
const menu = document.querySelector('.fa-bars');
const navLinks = document.querySelector('.nav-links');


menu.addEventListener('click', ()=>{
    navLinks.style.right = '0px';
});

cross.addEventListener('click', ()=>{
    navLinks.style.right = '-200px';
    console.log('clicked');
});


