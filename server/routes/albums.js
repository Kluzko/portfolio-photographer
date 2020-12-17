const { Router } = require("express");
const {
  getAlbum,
  getAlbums,
  deleteAlbum,
  updateAlbum,
  createAlbum,
} = require("../controllers/albums");

const router = Router();

router.route("/").get(getAlbums).post(createAlbum);

router.route("/:id").get(getAlbum).put(updateAlbum).delete(deleteAlbum);

module.exports = router;
