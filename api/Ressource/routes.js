"use strict"

const router = require('express').Router()
const { Ressource } = require('../../db/_relations')

router

    /**
     * @descr Create new Ressource
     * @route POST /Ressource
     * @access public
     */

    .post("/", async (req, res) => {

        Ressource.create(req.body)
            .then(data => { res.status(201).json(data) })
            .catch(error => { res.status(500).json({ error: error.name, message: error.message }) })

    })

    /**
    * @descr get all Ressource
    * @route GET /Ressource
    * @access public
    */

    .get("/", async (req, res) => {

        Ressource.findAll({ where: req.query, order: [['id', 'ASC']] })
            .then(data => { res.json(data) })
            .catch(error => { res.status(500).json({ error: error.name, message: error.message }) })

    })

    /**
    * @descr Show specify Ressource identified bi id
    * @route GET /Ressource/id
    * @access public
    */

    .get("/:id", async (req, res) => {

        Ressource.findByPk(req.params.id)
            .then(data => {
                if (data !== null) {
                    res.status(200).json(data)
                } else {
                    res.status(404).json({ message: "Ressource not found" })
                }
            })
            .catch(error => { res.status(500).json({ error: error.name, message: error.message }) })

    })

    /**
    * @descr Modify specify Ressource identified bi id
    * @route PUT /Ressource/id
    * @access public
    */

    .put("/:id", async (req, res) => {

        Ressource.update(req.body, { where: { id: req.params.id } })
            .then(data => {
                if (data[0] === 1) {
                    res.status(201).json({ message: "Ressource updated succefully" })
                } else {
                    res.status(404).json({ message: "Ressource not found" })
                }
            })
            .catch(error => { res.status(500).json({ error: error.name, message: error.message }) })

    })

    /**
    * @descr Delete specify Ressource identified bi id
    * @route DELETE /Ressource/id
    * @access public
    */

    .delete("/:id", async (req, res) => {

        Ressource.destroy({ where: { id: req.params.id } })
            .then(data => {
                if (data === 1) {
                    res.status(201).json({ message: "Ressource deleted succefully" })
                } else {
                    res.status(404).json({ message: "Ressource not found" })
                }
            })
            .catch(error => { res.status(500).json({ error: error.name, message: error.message }) })

    })

module.exports = router
