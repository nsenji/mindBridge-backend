var database = require("../database/index");
const Payment = database.Payment;

exports.add_payment = async (req, res, next) => {


    const payment_data = {
        date: req.body.date,
        time: req.body.time,
        amount: req.body.amount,
        doctorID: req.body.doctorID,  
        patientID: req.body.patientID,
    }

    await Payment.create(payment_data)
        .then(data => {
            res.status(201).json({ message: "Payment created successfully", data: data });

        })
        .catch(err => {
            res.status(400).json({ message: "There was an error while creating payment" + err })

        })
}