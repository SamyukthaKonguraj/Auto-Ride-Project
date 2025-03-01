const twilio = require("twilio");
const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

const sendSMS = (to, message) => {
  client.messages.create({ body: message, to, from: process.env.TWILIO_PHONE_NUMBER });
};

module.exports = sendSMS;
