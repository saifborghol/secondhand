import axios from 'axios';
import * as Constant from '../Constant';

export default class AdminController {
	login(data) {
		return axios
			.post(Constant.LOGIN_ADMIN_URL, data)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}
}
