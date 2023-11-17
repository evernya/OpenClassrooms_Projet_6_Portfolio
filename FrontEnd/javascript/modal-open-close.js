//AJOUT DE LA MODALE


const modal = document.querySelector(".modal");
const firstModal = document.getElementById("modal1");
const secondModal = document.getElementById("modal2");


//OUVERTURE DE LA MODALE 1
const openModal = document.querySelector(".modalBtnOpen");

addEventOnBtnDisplayFirstModal(openModal);

//OUVERTURE DE LA MODALE 2
const btnNextModal = document.querySelector(".modalBtnNextModal");

btnNextModal.addEventListener("click", () => {
    openSecondModal();
});

function openSecondModal() {
    firstModal.style.display = "none";
    secondModal.style.display = "block";
}

//RETOUR A LA PREMIERE MODALE
const returnfirstModal = document.querySelector(".modalBtnReturn");

addEventOnBtnDisplayFirstModal(returnfirstModal);

//FERMETURE DE LA MODALE 1 ET 2
//avec croix
const modalBtnClose = document.querySelectorAll(".modalBtnClose")

function closeModal() {
    modalBtnClose.forEach((btnClose) => {
        btnClose.addEventListener("click", () => {
            changeStyleDisplayBtn(0)

            //reset le formulaire
            resetForm();
        })
    })
}

//en dehors
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        changeStyleDisplayBtn(0)

        //reset le formulaire
        resetForm();
    }
});



function addEventOnBtnDisplayFirstModal(btn) {
    btn.addEventListener("click", () => {
        changeStyleDisplayBtn(1)

        //ajoute les projets dans la modale gallery
        getProjetsModal();
        //créer les options de l'input select à l'intérieur du formulaire modale
        createOptionsSelect();
    })
}

function changeStyleDisplayBtn(param) {
    if(param == 0){
        modal.style.display = "none";
        firstModal.style.display = "none";
        secondModal.style.display = "none";
    } else {
        modal.style.display = "flex";
        firstModal.style.display = "block";
        secondModal.style.display = "none";
    }
}


openSecondModal();
closeModal();