
var express = require("express");
var router = express.Router();


const doctorsignupController = require("../controllers/signup_controller")
const doctorloginController = require("../controllers/login_controller")



router.get("/login", doctorloginController.doctor_login);

router.get("/signup", doctorsignupController.doctor_signup)


module.exports = router;