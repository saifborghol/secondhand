import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

export default class Checkout extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<div className="page-holder">
				<Nav />

				{/*  Modal */}
				<div
					className="modal fade"
					id="productView"
					tabIndex={-1}
					role="dialog"
					aria-hidden="true"
				>
					<div
						className="modal-dialog modal-lg modal-dialog-centered"
						role="document"
					>
						<div className="modal-content">
							<div className="modal-body p-0">
								<div className="row align-items-stretch">
									<div className="col-lg-6 p-lg-0">
										<a
											className="product-view d-block h-100 bg-cover bg-center"
											style={{ background: 'url(img/product-5.jpg)' }}
											href="img/product-5.jpg"
											data-lightbox="productview"
											title="Red digital smartwatch"
										/>
										<a
											className="d-none"
											href="img/product-5-alt-1.jpg"
											title="Red digital smartwatch"
											data-lightbox="productview"
										/>
										<a
											className="d-none"
											href="img/product-5-alt-2.jpg"
											title="Red digital smartwatch"
											data-lightbox="productview"
										/>
									</div>
									<div className="col-lg-6">
										<button
											className="close p-4"
											type="button"
											data-dismiss="modal"
											aria-label="Close"
										>
											<span aria-hidden="true">×</span>
										</button>
										<div className="p-5 my-md-4">
											<ul className="list-inline mb-2">
												<li className="list-inline-item m-0">
													<i className="fas fa-star small text-warning" />
												</li>
												<li className="list-inline-item m-0">
													<i className="fas fa-star small text-warning" />
												</li>
												<li className="list-inline-item m-0">
													<i className="fas fa-star small text-warning" />
												</li>
												<li className="list-inline-item m-0">
													<i className="fas fa-star small text-warning" />
												</li>
												<li className="list-inline-item m-0">
													<i className="fas fa-star small text-warning" />
												</li>
											</ul>
											<h2 className="h4">Red digital smartwatch</h2>
											<p className="text-muted">$250</p>
											<p className="text-small mb-4">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												In ut ullamcorper leo, eget euismod orci. Cum sociis
												natoque penatibus et magnis dis parturient montes
												nascetur ridiculus mus. Vestibulum ultricies aliquam
												convallis.
											</p>
											<div className="row align-items-stretch mb-4">
												<div className="col-sm-7 pr-sm-0">
													<div className="border d-flex align-items-center justify-content-between py-1 px-3">
														<span className="small text-uppercase text-gray mr-4 no-select">
															Quantity
														</span>
														<div className="quantity">
															<button className="dec-btn p-0">
																<i className="fas fa-caret-left" />
															</button>
															<input
																className="form-control border-0 shadow-0 p-0"
																type="text"
																defaultValue={1}
															/>
															<button className="inc-btn p-0">
																<i className="fas fa-caret-right" />
															</button>
														</div>
													</div>
												</div>
												<div className="col-sm-5 pl-sm-0">
													<a
														className="btn btn-dark btn-sm btn-block h-100 d-flex align-items-center justify-content-center px-0"
														href="cart.html"
													>
														Add to cart
													</a>
												</div>
											</div>
											<a className="btn btn-link text-dark p-0" href="#">
												<i className="far fa-heart mr-2" />
												Add to wish list
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					{/* HERO SECTION*/}
					<section className="py-5 bg-light">
						<div className="container">
							<div className="row px-4 px-lg-5 py-lg-4 align-items-center">
								<div className="col-lg-6">
									<h1 className="h2 text-uppercase mb-0">Checkout</h1>
								</div>
								<div className="col-lg-6 text-lg-right">
									<nav aria-label="breadcrumb">
										<ol className="breadcrumb justify-content-lg-end mb-0 px-0">
											<li className="breadcrumb-item">
												<Link to="/">
													<a>Home</a>
												</Link>
											</li>
											<li className="breadcrumb-item">
												<Link to="cart">
													<a>Cart</a>
												</Link>
											</li>
											<li
												className="breadcrumb-item active"
												aria-current="page"
											>
												Checkout
											</li>
										</ol>
									</nav>
								</div>
							</div>
						</div>
					</section>
					<section className="py-5">
						{/* BILLING ADDRESS*/}
						<h2 className="h5 text-uppercase mb-4">Billing details</h2>
						<div className="row">
							<div className="col-lg-8">
								<form action="#">
									<div className="row">
										<div className="col-lg-6 form-group">
											<label
												className="text-small text-uppercase"
												htmlFor="firstName"
											>
												First name
											</label>
											<input
												className="form-control form-control-lg"
												id="firstName"
												type="text"
												placeholder="Enter your first name"
											/>
										</div>
										<div className="col-lg-6 form-group">
											<label
												className="text-small text-uppercase"
												htmlFor="lastName"
											>
												Last name
											</label>
											<input
												className="form-control form-control-lg"
												id="lastName"
												type="text"
												placeholder="Enter your last name"
											/>
										</div>
										<div className="col-lg-6 form-group">
											<label
												className="text-small text-uppercase"
												htmlFor="email"
											>
												Email address
											</label>
											<input
												className="form-control form-control-lg"
												id="email"
												type="email"
												placeholder="e.g. Jason@example.com"
											/>
										</div>
										<div className="col-lg-6 form-group">
											<label
												className="text-small text-uppercase"
												htmlFor="phone"
											>
												Phone number
											</label>
											<input
												className="form-control form-control-lg"
												id="phone"
												type="tel"
												placeholder="e.g. +02 245354745"
											/>
										</div>
										<div className="col-lg-6 form-group">
											<label
												className="text-small text-uppercase"
												htmlFor="company"
											>
												Company name (optional)
											</label>
											<input
												className="form-control form-control-lg"
												id="company"
												type="text"
												placeholder="Your company name"
											/>
										</div>
										<div className="col-lg-6 form-group">
											<label
												className="text-small text-uppercase"
												htmlFor="country"
											>
												Country
											</label>
											<select
												className="selectpicker country"
												id="country"
												data-width="fit"
												data-style="form-control form-control-lg"
												data-title="Select your country"
											/>
										</div>
										<div className="col-lg-12 form-group">
											<label
												className="text-small text-uppercase"
												htmlFor="address"
											>
												Address line 1
											</label>
											<input
												className="form-control form-control-lg"
												id="address"
												type="text"
												placeholder="House number and street name"
											/>
										</div>
										<div className="col-lg-12 form-group">
											<label
												className="text-small text-uppercase"
												htmlFor="address"
											>
												Address line 2
											</label>
											<input
												className="form-control form-control-lg"
												id="addressalt"
												type="text"
												placeholder="Apartment, Suite, Unit, etc (optional)"
											/>
										</div>
										<div className="col-lg-6 form-group">
											<label
												className="text-small text-uppercase"
												htmlFor="city"
											>
												Town/City
											</label>
											<input
												className="form-control form-control-lg"
												id="city"
												type="text"
											/>
										</div>
										<div className="col-lg-6 form-group">
											<label
												className="text-small text-uppercase"
												htmlFor="state"
											>
												State/County
											</label>
											<input
												className="form-control form-control-lg"
												id="state"
												type="text"
											/>
										</div>
										<div className="col-lg-6 form-group">
											<div className="custom-control custom-checkbox">
												<input
													className="custom-control-input"
													id="alternateAddressCheckbox"
													type="checkbox"
												/>
												<label
													className="custom-control-label text-small"
													htmlFor="alternateAddressCheckbox"
												>
													Alternate billing address
												</label>
											</div>
										</div>
										<div className="col-lg-12">
											<div className="row d-none" id="alternateAddress">
												<div className="col-12 mt-4">
													<h2 className="h4 text-uppercase mb-4">
														Alternative billing details
													</h2>
												</div>
												<div className="col-lg-6 form-group">
													<label
														className="text-small text-uppercase"
														htmlFor="firstName2"
													>
														First name
													</label>
													<input
														className="form-control form-control-lg"
														id="firstName2"
														type="text"
														placeholder="Enter your first name"
													/>
												</div>
												<div className="col-lg-6 form-group">
													<label
														className="text-small text-uppercase"
														htmlFor="lastName2"
													>
														Last name
													</label>
													<input
														className="form-control form-control-lg"
														id="lastName2"
														type="text"
														placeholder="Enter your last name"
													/>
												</div>
												<div className="col-lg-6 form-group">
													<label
														className="text-small text-uppercase"
														htmlFor="email2"
													>
														Email address
													</label>
													<input
														className="form-control form-control-lg"
														id="email2"
														type="email"
														placeholder="e.g. Jason@example.com"
													/>
												</div>
												<div className="col-lg-6 form-group">
													<label
														className="text-small text-uppercase"
														htmlFor="phone2"
													>
														Phone number
													</label>
													<input
														className="form-control form-control-lg"
														id="phone2"
														type="tel"
														placeholder="e.g. +02 245354745"
													/>
												</div>
												<div className="col-lg-6 form-group">
													<label
														className="text-small text-uppercase"
														htmlFor="company2"
													>
														Company name (optional)
													</label>
													<input
														className="form-control form-control-lg"
														id="company2"
														type="text"
														placeholder="Your company name"
													/>
												</div>
												<div className="col-lg-6 form-group">
													<label
														className="text-small text-uppercase"
														htmlFor="country2"
													>
														Country
													</label>
													<select
														className="selectpicker country"
														id="country2"
														data-width="fit"
														data-style="form-control form-control-lg"
														data-title="Select your country"
													/>
												</div>
												<div className="col-lg-12 form-group">
													<label
														className="text-small text-uppercase"
														htmlFor="address2"
													>
														Address line 1
													</label>
													<input
														className="form-control form-control-lg"
														id="address2"
														type="text"
														placeholder="House number and street name"
													/>
												</div>
												<div className="col-lg-12 form-group">
													<label
														className="text-small text-uppercase"
														htmlFor="address2"
													>
														Address line 2
													</label>
													<input
														className="form-control form-control-lg"
														id="addressalt2"
														type="text"
														placeholder="Apartment, Suite, Unit, etc (optional)"
													/>
												</div>
												<div className="col-lg-6 form-group">
													<label
														className="text-small text-uppercase"
														htmlFor="city3"
													>
														Town/City
													</label>
													<input
														className="form-control form-control-lg"
														id="city3"
														type="text"
													/>
												</div>
												<div className="col-lg-6 form-group">
													<label
														className="text-small text-uppercase"
														htmlFor="state4"
													>
														State/County
													</label>
													<input
														className="form-control form-control-lg"
														id="state4"
														type="text"
													/>
												</div>
											</div>
										</div>
										<div className="col-lg-12 form-group">
											<button className="btn btn-dark" type="submit">
												Place order
											</button>
										</div>
									</div>
								</form>
							</div>
							{/* ORDER SUMMARY*/}
							<div className="col-lg-4">
								<div className="card border-0 rounded-0 p-lg-4 bg-light">
									<div className="card-body">
										<h5 className="text-uppercase mb-4">Your order</h5>
										<ul className="list-unstyled mb-0">
											<li className="d-flex align-items-center justify-content-between">
												<strong className="small font-weight-bold">
													Red digital smartwatch
												</strong>
												<span className="text-muted small">$250</span>
											</li>
											<li className="border-bottom my-2" />
											<li className="d-flex align-items-center justify-content-between">
												<strong className="small font-weight-bold">
													Gray Nike running shoes
												</strong>
												<span className="text-muted small">$351</span>
											</li>
											<li className="border-bottom my-2" />
											<li className="d-flex align-items-center justify-content-between">
												<strong className="text-uppercase small font-weight-bold">
													Total
												</strong>
												<span>$601</span>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		);
	}
}
