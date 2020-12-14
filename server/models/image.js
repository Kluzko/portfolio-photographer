const mongoose = require("mongoose");

const ImageSchema = mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  album: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Album",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Image", ImageSchema);
