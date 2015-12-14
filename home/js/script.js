$(function () {
  $("#modules").load("home/modules.html");
});

function popUp(module) {
  $(module).fadeIn("slow");

  $("#content").css({
    "pointer-events": "none",
    "opacity": "0.3",

    "-webkit-filter" : "blur(3px)",
    "-moz-filter" : "blur(3px)",
    "-ms-filter" : "blur(3px)",
    "-o-filter" : "blur(3px)",
    "filter" : "blur(3px)"
  });

  $("#body").css({
    "background-color": "rgb(115, 125, 125)"
  });
}

function popDown(module) {
  $(module).fadeOut("slow");

  $("#content").css( {
    "pointer-events": "all",
    "opacity": "1",

    "-webkit-filter" : "blur(0px)",
    "-moz-filter" : "blur(0px)",
    "-ms-filter" : "blur(0px)",
    "-o-filter" : "blur(0px)",
    "filter" : "blur(0px)"
  });

  $("#body").css({
    "background-color": "rgb(145, 180, 180)"
  });
}
