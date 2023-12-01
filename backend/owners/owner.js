// schema for owner
const mongoose = require('mongoose');

const ownerSchema = new mongoose.Schema(
  {
    id: String,
    title: String,
    name: String,
    email: String,
    phone: String,
    description: String,
    experience: String,
    bio: String,
    photo: String,
    cover: String,
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields with timestamps
  }
);

const Owner = mongoose.model('Owner', ownerSchema);

module.exports = Owner;
