const mongoose = require("mongoose");

const AlbumSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add album name"],
    unique: true,
    trim: true,
    maxlength: [20, "Name can not be more then 20 characters"],
  },
  slug: String,
  // Array of images
  backgroundImage: {
    type: String,
    required: [true, "Please add a background picture for albums"],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Album", AlbumSchema);
