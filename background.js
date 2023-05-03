// Importation du module File System de Node
import * as fs from 'fs/promises';

// Lecture du fichier blacklist.txt
const file = await fs.open('blacklist.txt');

// Déclaration d'un tableau vide pour stocker les URLs des sites à bloquer
const defaultFilters = [];

// Loop qui lit toutes les lignes du fichier txt et va push chacune des strings dans defaultFilters
for await (const line of file.readLines()) {
    defaultFilters.push(line.trim())
}

// const googleId = document.getElementById("google_ads_iframe_/128139881/LM_lemonde/a_la_une/a_la_une/hp/banniere_milieu_0__container__")

console.log(defaultFilters)

// Bloquage des sites à partir de webRequest
chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }},
    { urls: defaultFilters },
    ["blocking"]
)