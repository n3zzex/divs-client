const mainArenaSlider = document.querySelector(".main-arena__slider")


const arenaSlider = new Swiper(mainArenaSlider, {
    slidesPerView: 4,
    spaceBetween: 20,
    centerMode: true,
    on: {
      init: function () {
        
      }
    },

    pagination: {
        el: ".main-arena__pagination",
        type: "bullets",
        clickable: true,
      },

    navigation: {
      nextEl: '.main-arena__next',
      prevEl: '.main-arena__prev',
    },
    
  });
