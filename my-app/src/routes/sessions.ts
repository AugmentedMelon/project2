import express from 'express';
import Session from '../models/Sessions'; // Correct model import
import mongoose from 'mongoose';

const router = express.Router();

// Book a session
router.post('/book', async (req, res) => {
  const { userId, matchId, skill, time } = req.body;

  try {
    const session = new Session({ userId, matchId, skill, time });
    await session.save();
    res.status(201).json({ message: 'Session booked successfully', session });
  } catch (err) {
    res.status(500).json({ message: 'Error booking session', error: err.message });
  }
});

// Update a session (e.g., change time or status)
router.put('/update/:sessionId', async (req, res) => {
  const { sessionId } = req.params;  // Get the sessionId from the URL params
  const { status, time } = req.body; // Get the new status and time from the request body

  try {
    const session = await Session.findById(sessionId);
    if (!session) return res.status(404).json({ message: 'Session not found' });

    if (status) session.status = status;
    if (time) session.time = time;

    await session.save();
    res.json({ message: 'Session updated successfully', session });
  } catch (err) {
    res.status(500).json({ message: 'Error updating session', error: err.message });
  }
});

// Cancel a session
router.delete('/cancel/:sessionId', async (req, res) => {
  const { sessionId } = req.params;

  try {
    const session = await Session.findById(sessionId);
    if (!session) return res.status(404).json({ message: 'Session not found' });

    await session.delete();
    res.json({ message: 'Session canceled successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error canceling session', error: err.message });
  }
});

export default router;
