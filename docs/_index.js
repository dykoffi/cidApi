"use strict"

const generalDocs = require("./info.json")

const PersonneDocs = require('../api/Personne/docs.json') 
const ProjetDocs = require('../api/Projet/docs.json') 
const RessourceDocs = require('../api/Ressource/docs.json') 
const CategorieDocs = require('../api/Categorie/docs.json') 
const FiliereDocs = require('../api/Filiere/docs.json') 
const NiveauDocs = require('../api/Niveau/docs.json') 

module.exports = {
    ...generalDocs,
    paths: { 
        ...PersonneDocs, 
        ...ProjetDocs, 
        ...RessourceDocs, 
        ...CategorieDocs, 
        ...FiliereDocs, 
        ...NiveauDocs,
    }
}