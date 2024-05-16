
var express = require("express");
var router = express.Router();

const createPaymentContoller = require("../controllers/add_payment");
const getPayments = require("../controllers/get_payment_receipts");
const getDoctorEarnings = require("../controllers/get_doctor_earnings")

router.post("/addpayment", createPaymentContoller.add_payment);
router.post("/getpayments", getPayments.getPayments)
router.post("/getdoctorearnings", getDoctorEarnings.getDoctorEarnings)

module.exports = router;
