/** @format */

const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
    },
    first_name: String,
    last_name: String,
    full_name: {
      first: String,
      last: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Users", UsersSchema);
