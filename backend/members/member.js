// membership schema
const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema(
  {
    id: String, // You may keep this if it's a unique identifier for the membership
    stripePriceId: String, // Add the field to store the Stripe Price ID
    stripeSubscriptionId: String, // Existing field for tracking the subscription ID
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
    timestamps: true,
  }
);

const Member = mongoose.model('Member', memberSchema);

module.exports = Member;

{
  /*
const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema(
  {
    id: String,
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
    timestamps: true,
  }
);

const Member = mongoose.model('Member', memberSchema);

module.exports = Member;
*/
}
