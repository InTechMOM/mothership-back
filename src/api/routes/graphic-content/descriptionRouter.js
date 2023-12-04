import express from "express";
import descriptionController from "../../controllers/graphic-content/descriptionController.js";
const descriptionRouter = express.Router();

// Ver descripcion
descriptionRouter.get("/description", descriptionController.getDescription);

export default descriptionRouter;
