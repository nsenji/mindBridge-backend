
var database = require("../database/index");
const AppointmentSchedule = database.AppointmentSchedule;


exports.create_schedule = async (req, res, next) => {
    const schedule = {
        date: req.body.date,
        time: req.body.time,
        status: req.body.status,
        doctorID: req.body.doctorID,
    }

    await AppointmentSchedule.create(schedule)
        .then(data => {
            res.status(201).json({ message: "Schedule created successfully", data: data });
        })
        .catch(err => {

            res.status(400).json({ message: "There was an error while creating schedule" + err })
        })
}