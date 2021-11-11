const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
    {
        name: String,
        surName: String,
        birth: Date,
        phone: String,
        gender: String,
        courses: [String],
    },
    { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);
