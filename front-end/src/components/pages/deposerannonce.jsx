import React, { Component } from 'react';

import Breadcrumb from '../common/breadcrumb';

import ImageUploader from 'react-images-upload';

import UserController from '../../services/controllers/userControllers';

class Deposer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pictures: [],
		};
		this.UserController = new UserController();
		this.onDrop = this.onDrop.bind(this);
	}

	onDrop(pictureFiles, pictureDataURLs) {
		this.setState({
			pictures: pictureFiles,
		});
	}

	handleSubmit = () => {};

	render() {
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
												<label>Titre</label>
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
												/>
											</div>

											<div className="col-md-6">
												<label htmlFor="review">Prix</label>
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
												/>
											</div>
										</div>
										<div className="form-row">
											<div className="col-md-6">
												<label htmlFor="email">Description</label>
												<br />

												<textarea
													className="form-control"
													style={{ resize: 'none' }}
													name="Description"
													rows="5"
													cols="93"
												/>

												<label
													style={{
														paddingBottom: '20px',
														fontSize: 12,
														color: 'red',
													}}
												/>
											</div>
											<div className="col-md-6">
												<label htmlFor="review">Categorie</label>
												<br />
												<select
													name="pets"
													id="pet-select"
													className="form-control"
												>
													<option value="">--choisire categorie--</option>
													<option value="dog">vetement</option>
													<option value="cat">cuisine</option>
													<option value="hamster">jardin</option>
													<option value="parrot">accessoires</option>
													<option value="spider">Montres</option>
													<option value="goldfish">chaussure</option>
												</select>
												<label
													style={{
														paddingBottom: '20px',
														fontSize: 12,
														color: 'red',
													}}
												/>
												<br /> <br />
												<label for="avatar">selectionner vos images</label>
												<form
													method="POST"
													action="/upload-multiple-images"
													enctype="multipart/form-data"
												>
													<div>
														<label>selectionner plusieure images:</label>
														<input
															type="file"
															name="multiple_images"
															multiple
														/>
													</div>
												</form>
											</div>

											<ImageUploader
												withIcon={true}
												withPreview
												buttonText="Choisir vos images"
												onChange={this.onDrop}
												imgExtension={['.jpg', '.gif', '.png', '.gif']}
												maxFileSize={5242880}
												withLabel={false}
												fileSizeError='La taille des fichiers est trop large'
												fileTypeError="Le type de fichiers n'est pas supporté"
											/>

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
