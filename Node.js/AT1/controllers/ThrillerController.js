import express from "express";

const router = express.Router();

// Importando o Model de Thriller
import Thriller from "../models/thriller.js";

router.get("/thriller", (req, res) => {
  Thriller.findAll().then((thriller) => {
    res.render("thriller", {
      thriller: thriller,
    });
  });
});

export default router;
