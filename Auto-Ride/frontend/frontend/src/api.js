import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

export const login = (credentials) => axios.post(`${API_BASE_URL}/auth/login`, credentials);
export const register = (data) => axios.post(`${API_BASE_URL}/auth/register`, data);
export const getBookings = () => axios.get(`${API_BASE_URL}/bookings`);
export const createBooking = (data) => axios.post(`${API_BASE_URL}/bookings`, data);
export const updateBookingStatus = (id, status) =>
  axios.put(`${API_BASE_URL}/bookings/${id}`, { status });
export const deleteBooking = (id) => axios.delete(`${API_BASE_URL}/bookings/${id}`);
