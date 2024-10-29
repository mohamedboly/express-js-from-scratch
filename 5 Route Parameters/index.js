import express from "express";

const app = express();

app.param("studentId", (req, res, next, studentId) => {
  console.log(`Parametre studentId : ${studentId}`);
  next();
});

app.delete("/students/:studentId/", (req, res) => {
  res.send(`l'étudiant de numéro ${req.params.studentId} supprimé`);
});

app.listen(8000, () => {
  console.log(`Serveur démarré`);
});
