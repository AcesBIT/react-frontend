// The list appears on clicking on the hamburger icon
$(document).ready(function () {
  $("#hamburger").click(function () {
    $("ul.nav-menu").toggleClass("show");
  });
});

// The list disappears on selecting an option
// $(document).ready(function () {
//   $(".nav-menu").click(function () {
//     $("ul.nav-menu").toggleClass("hide");
//   });
// });

// function on() {
//   document.getElementsByClassName("overlay").style.display = "block";
// }

// function off() {
//   document.getElementsByClassName("overlay").style.display = "none";
// }