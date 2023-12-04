import express from "express";
import audioController from "../../controllers/graphic-content/audioController.js";
const audioRouter = express.Router();

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

// Ver todos los audios
audioRouter.get("/audio", audioController.getAllAudios);

// Crear audio - guardar
audioRouter.post("/audio", audioController.createAudios);

export default audioRouter;
