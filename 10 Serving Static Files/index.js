import express from "express";
import path from "path";

const app = express();
// Le middleware permettra de servir tous les fichiers de ce dossier au client
app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(process.cwd, "/public/index.html");
});
app.listen(8000, () => {
  console.log("le serveur a démarré");
});
