// Importando o express (Framework)
// const express = require("express"); //require -> importa módulos (mais antigo, nativo do node) -> CommonJS Modules
import express from "express" //ES6 Modules
//Iniciando o express na variável app
const app = express(); //toda vez que eu for usar o express, eu uso app

// Importando os Controllers (onde estão as rotas e é tratado as requisições)
import ClientesController from "./controllers/ClientesController.js"
import ProdutosController from "./controllers/ProdutosController.js"
import PedidosController from "./controllers/PedidosController.js"

// CONFIGURANDO O EJS
app.set("view engine", "ejs"); //PRECISA ESTAR NO ARQUIVO PRINCIPAL (INDEX) PARA RENDERIZAR

// DEFININDO O USO DAS ROTAS QUE ESTÃO NOS CONTROLLERS
app.use("/", ClientesController)
app.use("/", ProdutosController)
app.use("/", PedidosController)

//Definindo a pasta PUBLIC para Arquivos Estáticos
app.use(express.static("public"));

// Criando a primeira rota do site (ROTA PRINCIPAL)
//REQ = trata REQUISIÇÃO / RES = trata a RESPOSTA
app.get("/", (req, res) => {
  res.render("index"); //coloco entre parenteses a pasta que quero renderizar(só o nome, não preciso nem do enderenço, nem da extenção)
});

// CTRL + C -> PARA O SERVIDOR (no terminal)



// ROTA DE PERFIL
// :user -> É um parâmetro da rota (OBRIGATÓRIO) -> NÃO ENTRA NA ROTA SEM O PARÂMETRO
// :user? -> É um parâmetro da rota(OPCIONAL)
app.get("/perfil/:user", (req, res) => {
  const user = req.params.user //recebo o parâmetro da requisição (coleta o que foi escrito após a / e guarda na var)

  res.render("perfil", {
    // Enviando variáveis para a página EJS (HTML)
    user: user,
  });
});



// Iniciando o servidor HTTP
// O servidor escutará na porta 8080
const port = 8080;

app.listen(port, (error) => {
  //contem o erro caso ocorra e me fala qual é (crio uma função para guardá-lo)
  if (error) {
    console.log(
      `Não foi possível iniciar o servidor. Ocorreu um erro! ${error}`
    );
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
