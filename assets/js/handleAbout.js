"use strict";
// header show

const $  = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Header scroll
window.addEventListener('scroll',() => {
    const nav = $('#header .sub-header');

    nav.classList.toggle('scrollNav',window.scrollY > 0);
})


// auto show footer 
var counter = 1;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, 3000);

// footer

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


//count number 

function countNumber () {
    const counters = $$('#content .item-stream li:nth-child(1) span');
    const speed = 200;

    counters.forEach(element => {
        const updateCount = () => {
            const target = +element.getAttribute('data-target');
            const count = +element.innerText;

            const jumpTime = Math.floor(target/speed);


            if(count < target) {
                element.innerText = count + jumpTime;
                setTimeout(updateCount,6);
            }else {
                count.innerText = target;
            }
        }

        updateCount();
    });

}

countNumber();



