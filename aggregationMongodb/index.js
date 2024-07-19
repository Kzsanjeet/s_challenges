const express = require("express")

const app = express();
const port = 4000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// method
// difference between find and findone

// findOne() returns null when there is no any data found
// find() returns cursor when data found so we can use method such as count(),limit() in find()