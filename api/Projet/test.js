"use strict"

const frisby = require('frisby')

const URL = "http://localhost:3983"

describe('Projet routes tester', () => {

    it("/POST Create new Projet", () => {
        return frisby
            .post(`${URL}/Projet`)
            .expectNot("status", 500);
    });

    it("/GET get all Projet", () => {
        return frisby
            .get(`${URL}/Projet`)
            .expectNot("status", 500)
    });

    it("/GET/id Show specify Projet", () => {
        return frisby
            .get(`${URL}/Projet/1`)
            .expectNot("status", 500)
    });

    it("/PUT/id Modify specify Projet", () => {
        return frisby
            .put(`${URL}/Projet/1`)
            .expectNot("status", 500)
    });

    it("/DELETE/id Delete specify Projet", () => {
        return frisby
            .del(`${URL}/Projet/1`)
            .expectNot("status", 500)
    });

});