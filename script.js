let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    menu.classList.toggle('open');
}

const sr = ScrollReveal ({
    distance: '40px',  
    duration: 2500,
    reset: true
})

sr.reveal('.logo',{delay:200, origin: 'left'});
sr.reveal('.navbar',{delay:400, origin: 'top'});
sr.reveal('.menu-btn',{delay:520, origin: 'right'});

sr.reveal('.home-text span',{delay:600, origin: 'top'});
sr.reveal('.home-text h1',{delay:610, origin: 'left'});
sr.reveal('.home-text p',{delay:740, origin: 'right'});
sr.reveal('.main-btn',{delay:800, origin: 'left'});

sr.reveal('.share',{delay:400, origin: 'bottom'});
sr.reveal('.home-img',{delay:1000, origin: 'right'});




