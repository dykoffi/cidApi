"use strict"

const router = require('express').Router()
const { Categorie } = require('../../db/_relations')

router

    /**
     * @descr Create new Categorie
     * @route POST /Categorie
     * @access public
     */

    .post("/", async (req, res) => {

        Categorie.create(req.body)
            .then(data => { res.status(201).json(data) })
            .catch(error => { res.status(500).json({ error: error.name, message: error.message }) })

    })

    /**
    * @descr get all Categorie
    * @route GET /Categorie
    * @access public
    */

    .get("/", async (req, res) => {

        Categorie.findAll({ where: req.query, order: [['id', 'ASC']] })
            .then(data => { res.json(data) })
            .catch(error => { res.status(500).json({ error: error.name, message: error.message }) })

    })

    /**
    * @descr Show specify Categorie identified bi id
    * @route GET /Categorie/id
    * @access public
    */

    .get("/:id", async (req, res) => {

        Categorie.findByPk(req.params.id)
            .then(data => {
                if (data !== null) {
                    res.status(200).json(data)
                } else {
                    res.status(404).json({ message: "Categorie not found" })
                }
            })
            .catch(error => { res.status(500).json({ error: error.name, message: error.message }) })

    })

    /**
    * @descr Modify specify Categorie identified bi id
    * @route PUT /Categorie/id
    * @access public
    */

    .put("/:id", async (req, res) => {

        Categorie.update(req.body, { where: { id: req.params.id } })
            .then(data => {
                if (data[0] === 1) {
                    res.status(201).json({ message: "Categorie updated succefully" })
                } else {
                    res.status(404).json({ message: "Categorie not found" })
                }
            })
            .catch(error => { res.status(500).json({ error: error.name, message: error.message }) })

    })

    /**
    * @descr Delete specify Categorie identified bi id
    * @route DELETE /Categorie/id
    * @access public
    */

    .delete("/:id", async (req, res) => {

        Categorie.destroy({ where: { id: req.params.id } })
            .then(data => {
                if (data === 1) {
                    res.status(201).json({ message: "Categorie deleted succefully" })
                } else {
                    res.status(404).json({ message: "Categorie not found" })
                }
            })
            .catch(error => { res.status(500).json({ error: error.name, message: error.message }) })

    })

module.exports = router
