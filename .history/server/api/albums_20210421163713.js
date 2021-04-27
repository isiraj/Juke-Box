const albumsRouter = require('express').Router()
const { Albums } = require("/Users/salman/Downloads/PairProject.Juke-master/server/db/index")

albumsRouter.get("/albums", (req, res) => {
    Albums.findAll()
    .then (data => console.log(data))
})

// albumsRouter.get("/albums", (req, res) => {
//     // Albums.findAll()
//     // .then (data => res.send(data))
//     res.send("Hello")
// })

module.exports = albumsRouter