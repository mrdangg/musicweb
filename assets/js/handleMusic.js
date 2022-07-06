"use strict";
import { urlSongs } from "./songs.js";
import { guets_member } from "./content_sesson.js";

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// Header scroll
window.addEventListener("scroll", () => {
  const nav = $("#header .sub-header");

  nav.classList.toggle("scrollNav", window.scrollY > 0);
});

function show() {
  const showfooter = $$("#footer .img-instagram img");
  const showimg1 = $("#slider");
  var counter = 1;
  setInterval(function () {
    const inputCheck = (document.getElementById(
      "radio" + counter
    ).checked = true);
    counter++;
    if (counter > 4) {
      counter = 1;
    }
  }, 3000);
  for (let i = 0; i < showfooter.length; i++) {
    showfooter[i].onclick = function () {
      showimg1.classList.add("open");
      showimg1.style.transform = "translateY(0)";
      showimg1.style.transition = "all 2s linear ";
    };
  }

  function close() {
    showimg1.onclick = function () {
      showimg1.classList.remove("open");
    };
  }

  close();
}

show();

// list Songs

// header play music

const playmusic = () => {
  const urlMusic = $("#header .audio-length-music audio");
  function play_pause() {
    const constrols = $$("#header .control-pp i");

    for (let i = 0; i < constrols.length; i++) {
      constrols[i].onclick = (e) => {
        if (e.target.closest(".fa-solid.fa-play")) {
          e.target.style.display = "none";
          constrols[1].style.display = "block";
          urlMusic.play();
          // urlMusic.ontimeupdate = () => {
          //     console.log(urlMusic.currentTime);
          // }

          // console.log(urlMusic.duration)
        } else {
          e.target.style.display = "none";
          constrols[0].style.display = "block";
          urlMusic.pause();
        }
      };

      // way 2
      // constrols[i].onclick = () => {
      //     if(i == 0 ) {
      //         constrols[0].style.display = 'none';
      //         constrols[1].style.display = 'block';
      //     }else {
      //         constrols[0].style.display = 'block';
      //         constrols[1].style.display = 'none';
      //     }
      // }
    }
  }

  function render_music() {
    urlMusic.src = urlSongs[0];
  }

  // lấy ra thời gian của bài hát / 100 sau đó lấy cái giây đó
  // set cho value  cứ mỗi 3.6s thì set 1 lần

  function progress() {
    const lengthProgress = $(
      '#header .audio-length-music input[type ="range"]'
    );

    urlMusic.ontimeupdate = () => {
      // Nếu mà có thời gian hiện tại mới chạy
      if (urlMusic.duration) {
        const progressPercent = Math.floor(
          (urlMusic.currentTime / urlMusic.duration) * 100
        );
        lengthProgress.value = progressPercent;
      }
    };

    lengthProgress.onchange = (e) => {
      const seekTime = (urlMusic.duration / 100) * e.target.value;
      urlMusic.currentTime = seekTime;
    };
  }

  function volumn() {
    const volumn = $("#header .volumn-music");
    volumn.value = 0.5;
    volumn.oninput = (e) => {
      urlMusic.volume = e.target.value;
    };
  }

  play_pause();
  render_music();
  progress();
  volumn();
};

playmusic();

const render_view = {
  render_member() {
    const member = $("#content .guests-items");
    const item_member = guets_member.map((value) => {
      return `
      <div class="item-box">
      <div class="guets-image">
          <img src="${value.img_member}" alt="">
      </div>

      <div class="desribe-guests">
          <h5>${value.name}</h5>
          <p>${value.job}</p>
      </div>
  </div>`;
    }, []);

    member.innerHTML = item_member.join('');


  },
  start() {
    this.render_member();
  },
};
render_view.start();
