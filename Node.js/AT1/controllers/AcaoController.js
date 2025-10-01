import express from "express";

const router = express.Router();

router.get("/acao", (req, res) => {
  const acao = [
    { rancking: "1", nome: "Classe dos Heróis Fracos", assistir: "Netflix" },
    { rancking: "2", nome: "Cães de Caça", assistir: "Netflix" },
    { rancking: "3", nome: "My Name", assistir: "Netflix" },
    { rancking: "4", nome: "Good Boy", assistir: "Prime Video" },
    { rancking: "5", nome: "A Bailarina", assistir: "Netflix" },
    { rancking: "6", nome: "Caçadores de Demônios", assistir: "Netflix" },
    { rancking: "7", nome: "Retaliação", assistir: "Netflix" },
    { rancking: "8", nome: "Kingdom", assistir: "Netflix" },
    { rancking: "9", nome: "Gatilho", assistir: "Netflix" },
    { rancking: "10", nome: "Sem Piedade", assistir: "Netflix" },
  ];
  res.render("acao", {
    acao: acao,
  });
});

export default router;
