const database = require('../database/index')
const SelectedAppointments = database.SelectedAppointments
const Patient = database.Patient

exports.returnDoctorAppointments = async (req, res, next)=>{
   try{

        const doctorAppointments = await SelectedAppointments.findAll({where: {doctorID: req.body.doctorID},
          
        })

        return res.status(200).json({data: doctorAppointments})
   } catch(error) {
        return res.status(400).json({message : "Couldn't get Appointments: " + error.message})
   }
}