import imagesModel from "../../../models/graphic-content/images.js";


async function getAllImages(req, res) {
  try {
    const images = await imagesModel.find();
    res.json(images);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function createImage(req, res) {
  try {
    const { name } = req.body;
    const newImage = new images({ name });
    const savedImage = await newImage.save();
    res.status(201).json(savedImage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export { getAllImages, createImage };
