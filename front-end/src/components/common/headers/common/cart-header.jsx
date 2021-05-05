import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const CartHeader = ({ item, total, symbol, removeFromCart }) => (
	<li>
		<div className="media">
			<Link to={`${process.env.PUBLIC_URL}/product/${item._id}`}>
				<img
					alt=""
					className="mr-3"
					src={`http://localhost:4000/annonce/annonceImage/${
						item.image[0].name
					}`}
				/>
			</Link>
			<div className="media-body">
				<Link to={`${process.env.PUBLIC_URL}/product/${item._id}`}>
					<h4>{item.title}</h4>
				</Link>
				<h4>
					<span>{item.price}</span>
				</h4>
			</div>
		</div>
		{/*<span>{cart}</span>*/}
		<div className="close-circle">
			<a href={null} onClick={removeFromCart}>
				<i className="fa fa-times" aria-hidden="true" />
			</a>
		</div>
	</li>
);

export default CartHeader;
