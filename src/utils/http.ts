
import { API_BASEURL } from "@/utils/helpers";
import axios from 'axios';

function getToken(){
  return localStorage.getItem('token');
}

/**
 * Axios
 */
const http = axios.create({
  baseURL: API_BASEURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

http.interceptors.request.use(
  async (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization =  `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default http;