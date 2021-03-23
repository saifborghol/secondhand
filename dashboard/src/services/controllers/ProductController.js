import axios from 'axios';
import * as Constant from '../Constant';

export default class ProductController {
	AddProduct(data) {
		return axios
			.post(Constant.CREATE_PRODUCT_URL, data)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}

	getAllProduct() {
		return axios
			.post(Constant.GETALL_PRODUCT_URL)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}

	getProductByID(id) {
		return axios
			.post(Constant.GET_PRODUCT_URL + id, data)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}

	deleteProduct(id) {
		return axios
			.post(Constant.DELETE_PRODUCT_URL + id)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}

	deleteAllProduct() {
		return axios
			.post(Constant.DELETEALL_PRODUCT_URL)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}

	updatelProduct(data, id) {
		return axios
			.post(Constant.UPDATE_PRODUCT_URL + id, data)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}
}
