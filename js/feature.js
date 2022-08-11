$(window).resize(function () {
    if ($(window).width() >= 992) {
      $(".onlyForMobile").css("display", "none");
      $(".onlyForWeb").css("display", "block");
    } else {
      $(".onlyForMobile").css("display", "block");
      $(".onlyForWeb").css("display", "none");
    }
  });

  $(document).ready(function () {
    var owl = $("#owl-feature");
    owl.owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      items: 4,
      dots: true,
      dotsEach: 1,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1.5,
        },
        480: {
          items: 2,
        },
        601: {
          items: 3,
        },
        // 835: {
        //   items: 4,
        // },
      },
    });
  });

  $(document).ready(function () {
    var owl = $("#owl-episodes");
    owl.owlCarousel({
      loop: true,
      margin: 15,
      nav: false,
      items: 2.5,
      dots: true,
      dotsEach: 1,
    });
  });