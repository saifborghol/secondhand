import React, { Component } from 'react';

import Breadcrumb from '../common/breadcrumb';

import { FaEdit } from 'react-icons/fa';
import { FcCheckmark } from 'react-icons/fc';

import { Input } from 'reactstrap';

import avatar from '../../assets/images/default-avatar.png';

import UserController from '../../services/controllers/userControllers';

class editProfile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			User: {},
			image: '',
			name: '',
			surName: '',
			oldpassword: '',
			newpassword: '',
			confirmnewpassword: '',
			tel: '',
			open: '',
			file: '',
			error: {},
		};
		this.UserController = new UserController();
	}

	componentDidMount() {
		if (localStorage.getItem('userId')) {
			console.log('user id:', localStorage.getItem('userId'));
			this.getUser(localStorage.getItem('userId'));
		}
	}

	getUser(id) {
		this.UserController.getUser(id).then((res) => {
			this.setState({ User: res.data.data });
			this.setState({ name: res.data.data.name });
			this.setState({ surName: res.data.data.surName });
			this.setState({ tel: res.data.data.tel });
		});
	}

	validateUser = () => {
		let isError = false;
		const errors = {
			surNameErr: '',
			NameErr: '',
			telErr: '',
		};

		if (this.state.name === '') {
			isError = true;
			errors.NameErr = 'Veuillez vérifier votre prénom';
		}

		if (this.state.surName === '') {
			isError = true;
			errors.surNameErr = 'Veuillez vérifier votre nom';
		}

		if (this.state.tel.length < 8 || this.state.tel.length > 8) {
			isError = true;
			errors.telErr = 'Veuillez vérifier votre numéro';
		}

		this.setState({
			error: errors,
		});
		return isError;
	};

	validatePass = () => {
		let isError = false;
		const errors = {
			passwordErr: '',
			newpasswordErr: '',
			confirmnewpasswordErr: '',
		};

		const regex2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{7,14}$/;

		if (this.state.oldpassword === '' || !regex2.test(this.state.oldpassword)) {
			isError = true;
			errors.passwordErr = 'Veuillez vérifier votre mot de passe';
		}
		if (this.state.newpassword === '' || !regex2.test(this.state.newpassword)) {
			isError = true;
			errors.newpasswordErr = 'Veuillez vérifier votre mot de passe';
		}
		if (
			this.state.confirmnewpassword === '' ||
			!regex2.test(this.state.confirmnewpassword)
		) {
			isError = true;
			errors.confirmnewpasswordErr = 'Veuillez vérifier votre mot de passe';
		}

		if (this.state.newpassword !== this.state.confirmnewpassword) {
			isError = true;
			errors.confirmnewpasswordErr = 'Les deux champs doivent être identiques';
		}

		this.setState({
			error: errors,
		});
		return isError;
	};

	handleSubmitPass = () => {
		try {
			const err = this.validatePass();

			const id = localStorage.getItem('userId');

			const Data = {
				oldpassword: this.state.oldpassword,
				newpassword: this.state.newpassword,
			};

			if (!err) {
				this.UserController.updateUserPass(id, Data).then((res) => {
					console.log(res);

					if (res.data.statut === 200) {
						this.props.history.push('/profile');
					} else if (res.data.statut === 500) {
						console.log('mot de passe incorrect!');
						this.setState({
							error: {
								...this.state.error,
								passwordErr: 'Mot de passe incorrect',
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

	handleSubmit = () => {
		try {
			const err = this.validateUser();

			const id = localStorage.getItem('userId');

			const Data = {
				name: this.state.name,
				surName: this.state.surName,
				tel: this.state.tel,
			};

			const tel = {
				tel: this.state.tel,
			};

			if (!err) {
				this.UserController.updateUser(id, Data).then((res) => {
					console.log('res:', res);
					if (res.data.status === 500) {
						this.setState({
							error: {
								...this.state.error,
								telErr: 'Ce numéro déja existe',
							},
						});
					} else {
						this.props.history.push('/profile');
					}
				});
			}
		} catch (error) {
			console.log('il y a un problème', error);
			return error;
		}
	};

	handleSubmitImage = () => {
		try {
			const id = localStorage.getItem('userId');

			const formData = new FormData();
			formData.append('image', this.state.image);
			this.UserController.updateUserImage(id, formData);
			this.props.history.push('/profile');
		} catch (error) {
			console.log('il y a un problème', error);
			return error;
		}
	};

	handleChangeFile = (evt) => {
		const file = evt.target.files[0];
		console.log('fiiile', file);
		this.setState({ open: 'true' });
		this.setState({ image: file });
		this.setState({ file: URL.createObjectURL(evt.target.files[0]) });
	};

	render() {
		return (
			<div>
				<Breadcrumb title={'Modifier le profil'} />

				{/*Regsiter section*/}
				<section className="register-page section-b-space">
					<div className="container">
						<br />
						<br />
						<br />
						<div className="profil-page" style={{ marginTop: '20px' }}>
							{this.state.User.image && this.state.open === '' ? (
								<img
									src={`http://localhost:4000/user/userimage/${
										this.state.User.image
									}`}
									alt="avatar"
									className="girl"
								/>
							) : this.state.open !== '' ? (
								<img src={this.state.file} alt="avatar" className="girl" />
							) : (
								<img src={avatar} alt="avatar" className="girl" />
							)}

							<div class="image-upload">
								<label for="file-input">
									<FaEdit
										size="20"
										style={{
											cursor: 'pointer',
											marginLeft: '70px',
											marginTop: '10px',
										}}
									/>
									{this.state.open === '' ? (
										<></>
									) : (
										<FcCheckmark
											onClick={this.handleSubmitImage}
											size="20"
											style={{
												marginLeft: '10px',
												cursor: 'pointer',
											}}
										/>
									)}
								</label>
								<input
									id="file-input"
									type="file"
									style={{
										display: 'none',
									}}
									onChange={(e) => this.handleChangeFile(e)}
								/>
							</div>
						</div>
						<br />
						<br />
						<div className="row">
							<div className="col-lg-12">
								<h3>Informations personnelles</h3>
								<div className="theme-card">
									<form className="theme-form">
										{/* <div className="form-row"> */}
										<div className="col-md-6">
											<label>Nom</label>
											<input
												defaultValue={this.state.name}
												name="name"
												type="text"
												className="form-control"
												id="fname"
												placeholder="Votre nom"
												onChange={(e) => {
													this.setState({ name: e.target.value });
												}}
											/>
											<label
												style={{
													paddingBottom: '20px',
													fontSize: 12,
													color: 'red',
												}}
											>
												{this.state.error.NameErr}
											</label>
										</div>
										<div className="col-md-6">
											<label htmlFor="review">Prénom</label>
											<input
												defaultValue={this.state.surName}
												name="surName"
												type="text"
												className="form-control"
												id="lname"
												placeholder="Votre prénom"
												onChange={(e) => {
													this.setState({ surName: e.target.value });
												}}
											/>
											<label
												style={{
													paddingBottom: '20px',
													fontSize: 12,
													color: 'red',
													marginTop: -20,
												}}
											>
												{this.state.error.surNameErr}
											</label>
										</div>
										{/* </div> */}
										{/* <div className="form-row"> */}
										<div className="col-md-6">
											<label htmlFor="email">Email</label>
											<input
												value={this.state.User.email}
												disabled
												name="email"
												type="text"
												className="form-control"
												id="email"
												placeholder="Votre email"
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
										<div className="col-md-6">
											<label htmlFor="review">Numéro de téléphone</label>

											<input
												defaultValue={this.state.tel}
												name="tel"
												maxLength='8'
												type="number"
												className="form-control"
												id="review"
												placeholder="Ajouter un numéro de téléphone"
												onChange={(e) => {
													this.setState({ tel: e.target.value });
												}}
											/>
											<label
												style={{
													paddingBottom: '20px',
													fontSize: 12,
													color: 'red',
												}}
											>
												{this.state.error.telErr}
											</label>
										</div>
										<a
											className="btn btn-solid"
											onClick={() => this.handleSubmit()}
										>
											Enregistrer
										</a>
										{/* </div> */}
									</form>
								</div>
							</div>
						</div>
						<br />
						<br />
						<div className="row">
							<div className="col-lg-12">
								<h3>Mot de passe</h3>
								<div className="theme-card">
									<form className="theme-form">
										{/* <div className="form-row"> */}
										<div className="col-md-6">
											<label>Ancien mot de passe</label>
											<input
												name="oldPass"
												type="password"
												className="form-control"
												id="fname"
												placeholder="Votre ancien mot de passe"
												onChange={(e) => {
													this.setState({ oldpassword: e.target.value });
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

										<div className="col-md-6">
											<label htmlFor="password">Nouveau mot de passe</label>
											<input
												name="newPass"
												type="password"
												className="form-control"
												id="password"
												placeholder="Votre nouveau password"
												onChange={(e) => {
													this.setState({ newpassword: e.target.value });
												}}
											/>
											<label />
										</div>
										{/* </div> */}
										{/* <div className="form-row"> */}
										<div className="col-md-6">
											<label htmlFor="password">
												valider le nouveau mot de passe
											</label>
											<input
												name="newPass"
												type="password"
												className="form-control"
												id="password"
												placeholder="Votre nouveau mot de passe"
												onChange={(e) => {
													this.setState({ confirmnewpassword: e.target.value });
												}}
											/>
											<label
												style={{
													paddingBottom: '20px',
													fontSize: 12,
													color: 'red',
												}}
											>
												{this.state.error.confirmnewpasswordErr}
											</label>
										</div>

										<a
											className="btn btn-solid"
											onClick={() => this.handleSubmitPass()}
										>
											Enregistrer
										</a>
										{/* </div> */}
									</form>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default editProfile;
