import axios from 'axios';
import * as Constant from '../Constant';

export default class AnnonceController {
	AddAnnonce(data) {
		return axios
			.post(Constant.CREATE_ANNONCE_URL, data)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}

	getAllAnnonce() {
		return axios
			.post(Constant.GETALL_ANNONCE_URL)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}


	deleteAnnonce(id) {
		return axios
			.post(Constant.DELETE_ANNONCE_URL + id)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}

	updatelAnnonce(data, id) {
		return axios
			.post(Constant.UPDATE_ANNONCE_URL + id, data)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}
}
