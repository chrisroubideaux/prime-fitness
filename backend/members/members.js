// member routes
const express = require('express');
const memberRoutes = express.Router();

const {
  createMember,
  getAllMembers,
  getMemberById,
  updateMemberById,
  deleteMemberById,
} = require('./memberController');

memberRoutes.post('/', createMember);
memberRoutes.get('/', getAllMembers);
memberRoutes.get('/:id', getMemberById);
memberRoutes.put('/:id', updateMemberById);
memberRoutes.delete('/:id', deleteMemberById);

module.exports = memberRoutes;

{
  /*
const express = require('express');
const memberRoutes = express.Router();
const Member = require('./member');

const {
  getAllMembers,
  getMemberById,
  createMember,
  updateMemberById,
  deleteMemberById,
} = require('./memberController');

// Create a new member
memberRoutes.post('/', async (req, res) => {
  try {
    const newMember = new Member(req.body);
    const savedMember = await newMember.save();
    res.status(201).json(savedMember);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a list of all members
memberRoutes.get('/', async (req, res) => {
  try {
    const members = await Member.find();
    res.status(200).json(members);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get details of a single member by ID
memberRoutes.get('/:id', async (req, res) => {
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
});

// Update the details of an existing member by ID
memberRoutes.put('/:id', async (req, res) => {
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
});

// Delete an existing member by ID
memberRoutes.delete('/:id', async (req, res) => {
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
});

module.exports = memberRoutes;
*/
}
