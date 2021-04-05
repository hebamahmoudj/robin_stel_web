$(window).scroll(function () {
  let offset = $("#about").offset().top;
  let scrolltop = $(window).scrollTop();

  if (scrolltop > offset - 100) {
    $(".navbar").css({ backgroundColor: "tomato", transition: "all 1s" });
  } else {
    $(".navbar").css({ backgroundColor: "transparent", transition: "all 1s" });
  }
});
