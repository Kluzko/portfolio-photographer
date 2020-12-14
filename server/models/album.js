const mongoose = require("mongoose");

const AlbumSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    unique: true,
    trim: true,
    maxlength: [30, "Name can not be more than 30 characters"],
  },
  textColor: String,
  slug: String,
  bckUrl: {
    type: String,
    required: [true, "Background photo is required"],
  },
});

module.exports = mongoose.model("Album", AlbumSchema);
