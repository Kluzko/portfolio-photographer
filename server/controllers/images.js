const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Image = require("../models/Image");
const Album = require("../models/Album");

// @desc Create new image
// @route POST /api/v1/albums/:albumId/image
// @access Private

exports.createImage = asyncHandler(async (req, res, next) => {
  // get album Id and sign it as album

  const album = await Album.findById(req.params.albumId);

  if (!album) {
    return next(
      new ErrorResponse(`No album with id of ${req.params.albumId}`),
      404
    );
  }
  req.body.album = req.params.albumId;

  const image = await Image.create(req.body);

  res.status(201).json({
    success: true,
    data: image,
  });
});

// @desc Delete single image
// @route POST /api/v1/images/:id
// @access Private

exports.deleteImage = asyncHandler(async (req, res, next) => {
  const album = await Album.findByIdAndDelete(req.params.id);

  if (!album) {
    return next(
      new ErrorResponse(`No album with id of ${req.params.albumId}`),
      404
    );
  }
  res.status(201).json({
    success: true,
    data: req.params.id,
  });
});
