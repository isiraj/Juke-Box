const db  = require("./db");
const Sequelize = require('sequelize');
// import { Sequelize } from "sequelize/types";

const Song = db.define("songs", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    audioUrl: {
        type: Sequelize.STRING
    },
    genre: {
        type: Sequelize.STRING
    }
})

module.exports = {
    Song
}