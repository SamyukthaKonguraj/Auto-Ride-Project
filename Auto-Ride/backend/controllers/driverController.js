const Driver = require("../models/Driver");

const getNearestDriver = async (location) => {
  const drivers = await Driver.find({ available: true });
  // Logic to find the nearest driver.
};

module.exports = { getNearestDriver };
