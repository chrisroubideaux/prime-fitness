// guide controller

const Guide = require('./guide');

// Get a list of all guides
const getAllGuides = async (req, res) => {
  try {
    const guides = await Guide.find();
    res.status(200).json(guides);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get details of a single guide by ID
const getGuideById = async (req, res) => {
  try {
    const guideId = req.params.id;
    if (!guideId) {
      return res.status(400).json({ error: 'Invalid guide ID' });
    }
    const guide = await Guide.findById(guideId);
    if (!guide) {
      return res.status(404).json({ error: 'Guide not found' });
    }
    res.status(200).json(guide);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new guide
const createGuide = async (req, res) => {
  try {
    const newGuide = new Guide(req.body);
    const savedGuide = await newGuide.save();
    res
      .status(201)
      .json({ message: 'Guide created successfully', guide: savedGuide });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update the details of an existing guide by ID
const updateGuideById = async (req, res) => {
  try {
    const updatedGuide = await Guide.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedGuide) {
      return res.status(404).json({ error: 'Guide not found' });
    }
    res.status(200).json(updatedGuide);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete an existing guide by ID
const deleteGuideById = async (req, res) => {
  try {
    const deletedGuide = await Guide.deleteOne({
      _id: req.params.id,
    });
    if (deletedGuide.deletedCount === 0) {
      return res.status(404).json({ error: 'Guide not found' });
    }
    res.status(200).json({ message: 'Guide deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllGuides,
  getGuideById,
  createGuide,
  updateGuideById,
  deleteGuideById,
};
