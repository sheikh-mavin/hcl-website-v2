
$("#overview-slider").owlCarousel({
  loop: true,
  items: 1,
  dots: false,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: false,
});

window.onresize = function() {
  if (window.innerWidth > 480) {  $(".overview-expand-btn").css("display", "none"); }
  if (window.innerWidth <= 480) {  $("#see-more").css("display", "block"); }
}

$("#see-more").on("click", function () {
  $(".overview").css({"height": "100%"});
  $("#see-more").css("display", "none");
  $("#see-less").css("display", "block");

})

$("#see-less").on("click", function () {
  $(".overview").css("height", "600px");
  $("#see-more").css("display", "block");
  $("#see-less").css("display", "none");
})

