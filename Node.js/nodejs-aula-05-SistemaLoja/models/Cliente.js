// É no model que criaremos a estrutura da tabela no banco de dados
import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

// Definindo a estrutura da tabela
const Cliente = connection.define("clientes", {
  // o que está entre "" é o nome que eu quero criar com o .define
  nome: {
    type: Sequelize.STRING, //string -> tipo
    allowNull: false, // esse campo não pode ser vazio
  },
  cpf: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  endereco: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
// Sincronizando a tabela com o banco de dados
Cliente.sync({ force: false }); //se a tabela já existe, ele não vai criar novamente(não perde os dados que já estão lá)

export default Cliente;
