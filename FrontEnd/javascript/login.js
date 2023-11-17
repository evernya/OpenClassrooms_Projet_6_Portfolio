//CONNEXION LORS DE LA PAGE LOGIN

const login = document.getElementById("login");
login.addEventListener("click", signIn);

//connection à partir de la page login
function signIn() {
    let connection = document.querySelector(".formConnection");
    connection.addEventListener("submit", function (event) {
        event.preventDefault();

        //création de l'objet de connection
        let stringConnection = {
            email: event.target.querySelector("[name=email]").value,
            password: event.target.querySelector("[name=mdp]").value,
        };

        //création de la charge utile
        const chargeUtile = JSON.stringify(stringConnection);
        console.log(chargeUtile)

        fetch("http://localhost:5678/api/users/login", {

            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: chargeUtile,
    
        })
        .then(function (response){
            return response.json();
        })
        .then(function (result){
            if(result.token){
                //stocker les données dans le local storage
                sessionStorage.setItem("token", result.token);

                setTimeout(() => {window.location.href = "index.html"}, 1000)
                
            } else {
                alert("Erreur dans l'identifiant ou le mot de passe.")
            }
        })
        .catch((error) => {
            //gérer les erreurs
            console.error("Erreur lors de la récupération des informations:", error);
        })
    })
}