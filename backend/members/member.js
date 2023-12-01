// membership schema
const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema(
  {
    id: String,
    // Stripe Subscription ID
    stripeSubscriptionId: String,
    title: String,
    price: String,
    total: String,
    annualFee: String,
    commitment: String,
    description: String,
    image: String,
    photo: String,
    cover: String,
    access: String,
    discounts: String,
    security: String,
    wellness: String,
    wifi: String,
    guests: String,
    session: String,
    training: String,
    tan: String,
    massage: String,
    spa: String,
    rating: Number,
    verified: String,
  },
  {
    timestamps: true, // Add createdAt and updatedAt fields
  }
);

const Member = mongoose.model('Member', memberSchema);

module.exports = Member;
