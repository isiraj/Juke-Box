import db from "./db";
import { Sequelize } from "sequelize/types";

const Album = db.define("albums", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    artworkUrl: {
        type: SEQUELIZE.STRING,
        defaultValue: "default-album.jpg"
    }
})