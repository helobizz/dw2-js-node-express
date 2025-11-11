import express from "express";

const router = express.Router();

// Importando o Model de Thriller
import Thriller from "../models/thriller.js";

router.get("/thriller", (req, res) => {
  //SELECT * FROM THRILLER
  Thriller.findAll().then((thriller) => {
    res.render("thriller", {
      thriller: thriller,
    });
  }).catch(error => {
    console.log(error)
  });
});

// ROTA DE CADASTRO DE DORAMAS
router.post("/thriller/new", (req, res) => {
  const top = req.body.top;
  const nome = req.body.nome;
  const onde = req.body.onde;
  Thriller.create({
    top: top,
    nome: nome,
    onde: onde,
  }).then(() => {
    res.redirect("/thriller");
  }).catch((error) => {
    console.log(error);
  });
});

// ROTA DE EXCLUSÃO
router.get("/thriller/delete/:id", (req, res) => {
  const id = req.params.id;
  Thriller.destroy({
    where: {
      id: id,
    },
  }).then(() => {
    res.redirect("/thriller");
  }).catch((error) => {
    console.log(error);
  });
});

export default router;
