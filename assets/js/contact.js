"use strict";
// header show

const $  = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Header scroll
window.addEventListener('scroll',() => {
    const nav = $('#header .sub-header');

    nav.classList.toggle('scrollNav',window.scrollY > 0);
})



function show() {
    const listinta = $$('#footer .img-instagram img');
    const slider = $('#slider');
    const close = $('#slider .close-slider')
    for(let i = 0; i < listinta.length; i++) {
        listinta[i].onclick = () => {
            slider.style.display = 'flex';
        }
    }

    close.onclick = () => {
        slider.style.display = 'none';
        slider.style.transition = 'all .2s';
    }
}

show();