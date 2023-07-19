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

const alert_password = document.getElementById("alert-password");
const form_sign = document.getElementById("form-sign");

form_sign.addEventListener('submit', function(event){
    event.preventDefault();

    const email = document.getElementById("sign-email").value;
    const senha = document.getElementById("sign-password").value;
    const confirmacaoSenha = document.getElementById("confirm-password").value;
    const nome = document.getElementById("nome").value;
    if(senha!==confirmacaoSenha){
        alert_password.style.display = "block";
        return;
    }
    const data = {
        'nome': nome,
        'sign-email': email,
        'sign-password': senha,
        'confirm-password': confirmacaoSenha
    };

    fetch('http://localhost:5000/sign',{
        method: 'POST',
        headers: {
            'Content-Type': 'aplication/json'
        },
        body: JSON.stringify(data)
    })
    .then(response =>(response)
    )
    .catch(error => {
        console.error('ERRO', error);
    });

    alert_password.style.display = "none";
    overlay.style.display = "none";
    menu_sign.style.display = "none";
})




