import express from "express";
const router = express.Router()
// Importando o model de usuário
import User from "../models/Users.js";

// ROTA DE LOGIN
router.get("/login", (req, res) => {
    res.render("login");
});

// ROTA DE CADASTRO
router.get("/cadastro", (req, res) => {
    res.render("cadastro");
});

// ROTA DE CRIAÇÃO DE USUÁRIO
router.post("/createUser", (req, res) => {
    // Coletando os dados do formulário
    const email = req.body.email
    const password = req.body.password
    // Enviando para o banco
    User.create({ // Esse "User" é o model, por isso precisa importar
        email: email,
        password: password
    }).then(() => {
        res.redirect("/login");
    }).catch((error) => {
        console.log(error);
    });
});

export default router;