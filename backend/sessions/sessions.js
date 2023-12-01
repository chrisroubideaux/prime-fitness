// crud operations for sessions
const express = require('express');
const sessionRoutes = express.Router(); // Update route variable name
const Session = require('./session'); // Import the Session model // Update model name

const {
  getAllSessions,
  getSessionById,
  createSession,
  updateSessionById,
  deleteSessionById,
} = require('./sessionController'); // Update controller name

// CREATE a new session
sessionRoutes.post('/', async (req, res) => {
  // Update route name
  try {
    const newSession = new Session(req.body); // Update model name
    const savedSession = await newSession.save(); // Update model name
    res.status(201).json(savedSession);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET all sessions // Update route name
sessionRoutes.get('/', async (req, res) => {
  // Update route name
  try {
    const sessions = await Session.find(); // Update model name
    res.status(200).json(sessions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET a single session by ID // Update route name
sessionRoutes.get('/:id', async (req, res) => {
  // Update route name
  try {
    const sessionId = req.params.id; // Update variable name
    if (!sessionId) {
      return res.status(400).json({ error: 'Invalid session ID' }); // Update error message
    }
    const session = await Session.findById(sessionId); // Update model name
    if (!session) {
      return res.status(404).json({ error: 'Session not found' }); // Update error message
    }
    res.status(200).json(session);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update an existing session by ID // Update route name
sessionRoutes.put('/:id', async (req, res) => {
  // Update route name
  try {
    const updatedSession = await Session.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedSession) {
      return res.status(404).json({ error: 'Session not found' }); // Update error message
    }
    res.status(200).json(updatedSession);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE an existing session by ID // Update route name
sessionRoutes.delete('/:id', async (req, res) => {
  // Update route name
  try {
    const deletedSession = await Session.deleteOne({
      _id: req.params.id,
    });
    if (deletedSession.deletedCount === 0) {
      return res.status(404).json({ error: 'Session not found' }); // Update error message
    }
    res.status(200).json({ message: 'Session deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = sessionRoutes;
