
const mainArenaSlider = document.querySelector(".main-arena__slider");

const mainSliderConfig = {
  slidesPerView: 4,
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
  
}

new Swiper(mainArenaSlider, mainSliderConfig);
