
const mainArenaSlider = document.querySelector(".main-arena__slider .content");
const newsSlider = document.querySelector(".news-slider");
const lettersSlider = document.querySelector(".letters-slider-wrapper");


const mainSliderConfig = {
  slidesPerView: 1,
  spaceBetween: 20,
  centerMode: true,

  pagination: {
      el: ".main-arena__pagination",
      type: "bullets",
      clickable: true,
    },

  navigation: {
    nextEl: '.main-arena__next',
    prevEl: '.main-arena__prev',
  },

  breakpoints: {
    767: {
      slidesPerView: 4,
    }
  }
  
}

const sliderThreeItemsConfig = {
  slidesPerView: 1,
  spaceBetween: 20,
  centerMode: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    }
  }
}

new Swiper(mainArenaSlider, mainSliderConfig);
new Swiper(newsSlider, {
  ...sliderThreeItemsConfig,
  pagination: {
      el: ".news-pagination",
      type: "bullets",
      clickable: true,
    },

  navigation: {
    nextEl: '.news-next',
    prevEl: '.news-prev',
  },
});
new Swiper(lettersSlider, {
  ...sliderThreeItemsConfig,
  pagination: {
      el: ".letters-pagination",
      type: "bullets",
      clickable: true,
    },

  navigation: {
    nextEl: '.letters-next',
    prevEl: '.letters-prev',
  },
});

new Swiper('.concert-slider', {
  slidesPerView: 1,
  loop: true,

  navigation: {
    nextEl: '.concert__next',
    prevEl: '.concert__prev',
  },
});

