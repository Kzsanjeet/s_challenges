const express = require("express")
const router = express.Router()
const {registerUser} = require("../controller/user.controller")

router.route("/register").post(registerUser)

module.exports = router