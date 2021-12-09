"use strict"

const router = require('express').Router()
const { Projet } = require('../../db/_relations')

router

    /**
     * @descr Create new Projet
     * @route POST /Projet
     * @access public
     */

    .post("/", async (req, res) => {

        Projet.create(req.body)
            .then(data => { res.status(201).json(data) })
            .catch(error => { res.status(500).json({ error: error.name, message: error.message }) })

    })

    /**
    * @descr get all Projet
    * @route GET /Projet
    * @access public
    */

    .get("/", async (req, res) => {

        Projet.findAll({ where: req.query, order: [['id', 'ASC']] })
            .then(data => { res.json(data) })
            .catch(error => { res.status(500).json({ error: error.name, message: error.message }) })

    })

    /**
    * @descr Show specify Projet identified bi id
    * @route GET /Projet/id
    * @access public
    */

    .get("/:id", async (req, res) => {

        Projet.findByPk(req.params.id)
            .then(data => {
                if (data !== null) {
                    res.status(200).json(data)
                } else {
                    res.status(404).json({ message: "Projet not found" })
                }
            })
            .catch(error => { res.status(500).json({ error: error.name, message: error.message }) })

    })

    /**
    * @descr Modify specify Projet identified bi id
    * @route PUT /Projet/id
    * @access public
    */

    .put("/:id", async (req, res) => {

        Projet.update(req.body, { where: { id: req.params.id } })
            .then(data => {
                if (data[0] === 1) {
                    res.status(201).json({ message: "Projet updated succefully" })
                } else {
                    res.status(404).json({ message: "Projet not found" })
                }
            })
            .catch(error => { res.status(500).json({ error: error.name, message: error.message }) })

    })

    /**
    * @descr Delete specify Projet identified bi id
    * @route DELETE /Projet/id
    * @access public
    */

    .delete("/:id", async (req, res) => {

        Projet.destroy({ where: { id: req.params.id } })
            .then(data => {
                if (data === 1) {
                    res.status(201).json({ message: "Projet deleted succefully" })
                } else {
                    res.status(404).json({ message: "Projet not found" })
                }
            })
            .catch(error => { res.status(500).json({ error: error.name, message: error.message }) })

    })

module.exports = router
