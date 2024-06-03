const database = require('../database/index')
const SelectedAppointment = database.SelectedAppointment
const Patient = database.Patient
const Diagnosis = database.Diagnosis
const moment = require('moment');


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
        let activeAppointments = doctorAppointments.filter((value) => {
            const dateString = value.date;
            const formattedDate = moment(dateString, "ddd, DD MMM YYYY").format("YYYY-MM-DD");
            const currentDate = moment();
            return formattedDate >= currentDate.format("YYYY-MM-DD")
        })

        return res.status(200).json({data: activeAppointments})
   } catch(error) {
        return res.status(400).json({message : "Couldn't get Appointments: " + error.message})
   }
}