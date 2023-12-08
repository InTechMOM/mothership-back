/**
 * @swagger
 * /api/audio:
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

/**
 * @swagger
 * /generate-images:
 *   post:
 *     summary: Generar imágenes.
 *     description: Endpoint que utiliza inteligencia artificial para generar tres imágenes.
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               input_data:
 *                 type: string
 *                 description: Datos de entrada para la generación de imágenes.
 *             required:
 *               - input_data
 *     responses:
 *       200:
 *         description: Imágenes generadas exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 image1:
 *                   type: string
 *                   url: URL de la primera imagen generada.
 *                 image2:
 *                   type: string
 *                   url: URL de la segunda imagen generada.
 *                 image3:
 *                   type: string
 *                   url: URL de la tercera imagen generada.
 *       500:
 *         description: Error en la generación de imágenes.
 */