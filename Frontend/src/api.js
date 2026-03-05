import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.BACKEND_url,
});

export default API;
