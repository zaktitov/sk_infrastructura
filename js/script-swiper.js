let pageSlider = new Swiper(`.page`, {
  wrapperClass: "page__wrapper",
  slideClass: "page__screen",
  direction: `vertical`,
  slidesPerView: `auto`,
  parallax: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
    pageUpDown: true,
  },
  freeMode: false,
  mousewheel: {
    sensitivity: false,
  },
  speed: 800,
  watchOverflow: true,
  observer: true,
  observerParents: true,
  observseChildren: true,
  pagination: {
    el: `.page__pagination`,
    type: `bullets`,
    clickable: true,
    bulletClass: `page__bullet`,
    bulletActiveClass: `page__bullet-active`,
  },
  scrollbar: {
    el: `.page__scroll`,
    dragClass: `page__drag-scroll`,
    draggable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 1,
      
    },
    // when window width is >= 640px
    1460: {
      slidesPerView: 1,
      
    },
  },
});
