// On affiche le nombre de bulles supprimées dans le h3
const counterDisplay = document.querySelector("h2");
let counter = 0;

// Fonction fléchée pour créer les bulles
const bubbleMaker = () => {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  // Math.random() : Object qui utilise la méthode random (prend nb entre 0 et 1)
  const size = Math.random() * 10 + 5 + "rem";
  bubble.style.height = size;
  bubble.style.width = size;

  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  // Ternaire  : si supérieure à 0.5 ? renvoie 1 : sinon renvoie -1
  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  // Créer une propriété à la variable de style "--left", en piochant un chiffre entre 0 et 1
  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

  // Fonction fléchée : au click, on supprime la bulle et on ajoute +1 au counter
  bubble.addEventListener("click", () => {
    bubble.remove();
    counter++;
    counterDisplay.innerText = counter;
  });

  // On supprime les bulles une fois que leur temps d'animation est terminé (15s dans le CSS)
  setTimeout(() => {
    bubble.remove();
  }, 15000);
};

// On crée une bulle toutes les 200ms
setInterval(bubbleMaker, 200);
