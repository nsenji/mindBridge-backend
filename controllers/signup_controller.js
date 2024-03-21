

const database = require("../database/index");

const Patient = database.Patient;

exports.signup = async (req, res, next )=>{
    const name = "nsenji";
    const email = "nsengiyumvavictor@gmail.com";
    const password = "done1234"

    console.log("ahs entereed the function")
    const user = {
        name : name,
        email : email,
        password : password
    }

    await Patient.create(user)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.send(
            `Some error occurred while creating the User ${err}`
        );
    });


}
