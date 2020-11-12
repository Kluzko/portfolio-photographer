// @desc Get all albums
// @route GET /api/v1/albums
// @access Public

export function getAlbums(req, res, next) {
  res.status(200).json({ success: true, msg: "Show all albums" });
}

// @desc Get single album
// @route GET /api/v1/albums/:id
// @access Public

export function getAlbum(req, res, next) {
  res.status(200).json({ success: true, msg: `Get album ${req.params.id}` });
}

// @desc Create new album
// @route POST /api/v1/albums
// @access Private

export function createAlbum(req, res, next) {
  res.status(200).json({ success: true, msg: "Create new album" });
}

// @desc Create  album
// @route PUT /api/v1/albums/:id
// @access Private

export function updateAlbum(req, res, next) {
  res.status(200).json({ success: true, msg: `Update album ${req.params.id}` });
}

// @desc Delete  album
// @route DELETE /api/v1/albums/:id
// @access Private

export function deleteAlbum(req, res, next) {
  res.status(200).json({ success: true, msg: `Delete album ${req.params.id}` });
}
