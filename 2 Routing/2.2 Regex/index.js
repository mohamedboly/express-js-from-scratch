import express from "express";
const app = express();

//regex

// Si le path inclus x
app.get(/x/, (req, res) => {
  res.send(`Bienvenue dans le monde de express js`);
});
// Si le le path commence  et se termine par users suivi de 4 chiffre dans l'intervalle [0-9]
app.get(/^\/users\/[0-9]{4}$/, (req, res) => {
  res.send(`Bienvenue dans le monde de express js`);
});

app.listen(8000, () => {
  console.log(`Serveur démarré`);
});
