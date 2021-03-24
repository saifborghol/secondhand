import React, { Component } from 'react';
import Page from 'components/Page';
import {
	Button,
	Card,
	CardBody,
	CardHeader,
	Col,
	Form,
	FormGroup,
	FormText,
	Input,
	Label,
	Row,
} from 'reactstrap';

import UserController from '../../services/controllers/UserController';

export default class UpdateUsers extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			password: '',
			image: null,
			error: {},
		};

		this.UserController = new UserController();
		this.getOneUser();
	}

	updateUsers() {
		this.UserController.updateUser().then(res => {
			this.setState({ Users: res.data.data });
		});
	}

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

	getOneUser() {
		this.UserController.getUserByID(localStorage.getItem('idUser')).then(
			res => {
				console.log('responsetttttt', res);
				this.setState({
					name: res.data.data.name,
					email: res.data.data.email,
				});
			},
		);
	}

	handleChangeFile = evt => {
		const file = evt.target.files[0];
		console.log('fiiile', file);
		this.setState({ image: file });
	};

	handleSubmit(event) {
		event.preventDefault();
		let err = this.validate();
		const formData = new FormData();
		formData.append('image', this.state.image);
		formData.append('name', this.state.name);
		formData.append('email', this.state.email);
		formData.append('password', this.state.password);

		console.log('iiiiiiiiii', localStorage.getItem('idUser'));
		this.UserController.updateUser(
			localStorage.getItem('idUser'),
			formData,
		).then(res => {
			console.log('response', res);
		});
		window.location.href = '/user/getAll';
	}

	render() {
		return (
			<Page title="Forms" breadcrumbs={[{ name: 'Forms', active: true }]}>
				<Row>
					<Col xl={6} lg={12} md={12}>
						<Card>
							<CardHeader>Form Grid</CardHeader>
							<CardBody>
								<Form>
									<FormGroup row>
										<Label for="exampleName" sm={2}>
											Name
										</Label>
										<Col sm={10}>
											<Input
												type="text"
												name="name"
												value={this.state.name}
												onChange={event =>
													this.setState({
														name:
															event.target.value,
													})
												}
											/>
										</Col>
									</FormGroup>
									<FormGroup row>
										<Label for="exampleEmail" sm={2}>
											Email
										</Label>
										<Col sm={10}>
											<Input
												type="email"
												name="email"
												value={this.state.email}
												onChange={event =>
													this.setState({
														email:
															event.target.value,
													})
												}
											/>
										</Col>
									</FormGroup>
									<FormGroup row>
										<Label for="examplePassword" sm={2}>
											Password
										</Label>
										<Col sm={10}>
											<Input
												type="password"
												name="password"
												placeholder="Password here"
												onChange={event =>
													this.setState({
														password:
															event.target.value,
													})
												}
											/>
										</Col>
									</FormGroup>
									<FormGroup row>
										<Label for="exampleFile" sm={2}>
											File
										</Label>
										<Col sm={10}>
											<Input
												type="file"
												name="file"
												onChange={this.handleChangeFile}
											/>
											<FormText color="muted">
												This is some placeholder
												block-level help text for the
												above input. It's a bit lighter
												and easily wraps to a new line.
											</FormText>
										</Col>
									</FormGroup>
									<FormGroup check row>
										<Col sm={{ size: 10, offset: 2 }}>
											<Button
												onClick={event => {
													this.handleSubmit(event);
												}}
											>
												Submit
											</Button>
										</Col>
									</FormGroup>
								</Form>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Page>
		);
	}
}
