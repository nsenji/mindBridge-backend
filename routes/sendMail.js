 
 import express from "express";
 import { sendMail } from "../controllers/send_mail_controller";

 const router = express.Router();

router.get("/", sendMail)

export default router;