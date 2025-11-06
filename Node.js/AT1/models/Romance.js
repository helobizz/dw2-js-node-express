import { Sequelize } from "sequelize";
import connection from "../config/sequelize-config.js";

const Romance = connection.define("romance", {
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

Romance.sync({ force: false });

export default Romance;