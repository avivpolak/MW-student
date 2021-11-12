/** @format */

const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema(
  {
    username: String,
    comment: String,
    post: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comments", commentsSchema);
