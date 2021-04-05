import axios from 'axios';
import * as Constant from '../Constant';
import AxiosInstance from '../axiosInterceptor';

export default class UserController {
	addUser(data) {
		return axios
			.post(Constant.CREATE_USER_URL, data)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}

	getAllUser() {
		return AxiosInstance.get(Constant.GETALL_USER_URL)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}

	getUserByID(id) {
		return axios
			.get(Constant.GET_USER_URL + id)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}

	deleteUser(id) {
		return axios
			.delete(Constant.DELETE_USER_URL + id)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}

	deleteAllUser() {
		return axios
			.delete(Constant.DELETEALL_USER_URL)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}

	updateUser(id, data) {
		return axios
			.post(Constant.UPDATE_USER_URL + id, data)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}

	login(data) {
		return axios
			.post(Constant.LOGIN_USER_URL, data)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}

	logout(data) {
		return axios
			.post(Constant.LOGOUT_USER_URL, data)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}

	refresh(data) {
		return axios
			.post(Constant.REFRESH_USER_URL, data)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}
}
