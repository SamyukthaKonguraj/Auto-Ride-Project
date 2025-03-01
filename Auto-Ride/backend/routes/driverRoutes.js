const express = require("express");
const { getNearestDriver } = require("../controllers/driverController");
const router = express.Router();

router.get("/nearest", getNearestDriver);

module.exports = router;
