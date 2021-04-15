import axios from 'axios';
import AxiosInstance from '../axiosInterceptor';
import * as constant from '../constant';
import React, { Component } from 'react';

class componentName extends Component {

    getAnnonce (data){
        try {
			return axios.get(constant.GET_ANNONCE_URL, data).then((res) => {
				return res;
				
			});
		} catch (error) {
			return error;
		}
    }

    getAll (data){
        try {
			return axios.get(constant.GETALL_ANNONCE_URL, data).then((res) => {
				return res;
			});
		} catch (error) {
			return error;
		}
    }

}

export default componentName;