const mongoose = require("mongoose");

const imageSchema = mongoose.Schema({
  image: {
    type: String,
    required: true,
    default: "no-image.png",
  },
  album: {
    type: mongoose.Schema.ObjectId,
    ref: "Album",
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
});

module.exports = mongoose.model("Image", imageSchema);
