/** @format */
const Student = require("./models/studet");
const Users = require("../models/users");
const Posts = require("../models/posts");
const Comments = require("../models/comments");

async function get() {
  //   get all students
  console.log(await Student.find({}));

  // get all students with name set to "Ido"
  console.log(await Student.find({ name: "Ido" }));

  // get all students where courses include "Law"
  console.log(await Student.find({ courses: "Law" }));

  // get all students where courses include "Java" and gender set to "Female"
  console.log(await Student.find({ courses: "Java" } && { gender: "Female" }));

  // get all students where birth > 05/05/1998
  console.log(await Student.find({ birth: { $gte: new Date("05/05/1995") } }));

  // get all students where phone starts with 054
  console.log(await Student.find({ phone: /^054/ }));

  //find all students that have a name that contains the letter "o"
  console.log(await Student.find({ name: /o/i }));

  //find all students that have a surName that contains the letter "h" or "y"
  console.log(await Student.find({ $or: [{ surName: /y/i }, { surName: /h/i }] }));

  // find all users
  console.log(await Users.find({}));

  // find all posts
  console.log(await Posts.find({}));

  // find all posts that was authored by "GoodGuyGreg"
  console.log(await Posts.find({ username: "GoodGuyGreg" }));

  // find all posts that was authored by "ScumbagSteve"
  console.log(await Posts.find({ username: "ScumbagSteve" }));

  // find all comments
  console.log(await Comments.find({}));

  // find all comments that was authored by "GoodGuyGreg"
  console.log(await Comments.find({ username: "GoodGuyGreg" }));

  // find all comments that was authored by "ScumbagSteve"
  console.log(await Comments.find({ username: "ScumbagSteve" }));

  // find all comments belonging to the post "Reports a bug in your code"
  console.log(await Comments.find({ post: "618e5143ba4dd92cd88603ea" }));
}

async function put() {
  //add a JavaScript course to the students where name set to "Yahalom"
  await Student.updateMany({ name: "Yahalom" }, { $push: { courses: "javascript" } });

  //update the birth to 02/12/1998 where name set to "Koren"
  await Student.updateMany({ name: "Koren" }, { $set: { birth: new Date("1998-12-02") } });
}
async function deleteSomthing() {
  //delete the student where name set to "Ido"
  await Student.deleteOne({ name: "Ido" });

  //delete the student where date set to "02/04/1998"
  await Student.deleteOne({ birth: new Date("1988-03-19") });
}
