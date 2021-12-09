"use strict"

const app = require('./app')
const createError = require('http-errors');
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../docs/_index");


app.use('/Personne', require('../api/Personne/routes.js')); 
app.use('/Projet', require('../api/Projet/routes.js')); 
app.use('/Ressource', require('../api/Ressource/routes.js')); 
app.use('/Categorie', require('../api/Categorie/routes.js')); 
app.use('/Filiere', require('../api/Filiere/routes.js')); 
app.use('/Niveau', require('../api/Niveau/routes.js')); 
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((req, res, next) => { next(createError(404)) });
app.use((err, req, res, next) => {
    res.status(404).json({ error : err.name, message: err.message })
});

module.exports = app