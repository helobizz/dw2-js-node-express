import { Sequelize } from "sequelize";
import connection from "../config/sequelize-config.js";

const Thriller = connection.define("thriller", {
    top: {
         type: Sequelize.INTEGER,
         allowNull: false,
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    onde: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

Thriller.sync({ force: false });

export default Thriller;