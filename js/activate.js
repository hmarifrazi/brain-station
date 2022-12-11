$(document).ready(function () {
  $(".slider").owlCarousel({
    items: 1,
    margin: 17,
    loop: true,
    autoplay: true,
    dots: false
  });
  $('.sponsor-wrapper').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    dots: false,
    items: 5,
    responsive: {
      0: {
        items: 2,
        nav: false
      },
      600: {
        items: 3,
        nav: false
      },
      1000: {
        items: 5,
        nav: false,
        loop: false
      }
    }
  })


});
