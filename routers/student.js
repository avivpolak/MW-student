const express = require("express");
const studentRouter = express.Router();
const {
    addNewStudent,
    listAllStudents,
    searchByOne,
} = require("../controller/student");

studentRouter.post("/new", addNewStudent);
studentRouter.get("/list/all", listAllStudents);
studentRouter.get("/list/", searchByOne); //searching 1 key = value

module.exports = studentRouter;
