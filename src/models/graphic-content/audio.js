import mongoose from "mongoose";

const audioSchema = new mongoose.Schema({
  name: String,
  duration: Number,
});

export default mongoose.model("audio", audioSchema);
