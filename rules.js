import * as fs from 'fs/promises';
import * as config from 'config.env';

const file = await fs.open('blacklist.txt');
let idCount = 1;

// Déclaration d'un tableau vide pour stocker les URLs des sites à bloquer
let urlsArray = [];

// Déclaration d'un tableau vide pour stocker les dictionaries à envoyer vers rules.json
let dictionariesArray = [];

// Loop qui lit toutes les lignes du fichier txt et va push chacune des strings dans urlsArray
for await (const line of file.readLines()) {
    urlsArray.push(line.trim())
};

// Ajout dans dictionariesArray de chaque url présente dans blacklist.txt, 
// en respectant le format du dictionnaire demandé par rules.json

urlsArray.forEach(url => {
    let ruleDictionary = {
        id: parseInt(`${idCount++}`),
        priority: 1,
        action: { type: "block" },
        condition: { urlFilter: `${url}`, resourceTypes: ["image"] }
    };
    dictionariesArray.push(ruleDictionary)
});

fs.writeFile("rules.json", JSON.stringify(dictionariesArray), err => {
    if (err) console.log("Error writing file:", err)
})
