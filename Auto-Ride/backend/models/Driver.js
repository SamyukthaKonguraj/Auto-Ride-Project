const mongoose = require("mongoose");

const DriverSchema = new mongoose.Schema({
  name: String,
  location: {
    lat: Number,
    lng: Number,
  },
  available: { type: Boolean, default: true },
  attendance: [{ date: String, status: Boolean }],
});

module.exports = mongoose.model("Driver", DriverSchema);
