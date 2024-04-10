// verified

const database = require("../database/index");

const Patient = database.Patient;
const Doctor = database.Doctor;



// patients signup
exports.patient_signup = async (req, res, next) => {
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    await Patient.create(user)
        .then(data => {
            return res.status(201).json({ message: "Account created successfully", data: data });
        })
        .catch(err => {
            if (err.name === "SequelizeUniqueConstraintError") {
                return res.status(400).json({ message: "User with that email already exists" })
            } else {
                return res.status(400).json({ message: "There was an error while creating account" })
            }
        });


}


// doctors signup
exports.doctor_signup = async (req, res, next) => {
    const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        gender: req.body.gender,
        languages_spoken: req.body.languages_spoken,
        rate: req.body.rate,
        hospitalName: req.body.hospitalName,
        pro_title: req.body.pro_title,
        med_specialty: req.body.med_specialty,
        employment_status: req.body.employment_status,
    }

    await Doctor.create(user)
        .then(data => {
            return res.status(201).json({ message: "Account created successfully", data: data });
        })
        .catch(err => {
            if (err.name === "SequelizeUniqueConstraintError") {
                return res.status(400).json({ message: "User with that email already exists" })
            } else {
                return res.status(400).json({ message: "There was an error while creating account" })
            }
        });

}
