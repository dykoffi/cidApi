"use strict"

const { models : { Personne, Projet, Ressource, Categorie, Filiere, Niveau} } = require('./_index')

//Define Relationship between models


Personne.belongsTo(Filiere, {"onDelete":"SET NULL"})
Personne.belongsTo(Niveau, {"onDelete":"SET NULL"})
Personne.belongsToMany(Projet)
Personne.hasMany(Projet)

Projet.belongsTo(Personne, {"as":"chef"})
Projet.belongsTo(Categorie, {"onDelete":"SET NULL"})
Projet.hasMany(Ressource)

Ressource.belongsTo(Projet, {"onDelete":"CASCADE"})

Categorie.hasMany(Projet)

Filiere.hasMany(Personne)

Niveau.hasMany(Personne)

module.exports = { Personne, Projet, Ressource, Categorie, Filiere, Niveau }