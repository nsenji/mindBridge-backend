var database = require('../database/index')
var Payment = database.Payment

exports.getDoctorEarnings = async(req, res, next) =>{
    try{
        const response = await Payment.findAll({ where: {doctorID: req.body.doctorID}})
        return res.status(201).json({data: response})
    } catch(error) {
        return res.status(400).json({ message: "Couldn't get payments" + error })

    }
}