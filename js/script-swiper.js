let pageSlider = new Swiper(`.page`, {
  wrapperClass: "page__wrapper",
  slideClass: "page__screen",
  direction: `vertical`,
  slidesPerView: `auto`,
  parallax: `true`,
  keybord: {
    enabled: `true`, onlyInViewport: `true`,
  pageUpDown:`true`,}
})