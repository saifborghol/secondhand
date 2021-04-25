import React, { Component } from 'react';
import Slider from 'react-slick';

export default class SimpleSlider extends Component {
	render() {
		const settings = {
			dots: true,
			fade: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		};
		return (
			<div className="sliderContainer">
				<style>{cssstyle}</style>
				<h2>Fade</h2>
				<Slider {...settings}>
					<div>
						<img src="https://picsum.photos/id/100/400/300" />
					</div>
					<div>
						<img src="https://picsum.photos/id/101/400/300" />
					</div>
					<div>
						<img src="https://picsum.photos/id/102/400/300" />
					</div>
					<div>
						<img src="https://picsum.photos/id/103/400/300" />
					</div>
				</Slider>
			</div>
		);
	}
}

const cssstyle = `
.slick-next:before, .slick-prev:before {
    color: #000;
}
`