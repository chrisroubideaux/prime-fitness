// membership controller

const Member = require('./member');

// Get a list of all members
const getAllMembers = async (req, res) => {
  try {
    const members = await Member.find();
    res.status(200).json(members);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get details of a single member by ID
const getMemberById = async (req, res) => {
  try {
    const memberId = req.params.id;
    if (!memberId) {
      return res.status(400).json({ error: 'Invalid member ID' });
    }
    const member = await Member.findById(memberId);
    if (!member) {
      return res.status(404).json({ error: 'Member not found' });
    }
    res.status(200).json(member);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Create a new member
const createMember = async (req, res) => {
  try {
    const newMember = new Member(req.body);
    const savedMember = await newMember.save();
    res
      .status(201)
      .json({ message: 'Member created successfully', member: savedMember });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update the details of an existing member by ID
const updateMemberById = async (req, res) => {
  try {
    const updatedMember = await Member.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedMember) {
      return res.status(404).json({ error: 'Member not found' });
    }
    res.status(200).json(updatedMember);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete an existing member by ID
const deleteMemberById = async (req, res) => {
  try {
    const deletedMember = await Member.deleteOne({
      _id: req.params.id,
    });
    if (deletedMember.deletedCount === 0) {
      return res.status(404).json({ error: 'Member not found' });
    }
    res.status(200).json({ message: 'Member deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllMembers,
  getMemberById,
  createMember,
  updateMemberById,
  deleteMemberById,
};
