"use strict"

const frisby = require('frisby')

const URL = "http://localhost:3983"

describe('Ressource routes tester', () => {

    it("/POST Create new Ressource", () => {
        return frisby
            .post(`${URL}/Ressource`)
            .expectNot("status", 500);
    });

    it("/GET get all Ressource", () => {
        return frisby
            .get(`${URL}/Ressource`)
            .expectNot("status", 500)
    });

    it("/GET/id Show specify Ressource", () => {
        return frisby
            .get(`${URL}/Ressource/1`)
            .expectNot("status", 500)
    });

    it("/PUT/id Modify specify Ressource", () => {
        return frisby
            .put(`${URL}/Ressource/1`)
            .expectNot("status", 500)
    });

    it("/DELETE/id Delete specify Ressource", () => {
        return frisby
            .del(`${URL}/Ressource/1`)
            .expectNot("status", 500)
    });

});