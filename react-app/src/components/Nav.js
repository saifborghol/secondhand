import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/nav.css';
export default class Nav extends Component {
	listener = null;
	state = {
		nav: false,
	};
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}
	componentWillUnmount() {
		window.removeEventListener('scroll');
	}
	handleScroll = () => {
		if (window.pageYOffset > 140) {
			if (!this.state.nav) {
				this.setState({ nav: true });
			}
		} else {
			if (this.state.nav) {
				this.setState({ nav: false });
			}
		}
	};

	render() {
		return (
			<header className={`navbar ${this.state.nav && 'sticky'}`}>
				<a href="/" class="logo">
					{' '}
					<img src={logo} />{' '}
				</a>
				<ul>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">About</a>
					</li>
					<li>
						<a href="#">Services</a>
					</li>
					<li>
						<a href="#">Portfolio</a>
					</li>
					<li>
						<a href="#">Team</a>
					</li>
					<li>
						<a href="#">Contact</a>
					</li>
				</ul>
				<ul>
				<li>
						<a href="cart">
							<i className="fas fa-shopping-cart"></i>
							<small>(2)</small>
						</a>
					</li>
					<li>
						<a href="cart">
							<i class="far fa-heart"></i>
							<small>(0)</small>
						</a>
					</li>
					<li>
						<a href="cart">
						<i class="fas fa-user"></i>
						&nbsp;Login / Register
						</a>
					</li>
				</ul>
			</header>
		);
	}
}
