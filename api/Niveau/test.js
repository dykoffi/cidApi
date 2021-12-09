"use strict"

const frisby = require('frisby')

const URL = "http://localhost:3983"

describe('Niveau routes tester', () => {

    it("/POST Create new Niveau", () => {
        return frisby
            .post(`${URL}/Niveau`)
            .expectNot("status", 500);
    });

    it("/GET get all Niveau", () => {
        return frisby
            .get(`${URL}/Niveau`)
            .expectNot("status", 500)
    });

    it("/GET/id Show specify Niveau", () => {
        return frisby
            .get(`${URL}/Niveau/1`)
            .expectNot("status", 500)
    });

    it("/PUT/id Modify specify Niveau", () => {
        return frisby
            .put(`${URL}/Niveau/1`)
            .expectNot("status", 500)
    });

    it("/DELETE/id Delete specify Niveau", () => {
        return frisby
            .del(`${URL}/Niveau/1`)
            .expectNot("status", 500)
    });

});