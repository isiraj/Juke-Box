const db  = require("./db");
const Sequelize = require('sequelize');
// import { Sequelize } from "sequelize/types";

const Artist = db.define("artists", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = {
    Artist
}