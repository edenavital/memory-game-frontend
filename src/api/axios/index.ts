import axios from "axios";

export const httpClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// process.env.NODE_ENV === "production"
//   ? "https://memory-game-backend-3sw7.onrender.com"
//   : "http://localhost:5000",
