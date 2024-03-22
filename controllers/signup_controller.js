
const database = require("../database/index");

const Patient = database.Patient;
const Doctor = database.Doctor;



// patients signup
exports.patient_signup = async (req, res, next )=>{
    const name = "nsenji";
    const email = "nsengiyumvavictor@gmail.com";
    const password = "done1234"

    const user = {
        name : name,
        email : email,
        password : password
    }

    await Patient.create(user)
    .then(data => {
        res.status(201).json({message: "Account created successfully", data:data});
    })
    .catch(err => {
       if(err.name === "SequelizeUniqueConstraintError"){
        res.status(400).json({message: "User with that email already exists"})
       }
       res.status(400).json({message: "There was an error while creating account"})
    });


}


// doctors signup
exports.doctor_signup = async (req, res, next )=>{
    const name = "nsenji";
    const email = "nsengiyumvavictor@gmail.com";
    const password = "done1234"

    const user = {
        name : name,
        email : email,
        password : password,
        gender: "Male",
        languages_spoken: "English,Luganda",
        rate:45000,
        hospitalName: "Mulago Hospital",
        pro_title:"Medical Psychology",
        med_specialty:"Psychology",
        employment_status: "Private",
    }

    await Doctor.create(user)
    .then(data => {
        res.status(201).json({message: "Account created successfully", data:data});
    })
    .catch(err => {
       if(err.name === "SequelizeUniqueConstraintError"){
        res.status(400).json({message: "User with that email already exists"})
       }
       res.status(400).json({message: "There was an error while creating account"})
    });


}
