// Sélection des touches du clavier
let allKey = document.getElementsByClassName("key");
let supp = document.querySelector(".delete");
let keyEnter = document.querySelector(".enter");
let tableau = document.getElementById("gridContainer"); // Correction du sélecteur
const bibliotheque = ["ABBAYE", "BABINE", "CADRAN", "DECLIN", "FARINE", "JOCKEY", "PAPIER", "TALENT", "VENTRE", "WEBCAM"];
console.log(bibliotheque);

// Sélection des cellules de la grille
let cells = document.getElementsByClassName("gridCell");
let currentCellIndex = 0; // Garde la trace de la cellule actuelle

function unmot (bibliotheque) {
    const liste = Math.floor(Math.random() * bibliotheque.length);
    return bibliotheque[liste]
}

const motChoisiParLalgo = unmot(bibliotheque);
console.log(motChoisiParLalgo);

// Divise la chaîne en caractères
let caracteres = motChoisiParLalgo.split(""); 
console.log(caracteres);

// afficher la 1ere lettre du mot 
const sliceExample = motChoisiParLalgo.slice(0, 1);
console.log(sliceExample);

function firstletter() {
    // Assure-toi que motChoisiParLalgo est défini comme une chaîne de caractères
    const motChoisiParLalgo = ""; // Remplace ceci par ton mot choisi par l'algorithme
     currentCellIndex// Affiche la première lettre ou "." si le mot est vide
    return motChoisiParLalgo.length > 0 ? motChoisiParLalgo[0] : ".";
    
};

// Affiche le résultat de la fonction dans la console
console.log(firstletter());

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
}


// // test boucle biblio

// function unmot (bibliotheque) {
//     const liste = Math.floor(Math.random() * bibliotheque.length);
//     return bibliotheque[liste]
// }

// const motChoisiParLalgo = unmot(bibliotheque);
// console.log(motChoisiParLalgo);

// // Divise la chaîne en caractères
// let caracteres = motChoisiParLalgo.split(""); 
// console.log(caracteres);

// // afficher la 1ere lettre du mot 
// const sliceExample = motChoisiParLalgo.slice(0, 1);
// console.log(sliceExample);

// function firstletter(){
//     for (let i = 0 ; i< motChoisiParLalgo.length;  i++);
//     motChoisiParLalgo.textContent = index === 0 ? caractere : ".";
    
// };
// console.log(firstletter)

// function firstletter() {
//     // Assure-toi que motChoisiParLalgo est défini comme une chaîne de caractères
//     const motChoisiParLalgo = ""; // Remplace ceci par ton mot choisi par l'algorithme
//     //// Affiche la première lettre ou "." si le mot est vide
//     return motChoisiParLalgo.length > 0 ? motChoisiParLalgo[0] : ".";
// }

// // Affiche le résultat de la fonction dans la console
// console.log(firstletter());


