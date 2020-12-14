import { Router } from "express";
import {
  getAlbum,
  getAlbums,
  deleteAlbum,
  updateAlbum,
  createAlbum,
} from "../controllers/albums";

const router = Router();

router.route("/").get(getAlbums).post(createAlbum);

router.route("/:id").get(getAlbum).put(updateAlbum).delete(deleteAlbum);

export default router;
