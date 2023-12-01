// crud operations for stripe
const express = require('express');
const stripeRoutes = express.Router();
const {
  createMembership,
  getMembershipById,
  updateMembership,
  deleteMembership,
} = require('../memberships/membershipController');

// Create a new membership
stripeRoutes.post('/memberships', async (req, res) => {
  const { name, description } = req.body;
  const result = await createMembership(name, description);

  if (result.success) {
    res.status(201).json(result);
  } else {
    res.status(400).json(result);
  }
});

// Retrieve a membership by ID
stripeRoutes.get('/memberships/:membershipId', async (req, res) => {
  const { membershipId } = req.params;
  const result = await getMembershipById(membershipId);

  if (result.success) {
    res.status(200).json(result);
  } else {
    res.status(404).json(result);
  }
});

// Update a membership
stripeRoutes.put('/memberships/:membershipId', async (req, res) => {
  const { membershipId } = req.params;
  const updates = req.body;
  const result = await updateMembership(membershipId, updates);

  if (result.success) {
    res.status(200).json(result);
  } else {
    res.status(400).json(result);
  }
});

// Delete a membership
stripeRoutes.delete('/memberships/:membershipId', async (req, res) => {
  const { membershipId } = req.params;
  const result = await deleteMembership(membershipId);

  if (result.success) {
    res.status(204).json(result);
  } else {
    res.status(400).json(result);
  }
});

module.exports = stripeRoutes;
