import audio from "../../../models/graphic-content/audio.js";

async function getAllAudios(req, res) {
  try {
    const audios = await await audio.find();
    res.json(audios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createAudio(req, res) {
  try {
    const { name, duration } = req.body;
    const newAudio = new audio({ name, duration });
    const savedAudio = await newAudio.save();
    res.status(201).json(savedAudio);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export { getAllAudios, createAudio };
