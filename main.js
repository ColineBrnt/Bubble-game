// Constantes globales
const counterDisplay = document.querySelector("h2");
const bubbleInterval = 200; // Intervalle entre chaque bulle en ms
const bubbleDuration = 15000; // Durée de vie d'une bulle en ms
let counter = 0;

// Fonction pour générer un nombre aléatoire dans une plage donnée
const getRandomValue = (min, max) => Math.random() * (max - min) + min;

// Fonction pour créer les bulles
const bubbleMaker = () => {
  if (!counterDisplay) {
    console.error("Élément h2 non trouvé !");
    return;
  }

  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  // Taille aléatoire de la bulle
  const size = `${getRandomValue(5, 15)}rem`;
  bubble.style.height = size;
  bubble.style.width = size;

  // Position aléatoire
  bubble.style.top = `${getRandomValue(50, 100)}%`;
  bubble.style.left = `${getRandomValue(0, 100)}%`;

  // Mouvement horizontal aléatoire
  const plusMinus = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty("--left", `${getRandomValue(0, 100) * plusMinus}%`);

  // Gestion du clic : suppression et mise à jour du compteur
  bubble.addEventListener("click", () => {
    bubble.remove();
    counter++;
    counterDisplay.innerText = counter;
  });

  // Suppression automatique après la durée définie
  setTimeout(() => {
    bubble.remove();
  }, bubbleDuration);
};

// Initialisation des bulles à intervalles réguliers
setInterval(bubbleMaker, bubbleInterval);
