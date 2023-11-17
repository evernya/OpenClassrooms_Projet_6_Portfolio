//SUPPRESSION DES TRAVAUX EXISTANTS

//fonction supprimer du DOM
function removeProjetFromProjetAll(idProjet) {
    projetAll = projetAll.filter(element => {
        return String(element.id) !== String(idProjet);
    });
 }

//fonction supprimer avec l'ID
function deleteById(idProjet) {
    const token = sessionStorage.getItem("token");

    fetch(`http://localhost:5678/api/works/${idProjet}`, {

        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    })
        .then(function (response) {
            if (response.ok) {
                removeProjetFromProjetAll(idProjet);
                getGallery();
                getProjetsModal();

                alert("Projet supprimé !")
            } else {
                alert("Echec de suppression.");
            }

        })
        .catch((error) => {
            // Gérer les erreurs
            console.error("Erreur lors de la récupération des informations:", error);
        })
}

