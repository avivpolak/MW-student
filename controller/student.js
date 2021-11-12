/* eslint-disable prefer-destructuring */
/** @format */

const Student = require('../models/studet');

exports.addNewStudent = async (req, res, next) => {
  try {
    const { name, surName, birth, phone, gender, courses } = req.body;
    const newStudent = await Student.create({
      name,
      surName,
      birth,
      phone,
      gender,
      courses,
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
    if (studentList.length === 0) next(new Error('No student found in db'));
  } catch (error) {
    next(error);
  }
};
exports.listAllStudentsByName = async (req, res, next) => {
  try {
    const query = Object.entries(req.query);

    const { name } = req.query;
    const studentList = await Student.find({ name });

    res.status(200).json(studentList);

    // this is what i assume you meant
    if (studentList.length === 0)
      next(new Error('No student found in db for this name'));
  } catch (error) {
    next(error);
  }
};

exports.searchByOne = async (req, res, next) => {
  try {
    // this line of code take the first query params from the url and makes it {key:value}
    let studentList;
    const key = Object.entries(req.query)[0][0];
    const value = Object.entries(req.query)[0][1];
    const query = { key: value };
    // update
    // console.log(await Student.find({}));
    // await Student.updateMany({ name: "Yahalom" }, { $push: { courses: "javascript" } });
    // await Student.updateMany({ name: "Koren" }, { $set: { birth: new Date("1988-03-19") } });
    // await Student.find({ name: /o/i });

    // await Student.updateMany({ name: "Koren" }, { $set: { surName: "blabla" } });

    // console.log(await Student.find({ $or: [{ surName: /y/i }, { surName: /h/i }] }));
    console.log(await Student.find({}));

    await Student.deleteOne({ birth: new Date('1988-03-19') });

    console.log(await Student.find({}));

    if (key === 'courses') {
      studentList = await Student.find({ courses: value });
    } else {
      studentList = await Student.find(query);
    }

    if (studentList.length === 0)
      next(new Error('No student found in db for this category'));
    res.status(200).json(studentList);
  } catch (error) {
    next(error);
  }
};

exports.getStudentsLearnCourse = async (req, res, next) => {
  try {
    // this line of code take the first query params from the url and makes it {key:value}
    const query = {};
    query[Object.entries(req.query)[0][0]] = Object.entries(req.query)[0][1];

    const studentList = await Student.find(query);

    res.status(200).json(studentList);

    if (studentList.length === 0)
      next(new Error('No student found in db for this name'));
  } catch (error) {
    next(error);
  }
};
