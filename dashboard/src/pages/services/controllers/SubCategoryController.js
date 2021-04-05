import axios from 'axios';
import * as Constant from '../Constant';
import AxiosInstance from '../axiosInterceptor'


export default class SubCategoryController {
	AddSubCategory(data) {
		return AxiosInstance
			.post(Constant.CREATE_SUBCATEGORY_URL, data)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}

	getAllSubCategory() {
		return AxiosInstance
			.get(Constant.GETALL_SUBCATEGORY_URL)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}

	getSubCategoryByID(id) {
		return AxiosInstance
			.get(Constant.GET_SUBCATEGORY_URL + id)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}

	deleteSubCategory(id) {
		return AxiosInstance
			.delete(Constant.DELETE_SUBCATEGORY_URL + id)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}

	deleteAllSubCategory() {
		return AxiosInstance
			.delete(Constant.DELETEALL_SUBCATEGORY_URL)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}

	updateSubCategory(id, data) {
		return AxiosInstance
			.put(Constant.UPDATE_SUBCATEGORY_URL + id, data)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}
}
