const albumsRouter = require('express').Router()
const { Album } = require("/Users/salman/Downloads/PairProject.Juke-master/server/db/index")

albumsRouter.get("/albums", (req, res) => {
    Album.findAll()
    .then (data => data.json())
    .then (data => res.send(data))
})

// albumsRouter.get("/albums", (req, res) => {
//     // Albums.findAll()
//     // .then (data => res.send(data))
//     res.send("Hello")
// })

module.exports = albumsRouter