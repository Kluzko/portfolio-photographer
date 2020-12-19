const ErrorResponse = require("../utils/errorResponse");
const Album = require("../models/Album");
const Image = require("../models/Image");

// @desc Get all albums
// @route GET /api/v1/albums
// @access Public

exports.getAlbums = async (req, res, next) => {
  try {
    const albums = await Album.find();

    res.status(200).json({ success: true, count: albums.length, data: albums });
  } catch (err) {
    next(err);
  }
};

// @desc Get single album and display photos
// @route GET /api/v1/albums/:id
// @access Public

exports.getAlbum = async (req, res, next) => {
  try {
    const album = await Album.findById(req.params.id);

    if (!album) {
      return next(
        new ErrorResponse(`Album not found with id of ${req.params.id}`, 404)
      );
    }

    res.status(200).json({ success: true, data: album });
  } catch (err) {
    next(err);
  }
};

// @desc Create new album
// @route POST /api/v1/albums
// @access Private

exports.createAlbum = async (req, res, next) => {
  try {
    const album = await Album.create(req.body);

    res.status(201).json({
      success: true,
      data: album,
    });
  } catch (err) {
    next(err);
  }
};

// @desc Update  album
// @route PUT /api/v1/albums/:id
// @access Private

exports.updateAlbum = async (req, res, next) => {
  try {
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
  } catch (err) {
    next(err);
  }
};

// @desc Delete  album
// @route DELETE /api/v1/albums/:id
// @access Private

exports.deleteAlbum = async (req, res, next) => {
  try {
    const album = await Album.findByIdAndDelete(req.params.id);
    if (!album) {
      return next(
        new ErrorResponse(`Album not found with id of ${req.params.id}`, 404)
      );
    }
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    next(err);
  }
};
