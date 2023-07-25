
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
const sucess_sign = document.getElementById("sucess-sign");

form_sign.addEventListener('submit', function(event){
    event.preventDefault();
    const email = document.getElementById("sign-email").value;
    const senha = document.getElementById("sign-password").value;
    const confirmacaoSenha = document.getElementById("confirm-password").value;
    const nome = document.getElementById("nome").value;
    if(!senha || !confirmacaoSenha || !nome || !email){
        alert_password.style.display = "block";
        alert_password.innerHTML = "*preencha os campos vazios";
        return;
    }
    if(senha!==confirmacaoSenha){
        alert_password.style.display = "block";
        alert_password.innerHTML = "*senhas diferentes";
        return;
    }
    const data = {
        'nome': nome,
        'email': email,
        'password': senha
    };

    fetch('http://localhost:5000/sign',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(function(response){
        console.log(response);
        if(response.ok){
            return response.json();
        }
    })
    .then(function(data){
        console.log(data);
        if(data['erro']){
        alert_password.innerHTML = data['msg'];
        alert_password.style.display = "block";
        }
        else{
            alert_password.style.display = "none";
            overlay.style.display = "none";
            form_sign.style.display = "none";
            sucess_sign.innerHTML = data['msg'];
            sucess_sign.style.display = "block";
        }
        return;
    })
    .catch(error => {
        console.error('ERRO', error);
    });
})


