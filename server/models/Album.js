const mongoose = require("mongoose");
// const slugify = require("slugify"); idk its need seo optimization

const albumSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please add album name"],
      unique: true,
      trim: true,
      maxlength: [30, "Name can not be more then 30 characters"],
    },
    // slug: String,
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
      ref: "User",
      // required:true
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Create album slug from album name
// albumSchema.pre("save", function (next) {
//   this.slug = slugify(this.name, { lower: true });
//   next();
// });

// Delete casecade images when album is deleted
albumSchema.pre("remove", async function (next) {
  console.log(`courses being removed from album ${this._id}`);
  await this.model("Image").deleteMany({ album: this._id });
  next();
});

// Reverse populate with virtulas
albumSchema.virtual("images", {
  ref: "Image",
  localField: "_id",
  foreignField: "album",
  justOne: false,
});

module.exports = mongoose.model("Album", albumSchema);
