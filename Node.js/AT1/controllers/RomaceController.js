import express from "express";

const router = express.Router();

// Importando o model Romance
import Romance from "../models/Romance.js";

router.get("/romance", (req, res) => {
  // SELECT * FROM
  Romance.findAll()
    .then((romance) => {
      res.render("romance", {
        romance: romance,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});

// ROTA DE CADASTRO DE DORAMA
router.post("/romance/new", (req, res) => {
  const top = req.body.top;
  const nome = req.body.nome;
  const onde = req.body.onde;
  Romance.create({
    top: top,
    nome: nome,
    onde: onde,
  })
    .then(() => {
      res.redirect("/romance");
    })
    .catch((error) => {
      console.log(error);
    });
});

// ROTA DE EXCLUSÃO
router.get("/romance/delete/:id", (req, res) => {
  const id = req.params.id;
  Romance.destroy({
    where: {
      id: id,
    },
  })
    .then(() => {
      res.redirect("/romance");
    })
    .catch((error) => {
      console.log(error);
    });
});

// ROTA DE EDIÇÂO
router.get("/romance/edit/:id", (req, res) => {
  const id = req.params.id;
  Romance.findByPk(id).then((romance) => {
    res.render("RomanceEdit", {
      romance: romance,
    });
  });
});

// ROTA DE ALTERAÇÃo
router.post("/romance/update", (req, res) => {
  const id = req.body.id;
  const top = req.body.top;
  const nome = req.body.nome;
  const onde = req.body.onde;
  Romance.update(
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
      res.redirect("/romance");
    })
    .catch((error) => {
      console.log(error);
    });
});

export default router;
