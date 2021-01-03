const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    match: [
      /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
      "Please enter a valid email address.",
    ],
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["user", "bloger", "admin"],
  },
  articles: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Blog",
    },
  ],
  albums: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Album",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
