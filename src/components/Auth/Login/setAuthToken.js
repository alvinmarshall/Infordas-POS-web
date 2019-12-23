import axios from "axios";
import { BASE_URL } from "../../../app/common/constants/Constants";
const setAuthToken = token => {
  axios.defaults.baseURL = BASE_URL;
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return;
  }
  delete axios.defaults.headers.common["Authorization"];
};

export default setAuthToken;
