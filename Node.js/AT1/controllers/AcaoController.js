import express from "express";

const router = express.Router();

// Importando o Model de Ação
import Acao from "../models/acao.js";

router.get("/acao", (req, res) => {
  // SELECT * FROM ACAO
  Acao.findAll()
    .then((acao) => {
      res.render("acao", {
        acao: acao,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

//ROTA DE CADASTRO DE DORAMAS
router.post("/acao/new", (req, res) => {
  // COLETANDO DADOS
  const top = req.body.top;
  const nome = req.body.nome;
  const onde = req.body.onde;
  Acao.create({
    top: top,
    nome: nome,
    onde: onde,
  })
    .then(() => {
      res.redirect("/acao");
    })
    .catch((error) => {
      console.log(error);
    });
});

// ROTA DE EXCLUSÃO
router.get("/acao/delete/:id", (req, res) => {
  const id = req.params.id;
  Acao.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.redirect("/acao");
    })
    .catch((error) => {
      console.log(error);
    });
});

// ROTA DE EDIÇÃO
router.get("/acao/edit/:id", (req, res) => {
  const id = req.params.id;
  Acao.findByPk(id).then((acao) => {
    res.render("AcaoEdit", {
      acao: acao,
    });
  });
});

// ROTA DE ALTERAÇÃO
router.post("/acao/update", (req, res) => {
  const id = req.body.id;
  const top = req.body.top;
  const nome = req.body.nome;
  const onde = req.body.onde;
  Acao.update(
    {
      top: top,
      nome: nome,
      onde: onde,
    },
    {
      where: { id: id },
    }
  )
    .then(() => {
      res.redirect("/acao");
    })
    .catch((error) => {
      console.log(error);
    });
});

export default router;
