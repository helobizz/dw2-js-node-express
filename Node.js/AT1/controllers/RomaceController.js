import express from "express";

const router = express.Router();

// Importando o model Romance
import Romance from "../models/Romance.js";

router.get("/romance", (req, res) => {
  // SELECT * FROM
  Romance.findAll().then((romance) => {
    res.render("romance", {
      romance: romance,
    });
  }).catch(error => {
    console.log(error)
  });
});

export default router;
