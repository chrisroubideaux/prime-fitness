// crud operations for guide routes

const express = require('express');
const guideRoutes = express.Router();
const Guide = require('./guide');

const {
  getAllGuides,
  getGuideById,
  createGuide,
  updateGuideById,
  deleteGuideById,
} = require('./guideController');

// Create a new guide
guideRoutes.post('/', async (req, res) => {
  try {
    const newGuide = new Guide(req.body);
    const savedGuide = await newGuide.save();
    res.status(201).json(savedGuide);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a list of all guides
guideRoutes.get('/', async (req, res) => {
  try {
    const guides = await Guide.find();
    res.status(200).json(guides);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get details of a single guide by ID
guideRoutes.get('/:id', async (req, res) => {
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
});

// Update the details of an existing guide by ID
guideRoutes.put('/:id', async (req, res) => {
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
});

// Delete an existing guide by ID
guideRoutes.delete('/:id', async (req, res) => {
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
});

module.exports = guideRoutes;
