const getAllStudents = (req, res) => {
  res.send("la liste de tous les étudiants");
};
const createStudent = (req, res) => {
  res.send("Etudiant crée avec succès");
};

const updateStudent = (req, res) => {
  res.send("Modification de l'étudiant réussie");
};

const deleteStudent = (req, res) => {
  res.send("Etudiant supprimé avec succès");
};

export { createStudent, updateStudent, getAllStudents, deleteStudent };
