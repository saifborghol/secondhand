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
<<<<<<< HEAD
			.post(Constant.GETALL_ANNONCE_URL)
=======
			.get(Constant.GETALL_ANNONCE_URL)
>>>>>>> 68c05ed9772cd55293d52256a0581b9b6bc2841b
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}

<<<<<<< HEAD

	deleteAnnonce(id) {
		return axios
			.post(Constant.DELETE_ANNONCE_URL + id)
=======
	deleteAnnonce(id) {
		return axios
			.delete(Constant.DELETE_ANNONCE_URL + id)
>>>>>>> 68c05ed9772cd55293d52256a0581b9b6bc2841b
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}

	updatelAnnonce(data, id) {
		return axios
<<<<<<< HEAD
			.post(Constant.UPDATE_ANNONCE_URL + id, data)
=======
			.put(Constant.UPDATE_ANNONCE_URL + id, data)
>>>>>>> 68c05ed9772cd55293d52256a0581b9b6bc2841b
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}
}
