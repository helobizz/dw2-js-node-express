import express from "express";

const router = express.Router();

router.get("/romance", (req, res) => {
  const romance = [
    { ranking: "1", nome: "Se a Vida te Der Tangerinas", assistir: "Netflix" },
    { ranking: "2", nome: "Pousando no Amor", assistir: "Netflix" },
    { ranking: "3", nome: "Strong Woman Do Bong Soo", assistir: "Viki" },
    { ranking: "4", nome: "O Tempo Traz Você pra Mim", assistir: "Netflix" },
    { ranking: "5", nome: "Abismo Mágico", assistir: "Netflix" },
    { ranking: "6", nome: "O Rei Eterno", assistir: "Netflix" },
    { ranking: "7", nome: "Paixão Imprevista", assistir: "Netflix" },
    { ranking: "8", nome: "Vejo Você na Próxima Vida", assistir: "Netflix" },
    { ranking: "9", nome: "Goblin", assistir: "Viki" },
    { ranking: "10", nome: "Jardim De Meteoros", assistir: "Viki" },
  ];
  res.render("romance", {
    romance: romance,
  });
});

export default router;
