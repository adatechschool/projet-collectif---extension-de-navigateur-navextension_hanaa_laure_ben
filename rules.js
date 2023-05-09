import * as fs from 'fs/promises';
// import * as config from 'dotenv';

const file = await fs.open('domains.txt');
let idCount = 1;

// Déclaration d'un tableau vide pour stocker les URLs des sites à bloquer
let urlsArray = [];

// Déclaration d'un tableau vide pour stocker les dictionaries à envoyer vers rules.json
let dictionariesArray = [];

let txtId = 0;

// Loop qui lit toutes les lignes du fichier txt et va push chacune des strings dans urlsArray
for await (let line of file.readLines()) {
    if (line.startsWith("#")) {
        line = "";
    } else {
    let newLine = `${txtId++}${line.replace(/^address=/, "*").replace(/0.0.0.0$/, "*").replace(/::$/, "*")}`;
    urlsArray.push(newLine.trim());
}
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
    dictionariesArray.push(ruleDictionary);
    
});

fs.writeFile('correctedDomains.txt', urlsArray);

// Comment faire en sorte de n'écrire que les 30000 premières URLs ?
fs.writeFile("rules1.json", JSON.stringify(dictionariesArray), err => {
    if (err) console.log("Error writing file:", err);
})
    



