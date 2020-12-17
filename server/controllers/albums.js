const Album = require("../models/Album");
const Image = require("../models/Image");

// @desc Get all albums
// @route GET /api/v1/albums
// @access Public

exports.getAlbums = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show all albums" });
};

// @desc Get single album and display photos
// @route GET /api/v1/albums/:id
// @access Public

exports.getAlbum = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Get album ${req.params.id}` });
};

// @desc Create new album
// @route POST /api/v1/albums
// @access Private

exports.createAlbum = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Create new album" });
};

// @desc Update  album
// @route PUT /api/v1/albums/:id
// @access Private

exports.updateAlbum = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Update album ${req.params.id}` });
};

// @desc Delete  album
// @route DELETE /api/v1/albums/:id
// @access Private

exports.deleteAlbum = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Delete album ${req.params.id}` });
};
