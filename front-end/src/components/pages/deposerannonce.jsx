import React, { Component } from 'react';

import Breadcrumb from '../common/breadcrumb';

import UserController from '../../services/controllers/userControllers';

class Deposer extends Component {
	constructor() {
		super();
		this.state = {
			
		};
		this.UserController = new UserController();
	}


	handleSubmit = () => {
		
	};

	render() {
		console.log(this.props);
		return (
			<div>
				<Breadcrumb title={'Deposer votre Annonce'} />

				{/*Regsiter section*/}
				<section className="register-page section-b-space">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<h3>create account</h3>
								<div className="theme-card">
									<form className="theme-form">
										<div className="form-row">
											<div className="col-md-6">
												<label>First Name</label>
												<input
													name="name"
													type="text"
													className="form-control"
													id="fname"
													placeholder="Titre"
													
												/>
												<label
													style={{
														paddingBottom: '20px',
														fontSize: 12,
														color: 'red',
													}}
												>
												
												</label>
											</div>
											<div className="col-md-6">
												<label htmlFor="review">Last Name</label>
												<input
													name="surName"
													type="text"
													className="form-control"
													id="lname"
													placeholder="Prix"
													
												/>
												<label
													style={{
														paddingBottom: '20px',
														fontSize: 12,
														color: 'red',
														marginTop: -20,
													}}
												>
												
												</label>
											</div>
										</div>
										<div className="form-row">
											<div className="col-md-6">
												<label htmlFor="email">Description</label>
												<input
													name="email"
													type="text"
													className="form-control"
													id="email"
													placeholder="Email"
													
												/>
												<label
													style={{
														paddingBottom: '20px',
														fontSize: 12,
														color: 'red',
													}}
												>
													
												</label>
											</div>
											<div className="col-md-6">
												<label htmlFor="review">Categorie</label>

												<input
													name="password"
													type="password"
													className="form-control"
													id="review"
													placeholder="Enter your password"
													
												/>
												<label
													style={{
														paddingBottom: '20px',
														fontSize: 12,
														color: 'red',
													}}
												>
													
												</label>
												
												<label for="avatar">Choose a profile picture:</label>

												<form method="POST" action="/upload-multiple-images" enctype="multipart/form-data">
   													<div>
        												<label>Select multiple images:</label>
        												<input type="file" name="multiple_images" multiple />
    												</div>
    												<div>
        												<input type="submit" name="btn_upload_multiple_images" value="Upload" />
    												</div>
												</form>
											</div>
											
											<a
												className="btn btn-solid"
												onClick={() => this.handleSubmit()}
											>
												Déposer
											</a>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Deposer;
