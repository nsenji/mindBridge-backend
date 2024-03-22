
var express = require("express");
var router = express.Router();

const createscheduleController = require("../controllers/create_schedule_controller");


router.post("/createschedule",createscheduleController.create_schedule);
