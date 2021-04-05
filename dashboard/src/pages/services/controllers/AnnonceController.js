import axios from 'axios';
import * as Constant from '../Constant';
import AxiosInstance from '../axiosInterceptor'


export default class AnnonceController {
	AddAnnonce(data) {
		return AxiosInstance
			.post(Constant.CREATE_ANNONCE_URL, data)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}

	getAllAnnonce() {
		return AxiosInstance
			.get(Constant.GETALL_ANNONCE_URL)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}

	deleteAnnonce(id) {
		return AxiosInstance
			.delete(Constant.DELETE_ANNONCE_URL + id)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}

	updatelAnnonce(data, id) {
		return AxiosInstance
			.put(Constant.UPDATE_ANNONCE_URL + id, data)
			.then(res => {
				return res;
			})
			.catch(err => {
				return err;
			});
	}
}
