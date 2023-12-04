import audio from "../../models/graphic-content/audio.js";

async function getAllAudios() {
  return await audio.find();
}

async function createAudio() {
  const newAudio = new audio(audioData);
  return await newAudio.save();
}

export { getAllAudios, createAudio };
