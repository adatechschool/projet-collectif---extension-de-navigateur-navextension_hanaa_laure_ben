console.time()
import { Octokit } from "octokit";
import * as dotenv from 'dotenv';
import * as fs from 'fs/promises';

dotenv.config()

// Instance d'Octokit, l'outil de l'API de GitHub, en s'authentifiant avec la variable d'environnement (dotenv).
const octokit = new Octokit({ auth: process.env.USER_TOKEN });

// Réponse de l'API de GitHub
const response = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
    mediaType: {
        format: "raw"
    },
    owner: "notracking",
    repo: "hosts-blocklists",
    path: "domains.txt"
}
)

// Ecriture des données dans domains.txt, puis ouverture du fichier.
let data = await fs.writeFile('domains.txt', response.data);
let file = await fs.open('domains.txt');


// Déclaration d'un tableau vide pour stocker les URLs des sites à bloquer
let urlsArray = [];

// Déclaration d'un tableau vide pour stocker les dictionaries à envoyer vers rules.json
let dictionariesArray = [];

// let txtId = 0;

// Loop qui lit toutes les lignes du fichier txt et va push chacune des strings dans urlsArray
for await (let line of file.readLines()) {
    if (line.startsWith("#")) {
        line = "";
    } else {
    // let newLine = `${txtId++}${line.replace(/^address=/, "*").replace(/0.0.0.0$/, "*").replace(/::$/, "*")}`;
    let newLine = line.replace(/^address=/, "*").replace(/0.0.0.0$/, "*").replace(/::$/, "*");
    urlsArray.push(newLine.trim());
}
};

// Ajout dans dictionariesArray de chaque url présente dans blacklist.txt, 
// en respectant le format du dictionnaire demandé par rules.json
let idCount = 1;
urlsArray.forEach(url => {
    let ruleDictionary = {
        id: parseInt(`${idCount++}`),
        priority: 1,
        action: { type: "block" },
        condition: { urlFilter: `${url}`, resourceTypes: ["image",
        "media",
        "main_frame",
        "sub_frame",
        "stylesheet",
        "script",
        "font",
        "xmlhttprequest",
        "ping",
        "websocket",
        "other"] }
    };
    dictionariesArray.push(ruleDictionary);    
});

// fs.writeFile('correctedDomains.json', JSON.stringify(dictionariesArray));

let dictionary1 = [];
let dictionary2 = [];
let dictionary3 = []; 
let dictionary4 = [];
let dictionary5 = [];
let dictionary6 = [];
let dictionary7 = [];
let dictionary8 = [];
let dictionary9 = [];
let dictionary10 = [];

// Comment faire en sorte de n'écrire que les 30000 premières URLs ?
dictionariesArray.forEach(dictionary => {  
// switch (true) {
//     case (dictionary.id < 29999):
//         dictionary1.push(dictionary);
//     case (dictionary.id >= 30000 && dictionary.id <= 59999):
//         dictionary2.push(dictionary);
//     case (dictionary.id >= 60000 && dictionary.id <= 89999):
//         dictionary3.push(dictionary);
//     case (dictionary.id >= 90000 && dictionary.id <= 119999):
//         dictionary4.push(dictionary);
//     case (dictionary.id >= 120000 && dictionary.id <= 149999):
//         dictionary5.push(dictionary);
//     case (dictionary.id >= 150000 && dictionary.id <= 179999):
//         dictionary6.push(dictionary);
//     case (dictionary.id >= 180000 && dictionary.id <= 209999):
//         dictionary7.push(dictionary);
//     case (dictionary.id >= 210000 && dictionary.id <= 239999):
//         dictionary8.push(dictionary);
//     case (dictionary.id >= 240000 && dictionary.id <= 269999):
//         dictionary9.push(dictionary);
//     case (dictionary.id >= 270000 && dictionary.id <= 299999):
//         dictionary10.push(dictionary);
// }
    if (dictionary.id <= 29999){
    dictionary1.push(dictionary);
    }   
    else if (dictionary.id >= 30000 && dictionary.id <= 59999){
    dictionary2.push(dictionary);
    }   
    else if (dictionary.id >= 60000 && dictionary.id <= 89999){
    dictionary3.push(dictionary);
    }
    else if (dictionary.id >= 90000 && dictionary.id <= 119999){
    dictionary4.push(dictionary);
    }
    else if (dictionary.id >= 120000 && dictionary.id <= 149999){
    dictionary5.push(dictionary);
    }
    else if (dictionary.id >= 150000 && dictionary.id <= 179999){
    dictionary6.push(dictionary);
    }
    else if (dictionary.id >= 180000 && dictionary.id <= 209999){
    dictionary7.push(dictionary);
    }
    else if (dictionary.id >= 210000 && dictionary.id <= 239999){
    dictionary8.push(dictionary);
    }
    else if (dictionary.id >= 240000 && dictionary.id <= 269999){
    dictionary9.push(dictionary);
    }
    else if (dictionary.id >= 270000 && dictionary.id <= 299999){
    dictionary10.push(dictionary);
    }}); 

for (let i = 1 ; i < 11 ; i++ ){
fs.writeFile(`rules${i}.json`, JSON.stringify(eval(`dictionary${i}`)), err => {
    if (err) console.log("Error writing file:", err);})
};    

console.timeEnd()