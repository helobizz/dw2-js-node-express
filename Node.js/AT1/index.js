import express from "express";
const app = express();

import connection from "./config/sequelize-config.js";

// importando os Models
import Romance from "./models/Romance.js";
import Thriller from "./models/thriller.js";
import Acao from "./models/acao.js";

import AcaoController from "./controllers/AcaoController.js"
import RomanceController from "./controllers/RomaceController.js"
import ThrillerContoller from "./controllers/ThrillerController.js"

app.set("view engine", "ejs");

app.use("/", AcaoController)
app.use("/", RomanceController)
app.use("/", ThrillerContoller)

app.use(express.static("public"));

// Realizando conexão com o banco de dados
connection.authenticate().then(() => {
  console.log("Conexão com o banco de dados realizada com sucesso!");
}).catch(error => {
  console.log("error");
});

// Criando banco de dados(caso ainda não exista)
connection.query(`CREATE DATABASE IF NOT EXISTS dramacore;`).then(() => {
  console.log("O banco de dados está criado.");
}).catch((error) => {
  console.log(error);
});

app.get("/", (req, res) => {
  res.render("index");
});

const port = 8080;

app.listen(port, (error) => {
  if (error) {
    console.log(
      `Não foi possível iniciar o servidor. Ocorreu um erro! ${error}`
    );
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
