import express from "express";
import imageController from "../../controllers/graphic-content/imageController.js";
const imageRouter = express.Router();

// Ver todos los audios
imageRouter.get("/image", imageController.getAllImages);

// Crear audio - guardar
imageRouter.post("/image", imageController.createImage);

export default imageRouter;
