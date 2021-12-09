"use strict"

const router = require('express').Router()
const { Niveau } = require('../../db/_relations')

router

    /**
     * @descr Create new Niveau
     * @route POST /Niveau
     * @access public
     */

    .post("/", async (req, res) => {

        Niveau.create(req.body)
            .then(data => { res.status(201).json(data) })
            .catch(error => { res.status(500).json({ error: error.name, message: error.message }) })

    })

    /**
    * @descr get all Niveau
    * @route GET /Niveau
    * @access public
    */

    .get("/", async (req, res) => {

        Niveau.findAll({ where: req.query, order: [['id', 'ASC']] })
            .then(data => { res.json(data) })
            .catch(error => { res.status(500).json({ error: error.name, message: error.message }) })

    })

    /**
    * @descr Show specify Niveau identified bi id
    * @route GET /Niveau/id
    * @access public
    */

    .get("/:id", async (req, res) => {

        Niveau.findByPk(req.params.id)
            .then(data => {
                if (data !== null) {
                    res.status(200).json(data)
                } else {
                    res.status(404).json({ message: "Niveau not found" })
                }
            })
            .catch(error => { res.status(500).json({ error: error.name, message: error.message }) })

    })

    /**
    * @descr Modify specify Niveau identified bi id
    * @route PUT /Niveau/id
    * @access public
    */

    .put("/:id", async (req, res) => {

        Niveau.update(req.body, { where: { id: req.params.id } })
            .then(data => {
                if (data[0] === 1) {
                    res.status(201).json({ message: "Niveau updated succefully" })
                } else {
                    res.status(404).json({ message: "Niveau not found" })
                }
            })
            .catch(error => { res.status(500).json({ error: error.name, message: error.message }) })

    })

    /**
    * @descr Delete specify Niveau identified bi id
    * @route DELETE /Niveau/id
    * @access public
    */

    .delete("/:id", async (req, res) => {

        Niveau.destroy({ where: { id: req.params.id } })
            .then(data => {
                if (data === 1) {
                    res.status(201).json({ message: "Niveau deleted succefully" })
                } else {
                    res.status(404).json({ message: "Niveau not found" })
                }
            })
            .catch(error => { res.status(500).json({ error: error.name, message: error.message }) })

    })

module.exports = router
