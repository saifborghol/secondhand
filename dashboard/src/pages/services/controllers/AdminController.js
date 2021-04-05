import axios from 'axios';
import * as Constant from '../Constant';
import AxiosInstance from '../axiosInterceptor'

export default class AdminController {
	login(data) {
		return AxiosInstance
			.post(Constant.LOGIN_ADMIN_URL, data)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}
	logout(data) {
		return AxiosInstance
			.post(Constant.LOGOUT_ADMIN_URL, data)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}
}
