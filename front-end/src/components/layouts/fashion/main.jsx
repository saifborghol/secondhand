import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import '../../common/index.scss';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

// Import custom components

import SpecialProducts from '../common/products';

import {
	svgFreeShipping,
	svgservice,
	svgoffer,
} from '../../../services/script';

class Fashion extends Component {
	componentDidMount() {
		document.getElementById('color').setAttribute('href', `#`);
	}

	render() {
		return (
			<div>
				<Helmet>
					<title>secondhand | Achat et vente en ligne</title>
				</Helmet>
				{/*Home Slider*/}
				<section className="p-0">
					<Slider className="slide-1 home-slider">
						<div>
							<div className="home home1 text-center">
								<div className="container">
									<div className="row">
										<div className="col">
											<div className="slider-contain">
												<div>
													<h4>Bienvenue à Secondhand</h4>
													{!localStorage.getItem('userId') ? (
														<Link
															to={`${process.env.PUBLIC_URL}/login`}
															className="btn btn-solid"
														>
															Commencer à vendre
														</Link>
													) : (
														<Link
															to={`${process.env.PUBLIC_URL}`}
															className="btn btn-solid"
														>
															Commencer à vendre
														</Link>
													)}
												</div>
											</div>
										</div>*
									</div>
								</div>
							</div>
						</div>
					</Slider>
				</section>

				{/* MAP FOR PRODUCTS */}

				<SpecialProducts />

				{/*service layout*/}
				<div className="container">
					<section className="service border-section small-section ">
						<div className="row">
							<div className="col-md-6 service-block">
								<div className="media">
									<div dangerouslySetInnerHTML={{ __html: svgFreeShipping }} />
									<div className="media-body">
										<h4>livraison gratuite</h4>
										<p>livraison gratuite sur toute la tunisie</p>
									</div>
								</div>
							</div>
							<div className="col-md-6 service-block">
								<div className="media">
									<div dangerouslySetInnerHTML={{ __html: svgservice }} />
									<div className="media-body">
										<h4>service 24 X 7</h4>
										<p>service en ligne pour les nouveaux clients</p>
									</div>
								</div>
							</div>
							{/* <div className="col-md-4 service-block">
								<div className="media">
									<div dangerouslySetInnerHTML={{ __html: svgoffer }} />
									<div className="media-body">
										<h4>festival offer</h4>
										<p>new online special festival offer</p>
									</div>
								</div>
							</div> */}
						</div>
					</section>
				</div>
			</div>
		);
	}
}

export default Fashion;
