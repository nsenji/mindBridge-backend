
var express = require("express");
var router = express.Router();

const getDoctorAppointments  = require("../controllers/getDoctorAppointmentsController");
const createAppointment = require("../controllers/create_appointment");
const getPatientAppointments = require("../controllers/get_patient_appointments");

router.post("/getdoctorappointments", getDoctorAppointments.returnDoctorAppointments);
router.post("/createappointment", createAppointment.createAppointment );
router.post("/getpatientappointments", getPatientAppointments.getPatientAppointments );

module.exports = router;