// trainer routes
const express = require('express');
const trainerRoutes = express.Router();

const {
  createTrainer,
  getAllTrainers,
  getTrainerById,
  updateTrainerById,
  deleteTrainerById,
} = require('./trainerController');

trainerRoutes.post('/', createTrainer);
trainerRoutes.get('/', getAllTrainers);
trainerRoutes.get('/:id', getTrainerById);
trainerRoutes.put('/:id', updateTrainerById);
trainerRoutes.delete('/:id', deleteTrainerById);

module.exports = trainerRoutes;

{
  /*
const express = require('express');
const trainerRoutes = express.Router();


const {
  getAllTrainers,
  getTrainerById,
  createTrainer,
  updateTrainerById,
  deleteTrainerById,
} = require('./trainerController');

// Create a new trainer
trainerRoutes.post('/', async (req, res) => {
  try {
    const newTrainer = new Trainer(req.body);
    const savedTrainer = await newTrainer.save();
    res.status(201).json(savedTrainer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a list of all trainers
trainerRoutes.get('/', async (req, res) => {
  try {
    const trainers = await Trainer.find();
    res.status(200).json(trainers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get details of a single trainer by ID
trainerRoutes.get('/:id', async (req, res) => {
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
});

// Update the details of an existing trainer by ID
trainerRoutes.put('/:id', async (req, res) => {
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
});

// Delete an existing trainer by ID
trainerRoutes.delete('/:id', async (req, res) => {
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
});

module.exports = trainerRoutes;

*/
}
