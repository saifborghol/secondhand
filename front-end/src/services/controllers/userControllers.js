import axios from 'axios';
import AxiosInstance from '../axiosInterceptor';
import * as constant from '../constant';

export default class userControllers {
	createUser(data) {
		try {
			return axios.post(constant.create_user_url, data).then((res) => {
				return res;
			});
		} catch (error) {
			return error;
		}
	}
	getUser(id) {
		return axios
			.get(constant.get_user_url + id)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}
	loginUser(data) {
		try {
			return AxiosInstance.post(constant.login_user_url, data).then((res) => {
				return res;
			});
		} catch (error) {
			return error;
		}
	}
	logoutUser(data) {
		try {
			return AxiosInstance.post(constant.logout_user_url, data).then((res) => {
				return res;
			});
		} catch (error) {
			return error;
		}
	}
	forgotPassword(data) {
		try {
			return axios.post(constant.forgotpwd_user_url, data).then((res) => {
				return res;
			});
		} catch (error) {
			return error;
		}
	}
	resetPassword(data) {
		try {
			return axios.post(constant.resetpwd_user_url, data).then((res) => {
				return res;
			});
		} catch (error) {
			return error;
		}
	}
}
