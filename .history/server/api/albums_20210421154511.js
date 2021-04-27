const albumsRouter = require('express').Router()
const { Albums } = require("../index")

// albumsRouter.get("/api/albums", (req, res) => {
//     Albums.findAll()
//     .then (data => res.send(data))
// })

albumsRouter.get("/albums", (req, res) => {
    // Albums.findAll()
    // .then (data => res.send(data))
    res.send("Hello")
})

module.exports = albumsRouter