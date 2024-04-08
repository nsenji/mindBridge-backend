
const database = require("../database/index")

const Doctor = database.Doctor

exports.getAllDoctors = async (req,res,next )=>{

    var allDoctors = await Doctor.findAll()

    res.status(200).json({message:"successful", data:allDoctors});
}