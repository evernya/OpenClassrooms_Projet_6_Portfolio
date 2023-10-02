//faire appel à l'API
const url = "http://localhost:5678/api/works"

//Afficher les projets dynamiquement
const getGallery = () => {
    fetch(url)
    .then(function (res){
        return res.json()
    })

    .then(function (data) {

        data.map((works) => {
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

        return data;
    })
    .then(function (data){

        data.map((item) => {
            // console.log(item.category.name)
            //création du bouton
            let button = document.createElement("button");
            button.classList.add("btn")
            button.innerText = `${item.category.name}`

            document.getElementById("filtre").appendChild(button)

            let filtres = [...new Set(button)];
            console.log(button)

            // for (filtre in data){
        // //    console.log(filtre.cat)
        //     //création du bouton
        //     let button = document.createElement("button");
        //     button.classList.add("btn")
        //     button.innerText = `${filtre.name}`
     

        //     document.getElementById("filtre").appendChild(button)
        // }
        })        
    })
}


    //filtre
//affiche les éléments filtrés
//cache les éléments non sélectionnés
//active le btn selected

// function first(data) {
//     for (works in data){
//         //création de la balise figure
//         let figure = document.createElement("figure");
//         //remplacement des données dans les balises
//         figure.innerHTML += `<figure>
//                             <img src="${data[works].imageUrl}" alt="Abajour Tahina">
//                             <figcaption>${data[works].title}</figcaption>
//                             </figure>`

//         //balise figure mise dans l'id gallery
//         document.getElementById("gallery").appendChild(figure);
        
//         return data;
//     }
// }


// //Afficher les projets dynamiquement
// const getGallery = () => {
//     fetch(url)
//     .then(function (res){
//         return res.json()
//         const jsonData = res.json()
//         const newData = first(data)
//     })
// }

//appelle de la fonction getGallery
getGallery()





