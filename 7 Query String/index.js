import express from "express";

const app = express();

app.get("/categories", (req, res) => {
  res.send(`categorie = ${req.query.category}`);
});

app.listen(8000, () => {
  console.log("le serveur a démarré");
});
