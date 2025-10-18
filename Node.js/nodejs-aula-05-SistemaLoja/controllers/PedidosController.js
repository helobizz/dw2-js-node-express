import express, { Router } from "express";
const router = express.Router();
import Pedido from "../models/Pedido.js";
import { where } from "sequelize";

// ROTA PEDIDOS
router.get("/pedidos", function (req, res) {
  // SELECT * FROM PEDIDOS
  Pedido.findAll()
    .then((pedidos) => {
      res.render("pedidos", {
        pedidos: pedidos,
      });
      // catch => falha na resolução da promessa
    })
    .catch((error) => {
      console.log(error);
    });
});

// ROTA DE CADASTRO DE PEDIDOS (é para onde os dados inseridos no form vai)
router.post("/pedidos/new", (req, res) => {
  // COLETANDO DOS DADOS DO FORMULÁRIO
  const numero = req.body.numero;
  const valor = req.body.valor;
  Pedido.create({
    numero: numero,
    valor: valor,
  })
    .then(() => {
      res.redirect("/pedidos");
    })
    .catch((error) => {
      console.log(error);
    });
});
// create -> método que cria o espaço no banco

// ROTA DE EXCLUSÃO
// :id é um parâmetro obrigatório
router.get("/pedidos/delete/:id", (req, res) => {
  const id = req.params.id;
  // .destroy() -> exclui um regsitro do banco
  Pedido.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.redirect("/pedidos");
    })
    .catch((error) => {
      console.log(error);
    });
});

// ROTA DE EDIÇÃO DE PEDIDO
router.get("/pedidos/edit/:id", (req, res) => {
  const id = req.params.id;
  // BUSCANDO O PEDIDO PELA ID
  // findByPk -> busca um registro pela chave primária(id)
  Pedido.findByPk(id).then((pedido) => {
    res.render("PedidoEdit", {
      pedido: pedido,
    });
  });
});
// ROTA DE ALTERAÇÃO DE CLIENTE
router.post("/pedidos/update", (req, res) => {
  // COLETANDO DADOS DO FORMULÁRIO
  const id = req.body.id;
  const numero = req.body.numero;
  const valor = req.body.valor;
  Pedido.update(
    {
      numero: numero,
      valor: valor,
    },
    {
      where: { id: id },
    }
  )
    .then(() => {
      res.redirect("/pedidos");
    })
    .catch((error) => {
      console.log(error);
    });
});

export default router;
