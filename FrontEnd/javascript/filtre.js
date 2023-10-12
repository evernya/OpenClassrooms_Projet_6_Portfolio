const urlCategory = "http://localhost:5678/api/categories"

const getFiltre = () => {
    fetch(urlCategory)
    .then(function (res){
        return res.json();
    })
    .then(function (data){
        filtre(data);
    })
}

function filtre(data){
    console.log(data)
    data.map((item) => {
        //création du bouton
        let button = document.createElement("button");
        button.classList.add("btn")
        button.innerText = `${item.name}`

        document.getElementById("filtre").appendChild(button)

        

        // for (filtre in data){
    // //    console.log(filtre.cat)
    //     //création du bouton
    //     let button = document.createElement("button");
    //     button.classList.add("btn")
    //     button.innerText = `${filtre.name}`
 

    //     document.getElementById("filtre").appendChild(button)
    // }
    
    })        
}

//appelle de la fonction getGallery
getFiltre()


//     //filtre
// //affiche les éléments filtrés
// //cache les éléments non sélectionnés
// //active le btn selected