import express from "express";
import students from "./routes/students.js";
const app = express();

app.use("/students", students);

app.listen(8000, () => {
  console.log(`Serveur démarré`);
});
