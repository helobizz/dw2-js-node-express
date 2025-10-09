import express from "express";
const router = express.Router();
// Importando o Model de Cliente
import Cliente from "../models/Cliente.js";
import { where } from "sequelize";
// ROTA CLIENTES
router.get("/clientes", function (req, res) {
  //SELECT * FROM CLIENTES
  Cliente.findAll()
    .then((clientes) => {
      // then => promessa bem sucedida
      res.render("clientes", {
        clientes: clientes,
      });
      // catch => falha na resolução da promessa
    })
    .catch((error) => {
      console.log(error);
    });
});

// ROTA DE CADASTRO DE CLIENTES (é para onde os dados inseridos no form vai)
router.post("/clientes/new", (req, res) => {
  // COLETANDO DOS DADOS DO FORMULÁRIO
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;
  Cliente.create({
    // coluna : dado do form
    nome: nome,
    cpf: cpf,
    endereco: endereco,
  })
    .then(() => {
      res.redirect("/clientes");
    })
    .catch((error) => {
      console.log(error);
    });
});
// create -> método que cria -- no banco

// ROTA DE EXCLUSÃO DE CLIENTE
// :id é um parâmetro obrigatório
router.get("/clientes/delete/:id", (req, res) => {
  const id = req.params.id;
  // .destroy() -> exclui um registro do banco
  Cliente.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.redirect("/clientes");
    })
    .catch((error) => {
      console.log(error);
    });
});

// ROTA DE EDIÇÃO DE CLIENTE
router.get("/clientes/edit/:id", (req, res) => {
  const id = req.params.id;
  // BUSCANDO O CLIENTE PELA ID
  // findByPk -> busca um registro pela chave primária(id)
  Cliente.findByPk(id).then((cliente) => {
    res.render("ClienteEdit", {
      cliente: cliente,
    });
  });
});

// ROTA DE ALTERAÇÃO DE CLIENTE
router.post("/clientes/update", (req, res) => {
  // Coletando dados do formulário
  const id = req.body.id;
  const nome = req.body.nome;
  const cpf = req.body.cpf;
  const endereco = req.body.endereco;
  Cliente.update(
    {
      nome: nome,
      cpf: cpf,
      endereco: endereco,
    },
    { where: { id: id } }
  ).then(() => {
      res.redirect("/clientes");
    }).catch((error) => {
      console.log(error);
    });
});

export default router;
