const mongoose = require("mongoose");
const slugify = require("slugify");

const CommentsSchema = new mongoose.Schema({
  comment: {
    type: String,
    default: "",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please add title"],
    unique: true,
    trim: true,
    maxlength: [30, "Name can not be more then 30 characters"],
  },
  body: {
    type: String,
    required: [true, "Please add your article text"],
  },
  slug: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  // comments: [CommentSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // meta: {
  //   votes: Number,
  //   favs: Number,
  // },
  slug: String,
});

BlogSchema.pre("save", function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

module.exports = mongoose.model("Blog", BlogSchema);
