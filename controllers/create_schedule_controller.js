
var database = require("../database/index");
const AppointmentSchedule = database.AppointmentSchedule;


exports.create_schedule = async (req, res, next) => {
    const schedule = {
        data: "12-04-24",
        time: "12:34",
        status: "active",
        doctorID: 31, // here use one of the UUIDs of the doctor that is in the database already
    }

    await AppointmentSchedule.create(schedule)
        .then(data => {
            res.status(201).json({ message: "Schedule created successfully", data: data });
        })
        .catch(err => {
           
            res.status(400).json({ message: "There was an error while creating schedule" + err })
        })
}