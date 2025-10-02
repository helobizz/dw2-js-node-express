import express from "express";

const router = express.Router();

router.get("/thriller", (req, res) => {
  const thriller = [
    { ranking: "1", nome: "Alice in Bonderland", assistir: "Netflix" },
    { ranking: "2", nome: "Sweet Home", assistir: "Netflix" },
    { ranking: "3", nome: "Hapiness", assistir: "Netflix" },
    { ranking: "4", nome: "A Lição", assistir: "Netflix" },
    { ranking: "5", nome: "Vagabond", assistir: "Netflix" },
    { ranking: "6", nome: "All of Us Are Dead", assistir: "Netflix" },
    { ranking: "7", nome: "Flower of Evil", assistir: "Netflix" },
    { ranking: "8", nome: "As Três Irmãs", assistir: "Netflix" },
    { ranking: "9", nome: "Invasão Zumbi", assistir: "Netflix" },
    { ranking: "10", nome: "#Alive", assistir: "Netflix" },
  ];
  res.render("thriller", {
    thriller: thriller,
  });
});

export default router;
