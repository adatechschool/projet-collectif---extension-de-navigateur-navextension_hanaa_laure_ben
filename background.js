import * as fs from 'fs/promises';

const file = await fs.open('blacklist.txt');

const elements = document.getElementsByTagName("*");
const banniereMilieu = document.getElementById("banniere_milieu");

const defaultFilters = [];

for await (const line of file.readLines()) {
    defaultFilters.push(line.trim())
}


const ariaLabel = elements.getAttribute("aria-label");

if (ariaLabel == "Advertisment"){
    console.log("Ceci est une publicité")
}

// const googleId = document.getElementById("google_ads_iframe_/128139881/LM_lemonde/a_la_une/a_la_une/hp/banniere_milieu_0__container__")

console.log(defaultFilters)

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }},
    { urls: defaultFilters },
    ["blocking"]
)