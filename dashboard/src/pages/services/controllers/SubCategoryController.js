import axios from 'axios';
import * as Constant from '../Constant';

export default class SubCategoryController {
	AddSubCategory(data) {
		return axios
			.post(Constant.CREATE_SUBCATEGORY_URL, data)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}

	getAllSubCategory() {
		return axios
			.get(Constant.GETALL_SUBCATEGORY_URL)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}

	getSubCategoryByID(id) {
		return axios
			.get(Constant.GET_SUBCATEGORY_URL + id)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}

	deleteSubCategory(id) {
		return axios
			.delete(Constant.DELETE_SUBCATEGORY_URL + id)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}

	deleteAllSubCategory() {
		return axios
			.delete(Constant.DELETEALL_SUBCATEGORY_URL)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}

	updateSubCategory(id, data) {
		return axios
			.put(Constant.UPDATE_SUBCATEGORY_URL + id, data)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}
}
