import React from 'react';
import { Link } from 'react-router-dom';

function LogoImage(props) {
	return (
		<Link to={`${process.env.PUBLIC_URL}/`}>
			<img src="/assets/images/icon/logo.svg" alt="" className="img-fluid" />
		</Link>
	);
}

export default LogoImage;
