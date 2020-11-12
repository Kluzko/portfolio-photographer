import { Schema } from "mongoose";

const AlbumSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please add album name"],
    unique: true,
    trim: true,
    maxlength: [30, "Name can not be more then 30 characters"],
  },
  slug: String,
  // Array of images
  backgroundImage: {
    type: String,
    required: [true, "Please add a background picture for albums"],
  },
  imageUrl: {
    type: [String],
    default: [],
  },
});
