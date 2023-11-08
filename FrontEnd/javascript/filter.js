//FILTRE AVEC APPEL DES CATEGORIES VIA L'API


let categorieAll; //variable qui contient toutes les catégories

//appel à l'API avec fetch
const urlCategory = "http://localhost:5678/api/categories"

const getFilter = () => {
    fetch(urlCategory)
        .then(function (res) {
            return res.json();
        })
        .then(function (dataCategory) {
            categorieAll = dataCategory;
            filter(dataCategory);
        })
}

//fonction filtrage des projets avec création des boutons Tous & Category
function filter(dataCategory) {
    // création du bouton "Tous"
    let filterButtonTous = document.createElement("button");
    filterButtonTous.classList.add("filterBtn", "filterBtnSelected");
    filterButtonTous.innerText = "Tous";

    document.getElementById("filter").appendChild(filterButtonTous);

    filterButtonTous.addEventListener("click", () => {
        //appel des projets de la fonction projet dans la gallery
        projets(projetAll, "gallery");

        removeBtnSelected();
        addBtnSelected(filterButtonTous, "filterBtnSelected");
    })

    dataCategory.map((item) => {
        //création des boutons category
        let filterButtonCategory = document.createElement("button");
        filterButtonCategory.classList.add("filterBtn");
        filterButtonCategory.innerText = `${item.name}`;

        document.getElementById("filter").appendChild(filterButtonCategory)

        filterButtonCategory.addEventListener("click", () => {
            //filtrage des projets avec la fonction projets dans la gallery
            let filterProjets = projetAll.filter(fil => fil.category.name === item.name);
            projets(filterProjets, "gallery");

            removeBtnSelected();
            addBtnSelected(filterButtonCategory, "filterBtnSelected");
        })
    })
}

//ajoute une classe à un bouton
function addBtnSelected(btn, classe) {
    btn.classList.add(classe)
}

//retire la classe sélectionnée à un bouton
function removeBtnSelected() {
    let classeFilterBtnSelected = document.querySelector(".filterBtnSelected")
    classeFilterBtnSelected.classList.remove("filterBtnSelected")
}

getFilter()