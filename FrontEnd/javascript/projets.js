//CHARGER LES PROJETS VIA L'API


let projetAll; //variable qui contient tous les projets


//appel à l'API avec fetch
const urlWorks = "http://localhost:5678/api/works"

const getGallery = () => {
    fetch(urlWorks)
        .then(function (res) {
            return res.json();
        })
        .then(function (dataProjets) {
            projetAll = dataProjets;
            projets(dataProjets, "gallery");
        })
}

//fonction qui vide puis ajoute tous les projets à une gallery
function projets(dataProjets, galleryId) {
    let divGallery = document.getElementById(galleryId);
    divGallery.innerHTML = "";

    dataProjets.map((works) => {
        let figure = document.createElement("figure");
        //récupère l'ID de mes figures
        figure.id = works.id;

        //ajout des données dans les différentes gallery selon les informations nécessaires
        if (galleryId === "gallery") {
            figure.innerHTML += `<img src="${works.imageUrl}">
                                <figcaption>${works.title}</figcaption>`
        } else {
            figure.innerHTML += `<img src="${works.imageUrl}" >`
        }

        document.getElementById(galleryId).appendChild(figure);
    })
}

//ajout des projets dans la gallery + l'icône supprimer dans la modale
const modalGallery = document.querySelector("#modalGallery")

function getProjetsModal() {
    projets(projetAll, "modalGallery");

    let modalGalleryChildren = modalGallery.children;

    for (let i = 0; i < modalGalleryChildren.length; i++) {

        //création icône de suppression
        const deleteIcone = document.createElement("button");
        deleteIcone.classList.add("btnDelete");
        deleteIcone.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

        //événement pour supprimer un projet avec l'icône
        deleteIcone.addEventListener("click", (e) => {
            e.preventDefault()
            e.stopPropagation();

            deleteById(modalGalleryChildren[i].id); //appelle de la fonction deleteById
        });

        modalGalleryChildren[i].appendChild(deleteIcone);
    }
}

getGallery()