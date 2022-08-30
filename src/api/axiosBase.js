import axios from "axios";
import { baseURL } from "./axiosProperties";

const instance = axios.create({
	baseURL: baseURL,
});

export default instance;
