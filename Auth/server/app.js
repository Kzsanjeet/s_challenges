const express = require("express");
const router = require("../server/route/user.route");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static('public')); // it is only applicable when we use ejs
app.use(cookieParser)
app.use(bodyParser.json())
// app.use("/", router);

app.use("/v1/user", router);

module.exports = app;
