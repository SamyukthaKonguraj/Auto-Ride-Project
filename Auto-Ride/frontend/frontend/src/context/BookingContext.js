import React, { createContext, useReducer, useContext } from "react";

const BookingContext = createContext();

const bookingReducer = (state, action) => {
  switch (action.type) {
    case "ADD_BOOKING":
      return [...state, action.payload];
    case "SET_BOOKINGS":
      return action.payload;
    default:
      return state;
  }
};

export const BookingContextProvider = ({ children }) => {
  const [bookings, dispatch] = useReducer(bookingReducer, []);

  return (
    <BookingContext.Provider value={{ bookings, dispatch }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => useContext(BookingContext);
