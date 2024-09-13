// Sélection des touches du clavier
let allKey = document.getElementsByClassName("key");
let supp = document.querySelector(".delete");
let keyEnter = document.querySelector(".enter");
let tableau = document.getElementById("gridContainer"); // Correction du sélecteur
let bibiliotheque = ["ABBAYE", "BABINE", "CADRAN", "DECLIN", "FARINE", "JOCKEY", "PAPIER", "TALENT", "VENTRE", "WEBCAM"];
console.log(bibiliotheque);

// Sélection des cellules de la grille
let cells = document.getElementsByClassName("gridCell");
let currentCellIndex = 0; // Garde la trace de la cellule actuelle


// mot aleatoire a partir de ma bibliotheque
const bibliotheque = ["ABBAYE", "BABINE", "CADRAN", "DECLIN", "FARINE", "JOCKEY", "PAPIER", "TALENT", "VENTRE", "WEBCAM"];

function unmot (bibliotheque) {
    const liste = Math.floor(Math.random() * bibliotheque.length);
    return bibliotheque[liste]
    
}
const motChoisiParLalgo = unmot(bibliotheque);
console.log(motChoisiParLalgo);

//  mot aléatoire dans le tableau
function insererMotDansTableau(mot) {
    for (let i = 0; i < mot.length; i++) {
        if (i < cells.length) {
            cells[i].innerText = mot[i];  
        }
    }
}
insererMotDansTableau(motChoisiParLalgo);

// touche supprimer

// Fonction pour la touche delete

supp.addEventListener("click", function () {
    if (currentCellIndex > 0) {
        currentCellIndex--; // Revenir à la cellule précédente
        cells[currentCellIndex].innerText = ""; // Effacer la cellule actuelle
    }
});

// Fonction pour la touche Enter (tu peux adapter selon ton besoin)
keyEnter.addEventListener("click", function () {
    console.log("Enter pressed");
    // Tu peux ajouter ici ta logique spécifique pour Enter
});

// Fonction pour ajouter une lettre dans une cellule
for (let key of allKey) {
    key.addEventListener("click", function () {
        if (key.classList.contains("delete") || key.classList.contains("enter")) {
            return; // Ignorer les touches delete et enter
        }

        if (currentCellIndex < cells.length) {
            cells[currentCellIndex].innerText = key.innerText; // Ajouter la lettre dans la cellule actuelle
            currentCellIndex++; // Passer à la cellule suivante
        }
    });

};




}

