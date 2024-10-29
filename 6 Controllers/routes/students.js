import express from "express";
import {
  createStudent,
  updateStudent,
  getAllStudents,
  deleteStudent,
} from "../controllers/students.js";
const router = express.Router();

router.get("/all", getAllStudents);

router.post("/create", createStudent);

router.put("/update", updateStudent);

router.delete("/delete", deleteStudent);

export default router;
