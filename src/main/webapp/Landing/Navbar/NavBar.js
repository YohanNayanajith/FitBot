//mobile view
function toggle_navbar() {
    var x = document.getElementById("nav_mobile");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

// login button
document.getElementById("login").onclick = function() {
  location.href = "../Login2/login_test.html";
};

// $(document).ready(function () {
//
//     $("#salon-schedule").on("click", function () {
//         window.location.href = 'http://localhost:8080/FitBot_war_exploded/Landing/Login/login.html';
//     });
//
// });