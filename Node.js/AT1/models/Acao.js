import { Sequelize } from "sequelize";
import connection from "../config/sequelize-config.js";

const Acao = connection.define("acao", {
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

Acao.sync({ force: false });

export default Acao;