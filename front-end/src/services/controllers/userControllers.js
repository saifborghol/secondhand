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

	updateUser(id, data) {
		return axios
			.post(constant.update_user_url + id, data)
			.then((res) => {
				return res;
			})
			.catch((err) => {
				return err;
			});
	}
	
	verifTel(data) {
		return axios
			.post(constant.verifTel_user_url,  data)
			.then((res) => {
				return res;
			})
			.catch((err) => {
				return err;
			});
	}

	updateUserPass(id, data) {
		return axios
			.post(constant.update_userpass_url + id, data)
			.then((res) => {
				return res;
			})
			.catch((err) => {
				return err;
			});
	}

	updateUserImage(id, data) {
		return axios
			.post(constant.update_userimage_url + id, data)
			.then((res) => {
				return res;
			})
			.catch((err) => {
				return err;
			});
	}

	getUser(id) {
		return axios
			.get(constant.get_user_url + id)
			.then((res) => {
				return res;
			})
			.catch((err) => {
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

	pullAnnonce(id, data) {
		console.log('data from controler', data);

		return axios
			.put(constant.PULLANNONCE_URL + id, data)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}

	pushAnnonce(id, data) {
		return axios
			.put(constant.PUSHANNONCE_URL + id, data)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}
	pushOrder(id, data) {
		return axios
			.put(constant.PUSHORDER_URL + id, data)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}
}
