// owner controller

const Owner = require('./owner');

// Get a list of all owners
const getAllOwners = async (req, res) => {
  try {
    const owners = await Owner.find();
    res.status(200).json(owners);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get details of a single owner by ID
const getOwnerById = async (req, res) => {
  try {
    const ownerId = req.params.id;
    if (!ownerId) {
      return res.status(400).json({ error: 'Invalid owner ID' });
    }
    const owner = await Owner.findById(ownerId);
    if (!owner) {
      return res.status(404).json({ error: 'Owner not found' });
    }
    res.status(200).json(owner);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new owner
const createOwner = async (req, res) => {
  try {
    const newOwner = new Owner(req.body);
    const savedOwner = await newOwner.save();
    res
      .status(201)
      .json({ message: 'Owner created successfully', owner: savedOwner });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update the details of an existing owner by ID
const updateOwnerById = async (req, res) => {
  try {
    const updatedOwner = await Owner.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedOwner) {
      return res.status(404).json({ error: 'Owner not found' });
    }
    res.status(200).json(updatedOwner);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete an existing owner by ID
const deleteOwnerById = async (req, res) => {
  try {
    const deletedOwner = await Owner.deleteOne({
      _id: req.params.id,
    });
    if (deletedOwner.deletedCount === 0) {
      return res.status(404).json({ error: 'Owner not found' });
    }
    res.status(200).json({ message: 'Owner deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllOwners,
  getOwnerById,
  createOwner,
  updateOwnerById,
  deleteOwnerById,
};
