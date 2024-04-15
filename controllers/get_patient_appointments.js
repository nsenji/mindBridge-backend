const database = require("../database/index")
const moment = require('moment');
const Doctor = database.Doctor;

const SelectedAppointment = database.SelectedAppointment


exports.getPatientAppointments = async (req, res, next) => {
    const incomingPatientID = req.body.patientID
    try {
        var response = await SelectedAppointment.findAll({
            where: {
                patientID: incomingPatientID, status: "active",
            }, include: {
                model: Doctor,
                attributes: ["name"],
                as: "doctorName"
            }
        });

        activeAppointments = response.filter((value) => {
            const dateString = value.date;
            const formattedDate = moment(dateString, "ddd, DD MMM YYYY").format("YYYY-MM-DD");
            const currentDate = moment();
            return formattedDate >= currentDate.format("YYYY-MM-DD")
        })

        return res.status(201).json({ data: activeAppointments })

    } catch (error) {
        return res.status(400).json({ message: "Couldn't get appointments" + error })

    }


}