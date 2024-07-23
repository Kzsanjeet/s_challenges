const User = require("../models/user.models");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if all required fields are provided
        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: "Details not found" });
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

module.exports = { registerUser };
