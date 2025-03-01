const Booking = require("../models/Booking");
const allocateDriver = require("../utils/allocateDriver");
const sendSMS = require("../utils/smsService");

const createBooking = async (req, res) => {
  const { userId, pickup, destination } = req.body;
  try {
    const driver = await allocateDriver(pickup);
    if (!driver) return res.status(400).json({ message: "No available drivers" });

    const booking = new Booking({ user: userId, driver: driver._id, pickup, destination });
    await booking.save();

    driver.available = false;
    await driver.save();

    sendSMS("UserPhoneNumber", `Your booking is confirmed. Driver: ${driver.name}`);
    res.json({ bookingId: booking._id });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createBooking };
