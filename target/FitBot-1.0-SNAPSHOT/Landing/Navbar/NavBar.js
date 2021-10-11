//mobile view
function toggle_navbar() {
    var x = document.getElementById("nav_mobile");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

//scroll function
// window.onscroll = function() {scrollFunction()};
//
// function scrollFunction() {
//     var navbar = document.getElementById("nav_mobile");
//     var sticky = navbar.offsetTop;
//     if (window.pageYOffset >= sticky) {
//         navbar.classList.add("fixed")
//     }else {
//         navbar.classList.remove("fixed");
//         // navbar.classList.add("fixed")
//     }
// }

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