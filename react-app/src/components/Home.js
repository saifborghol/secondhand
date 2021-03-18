import React, { Component } from 'react';
import Nav from './Nav';

export default class Home extends Component {
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
											style={{ background: 'url(./assets/img/product-5.jpg)' }}
											href="./assets/img/product-5.jpg"
											data-lightbox="productview"
											title="Red digital smartwatch"
										/>
										<a
											className="d-none"
											href="./assets/img/product-5-alt-1.jpg"
											title="Red digital smartwatch"
											data-lightbox="productview"
										/>
										<a
											className="d-none"
											href="./assets/img/product-5-alt-2.jpg"
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
				{/* HERO SECTION*/}
				<div className="container">
					<section
						className="hero pb-3 bg-cover bg-center d-flex align-items-center"
						// style={{ background: 'url(./assets/img/hero-banner-alt.jpg)' }}
					>
						<div className="container py-5">
							<div className="row px-4 px-lg-5">
								<div className="col-lg-6">
									<p className="text-muted small text-uppercase mb-2">
										New Inspiration 2020
									</p>
									<h1 className="h2 text-uppercase mb-3">
										20% off on new season
									</h1>
									<a className="btn btn-dark" href="shop.html">
										Browse collections
									</a>
								</div>
							</div>
						</div>
					</section>
					{/* CATEGORIES SECTION*/}
					<section className="pt-5">
						<header className="text-center">
							<p className="small text-muted small text-uppercase mb-1">
								Carefully created collections
							</p>
							<h2 className="h5 text-uppercase mb-4">Browse our categories</h2>
						</header>
						<div className="row">
							<div className="col-md-4 mb-4 mb-md-0">
								<a className="category-item" href="shop.html">
									<img
										className="img-fluid"
										src="./assets/img/cat-img-1.jpg"
										alt
									/>
									<strong className="category-item-title">Clothes</strong>
								</a>
							</div>
							<div className="col-md-4 mb-4 mb-md-0">
								<a className="category-item mb-4" href="shop.html">
									<img
										className="img-fluid"
										src="./assets/img/cat-img-2.jpg"
										alt
									/>
									<strong className="category-item-title">Shoes</strong>
								</a>
								<a className="category-item" href="shop.html">
									<img
										className="img-fluid"
										src="./assets/img/cat-img-3.jpg"
										alt
									/>
									<strong className="category-item-title">Watches</strong>
								</a>
							</div>
							<div className="col-md-4">
								<a className="category-item" href="shop.html">
									<img
										className="img-fluid"
										src="./assets/img/cat-img-4.jpg"
										alt
									/>
									<strong className="category-item-title">Electronics</strong>
								</a>
							</div>
						</div>
					</section>
					{/* TRENDING PRODUCTS*/}
					<section className="py-5">
						<header>
							<p className="small text-muted small text-uppercase mb-1">
								Made the hard way
							</p>
							<h2 className="h5 text-uppercase mb-4">Top trending products</h2>
						</header>
						<div className="row">
							{/* PRODUCT*/}
							<div className="col-xl-3 col-lg-4 col-sm-6">
								<div className="product text-center">
									<div className="position-relative mb-3">
										<div className="badge text-white badge-" />
										<a className="d-block" href="detail.html">
											<img
												className="img-fluid w-100"
												src="./assets/img/product-1.jpg"
												alt="..."
											/>
										</a>
										<div className="product-overlay">
											<ul className="mb-0 list-inline">
												<li className="list-inline-item m-0 p-0">
													<a className="btn btn-sm btn-outline-dark" href="#">
														<i className="far fa-heart" />
													</a>
												</li>
												<li className="list-inline-item m-0 p-0">
													<a className="btn btn-sm btn-dark" href="cart.html">
														Add to cart
													</a>
												</li>
												<li className="list-inline-item mr-0">
													<a
														className="btn btn-sm btn-outline-dark"
														href="#productView"
														data-toggle="modal"
													>
														<i className="fas fa-expand" />
													</a>
												</li>
											</ul>
										</div>
									</div>
									<h6>
										<a className="reset-anchor" href="detail.html">
											Kui Ye Chen’s AirPods
										</a>
									</h6>
									<p className="small text-muted">$250</p>
								</div>
							</div>
							{/* PRODUCT*/}
							<div className="col-xl-3 col-lg-4 col-sm-6">
								<div className="product text-center">
									<div className="position-relative mb-3">
										<div className="badge text-white badge-primary">Sale</div>
										<a className="d-block" href="detail.html">
											<img
												className="img-fluid w-100"
												src="./assets/img/product-2.jpg"
												alt="..."
											/>
										</a>
										<div className="product-overlay">
											<ul className="mb-0 list-inline">
												<li className="list-inline-item m-0 p-0">
													<a className="btn btn-sm btn-outline-dark" href="#">
														<i className="far fa-heart" />
													</a>
												</li>
												<li className="list-inline-item m-0 p-0">
													<a className="btn btn-sm btn-dark" href="cart.html">
														Add to cart
													</a>
												</li>
												<li className="list-inline-item mr-0">
													<a
														className="btn btn-sm btn-outline-dark"
														href="#productView"
														data-toggle="modal"
													>
														<i className="fas fa-expand" />
													</a>
												</li>
											</ul>
										</div>
									</div>
									<h6>
										<a className="reset-anchor" href="detail.html">
											Air Jordan 12 gym red
										</a>
									</h6>
									<p className="small text-muted">$300</p>
								</div>
							</div>
							{/* PRODUCT*/}
							<div className="col-xl-3 col-lg-4 col-sm-6">
								<div className="product text-center">
									<div className="position-relative mb-3">
										<div className="badge text-white badge-" />
										<a className="d-block" href="detail.html">
											<img
												className="img-fluid w-100"
												src="./assets/img/product-3.jpg"
												alt="..."
											/>
										</a>
										<div className="product-overlay">
											<ul className="mb-0 list-inline">
												<li className="list-inline-item m-0 p-0">
													<a className="btn btn-sm btn-outline-dark" href="#">
														<i className="far fa-heart" />
													</a>
												</li>
												<li className="list-inline-item m-0 p-0">
													<a className="btn btn-sm btn-dark" href="cart.html">
														Add to cart
													</a>
												</li>
												<li className="list-inline-item mr-0">
													<a
														className="btn btn-sm btn-outline-dark"
														href="#productView"
														data-toggle="modal"
													>
														<i className="fas fa-expand" />
													</a>
												</li>
											</ul>
										</div>
									</div>
									<h6>
										<a className="reset-anchor" href="detail.html">
											Cyan cotton t-shirt
										</a>
									</h6>
									<p className="small text-muted">$25</p>
								</div>
							</div>
							{/* PRODUCT*/}
							<div className="col-xl-3 col-lg-4 col-sm-6">
								<div className="product text-center">
									<div className="position-relative mb-3">
										<div className="badge text-white badge-info">New</div>
										<a className="d-block" href="detail.html">
											<img
												className="img-fluid w-100"
												src="./assets/img/product-4.jpg"
												alt="..."
											/>
										</a>
										<div className="product-overlay">
											<ul className="mb-0 list-inline">
												<li className="list-inline-item m-0 p-0">
													<a className="btn btn-sm btn-outline-dark" href="#">
														<i className="far fa-heart" />
													</a>
												</li>
												<li className="list-inline-item m-0 p-0">
													<a className="btn btn-sm btn-dark" href="cart.html">
														Add to cart
													</a>
												</li>
												<li className="list-inline-item mr-0">
													<a
														className="btn btn-sm btn-outline-dark"
														href="#productView"
														data-toggle="modal"
													>
														<i className="fas fa-expand" />
													</a>
												</li>
											</ul>
										</div>
									</div>
									<h6>
										<a className="reset-anchor" href="detail.html">
											Timex Unisex Originals
										</a>
									</h6>
									<p className="small text-muted">$351</p>
								</div>
							</div>
							{/* PRODUCT*/}
							<div className="col-xl-3 col-lg-4 col-sm-6">
								<div className="product text-center">
									<div className="position-relative mb-3">
										<div className="badge text-white badge-danger">Sold</div>
										<a className="d-block" href="detail.html">
											<img
												className="img-fluid w-100"
												src="./assets/img/product-5.jpg"
												alt="..."
											/>
										</a>
										<div className="product-overlay">
											<ul className="mb-0 list-inline">
												<li className="list-inline-item m-0 p-0">
													<a className="btn btn-sm btn-outline-dark" href="#">
														<i className="far fa-heart" />
													</a>
												</li>
												<li className="list-inline-item m-0 p-0">
													<a className="btn btn-sm btn-dark" href="cart.html">
														Add to cart
													</a>
												</li>
												<li className="list-inline-item mr-0">
													<a
														className="btn btn-sm btn-outline-dark"
														href="#productView"
														data-toggle="modal"
													>
														<i className="fas fa-expand" />
													</a>
												</li>
											</ul>
										</div>
									</div>
									<h6>
										<a className="reset-anchor" href="detail.html">
											Red digital smartwatch
										</a>
									</h6>
									<p className="small text-muted">$250</p>
								</div>
							</div>
							{/* PRODUCT*/}
							<div className="col-xl-3 col-lg-4 col-sm-6">
								<div className="product text-center">
									<div className="position-relative mb-3">
										<div className="badge text-white badge-" />
										<a className="d-block" href="detail.html">
											<img
												className="img-fluid w-100"
												src="./assets/img/product-6.jpg"
												alt="..."
											/>
										</a>
										<div className="product-overlay">
											<ul className="mb-0 list-inline">
												<li className="list-inline-item m-0 p-0">
													<a className="btn btn-sm btn-outline-dark" href="#">
														<i className="far fa-heart" />
													</a>
												</li>
												<li className="list-inline-item m-0 p-0">
													<a className="btn btn-sm btn-dark" href="cart.html">
														Add to cart
													</a>
												</li>
												<li className="list-inline-item mr-0">
													<a
														className="btn btn-sm btn-outline-dark"
														href="#productView"
														data-toggle="modal"
													>
														<i className="fas fa-expand" />
													</a>
												</li>
											</ul>
										</div>
									</div>
									<h6>
										<a className="reset-anchor" href="detail.html">
											Nike air max 95
										</a>
									</h6>
									<p className="small text-muted">$300</p>
								</div>
							</div>
							{/* PRODUCT*/}
							<div className="col-xl-3 col-lg-4 col-sm-6">
								<div className="product text-center">
									<div className="position-relative mb-3">
										<div className="badge text-white badge-" />
										<a className="d-block" href="detail.html">
											<img
												className="img-fluid w-100"
												src="./assets/img/product-7.jpg"
												alt="..."
											/>
										</a>
										<div className="product-overlay">
											<ul className="mb-0 list-inline">
												<li className="list-inline-item m-0 p-0">
													<a className="btn btn-sm btn-outline-dark" href="#">
														<i className="far fa-heart" />
													</a>
												</li>
												<li className="list-inline-item m-0 p-0">
													<a className="btn btn-sm btn-dark" href="cart.html">
														Add to cart
													</a>
												</li>
												<li className="list-inline-item mr-0">
													<a
														className="btn btn-sm btn-outline-dark"
														href="#productView"
														data-toggle="modal"
													>
														<i className="fas fa-expand" />
													</a>
												</li>
											</ul>
										</div>
									</div>
									<h6>
										<a className="reset-anchor" href="detail.html">
											Joemalone Women prefume
										</a>
									</h6>
									<p className="small text-muted">$25</p>
								</div>
							</div>
							{/* PRODUCT*/}
							<div className="col-xl-3 col-lg-4 col-sm-6">
								<div className="product text-center">
									<div className="position-relative mb-3">
										<div className="badge text-white badge-" />
										<a className="d-block" href="detail.html">
											<img
												className="img-fluid w-100"
												src="./assets/img/product-8.jpg"
												alt="..."
											/>
										</a>
										<div className="product-overlay">
											<ul className="mb-0 list-inline">
												<li className="list-inline-item m-0 p-0">
													<a className="btn btn-sm btn-outline-dark" href="#">
														<i className="far fa-heart" />
													</a>
												</li>
												<li className="list-inline-item m-0 p-0">
													<a className="btn btn-sm btn-dark" href="cart.html">
														Add to cart
													</a>
												</li>
												<li className="list-inline-item mr-0">
													<a
														className="btn btn-sm btn-outline-dark"
														href="#productView"
														data-toggle="modal"
													>
														<i className="fas fa-expand" />
													</a>
												</li>
											</ul>
										</div>
									</div>
									<h6>
										<a className="reset-anchor" href="detail.html">
											Apple Watch
										</a>
									</h6>
									<p className="small text-muted">$351</p>
								</div>
							</div>
						</div>
					</section>
					{/* SERVICES*/}
					<section className="py-5 bg-light">
						<div className="container">
							<div className="row text-center">
								<div className="col-lg-4 mb-3 mb-lg-0">
									<div className="d-inline-block">
										<div className="media align-items-end">
											<svg className="svg-icon svg-icon-big svg-icon-light">
												<use xlinkHref="#delivery-time-1" />
											</svg>
											<div className="media-body text-left ml-3">
												<h6 className="text-uppercase mb-1">Free shipping</h6>
												<p className="text-small mb-0 text-muted">
													Free shipping worlwide
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 mb-3 mb-lg-0">
									<div className="d-inline-block">
										<div className="media align-items-end">
											<svg className="svg-icon svg-icon-big svg-icon-light">
												<use xlinkHref="#helpline-24h-1" />
											</svg>
											<div className="media-body text-left ml-3">
												<h6 className="text-uppercase mb-1">24 x 7 service</h6>
												<p className="text-small mb-0 text-muted">
													Free shipping worlwide
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="d-inline-block">
										<div className="media align-items-end">
											<svg className="svg-icon svg-icon-big svg-icon-light">
												<use xlinkHref="#label-tag-1" />
											</svg>
											<div className="media-body text-left ml-3">
												<h6 className="text-uppercase mb-1">Festival offer</h6>
												<p className="text-small mb-0 text-muted">
													Free shipping worlwide
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/* NEWSLETTER*/}
					<section className="py-5">
						<div className="container p-0">
							<div className="row">
								<div className="col-lg-6 mb-3 mb-lg-0">
									<h5 className="text-uppercase">Let's be friends!</h5>
									<p className="text-small text-muted mb-0">
										Nisi nisi tempor consequat laboris nisi.
									</p>
								</div>
								<div className="col-lg-6">
									<form action="#">
										<div className="input-group flex-column flex-sm-row mb-3">
											<input
												className="form-control form-control-lg py-3"
												type="email"
												placeholder="Enter your email address"
												aria-describedby="button-addon2"
											/>
											<div className="input-group-append">
												<button
													className="btn btn-dark btn-block"
													id="button-addon2"
													type="submit"
												>
													Subscribe
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</section>
				</div>
				<footer className="bg-dark text-white">
					<div className="container py-4">
						<div className="row py-5">
							<div className="col-md-4 mb-3 mb-md-0">
								<h6 className="text-uppercase mb-3">Customer services</h6>
								<ul className="list-unstyled mb-0">
									<li>
										<a className="footer-link" href="#">
											Help &amp; Contact Us
										</a>
									</li>
									<li>
										<a className="footer-link" href="#">
											Returns &amp; Refunds
										</a>
									</li>
									<li>
										<a className="footer-link" href="#">
											Online Stores
										</a>
									</li>
									<li>
										<a className="footer-link" href="#">
											Terms &amp; Conditions
										</a>
									</li>
								</ul>
							</div>
							<div className="col-md-4 mb-3 mb-md-0">
								<h6 className="text-uppercase mb-3">Company</h6>
								<ul className="list-unstyled mb-0">
									<li>
										<a className="footer-link" href="#">
											What We Do
										</a>
									</li>
									<li>
										<a className="footer-link" href="#">
											Available Services
										</a>
									</li>
									<li>
										<a className="footer-link" href="#">
											Latest Posts
										</a>
									</li>
									<li>
										<a className="footer-link" href="#">
											FAQs
										</a>
									</li>
								</ul>
							</div>
							<div className="col-md-4">
								<h6 className="text-uppercase mb-3">Social media</h6>
								<ul className="list-unstyled mb-0">
									<li>
										<a className="footer-link" href="#">
											Twitter
										</a>
									</li>
									<li>
										<a className="footer-link" href="#">
											Instagram
										</a>
									</li>
									<li>
										<a className="footer-link" href="#">
											Tumblr
										</a>
									</li>
									<li>
										<a className="footer-link" href="#">
											Pinterest
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div
							className="border-top pt-4"
							style={{ borderColor: '#1d1d1d !important' }}
						>
							<div className="row">
								<div className="col-lg-6">
									<p className="small text-muted mb-0">
										© 2020 All rights reserved.
									</p>
								</div>
								<div className="col-lg-6 text-lg-right">
									<p className="small text-muted mb-0">
										Template designed by
										<a
											className="text-white reset-anchor"
											href="https://bootstraptemple.com/p/bootstrap-ecommerce"
										>
											Bootstrap Temple
										</a>
									</p>
								</div>
							</div>
						</div>
					</div>
				</footer>
				
			</div>
		);
	}
}
