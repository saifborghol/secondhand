import React, { Component } from 'react';

import {Link} from 'react-router-dom'

import Breadcrumb from '../common/breadcrumb';

import UserController from '../../services/controllers/userControllers';

class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			error: {},
		};
		this.UserController = new UserController();
	}

	validate = () => {
		let isError = false;
		const errors = {
			emailErr: '',
			passwordErr: '',
		};

		const regex3 = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
		if (this.state.email === '' || !regex3.test(this.state.email)) {
			isError = true;
			errors.emailErr = 'Veuillez vérifier votre email';
		}

		const regex2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{7,14}$/
		;
		if (this.state.password === '' || !regex2.test(this.state.password)) {
			isError = true;
			errors.passwordErr = 'Veuillez vérifier votre mot de passe';
		}
		this.setState({
			error: errors,
		});
		return isError;
	};

	handleSubmit = () => {
		try {
			const err = this.validate();

			const Data = {
				email: this.state.email,
				password: this.state.password,
			};
			if (!err) {
				this.UserController.loginUser(Data).then((res) => {
					console.log('ressssss', res);
					if (res.data.status === 'Success') {
						localStorage.setItem('userId', res.data.data.user._id);
					localStorage.setItem('token', res.data.data.token);
					localStorage.setItem(
						'refreshToken',
						res.data.data.refreshtoken,
					);
						this.props.history.push('/');
						
					} else if (res.data.status === 401) {
						this.setState({
							error: {
								...this.state.error,
								passwordErr: 'mot de passe ou adresse mail incorrecte',
							},
						});
					}
				});
			}
		} catch (error) {
			console.log('il y a un problème', error);
			return error;
		}
	};

	render() {
		return (
			<div>
				<Breadcrumb title={'Login'} />

				{/*Login section*/}
				<section className="login-page section-b-space">
					<div className="container">
						<div className="row">
							<div className="col-lg-6">
								<h3>Login</h3>
								<div className="theme-card">
									<form className="theme-form">
										<div className="form-group">
											<label htmlFor="email">Email</label>
											<input
												type="text"
												className="form-control"
												id="email"
												placeholder="Email"
												required=""
												onChange={(e) => {
													this.setState({ email: e.target.value });
												}}
											/>
											<label
												style={{
													paddingBottom: '20px',
													fontSize: 12,
													color: 'red',
												}}
											>
												{this.state.error.emailErr}
											</label>
										</div>
										<div className="form-group">
											<label htmlFor="review">Mot de passe</label>
											<input
												type="password"
												className="form-control"
												id="review"
												placeholder="Mot de passe"
												required=""
												onChange={(e) => {
													this.setState({ password: e.target.value });
												}}
											/>
											<label
												style={{
													paddingBottom: '20px',
													fontSize: 12,
													color: 'red',
												}}
											>
												{this.state.error.passwordErr}
											</label>
										</div>
										<a
											className="btn btn-solid"
											onClick={() => this.handleSubmit()}
										>
											Se connecter
										</a>
										<Link to="/forget-password">
										&nbsp;&nbsp;<a

										>
											Vous avez oublié votre mot de passe?
										</a>
										</Link>
										
									</form>
								</div>
							</div>
							<div className="col-lg-6 right-login">
								<h3>Nouveau utilisateur</h3>
								<div className="theme-card authentication-right">
									<h6 className="title-font">Create A Account</h6>
									<p>
										Sign up for a free account at our store. Registration is
										quick and easy. It allows you to be able to order from our
										shop. To start shopping click register.
									</p>
									<a href="pages/register" className="btn btn-solid">
										Créer un compte
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Login;
