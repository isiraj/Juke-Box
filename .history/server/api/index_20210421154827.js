const router = require('express').Router()
const albumsRouter = require("./albums")

// router.get("/albums", (req, res) => {
//     // Albums.findAll()
//     // .then (data => res.send(data))
//     res.send("Hello")
// })
// connect your API routes here!
router.use("/", albumsRouter)
module.exports = router
