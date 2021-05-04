import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../common/breadcrumb';
import NewProduct from '../common/new-product';

import StickyBox from 'react-sticky-box';

import avatar from '../../assets/images/default-avatar.png';

import userController from '../../services/controllers/userControllers';

class Profilleft extends Component {
	constructor(props) {
		super(props);

		this.state = {
			layoutColumns: 3,
			User: {},
		};
		this.userController = new userController();
	}

	componentDidMount() {
		if (localStorage.getItem('userId')) {
			console.log('user id:', localStorage.getItem('userId'));
			this.getUser(localStorage.getItem('userId'));
		}
	}

	LayoutViewClicked(colums) {
		this.setState({
			layoutColumns: colums,
		});
	}

	

	getUser(id) {
		this.userController.getUser(id).then((res) => {
			console.log(res);
			this.setState({ User: res.data.data });
		});
	}

	render() {
		return (
			<div>
				{/*SEO Support*/}
				<Helmet>
					<title>secondhand | Achat et vente en ligne</title>
				</Helmet>
				{/*SEO Support End */}

				<Breadcrumb title={'Profile'} />

				<section className="section-b-space">
					<div className="collection-wrapper">
						<div className="container">
							<div className="row">
								<div className="collection-content col">
									<div className="page-main-content ">
										<div className="">
											<div className="row">
												<div className="col-sm-12">
													<div className="top-banner-wrapper">
														{/* <a href="#">
															<img
																src={`${
																	process.env.PUBLIC_URL
																}/assets/images/mega-menu/2.jpg`}
																className="img-fluid"
																alt=""
															/>
														</a> */}
														<div className="profil-page">
															{this.state.User.image ? (
																<img
																	src={`http://localhost:4000/user/userimage/${
																		this.state.User.image
																	}`}
																	alt="avatar"
																	className="girl"
																/>
															) : (
																<img
																	src={avatar}
																	alt="avatar"
																	className="girl"
																/>
															)}
															<h3>
																{this.state.User.name +
																	' ' +
																	this.state.User.surName}
															</h3>
														</div>
													</div>
													
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Profilleft;
