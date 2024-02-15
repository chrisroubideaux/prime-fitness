// stripe membership controller
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Membership = require('../models/membership');

// Create a new membership
const createMembership = async (name, description) => {
  try {
    const product = await stripe.products.create({
      name,
      description,
    });

    const price = await stripe.prices.create({
      product: product.id,
      unit_amount: 1000,
      currency: 'usd',
    });

    const newMembership = new Membership({
      name,
      description,
      priceId: price.id,
      productId: product.id,
    });

    await newMembership.save();

    return { success: true, data: newMembership };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Retrieve a membership by ID
const getMembershipById = async (membershipId) => {
  try {
    const membership = await Membership.findById(membershipId);

    if (!membership) {
      return { success: false, error: 'Membership not found' };
    }

    return { success: true, data: membership };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Update a membership
const updateMembership = async (membershipId, updates) => {
  try {
    const membership = await Membership.findById(membershipId);

    if (!membership) {
      return { success: false, error: 'Membership not found' };
    }

    membership.name = updates.name || membership.name;
    membership.description = updates.description || membership.description;

    await membership.save();

    return { success: true, data: membership };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

// Delete a membership
const deleteMembership = async (membershipId) => {
  try {
    const membership = await Membership.findById(membershipId);

    if (!membership) {
      return { success: false, error: 'Membership not found' };
    }

    await stripe.products.del(membership.productId);
    await stripe.prices.del(membership.priceId);

    await membership.remove();

    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

module.exports = {
  createMembership,
  getMembershipById,
  updateMembership,
  deleteMembership,
};
