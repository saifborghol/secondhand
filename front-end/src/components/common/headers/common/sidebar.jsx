import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import compose from 'recompose/compose';

import CategoryController from '../../../../services/controllers/CategoryController';

class SideBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Categories: [],
			pictures: [],
		};

		this.CategoryController = new CategoryController();
	}

	componentDidMount() {
		this.getAllCategories();
	}

	getAllCategories() {
		this.CategoryController.getAllCategory().then((res) => {
			this.setState({ Categories: res.data.data });
		});
	}
	closeNav() {
		var closemyslide = document.getElementById('mySidenav');
		if (closemyslide) closemyslide.classList.remove('open-side');
	}

	handleSubmenu = (event) => {
		if (event.target.classList.contains('sub-arrow')) return;

		if (event.target.nextElementSibling.classList.contains('opensub1'))
			event.target.nextElementSibling.classList.remove('opensub1');
		else {
			document.querySelectorAll('.opensub1').forEach(function(value) {
				value.classList.remove('opensub1');
			});
			event.target.nextElementSibling.classList.add('opensub1');
		}
	};
	handleSubTwoMenu = (event) => {
		if (event.target.classList.contains('sub-arrow')) return;

		if (event.target.nextElementSibling.classList.contains('opensub2'))
			event.target.nextElementSibling.classList.remove('opensub2');
		else {
			document.querySelectorAll('.opensub2').forEach(function(value) {
				value.classList.remove('opensub2');
			});
			event.target.nextElementSibling.classList.add('opensub2');
		}
	};
	handleSubThreeMenu = (event) => {
		if (event.target.classList.contains('sub-arrow')) return;

		if (event.target.nextElementSibling.classList.contains('opensub3'))
			event.target.nextElementSibling.classList.remove('opensub3');
		else {
			document.querySelectorAll('.opensub3').forEach(function(value) {
				value.classList.remove('opensub3');
			});
			event.target.nextElementSibling.classList.add('opensub3');
		}
	};
	handleSubFourMenu = (event) => {
		if (event.target.classList.contains('sub-arrow')) return;

		if (event.target.nextElementSibling.classList.contains('opensub4'))
			event.target.nextElementSibling.classList.remove('opensub4');
		else {
			document.querySelectorAll('.opensub4').forEach(function(value) {
				value.classList.remove('opensub4');
			});
			event.target.nextElementSibling.classList.add('opensub4');
		}
	};

	handleMegaSubmenu = (event) => {
		if (event.target.classList.contains('sub-arrow')) return;

		if (event.target.nextElementSibling.classList.contains('opensidesubmenu'))
			event.target.nextElementSibling.classList.remove('opensidesubmenu');
		else {
			event.target.nextElementSibling.classList.add('opensidesubmenu');
		}
	};

	categoryClick = (title) => {
		const { history } = this.props;
		history.push(`/category/${title}`);
	};

	render() {
		return (
			<div id="mySidenav" className="sidenav">
				<a
					href="javascript:void(0)"
					className="sidebar-overlay"
					onClick={this.closeNav}
				/>
				<nav>
					<a onClick={this.closeNav}>
						<div className="sidebar-back text-left">
							<i className="fa fa-angle-left pr-2" aria-hidden="true" /> Back
						</div>
					</a>
					<ul id="sub-menu" className="sidebar-menu">
						<ul className="navitem2">
							<Link to="/create">
								<li>
									<a>Déposer une annonce</a>
								</li>
							</Link>
							{localStorage.getItem('token') ? null : (
								<React.Fragment>
									<Link to="/register">
										<li>
											<a>S'inscrire</a>
										</li>
									</Link>
									<Link to="/login">
										<li>
											<a>Se connecter</a>
										</li>
									</Link>
								</React.Fragment>
							)}
						</ul>
						{this.state.Categories.map((cat, index) => {
							return (
								<li>
									<Link onClick={(e) => this.handleSubmenu(e)}>
										{cat.title}
										<span className="sub-arrow" />
									</Link>
									<ul>
										{this.state.Categories[index].subcat.map((subcat) => (
											<li onClick={() => this.categoryClick(subcat.title)}>
												<Link>{subcat.title}</Link>
											</li>
										))}
									</ul>
								</li>
							);
						})}
					</ul>
				</nav>
			</div>
		);
	}
}

export default compose(withRouter)(SideBar);
