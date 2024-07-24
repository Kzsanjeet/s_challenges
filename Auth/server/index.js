const { connectDb } = require("../server/dbconnet/dbConnect");
const app = require("./app");
require("dotenv").config();

connectDb(); // Ensure the function is called

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
