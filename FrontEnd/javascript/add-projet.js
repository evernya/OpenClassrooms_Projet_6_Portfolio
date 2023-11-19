// ENVOI D'UN NOUVEAU PROJET AU BACK-END VIA LE FORMULAIRE DE LA MODALE
const formModal = document.getElementById("modalForm");

const iconeImage = document.querySelector(".fa-image");
const labelUploadPhoto = document.getElementById("labelUploadPhoto");
const inputUploadPhoto = document.getElementById("inputUploadPhoto");
const downloadedPhoto = document.querySelector(".downloadedPhoto");
const cadrePhotoText = document.querySelector(".cadrePhotoText");

const modalBtnValidate = document.querySelector(".modalBtnValidate");


// afficher/reset la preview de l'image sélectionnée
function previewPicture() {
    inputUploadPhoto.addEventListener("change", () => {
        let previewPic = document.createElement("img");
        previewPic.src = URL.createObjectURL(inputUploadPhoto.files[0]);
        downloadedPhoto.src = previewPic.src;

        changeStyleDisplay("block", "none", "none", "none");
    })
}

function resetPreviewPicture() {
    changeStyleDisplay("none", "block", "flex", "block");
}

function changeStyleDisplay(param1, param2, param3, param4) {
    downloadedPhoto.style.display = param1;
    iconeImage.style.display = param2;
    labelUploadPhoto.style.display = param3;
    cadrePhotoText.style.display = param4;
}

previewPicture();


//AJOUT D'UN NOUVEAU PROJET
const titleAddPic = document.getElementById("titleAddPic");
const categorieAddPic = document.getElementById("categorieAddPic");

titleAddPic.addEventListener("input", checkForm);
categorieAddPic.addEventListener("change", checkForm);
inputUploadPhoto.addEventListener("change", checkForm);


//création d'une option dans la balise select
function createOptionsSelect() {
    resetOptionsSelect();
    
    //créer une option pour chaque catégorie
    categorieAll.forEach((nameCategory) => {        
        const option = document.createElement("option");
        option.value = nameCategory.id;
        option.text = nameCategory.name;

        categorieAddPic.add(option);
    })

    categorieAddPic.selectedIndex = -1;
}

//réinitialiser les options
function resetOptionsSelect() {
    while(categorieAddPic.options.length != 0) {
        categorieAddPic.remove(0);
    }
}


//vérification de la validité du formulaire
function checkForm() {
    let title = titleAddPic.value;
    let category = categorieAddPic.value;
    let image = inputUploadPhoto.value;

    if (title != "" && category != "" && image != "") {
        modalBtnValidate.classList.add("enabled");
    } else {
        modalBtnValidate.classList.remove("enabled");
    }
}

//reset du formulaire si données incorrectes
function resetForm() {
    titleAddPic.value = "";
    inputUploadPhoto.value = "";
    resetPreviewPicture();
    resetOptionsSelect();
}


//soumettre le formulaire
formModal.addEventListener("submit", (e) => {
    e.preventDefault();
    formModalSubmit();
})

function formModalSubmit() {

    if (!modalBtnValidate.classList.contains("enabled")) {
        alert("Saisie incorrecte.");
        return
    }

    //valeurs du formulaire
    const titleValue = document.getElementById("titleAddPic").value;
    const categorieValue = parseInt(document.getElementById("categorieAddPic").value);
    const inputUploadPhotoValue = document.getElementById("inputUploadPhoto").files[0];

    //créer les données du formulaire
    const formData = new FormData();
    formData.append('title', titleValue);
    formData.append('category', categorieValue);
    formData.append('image', inputUploadPhotoValue);

    const token = sessionStorage.getItem("token");

    fetch("http://localhost:5678/api/works", {

        method: "POST",
        headers: {"Authorization": `Bearer ${token}`},
        body: formData,

    })
    .then(function (response) {
        console.log(response);
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("erreur lors de l'envoie du formulaire n'importe quoi")
        }
    })
    .then(function (result) {
        alert("Projet ajouté avec succès !");

        getGallery();
        getProjetsModal();
        
        modal.style.display = "none";
        firstModal.style.display = "none";
        secondModal.style.display = "none";
        modalBtnValidate.classList.remove("enabled");
        resetForm();
    })
    .catch((error) => {
        // Gérer les erreurs
        console.error("Erreur lors de l'ajout':", error);
    })
}
