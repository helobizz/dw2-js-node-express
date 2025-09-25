// Importando o Express
import express from "express";
// Carregando na variável router o express.Router() que é responsável por gerenciar as rotas da aplicação
const router = express.Router();


// ROTA PEDIDOS
router.get("/pedidos", (req, res) => {
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

// Exportando o objeto router
export default router;
