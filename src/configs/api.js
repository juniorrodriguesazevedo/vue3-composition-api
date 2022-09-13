import axios from "axios";

const api = axios.create({
  baseURL: "https://forthcodeteste.com/api",
  timeout: 4000,
  headers: { "Content-Type": "application/json" },
});

export default api;