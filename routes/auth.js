
var express = require("express");
var router = express.Router();

const signupController = require("../controllers/signup_controller")
const loginController = require("../controllers/login_controller")



router.get("/login", loginController.login);

router.get("/signup", signupController.signup)



module.exports = router;