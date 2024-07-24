const User = require("../models/user.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if all required fields are provided
        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: "Details not found" });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email }).exec();
        if (existingUser) {
            return res.status(400).json({ success: false, message: "User already exists" });
        }

        // Generate salt and hash password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        // Create the user
        const createUser = await User.create({
            name: name,
            email: email,
            password: hashPassword
        });

        if (!createUser) {
            return res.status(500).json({ success: false, message: "User not created" });
        }

        // Successfully created the user
        res.status(201).json({ success: true, message: "User created successfully", registered: createUser });

    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email }).exec();

        if (!user) {
            return res.status(400).json({ success: false, message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ success: false, message: "Password is incorrect" });
        }

        const accessToken = jwt.sign({ id: user._id }, process.env.JWT_ACCESS_SECRET, { expiresIn: "1m" });
        const refreshToken = jwt.sign({ id: user._id }, process.env.JWT_REFRESH_SECRET, { expiresIn: "5m" });

        // Update user's refreshToken in the database
        user.refreshToken = refreshToken;
        await user.save();

        res.cookie("refreshToken", refreshToken, { httpOnly: true, secure: true, maxAge: 5 * 60 * 1000 });
        res.cookie("accessToken", accessToken, { httpOnly: true, secure: true, maxAge: 60 * 1000 });

        res.status(200).json({ success: true, message: "Logged in successfully", user });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

const logout = (req, res) => {
    try {
        res.clearCookie("refreshToken", { httpOnly: true, secure: true });
        res.clearCookie("accessToken", { httpOnly: true, secure: true });
        res.status(200).json({ success: true, message: "Logged out successfully" });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

module.exports = { registerUser, loginUser,logout };
