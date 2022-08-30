import axios from "axios";
import { baseURL } from "./axiosProperties";

const instance = axios.create({
	baseURL: baseURL,
});

instance.interceptors.request.use(config => {

	let token = localStorage.getItem("token");
	if (token !== null) {
		config['headers'] = {
			Authorization: token
		}
	} 

	return config;

});

export default instance;