// trainer controller

const Trainer = require('./trainer');

// Get a list of all trainers
const getAllTrainers = async (req, res) => {
  try {
    const trainers = await Trainer.find();
    res.status(200).json(trainers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get details of a single trainer by ID
const getTrainerById = async (req, res) => {
  try {
    const trainerId = req.params.id;
    if (!trainerId) {
      return res.status(400).json({ error: 'Invalid trainer ID' });
    }
    const trainer = await Trainer.findById(trainerId);
    if (!trainer) {
      return res.status(404).json({ error: 'Trainer not found' });
    }
    res.status(200).json(trainer);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};
// Create a new trainer
const createTrainer = async (req, res) => {
  try {
    const newTrainer = new Trainer(req.body);
    const savedTrainer = await newTrainer.save();
    res
      .status(201)
      .json({ message: 'Trainer created successfully', trainer: savedTrainer });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update the details of an existing trainer by ID
const updateTrainerById = async (req, res) => {
  try {
    const updatedTrainer = await Trainer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedTrainer) {
      return res.status(404).json({ error: 'Trainer not found' });
    }
    res.status(200).json(updatedTrainer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete an existing trainer by ID
const deleteTrainerById = async (req, res) => {
  try {
    const deletedTrainer = await Trainer.deleteOne({
      _id: req.params.id,
    });
    if (deletedTrainer.deletedCount === 0) {
      return res.status(404).json({ error: 'Trainer not found' });
    }
    res.status(200).json({ message: 'Trainer deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllTrainers,
  getTrainerById,
  createTrainer,
  updateTrainerById,
  deleteTrainerById,
};
