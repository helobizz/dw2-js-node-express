import express from "express";
const app = express();

import AcaoController from "./controllers/AcaoController.js"
import RomanceController from "./controllers/RomaceController.js"
import ThrillerContoller from "./controllers/ThrillerController.js"

app.set("view engine", "ejs");

app.use("/", AcaoController)
app.use("/", RomanceController)
app.use("/", ThrillerContoller)

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

const port = 8080;

app.listen(port, (error) => {
  if (error) {
    console.log(
      `Não foi possível iniciar o servidor. Ocorreu um erro! ${error}`
    );
  } else {
    console.log(`Servidor iniciado com sucesso em: http://localhost:${port}`);
  }
});
