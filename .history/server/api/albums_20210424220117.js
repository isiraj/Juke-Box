const albumsRouter = require('express').Router()
const { Album } = require("/Users/salman/Downloads/PairProject.Juke-master/server/db/index")
const { Song } = require("/Users/salman/Downloads/PairProject.Juke-master/server/db/index")
const { Artist } = require("/Users/salman/Downloads/PairProject.Juke-master/server/db/index")

albumsRouter.get("/albums", async (req, res) => {
    Album.findAll()
    .then (data => console.log(data))
})

// albumsRouter.get("/albums/:id", (req, res) => {
//     Album.findAll({
//         include: [{model: Artist}, {model: Song}],
//         where: {
//             id: req.params.id
//         }
//     })
//     .then(data => res.json(data))
// })

// albumsRouter.get("/albums", (req, res) => {
//     // Albums.findAll()
//     // .then (data => res.send(data))
//     res.send("Hello")
// })

module.exports = albumsRouter