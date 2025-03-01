import React, { useState } from "react";
import axios from "axios";

const BookingForm = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  const handleBooking = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/bookings", {
        pickup,
        destination,
      });
      alert(`Booking confirmed! Booking ID: ${response.data.id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleBooking}>
      <input
        type="text"
        placeholder="Pickup Location"
        value={pickup}
        onChange={(e) => setPickup(e.target.value)}
      />
      <input
        type="text"
        placeholder="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <button type="submit">Book Auto</button>
    </form>
  );
};

export default BookingForm;
