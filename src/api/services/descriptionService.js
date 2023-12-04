import storyTelling from "../../models/graphic-content/description.js";

async function getDescription() {
  return await storyTelling.findById();
}

export { getDescription };
