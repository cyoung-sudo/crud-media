import axios from "axios";

// Initialize & config axios instance
export const api = axios.create({
  withCredentials: true,
  headers: { "Custom-Language": "en" }
});

export const baseURL = "http://localhost:5050";