const { Router } = require("express");
const { getMail } = require("../controllers/contact");

const router = Router();

router.route("/").post(getMail);

module.exports = router;
