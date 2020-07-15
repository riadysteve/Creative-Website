const hamburger = document.querySelector(".header-mobile-menu");
const navLinks = document.querySelector(".header-links");
const header = document.querySelector(".header");

hamburger.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    header.classList.remove("open");
  } else {
    header.classList.add("open");
  }
});

$(function ($) {
  var card = $(".feature-box");
  card.on("mousemove", function (e) {
    var x = e.clientX - $(this).offset().left + $(window).scrollLeft();
    var y = e.clientY - $(this).offset().top + $(window).scrollTop();

    var rY = map(x, 0, $(this).width(), -8, 8);
    var rX = map(y, 0, $(this).height(), -8, 8);

    $(this)
      .children(".hover-layer")
      .css(
        "transform",
        "rotateY(" + rY + "deg)" + " " + "rotateX(" + -rX + "deg)"
      );
  });

  card.on("mouseenter", function () {
    $(this)
      .children(".hover-layer")
      .css({
        transition: "all " + 0.05 + "s" + " linear",
      });
  });

  card.on("mouseleave", function () {
    $(this)
      .children(".hover-layer")
      .css({
        transition: "all " + 0.2 + "s" + " linear",
      });

    $(this)
      .children(".hover-layer")
      .css(
        "transform",
        "rotateY(" + 0 + "deg)" + " " + "rotateX(" + 0 + "deg)"
      );
  });

  function map(x, in_min, in_max, out_min, out_max) {
    return ((x - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  }
});
