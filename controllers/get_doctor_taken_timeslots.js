const database = require('../database/index')
const SelectedAppointment = database.SelectedAppointment

exports.getDoctorTakenTimeslots = async (req, res, next) => {
    try {

        const timeslots = await SelectedAppointment.findAll({
            where: { doctorID: req.body.doctorID, date: req.body.date }, attributes: ["time"]

        })

        return res.status(200).json({ data: timeslots })
    } catch (error) {
        return res.status(400).json({ message: "Couldn't get Appointments: " + error.message })
    }
}