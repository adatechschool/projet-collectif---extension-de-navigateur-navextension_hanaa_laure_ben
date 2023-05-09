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
    // let newLine = `${txtId++}${line.replace(/^address=/, "*").replace(/0.0.0.0$/, "*").replace(/::$/, "*")}`;
    let newLine = line.replace(/^address=/, "*").replace(/0.0.0.0$/, "*").replace(/::$/, "*");
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

let firstDictionary = [];
let secondDictionary = [];
let thirdDictionary = []; 
let fourthDictionary = [];
let fifthDictionary = [];
let sixthDictionary = [];
let seventhDictionary = [];
let eigthDictionary = [];
let ninthDictionary = [];
let tenthDictionary = [];

// Comment faire en sorte de n'écrire que les 30000 premières URLs ?
dictionariesArray.forEach(dictionary => {  
switch (true) {
    case dictionary.id < 29999:
        firstDictionary.push(dictionary);
    case dictionary.id < 59999:
        secondDictionary.push(dictionary);
    case dictionary.id < 89999:
        thirdDictionary.push(dictionary);
    case dictionary.id < 119999:
        fourthDictionary.push(dictionary);
    case dictionary.id < 149999:
        fifthDictionary.push(dictionary);
    case dictionary.id < 179999:
        sixthDictionary.push(dictionary);
    case dictionary.id < 209999:
        seventhDictionary.push(dictionary);
    case dictionary.id < 239999:
        eigthDictionary.push(dictionary);
    case dictionary.id < 269999:
        ninthDictionary.push(dictionary);
    case dictionary.id < 299999:
        tenthDictionary.push(dictionary)
}}) 

fs.writeFile("rules1.json", JSON.stringify(firstDictionary), err => {
    if (err) console.log("Error writing file:", err);})
fs.writeFile("rules2.json", JSON.stringify(secondDictionary), err => {
    if (err) console.log("Error writing file:", err);})
fs.writeFile("rules3.json", JSON.stringify(thirdDictionary), err => {
    if (err) console.log("Error writing file:", err);})
fs.writeFile("rules4.json", JSON.stringify(fourthDictionary), err => {
    if (err) console.log("Error writing file:", err);})
fs.writeFile("rules5.json", JSON.stringify(fifthDictionary), err => {
    if (err) console.log("Error writing file:", err);})
fs.writeFile("rules6.json", JSON.stringify(sixthDictionary), err => {
    if (err) console.log("Error writing file:", err);})
fs.writeFile("rules7.json", JSON.stringify(seventhDictionary), err => {
    if (err) console.log("Error writing file:", err);})
fs.writeFile("rules8.json", JSON.stringify(eigthDictionary), err => {
    if (err) console.log("Error writing file:", err);})
fs.writeFile("rules9.json", JSON.stringify(ninthDictionary), err => {
    if (err) console.log("Error writing file:", err);})
fs.writeFile("rules10.json", JSON.stringify(tenthDictionary), err => {
    if (err) console.log("Error writing file:", err);})