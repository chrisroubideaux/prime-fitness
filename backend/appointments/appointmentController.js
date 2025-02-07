// appointment Controller
const Appointment = require('./appointment');
const jwt = require('jsonwebtoken');
const User = require('../users/userModel');

// Create a new appointment

const createAppointment = async (req, res) => {
  const {
    name,
    title,
    phone,
    email,
    experience,
    photo,
    cover,
    profile,
    times,
    slot,
    slot2,
    slot3,
    slot4,
    slot5,
    slot6,
    slot7,
    days,
    npc,
    rating,
    reviews,
    guide,
    userId,
    guideId,
  } = req.body;

  try {
    if (!name || !phone || !email || !guide || !userId) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const existingAppointment = await Appointment.findOne({
      guide,
      slot,
      isActive: true,
    });
    if (existingAppointment) {
      return res.status(400).json({
        message: 'The selected slot is already taken by another user',
      });
    }

    // 4. Create the new appointment
    const newAppointment = new Appointment({
      name,
      title,
      phone,
      email,
      experience,
      photo,
      cover,
      profile,
      times,
      slot,
      slot2,
      slot3,
      slot4,
      slot5,
      slot6,
      slot7,
      days,
      npc,
      rating,
      reviews,
      userId,
      guide,
      guideId,
      isActive: true,
    });

    await newAppointment.save();

    return res.status(201).json({
      message: 'Appointment created successfully',
      appointment: newAppointment,
    });
  } catch (error) {
    console.error('Error creating appointment:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

{
  /*
const createAppointment = async (req, res) => {
  try {
    const { guide, date, slot, userId } = req.body;

    // Validate required fields
    if (!guide || !date || !slot || !userId) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    if (typeof guide !== 'string') {
      return res.status(400).json({ message: 'Guide must be a string' });
    }

    if (isNaN(new Date(date).getTime())) {
      return res.status(400).json({ message: 'Invalid date format' });
    }

    // Create the new appointment
    const newAppointment = new Appointment({
      guide,
      date,
      slot,
      userId,
    });

    const savedAppointment = await newAppointment.save();

    // Populate related fields
    const populatedAppointment = await Appointment.findById(
      savedAppointment._id
    ).populate('userId', 'name phone');

    res.status(201).json({
      message: 'Appointment created successfully',
      appointment: populatedAppointment,
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      console.error('Validation Error:', err.errors);
      return res
        .status(400)
        .json({ error: 'Validation error', details: err.errors });
    }
    console.error('Error in createAppointment:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
*/
}

// Get all appointments
{
  /*
const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();

    return res.status(200).json({
      message: 'All appointments retrieved successfully',
      appointments,
    });
  } catch (error) {
    console.error('Error retrieving appointments:', error);
    return res.status(500).json({
      message: 'Internal server error while retrieving appointments',
    });
  }
};
*/
}

const getAllAppointments = async (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Authentication token is missing' });
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Authentication token is missing' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Token Verified, User ID:', decoded._id);

    const appointments = await Appointment.find();

    populate('userId', 'name phone');

    const formattedAppointments = appointments.map((appointment) => {
      const date = new Date(appointment.date);
      const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      const formattedTime = date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
      });

      return {
        _id: appointment._id,
        name: appointment.user,
        date: formattedDate,
        time: formattedTime,
        guide: appointment.guide,

        user: appointment.userId,
        slot: appointment.slot,
        createdAt: appointment.createdAt,
        updatedAt: appointment.updatedAt,
        dayOfWeek: appointment.dayOfWeek,
      };
    });

    res.status(200).json({
      message: 'Appointments fetched successfully',
      appointments: formattedAppointments,
    });
  } catch (err) {
    console.error('Error:', err.message);
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
};
// Get an appointment by ID
const getAppointmentById = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);

    if (!appointment) {
      return res.status(404).json({ error: 'Apartment not found' });
    }

    res.status(200).json(appointment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update an existing appointment
const updateAppointmentById = async (req, res) => {
  try {
    const { date, slot } = req.body;

    // Ensure the date is in the future
    if (new Date(date) <= new Date()) {
      return res
        .status(400)
        .json({ error: 'Cannot reschedule to a past date' });
    }

    const updatedAppointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { date, slot, isActive: true },
      { new: true }
    );

    if (!updatedAppointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    res.status(200).json({
      message: 'Appointment updated successfully',
      appointment: updatedAppointment,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// Fetch available slots for a given date and apartmentId
const fetchAvailableSlots = async (req, res) => {
  try {
    const { date, apartmentId } = req.query;

    if (!date || !apartmentId) {
      return res
        .status(400)
        .json({ message: 'Date and apartmentId are required' });
    }

    const parsedDate = new Date(date);
    if (isNaN(parsedDate.getTime())) {
      return res.status(400).json({ message: 'Invalid date format' });
    }

    const appointments = await Appointment.find({
      date: {
        $gte: parsedDate.setHours(0, 0, 0, 0),
        $lt: parsedDate.setHours(23, 59, 59, 999),
      },
      apartmentId: apartmentId,
      isActive: true,
    });

    const bookedSlots = appointments.map((appointment) => appointment.slot);

    const allSlots = [
      'slot',
      'slot2',
      'slot3',
      'slot4',
      'slot5',
      'slot6',
      'slot7',
    ];

    // Filter out booked slots from all available slots
    const availableSlots = allSlots.filter(
      (slot) => !bookedSlots.includes(slot)
    );

    res.status(200).json({
      message: 'Available slots fetched successfully',
      slots: availableSlots,
    });
  } catch (err) {
    console.error('Error fetching available slots:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Delete an appointment by ID
const deleteAppointmentById = async (req, res) => {
  try {
    const deletedAppointment = await Appointment.findByIdAndRemove(
      req.params.id
    );
    if (!deletedAppointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    res.status(204).json({ message: 'Appointment deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createAppointment,
  getAllAppointments,
  getAppointmentById,
  updateAppointmentById,
  deleteAppointmentById,
  fetchAvailableSlots,
};
