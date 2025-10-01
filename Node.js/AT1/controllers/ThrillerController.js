import express from "express";

const router = express.Router();

router.get("/thriller", (req, res) => {
  const thriller = [
    { rancking: "1", nome: "Alice in Bonderland", assistir: "Netflix" },
    { rancking: "2", nome: "Sweet Home", assistir: "Netflix" },
    { rancking: "3", nome: "Hapiness", assistir: "Netflix" },
    { rancking: "4", nome: "A Lição", assistir: "Netflix" },
    { rancking: "5", nome: "Vagabond", assistir: "Netflix" },
    { rancking: "6", nome: "All of Us Are Dead", assistir: "Netflix" },
    { rancking: "7", nome: "Flower of Evil", assistir: "Netflix" },
    { rancking: "8", nome: "As Três Irmãs", assistir: "Netflix" },
    { rancking: "9", nome: "Invasão Zumbi", assistir: "Netflix" },
    { rancking: "10", nome: "#Alive", assistir: "Netflix" },
  ];
  res.render("thriller", {
    thriller: thriller,
  });
});

export default router;
