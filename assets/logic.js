new TypeIt("#name", {
  strings: ["Kiley Adams"],
  speed: 100,
  autoStart: false
});

$(document).ready(function() {
  TypeIt();
  // $("div").animate({
  //     left: '250px',
  //     opacity: '0.5',
  //     height: '150px',
  //     width: '150px'
  // });
});

$("#email").on("click", function() {
  $("#emailModal").modal("show");
});

// $(document).ready(function () {
//     $(".button a").click(function () {
//         $(".overlay").fadeToggle(200);
//         $(this).toggleClass('btn-open').toggleClass('btn-close');
//     });
// });
// $('.overlay').on('click', function () {
//     $(".overlay").fadeToggle(200);
//     $(".button a").toggleClass('btn-open').toggleClass('btn-close');
//     open = false;
// });
