const { Router } = require("express");
const { createImage, deleteImage } = require("../controllers/images");

const router = Router({ mergeParams: true });

router.route("/").post(createImage);

router.route("/:id").delete(deleteImage);

module.exports = router;
