const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  astrologerId: { type: mongoose.Schema.Types.ObjectId, ref: "Astrologer", required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  status: { type: String, default: "Pending" }
});

module.exports = mongoose.model("Appointment", AppointmentSchema);
