import express from "express";
import {
  getAllAudios,
  createAudio,
} from "../controllers/graphic-content/audioController.js";
import getDescription from "../controllers/graphic-content/descriptionController.js";
import {
  generateImg,
  showImages,
} from "../controllers/graphic-content/generateController.js";
import {
  getAllImages,
  createImage,
} from "../controllers/graphic-content/imageController.js";

const graphicContentRouter = express.Router();

/**
 * @swagger
 * /api/v1/audio:
 *   get:
 *     summary: Obtener lista de audios
 *     tags: [Audios]
 *     responses:
 *       '200':
 *         description: Respuesta exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     example: "audio1.mp4"
 *                   duration:
 *                     type: number
 *                     example: "1:05"
 *       '404':
 *         description: Audio not found
 */
graphicContentRouter.get("/audio", getAllAudios);
graphicContentRouter.post("/audio", createAudio);

// Description
graphicContentRouter.get("/description", getDescription);

// Generate

graphicContentRouter.post("/generateImg", generateImg);
graphicContentRouter.get("/generate/images", showImages);

// Ver todos los audios
graphicContentRouter.get("/image", getAllImages);

// Crear audio - guardar
graphicContentRouter.post("/image", createImage);

export default graphicContentRouter;
