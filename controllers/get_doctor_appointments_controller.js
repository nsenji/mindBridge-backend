const database = require('../database/index')
const SelectedAppointment = database.SelectedAppointment
const Patient = database.Patient
const Diagnosis = database.Diagnosis

exports.returnDoctorAppointments = async (req, res, next)=>{
   try{

        const doctorAppointments = await SelectedAppointment.findAll({where: {doctorID: req.body.doctorID, status: 'active',},
            include: {
                model: Patient,
                attributes: ['name', 'email'],
                as: 'patient',
                include: {
                    model: Diagnosis,
                    attributes: ['result']
                }
            }
        })
        let upcomingAppointments = doctorAppointments.filter(app => new Date(`${app.date}T${app.time}:00`) > new Date())

        return res.status(200).json({data: upcomingAppointments})
   } catch(error) {
        return res.status(400).json({message : "Couldn't get Appointments: " + error.message})
   }
}