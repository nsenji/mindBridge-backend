const sgMail = require('@sendgrid/mail')

exports.sendMail = (req, res, next) => {

    const userEmail = req.body.userEmail;
    const callID = req.body.callID;

    console.log(userEmail);
    console.log(callID);

    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
        to: userEmail, // Change to your recipient
        from: 'jerrysyre@gmail.com', // Change to your verified sender
        subject: 'Medbridge call ID',
        html: `Hello from Medbridge. Call ID is <strong>${callID}</strong>`,
        // html: '<strong>Your call has started. Please join Now</strong>',
    }
    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent');
            res.send("success")

        })
        .catch((error) => {
            console.error(error)
            res.send("error")
        })
}