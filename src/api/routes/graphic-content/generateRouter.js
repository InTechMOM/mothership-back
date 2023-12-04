import express from "express";
import generateController from "../../controllers/graphic-content/generateController.js";
const generateRouter = express.Router();

generateRouter.post("/generateImg", generateController.generateImg);
generateRouter.get("/generate/images", generateController.showImages);

export default generateRouter;
