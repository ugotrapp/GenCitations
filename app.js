

function getRandomInt(max) {
    return Math.floor(Math.random() * max);    
  }
// tableau des citations 
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
//fonction pour generer les citations et les couleurs aleatoirement 
function updateCitation(){

auteur = document.querySelector(".auteur");
citation = document.querySelector(".citation");  
citation.innerHTML = citations[getRandomInt(9)];  
generateur = document.querySelector('.generateur');

// j'ai utilisé la fonction getramdomint pour generer des nombres aleatoirement entre 0 et 255 , ce qui m'a permis de generer des couleurs aleatoirement a l'aide de rgb
citation.style.color = `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)}) `   
generateur.style.backgroundColor = `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)}) `
myButton.style.backgroundColor = `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)}) `  
auteur.style.color = `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)}) ` 
}

let myButton = document.querySelector(".btn");        // je selectionne la classe .btn et je la stocke dans une variable
myButton.addEventListener("click", updateCitation)   // l'action qui se realise au clic du bouton







 
