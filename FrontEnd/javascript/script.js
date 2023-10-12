//faire appel à l'API
const urlWorks = "http://localhost:5678/api/works"
const urlCategory = "http://localhost:5678/api/categories"

let projetAll ;

//Afficher les projets dynamiquement
const getGallery = () => {
    fetch(urlWorks)
    .then(function (res){
        return res.json();
    })
    .then(function (dataProjets){
        projetAll = dataProjets;
        projets(dataProjets);
    })
}

function projets(dataProjets){

    let divGallery = document.getElementById("gallery");
    divGallery.innerHTML = "";

    dataProjets.map((works) => {
        //création de la balise figure
        let figure = document.createElement("figure");
        //remplacement des données dans les balises
        figure.innerHTML += `<figure>
                            <img src="${works.imageUrl}" alt="Abajour Tahina">
                            <figcaption>${works.title}</figcaption>
                            </figure>`

        //balise figure mise dans l'id gallery
        document.getElementById("gallery").appendChild(figure);
    })
}

//affiche le filtre
const getFiltre = () => {
    fetch(urlCategory)
    .then(function (res){
        return res.json();
    })
    .then(function (dataFiltre){
        filtre(dataFiltre);
    })
}


function filtre(dataFiltre){
    // création du bouton tous
    let buttonTous = document.createElement("button")
    buttonTous.classList.add("btn")
    buttonTous.innerText = "Tous";

    document.getElementById("filtre").appendChild(buttonTous)

    buttonTous.addEventListener("click", () =>{
        projets(projetAll);
    })

    dataFiltre.map((item) => {
        //création des boutons category
        let button = document.createElement("button");
        button.classList.add("btn")
        button.innerText = `${item.name}`

        document.getElementById("filtre").appendChild(button)

        button.addEventListener("click", () =>{
            let filterProjets = projetAll.filter(fil => fil.category.name === item.name);   
            projets(filterProjets);
        })
    })        
}


//appelle de la fonction getFiltre
getFiltre()
//appelle de la fonction getGallery
getGallery()



// for (filtre in data){
    // //    console.log(filtre.cat)
    //     //création du bouton
    //     let button = document.createElement("button");
    //     button.classList.add("btn")
    //     button.innerText = `${filtre.name}`
    //     document.getElementById("filtre").appendChild(button)
    // }