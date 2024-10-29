import express from "express";
const router = express.Router();

router.get("/all", (req, res) => {
  res.send("la liste de tous les étudiants");
});

router.post("/create", (req, res) => {
  res.send("Etudiant crée avec succès");
});

router.put("/update", (req, res) => {
  res.send("Modification de l'étudiant réussie");
});

router.delete("/delete", (req, res) => {
  res.send("Etudiant supprimé avec succès");
});

export default router;
