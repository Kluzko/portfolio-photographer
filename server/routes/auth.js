const express = require("express");
const {
  register,
  login,
  getMe,
  forgotPassword,
  resetPassword,
  updateDetails,
  updatePassword,
} = require("../controllers/auth");
const { protect } = require("../middleware/auth");

const router = express.Router();

router.get("/me", protect, getMe);

router.post("/register", register);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);

router.put("/update-details", protect, updateDetails);
router.put("/update-password", protect, updatePassword);
router.put("/reset-password/:resettoken", resetPassword);

module.exports = router;
