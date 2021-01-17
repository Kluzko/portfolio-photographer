const { Router } = require("express");
const {
  getAlbum,
  getAlbums,
  deleteAlbum,
  updateAlbum,
  createAlbum,
} = require("../controllers/albums");

const { protect } = require("../middleware/auth");

// Include other resource routers
const imageRouter = require("./images");

const router = Router();

// Re-route into other resource routers

router.use("/:albumId/image", imageRouter);

router.route("/").get(getAlbums).post(protect, createAlbum);

router
  .route("/:id")
  .get(getAlbum)
  .put(protect, updateAlbum)
  .delete(protect, deleteAlbum);

module.exports = router;
