
var express = require("express");
var router = express.Router();

const getDoctorAppointments  = require("../controllers/getDoctorAppointmentsController")

router.post("/getdoctorappointments", getDoctorAppointments.returnDoctorAppointments);

module.exports = router;