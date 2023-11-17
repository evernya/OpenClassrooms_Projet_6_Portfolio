//DECONNEXION LORS DE LA PAGE LOGIN
const logout = document.getElementById("logout");
logout.addEventListener("click", switchOff);

//se déconnecter 
function switchOff(){
    console.log(logout);
    sessionStorage.removeItem("token");

    setTimeout(() => {
        window.location.href = "index.html"
    }, 1000)
}