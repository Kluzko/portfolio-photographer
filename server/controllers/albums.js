const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Album = require("../models/Album");

// @desc Get all albums
// @route GET /api/v1/albums
// @access Public

exports.getAlbums = asyncHandler(async (req, res, next) => {
  res.status(200).json(res.advancedResults);
});

// @desc Get single album and display photos
// @route GET /api/v1/albums/:id
// @access Public

exports.getAlbum = asyncHandler(async (req, res, next) => {
  const album = await Album.findById(req.params.id).populate("images");

  if (!album) {
    return next(
      new ErrorResponse(`Album not found with id of ${req.params.id}`, 404)
    );
  }

  res.status(200).json({
    success: true,
    data: album,
  });
});

// @desc Create new album
// @route POST /api/v1/albums
// @access Private

exports.createAlbum = asyncHandler(async (req, res, next) => {
  // Add user to req.body
  req.body.user = req.user.id;

  const album = await Album.create(req.body);

  res.status(201).json({
    success: true,
    data: album,
  });
});

// @desc Update  album
// @route PUT /api/v1/albums/:id
// @access Private

exports.updateAlbum = asyncHandler(async (req, res, next) => {
  const album = await Album.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!album) {
    return next(
      new ErrorResponse(`Album not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: album });
});

// @desc Delete  album
// @route DELETE /api/v1/albums/:id
// @access Private

exports.deleteAlbum = asyncHandler(async (req, res, next) => {
  const album = await Album.findById(req.params.id);
  if (!album) {
    return next(
      new ErrorResponse(`Album not found with id of ${req.params.id}`, 404)
    );
  }

  album.remove();

  res.status(200).json({ success: true, data: req.params.id });
});
