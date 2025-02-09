// session routes
const express = require('express');
const sessionRoutes = express.Router();

const {
  createSession,
  getAllSessions,
  getSessionById,
  updateSessionById,
  deleteSessionById,
} = require('./sessionController');

sessionRoutes.post('/', createSession);
sessionRoutes.get('/', getAllSessions);
sessionRoutes.get('/:id', getSessionById);
sessionRoutes.put('/:id', updateSessionById);
sessionRoutes.delete('/:id', deleteSessionById);

module.exports = sessionRoutes;
{
  /*
const express = require('express');
const sessionRoutes = express.Router();


const {
  getAllSessions,
  getSessionById,
  createSession,
  updateSessionById,
  deleteSessionById,
} = require('./sessionController');

// CREATE a new session
sessionRoutes.post('/', async (req, res) => {
  try {
    const newSession = new Session(req.body);
    const savedSession = await newSession.save();
    res.status(201).json(savedSession);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET all sessions // Update route name
sessionRoutes.get('/', async (req, res) => {
  try {
    const sessions = await Session.find();
    res.status(200).json(sessions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET a single session by ID // Update route name
sessionRoutes.get('/:id', async (req, res) => {
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
});

// Update an existing session by ID // Update route name
sessionRoutes.put('/:id', async (req, res) => {
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
});

// DELETE an existing session by ID // Update route name
sessionRoutes.delete('/:id', async (req, res) => {
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
});

module.exports = sessionRoutes;

*/
}
