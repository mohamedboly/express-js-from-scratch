import express from "express";
import router from "./routes/routes.js";

const app = express();

app.use(router);

// On précise que l'on va utiliser le moteur de template EJS
app.set("view engine", "ejs");

app.listen(8000, () => {
  console.log("Serveur démarré");
});
