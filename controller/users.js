/** @format */

const Users = require("../models/users");
const Posts = require("../models/posts");
const Comments = require("../models/comments");

exports.addNewUsers = async (req, res, next) => {
  try {
    // find all comments belonging to the post "Reports a bug in your code"
    console.log(await Comments.find({ post: "618e5143ba4dd92cd88603ea" }));

    res.status(200).json();
  } catch (error) {
    next(error);
  }
};
exports.searchByOne = async (req, res, next) => {
  try {
    console.log(await Users.find({}));

    // await Users.find({});

    // console.log(await Users.find({}));

    res.status(200).send("done");
  } catch (error) {
    next(error);
  }
};
