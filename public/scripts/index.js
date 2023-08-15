
const save_button = document.getElementById("save-button");

save_button.addEventListener("click", ()=>{
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
        menu_login.style.display = 'block';
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
