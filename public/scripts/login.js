const button_login = document.getElementById("login-button");
const menu_login = document.getElementById("menu-login");
const overlay = document.getElementById("overlay");
const alert_login = document.getElementById("alert-login");
const alert_sign = document.getElementById("alert-sign");
const sucessLogin = document.getElementById("sucess-login");
const sucessSign = document.getElementById("sucess-sign");
const img_login = document.getElementById("login-button");
const img_profile = document.getElementById("profile-button");

button_login.addEventListener('click', function(){
    menu_login.style.display = "block";
    overlay.style.display = "block";
});

const form_login = document.getElementById("form-login");
const submit_login = document.getElementById("submit");
form_login.addEventListener('submit', function(event){
    event.preventDefault();
    const password_login = document.getElementById("password-login").value;
    const email_login = document.getElementById("email-login").value;
    if(!password_login || !email_login){
        alert_login.style.display = "block";
        alert_login.innerHTML = "*preencha os campos vazios";
        return;
    }
    const data_login = {
        email: email_login,
        password: password_login
    };

    fetch("http://localhost:5000/login",{
        method: "POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data_login)
    }).then(function(response){
        return response.json();
    }).then(function(data){
        if(!data['auth']){
            alert_login.innerHTML = data['msg']
            alert_login.style.display = "block";
        }
        else{
            localStorage.setItem("token", data['token']);
            alert_login.style.display = "none";
            form_login.style.display = "none";
            overlay.style.display = "none";
            img_login.style.display="none";
            img_profile.style.display="block"
            sucessLogin.innerHTML = data['msg'];
            sucessLogin.style.display = "block";
            console.log(localStorage.getItem('token'))
        }
    })

})


const button_sign = document.getElementById("signup");
const menu_sign = document.getElementById("menu-sign");

button_sign.addEventListener("click", function(){
    menu_login.style.display = "none";
    menu_sign.style.display = "block";
})


const form_sign = document.getElementById("form-sign");

form_sign.addEventListener('submit', function(event){
    event.preventDefault();
    const email_sign = document.getElementById("sign-email").value;
    const senha_sign = document.getElementById("sign-password").value;
    const confirmacaoSenha = document.getElementById("confirm-password").value;
    const name_sign = document.getElementById("nome").value;
    if(!senha_sign || !confirmacaoSenha || !name_sign || !email_sign){
        alert_sign.style.display = "block";
        alert_sign.innerHTML = "*preencha os campos vazios";
        return;
    }
    if(senha_sign!==confirmacaoSenha){
        alert_sign.style.display = "block";
        alert_sign.innerHTML = "*senhas diferentes";
        return;
    }
    const data = {
        'name': name_sign,
        'email': email_sign,
        'password': senha_sign
    };

    fetch('http://localhost:5000/sign',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        if(!data['auth']){
            alert_sign.innerHTML = data['msg'];
            alert_sign.style.display = "block";
        }
        else{
            localStorage.setItem('token', data['token'])
            alert_sign.style.display = "none";
            overlay.style.display = "none";
            form_sign.style.display = "none";
            img_login.style.display="none";
            img_profile.style.display="block"
            sucessSign.innerHTML = data['msg'];
            sucessSign.style.display = "block";
        }
        return;
    })
    .catch(error => {
        console.error('ERRO', error);
    });
})

function exit(){
    menu_login.style.display = 'none';
    menu_sign.style.display = 'none';
    overlay.style.display = 'none';
}
const exit_login = document.getElementById("exit-login");
const exit_sign = document.getElementById("exit-sign");
exit_login.addEventListener('click', exit);
exit_sign.addEventListener('click', exit);