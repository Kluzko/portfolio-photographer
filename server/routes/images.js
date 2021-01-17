const { Router } = require("express");
const { createImage, deleteImage } = require("../controllers/images");
const { protect } = require("../middleware/auth");

const router = Router({ mergeParams: true });

router.route("/").post(protect, createImage);

router.route("/:id").delete(protect, deleteImage);

module.exports = router;
