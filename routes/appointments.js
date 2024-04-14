
var express = require("express");
var router = express.Router();

const getDoctorAppointments  = require("../controllers/getDoctorAppointmentsController");
const createAppointment = require("../controllers/create_appointment");

router.post("/getdoctorappointments", getDoctorAppointments.returnDoctorAppointments);
router.post("/createappointment", createAppointment.createAppointment );

module.exports = router;