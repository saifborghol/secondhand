import axios from 'axios';
import AxiosInstance from '../axiosInterceptor';
import * as constant from '../constant';
import React, { Component } from 'react';

class orderController extends Component {
	addOrder(data) {
		try {
			return axios.post(constant.ADD_ORDER_URL, data).then((res) => {
				return res;
			});
		} catch (error) {
			return error;
		}
	}

	updateOrder(id, data) {
		try {
			return axios.put(constant.UPDATE_ORDER_URL + id, data).then((res) => {
				return res;
			});
		} catch (error) {
			return error;
		}
	}

	deleteOrder(id) {
		try {
			return axios.delete(constant.DELETE_ORDER_URL + id).then((res) => {
				return res;
			});
		} catch (error) {
			return error;
		}
	}

	getOrder(id) {
		try {
			return axios.get(constant.GET_ORDER_URL + id).then((res) => {
				return res;
			});
		} catch (error) {
			return error;
		}
	}
}

export default orderController;
