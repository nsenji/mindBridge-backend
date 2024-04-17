const database = require("../database/index")
const AppointmentSchedule = database.AppointmentSchedule

exports.getAllSchedules = async (req, res, next) => {
    try {
        let schedules_1 = await AppointmentSchedule.findAll({ where: { doctorID: req.body.doctorID } })
        let schedules_2 = schedules_1.filter(schedule => new Date(`${schedule.date}T${schedule.time}:00`) > new Date())

        let schedules_3 = schedules_2.sort(
            (a, b) => {

                let timeA = new Date(`${a.date}T${a.time}:00`);
                let timeB = new Date(`${b.date}T${b.time}:00`);

                return timeA - timeB
            })

        return res.status(201).json({ data: schedules_3 })

    } catch (error) {
        res.status(400).json({ message: "Couldn't get Schedules: " + error.message })
    }
}
