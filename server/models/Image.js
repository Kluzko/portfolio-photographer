const mongoose = require("mongoose");

const ImageSchema = mongoose.Schema({
  image: {
    type: String,
    required: true,
  },
  album: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "album",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

module.exports = mongoose.model("image", ImageSchema);
