import express from "express";
const app = express();

app.get("youtube",  function (req, res) {
  res.send(`Bienvenue G5`);
});
app.get("/about", function (req, res){
  res.send(`Cette page est consacree a mon parcours`);
});

app.get("/projets", (req, res) => {
  res.send(`la page de mes projets`);
});



app.listen(8080, function ()  {
  console.log(`Serveur démarré`);
});
