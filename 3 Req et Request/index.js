import express from "express";
const app = express();

app.get("/students", (res, req) => {
  res.send("la liste de tous les étudiants");
});

app.post("/students", (res, req) => {
  res.send("Etudiant crée avec succès");
});

app.put("/students", (res, req) => {
  res.send("Modification de l'étudiant réussie");
});

app.delete("/students", (res, req) => {
  res.send("Etudiant supprimé avec succès");
});

// ici il ya une répetition sur le nom de la route , on peut réfactorisé avec app.route()
app
  .route("/students")
  .get((req, res) => {
    res.send("la liste de tous les étudiants");
  })
  .post((res, req) => {
    res.send("Etudiant crée avec succès");
  })
  .put((res, req) => {
    res.send("Modification de l'étudiant réussie");
  })
  .delete((res, req) => {
    res.send("Etudiant supprimé avec succès");
  });

app.listen(8000, () => {
  console.log(`Serveur démarré`);
});
