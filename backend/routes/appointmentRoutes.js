const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");

// Create a new appointment
router.post("/", async (req, res) => {
  const { userId, astrologerId, date, time, status } = req.body;

  const appointment = new Appointment({
    userId,
    astrologerId,
    date,
    time,
    status
  });

  try {
    const newAppointment = await appointment.save();
    res.status(201).json(newAppointment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all appointments
router.get("/", async (req, res) => {
  try {
    const appointments = await Appointment.find().populate("userId astrologerId");
    res.json(appointments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
