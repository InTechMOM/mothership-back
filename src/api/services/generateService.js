import generate from "../../models/graphic-content/generate.js";
import fileConfig from "../../config/fileConfig.js";

async function generateImg(description, numberOfPics) {
  const bodyInfo = generate.buildBodyInfo(description, numberOfPics);
  const result = await axiosUtils.postTextToImage(bodyInfo);

  const picAmount = result.data.output.length;

  for (let i = 0; i < picAmount; i++) {
    let number = i + 1;
    await fileConfig.downloadImage(result.data.output[i], `${number}.png`);
    console.log("Generated Pic " + number);
  }
}

async function listImages() {
  return await fileConfig.listImages();
}

export { generateImg, listImages };
