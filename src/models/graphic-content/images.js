import mongoose from "mongoose";

const imagesSchema = new mongoose.Schema({
  name: String,
});

export default mongoose.model("images", imagesSchema);
