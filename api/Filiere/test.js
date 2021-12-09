"use strict"

const frisby = require('frisby')

const URL = "http://localhost:3983"

describe('Filiere routes tester', () => {

    it("/POST Create new Filiere", () => {
        return frisby
            .post(`${URL}/Filiere`)
            .expectNot("status", 500);
    });

    it("/GET get all Filiere", () => {
        return frisby
            .get(`${URL}/Filiere`)
            .expectNot("status", 500)
    });

    it("/GET/id Show specify Filiere", () => {
        return frisby
            .get(`${URL}/Filiere/1`)
            .expectNot("status", 500)
    });

    it("/PUT/id Modify specify Filiere", () => {
        return frisby
            .put(`${URL}/Filiere/1`)
            .expectNot("status", 500)
    });

    it("/DELETE/id Delete specify Filiere", () => {
        return frisby
            .del(`${URL}/Filiere/1`)
            .expectNot("status", 500)
    });

});