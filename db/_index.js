"use strict"

const db = require("ciql-secry").db()
const { Personne, Projet, Ressource, Categorie, Filiere, Niveau, } = require('../schema')

exports.models = { 
        Personne: db.define('Personne', Personne.attrs ), 
        Projet: db.define('Projet', Projet.attrs ), 
        Ressource: db.define('Ressource', Ressource.attrs ), 
        Categorie: db.define('Categorie', Categorie.attrs ), 
        Filiere: db.define('Filiere', Filiere.attrs ), 
        Niveau: db.define('Niveau', Niveau.attrs ), 
}

exports.db = db

