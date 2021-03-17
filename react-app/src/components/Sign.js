import React, { Component } from 'react';
import '../styles/sign.css';
import Nav from './Nav';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link } from 'react-scroll';

export default class Sign extends Component {
	render() {
		return (
			<div className="main" id="signup">
				<Nav />

				{/* Sign up form */}
				<section className="signup">
					<div className="container">
						<div className="signup-content">
							<div className="signup-form">
								<h2 className="form-title">Sign up</h2>
								<form
									method="POST"
									className="register-form"
									id="register-form"
								>
									<div className="form-group">
										<label htmlFor="name">
											<PersonIcon style={{ fontSize: 20 }} />
										</label>
										<input
											type="text"
											name="name"
											id="name"
											placeholder="Your Name"
										/>
									</div>
									<div className="form-group">
										<label htmlFor="email">
											<EmailIcon style={{ fontSize: 20 }} />
										</label>
										<input
											type="email"
											name="email"
											id="email"
											placeholder="Your Email"
										/>
									</div>
									<div className="form-group">
										<label htmlFor="pass">
											<LockIcon style={{ fontSize: 20 }} />
										</label>
										<input
											type="password"
											name="pass"
											id="pass"
											placeholder="Password"
										/>
									</div>
									<div className="form-group">
										<label htmlFor="re-pass">
											<LockOutlinedIcon style={{ fontSize: 20 }} />
										</label>
										<input
											type="password"
											name="re_pass"
											id="re_pass"
											placeholder="Repeat your password"
										/>
									</div>
									<div className="form-group">
										<input
											type="checkbox"
											name="agree-term"
											id="agree-term"
											className="agree-term"
										/>
										<label htmlFor="agree-term" className="label-agree-term">
											<span>
												<span />
											</span>
											I agree all statements in{' '}
											<a href="#" className="term-service">
												Terms of service
											</a>
										</label>
									</div>
									<div className="form-group form-button">
										<input
											type="submit"
											name="signup"
											id="signup"
											className="form-submit"
											defaultValue="Register"
										/>
									</div>
								</form>
							</div>
							<div className="signup-image">
								<figure>
									<img
										src="../assets/images/sign/signup-image.jpg"
										alt="sing up image"
									/>
								</figure>
								<a href="#login" className="signup-image-link">
									<Link to="login" smooth={true}>
										I am already member
									</Link>
								</a>
							</div>
						</div>
					</div>
				</section>
				{/* Sign in  Form */}
				<section className="sign-in" id="login">
					<div className="container">
						<div className="signin-content">
							<div className="signin-image">
								<figure>
									<img
										src="../assets/images/sign/signin-image.jpg"
										alt="sing up image"
									/>
								</figure>
								<a href="#signup" className="signup-image-link">
									<Link to="signup" smooth={true}>
										Create an account
									</Link>
								</a>
							</div>
							<div className="signin-form">
								<h2 className="form-title">Login</h2>
								<form method="POST" className="register-form" id="login-form">
									<div className="form-group">
										<label htmlFor="your_name">
											<EmailIcon style={{ fontSize: 20 }} />
										</label>
										<input
											type="text"
											name="your_name"
											id="your_name"
											placeholder="Your Email"
										/>
									</div>
									<div className="form-group">
										<label htmlFor="your_pass">
											<LockIcon style={{ fontSize: 20 }} />
										</label>
										<input
											type="password"
											name="your_pass"
											id="your_pass"
											placeholder="Password"
										/>
									</div>
									<div className="form-group">
										<input
											type="checkbox"
											name="remember-me"
											id="remember-me"
											className="agree-term"
										/>
										<label htmlFor="remember-me" className="label-agree-term">
											<span>
												<span />
											</span>
											Remember me
										</label>
									</div>
									<div className="form-group form-button">
										<input
											type="submit"
											name="signin"
											id="signin"
											className="form-submit"
											defaultValue="Log in"
										/>
									</div>
								</form>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
