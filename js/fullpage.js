var $oh = $("#o-h");
var $fh = $("#f-h");
var $eh = $("#e-h");
var $qh = $("#q-h");

var $leftArrow = $(".left-arrow");
var $rightArrow = $(".right-arrow");
var $customerTestimonials = $("#customers-testimonials");
var $featureCardOne = $("#feature-card-one");
var $featureCardTwo = $("#feature-card-two");
var $featureCardThree = $("#feature-card-three");
var $featureCardFour = $("#feature-card-four");

var $overviewslider = $("#overview-slider");
var $episodeCardLeft = $(".episode-card-left");

var $episodeRightCardOne = $("#episode-card-right-one");
var $episodeRightCardTwo = $("#episode-card-right-two");
var $episodeRightCardThree = $("#episode-card-right-three");
var $episodeRightCardFour = $("#episode-card-right-four");
var $overviewWrapper = $(".overview-wrapper");
let count = 0;
$("#fullpage").fullpage({
  navigation: true,
  anchors: ["section1", "section2", "section3", "section4", "section5"],
  bigSectionsDestination: 'top',
  fitToSection: false,
  autoScrolling: true,
  normalScrollElements: ".episode-right-section",
  recordHistory: false,
  credits: {
    enabled: false,
  },
  afterLoad: function (anchorLink, index) {
    history.pushState("", document.title, window.location.pathname
      + window.location.search);
  },
  onLeave: function (org, dest, direction) {
    if (dest.index == 1) {

      // $oh.addClass("animate__animated animate__fadeIn");
      // $overviewWrapper.addClass("animate__animated animate__fadeInUpBig");
    }

    if (dest.index == 2) {
      $fh.addClass(
        "animate__animated animate__bounceIn animate__delay-1s"
      );
      $featureCardOne
        .addClass("animate__animated animate__fadeIn animate__faster")
        .css("animation-delay", "0.2s");
      $featureCardTwo
        .addClass("animate__animated animate__fadeIn animate__faster")
        .css("animation-delay", "0.6s");
      $featureCardThree
        .addClass("animate__animated animate__fadeIn animate__faster")
        .css("animation-delay", "1s");
      $featureCardFour
        .addClass("animate__animated animate__fadeIn animate__faster")
        .css("animation-delay", "1.4s");
    }

    if (dest.index == 3) {
      $eh.addClass(
        "animate__animated animate__fadeInDown animate__delay-1s"
      );
      $episodeCardLeft
        .addClass("animate__animated animate__zoomIn")
        .css("animation-delay", "0.5s");
      $episodeRightCardOne
        .addClass("animate__animated animate__fadeIn animate__faster")
        .css("animation-delay", "0.8s");
      $episodeRightCardTwo
        .addClass("animate__animated animate__fadeIn animate__faster")
        .css("animation-delay", "1.2s");
      $episodeRightCardThree
        .addClass("animate__animated animate__fadeIn animate__faster")
        .css("animation-delay", "1.6s");
      $episodeRightCardFour
        .addClass("animate__animated animate__fadeIn animate__faster")
        .css("animation-delay", "2s");

      setTimeout(function () {
        $(".multi-card").removeClass("animate__animated animate__fadeIn animate__faster");
      }, 3000);
    }

    if (dest.index == 4) {

      $qh
        .addClass("animate__animated animate__fadeInRightBig ")
        .css("animation-delay", "1s");
      $leftArrow
        .addClass("animate__animated animate__fadeInLeftBig animate__delay-1s")
        .css("animation-delay", ".6s");
      $rightArrow
        .addClass("animate__animated animate__fadeInRightBig animate__delay-1s")
        .css("animation-delay", ".6s");
      // $customerTestimonials.addClass(
      //   "animate__animated animate__fadeInUp"
      // );

      if (count == 0) {
        setTimeout(function () {
          owl.trigger("next.owl.carousel", [400]);
          owl.trigger("next.owl.carousel", [800]);
          owl.trigger("next.owl.carousel", [1000]);
          owl.trigger("next.owl.carousel", [1200]);
          // owl.trigger("next.owl.carousel", [2400]);
        }, 500);

        $('.swiper-slide:nth-child(1n)').addClass("transition-duration-1n");
        $('.swiper-slide:nth-child(2n)').addClass("transition-duration-2n");
        $('.swiper-slide:nth-child(3n)').addClass("transition-duration-3n");
        $('.swiper-slide:nth-child(4n)').addClass("transition-duration-4n");
        $('.swiper-slide:nth-child(5n)').addClass("transition-duration-5n");

        var swiper = new Swiper(".mySwiper", {
          effect: "cards",
          grabCursor: true,
          // loop: true,
          // loopFillGroupWithBlank: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
              return '<span class="' + className + '"></span>';
            },
          },
          autoplay: {
            delay: 2000,
            disableOnInteraction: true,
          },
          navigation: {
            nextEl: ".swiper-right-arrow",
            prevEl: ".swiper-left-arrow",
          },
          keyboard: {
            enabled: true,
          },
        });

        setTimeout(function () {
          $('.swiper-slide:nth-child(1n)').removeClass("transition-duration-1n");
          $('.swiper-slide:nth-child(2n)').removeClass("transition-duration-2n");
          $('.swiper-slide:nth-child(3n)').removeClass("transition-duration-3n");
          $('.swiper-slide:nth-child(4n)').removeClass("transition-duration-4n");
          $('.swiper-slide:nth-child(5n)').removeClass("transition-duration-5n");

          // $('.swiper-slide:nth-child(1n)').addClass("transition-duration-0n");
          // $('.swiper-slide:nth-child(2n)').addClass("transition-duration-0n");
          // $('.swiper-slide:nth-child(3n)').addClass("transition-duration-0n");
          // $('.swiper-slide:nth-child(4n)').addClass("transition-duration-0n");
          // $('.swiper-slide:nth-child(5n)').addClass("transition-duration-0n");
        }, 1500)


        count = 1;
      }
    }
  },
});