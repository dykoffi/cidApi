"use strict"

const router = require('express').Router()
const { Filiere } = require('../../db/_relations')

router

    /**
     * @descr Create new Filiere
     * @route POST /Filiere
     * @access public
     */

    .post("/", async (req, res) => {

        Filiere.create(req.body)
            .then(data => { res.status(201).json(data) })
            .catch(error => { res.status(500).json({ error: error.name, message: error.message }) })

    })

    /**
    * @descr get all Filiere
    * @route GET /Filiere
    * @access public
    */

    .get("/", async (req, res) => {

        Filiere.findAll({ where: req.query, order: [['id', 'ASC']] })
            .then(data => { res.json(data) })
            .catch(error => { res.status(500).json({ error: error.name, message: error.message }) })

    })

    /**
    * @descr Show specify Filiere identified bi id
    * @route GET /Filiere/id
    * @access public
    */

    .get("/:id", async (req, res) => {

        Filiere.findByPk(req.params.id)
            .then(data => {
                if (data !== null) {
                    res.status(200).json(data)
                } else {
                    res.status(404).json({ message: "Filiere not found" })
                }
            })
            .catch(error => { res.status(500).json({ error: error.name, message: error.message }) })

    })

    /**
    * @descr Modify specify Filiere identified bi id
    * @route PUT /Filiere/id
    * @access public
    */

    .put("/:id", async (req, res) => {

        Filiere.update(req.body, { where: { id: req.params.id } })
            .then(data => {
                if (data[0] === 1) {
                    res.status(201).json({ message: "Filiere updated succefully" })
                } else {
                    res.status(404).json({ message: "Filiere not found" })
                }
            })
            .catch(error => { res.status(500).json({ error: error.name, message: error.message }) })

    })

    /**
    * @descr Delete specify Filiere identified bi id
    * @route DELETE /Filiere/id
    * @access public
    */

    .delete("/:id", async (req, res) => {

        Filiere.destroy({ where: { id: req.params.id } })
            .then(data => {
                if (data === 1) {
                    res.status(201).json({ message: "Filiere deleted succefully" })
                } else {
                    res.status(404).json({ message: "Filiere not found" })
                }
            })
            .catch(error => { res.status(500).json({ error: error.name, message: error.message }) })

    })

module.exports = router
