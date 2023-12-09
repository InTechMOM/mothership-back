/**
 * @swagger
 * /audio:
 *   post:
 *     summary: Crear un nuevo audio
 *     tags: 
 *       - Audios
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "audio2.mp3"
 *               duration:
 *                 type: number
 *                 example: 120
 *     responses:
 *       '201':
 *         description: Audio creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   example: "audio2.mp3"
 *                 duration:
 *                   type: number
 *                   example: 120
 *                 storageUrl:
 *                   type: string
 *                   example: "https://tu-almacenamiento.com/image3.png"
 *                 message:
 *                   type: string
 *                   example: "Audio creado exitosamente"
 *   get:
 *     summary: Obtener detalles de audios almacenados
 *     tags: 
 *       - Audios
 *     parameters:
 *       - name: name
 *         in: query
 *         schema:
 *           type: string
 *         description: Nombre del audio
 *       - name: duration
 *         in: query
 *         schema:
 *           type: number
 *         description: Duración del audio en minutos
 *     responses:
 *       '200':
 *         description: Respuesta exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   example: "audio1.mp3"
 *                 duration:
 *                   type: number
 *                   example: 65
 *                 storageUrl:
 *                   type: string
 *                   example: "https://tu-almacenamiento.com/audio1.mp3"
 *       '404':
 *         description: Audio no encontrado
 */
/**
 * @swagger
 * /images:
 *   post:
 *     summary: Generar y almacenar tres nuevas imágenes
 *     tags:
 *       - Imágenes
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               image1:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     example: "image1.png"
 *               image2:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     example: "image2.png"
 *               image3:
 *                 type: object
 *                 properties:
 *                   name:
 *                     type: string
 *                     example: "image3.png"
 *     responses:
 *       '201':
 *         description: Imágenes creadas exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 image1:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       example: "image1.png"
 *                     storageUrl:
 *                       type: string
 *                       example: "https://tu-almacenamiento.com/image1.png"
 *                 image2:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       example: "image2.png"
 *                     storageUrl:
 *                       type: string
 *                       example: "https://tu-almacenamiento.com/image2.png"
 *                 image3:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       example: "image3.png"
 *                     storageUrl:
 *                       type: string
 *                       example: "https://tu-almacenamiento.com/image3.png"
 *   get:
 *     summary: Obtener detalles de tres imágenes almacenadas
 *     tags:
 *       - Imágenes
 *     parameters:
 *       - name: image1Name
 *         in: query
 *         schema:
 *           type: string
 *           example: "image1.png"
 *       - name: image2Name
 *         in: query
 *         schema:
 *           type: string
 *           example: "image2.png"
 *       - name: image3Name
 *         in: query
 *         schema:
 *           type: string
 *           example: "image3.png"
 *     responses:
 *       '200':
 *         description: Respuesta exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 image1:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       example: "image1.png"
 *                     storageUrl:
 *                       type: string
 *                       example: "https://tu-almacenamiento.com/image1.png"
 *                 image2:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       example: "image2.png"
 *                     storageUrl:
 *                       type: string
 *                       example: "https://tu-almacenamiento.com/image2.png"
 *                 image3:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       example: "image3.png"
 *                     storageUrl:
 *                       type: string
 *                       example: "https://tu-almacenamiento.com/image3.png"
 *       '404':
 *         description: Imágenes no encontradas
 */