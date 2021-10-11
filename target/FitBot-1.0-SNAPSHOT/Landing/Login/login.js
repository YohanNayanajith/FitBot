// function loginForm(){
//     document.getElementById('login').style.display = 'block';
// }

var modal = document.getElementById('fitbot_login_modal');
// location.href = "../NavBar/NavBar.html";

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        
    }
}

function close_model(){
    modal.style.display='none';
}

function login_cancel(){
    modal.style.display='none';
}