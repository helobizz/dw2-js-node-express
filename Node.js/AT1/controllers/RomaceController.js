import express from "express";

const router = express.Router();

router.get("/romance", (req, res) => {
  const romance = [
    { rancking: "1", nome: "Se a Vida te Der Tangerinas", assistir: "Netflix" },
    { rancking: "2", nome: "Pousando no Amor", assistir: "Netflix" },
    { rancking: "3", nome: "Strong Woman Do Bong Soo", assistir: "Viki" },
    { rancking: "4", nome: "O Tempo Traz Você pra Mim", assistir: "Netflix" },
    { rancking: "5", nome: "Abismo Mágico", assistir: "Netflix" },
    { rancking: "6", nome: "O Rei Eterno", assistir: "Netflix" },
    { rancking: "7", nome: "Paixão Imprevista", assistir: "Netflix" },
    { rancking: "8", nome: "Vejo Você na Próxima Vida", assistir: "Netflix" },
    { rancking: "9", nome: "Goblin", assistir: "Viki" },
    { rancking: "10", nome: "Jardim De Meteoros", assistir: "Viki" },
  ];
  res.render("romance", {
    romance: romance,
  });
});

export default router;
