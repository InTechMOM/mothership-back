import axios from "axios";
import { downloadImage, listImages } from "../../../config/fileConfig.js";
import { stableDiffusionApiKey } from "../../../config/index.js";

export async function generateImg(req, res) {
  try {
    const { description, numberOfPics } = req.body;
    const bodyInfo = buildBodyInfo(description, numberOfPics);
    const result = await postTextToImage(bodyInfo);
    const picAmount = result.data.output.length;

    for (let i = 0; i < picAmount; i++) {
      let number = i + 1;
      await downloadImage(result.data.output[i], `${number}.png`);
      console.log("Generated Pic " + number);
    }

    res.status(200).json({ message: "Images generated successfully." });
  } catch (error) {
    console.error("Error generating images:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export async function showImages(req, res) {
  try {
    const imageFiles = await listImages();
    res.status(200).json(imageFiles);
  } catch (error) {
    console.error("Error listing images:", error.message);
    res.status(500).send("Error listing images");
  }
}

function buildBodyInfo(description, numberOfPics) {
  return {
    key: stableDiffusionApiKey,
    prompt: description,
    negative_prompt: "((out of frame)), ((extra fingers)), ...", // Add your negative prompts
    width: "512",
    height: "512",
    samples: numberOfPics,
    num_inference_steps: "30",
    safety_checker: "no",
    enhance_prompt: "yes",
    seed: null,
    guidance_scale: 7.5,
    multi_lingual: "yes",
    webhook: null,
    track_id: null,
  };
}

async function postTextToImage(bodyInfo) {
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  return await axios.post(
    "https://stablediffusionapi.com/api/v3/text2img",
    JSON.stringify(bodyInfo),
    options
  );
}
