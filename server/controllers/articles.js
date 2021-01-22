const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Blog = require("../models/Blog");
const slugify = require("slugify");

// @desc Get all articles
// @route GET /api/v1/article
// @access Public

exports.getArticles = asyncHandler(async (req, res, next) => {
  let query;

  // Copy req.query
  const reqQuery = { ...req.query };

  // Fileds to exclude
  const removeFileds = ["page", "limit"];

  // Loop over removeFileds and delete them from reqQuery

  removeFileds.forEach((param) => delete reqQuery[param]);

  // Create query string
  let queryStr = JSON.stringify(reqQuery);

  // Finding resource
  query = Blog.find(JSON.parse(queryStr));

  // Pagination

  const page = parseInt(req.query.page, 10) || 1;
  // default 20 article per page
  const limit = parseInt(req.query.limit, 10) || 20;
  const skip = (page - 1) * limit;

  console.log(limit);

  query = query.skip(skip).limit(limit);

  // executing query
  const article = await query;

  res.status(200).json({ success: true, count: article.length, data: article });
});

// @desc Get single article
// @route GET /api/v1/article/:slug
// @access Public

exports.getArticle = asyncHandler(async (req, res, next) => {
  const article = await Blog.findOne({
    slug: req.params.slug,
  });

  if (!article) {
    return next(new ErrorResponse(`Article ${req.params.slug} not found`, 404));
  }

  res.status(200).json({
    success: true,
    data: article,
  });
});

// @desc Create new article
// @route POST /api/v1/article
// @access Private

exports.createArticle = asyncHandler(async (req, res, next) => {
  // Add user to req.body
  req.body.author = req.user.id;

  const article = await Blog.create(req.body);

  res.status(201).json({
    success: true,
    data: article,
  });
});

// @desc Update  article
// @route PUT /api/v1/article/:id
// @access Private

exports.updateArticle = asyncHandler(async (req, res, next) => {
  let article = await Blog.findOne({ slug: req.params.slug });

  if (!article) {
    return next(new ErrorResponse(`Article ${req.params.slug} not found`, 404));
  }

  // Make sure user is article owner

  if (article.author.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(`You are not authorized to update this document`, 401)
    );
  }

  article = await Blog.findOneAndUpdate({ slug: req.params.slug }, req.body, {
    new: true,
    runValidators: true,
  });

  if (req.body.title) {
    article.slug = slugify(req.body.title, { lower: true });
    await article.save({ runValidators: false });
  }

  res.status(200).json({ success: true, data: article });
});

// @desc Delete  article
// @route DELETE /api/v1/albums/:id
// @access Private

exports.deleteArticle = asyncHandler(async (req, res, next) => {
  const article = await Blog.findOne({
    slug: req.params.slug,
  });

  if (!article) {
    return next(new ErrorResponse(`Article ${req.params.slug} not found`, 404));
  }

  // Make sure user is article owner

  if (article.author.toString() !== req.user.id && req.user.role !== "admin") {
    return next(
      new ErrorResponse(`You are not  delete to update this document`, 401)
    );
  }

  article.remove();

  res.status(200).json({ success: true, data: req.params.slug });
});
