// user schema
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    googleId: String,
    name: String,
    photo: String,
    email: String,
    password: String,
    facebookId: String,
    facebookDisplayName: String,
    facebookEmail: String,
    phone: String,
    address: String,
    city: String,
    state: String,
    memberId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Membership',
      default: null,
    },
    stripeCustomerId: { type: String, default: null },
    stripeSubscriptionId: { type: String, default: null },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);
module.exports = User;

{
  /*
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    googleId: String,
    name: String,
    photo: String,
    email: String,
    password: String,
    facebookId: String,
    facebookDisplayName: String,
    facebookEmail: String,
    phone: String,
    address: String,
    city: String,
    state: String,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);

module.exports = User;
*/
}
