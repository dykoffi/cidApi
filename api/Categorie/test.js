"use strict"

const frisby = require('frisby')

const URL = "http://localhost:3983"

describe('Categorie routes tester', () => {

    it("/POST Create new Categorie", () => {
        return frisby
            .post(`${URL}/Categorie`)
            .expectNot("status", 500);
    });

    it("/GET get all Categorie", () => {
        return frisby
            .get(`${URL}/Categorie`)
            .expectNot("status", 500)
    });

    it("/GET/id Show specify Categorie", () => {
        return frisby
            .get(`${URL}/Categorie/1`)
            .expectNot("status", 500)
    });

    it("/PUT/id Modify specify Categorie", () => {
        return frisby
            .put(`${URL}/Categorie/1`)
            .expectNot("status", 500)
    });

    it("/DELETE/id Delete specify Categorie", () => {
        return frisby
            .del(`${URL}/Categorie/1`)
            .expectNot("status", 500)
    });

});