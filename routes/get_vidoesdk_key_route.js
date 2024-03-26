var express = require("express");
var router = express.Router();

const videosdk_key_controller = require("../controllers/get_videosdk_key");

router.get("/get_api_key", videosdk_key_controller.get_videosdk_key);

