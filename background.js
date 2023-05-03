import * as fs from 'fs/promises';

const file = await fs.open('blacklist.txt');

const defaultFilters = [];

for await (const line of file.readLines()) {
    defaultFilters.push(line.trim())
}

// const googleId = document.getElementById("google_ads_iframe_/128139881/LM_lemonde/a_la_une/a_la_une/hp/banniere_milieu_0__container__")

console.log(defaultFilters)

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }},
    { urls: defaultFilters },
    ["blocking"]
)