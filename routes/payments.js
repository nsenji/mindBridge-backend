
var express = require("express");
var router = express.Router();

const createPaymentContoller = require("../controllers/add_payment");

router.post("/addpayment", createPaymentContoller.add_payment);

module.exports = router;
