
const mainArenaSlider = document.querySelector(".main-arena__slider .content");

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

new Swiper(mainArenaSlider, mainSliderConfig);
