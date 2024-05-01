
var database = require("../database/index");
const bcrypt = require('bcrypt');
const Patient = database.Patient;
const Doctor = database.Doctor;
const Avatar = database.Avatar;


// Patient login
exports.patient_login = async (req, res, next) => {

    // returns null if no one exists with that email or an object of user if they exist
    const patient = await Patient.findOne({ where: { email: req.body.email } });

    if(!patient){
        return res.status(401).json({message:"A user with that email doesnt exist"})
    }

    // verify whether the password belongs to the email sent

    const passwordMatch = await bcrypt.compare(req.body.password, patient.password);

    if(passwordMatch){
        return res.status(201).json({message:"Login successful", data: patient});
    }else{
        return res.status(401).json({message: "Wrong password"});
    }
}




// doctor login
exports.doctor_login = async (req, res, next) => {

    try{
        // returns null if no one exists with that email or an object of user if they exist
        const doctor = await Doctor.findOne({ where: { email: req.body.email },
        include: {
            model: Avatar,
            attributes: ['file_name'],
            as: 'avatar',
        }
        });

        if(!doctor){
            console.log("This response")
            return res.status(404).json({message:"A user with that email doesnt exist"})
        }

            // verify whether the password belongs to the email sent
        const passwordMatch = await bcrypt.compare(req.body.password, doctor.password);

        if(passwordMatch){
            return res.status(201).json({message:"Login successful", data: doctor});
        }else{
            return res.status(401).json({message: "Wrong password"});
        }
    } catch(error){
        return res.status(401).json({ message: "Can't Login" + error })
    }
}




