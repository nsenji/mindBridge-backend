var express = require("express");
var router = express.Router();

const getAllDoctorsController = require("../controllers/get_all_doctors_controller");

router.get("/getalldoctors", getAllDoctorsController.getAllDoctors);


module.exports = router;