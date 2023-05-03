// Variable qui sélectionne tous les éléments HTML de la page, renvoie un tableau.
const elements = document.getElementsByTagName("*");
// Variable qui sélectionne l'élement banniere_milieu sur Lemonde.fr
const banniereMilieu = document.getElementById("banniere_milieu");
// Variable pour side-section sur W3School
const sideSection = document.getElementsByClassName("sidesection");

console.log(sideSection)

// Loop pour retrouver l'attribute aria-label ; s'il est égal à Advertisment, alors on le loggue dans la console.
for (let i = 0 ; i < elements.length ; i++) {
    let ariaLabel = elements[i].getAttribute("aria-label")
    if (ariaLabel == "Advertisment"){
    console.log("PUB !!!")
}
}

