const mongoose = require("mongoose");

const AlbumSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add album name"],
    unique: true,
    trim: true,
    maxlength: [30, "Name can not be more then 30 characters"],
  },
  slug: String,
  color: {
    type: String,
    trim: true,
  },
  bckImgUrl: {
    type: String,
    trim: true,
    required: [true, "Please add a background picture for albums"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

module.exports = mongoose.model("album", AlbumSchema);
