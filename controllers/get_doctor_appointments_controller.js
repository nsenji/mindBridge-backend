const database = require('../database/index')
const SelectedAppointment = database.SelectedAppointment
const Patient = database.Patient

exports.returnDoctorAppointments = async (req, res, next)=>{
   try{

        const doctorAppointments = await SelectedAppointment.findAll({where: {doctorID: req.body.doctorID},
            include: [
                {
                    model: Patient,
                    attributes: ['name'],
                    as: 'patient'
                }
            ]
        })

        return res.status(200).json({data: doctorAppointments})
   } catch(error) {
        return res.status(400).json({message : "Couldn't get Appointments: " + error.message})
   }
}