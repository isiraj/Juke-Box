const albumsRouter = require('express').Router()
const { Albums } = require("../index")

albumsRouter.get("/api/albums", (req, res) => {
    Albums.findAll()
    .then (data => res.json(data))
})

module.export = albumsRouter