const { Router } = require("express");
const {
  getAlbum,
  getAlbums,
  deleteAlbum,
  updateAlbum,
  createAlbum,
} = require("../controllers/albums");

const Albums = require("../models/Album");

const { protect, authorize } = require("../middleware/auth");

const advancedResults = require("../middleware/advancedResult");

// Include other resource routers
const imageRouter = require("./images");

const router = Router();

// Re-route into other resource routers

router.use("/:albumId/image", imageRouter);

router
  .route("/")
  .get(advancedResults(Albums), getAlbums)
  .post(protect, authorize("admin"), createAlbum);

router
  .route("/:id")
  .get(getAlbum)
  .put(protect, authorize("admin"), updateAlbum)
  .delete(protect, authorize("admin"), deleteAlbum);

module.exports = router;
