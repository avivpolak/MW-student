/** @format */

const Student = require("../models/studet");
exports.addNewStudent = async (req, res, next) => {
  try {
    let { name, surName, birth, phone, gender, courses } = req.body;
    const newStudent = await Student.create({
      name: name,
      surName: surName,
      birth: birth,
      phone: phone,
      gender: gender,
      courses: courses,
    });
    res.status(200).json(newStudent);
  } catch (error) {
    next(error);
  }
};
exports.listAllStudents = async (req, res, next) => {
  try {
    const studentList = await Student.find({});

    res.status(200).json(studentList);

    // this is what i assume you meant
    if (studentList.length === 0) next(new Error("No student found in db"));
  } catch (error) {
    next(error);
  }
};
exports.listAllStudentsByName = async (req, res, next) => {
  try {
    const query = Object.entries(req.query);

    const name = req.query.name;
    const studentList = await Student.find({ name: name });

    res.status(200).json(studentList);

    // this is what i assume you meant
    if (studentList.length === 0) next(new Error("No student found in db for this name"));
  } catch (error) {
    next(error);
  }
};

exports.searchByOne = async (req, res, next) => {
  try {
    //this line of code take the first query params from the url and makes it {key:value}

    const key = Object.entries(req.query)[0][0];
    const value = Object.entries(req.query)[0][1];
    const query = { key: value };
    // query[Object.entries(req.query)[0][0]] = Object.entries(req.query)[0][1];
    if (key === "course") {
      searchByCourse(Object.entries(req.query)[0][1]);
    }
    const studentList = await Student.find(query);

    res.status(200).json(studentList);

    if (studentList.length === 0) next(new Error("No student found in db for this name"));
  } catch (error) {
    next(error);
  }
};

exports.getStudentsLearnCourse = async (req, res, next) => {
  try {
    //this line of code take the first query params from the url and makes it {key:value}
    let query = {};
    query[Object.entries(req.query)[0][0]] = Object.entries(req.query)[0][1];

    const studentList = await Student.find(query);

    res.status(200).json(studentList);

    if (studentList.length === 0) next(new Error("No student found in db for this name"));
  } catch (error) {
    next(error);
  }
};
// async function getStudentsLearn(course) {
//     const result = await Student.find({});
//     console.log(result);
// }
// async function getStudentsLearnGender(course, gender) {
//     const result = Student.find({});
//     console.log(result);
// }
// async function getAllStudentsBirthAfter(date) {
//     const result = await Student.find({});
//     console.log(result);
// }
// async function getAllStudentsPhonesStartsWith(str) {
//     const result = await Student.find({});
//     console.log(result);
// }
