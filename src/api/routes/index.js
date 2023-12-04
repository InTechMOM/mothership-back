import { Router } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import { serve, setup } from "swagger-ui-express";
import swaggerSpecification from "../../config/swagger.js";
import audioRouter from "./graphic-content/audioRouter.js";
import descriptionRouter from "./graphic-content/descriptionRouter.js";
import generateRouter from "./graphic-content/generateRouter.js";
import imageRouter from "./graphic-content/imageRouter.js";

const router = Router();

router.use("/docs", serve);
router.get("/docs", setup(swaggerJsdoc(swaggerSpecification)));

// graphic=content
router.use("/", audioRouter);
router.use("/", descriptionRouter);
router.use("/", generateRouter);
router.use("/", imageRouter);

export default router;