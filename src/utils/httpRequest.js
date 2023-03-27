import axios from "axios";

const httpRequest = axios.create({
  //   baseURL: process.env.REACT_APP_API_URL,
  //   baseURL: "127.0.0.1:8080/api/v1",

  baseURL: "https://api-json-server-1c2s.onrender.com/api/",
});

export const get = async (path, options = {}) => {
  const response = await httpRequest.get(path, options);
  return response.data;
};

export default httpRequest;
