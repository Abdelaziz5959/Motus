// Sélection des touches du clavier

let allKey = document.querySelectorAll(".key");
let supp = document.querySelector(".delete");
let keyEnter = document.querySelector(".enter");
let tableau = document.querySelector("#gridContainer"); // Correction du sélecteur
let bibiliotheque = ["ABBAYE", "BABINE", "CADRAN", "DECLIN", "FARINE", "JOCKEY", "PAPIER", "TALENT", "VENTRE", "WEBCAM"];
console.log(bibiliotheque);

// Sélection des cellules de la grille
let cells = document.querySelectorAll(".gridCell");
let currentCellIndex = 0; // Garde la trace de la cellule actuelle
addEventListener
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
=======
let allKey = document.getElementsByClassName("key");
let supp = document.querySelector(".delete");
let keyEnter = document.querySelector(".enter");
let tableau = document.getElementById("gridContainer"); 

// cellule du tableau défini par 0
let cells = document.getElementsByClassName("gridCell");
let currentCellIndex = 0; 

// touche supprimer
supp.addEventListener("click", function () {
    if (currentCellIndex > 0) {
        currentCellIndex--; 
        cells[currentCellIndex].innerText = ""; 
    }
});

// touche entrer
keyEnter.addEventListener("click", function () {
     
});

// Ajouter une lettre dans le tableau
for (let key of allKey) {
    key.addEventListener("click", function () {
        if (key.classList.contains("delete") || key.classList.contains("enter")) {
            return; 
        }

        if (currentCellIndex < cells.length) {
            cells[currentCellIndex].innerText = key.innerText; 
            currentCellIndex++; 
        }
    });
}