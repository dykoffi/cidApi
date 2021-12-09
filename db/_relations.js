"use strict"

const { models : { Personne, Projet, Ressource, Categorie, Filiere, Niveau} } = require('./_index')

//Define Relationship between models


Personne.belongsTo(Filiere, {"onDelete":"SET NULL"})
Personne.belongsTo(Niveau, {"onDelete":"SET NULL"})
Personne.belongsToMany(Projet, {"through":"Projet_Membre"})
Personne.hasMany(Projet)

Projet.belongsTo(Categorie, {"onDelete":"SET NULL"})
Projet.hasMany(Ressource)
Projet.belongsTo(Personne, {"as":"chef"})
Projet.belongsToMany(Personne, {"through":"Projet_Membre"})

Ressource.belongsTo(Projet, {"onDelete":"CASCADE"})

Categorie.hasMany(Projet)

Filiere.hasMany(Personne)

Niveau.hasMany(Personne)

module.exports = { Personne, Projet, Ressource, Categorie, Filiere, Niveau }