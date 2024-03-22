
var database = require("../database/index");
const bcrypt = require('bcrypt');
const Patient = database.Patient;
const Doctor = database.Doctor;



// Patient login
exports.patient_login = async (req, res, next) => {

    const email = "nsengiyumvavictor@gmail.com";
    const password = "done1234"

    // returns null if no one exists with that email or an object of user if they exist
    const patient = await Patient.findOne({ where: { email } });

    if(!patient){
        res.status(401).json({message:"A user with that email doesnt exist"})
    }

    // verify whether the password belongs to the email sent

    const passwordMatch = await bcrypt.compare(password, patient.password);

    if(passwordMatch){
        res.status(201).json({message:"Login successful", data: patient});
    }else{
        res.status(401).json({message: "Wrong password"});
    }
}




// doctor login
exports.doctor_login = async (req, res, next) => {

    const email = "nsengiyumvavictor@gmail.com";
    const password = "done1234"

    // returns null if no one exists with that email or an object of user if they exist
    const doctor = await Doctor.findOne({ where: { email } });

    if(!doctor){
        res.status(401).json({message:"A user with that email doesnt exist"})
    }

    // verify whether the password belongs to the email sent

    const passwordMatch = await bcrypt.compare(password, doctor.password);

    if(passwordMatch){
        res.status(201).json({message:"Login successful", data: doctor});
    }else{
        res.status(401).json({message: "Wrong password"});
    }
}




