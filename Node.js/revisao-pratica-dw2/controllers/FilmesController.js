import express from "express";
import Filme from "../models/Filme.js";

//gerenciar rotas
const router = express.Router();

router.get("/", (req, res) => {
  Filme.findAll()
    .then((filmes) => {
      res.render("filmes", {
        filmes: filmes, // passa os dados para a view
      });
    })
    .catch((error) => {
      console.error("Erro ao buscar filmes:", error);
      res.status(500).send("Erro ao buscar filmes.");
    });
});

// ROTA DE CADASTRO DE FILMES
router.post("/filmes/new", (req, res) => {
    const titulo = req.body.titulo;
    const genero = req.body.genero;
    const duracao = req.body.duracao;
    Filme.create({
        titulo: titulo,
        genero: genero,
        duracao: duracao,
    }).then(() => {
        res.redirect("/");
    }).catch((error) => {
        console.log(error);
    });
});

// ROTA DE EXCLUSÃO DE FILMES
router.get("/filmes/delete/:id", (req, res) => {
    const id = req.params.id;
    Filme.destroy({
        where: {
            id: id
        }
    }).then(() => {
        res.redirect("/");
    }).catch(error => {
        console.log(error);
    });
});23

// preciso exprotar para poder usá-la
export default router;
