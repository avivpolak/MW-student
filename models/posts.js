/** @format */

const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema(
  {
    username: String,
    title: String,
    body: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Posts", postsSchema);
