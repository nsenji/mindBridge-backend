
var express = require("express");
var router = express.Router();

const createscheduleController = require("../controllers/create_schedule_controller");
const getAllSchedulesController  = require("../controllers/get_schedules_controller")

router.post("/createschedule",createscheduleController.create_schedule);
router.post('/getschedules', getAllSchedulesController.getAllSchedules)


module.exports = router;