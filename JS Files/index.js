// The list appears on clicking on the hamburger icon
$(document).ready(function () {
  $("#hamburger").click(function () {
    $("ul.nav-menu").toggleClass("show");
  });
});

// Going to the Admin sign-in page
function adminSignIn() {
  window.open("./Sign-In-Pages/admin-sign-in.html", "_self");
}

// Going to the School sign-in page
function schoolSignIn() {
  window.open("./Sign-In-Pages/school-sign-in.html", "_self");
}

// Going to the Teacher sign-in page
function teacherSignIn() {
  window.open("./Sign-In-Pages/teacher-sign-in.html", "_self");
}

// Going to the Student sign-in page
function studentSignIn() {
  window.open("./Sign-In-Pages/student-sign-in.html", "_self");
}