// Variable qui sélectionne tous les éléments HTML de la page, renvoie un tableau.
const elements = document.getElementsByTagName("*");
// Variable qui sélectionne l'élement banniere_milieu sur Lemonde.fr
const banniereMilieu = document.getElementById("banniere_milieu");
// Variable pour side-section sur W3School
const sideSection = document.getElementsByClassName("sidesection");
// Variable pour la création d'une couleur aléatoire
const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
// Variables pour l'URL de l'image qui est ajoutée sur les éléments HTML modifiés
// Variable pour la modification du CSS
let urlImg = "url(https://i.kym-cdn.com/photos/images/original/001/866/880/db1.png)";
// Variable pour la modification de "src" d'une image ou d'un "iframe"
let url = "https://i.kym-cdn.com/photos/images/original/001/866/880/db1.png";



console.log("coucou content-script")


// Variables désignant les différents éléments HTML que l'on veut modifier, présents sur LeMonde.fr
const enContinu = document.getElementById("en-continu");
const div = document.getElementsByTagName("div");
const ad = document.getElementById('ad')
const logoLeMonde = document.getElementsByClassName("logo__lemonde")
const obFirst = document.getElementsByClassName("ob-first")
const obShow = document.getElementsByClassName("ob-show") 
const servicesListImg = document.getElementsByClassName("services-list__service-img")
const imgBanniereMilieu = banniereMilieu.getElementsByTagName("img")
const iframeBanniereMilieu = banniereMilieu.getElementsByTagName("iframe")
const area = document.getElementsByClassName("area--featured")
const iframeArea = area[0].getElementsByTagName("iframe")




// Fonction pour changer la couleur, de manière aléatoire, pour un élement HTML spécifié
function setRandomColor(htmlElement) {
    
    console.log("J'écoute")
    console.log(randomColor)
    htmlElement.style.backgroundColor = randomColor;
}

// Fonction pour modifier l'image d'un élément HTML spécifié
function setImage(htmlElement) {
    console.log(typeof htmlElement)
    // if (typeof htmlElement == "object")
    htmlElement[0].style.backgroundImage = urlImg;
    for (let image of htmlElement){
        image.src = url;
    } 
    htmlElement[0].src = url;
}

// Event listeners de clic, pour bien montrer les modifications opérées sur LeMonde.fr
document.addEventListener('click', () => { setRandomColor(enContinu )})
document.addEventListener('click', () => { setImage(logoLeMonde), setImage(obFirst), setImage(obShow), setImage(iframeBanniereMilieu), setImage(iframeArea) })



// Loop pour retrouver l'attribute aria-label ; s'il est égal à Advertisment, alors on le loggue dans la console.
for (let i = 0 ; i < elements.length ; i++) {
    let ariaLabel = elements[i].getAttribute("aria-label")
    if (ariaLabel == "Advertisment"){
    console.log("PUB !!!")
}
}

