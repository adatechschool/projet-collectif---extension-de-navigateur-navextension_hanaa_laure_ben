import * as fs from 'fs/promises';

const file = await fs.open('blacklist.txt');

const defaultFilters = [];

for await (const line of file.readLines()) {
    defaultFilters.push(line.trim())
}


console.log(defaultFilters)

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }},
    { urls: defaultFilters },
    ["blocking"]
)