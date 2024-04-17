
const database = require("../database/index")

const Doctor = database.Doctor
const AppointmentSchedule = database.AppointmentSchedule
const SelectedAppointment = database.SelectedAppointment


exports.getAllDoctors = async (req, res, next) => {

    try {
        var allDoctors = await Doctor.findAll()

        const value = await Promise.all(

            allDoctors.map(async doctor => {


                // query the schedules for this particular doctor
                let schedules_1 = await AppointmentSchedule.findAll({ where: { doctorID: doctor["doc_ID"] } })
                let schedules_2 = schedules_1.filter(schedule => new Date(`${schedule.date}T${schedule.time}:00`) > new Date())

                let schedules_3 = schedules_2.sort(
                    (a, b) => {

                        let timeA = new Date(`${a.date}T${a.time}:00`);
                        let timeB = new Date(`${b.date}T${b.time}:00`);

                        return timeA - timeB
                    })

                
                // create set to store all the dates
                let dateSet = new Set();
                
                // add each date to the set
                schedules_3.forEach(element => {
                    dateSet.add(element["date"])
                });

                let outerObject = []

                // go through each date and get its time periods then add both to the outerObject
                dateSet.forEach(element_1 => {
                    
                    let innerObject = {}

                    innerObject["date"] = element_1;

                    // add the time periods to a list
                    let newList = [];
                    schedules_3.forEach(element_2 => {
                        if (element_2["date"] === element_1) {
                            newList.push(element_2["time"]);
                        }
                    });

                    innerObject["actual_time"] = newList;
                    outerObject.push(innerObject);
                    // outerObject[element_1] = innerObject

                })

                // finally for each loop over alldoctors return the doctor details and their time slots
                var returnObject = { ...doctor, "time_slots": outerObject }
                return returnObject;

            })
        )


        var returnList = [];

        // remove uneccessary fields from the value variable and add everything in a list
        value.forEach(element => {
            let { dataValues, time_slots } = element;
            let outerObject = { dataValues, time_slots }
            returnList.push(outerObject);
        })

        res.status(200).json({ message: "successful", data: returnList });

    } catch (error) {
        res.status(400).json({ message: "Couldn't get doctors" + error })

    }

}