const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please add an email"],
    match: [
      /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
      "Please enter a valid email address.",
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please add password"],
    minlength: 6,
    select: false,
  },
  role: {
    type: String,
    required: true,
    enum: ["user", "bloger"],
    default: "user",
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  createdAd: {
    type: Date,
    default: Date.now,
  },
  // articles: [
  //   {
  //     type: mongoose.Schema.ObjectId,
  //     ref: "Blog",
  //   },
  // ],
  // albums: [
  //   {
  //     type: mongoose.Schema.ObjectId,
  //     ref: "Album",
  //   },
  // ],
});

// Encript pass using bcryptjs

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

//  Sign JWT and return
userSchema.methods.getSignedJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
};
// Match password to hashed password

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
