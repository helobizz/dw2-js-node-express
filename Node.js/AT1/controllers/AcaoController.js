import express from "express";

const router = express.Router();

router.get("/acao", (req, res) => {
  const acao = [
    { ranking: "1", nome: "Classe dos Heróis Fracos", assistir: "Netflix" },
    { ranking: "2", nome: "Cães de Caça", assistir: "Netflix" },
    { ranking: "3", nome: "My Name", assistir: "Netflix" },
    { ranking: "4", nome: "Good Boy", assistir: "Prime Video" },
    { ranking: "5", nome: "A Bailarina", assistir: "Netflix" },
    { ranking: "6", nome: "Caçadores de Demônios", assistir: "Netflix" },
    { ranking: "7", nome: "Retaliação", assistir: "Netflix" },
    { ranking: "8", nome: "Kingdom", assistir: "Netflix" },
    { ranking: "9", nome: "Gatilho", assistir: "Netflix" },
    { ranking: "10", nome: "Sem Piedade", assistir: "Netflix" },
  ];
  res.render("acao", {
    acao: acao,
  });
});

export default router;
