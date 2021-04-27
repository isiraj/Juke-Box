const router = require('express').Router()
const { Albums } = require("../index")

router.get("/albums", (req, res) => {
    Albums.findAll()
    .then (data => res.send(data))
})
// connect your API routes here!

module.exports = router
