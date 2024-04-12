var express = require("express");
var router = express.Router();


const addDiagnosisController = require("../controllers/add_diagnosis");

router.post("/postdiagnosis", addDiagnosisController.add_diagnosis);


module.exports = router;