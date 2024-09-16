
let allKey = document.getElementsByClassName("key");
let supp = document.querySelector(".delete");
let keyEnter = document.querySelector(".enter");
let tableau = document.getElementById("gridContainer");
let bibliotheque = ["ABBAYE", "BABINE", "CADRAN", "DECLIN", "FARINE", "JOCKEY", "PAPIER", "TALENT", "VENTRE", "WEBCAM"];
console.log(bibliotheque);
const limite = 6

let cells = document.getElementsByClassName("gridCell");
let currentCellIndex = 1; 
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
        return motChoisiParLalgo.length > 0 ? motChoisiParLalgo[0] : ".";
    }
}
insererMotDansTableau(motChoisiParLalgo);

// touche supprimer

supp.addEventListener("click", function () {
    if (currentCellIndex > 0) {
        currentCellIndex--; 
        cells[currentCellIndex].innerText = "";
    }
});

// Fonction pour la touche Enter 
keyEnter.addEventListener("click", function () {
  
    let motComposer  = "";
  
    for (let i = 0; i < limite; i++) {
        motComposer += cells[i].innerText;
    }
    motComposer = motComposer.trim(); // supp les espaces
    console.log("Mot formé :", motComposer);

    if (bibliotheque.includes(motComposer)) {
        alert ("le mot former existe")
        console.log("Le mot formé correspond à un mot de la bibliothèque.");
    } else {
        alert ("le mot former n'existe pas")
        console.log("Le mot formé ne correspond pas.");
    } 

});

// Fonction pour ajouter une lettre dans une cellule
for (let key of allKey) {
    key.addEventListener("click", function () {
        if (key.classList.contains("delete") || key.classList.contains("enter")) {
            return; 
        }
       
   if (currentCellIndex >= limite) {
    
    return;
 }
        if (currentCellIndex < cells.length) {
            cells[currentCellIndex].innerText = key.innerText; 
            currentCellIndex++; 
        }
        
    });

};






