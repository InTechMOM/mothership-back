import images from "../../models/graphic-content/images.js";

async function getAllImages() {
  return await images.find();
}

async function createImage() {
  const newImage = new images(imageData);
  return await newImage.save();
}

export { getAllImages, createImage };
