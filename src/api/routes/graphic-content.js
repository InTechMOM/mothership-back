import express from "express";
import {getAllAudios, createAudio} from "../controllers/graphic-content/audioController.js";
import {generateImg, showImages} from "../controllers/graphic-content/generateController.js";

const graphicContentRouter = express.Router();

// Audio
graphicContentRouter.get("/audio", getAllAudios);
graphicContentRouter.post("/audio", createAudio);

// Generate

graphicContentRouter.post("/generateImg", generateImg);
graphicContentRouter.get("/generate/images", showImages);


export default graphicContentRouter;
