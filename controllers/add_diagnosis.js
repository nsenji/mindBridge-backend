// verified

var database = require("../database/index");
const Diagnosis = database.Diagnosis;


exports.add_diagnosis = async (req, res, next) => {

    const diagnosis_data = {
        sadness: req.body.sadness,
        euphoric: req.body.euphoric,
        exhausted: req.body.exhausted,
        sleep_dissorder: req.body.sleep_dissorder,
        mood_swing: req.body.mood_swing,
        suicidal_thoughts: req.body.suicidal_thoughts,
        anorexia: req.body.anorexia,
        authority_respect: req.body.authority_respect,
        try_explanation:req.body.try_explanation,
        aggressive_response: req.body.aggressive_response,
        ignore_and_move_on:req.body.ignore_and_move_on,
        nervous_breakdown: req.body.nervous_breakdown,
        admit_mistakes: req.body.admit_mistakes,
        overthinking: req.body.overthinking,
        sexual_activity: req.body.sexual_activity,
        concentration: req.body.concentration,
        optimism: req.body.optimism,
        result: req.body.result,
        patientID: req.body.patientID 
    }

    await Diagnosis.create(diagnosis_data)
        .then((data) => {
            res.status(201).json({ message: "Diagnosis created successfully", data: data });
         })
        .catch((err) => { 
            res.status(400).json({ message: "There was an error while creating diagnosis" + err })
        })


}