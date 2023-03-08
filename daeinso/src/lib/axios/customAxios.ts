import axios from "axios";
import CONFIG from "../../config/config.json";
import { ACCESS_KEY, AHTHORIZATION } from "../../constants/auth/auth.constant";

export const customAxios = axios.create({
  baseURL: `${CONFIG.server}`,
  headers: {
    [AHTHORIZATION]: `${localStorage.getItem(ACCESS_KEY)}`,
  },
});

export default customAxios;
