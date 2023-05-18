// Importation du module fs

import * as readline from 'node:readline/promises';
import * as fs from 'node:fs/promises';
import {open} from "node:fs/promises";

// Partie 1 : Fonction de gestion de la BlockList des domaines publicitaires :
// Exemple :
// ligne1_a_parser = 0.0.0.0 0001-cab8-4c8c-43de.reporo.net => "repore.net/"
// ligne2_a_parser = 0.0.0.0 0o4vyd7cqp.mentalist.kameleoon.com devient "||mentalist.kameleoon.com/"
// ligne3_a_parser = 0.0.0.0 1220047983.world devient "||1220047983.world/"

function formater_lignes_domaines(ligne) {

// Etape 1: Supprimer la suite 0.0.0.0 + " " du début de la chaine de carcatère => la remplacer par "" :
// => l'expression régulière à utiliser est : regex_suiteZero = "/^0\.0\.0\.0 /"
// ligne_nettoyee_de_zero = ligne_a_parser.remplace("/^0\.0\.0\.0 /", "");

    const regex_suiteZero = /^0.0.0.0 /;
    //console.log("Regex_suiteZero : ", regex_suiteZero);

    const ligne_nettoyee_des_zeros = ligne.replace(regex_suiteZero, "");
    //console.log("Ligne nettoyée des zeros : ", ligne_nettoyee_des_zeros);

// Etape 2: Rechercher le nombre de points et si c'est > à 1 alors supprimer tous les caractères qui précèdent le "."
// ainsi que le "."
// => l'expression régulière à utiliser est : regex_point = "/\./"
// nombre_point = ligne_nettoyee_de_zero.search(regex_point);

    const regex_point = /\./g; // le "g" pour chercher toutes les occurrences de zéro dans la ligne
    //console.log("Regex point : ", regex_point);

    let nombre_point = ligne_nettoyee_des_zeros.match(regex_point).length;
    //console.log("Nombre de point : ", nombre_point);

// *** Récupérer l'index du 1er zéro
    //const index_zero = ligne_nettoyee_des_zeros.indexOf(".");
    const index_zero = ligne_nettoyee_des_zeros.search(regex_point);
    //console.log("index du 1er zéro : ", index_zero);

    let ligne_formatee = "";
// Si c'est > à 1 alors supprimer tous les caractères qui précèdent le "." ainsi que le "." et les remplacer par "||
    if (nombre_point > 1) {
        ligne_formatee = "||" + ligne_nettoyee_des_zeros.slice(index_zero + 1);
    } else {
        ligne_formatee = "||" + ligne_nettoyee_des_zeros;
    }

// Etape 3: Ajout de "/"
    ligne_formatee += "/";
    //console.log("Ligne formatée : ", ligne_formatee);

    return ligne_formatee;
}

//***********************************************  Appel de la fonction  *********************************************//

// Partie 2 : Fonction qui ouvre le fichier txt afin de le lire ligne par ligne :

// Chemin du fichier txt d'entrée

const liste_domaines_txt = await open('adServers_blockList.txt');

const tab_blockList = [];

for await (const ligne of liste_domaines_txt.readLines()) {
    tab_blockList.push(ligne);
}

//console.log("Block liste ", tab_blockList)

let tab_lignes_domaines_formatees = tab_blockList.map(formater_lignes_domaines);
//tab_lignes_domaines_formatees = tab_lignes_domaines_formatees[0].replace(/"/g, "");

console.log("Ligne à formater en fichier json : ", tab_lignes_domaines_formatees);

const tab_Rules = [];

function creerRule_depuis_domaine(domaine, id) {
    return `{"id":${id},"priority": 1,"action":
    {"type": "block"},"condition":
    {"urlFilter": ${domaine},"resourceTypes": ["script"]}}`;
}

for (let i = 0; i < tab_lignes_domaines_formatees; i++) {
    let valeurTab = tab_lignes_domaines_formatees[i];
    tab_Rules.push(creerRule_depuis_domaine(valeurTab, i + 1));
}

console.log("Liste des règles", tab_Rules);


// Chemin du fichier JSON de sortie
const liste_domaines_json = 'adServers_blockList.json';

