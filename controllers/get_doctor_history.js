const database = require("../database/index")
const SelectedAppointment = database.SelectedAppointment
const Patient = database.Patient

exports.returnDoctorHistory = async(req, res, next) => {
    try{
        let doctorHistory = await SelectedAppointment.findAll({where: {status: 'done', doctorID: req.body.doctorID},
        include: {
            model: Patient,
            attributes: ['name'],
            as: 'patient',
        }
    })
        return res.status(200).json({data: doctorHistory})
    } catch (error){
        return res.status(400).json({message: "Couldn't get History: " + error.message})
    }
}