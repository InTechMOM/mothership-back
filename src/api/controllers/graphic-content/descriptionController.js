

async function getDescription(req, res) {
  try {
    const description = await storyTelling.findById();
    res.status(200).json(description);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
export default getDescription;
