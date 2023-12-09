import { Router } from "express";
import { serve, setup } from "swagger-ui-express";
import swaggerSpecification from "../../config/swagger.js";
import graphicContentRouter from "./graphic-content.js";

const router = Router();

router.use("/docs", serve, setup(swaggerSpecification));

router.use("/", graphicContentRouter);

export default router;
