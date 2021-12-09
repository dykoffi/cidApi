"use strict"

const router = require('express').Router()
const { Personne } = require('../../db/_relations')

router

    /**
     * @descr Create new Personne
     * @route POST /Personne
     * @access public
     */

    .post("/", async (req, res) => {

        Personne.create(req.body)
            .then(data => { res.status(201).json(data) })
            .catch(error => { res.status(500).json({ error: error.name, message: error.message }) })

    })

    /**
    * @descr get all Personne
    * @route GET /Personne
    * @access public
    */

    .get("/", async (req, res) => {

        Personne.findAll({ where: req.query, order: [['id', 'ASC']] })
            .then(data => { res.json(data) })
            .catch(error => { res.status(500).json({ error: error.name, message: error.message }) })

    })

    /**
    * @descr Show specify Personne identified bi id
    * @route GET /Personne/id
    * @access public
    */

    .get("/:id", async (req, res) => {

        Personne.findByPk(req.params.id)
            .then(data => {
                if (data !== null) {
                    res.status(200).json(data)
                } else {
                    res.status(404).json({ message: "Personne not found" })
                }
            })
            .catch(error => { res.status(500).json({ error: error.name, message: error.message }) })

    })

    /**
    * @descr Modify specify Personne identified bi id
    * @route PUT /Personne/id
    * @access public
    */

    .put("/:id", async (req, res) => {

        Personne.update(req.body, { where: { id: req.params.id } })
            .then(data => {
                if (data[0] === 1) {
                    res.status(201).json({ message: "Personne updated succefully" })
                } else {
                    res.status(404).json({ message: "Personne not found" })
                }
            })
            .catch(error => { res.status(500).json({ error: error.name, message: error.message }) })

    })

    /**
    * @descr Delete specify Personne identified bi id
    * @route DELETE /Personne/id
    * @access public
    */

    .delete("/:id", async (req, res) => {

        Personne.destroy({ where: { id: req.params.id } })
            .then(data => {
                if (data === 1) {
                    res.status(201).json({ message: "Personne deleted succefully" })
                } else {
                    res.status(404).json({ message: "Personne not found" })
                }
            })
            .catch(error => { res.status(500).json({ error: error.name, message: error.message }) })

    })

module.exports = router
