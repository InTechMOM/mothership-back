import { getAllAudios, createAudio } from "../../services/audioService.js";

async function getAllAudiosController(req, res) {
  try {
    const audios = await getAllAudios();
    res.json(audios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createAudiosController(req, res) {
  try {
    const { name, duration } = req.body;
    const newAudio = new audio({ name, duration });
    const savedAudio = await new save();
    res.status(201).json(savedAudio);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export { getAllAudiosController, createAudiosController };
