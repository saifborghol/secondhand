import React, { Component } from 'react';

import Select from '@material-ui/core/Select';

import Breadcrumb from '../common/breadcrumb';

import ImageUploader from 'react-images-upload';

import UserController from '../../services/controllers/userControllers';
import CategoryController from '../../services/controllers/CategoryController';
// import SubCategoryController from '../../services/controllers/SubCategoryController';

class Deposer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			description: '',
			price: '',
			subCat_id: '',
			Categories: [],
			pictures: [],
		};
		this.UserController = new UserController();
		this.CategoryController = new CategoryController();
		// this.SubCategoryController = new SubCategoryController();

		this.onDrop = this.onDrop.bind(this);
	}

	componentDidMount() {
		this.getAllCategories();
	}

	getAllCategories() {
		this.CategoryController.getAllCategory().then((res) => {
			this.setState({ Categories: res.data.data });
		});
	}

	onDrop(pictureFiles, pictureDataURLs) {
		this.setState({
			pictures: pictureFiles,
		});
	}

	handleSubmit(event) {
		event.preventDefault();
		let err = this.validate();
		const formData = new FormData();
		var productDetails = JSON.stringify(
			{ description: this.state.description },
			{ image: this.state.pictures },
			{ price: this.state.price },
			{ subCat_id: this.state.subCat_id }
		);

		// formData.append('name', this.state.name);
		formData.append('product', productDetails);
		formData.append('password', this.state.password);

		if (!err) {
			this.UserController.addUser(formData).then((res) => {
				console.log('response', res);
			});
		}
		// // window.location.href = '/';

	}

	render() {
		return (
			<div>
				<Breadcrumb title={'Annonce'} />

				{/*Regsiter section*/}
				<section className="register-page section-b-space">
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<h3>Déposer votre annonce</h3>
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
													onChange={(e) => {
														this.setState({ title: e.target.value });
													}}
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
													onChange={(e) => {
														this.setState({ price: e.target.value });
													}}
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
												<label htmlFor="email">Description (optionnelle)</label>
												<br />

												<textarea
													className="form-control"
													style={{ resize: 'none' }}
													name="Description"
													rows="5"
													cols="93"
													onChange={(e) => {
														this.setState({ description: e.target.value });
													}}
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
												<label htmlFor="review">Catégorie</label>
												<br />
												<Select
													native
													onChange={(e) =>
														this.setState({
															subCat_id: e.target.value,
														})
													}
												>
													<option
														aria-label="None"
														value="Choisir une catégorie"
													/>
													{this.state.Categories.map((cat, index) => {
														return (
															<>
																<optgroup label={cat.title}>
																	{this.state.Categories[index].subcat.map(
																		(subcat) => (
																			<option value={subcat._id}>
																				{subcat.title}
																			</option>
																		)
																	)}
																</optgroup>
															</>
														);
													})}
												</Select>
												<label
													style={{
														paddingBottom: '20px',
														fontSize: 12,
														color: 'red',
													}}
												/>
												<br /> <br /> <br />
												<br />
												<label for="avatar">selectionner vos images</label>
												<ImageUploader
													withIcon={true}
													withPreview
													buttonText="Choisir vos images"
													onChange={this.onDrop}
													imgExtension={['.jpg', '.gif', '.png', '.gif']}
													maxFileSize={5242880}
													withLabel={false}
													fileSizeError="La taille des fichiers est trop large"
													fileTypeError="Le type de fichiers n'est pas supporté"
												/>
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
