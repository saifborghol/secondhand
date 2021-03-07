import React, { Component } from 'react';
import axios from 'axios';
import '../styles/form.css';

export default class Form extends Component {
	state = {
		name: '',
		email: '',
		password: '',
		confimPassword: '',
		error: {},
	};

	validate = () => {
		let isError = false;
		const errors = {
			nameErr: '',
			emailErr: '',
			passwordErr: '',
		};

		//NAME
		const regex1 = /^[a-zA-Z._-]+$/;
		if (this.state.name === '' || !regex1.test(this.state.name)) {
			isError = true;
			errors.nameErr = 'Veuillez verifier votre nom!';
		}

		//PRENOM
		// if ((this.state.surname === '') || !regex1.test(this.state.surname)) {
		//   isError = true;
		//   errors.prenomErr = 'veuillez verifier votre prenom'
		// }

		//EMAIL
		const regex2 = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;
		if (this.state.email === '' || !regex2.test(this.state.email)) {
			isError = true;
			errors.emailErr = 'Veuillez verifier votre Email!';
		}

		//PASSWORD
		const regex3 = /^[a-zA-Z0-9._-]+$/;
		if (this.state.password === '' || !regex3.test(this.state.password)) {
			isError = true;
			errors.passwordErr = 'Veuillez verifier votre mot de passe!';
		}

		this.setState({
			error: errors,
		});

		return isError;
	};

	handleSubmit(event) {
		event.preventDefault();
		let err = this.validate();
		let data = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
		};
		if (!err) {
			axios
				.post('http://localhost:4000/user/addUser', data)
				.then((res) => {
					console.log('response', res);
				});
		}
	}

	render() {
		console.log(this.state.name);
		console.log(this.state.email);
		console.log(this.state.phone);
		console.log(this.state.adress);
		console.log(this.state.password);

		return (
			<div>
				<form>
					<div className="section">
						<span>1</span>First Name & Address
					</div>
					<div className="inner-wrap">
						<label>
							Your Full Name{' '}
							<input
								type="text"
								name="field1"
								onChange={(event) =>
									this.setState({ name: event.target.value })
								}
							/>
						</label>
						<label id="verif">{this.state.error.nameErr}</label>
						<label>
							Address{' '}
							<input
								type="text"
								name="field2"
								onChange={(event) =>
									this.setState({
										adress: event.target.value,
									})
								}
							/>
						</label>
					</div>

					<div className="section">
						<span>2</span>Email & Phone
					</div>
					<div className="inner-wrap">
						<label>
							Email Address{' '}
							<input
								type="email"
								name="field3"
								onChange={(event) =>
									this.setState({ email: event.target.value })
								}
							/>
						</label>
						<label id="verif">{this.state.error.emailErr}</label>
						<label>
							Phone Number{' '}
							<input
								type="text"
								name="field4"
								onChange={(event) =>
									this.setState({ phone: event.target.value })
								}
							/>
						</label>
					</div>

					<div className="section">
						<span>3</span>Passwords
					</div>
					<div className="inner-wrap">
						<label>
							Password{' '}
							<input
								type="password"
								name="field5"
								onChange={(event) =>
									this.setState({
										password: event.target.value,
									})
								}
							/>
						</label>
						<label id="verif">{this.state.error.passwordErr}</label>
						<label>
							Confirm Password{' '}
							<input
								type="password"
								name="field6"
								onChange={(event) =>
									this.setState({
										confimPassword: event.target.value,
									})
								}
							/>
						</label>
					</div>
					<div className="button-section">
						<input
							type="submit"
							name="Sign Up"
							onClick={(event) => {
								this.handleSubmit(event);
							}}
						/>
					</div>
				</form>
			</div>
		);
	}
}
