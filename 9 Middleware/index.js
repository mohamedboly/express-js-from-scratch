import express from "express";
import logs from "./middlewares/logs.js";
const app = express();

app.get("/middleware", logs, (req, res) => {
  res.send("response apres l'éxecution du middleware");
});
app.listen(8000, () => {
  console.log("le serveur a démarré");
});
