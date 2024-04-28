
var express = require("express");
var router = express.Router();

const getDoctorAppointments  = require("../controllers/get_doctor_appointments_controller");
const createAppointment = require("../controllers/create_appointment");
const getPatientAppointments = require("../controllers/get_patient_appointments");
const doctorTakenTimeslots = require("../controllers/get_doctor_taken_timeslots")
const doctorHistory = require("../controllers/get_doctor_history")

router.post("/getdoctorappointments", getDoctorAppointments.returnDoctorAppointments);
router.post("/createappointment", createAppointment.createAppointment );
router.post("/getpatientappointments", getPatientAppointments.getPatientAppointments );
router.post("/takentimeslots", doctorTakenTimeslots.getDoctorTakenTimeslots);
router.post("/history", doctorHistory.returnDoctorHistory)

module.exports = router;