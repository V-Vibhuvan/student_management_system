const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const studentController = require("../controllers/studentController");
const validateStudent = require("../middleware/validateStudent");


router.get("/",validateStudent, wrapAsync(studentController.getStudents));

router.post("/", validateStudent,wrapAsync(studentController.createStudent));

router.get("/:id",validateStudent, wrapAsync(studentController.getStudentById));

router.put("/:id", validateStudent,wrapAsync(studentController.updateStudent));

router.delete("/:id",validateStudent, wrapAsync(studentController.deleteStudent));

module.exports = router;