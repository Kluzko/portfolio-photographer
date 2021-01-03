const { Router } = require("express");
const {
  getAlbum,
  getAlbums,
  deleteAlbum,
  updateAlbum,
  createAlbum,
} = require("../controllers/albums");

// Include other resource routers
const imageRouter = require("./images");

const router = Router();

// Re-route into other resource routers

router.use("/:albumId/image", imageRouter);

router.route("/").get(getAlbums).post(createAlbum);

router.route("/:id").get(getAlbum).put(updateAlbum).delete(deleteAlbum);

module.exports = router;
