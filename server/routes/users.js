const { Router } = require("express");
const {
  getUser,
  getUsers,
  deleteUser,
  updateUser,
  createUser,
} = require("../controllers/users");

const User = require("../models/User");
const router = Router();

const { protect, authorize } = require("../middleware/auth");
const advancedResults = require("../middleware/advancedResult");

router.use(protect);
router.use(authorize("admin"));

router.route("/").get(advancedResults(User), getUsers).post(createUser);

router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
