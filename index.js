const counterDisplay = document.querySelector("h3");
let counter = 0;
const bubbleMarker = () => {
    const bubble = document.createElement("span");
    bubble.classList.add("bubble");
    document.body.appendChild(bubble);


    const size = Math.random() * 100 + 100 + "px";
    bubble.style.height = size;
    bubble.style.width = size;

    bubble.style.top = Math.random() * 100 + 50 + "%";
    bubble.style.left = Math.random() * 100 + "%";

    const plusMinus = Math.random() > 0.5 ? 1 : -1;
    bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");


    bubble.addEventListener("click", () => {
        counter++;
        counterDisplay.textContent = counter;
        bubble.remove();

    });

    setTimeout(() => {
        bubble.remove();
    }, 8000);
};


setInterval(bubbleMarker, 1000);



//  1. injection d'une balise span par le createElement
// 2. appliquer le style css à notre élèment bubble grace à classList
// 3 . document.body.appendChild permet de dire au body qu'il a un enfant qui est un bubule et ce buble est un span
// 4. randomiser la taille des bulles *100 + 100 pr etre sur que la bulle fera 100 et pas 0 car 100 x 0 = 0
// 4. on injecte le style hauteur et largeur aux bulles
// 6. bubble.style.setProperty on tuche ntre variable left et on lui inject le mathRandom x 100 pour se déporter soit faire la droite ou la gauche + il faut pas oublier le pourcentage c'est important les unités.
// 7. setInterval va permettre d'appeler la fonction et de jouer le setInterval toute les 300 sec
// 8. déclration de la variable plusMinus en initialisant un math.Random et une condition, appeler un terner.
// 9 après un certain temps les bulles seront supprimé grace au remove et mettre le temps c'est à dire 8 sec grace au setTimeOut
// 10 ajout d'un evenement au clique qui supp la bulle grace au cursor ajouté dans le css
// le H3 va comptabliser le nom de bulle grace au couterDisplay, on le pointe grace au queryselector car c'est du css
// on créer une let compteur pour y avoir accès partout et le faire évoluer avant de le remove grace à l'incrméntation counter ++
// on injecte counter au counterDisplay, l'élèment à droite donne sa valeur à l'élèment à gauche  donc counterDisplay.textContent = counter; pq textContent car on ecrit du texte à l'intérieur 

