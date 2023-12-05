import images from "../../../models/graphic-content/images.js";

/**
 * @openapi
 * /api/v1/image:
 *   get:
 *     summary: Obtener lista de imágenes
 *     tags: [Imagenes]
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
 *                     example: "imagen1.jpg"
 *       '404':
 *         description: Imágenes no encontradas
 */

async function getAllImages(req, res) {
  try {
    const images = await images.find();
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
