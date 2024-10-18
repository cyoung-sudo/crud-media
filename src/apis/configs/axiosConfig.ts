import axios from "axios";

// Initialize & config axios instance
export const api = axios.create({
  withCredentials: true,
  headers: { "Custom-Language": "en" }
});

export const baseURL = "https://inland-minda-projects2024-c2f044cb.koyeb.app";