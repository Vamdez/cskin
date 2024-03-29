let auth = false;

const token = localStorage['x-access-token'];

document.addEventListener("DOMContentLoaded", function() {
    fetch("http://localhost:5000/save",{
        method: "GET",
        headers:{
            "Content-Type": 'application/json',
            "x-access-token": token
        }
    }).then(function(response){
        if(response.ok){
            img_profile.style.display = 'block';
            img_login.style.display = 'none';
            console.log("Autorizado")
            auth = true;
            return response.json();
        }
        img_profile.style.display ='none';
        img_login.style.display = 'block';
        console.log("Não Autorizado");
        auth = false;
    }).then(function(data){
        return data;
    }).catch(error =>{
        console.log("ERRO", error);
    });
});


