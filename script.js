// Sélection des touches du clavier
let allKey = document.getElementsByClassName("key");
let supp = document.querySelector(".delete");
let keyEnter = document.querySelector(".enter");
let tableau = document.getElementById("gridContainer"); 

// cellule du tableau défini par 0
let cells = document.getElementsByClassName("gridCell");
let currentCellIndex = 0; 

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
};



