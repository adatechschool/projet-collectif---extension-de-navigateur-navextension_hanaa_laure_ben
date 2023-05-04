// Variable qui sélectionne tous les éléments HTML de la page, renvoie un tableau.
const elements = document.getElementsByTagName("*");
// Variable qui sélectionne l'élement banniere_milieu sur Lemonde.fr
const banniereMilieu = document.getElementById("banniere_milieu");
// Variable pour side-section sur W3School
const sideSection = document.getElementsByClassName("sidesection");

const div = document.getElementsByTagName("div");
const ad = document.getElementById('ad')
const logoLeMonde = document.getElementsByClassName("logo__lemonde")
const obFirst = document.getElementsByClassName("ob-first")
const obShow = document.getElementsByClassName("ob-show")
const servicesListImg = document.getElementsByClassName("services-list__service-img")
const imgBanniereMilieu = banniereMilieu.getElementsByTagName("img")
// Variable pour le bandeau "en-continu" sur LeMonde.fr
const enContinu = document.getElementById("en-continu");

// Fonction pour changer la couleur, de manière aléatoire, pour enContinu
function setRandomColor() {
    let randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    console.log("J'écoute")
    console.log(randomColor)
    enContinu.style.backgroundColor = randomColor;
}

function setImage() {
    let urlImg = "url(https://i.kym-cdn.com/photos/images/original/001/866/880/db1.png)";
    let url = "https://i.kym-cdn.com/photos/images/original/001/866/880/db1.png"
    logoLeMonde[0].style.backgroundImage = urlImg;
    obFirst[0].style.backgroundImage = urlImg;
    for (let image of obShow){
        image.src = url;
    } 
    for (let image of servicesListImg){
        image.src = url;
    }
    console.log(imgBanniereMilieu)
    imgBanniereMilieu[0].src = url;
    // obShow[0].src = url;
}


document.addEventListener('click', setRandomColor)
document.addEventListener('click', setImage)

// enContinu.style.backgroundColor = "#" + randomColor;

// Loop pour retrouver l'attribute aria-label ; s'il est égal à Advertisment, alors on le loggue dans la console.
for (let i = 0 ; i < elements.length ; i++) {
    let ariaLabel = elements[i].getAttribute("aria-label")
    if (ariaLabel == "Advertisment"){
    console.log("PUB !!!")
}
}

