// The list appears on clicking on the hamburger icon
$(document).ready(function () {
  $("#hamburger").click(function () {
    $("ul.nav-menu").toggleClass("show");
  });
});

// Goint to the Admin sign-in page
function adminSignIn() {
  window.open("./Sign-In-Pages/Admin.html", "_self");
}

// Returning to the home page
function homePage() {
  window.open("../index.html", "_self");
}


// let userName = document.getElementById('username').value;
// let passWord = document.getElementById('password').value;

// const url = "https://api-govschool.herokuapp.com";

// async function adminSignIn() {
//   const adminLoginData = {
//     userName: userName,
//     passWord: passWord
//   };

//   const adminJson = JSON.stringify(adminLoginData);

//   const options = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
//         'Access-Control-Allow-Origin': '*'
//     },
//     body: adminJson
// }

//   fetch(`${url}/admin/login`, options).then(results => results.json()).then(console.log);
// }