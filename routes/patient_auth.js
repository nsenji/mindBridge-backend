
var express = require("express");
var router = express.Router();

const patientsignupController = require("../controllers/signup_controller")
const patientloginController = require("../controllers/login_controller")



router.post("/login", patientloginController.patient_login);

router.post("/signup", patientsignupController.patient_signup)


module.exports = router;