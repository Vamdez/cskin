const button_login = document.getElementById("login-button");
const menu_login = document.getElementById("menu-login");
const overlay = document.getElementById("overlay");
button_login.addEventListener('click', function(){
    menu_login.style.display = "block";
    overlay.style.display = "block";
});

const form_login = document.getElementById("form-login");
const submit_login = document.getElementById("submit");

form_login.addEventListener('submit', function(event){
    event.preventDefault();
    menu_login.style.display = "none";
    overlay.style.display = "none";
})
const button_sign = document.getElementById("signup");
const menu_sign = document.getElementById("menu-sign");

button_sign.addEventListener("click", function(){
    menu_login.style.display = "none";
    menu_sign.style.display = "block";
})

const form_sign = document.getElementById("sign-submit");

form_sign.addEventListener('submit', function(event){
    event.preventDefault();
    menu_sign.style.display = "none";
    overlay.style.display = "none";
})