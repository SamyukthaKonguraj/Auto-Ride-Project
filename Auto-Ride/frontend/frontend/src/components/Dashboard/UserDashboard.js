import React from "react";
import BookingForm from "../Booking/BookingForm";
import MapView from "../Map/MapView";

const UserDashboard = () => {
  return (
    <div>
      <h2>User Dashboard</h2>
      <BookingForm />
      <MapView />
    </div>
  );
};

export default UserDashboard;
