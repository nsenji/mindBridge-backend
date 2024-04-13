

var express = require("express");
var router = express.Router();


const addDiagnosisController = require("../controllers/add_diagnosis");
const getPatientDiagnoses = require("../controllers/get_patient_diagnoses");

router.post("/postdiagnosis", addDiagnosisController.add_diagnosis);
router.post("/getdiagnoses", getPatientDiagnoses.getPatientDiagnoses);


module.exports = router;