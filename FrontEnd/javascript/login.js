
let user = {
    "email" : "sophie.bluel@test.tld",
    "mdp" : "S0phie",
}

function seConnecter() {
    let connection = document.querySelector(".formConnection");
    connection.addEventListener("submit", function (event) {
        event.preventDefault();

        //création de l'objet de connection
        let stringConnection = {
            email: event.target.querySelector("[name=email]").value,
            motdepasse: event.target.querySelector("[name=mdp]").value,
        };

        //création de la charge utile au format JSO?
        const chargeUtile = JSON.stringify(stringConnection);

        fetch("http://localhost:5678/api/users/login", {

            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: chargeUtile,
    
        })
        .then(function (response){
            return response.json();
        })
        .then(function (result){
            if(user.email === stringConnection.email && user.mdp === stringConnection.mdp){
                console.log("Test ok")
            } else {
                console.log("Test pas ok")
            }
        })
    })
}