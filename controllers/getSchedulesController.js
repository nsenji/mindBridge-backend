const database = require("../database/index")
const AppointmentSchedule = database.AppointmentSchedule

exports.getAllSchedules = async(req, res, next )=>{
    try{
        let schedules = await AppointmentSchedule.findAll({where:{doctorID: req.body.doctorID}})
        schedules = schedules.filter(schedule => new Date(`${schedule.date}T${schedule.time}:00`) > new Date())
        console.log(schedules)
        return res.status(201).json({data: schedules})

    } catch(error){
        res.status(400).json({ message: "Couldn't get Schedules" + error })
    }
}
