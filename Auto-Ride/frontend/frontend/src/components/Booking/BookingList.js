import React, { useEffect, useState } from "react";
import axios from "axios";

const BookingList = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/bookings");
        setBookings(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div>
      <h2>Booking List</h2>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            {booking.pickup} to {booking.destination} - {booking.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingList;
