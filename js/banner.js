$(".nav-link").click(function (e) {
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
});

$(".nav-item").on("click", function () {
    $(".navbar-collapse").removeClass("show");
});
$("#banner").owlCarousel({
    loop: true,
    items: 1,
    margin: 0,
    dots: true,
    autoplay: true,
    autoplayTimeout: 7000,
    autoplayHoverPause: false,
});
