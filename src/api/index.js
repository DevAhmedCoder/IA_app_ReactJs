import axios from "axios";

export const requestPostIa = ({ prompt }) => {
  return axios.post("http://localhost:5554/chat", { prompt });
};
