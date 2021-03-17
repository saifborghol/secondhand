import React, { Component } from 'react';
import logo from '../logo.svg';
export default class Nav extends Component {
	render() {
		return (
			<header className="header bg-white">
				<div className="container px- px-lg-3">
					<nav className="navbar navbar-expand-lg navbar-light py-3 px-lg-0">
						<a className="navbar-brand" href="index.html">
							{' '}
							<img src={logo} />{' '}
						</a>
						<button
							className="navbar-toggler navbar-toggler-right"
							type="button"
							data-toggle="collapse"
							data-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon" />
						</button>
						<div
							className="collapse navbar-collapse"
							id="navbarSupportedContent"
						>
							<ul className="navbar-nav mr-auto">
								<li className="nav-item">
									{/* Link*/}
									<a className="nav-link active" href="/">
										Home
									</a>
								</li>
								<li className="nav-item">
									{/* Link*/}
									<a className="nav-link" href="shop">
										Shop
									</a>
								</li>
								<li className="nav-item">
									{/* Link*/}
									<a className="nav-link" href="detail">
										Product detail
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="cart">
										<i className="fas fa-dolly-flatbed mr-1 text-gray" />
										<small className="text-gray">(2)</small>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="#">
										<i className="far fa-heart mr-1" />
										<small className="text-gray"> (0)</small>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="sign">
										<i className="fas fa-user-alt mr-1 text-gray" />
										Login/Register
									</a>
								</li>
							</ul>
							<ul className="navbar-nav ml-auto"></ul>
						</div>
					</nav>
				</div>
			</header>
		);
	}
}
