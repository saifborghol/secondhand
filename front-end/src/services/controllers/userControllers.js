import axios from 'axios';

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
	loginUser(data) {
		try {
			return axios.post(constant.login_user_url, data).then((res) => {
				return res;
			});
		} catch (error) {
			return error;
		}
	}
}
