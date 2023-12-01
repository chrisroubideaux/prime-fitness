// users model
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
require('dotenv').config(); // Load environment variables
const jwt = require('jsonwebtoken');

// Define the user schema
const userSchema = new mongoose.Schema(
  {
    id: String,
    email: { type: String, unique: true, sparse: true }, // Make it optional
    password: { type: String, required: false }, // Make it optional
    fullName: { type: String },
    facebookId: { type: String }, // Store Facebook user ID
    facebookDisplayName: { type: String }, // Store Facebook display name
    facebookEmail: { type: String }, // Store Facebook email
    // Make it optional
    stripeCustomerId: String, // Store the Stripe Customer ID
    currentSubscription: {
      subscriptionId: String, // ID of the current subscription
      plan: String, // Name or type of the subscription plan
      billingCycle: String, // e.g., "monthly" or "yearly"

      // Other user fields here
    },
  },
  { timestamps: true } // Add timestamps to the schema
);

// Add a pre-save hook to hash the password before saving it to the database
userSchema.pre('save', async function (next) {
  try {
    if (this.isModified('password')) {
      const saltRounds = 10; // Number of salt rounds
      const salt = await bcrypt.genSalt(saltRounds);
      const hashedPassword = await bcrypt.hash(this.password, salt);
      this.password = hashedPassword;
    }
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = mongoose.model('User', userSchema);
