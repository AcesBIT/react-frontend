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

// Resetting the sign in form contents
function resetSignIn() {
  document.getElementById("username").innerHTML = "";
  document.getElementById("password").innerHTML = "";
}

// Login into the admin site
// function adminSite() {
//   window.open("../Site-Pages/admin-site.html", "_self");
// }
