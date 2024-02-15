// instructor Controller
const Session = require('./session');

// Create a new session
const createSession = async (req, res) => {
  try {
    const newSession = new Session(req.body);
    const savedSession = await newSession.save();
    res.status(201).json(savedSession);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all sessions
const getAllSessions = async (req, res) => {
  try {
    const sessions = await Session.find();
    res.status(200).json(sessions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single session by ID
const getSessionById = async (req, res) => {
  try {
    const sessionId = req.params.id;
    if (!sessionId) {
      return res.status(400).json({ error: 'Invalid session ID' });
    }
    const session = await Session.findById(sessionId);
    if (!session) {
      return res.status(404).json({ error: 'Session not found' });
    }
    res.status(200).json(session);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a session by ID
const updateSessionById = async (req, res) => {
  try {
    const updatedSession = await Session.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedSession) {
      return res.status(404).json({ error: 'Session not found' });
    }
    res.status(200).json(updatedSession);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a session by ID
const deleteSessionById = async (req, res) => {
  try {
    const deletedSession = await Session.deleteOne({
      _id: req.params.id,
    });
    if (deletedSession.deletedCount === 0) {
      return res.status(404).json({ error: 'Session not found' });
    }
    res.status(200).json({ message: 'Session deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createSession,
  getAllSessions,
  getSessionById,
  updateSessionById,
  deleteSessionById,
};
