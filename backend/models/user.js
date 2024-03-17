// users model
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

// Define the user schema
const userSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, sparse: true },
    password: { type: String, required: false },
    fullName: { type: String },
    facebookId: { type: String },
    facebookDisplayName: { type: String },
    facebookEmail: { type: String },
    // google oAuth
    googleId: { type: String },
    googleDisplayName: { type: String },
    googleEmail: { type: String },
    stripeCustomerId: String,
    currentSubscription: {
      subscriptionId: String,
      plan: String,
      billingCycle: String,

      // Other user fields here
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema);
