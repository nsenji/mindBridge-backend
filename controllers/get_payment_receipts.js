const database = require("../database/index")

const Payment = database.Payment


exports.getPayments = async (req, res, next) => {
    const incomingPatientID = req.body.patientID
    try {
        var response = await Payment.findAll({ where: { patientID: incomingPatientID } });
        return res.status(201).json({ data: response })

    } catch (error) {
       return res.status(400).json({ message: "Couldn't get payments" + error })

    }


}