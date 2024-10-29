import express from "express";
import bodyParser from "body-parser";
const app = express();

// parser les donnes envoyé dans le body
app.use(bodyParser.json());

app.post("/post", (req, res) => {
  const { name, age } = req.body;
  console.log(`age : ${age}
        nom: ${name}`);
  res.end();
});

app.listen(8000, () => {
  console.log("Serveur démarré");
});
