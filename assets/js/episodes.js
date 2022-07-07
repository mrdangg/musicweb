"use strict";
import { urlSongs } from "./songs.js";
import { content } from "./content_sesson.js";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Header scroll
window.addEventListener("scroll", () => {
  const nav = $("#header .sub-header");

  nav.classList.toggle("scrollNav", window.scrollY > 0);
});

const renderview = {
  render() {
    const listAll = $('#content .list-seosonsALL');
    const titles = content.map((value) => {
      return `<div class="item-season show">
      <div class="img-season">
        <img src="${value.img}" alt="" />
      </div>
      <div class="tag">
        <a href="">music</a>
      </div>
      <div class="infomation-seation">
        <h4>${value.title}</h4>
        <p>${value.time}</p>
        <div class="interactive">
          <ul>
            <li>
              <i class="fa-solid fa-heart"></i>
              <span>2371</span>
            </li>
            <li>
              <i class="fa-solid fa-message"></i>
              <span>88 Comments</span>
            </li>
          </ul>
        </div>

        <div class="controls-music">
          <div class="iconplay">
            <i class="fa-solid fa-play"></i>
          </div>
          <div class="icon-pause close">
            <i class="fa-solid fa-pause"></i>
          </div>
          <div class="progress">
            <input type="range"value="0" min="0" max="100" class="progess2" step="1">
            <audio src=""></audio>
          </div>
          <div class="volumn">
            <i class="fa-solid fa-volume-high"></i>
            <div class="volum-length">
                <input type="range"value="0" min="0" max="1" class="progess2" step="0.1">
            </div>
          </div>
        </div>
      </div>
    </div>`;
    }, []);

    listAll.innerHTML = titles.join('');
  },
  start() {
    this.render();
  },
};

renderview.start();

const audios = $$("#content .progress audio");

const appmusic = {
  controlstart() {
    const play = $$("#content .iconplay");
    const pause = $$("#content .icon-pause");
    const length = play.length;
    for (let i = 0; i < length; i++) {
      play[i].onclick = () => {
        play[i].classList.add("close");
        pause[i].classList.remove("close");
        audios[i].play();
      };
      pause[i].onclick = () => {
        pause[i].classList.add("close");
        play[i].classList.remove("close");
        audios[i].pause();
      };
    }
  },
  songsList() {
    for (let i = 0; i < audios.length; i++) {
      audios[i].src = urlSongs[i];
    }
  },
  progress() {
    const lengthProgress = $$("#content .progress input");

    for (let i = 0; i < lengthProgress.length; i++) {
      audios[i].ontimeupdate = () => {
        if (audios[i].duration) {
          const updatLength = Math.floor(
            (audios[i].currentTime / audios[i].duration) * 100
          );
          lengthProgress[i].value = updatLength;
        }

        lengthProgress[i].onchange = (e) => {
          const seekTime = (audios[i].duration / 100) * e.target.value;
          audios[i].currentTime = seekTime;
        };
      };
    }
  },
  volumn() {
    const volumn = $$("#content .volum-length input ");
    for (let i = 0; i < volumn.length; i++) {
      volumn[i].value = 0.5;
      audios[i].volume = volumn[i].value;
      volumn[i].onchange = () => {
        audios[i].volume = volumn[i].value;
      };
    }
  },
  start() {
    this.controlstart();
    this.songsList();
    this.progress();
    this.volumn();
  },
};

appmusic.start();

// show hide list music
const show = {
  showList() {
    const ListMusic = $$("#content .category-content li ");
    const itemMusic = $$("#content .item-season");

    for (let i = 0; i < ListMusic.length; i++) {
      ListMusic[i].onclick = () => {
        if (i == 0) {
          itemMusic[0].style.display = "grid";
          itemMusic[1].style.display = "grid";
          itemMusic[2].style.display = "grid";
          itemMusic[3].style.display = "grid";
          itemMusic[4].style.display = "grid";
        } else if (i == 1) {
          itemMusic[0].style.display = "grid";
          itemMusic[1].style.display = "grid";
          itemMusic[2].style.display = "none";
          itemMusic[3].style.display = "none";
          itemMusic[4].style.display = "none";
        } else if (i == 2) {
          itemMusic[0].style.display = "none";
          itemMusic[1].style.display = "none";
          itemMusic[2].style.display = "grid";
          itemMusic[3].style.display = "grid";
          itemMusic[4].style.display = "none";
        } else if (i == 3) {
          itemMusic[0].style.display = "none";
          itemMusic[1].style.display = "none";
          itemMusic[2].style.display = "none";
          itemMusic[3].style.display = "none";
          itemMusic[4].style.display = "grid";
        }
      };
    }
  },
  start() {
    this.showList();
  },
};
show.start();



function show1() {
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

show1();
