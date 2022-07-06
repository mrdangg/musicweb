"use strict";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

import { listsAlbum, content,category } from "./content_sesson.js";

// Header scroll
window.addEventListener("scroll", () => {
  const nav = $("#header .sub-header");

  nav.classList.toggle("scrollNav", window.scrollY > 0);
});

const renderview = {
  renderMusic() {
    const listsmusic = $("#content .list-music");
    const itemAblum = listsAlbum.map((value) => {
      return `
              <div class="item-music">
                      <div class="photo-music">
                          <a href="music.html">
                              <img src="${value.img}" alt="">
                          </a>
                          <div class="tags">
                              <a href="music.html">
                                  ${value.titleTag}
                              </a>
                          </div>
                          <div class="icon-music">
                              <img src="${value.icon}" alt="">
                          </div>
                      </div>
                      <div class="describe-photo">
                          <h6>${content[0].time}</h6>
                          <h3>${value.textPhoto}</h3>
                          <ul class="list-interactive">
                              <li>
                                  <i class="fa-solid fa-heart"></i>
                                  <span>2371</span>
                              </li>
                              <li><a href="#">
                                  <i class="fa-solid fa-message"></i>88 Comments
                              </a></li>
                          </ul>
                      </div>
                  </div>
              `;
    }, []);

    listsmusic.innerHTML = itemAblum.join("");
  },renderCategory() {
    const category1 = $("#content .list-category");
    const listcategory = category.map((value) => {
      return `
            <!-- item ${value.id} -->
            <div class="item-category">
            <img src="${value.img}" alt="">
            <div class="tags-category">
                <h6>${value.tags}</h6>
            </div>
            <div class="icon-category-weekly">
                <img src="${listsAlbum[0].icon}" alt="">
            </div>
            <div class="desricbe-category">
                <h4>${value.title}</h4>
            </div>
                </div>
            `;
    }, []);

    category1.innerHTML = listcategory.join('');
  },
  start() {
    this.renderMusic();
    this.renderCategory();
  },
};

renderview.start();

// like pots

function like_pots() {
  const link = $$("#content .list-interactive li:nth-child(1) i");
  const numberLike = $$("#content .list-interactive li:nth-child(1) span");

  for (let i = 0; i < link.length; i++) {
    link[i].onclick = () => {
      link[i].classList.toggle("like");
      if (link[i].closest(".like") == null) {
        numberLike[i].innerText = parseInt(numberLike[i].innerText) - 1;
        alert("Ôi! Không Đừng mà");
      } else {
        numberLike[i].innerText = parseInt(numberLike[i].innerText) + 1;
        alert("Bạn đã Thả tim thành công ");
      }
    };
  }
}

like_pots();

var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 3000);

// show img footer

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
