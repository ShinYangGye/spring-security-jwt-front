import axiosBase from "./axiosBase"
import axiosInterceptor from './axiosInterceptor';

const saveAccountJoin = async (joinObj) => await axiosBase.post('/account/join', joinObj);

const getAccountLogin = async (loginObj) => await axiosBase.post('/account/login', loginObj);

const getAccountProfile = async () => await axiosInterceptor.get('/account/profile');

const getAccountRefreshToken = async () => await axiosInterceptor.get('/account/refresh-token');

export {
	saveAccountJoin,
	getAccountLogin,
	getAccountProfile,
	getAccountRefreshToken,
}