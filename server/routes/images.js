const { Router } = require("express");
const { createImage, deleteImage } = require("../controllers/images");
const { protect, authorize } = require("../middleware/auth");

const router = Router({ mergeParams: true });

router.route("/").post(protect, authorize("admin"), createImage);

router.route("/:id").delete(protect, authorize("admin"), deleteImage);

module.exports = router;
