$(document).ready(function () {
  $(`.slider`).slick({
    arrows: true,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 900,
    easing: "ease",
    infinite: true,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    draggable: true,
    swipe: true,
    touchTreshold: 5,
    waitForAnimate: false,
    centerMode: false,
    variableWidth: false,
    rows: false,
    slidesPerRow: false,
    vertical: false,
    verticalSwiping: false,
    responsive: [
      {
        breakpoint: 1460,
      },
      {
        breakpoint: 768,
      },
      {
        breakpoint: 360,
      },
    ],
    appendArrows: $(`.content`),
    appendDots: $(`.content`),
    fade: false,
  });
  $(`.slider`).slick(`setPosition`);
});
