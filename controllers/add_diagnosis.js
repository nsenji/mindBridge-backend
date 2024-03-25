

var database = require("../database/index");
const Diagnosis = database.Diagnosis;


exports.add_diagnosis = async (req, res, next) => {

    const diagnosis_data = {
        sadness: "Seldom",
        euphoric: "Most-Often",
        exhausted: "Sometimes",
        sleep_dissorder: "Seldom",
        mood_swing: "NO",
        suicidal_thoughts: "NO",
        anorexia: "NO",
        authority_respect: "YES",
        try_explanation: "YES",
        aggressive_response: "NO",
        ignore_and_move_on: "NO",
        nervous_breakdown: "NO",
        admit_mistakes: "YES",
        overthinking: "NO",
        sexual_activity: "2 From 10",
        concentration: "9 From 10",
        optimism: "9 From 10",
        patientID: ""  // use one of the UUIDs of the patients that are in the database
    }

    await Diagnosis.create(diagnosis_data)
        .then((data) => {
            res.status(201).json({ message: "Diagnosis created successfully", data: data });
         })
        .catch((err) => { 
            res.status(400).json({ message: "There was an error while creating diagnosis" + err })
        })


}