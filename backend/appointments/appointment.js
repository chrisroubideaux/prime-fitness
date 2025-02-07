// appointmets model
const mongoose = require('mongoose');
const appointmentSchema = new mongoose.Schema(
  {
    id: String,
    name: String,
    title: String,
    phone: String,
    email: String,
    experience: String,
    photo: String,
    cover: String,
    profile: String,
    times: String,
    appointments: String,
    slot: String,
    slot2: String,
    slot3: String,
    slot4: String,
    slot5: String,
    slot6: String,
    slot7: String,
    days: String,
    npc: String,
    rating: String,
    reviews: String,
    verified: String,
    date: {
      type: Date,
      required: true,
    },
    guide: {
      type: String,
      required: true,
    },
    guideId: {
      type: String,
      required: false,
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Virtual for calculating the day of the week
appointmentSchema.virtual('dayOfWeek').get(function () {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return days[this.date.getDay()];
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
{
  /*
const mongoose = require('mongoose');
const appointmentSchema = new mongoose.Schema(
  {
    id: String,
    name: String,
    title: String,
    phone: String,
    email: String,
    experience: String,
    photo: String,
    cover: String,
    profile: String,
    times: String,
    appointments: String,
    slot: String,
    slot2: String,
    slot3: String,
    slot4: String,
    slot5: String,
    slot6: String,
    slot7: String,
    days: String,
    npc: String,
    rating: String,
    reviews: String,
    verified: String,
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },

    guide: {
      type: String,
      required: true,
    },
    guideId: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;
*/
}
