
let overowl = $("#overview-slider")

overowl.owlCarousel({
  loop: true,
  items: 1,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: false,
});

// overowl.on('changed.owl.carousel', async function (event) {
//   console.log("wewe")
//   $("#customers-testimonials .owl-item").children(".item").children(".rp").removeClass("align-left");
//   $("#customers-testimonials .owl-item").children(".item").children(".rp").removeClass("align-right");
//   $( "#customers-testimonials .owl-item.active.center" ).prev().children(".item").children(".rp").addClass( "align-left");
//   $( "#customers-testimonials .owl-item.active.center" ).next().children(".item").children(".rp").addClass( "align-right");
// })

// setInterval(function () {
//   if (window.innerWidth >= 992) {
//     $("#customers-testimonials .owl-item").children(".item").children(".rp").removeClass("align-left");
//     $("#customers-testimonials .owl-item").children(".item").children(".rp").removeClass("align-right");
//     $("#customers-testimonials .owl-item.active.center").prev().children(".item").children(".rp").addClass("align-left");
//     $("#customers-testimonials .owl-item.active.center").next().children(".item").children(".rp").addClass("align-right");

//   } else {
//     $("#customers-testimonials .owl-item").children(".item").children(".rp").removeClass("align-left");
//     $("#customers-testimonials .owl-item").children(".item").children(".rp").removeClass("align-right");
//   }

// }, 100);