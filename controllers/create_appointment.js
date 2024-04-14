var database = require("../database/index");
const SelectedAppointment = database.SelectedAppointment;

exports.createAppointment = async (req, res, next) => {

    const appointment = {
        time: req.body.time,
        date: req.body.date,
        status: "active",
        doctorID: req.body.doctorID,
        patientID: req.body.patientID
    }


    await SelectedAppointment.create(appointment)

        .then(data => {
            return res.status(201).json({ message: "Appointment created successfully", data: data });
        })
        .catch(err => {

            return res.status(400).json({ message: "There was an error while creating appointment" + err })

        });

}