import axios from "axios";

const API = axios.create({
  baseURL: "https://gamespace-server.vercel.app",
});
export default API;
