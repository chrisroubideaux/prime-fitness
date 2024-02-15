// schema for guide
const mongoose = require('mongoose');

const guideSchema = new mongoose.Schema(
  {
    id: String,
    title: String,
    name: String,
    bio: String,
    email: String,
    photo: String,
    cover: String,
    profile: String,
    phone: String,
    experience: String,
    wellness: String,
    times: String,
    appointments: String,
    slot: String,
    slot2: String,
    slot3: String,
    slot4: String,
    days: String,
    npc: String,
    rating: Number,
    verified: String,
  },
  {
    timestamps: true,
  }
);

const Guide = mongoose.model('Guide', guideSchema);

module.exports = Guide;
