// fonction pour generer des nombres aleatoirement

function getRandomInt(max) {
    return Math.floor(Math.random() * max);    
  }
// fonction  pour generer des couleurs aleatoirement (trouvé sur le net)

  function getRandomColor() {                  

    let letters = '0123456789ABCDEF';

    let color = '#';

    for (let i = 0; i < 6; i++) {

      color += letters[Math.floor(Math.random() * 16)];

    }

    return color;

  }
// le tableau contenant les citations



let citations = ["Chuck Norris est en couleur sur les photos Noir et Blanc.",

                "Chuck Norris a déjà compté jusqu'à l'infini. Deux fois.",
            
                "Chuck Norris est contre les radars automatiques : ça l'éblouit lorsqu'il fait du vélo.",

                "Un aigle peut lire un journal à 1400 mètres de distance. Chuck Norris peut tourner la page.",

                "Chuck Norris est mort depuis 10 ans, mais la Mort n'a pas encore trouvé le courage d'aller lui dire.",

                "Quand Google ne trouve pas quelque chose, il demande à Chuck Norris.",

                "Chuck Norris peut encercler ses ennemis. Tout seul.",

                "Chuck Norris sait parler le braille.",

                "Quand Chuck Norris marche sur un râteau, le rateau se prend Chuck Norris dans la gueule.",

                "Chuck Norris a fini son forfait illimité."
            ]

            
          

function updateCitation() {  // fonction contenant toutes les modifications des citations

  

    auteur = document.querySelector(".auteur");

    citation = document.querySelector(".citation");  // retourne l'element citation (classe html)

    citation.innerHTML = citations[getRandomInt(9)];  // remplace le texte contenu dans le paragraphe par une des citations du tableau créé ci dessus
        
    bloc = document.querySelector(".container");     // retourne l'element container ( classe html)

    citation.style.color = getRandomColor() ;         // change la couleur de la citation aleatoirement au clic du bouton

    bloc.style.backgroundColor = getRandomColor(); // change la couleur du fond au clic du bouton
    
    myButton.style.backgroundColor = getRandomColor(); // change la couleur du bouton au clic de celui ci

    auteur.style.color = getRandomColor(); 
}

let myButton = document.querySelector(".btn");    // retourne l'element bouton

console.log(myButton);   //j'affiche la variable dans la console du navigateur

myButton.addEventListener("click", updateCitation)   // l'action qui se realise au clic du bouton






