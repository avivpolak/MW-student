/** @format */

const express = require("express");
const usersRouter = express.Router();
const { searchByOne, addNewUsers } = require("../controller/users");

usersRouter.post("/new", addNewUsers);

usersRouter.get("/list/", searchByOne);

module.exports = usersRouter;
