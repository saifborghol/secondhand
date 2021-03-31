import logo from 'assets/img/logo/logo2.svg';
import PropTypes from 'prop-types';
import React from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import AdminController from '../pages/services/controllers/AdminController';

class AuthForm extends React.Component {
	constructor() {
		super();
		this.state = {
			name: '',
			password: '',
			error: {},
		};
		this.AdminController = new AdminController();
	}

	validate = () => {
		let isError = false;
		const errors = {
			nameErr: '',
			passwordErr: '',
		};

		//NAME
		const regex1 = /^[a-zA-Z._-]+$/;
		if (this.state.name === '' || !regex1.test(this.state.name)) {
			isError = true;
			errors.nameErr = 'Veuillez verifier votre nom!';
		}

		//PASSWORD
		if (this.state.password === '') {
			isError = true;
			errors.passwordErr = 'Veuillez vérifier votre mot de passe!';
		}

		this.setState({
			error: errors,
		});

		return isError;
	};

	handleSubmit = event => {
		const err = this.validate();
		const data = {
			username: this.state.name,
			password: this.state.password,
		};
		if (!err) {
			this.AdminController.login(data).then(res => {
				console.log('resss', res);
				if (res.data.status === 'Success') {
					window.location.href = '/category';
				} 
			});
		}
	};

	get isLogin() {
		return this.props.authState === STATE_LOGIN;
	}

	get isSignup() {
		return this.props.authState === STATE_SIGNUP;
	}

	changeAuthState = authState => event => {
		event.preventDefault();

		this.props.onChangeAuthState(authState);
	};

	renderButtonText() {
		const { buttonText } = this.props;

		if (!buttonText && this.isLogin) {
			return 'Login';
		}

		if (!buttonText && this.isSignup) {
			return 'Signup';
		}

		return buttonText;
	}

	render() {
		const {
			showLogo,
			usernameLabel,
			usernameInputProps,
			passwordLabel,
			passwordInputProps,
			confirmPasswordLabel,
			confirmPasswordInputProps,
			children,
			onLogoClick,
		} = this.props;

		return (
			<Form onSubmit={this.handleSubmit}>
				{showLogo && (
					<div className="text-center pb-4">
						<img src={logo} alt="logo" />
					</div>
				)}
				<FormGroup>
					<Label for={usernameLabel}>{usernameLabel}</Label>
					<Input
						onChange={e => this.setState({ name: e.target.value })}
					/>
					<Label style={{ color: 'red', fontSize: '14px' }}>
						{this.state.error.nameErr}
					</Label>
				</FormGroup>
				<FormGroup>
					<Label for={passwordLabel}>{passwordLabel}</Label>
					<Input
						type="password"
						onChange={e =>
							this.setState({ password: e.target.value })
						}
					/>
					<Label style={{ color: 'red', fontSize: '14px' }}>
						{this.state.error.passwordErr}
					</Label>
				</FormGroup>
				{this.isSignup && (
					<FormGroup>
						<Label for={confirmPasswordLabel}>
							{confirmPasswordLabel}
						</Label>
						<Input {...confirmPasswordInputProps} />
					</FormGroup>
				)}
				<FormGroup check>
					<Label check>
						<Input type="checkbox" />{' '}
						{this.isSignup
							? 'Agree the terms and policy'
							: 'Remember me'}
					</Label>
				</FormGroup>
				<hr />
				<Button
					size="lg"
					className="bg-gradient-theme-left border-0"
					block
					onClick={() => {
						this.handleSubmit();
					}}
				>
					{this.renderButtonText()}
				</Button>

				{children}
			</Form>
		);
	}
}

export const STATE_LOGIN = 'LOGIN';
export const STATE_SIGNUP = 'SIGNUP';

AuthForm.propTypes = {
	authState: PropTypes.oneOf([STATE_LOGIN, STATE_SIGNUP]).isRequired,
	showLogo: PropTypes.bool,
	usernameLabel: PropTypes.string,
	usernameInputProps: PropTypes.object,
	passwordLabel: PropTypes.string,
	passwordInputProps: PropTypes.object,
	confirmPasswordLabel: PropTypes.string,
	confirmPasswordInputProps: PropTypes.object,
	onLogoClick: PropTypes.func,
};

AuthForm.defaultProps = {
	authState: 'LOGIN',
	showLogo: true,
	usernameLabel: 'Utilisateur',
	usernameInputProps: {
		type: 'String',
		placeholder: "Nom d'utilisateur",
	},
	passwordLabel: 'Mot de passe',
	passwordInputProps: {
		type: 'password',
		placeholder: 'Votre mot de passe',
	},
	confirmPasswordLabel: 'Confirm Password',
	confirmPasswordInputProps: {
		type: 'password',
		placeholder: 'confirm your password',
	},
	onLogoClick: () => {},
};

export default AuthForm;
