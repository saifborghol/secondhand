import axios from 'axios';
import * as constant from '../constant';

export default class SubCategoryController {
	getAllSubCategory() {
		return axios
			.get(constant.GETALL_SUBCATEGORY_URL)
			.then((res) => {
				return res;
			})
			.catch((err) => {
				return err;
			});
	}
	getSubCategory(title) {
		return axios
			.get(constant.GET_SUBCATEGORY_URL + title)
			.then((res) => {
				return res;
			})
			.catch((err) => {
				return err;
			});
	}
	pullAnnonce(id, data) {
		console.log('data from controler', data);

		return axios
			.put(constant.PULLANNONCESUBCAT_URL + id, data)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}

	pushAnnonce(id, data) {
		return axios
			.put(constant.PUSHANNONCESUBCAT_URL + id, data)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}
}
