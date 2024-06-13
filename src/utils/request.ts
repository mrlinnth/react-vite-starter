import axios from "axios";
import { API_BASEURL } from "./helpers";

const request = axios.create({
  baseURL: API_BASEURL 
});

export default request;