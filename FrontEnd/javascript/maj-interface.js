//MISE A JOUR DE L'INTERFACE UTILISATEUR APRES CONNEXION

//masque ou affiche les différents éléments selon la connexion
function updateUser() {
    const login = document.getElementById("login");
    const logout = document.getElementById("logout");
    const filterGallery = document.getElementById("filter")
    const editionMode = document.querySelector(".editionMode");
    const edit = document.querySelector(".edit");

    if (sessionStorage.getItem("token")) {
        login.style.display = "none";
        logout.style.display = "block";
        filterGallery.style.display = "none";
        editionMode.style.display = "flex";
        edit.style.display = "block";
    }
    else {
        login.style.display = "block";
        logout.style.display = "none";
        filterGallery.style.display = "flex";
        editionMode.style.display = "none";
        edit.style.display = "none";
    }
}

updateUser();