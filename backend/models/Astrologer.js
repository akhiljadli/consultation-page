const mongoose = require("mongoose");

const AstrologerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  expertise: { type: String, required: true },
  availability: { type: Boolean, default: true },
  rating: { type: Number, required: true }
});

module.exports = mongoose.model("Astrologer", AstrologerSchema);
