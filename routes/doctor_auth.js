
var express = require("express");
var router = express.Router();


const doctorsignupController = require("../controllers/signup_controller")
const doctorloginController = require("../controllers/login_controller")



router.post("/login", doctorloginController.doctor_login);

router.post("/signup", doctorsignupController.doctor_signup)


module.exports = router;