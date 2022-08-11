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
    var getHight = $('.image-holder-feature').css('height');
    console.log("HIEGHT----------",getHight)
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
          items: 1.2,
        },
        341: {
          items: 1.4,
        },
        381: {
          items: 1.6,
        },
        406: {
          items: 1.7,
        },
        431: {
          items: 1.8,
        },
        481: {
          items: 2,
        },

        530: {
          items: 3,
        },
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