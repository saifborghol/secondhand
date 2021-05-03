import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import compose from 'recompose/compose';
import { Helmet } from 'react-helmet';
import Breadcrumb from '../common/breadcrumb';
import NewProduct from '../common/new-product';
import Filter from './common/filter';
import FilterBar from './common/filter-bar';
import ProductListing from './common/product-listing';
import StickyBox from 'react-sticky-box';
import avatar from '../../assets/images/default-avatar.png';

import SpecialProducts from '../layouts/common/products';

import Card from 'react-bootstrap/Card';

import AnnonceController from '../../services/controllers/annonceController';

class searchPage extends Component {
	constructor() {
		super();
		this.state = {
			searchText: '',
			annonce: [],
			layoutColumns: 3,
			filteredData: [],
		};
		this.AnnonceController = new AnnonceController();
	}

	componentDidMount() {
		this.setState({ searchText: localStorage.getItem('searchText') });
		this.AnnonceController.getAll().then((res) => {
			console.log('ress', res);
			console.log('TEXT', this.state.searchText);
			this.setState({ annonce: res.data.data });
			this.filterAnnonces();
		});

		console.log('filtered', this.state.filteredData);
	}


	filterAnnonces() {
		let arr = [...this.state.annonce];
		let arraa = arr.filter(
			(annonce) => annonce.title.toLowerCase().includes(this.state.searchText.toLowerCase())
		);
		this.setState({ filteredData: arraa });
	}

	LayoutViewClicked(colums) {
		this.setState({
			layoutColumns: colums,
		});
	}

	openFilter = () => {
		document.querySelector('.collection-filter').style = 'left: -15px';
	};

	annonceClick = (id) => {
		const { history } = this.props;
		history.push(`/product/${id}`);
	};

	render() {
		return (
			<div>
				{/*SEO Support*/}
				<Helmet>
					<title>secondhand | Achat et vente en ligne</title>
				</Helmet>
				{/*SEO Support End */}

				<Breadcrumb title={' Recherche / ' + this.state.searchText} />

				<section className="section-b-space">
					<div className="collection-wrapper">
						<div className="container">
							<div className="row">
								<div className="col-sm-3 collection-filter">
									<StickyBox offsetTop={20} offsetBottom={20}>
										<div>
											<Filter />
											{/* <NewProduct/> */}
										</div>
									</StickyBox>
									{/*side-bar banner end here*/}
								</div>
								<div className="collection-content col">
									<div className="page-main-content ">
										<div className="">
											<div className="row">
												<div className="col-sm-12">
													{/* <div className="top-banner-wrapper"> */}
													{/* <a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/mega-menu/2.jpg`} className="img-fluid" alt=""/></a> */}
													<div className="top-banner-content small-section">
														{/* <h4>{this.state.SubCat.title}</h4> */}
														<h5>
															Lorem Ipsum is simply dummy text of the printing
															and typesetting industry.
														</h5>
														<p>
															Lorem Ipsum is simply dummy text of the printing
															and typesetting industry. Lorem Ipsum has been the
															industry's standard dummy text ever since the
															1500s, when an unknown printer took a galley of
															type and scrambled it to make a type specimen
															book. It has survived not only five centuries, but
															also the leap into electronic typesetting,
															remaining essentially unchanged. It was
															popularised in the 1960s with the release of
															Letraset sheets containing Lorem Ipsum passages,
															and more recently with desktop publishing software
															like Aldus PageMaker including versions of Lorem
															Ipsum.{' '}
														</p>
													</div>
													{/* </div> */}
													<div className="collection-product-wrapper">
														<div className="product-top-filter">
															<div className="container-fluid p-0">
																<div className="row">
																	<div className="col-xl-12">
																		<div className="filter-main-btn">
																			<span
																				onClick={this.openFilter}
																				className="filter-btn btn btn-theme"
																			>
																				<i
																					className="fa fa-filter"
																					aria-hidden="true"
																				/>{' '}
																				Filter
																			</span>
																		</div>
																	</div>
																</div>
																<div className="row">
																	<div className="col-12">
																		<FilterBar
																			onLayoutViewClicked={(colmuns) =>
																				this.LayoutViewClicked(colmuns)
																			}
																		/>
																	</div>
																</div>
															</div>
														</div>

														{/*Products Listing Component*/}
														{/* <ProductListing
															colSize={this.state.layoutColumns}
														/> */}

														{this.state.filteredData.length === 0 ? (
															<h3 style={{textAlign:'center'}}>Nous n’avons pas pu trouver les articles que vous recherchez.
															</h3>
														) : (
															<></>
														)
													}

														<div id="card-container">
															{this.state.filteredData.map((annonce) => {
																return (
																	<Card id="card-style">
																		<div
																			style={{
																				display: 'flex',
																				alignItems: 'center',
																				marginBottom: '10px',
																			}}
																		>
																			{annonce.user_id.image ? (
																				<img
																					src={`http://localhost:4000/user/userimage/${
																						annonce.user_id.image
																					}`}
																					// onClick={() => this.profil()}
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
																					// onClick={() => this.profil()}
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

																			<Card.Text style={{ fontSize: '14px' }}>
																				{annonce.user_id.name}{' '}
																				{annonce.user_id.surName}
																			</Card.Text>
																		</div>
																		<Card.Img
																			style={{
																				width: '235px',
																				height: '355px',
																			}}
																			variant="bottom"
																			src={`http://localhost:4000/annonce/annonceImage/${
																				annonce.image[0].name
																			}`}
																			onClick={() =>
																				this.annonceClick(annonce._id)
																			}
																		/>
																		<Card.Body
																			onClick={() =>
																				this.annonceClick(annonce._id)
																			}
																		>
																			<Card.Title
																				style={{
																					fontWeight: '700',
																					fontSize: '16px',
																					left: '-20px',
																					marginTop: '-10px',
																				}}
																			>
																				{annonce.title}
																			</Card.Title>
																			<Card.Title
																				style={{
																					fontSize: '14px',
																					marginTop: '-5px',
																				}}
																			>
																				{annonce.price} DT
																			</Card.Title>

																			<Card.Text
																				style={{
																					fontSize: '14px',
																					// marginTop: '-7px',
																				}}
																			>
																				wuuuj
																			</Card.Text>

																			<Card.Text
																				style={{
																					fontSize: '14px',
																					marginTop: '-7px',
																				}}
																			>
																				{annonce.date}
																			</Card.Text>
																		</Card.Body>
																	</Card>
																);
															})}
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

export default compose(withRouter)(searchPage);
