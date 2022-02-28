// The list appears on clicking on the hamburger icon
$(document).ready(function () {
  $("#hamburger").click(function () {
    $("ul.nav-menu").toggleClass("show");
  });
});

// Returning to the home page
function homePage() {
  window.open("../index.html", "_self");
}


// Ad
async function adminSignInRequest() {
  let userName = document.getElementById('username').value;
  let passWord = document.getElementById('password').value;

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  var urlencoded = new URLSearchParams();
  urlencoded.append("userName", userName);
  urlencoded.append("password", passWord);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow'
  };

  let responseVal;

  await fetch("https://api-govschool.herokuapp.com/admin/login", requestOptions)
    .then(response => responseVal = response)
    .catch(error => console.log('error', error));

  let decoded = await responseVal.text();
  // console.log(decoded);
  let data = JSON.parse(decoded);
  console.log(data.message);
  console.log(responseVal.status);
}