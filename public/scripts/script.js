const id_login = document.getElementById("login-button");
const id_profile = document.getElementById("profile-button");


function ValidationToken(token){
    fetch("http://localhost:5000/save",{
        method: "GET",
        headers:{
            "Content-Type": 'application/json',
            "x-access-token": token
        }
    }).then(function(response){
        if(response.ok){
            id_profile.style.display = 'block';
            id_login.style.display = 'none';
            console.log("Autorizado")
            return response.json();
        }
        id_profile.style.display ='none';
        id_login.style.display = 'block';
        console.log("Não Autorizado");
    }).then(function(data){
        return data;
    }).catch(error =>{
        console.log("ERRO", error);
    });
}

const token = localStorage['x-access-token'];
document.addEventListener("DOMContentLoaded", function() {
    ValidationToken(token);
    console.log("Atualizou");
});
const save_button = document.getElementById("save-button");


save_button.addEventListener("click", (event)=>{
    event.preventDefault();
    ValidationToken(token);
});
