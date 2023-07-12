//variables global
let numbers = document.querySelectorAll('#number')
//fonction qui affiche le résultata en le calculant
function Result() {
    let affichage = document.getElementById('affichage').value
                let b = eval(affichage) 
                document.getElementById('result').value = b 
}

 //fonction qui affiche la valeur
 function afficher(val) 
 { 
     document.getElementById('affichage').value+=val 
 } 

 //fonction qui efface l'écran 
 function effacer() 
 { 
     document.getElementById('affichage').value = "" 
     document.getElementById('result').value =""
 } 
 function effacerPart() 
 { 
    
        const dernier = document.getElementById('affichage').value; //on enregistre les élements de l'écran dans une variable
        document.getElementById('affichage').value = dernier.substr(0, dernier.length - 1); //on retire enfin le dernier élément à cette valeur d'écran
      
 } 

//resultat

