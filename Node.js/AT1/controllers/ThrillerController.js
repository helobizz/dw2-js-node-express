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

export default router;
