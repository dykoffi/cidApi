const { DataTypes } = require('sequelize')
const { protectField: $, init } = require('ciql-secry')

module.exports = init({

    Personne: {
        attrs: {
            matricule: { type: DataTypes.STRING },
            nom: { type: DataTypes.STRING },
            prenoms: { type: DataTypes.STRING },
            photo: { type: DataTypes.STRING },
            email: { type: DataTypes.STRING },
            telephone: { type: DataTypes.STRING }
        },
        rels: [
            { type: "belongsTo", model: "Filiere", options: { onDelete: "SET NULL" } },
            { type: "belongsTo", model: "Niveau", options: { onDelete: "SET NULL" } },
            { type: "belongsToMany", model: "Projet" },
            { type: "hasMany", model: "Projet" },
        ]
    },
    Projet: {
        attrs: {
            nom: { type: DataTypes.STRING },
            logo: { type: DataTypes.STRING },
            resume: { type: DataTypes.STRING },
            description: { type: DataTypes.TEXT },
            statut: { type: DataTypes.TEXT },
            dateDebut: { type: DataTypes.DATE },
            dateFin: { type: DataTypes.DATE },
        },
        rels: [
            { type: "belongsTo", model: "Personne", options: { as: 'chef' } },
            { type: "belongsTo", model: "Categorie", options: { onDelete: "SET NULL" } },
            { type: "hasMany", model: "Ressource" },
        ]
    },

    Ressource: {
        attrs: {
            titre: { type: DataTypes.STRING },
            lien: { type: DataTypes.STRING },
            type: { type: DataTypes.STRING }
        },
        rels: [
            { type: "belongsTo", model: "Projet", options: { onDelete: "CASCADE" } }
        ]
    },

    Categorie: {
        attrs: {
            nom: { type: DataTypes.STRING },
        },
        rels: [
            { type: "hasMany", model: "Projet" }
        ]
    },


    Filiere: {
        attrs: {
            nom: { type: DataTypes.STRING },
        },
        rels: [
            { type: "hasMany", model: "Personne" }
        ]
    },

    Niveau: {
        attrs: {
            nom: { type: DataTypes.STRING },
        },
        rels: [
            { type: "hasMany", model: "Personne" }
        ]
    },


})