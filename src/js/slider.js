
const mainArenaSlider = document.querySelector(".main-arena__slider .content");
const newsSlider = document.querySelector(".news-slider");
const lettersSlider = document.querySelector(".letters-slider-wrapper");


const mainSliderConfig = {
  slidesPerView: 1,
  spaceBetween: 20,
  centerMode: true,

  pagination: {
      el: ".main-arena__slider .main-arena__pagination",
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

new Swiper(".events__slider .content", {
  slidesPerView: 1,
  spaceBetween: 20,
  centerMode: true,

  pagination: {
      el: ".events__pagination",
      type: "bullets",
      clickable: true,
      
      
    },

  navigation: {
    nextEl: '.events-next',
    prevEl: '.events-prev',
  },

  breakpoints: {
    767: {
      slidesPerView: 4,
    }
  }
  
});

new Swiper(".gyms-dance__slider .content", {
  slidesPerView: 1,
  spaceBetween: 20,
  centerMode: true,

  pagination: {
      el: ".gyms-dance__pagination",
      type: "bullets",
      clickable: true,
      
      
    },

  navigation: {
    nextEl: '.gyms-dance__next',
    prevEl: '.gyms-dance__prev',
  },

  breakpoints: {
    767: {
      slidesPerView: 4,
    }
  }
  
});
new Swiper(".gyms-workout__slider .content", {
  slidesPerView: 1,
  spaceBetween: 20,
  centerMode: true,

  pagination: {
      el: ".gyms-workout__pagination",
      type: "bullets",
      clickable: true,
      
      
    },

  navigation: {
    nextEl: '.gyms-workout__next',
    prevEl: '.gyms-workout__prev',
  },

  breakpoints: {
    767: {
      slidesPerView: 4,
    }
  }
  
});
new Swiper(".rent-press__slider .content", {
  slidesPerView: 1,
  spaceBetween: 20,
  centerMode: true,

  pagination: {
      el: ".rent-press__pagination",
      type: "bullets",
      clickable: true,
      
      
    },

  navigation: {
    nextEl: '.rent-press__next',
    prevEl: '.rent-press__prev',
  },

  breakpoints: {
    767: {
      slidesPerView: 4,
    }
  }
  
});
new Swiper(".rent-vip__slider .content", {
  slidesPerView: 1,
  spaceBetween: 20,
  centerMode: true,

  pagination: {
      el: ".rent-vip__pagination",
      type: "bullets",
      clickable: true,
      
      
    },

  navigation: {
    nextEl: '.rent-vip__next',
    prevEl: '.rent-vip__prev',
  },

  breakpoints: {
    767: {
      slidesPerView: 4,
    }
  }
  
});
new Swiper(".rent-arena__slider .content", {
  slidesPerView: 1,
  spaceBetween: 20,
  centerMode: true,

  pagination: {
      el: ".rent-arena__pagination",
      type: "bullets",
      clickable: true,
      
      
    },

  navigation: {
    nextEl: '.rent-arena__next',
    prevEl: '.rent-arena__prev',
  },

  breakpoints: {
    767: {
      slidesPerView: 4,
    }
  }
  
});
new Swiper(".rent-area__slider .content", {
  slidesPerView: 1,
  spaceBetween: 20,
  centerMode: true,

  pagination: {
      el: ".rent-area__pagination",
      type: "bullets",
      clickable: true,
      
    },

  navigation: {
    nextEl: '.rent-area__next',
    prevEl: '.rent-area__prev',
  },

  breakpoints: {
    767: {
      slidesPerView: 4,
    }
  }
  
});
new Swiper(".rent-floor__slider .content", {
  slidesPerView: 1,
  spaceBetween: 20,
  centerMode: true,

  pagination: {
      el: ".rent-floor__pagination",
      type: "bullets",
      clickable: true,
      
      
    },

  navigation: {
    nextEl: '.rent-floor__next',
    prevEl: '.rent-floor__prev',
  },

  breakpoints: {
    767: {
      slidesPerView: 4,
    }
  }
  
});
new Swiper(".gyms-physical__slider .content", {
  slidesPerView: 1,
  spaceBetween: 20,
  centerMode: true,

  pagination: {
      el: ".gyms-physical__pagination",
      type: "bullets",
      clickable: true,
      
      
    },

  navigation: {
    nextEl: '.gyms-physical__next',
    prevEl: '.gyms-physical__prev',
  },

  breakpoints: {
    767: {
      slidesPerView: 4,
    }
  }
  
});
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

new Swiper(".hotel-slider__slider", {
  ...sliderThreeItemsConfig,
  pagination: {
      el: ".hotel-page-slider-pagination",
      type: "bullets",
      clickable: true,
      
      
    },

  spaceBetween: 20,

  navigation: {
    nextEl: '.hotel-slider-next',
    prevEl: '.hotel-slider-prev',
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
new Swiper('.hotel .hotel-slider-wrapper', {
  slidesPerView: 1,
  spaceBetween: 20,
  centerMode: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 4,
    }
  },
  pagination: {
    el: ".hotel-slider-pagination",
    type: "bullets",
    clickable: true,
    
    
  },

  navigation: {
    nextEl: '.hotel-next',
    prevEl: '.hotel-prev',
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


new Swiper('.reviews__slider', {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 20,

  navigation: {
    nextEl: '.fitness-reviews__next',
    prevEl: '.fitness-reviews__prev',
  },

  pagination: {
    el: ".main-arena__pagination",
    type: "bullets",
    clickable: true,
    
    
  },

  breakpoints: {
    1024: {
      slidesPerView: 2
    }
  }
  
});


