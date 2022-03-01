// // Resetting the sign in form contents
// function resetSignIn() {
//   document.getElementById("username").innerHTML = "";
//   document.getElementById("password").innerHTML = "";
// }

// Login into the admin site
// function adminSite() {
//   window.open("../Site-Pages/admin-site.html", "_self");
// }

// Returning to the home page
function homePage() {
  window.open("../index.html", "_self");
}

// To be fixed
async function adminSignInRequest() {
  let userName = document.getElementById('username').value;
  let passWord = document.getElementById('password').value;
  console.log(userName+passWord);
  

  if(true) {
    console.log(userName+passWord);
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

    if(responseVal.status == 200)
      alert("1"),
      window.open("../Site-Pages/admin-site.html", "_self");
    else
      alert("Something went wrong! Error: "+responseVal.status);
  } else {
    alert("Invalid username or password!");
  }
}