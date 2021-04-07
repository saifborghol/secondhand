import axios from 'axios';
const baseURL = 'http://localhost:4000/user';
let AxiosInstance = axios.create({
	baseURL: baseURL,
	timeout: 100000,
	headers: {
		'x-access-token': localStorage.getItem('token')
			? localStorage.getItem('token')
			: null,
		'Content-Type': 'application/json',
		accept: 'application/json',
	},
});

AxiosInstance.interceptors.response.use(
	(response) => {
		console.log('INTERCEPTOR_RESPONSE', response);

		return response;
	},
	(error) => {
		console.log('INTERCEPTOR', error);

		const originalRequest = error.config;

		if (!error.response) {
			console.log('iffff');
			return Promise.reject('Network Error');
		} else if (error.response.status === 401 && !originalRequest._retry) {
			console.log('else iff');

			// let tokenProvider = new TokenController()
			const refresh = localStorage.getItem('refreshToken');
			const id = localStorage.getItem('userId');
			console.log('ref data', refresh, id);

			if (localStorage.getItem('token')) {
				return AxiosInstance.post('/refresh', { id: id, refreshToken: refresh })
					.then((token) => {
						console.log('toooken', token);
						/*console.log("error INTERCEPTOR", AxiosInstance.defaults.headers.common) */
						AxiosInstance.defaults.headers.common['x-access-token'] =
							token.data.accesstoken;
						originalRequest.headers['x-access-token'] = token.data.accesstoken;
						return axios(originalRequest);
					})
					.catch((err) => err);
			}
		} else {
			return error.response;
		}
	}
);

export default AxiosInstance;
