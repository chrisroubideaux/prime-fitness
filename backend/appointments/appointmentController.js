// appointment Controller

const Appointment = require('./appointment');
const jwt = require('jsonwebtoken');
{
  /*
const createAppointment = async (req, res) => {
  try {
    const { agent, date, slot, apartmentId, userId } = req.body;

    // Validate required fields
    if (!agent || !date || !slot || !apartmentId || !userId) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // Create the new appointment
    const newAppointment = new Appointment({
      agent,
      date,
      slot,
      apartmentId,
      userId,
    });

    // Save the appointment to the database
    const savedAppointment = await newAppointment.save();

    // Populate related fields
    const populatedAppointment = await savedAppointment.populate([
      { path: 'apartmentId', select: 'name photo location' },
      { path: 'userId', select: 'name phone location' },
    ]);

    // Return the populated appointment in the response
    res.status(201).json({
      message: 'Appointment created successfully',
      appointment: populatedAppointment,
    });
  } catch (err) {
    console.error('Error in createAppointment:', err);
    res.status(500).json({ error: err.message });
  }
};
*/
}
/// Create appointemnts

const createAppointment = async (req, res) => {
  try {
    const { agent, date, slot, apartmentId, homeId, commercialId, userId } =
      req.body;

    // Validate required fields
    if (!agent || !date || !slot || !userId) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    if (!apartmentId && !homeId && !commercialId) {
      return res.status(400).json({
        message: 'Either apartmentId, homeId, or commercialId is required',
      });
    }

    if (typeof agent !== 'string') {
      return res.status(400).json({ message: 'Agent must be a string' });
    }

    if (isNaN(new Date(date).getTime())) {
      return res.status(400).json({ message: 'Invalid date format' });
    }

    // Create the new appointment
    const newAppointment = new Appointment({
      agent,
      date,
      slot,
      apartmentId: apartmentId || null,
      homeId: homeId || null,
      commercialId: commercialId || null,
      userId,
    });

    const savedAppointment = await newAppointment.save();

    // Populate related fields
    const populatedAppointment = await Appointment.findById(
      savedAppointment._id
    )
      .populate('apartmentId', 'name photo location')
      .populate('homeId', 'name photo location')
      .populate('commercialId', 'name photo location')
      .populate('userId', 'name phone');

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

/// Fetch all appoinemnts

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

    const appointments = await Appointment.find()
      .populate('apartmentId', 'name location photo')
      .populate('homeId', 'name location photo')
      .populate('commercialId', 'name location photo')
      .populate('userId', 'name phone address');

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

      const isHomeAppointment =
        appointment.homeId &&
        !appointment.apartmentId &&
        !appointment.commercialId;
      const isCommercialAppointment =
        appointment.commercialId &&
        !appointment.apartmentId &&
        !appointment.homeId;

      return {
        _id: appointment._id,
        name: appointment.agent,
        date: formattedDate,
        time: formattedTime,
        home: isHomeAppointment ? appointment.homeId : undefined,
        apartment:
          !isHomeAppointment && !isCommercialAppointment
            ? appointment.apartmentId
            : undefined,
        commercial: isCommercialAppointment
          ? appointment.commercialId
          : undefined,
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

///

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

// Update an appointment by ID
{
  /*
const updateAppointmentById = async (req, res) => {
  try {
    const { userId, apartmentId } = req.body;

    await Appointment.updateMany(
      { userId, apartmentId, isActive: true },
      { isActive: false }
    );

    const updatedAppointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { ...req.body, isActive: true },
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
*/
}

//
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
