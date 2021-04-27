const albumsRouter = require('express').Router()
const { Albums } = require("server/db/index.js")

albumsRouter.get("/api/albums", (req, res) => {
    Albums.findAll()
    .then (data => data.json())
    .then (data => res.send(data))
})

module.export = albumsRouter