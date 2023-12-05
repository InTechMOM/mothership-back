import { config } from "dotenv";
config();

export const port = process.env.PORT || 3000;
export const mongoUri = process.env.MONGO_URI;
export const stableDiffusionApiKey = process.env.STABLED_DIFFUSION_API_KEY;
