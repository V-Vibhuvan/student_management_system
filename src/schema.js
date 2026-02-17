const Joi = require("joi");

const studentSchema = Joi.object({
    student: Joi.object({
        fullName: Joi.string().min(3).required(),

        email: Joi.string().email().required(),

        studentId: Joi.string().required(),

        course: Joi.string().required(),

        department: Joi.string().allow(""),

        year: Joi.number().min(1).max(6).required(),

        gpa: Joi.number().min(0).max(10).optional(),

        phone: Joi.string().allow(""),

        address: Joi.string().allow(""),

        skills: Joi.array().items(Joi.string()).optional()
    }).required()
});

module.exports = { studentSchema };
