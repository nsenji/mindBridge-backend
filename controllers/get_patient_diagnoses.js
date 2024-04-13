const database = require("../database/index")

const Diagnosis = database.Diagnosis


exports.getPatientDiagnoses = async (req, res, next) => {
    const incomingPatientID = req.body.patientID
    try {
        var response = await Diagnosis.findAll({ where: { patientID: incomingPatientID } });
        return res.status(201).json({ data: response })

    } catch (error) {
       return res.status(400).json({ message: "Couldn't get diagnoses" + error })

    }


}