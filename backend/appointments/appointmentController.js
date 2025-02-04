// appointment Controller
const Appointment = require('./appointment');
const jwt = require('jsonwebtoken');
const User = require('../users/userModel');
/// Create appointemnts

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

// Get all appointments
const getAllAppointments = async (req, res) => {
  try {
    // Fetch all appointments from the database
    const appointments = await Appointment.find();

    // Return success response with the appointments
    return res.status(200).json({
      message: 'All appointments retrieved successfully',
      appointments, // Send the appointments data
    });
  } catch (error) {
    console.error('Error retrieving appointments:', error);
    return res.status(500).json({
      message: 'Internal server error while retrieving appointments',
    });
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
