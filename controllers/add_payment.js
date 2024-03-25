var database = require("../database/index");
const Payment = database.Payment;

exports.add_payment = async (req, res, next) => {


    const payment_data = {
        date: "21-03-24",
        time: "12:04",
        amount: 45000,
        doctorID: "",  // add the UUID for these last 2 
        patientID: "",
    }

    await Payment.create(payment_data)
        .then(data => {
            res.status(201).json({ message: "Payment created successfully", data: data });

        })
        .catch(err => {
            res.status(400).json({ message: "There was an error while creating payment" + err })

        })
}