$(document).ready(function () {
  $(`.slider`).slick({
    arrows: true, dots: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 900,
    easing: "ease",
    infinite: true,
    initialSlide: 0,
    autoplay: false,
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
    responsive: [{
      breakpoint: 1200, setting: { slidesToShow: 1 }
    },],
    mobileFirst: true,
    appendArrows: $(`.content`),
    appendDots: $(`.content`),
    fade: true,
    
  });
  $(`.slider`).slick(`setPosition`);
});