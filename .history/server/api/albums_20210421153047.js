const albumsRouter = require('express').Router()
const { Albums } = require("server/db/index.js")

albumsRouter.get("/api/albums", (req, res) => {
    Albums.findAll()
    .then (data => res.json(data))
})

module.export = albumsRouter