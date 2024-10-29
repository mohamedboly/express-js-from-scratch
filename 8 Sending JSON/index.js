import express from "express";

const app = express();

app.get("/categories", (req, res) => {
  // on passe un objet js ou un tableau d'objets à res.json
  res.json([
    {
      name: "catA",
    },
    {
      name: "cat2",
    },
  ]);
});

app.listen(8000, () => {
  console.log("le serveur a démarré");
});
