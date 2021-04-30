import React, { Component } from 'react';
import { Link, NavLink, Redirect, withRouter } from 'react-router-dom';
import { IntlActions } from 'react-redux-multilingual';
import Pace from 'react-pace-progress';

import compose from 'recompose/compose';

// Import custom components
import store from '../../../store';
import SideBar from './common/sidebar';
import CartContainer from './../../../containers/CartContainer';
import LogoImage from './common/logo';

import { Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import avatar from '../../../assets/images/default-avatar.png';

import userController from '../../../services/controllers/userControllers';

class HeaderOne extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: false,
			User: {},
			searchText:''
		};
		this.userController = new userController();
	}

	componentDidMount() {
		setTimeout(function() {
			document.querySelector('.loader-wrapper').style = 'display: none';
		}, 2000);

		if (localStorage.getItem('userId')) {
			console.log('user id:', localStorage.getItem('userId'));
			this.getUser(localStorage.getItem('userId'));
		}
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

	profil = () => {
		const { history } = this.props;
		history.push(`/user/${this.state.User._id}`);
	};

	logout = (e) => {
		let data = { refreshToken: localStorage.getItem('refreshToken') };
		const { history } = this.props;
		this.userController.logoutUser(data);
		localStorage.clear();
		history.push('/login');
	};

	searchClick = (text) => {
		const { history } = this.props;
		window.location.href=`/search/${text}`;
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
													// value={localStorage.getItem('searchText')}
													onChange={(e) => {
														this.setState({searchText: e.target.value})
														localStorage.setItem('searchText', e.target.value)
													}}
												/>
												<button
													type="submit"
													className="searchButton"
													onClick={() => this.searchClick(localStorage.getItem('searchText'))}
												>
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
													<Link to="/create">
														<li className="navitem">
															<button className="buttoon2">
																Créer une annonce
															</button>
														</li>
													</Link>

													<li className="navitem">
														{this.state.User.image ? (
															<img
																src={`http://localhost:4000/user/userimage/${
																	this.state.User.image
																}`}
																onClick={() => this.profil()}
																alt="avatar"
																width="32px"
																height="32px"
																style={{
																	cursor: 'pointer',
																	borderRadius: '50%',
																	objectFit: 'cover',
																	marginRight: '5px',
																}}
															/>
														) : (
															<img
																src={avatar}
																onClick={() => this.profil()}
																alt="avatar"
																width="32px"
																height="32px"
																style={{
																	cursor: 'pointer',
																	borderRadius: '50%',
																	objectFit: 'cover',
																	marginRight: '5px',
																}}
															/>
														)}
														<Dropdown>
															<Dropdown.Menu
																style={{
																	marginTop: '25px',
																	marginLeft: '-120px',
																}}
															>
																<Dropdown.Item
																	text="Mon profile"
																	onClick={() => this.profil()}
																/>
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
													<Link to="/create">
														<li className="navitem">
															<button className="buttoon2">
																Créer une annonce
															</button>
														</li>
													</Link>
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
