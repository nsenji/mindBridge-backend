
var express = require("express");
var router = express.Router();

const patientsignupController = require("../controllers/signup_controller")
const patientloginController = require("../controllers/login_controller")



router.get("/login", patientloginController.patient_login);

router.get("/signup", patientsignupController.patient_signup)


module.exports = router;