import axios from 'axios';
import * as Constant from '../constant';

export default class SubCategoryController {
	getAllSubCategory() {
		return axios
			.get(Constant.GETALL_SUBCATEGORY_URL)
			.then((res) => {
				return res;
			})
			.catch((err) => {
				return err;
			});
	}
}
