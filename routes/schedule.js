
var express = require("express");
var router = express.Router();

const createscheduleController = require("../controllers/create_schedule_controller");
const getAllSchedulesController  = require("../controllers/getSchedulesController")

router.post("/createschedule",createscheduleController.create_schedule);
router.post('/getschedule', getAllSchedulesController.getAllSchedules)


module.exports = router;