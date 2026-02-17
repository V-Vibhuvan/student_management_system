const Student = require("../models/Student");

//get all students and search student
module.exports.getStudents = async (req, res) => {
    const {search , course , studentId } = req.query; //query
    let filter = {};

    //search by name / mail (regex and or)
    if(search && search.trim() !== ""){
        filter.$or = [
            {fullName: {$regex: search.trim(), $options: "i"}},
            {email: {$regex: search.trim(), $options: "i"}}
        ];
    }

    // course 
    if(course){
        filter.course = course;
    }
    //sid
    if(studentId){
        filter.studentId = studentId;
    }

    const students = await Student.find(filter);
    res.status(200).json(students);
};

//new student creation
module.exports.createStudent = async (req, res) => {
    const student = new Student(req.body.student);
    await student.save();
    res.status(201).json(student);
};

// get student by id 
module.exports.getStudentById = async (req, res) => {
    const student = await Student.findById(req.params.id);
    if(!student) throw new Error("Student not found");
    res.status(200).json(student);
};

//update student details
module.exports.updateStudent = async (req, res) => {
    const student = await Student.findByIdAndUpdate(
        req.params.id,
        req.body.student,
        { new: true }
    );
    res.status(200).json(student);
};

//delete a student by id 
module.exports.deleteStudent = async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Deleted" });
};
