import axios from 'axios';
import * as Constant from '../constant';

export default class CategoryController {
	getAllCategory() {
		return axios
			.get(Constant.GETALL_CATEGORY_URL)
			.then((res) => {
				return res;
			})
			.catch((err) => {
				return err;
			});
	}
}
