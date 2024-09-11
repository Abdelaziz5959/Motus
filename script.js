//              Nos variables                  

let allKey = document.querySelectorAll(".key");
let supp = document.querySelector(".delete");
let keyEnter = document.querySelector(".enter");
let tableau = document.querySelector(".gridContainer");

//       Fonction touche delete

supp.addEventListener("click",function(){
    let tableauContent = gridContainer.innerText;
    if(tableauContent.length == 0){
        return;
    }
    console.log(tableauContent);
    let newContent = tableauContent.slice(0,tableauContent.length-1);
    gridContainer.innerText = newContent;
});

//          Boucle all key

for(let key of allKey){
    key.addEventListener("click",function(){
        
        if(key.classList.contains("key delete") || key.classList.contains("key enter")
         ){
            return;  
            
        }
       
        console.log(key);
        gridContainer.innerText += key.innerText;
    })
};


