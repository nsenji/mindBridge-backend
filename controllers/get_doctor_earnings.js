var database = require('../database/index')
var Payment = database.Payment
var Patient = database.Patient

exports.getDoctorEarnings = async (req, res, next) => {
    try {
        const response = await Payment.findAll({
            where: { doctorID: req.body.doctorID }, include: {
                model: Patient,
                attributes: ['name', 'email'],
                as: 'patient',

            }
        })
        return res.status(201).json({ data: response })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ message: "Couldn't get payments" + error })

    }
}