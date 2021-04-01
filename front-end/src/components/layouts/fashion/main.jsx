import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import '../../common/index.scss';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

// Import custom components
import TopCollection from './top-collection';
import SpecialProducts from '../common/products';
import BlogSection from '../common/blogsection';
import Instagram from '../common/instagram';
import LogoBlock from '../common/logo-block';
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
					<title>secondhand</title>
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
													<Link
														to={`${
															process.env.PUBLIC_URL
														}/no-sidebar/collection`}
														className="btn btn-solid"
													>
														Commencer à vendre
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						
					</Slider>
				</section>

				<SpecialProducts />

				{/*service layout*/}
				<div className="container">
					<section className="service border-section small-section ">
						<div className="row">
							<div className="col-md-4 service-block">
								<div className="media">
									<div dangerouslySetInnerHTML={{ __html: svgFreeShipping }} />
									<div className="media-body">
										<h4>free shipping</h4>
										<p>free shipping world wide</p>
									</div>
								</div>
							</div>
							<div className="col-md-4 service-block">
								<div className="media">
									<div dangerouslySetInnerHTML={{ __html: svgservice }} />
									<div className="media-body">
										<h4>24 X 7 service</h4>
										<p>online service for new customer</p>
									</div>
								</div>
							</div>
							<div className="col-md-4 service-block">
								<div className="media">
									<div dangerouslySetInnerHTML={{ __html: svgoffer }} />
									<div className="media-body">
										<h4>festival offer</h4>
										<p>new online special festival offer</p>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
				{/*Blog Section end*/}
				<div className="container">
					<div className="row">
						<div className="col">
							<div className="title1 section-t-space">
								<h4>Recent Story</h4>
								<h2 className="title-inner1">from the blog</h2>
							</div>
						</div>
					</div>
				</div>
				<section className="blog p-t-0">
					<BlogSection />
				</section>
				{/*Blog Section End*/}

				<Instagram />

				{/*logo section*/}
				<LogoBlock />
				{/*logo section end*/}
			</div>
		);
	}
}

export default Fashion;
