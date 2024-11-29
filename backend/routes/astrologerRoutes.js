const express = require("express");
const router = express.Router();
const Astrologer = require("../models/Astrologer");

// Get all astrologers
router.get("/", async (req, res) => {
  try {
    const astrologers = await Astrologer.find();
    res.json(astrologers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add new astrologer
router.post("/", async (req, res) => {
  const { name, expertise, experience, rate } = req.body;

  const astrologer = new Astrologer({ name, expertise, experience, rate });
  try {
    const newAstrologer = await astrologer.save();
    res.status(201).json(newAstrologer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
