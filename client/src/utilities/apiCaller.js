import axios from "axios";
import { api } from "../configs";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};
// headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');

export const publicGet = async (endpoint) => {
  const response = await axios.get(`${api}${endpoint}`, config);
  return response.data;
};

export const publicPost = async (endpoint, body) => {
    console.log(api);
    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
  const response = await axios.post(`${api}${endpoint}`, body, config);
  console.log(response);
  return response.data;
};

export const privateGet = async (endpoint, token) => {
  config.headers.token = `${token}`;
  const response = await axios.get(`${api}${endpoint}`, config);
  return response.data;
};

export const privatePost = async (endpoint, token, body) => {
  config.headers.token = `${token}`;
  const response = await axios.post(`${api}${endpoint}`, body, config);
  return response.data;
};

export const privatePut = async (endpoint, token, body) => {
  config.headers.token = `${token}`;
  const response = await axios.put(`${api}${endpoint}`, body, config);
  return response.data;
};

export const publicPatch = async (endpoint, body) => {
  const response = await axios.patch(`${api}${endpoint}`, body, config);
  return response.data;
};