const db  = require("./db");
// import { Sequelize } from "sequelize/types";

const Artist = db.define("artists", {
    name: {
        type: Sequelize.STRING,
        allowNull: False
    }
})

module.exports = {
    Artist
}