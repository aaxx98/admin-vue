import axios from "axios";
import { showGlobalMessage } from "../stores/globalMessage";

axios.interceptors.response.use(
  (response) => {
    const message = response?.data?.message;

    if (message) {
      showGlobalMessage(message);
    }

    return response;
  },
  (error) => {
    const message = error?.response?.data?.message;

    if (message) {
      showGlobalMessage(message);
    }

    return Promise.reject(error);
  }
);

export default axios;
