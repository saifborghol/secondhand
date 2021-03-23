import axios from 'axios';
import * as Constant from '../Constant';

export default class CategoryController {
	AddCategory(data) {
		return axios
			.post(Constant.CREATE_CATEGORY_URL, data)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}

	getAllCategory() {
		return axios
			.get(Constant.GETALL_CATEGORY_URL)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}

	getCategoryByID(id) {
		return axios
			.get(Constant.GET_CATEGORY_URL + id)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}

	deleteCategory(id) {
		return axios
			.delete(Constant.DELETE_CATEGORY_URL + id)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}

	deleteAllCategory() {
		return axios
			.delete(Constant.DELETEALL_CATEGORY_URL)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}

	updateCategory(id, data) {
		return axios
			.put(Constant.UPDATE_CATEGORY_URL + id, data)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}
}
