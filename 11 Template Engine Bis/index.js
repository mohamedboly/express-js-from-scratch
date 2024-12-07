import express from "express";
const app = express();

// On précise que l'on va utiliser le moteur de template EJS
app.set("view engine", "ejs");

app.get("/",  function (req, res) {
    const data = {
        prenom: "Djibril",
        nom: "PAYE",
        age: 17
    }
    res.render("index", data);
//   res.send(`Bienvenue G5`);
});
app.get("/about", function (req, res){

    res.render("about");
//   res.send(`Cette page est consacree a mon parcours`);
});

app.get("/projets", (req, res) => {
  res.send(`la page de mes projets`);
});



app.listen(8080, function ()  {
  console.log(`Serveur démarré`);
});
