import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/nav.css';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
	listener = null;
	state = {
		nav: false,
	};
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	handleScroll = () => {
		if (window.pageYOffset > 0) {
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
				<Link to="/">
					<a class="logo">
						<img src={logo} />
					</a>
				</Link>

				<ul>
					<li>
						<Link to="/">
							<a>Home</a>
						</Link>
					</li>

					<li>
						<Link to="about">
							<a>About</a>
						</Link>
					</li>

					<li>
						<Link to="services">
							<a>Services</a>
						</Link>
					</li>

					<li>
						<Link to="contact">
							<a>Contact</a>
						</Link>
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
						<Link to="sign">
							<a>
								<i class="fas fa-user"></i>
								&nbsp;Login / Register
							</a>
						</Link>
					</li>
				</ul>
			</header>
		);
	}
}
