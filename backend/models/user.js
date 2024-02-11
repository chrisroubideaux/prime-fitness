// users model
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables
const jwt = require('jsonwebtoken');

// Define the user schema
const userSchema = new mongoose.Schema(
  {
    id: String,
    email: { type: String, unique: true, sparse: true },
    password: { type: String, required: false },
    fullName: { type: String },
    facebookId: { type: String },
    facebookDisplayName: { type: String },
    facebookEmail: { type: String },
    // Make it optional
    stripeCustomerId: String,
    currentSubscription: {
      subscriptionId: String,
      plan: String,
      billingCycle: String,

      // Other user fields here
    },
  },
  { timestamps: true } // Add timestamps to the schema
);

// Add a pre-save hook to hash the password before saving it to the database
{
  /*
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
*/
}
module.exports = mongoose.model('User', userSchema);
