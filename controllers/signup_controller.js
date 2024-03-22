
const database = require("../database/index");

const Patient = database.Patient;

exports.signup = async (req, res, next )=>{
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
