import React, { Component } from 'react';
import { Link, NavLink, Redirect, withRouter } from 'react-router-dom';
import { IntlActions } from 'react-redux-multilingual';
import Pace from 'react-pace-progress';

import compose from 'recompose/compose';

// Import custom components
import store from '../../../store';
import NavBar from './common/navbar';
import SideBar from './common/sidebar';
import CartContainer from './../../../containers/CartContainer';
import TopBar from './common/topbar';
import LogoImage from './common/logo';
import { changeCurrency } from '../../../actions';
import { connect } from 'react-redux';

import { Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import avatar from '../../../assets/images/default-avatar.png';
import pic from '../../../assets/images/pic.jpg';

import userController from '../../../services/controllers/userControllers';

class HeaderOne extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: false,
			User: {},
		};
		this.userController = new userController();
	}

	componentDidMount() {
		setTimeout(function() {
			document.querySelector('.loader-wrapper').style = 'display: none';
		}, 2000);
		if (localStorage.getItem('userId')) {
			this.getUser(localStorage.getItem('userId'));
		}

		this.setState({ open: true });
	}

	componentWillMount() {
		window.addEventListener('scroll', this.handleScroll);
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll = () => {
		let number =
			window.pageXOffset ||
			document.documentElement.scrollTop ||
			document.body.scrollTop ||
			0;
		if (number >= 10) {
			if (window.innerWidth < 576) {
				document.getElementById('sticky').classList.remove('fixed');
			} else document.getElementById('sticky').classList.add('fixed');
		} else {
			document.getElementById('sticky').classList.remove('fixed');
		}
	};

	changeLanguage(lang) {
		store.dispatch(IntlActions.setLocale(lang));
	}

	openNav() {
		var openmyslide = document.getElementById('mySidenav');
		if (openmyslide) {
			openmyslide.classList.add('open-side');
		}
	}
	openSearch() {
		document.getElementById('search-overlay').style.display = 'block';
	}

	closeSearch() {
		document.getElementById('search-overlay').style.display = 'none';
	}

	load = () => {
		this.setState({ isLoading: true });
		fetch().then(() => {
			// deal with data fetched
			this.setState({ isLoading: false });
		});
	};

	getUser(id) {
		this.userController.getUser(id).then((res) => {
			console.log(res);
			this.setState({ User: res.data.data });
		});
	}

	logout = (e) => {
		let data = { refreshToken: localStorage.getItem('refreshToken') };
		const { history } = this.props;

		this.userController.logoutUser(data).then((res) => {
			console.log('res', res);
			localStorage.clear();
			history.push('/login');
		});
	};

	render() {
		return (
			<div>
				<header id="sticky" className="sticky">
					{this.state.isLoading ? <Pace color="#27ae60" /> : null}
					<div className="mobile-fix-option" />
					{/*Top Header Component*/}
					{/* <TopBar /> */}

					<div className="container">
						<div className="row">
							<div className="col-sm-12">
								<div className="main-menu">
									<div className="menu-left">
										<div className="navbar">
											<a href="javascript:void(0)" onClick={this.openNav}>
												<div className="bar-style">
													<i
														className="fa fa-bars sidebar-bar"
														aria-hidden="true"
													/>
												</div>
											</a>
											{/*SideBar Navigation Component*/}
											<SideBar />
										</div>
										<div className="brand-logo">
											<LogoImage logo={this.props.logoName} />
										</div>

										{/* search bar */}
										<div class="wrap">
											<div class="search">
												<input
													type="text"
													className="searchTerm"
													placeholder="Que cherchez-vous?"
												/>
												<button type="submit" className="searchButton">
													<i class="fa fa-search" />
												</button>
											</div>
										</div>
									</div>
									<div className="menu-right pull-right">
										{/*Top Navigation Bar Component*/}

										{/* <NavBar /> */}

										{localStorage.getItem('token') ? (
											<div className="icon-nav">
												<ul>
													<li className="navitem">
														{this.state.User.image !== null ? (
															<img
																src={`http://localhost:4000/user/userimage/${
																	this.state.User.image
																}`}
																alt="avatar"
																width="32px"
																height="32px"
																style={{
																	borderRadius: '50%',
																	objectFit: 'cover',
																}}
															/>
														) : (
															<img
																src={avatar}
																alt="avatar"
																width="32px"
																height="32px"
																style={{
																	borderRadius: '50%',
																	objectFit: 'cover',
																}}
															/>
														)}
														<Dropdown text={this.state.User.name}>
															<Dropdown.Menu>
																<Dropdown.Item text="Mon profile" />
																<Dropdown.Item
																	icon="logout"
																	text="Se déconnecter"
																	onClick={(e) => this.logout(e)}
																/>
															</Dropdown.Menu>
														</Dropdown>
													</li>

													{/*Header Cart Component */}
													<CartContainer />
												</ul>
												<div className="col-lg-6 text-right" />
											</div>
										) : (
											<div className="icon-nav">
												<ul>
													<Link to="/register">
														<li className="navitem">
															<a>S'inscrire</a>
														</li>
													</Link>
													<Link to="/login">
														<li className="navitem">
															<a>Se connecter</a>
														</li>
													</Link>
													{/*Header Cart Component */}
													<CartContainer />
												</ul>
												<div className="col-lg-6 text-right" />
											</div>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>
			</div>
		);
	}
}

export default compose(withRouter)(HeaderOne);
