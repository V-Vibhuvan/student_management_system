const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

//Generate tokens
const generateToken = (user) => {
    return jwt.sign(
        {id: user._id, email: user.email},
        process.env.JWT_SECRET,
        {expiresIn: "1h"}
    );
};

//Register

module.exports.register = async (req, res) => {
    const { email, password } = req.body;

    // check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({
        message: "User already exists"
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

     const user = new User({
        email,
        password: hashedPassword
    });

    await user.save();
    const token = generateToken(user);

    res.status(201).json({
        message: "User registered",
        token
    });
};

//Login
module.exports.login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({
        message: "Invalid credentials"
        });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({
        message: "Invalid credentials"
        });
    }

    const token = generateToken(user);

    res.status(200).json({
        message: "Login successful",
        token
    });
};

//test logout
module.exports.logout = async (req, res) => {
    res.status(200).json({
        message: "Logged out successfully"
    });
};
