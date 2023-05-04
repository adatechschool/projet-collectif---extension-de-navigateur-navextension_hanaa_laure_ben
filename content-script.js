// Variable qui sélectionne tous les éléments HTML de la page, renvoie un tableau.
const elements = document.getElementsByTagName("*");
// Variable qui sélectionne l'élement banniere_milieu sur Lemonde.fr
// const title = document.getElementById("w3-bar w3-card-2 notranslate w3-white");
// Variable pour side-section sur W3School
function changeColor(){
    let main = document.getElementById("main")
    main.style.backgroundColor = "pink"
    console.log('coucou')
}
changeColor()

// function loadPicture (){
//     let pics = document.getElementById("mainLeaderboard")
//     pics.style.backgroundColor = "red"
// }
// loadPicture()

const img = document.createElement("img")
img.src = "https://www.pinterest.fr/pin/263038434479600308/"
src = doucment.getElementById("pagetop")
src.style.backgroundImage(img)


// Loop pour retrouver l'attribute aria-label ; s'il est égal à Advertisment, alors on le loggue dans la console.
// for (let i = 0 ; i < elements.length ; i++) {
//     let ariaLabel = elements[i].getAttribute("aria-label")
//     if (ariaLabel == "Advertisment"){
//     console.log("PUB !!!")
// }
// }

