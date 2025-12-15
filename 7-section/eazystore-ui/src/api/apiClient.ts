import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // Use environment variable for base URL
  timeout: 10000, // 10 seconds timeout
});
