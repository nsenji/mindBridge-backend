
var express = require("express");
var router = express.Router();

const createPaymentContoller = require("../controllers/add_payment");
const getPayments = require("../controllers/get_payment_receipts");

router.post("/addpayment", createPaymentContoller.add_payment);
router.post("/getpayments", getPayments.getPayments)

module.exports = router;
