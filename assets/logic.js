new TypeIt("#name", {
  strings: ["Kiley Adams"],
  speed: 50,
  autoStart: false
});

var here = function() {
  console.log("in the JS file");
};

$(document).ready(function() {
  here();

  TypeIt();
});

jQuery(document).ready(function() {
  var offset = 250;

  var duration = 300;

  jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() > offset) {
      jQuery(".back-to-top").fadeIn(duration);
    } else {
      jQuery(".back-to-top").fadeOut(duration);
    }
  });

  jQuery(".back-to-top").click(function(event) {
    event.preventDefault();

    jQuery("html, body").animate({ scrollTop: 0 }, duration);

    return false;
  });
});
