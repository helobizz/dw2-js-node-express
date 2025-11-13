//importando express
import express from "express";

//importando o connection
import connection from "./config/sequelize-config.js";

// importando controller
import FilmesController from "./controllers/FilmesController.js";
// . -> diretório atual (mesmo nível) / .. -> voltar para diretório anterior (preciso sair da pasta. 
//ex.: importar o controller na pasta model(preciso sair da pastar controller para entrar na model))
//carrega o express numa variável
const app = express();

// Configurações do Express
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

// DIrecionando a rota
app.use("/", FilmesController);

// Conectando ao banco
connection.authenticate().then(() => { // authenticate -> permite conexão com o banco
    console.log("Conexão com o banco de dados feita com sucesso!")
}).catch((error) => {
    console.log(error);
});

// Criando o banco
connection.query("CREATE DATABASE IF NOT EXISTS filmes;").then(() => {
    console.log("O banco de dados está criado!")
}).catch((error) => {
    console.log(error);
})
//inicia o servidor
const port = 8080;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Servidor iniciado em http://localhost:${port}`);
  }
});
