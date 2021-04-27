const {db} = require("./db");
// import { Sequelize } from "sequelize/types";

const Song = db.define("songs", {
    name: {
        type: Sequelize.STRING,
        allowNull: False
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