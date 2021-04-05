import axios from 'axios';
import * as Constant from '../Constant';
import AxiosInstance from '../axiosInterceptor'


export default class CategoryController {
	AddCategory(data) {
		return AxiosInstance
			.post(Constant.CREATE_CATEGORY_URL, data)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}

	getAllCategory() {
		return AxiosInstance
			.get(Constant.GETALL_CATEGORY_URL)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}

	getCategoryByID(id) {
		return AxiosInstance
			.get(Constant.GET_CATEGORY_URL + id)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}

	deleteCategory(id) {
		return AxiosInstance
			.delete(Constant.DELETE_CATEGORY_URL + id)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}

	deleteAllCategory() {
		return AxiosInstance
			.delete(Constant.DELETEALL_CATEGORY_URL)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}

	updateCategory(id, data) {
		return AxiosInstance
			.put(Constant.UPDATE_CATEGORY_URL + id, data)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}

	pullSubCat(id, data) {
		console.log('data from controler', data);

		return AxiosInstance
			.put(Constant.PULLSUBCAT_URL + id, data)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}

	pushSubCat(id, data) {
		return AxiosInstance
			.put(Constant.PUSHSUBCAT_URL + id, data)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}
}
