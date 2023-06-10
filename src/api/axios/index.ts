import axios from "axios";

console.log("test env from client", process.env.NODE_ENV);
export const httpClient = axios.create({
  baseURL: "http://localhost:5000",
});
