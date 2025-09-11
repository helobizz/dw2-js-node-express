// Importando o express (Framework)
const express = require("express"); //require -> importa módulos
//Iniciando o express na variável app
const app = express(); //toda vez que eu for usar o express, eu uso app

// CONFIGURANDO O EJS
app.set("view engine", "ejs");

// Criando a primeira rota do site (ROTA PRINCIPAL)
//REQ = trata REQUISIÇÃO / RES = trata a RESPOSTA
app.get("/", (req, res) => {
  res.render("index"); //coloco entre parenteses a pasta que quero renderizar(só o nome, não preciso nem do enderenço, nem da extenção)
});

// CTRL + C -> PARA O SERVIDOR (no terminal)

// ROTA DE PRODUTOS
app.get("/produtos", (req, res) => {
  res.render("produtos");
});

// ROTA DE CLIENTES
app.get("/clientes", (req, res) => {
  res.render("clientes");
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
