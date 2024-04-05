var express = require('express')
var router = express.Router()

const getSchedulesController = require("../controllers/getSchedulesController")

router.post('/getschedule', getSchedulesController.getAllSchedules)

module.exports = router