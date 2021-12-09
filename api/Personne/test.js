"use strict"

const frisby = require('frisby')

const URL = "http://localhost:3983"

describe('Personne routes tester', () => {

    it("/POST Create new Personne", () => {
        return frisby
            .post(`${URL}/Personne`)
            .expectNot("status", 500);
    });

    it("/GET get all Personne", () => {
        return frisby
            .get(`${URL}/Personne`)
            .expectNot("status", 500)
    });

    it("/GET/id Show specify Personne", () => {
        return frisby
            .get(`${URL}/Personne/1`)
            .expectNot("status", 500)
    });

    it("/PUT/id Modify specify Personne", () => {
        return frisby
            .put(`${URL}/Personne/1`)
            .expectNot("status", 500)
    });

    it("/DELETE/id Delete specify Personne", () => {
        return frisby
            .del(`${URL}/Personne/1`)
            .expectNot("status", 500)
    });

});