var owl = $("#customers-testimonials");
owl.owlCarousel({
  loop: true,
  center: true,
  items: 2,
  margin: 0,
  autoplay: true,
  autoplayTimeout: 5000,
  // smartSpeed: 1000,

  dots: true,

  responsive: {
    0: {
      items: 1,
    },

    992: {
      items: 2,
    },
  },
});

// Go to the next item
$(".left-arrow").click(function () {
  owl.trigger("prev.owl.carousel");
});
// Go to the previous item
$(".right-arrow").click(function () {
  owl.trigger("next.owl.carousel");
});
