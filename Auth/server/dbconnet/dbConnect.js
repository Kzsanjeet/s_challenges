const mongoose = require("mongoose");
require("dotenv").config(); // Ensure dotenv is required to load the environment variables

const connectDb = async () => {
    try {
        console.log("Connecting to the database...");
        await mongoose.connect(process.env.CONNECT_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Database connected");
    } catch (error) {
        console.error("Database connection error:", error);
    }
};

module.exports = { connectDb };
