"use strict";
import { blog,content } from "./content_sesson.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// HEADER scroll

window.addEventListener("scroll", () => {
  const nav = $("#header .sub-header");

  nav.classList.toggle("scrollNav", window.scrollY > 0);
});


const renderview = {
    view() {
        const potsblogs = $('#content .pots-blog');
        const itemblogs = blog.map((value) => {
            return `
            <div class="item-blog">
              <div class="img-blog">
                <img src="${value.img}" alt="">
              </div>
              <div class="tags-blog">
                  <h6>${
                    content[0].time
                  }</h6>
              </div>
              <div class="content-blog">
                <h4>${value.title}</h4>
                <h6>By <a href="">${value.author}</a></h6>
                <p>${value.paragrap}</p>
                <a href="">Read More</a>
              </div>
          </div>
            `
        },[])

        potsblogs.innerHTML = itemblogs.join('');
    },
    start() {
        this.view();
    }
}

renderview.start();