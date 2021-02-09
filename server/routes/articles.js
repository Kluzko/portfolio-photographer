const { Router } = require("express");
const {
  getArticle,
  getArticles,
  updateArticle,
  deleteArticle,
  createArticle,
  getUserArticles,
} = require("../controllers/articles");

const { protect, authorize } = require("../middleware/auth");
const router = Router();

const advancedResults = require("../middleware/advancedResult");
const Blog = require("../models/Blog");

router
  .route("/")
  .get(advancedResults(Blog), getArticles)
  .post(protect, authorize("admin", "bloger"), createArticle);

router
  .route("/:slug")
  .get(getArticle)
  .put(protect, authorize("admin", "bloger"), updateArticle)
  .delete(protect, authorize("admin", "bloger"), deleteArticle);

router.route("/user/:id").get(getUserArticles);

module.exports = router;
