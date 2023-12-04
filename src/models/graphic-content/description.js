import mongoose from "mongoose";

const descriptionSchema = new mongoose.Schema({
  description: String,
});

export default mongoose.model("storyTelling", descriptionSchema);
