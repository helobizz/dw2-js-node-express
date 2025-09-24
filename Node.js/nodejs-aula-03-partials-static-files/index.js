// Importando o express (Framework)
const express = require("express"); //require -> importa módulos
//Iniciando o express na variável app
const app = express(); //toda vez que eu for usar o express, eu uso app

// CONFIGURANDO O EJS
app.set("view engine", "ejs"); //PRECISA ESTAR NO ARQUIVO PRINCIPAL (INDEX) PARA RENDERIZAR

//Definindo a pasta PUBLIC para Arquivos Estáticos
app.use(express.static("public"));

// Criando a primeira rota do site (ROTA PRINCIPAL)
//REQ = trata REQUISIÇÃO / RES = trata a RESPOSTA
app.get("/", (req, res) => {
  res.render("index"); //coloco entre parenteses a pasta que quero renderizar(só o nome, não preciso nem do enderenço, nem da extenção)
});

// CTRL + C -> PARA O SERVIDOR (no terminal)

// ROTA DE PRODUTOS
app.get("/produtos", (req, res) => {
  // const produtos = ["Computador", "Celular", "Tablet", "Notebook"];

  // Array de objetos com os produtos
  const produtos = [
    { nome: "Celular", preco: 3000 },
    { nome: "Computador", preco: 4000 },
    { nome: "Tablet", preco: 2000 },
    { nome: "Notebook", preco: 3800 },
  ];

  res.render("produtos", {
    produtos: produtos,
  });
});

// ROTA DE CLIENTES
app.get("/clientes", (req, res) => {
  const clientes = [
    { nome: "Ricardo", cpf: "123.456.789-00", endereco: "Rua das Flores, 34" },
    { nome: "Isaac", cpf: "123.456.789-00", endereco: "Rua Diamante, 100" },
    { nome: "Ana Flávia", cpf: "123.456.789-00", endereco: "Rua Ceará, 30" },
    { nome: "Renan", cpf: "123.456.789-00", endereco: "Rua Curitiba, 28" },
  ];
  res.render("clientes", {
    clientes: clientes,
  });
});

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

// ROTA PEDIDOS
app.get("/pedidos", (req, res) => {
  const pedidos = [
    { numero: 1, produto: "Fone", valor: 200 },
    { numero: 2, produto: "Carregador", valor: 150 },
    { numero: 3, produto: "Capinha", valor: 50 },
    { numero: 4, produto: "Pelicula", valor: 30 },
  ];
  res.render("pedidos", {
    pedidos: pedidos,
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
