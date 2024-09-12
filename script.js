// Sélection des touches du clavier
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