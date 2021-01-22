const { Router } = require("express");
const {
  getArticle,
  getArticles,
  updateArticle,
  deleteArticle,
  createArticle,
} = require("../controllers/articles");

const { protect, authorize } = require("../middleware/auth");
const router = Router();

router
  .route("/")
  .get(getArticles)
  .post(protect, authorize("admin", "bloger"), createArticle);

router
  .route("/:slug")
  .get(getArticle)
  .put(protect, authorize("admin", "bloger"), updateArticle)
  .delete(protect, authorize("admin", "bloger"), deleteArticle);

module.exports = router;
