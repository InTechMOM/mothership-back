import { config } from "dotenv";
config();

export const port = process.env.PORT || 3000;
export const dbUri = process.env.DB_URI;
export const stableDiffusionApiKey = process.env.STABLED_DIFFUSION_API_KEY;
