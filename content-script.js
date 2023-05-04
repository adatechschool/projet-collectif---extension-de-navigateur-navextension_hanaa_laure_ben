function switchDisplay(){

    /* Variable bannerGif qui sélectionne l'élément du <iframe> sur le site press-citron :
    <iframe id="google_ads_iframe_/21883197849/presse-citron.net/lifestyle_0"
            name="google_ads_iframe_/21883197849/presse-citron.net/lifestyle_0" title="3rd party ad content" width="970"
            height="250" scrolling="no" marginWidth="0" marginHeight="0" frameBorder="0" role="region"
            aria-label="Advertisement" tabIndex="0" style="border: 0px; vertical-align: bottom;"
            data-load-complete="true" data-google-container-id="1">
    </iframe>
    */

    const bannereGif = document.getElementById("google_ads_iframe_/21883197849/presse-citron.net/lifestyle_0");

    // Variable bannerJpeg qui contient l'image sélectionnée à travers son URL et qui va remplacer bannerGif :
    const bannerJpeg = document.createElement("iframe");

    bannerJpeg.setAttribute("src", "https://png.pngtree.com/background/20210709/original/pngtree-red-festive-irregular-simple-background-material-picture-image_915588.jpg");

    //Remplacer bannereGif par bannerJpeg
    bannereGif.replaceChild(bannereGif,bannerJpeg) ;
}

switchDisplay()


/*// Variable qui sélectionne tous les éléments HTML de la page, renvoie un tableau :
const elements = document.getElementsByTagName("*");

// Loop pour retrouver l'attribut aria-label ; s'il est égal à "Advertisment", alors on l'affiche dans la console.log
for (let i = 0 ; i < elements.length ; i++) {
let ariaLabel = elements[i].getAttribute("aria-label")
if (ariaLabel === "Advertisment"){
console.log("PUB !!!")
}
}

Créer l'élément "img" et l'affecter à la constante "bannerJpeg" afin de contenir la nouvelle bannière qui va
contenir l'image ajoutée dans le dossier "imgs" :
const bannerJpeg = document.createElement('img');

Variable pour side-section sur W3School
const sideSection = document.getElementsByClassName("sidesection");

console.log(sideSection)

*/

