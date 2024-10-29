import express from "express";
const app = express();

// ? est un pattern qui indique que le caractère devant lui est non obligatoire
// donc ici les routes valides sont abd et abcd
app.get(/x/, (req, res) => {
  res.send(`Bienvenue dans le monde de express js`);
});

app.listen(8000, () => {
  console.log(`Serveur démarré`);
});
