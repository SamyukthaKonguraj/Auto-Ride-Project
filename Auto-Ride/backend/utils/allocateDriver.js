const Driver = require("../models/Driver");

const allocateDriver = async (pickup) => {
  const drivers = await Driver.find({ available: true });
  // Basic distance calculation and allocation logic.
  return drivers[0]; // Simplified: Allocate first available driver.
};

module.exports = allocateDriver;
