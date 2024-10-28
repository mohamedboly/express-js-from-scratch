import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send(`Bienvenue dans le monde de express js`);
});
app.listen(8000, () => {
  console.log(`Serveur démarré`);
});
