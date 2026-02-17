const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        studentId: {
            type: String,
            required: true,
            unique: true
        },
        course: {
            type: String,
            required: true 
        },
        department: {
            type: String,
        },
        year: {
            type: Number,
            required: true,
        },
        gpa: {
            type: Number,
            min: 0,
            max: 10
        },
        phone: String,
        address: String,
        skills: [String]
    }, 
);

module.exports = mongoose.model("Student", studentSchema);