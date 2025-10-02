import express from "express";
const router = express.Router();
// Importando o Model de Cliente
import Produto from "../models/Produto.js";

// ROTA PRODUTOS
router.get("/produtos", function (req, res) {
  // SELECT * FROM PRODUTOS
  Produto.findAll().then((produtos) => {
    res.render("produtos", {
      produtos: produtos,
    });
  });
});

export default router;
