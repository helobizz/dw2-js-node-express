import express from "express";

const router = express.Router();

// Importando o Model de Ação
import Acao from "../models/acao.js";

router.get("/acao", (req, res) => {
  // SELECT * FROM ACAO
  Acao.findAll().then((acao) => {
    res.render("acao", {
      acao: acao,
    });
  }).catch(error => {
    console.log(error)
  });
});

export default router;
