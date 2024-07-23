const express = require("express");
const router = require("../server/route/user.route");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// app.use("/", router);

app.use("/v1/user", router);

module.exports = app;
