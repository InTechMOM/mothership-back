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
