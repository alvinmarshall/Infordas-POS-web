import axios from "axios";
const setAuthToken = token => {
  axios.defaults.baseURL = "https://protected-reef-45264.herokuapp.com";
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
    return;
  }
  delete axios.defaults.headers.common["Authorization"];
};

export default setAuthToken;
