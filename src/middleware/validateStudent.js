const { studentSchema } = require("../schema");

module.exports = (req, res, next) => {
  const { error } = studentSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: error.details[0].message
    });
  }

  next();
};