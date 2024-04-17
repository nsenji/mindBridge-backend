
const express = require('express')

const sendMailController = require('../controllers/send_mail_controller')

const router = express.Router();

router.post("/", sendMailController.sendMail);

module.exports = router;