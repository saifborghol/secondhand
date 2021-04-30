import axios from 'axios';
import AxiosInstance from '../axiosInterceptor';
import * as constant from '../constant';
import React, { Component } from 'react';

class AnnonceController extends Component {
	addAnnonce(data) {
		try {
			return axios.post(constant.ADD_ANNONCE_URL, data).then((res) => {
				return res;
			});
		} catch (error) {
			return error;
		}
	}

	updateAnnonce(id, data) {
		try {
			return axios.put(constant.UPDATE_ANNONCE_URL + id, data).then((res) => {
				return res;
			});
		} catch (error) {
			return error;
		}
	}

	deleteAnnonce(id) {
		try {
			return axios.delete(constant.DELETE_ANNONCE_URL + id).then((res) => {
				return res;
			});
		} catch (error) {
			return error;
		}
	}

	getAnnonce(id) {
		try {
			return axios.get(constant.GET_ANNONCE_URL + id).then((res) => {
				return res;
			});
		} catch (error) {
			return error;
		}
	}

	getAll() {
		try {
			return axios.get(constant.GETALL_ANNONCE_URL).then((res) => {
				return res;
			});
		} catch (error) {
			return error;
		}
	}

	
}

export default AnnonceController;
