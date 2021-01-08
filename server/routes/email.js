const { Router } = require("express");
const { sendMail } = require("../controllers/nodemailer");

const router = Router();

router.route("/").post(sendMail);

module.exports = router;
