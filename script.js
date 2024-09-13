// Sélection des touches du clavier
let allKey = document.getElementsByClassName("key");
let supp = document.querySelector(".delete");
let keyEnter = document.querySelector(".enter");
let tableau = document.getElementById("gridContainer"); // Correction du sélecteur
let bibliotheque = [
  "ABBAYE",
  "BABINE",
  "CADRAN",
  "DECLIN",
  "FARINE",
  "JOCKEY",
  "PAPIER",
  "TALENT",
  "VENTRE",
  "WEBCAM",
];
console.log(bibliotheque);

// Sélection des cellules de la grille
let cells = document.getElementsByClassName("gridCell");
let currentCellIndex = 0; // Garde la trace de la cellule actuelle

function unmot(bibliotheque) {
  const liste = Math.floor(Math.random() * bibliotheque.length);
  return bibliotheque[liste];
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

function unmot(bibliotheque) {
  let liste = Math.floor(Math.random() * bibliotheque.length);
  return bibliotheque[liste];
}
console.log(motChoisiParLalgo);

// Divise la chaîne en caractères
let caracteres = motChoisiParLalgo.split("");
console.log(caracteres);

// afficher la 1ere lettre du mot
const slice = motChoisiParLalgo.slice(0, 1);
console.log(slice);

let mot = document.getElementsByClassName("grid-item");
mot.innerText = bibliotheque;

// Exemple de mot de la bibliothèque
const motDeLaBibliotheque = "EXEMPLE"; // Le mot à partir duquel on veut afficher la première lettre

function afficherPremiereLettre() {
  // Obtenir la première lettre du mot
  const premiereLettre = motChoisiParLalgo.charAt(0);

  // Sélectionner la cellule où afficher la première lettre
  // Ici, nous choisissons la cellule avec l'ID 'cell1' pour l'exemple
  const cellule = document.getElementsByClassName("cells");

  // Afficher la première lettre dans la cellule
  cellule.textContent = premiereLettre;

  console.log(premiereLettre);
}

// Appeler la fonction pour afficher la première lettre
afficherPremiereLettre();
