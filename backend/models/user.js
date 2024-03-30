// user schema
const mongoose = require('mongoose');
require('dotenv').config();

// Define the user schema
const userSchema = new mongoose.Schema(
  {
    email: { type: String, unique: true, sparse: true },
    password: { type: String, required: false },
    fullName: { type: String },
    facebookId: { type: String },
    facebookDisplayName: { type: String },
    facebookEmail: { type: String },

    currentSubscription: {
      subscriptionId: String,
      plan: String,
      billingCycle: String,

      // Other user fields here
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
{
  /*
 currentSubscription: {
      subscriptionId: String,
      plan: String,
      billingCycle: String,

      // Other user fields here
    },

  */
}
