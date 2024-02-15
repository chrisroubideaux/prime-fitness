// instructor schema
const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema(
  {
    id: String,
    title: String,
    instructor: String,
    name: String,
    email: String,
    phone: String,
    bio: String,
    description: [String],
    image: String,
    photo: String,
    cover: String,
    profile: String,
    experience: String,
    days: String,
    time: String,
    level: String,
    group: String,
    memberships: String,
    virtualSession: String,
    chat: String,
    rating: String,
  },

  {
    timestamps: true,
  }
);

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;
