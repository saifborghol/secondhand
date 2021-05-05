import React, { Component, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartPage from '../components/common/headers/common/cart-header';
import { selectProducts } from '../Features/cart/cartSlice';

function CartContainer() {
	const products = useSelector(selectProducts);

	const [Total, setTotal] = useState(0);

	useEffect(() => {
		let sum = 0;

		for (const article of products) {
			sum += article.price;
		}

		setTotal(sum);
	}, []);

	return (
		<li className="onhover-div mobile-cart">
			<div className="cart-qty-cls">{products.length}</div>
			<Link to={`${process.env.PUBLIC_URL}/cart`}>
				<img
					src={`${process.env.PUBLIC_URL}/assets/images/icon/cart.png`}
					className="img-fluid"
					alt=""
				/>
				<i className="fa fa-shopping-cart" />
			</Link>
			<ul className="show-div shopping-cart">
				{products.map((item, index) => (
					<CartPage
						key={index}
						item={item}
						total={item.price}
						// removeFromCart={() => removeFromCart(item)}
					/>
				))}
				{products.length > 0 ? (
					<div>
						<li>
							<div className="total">
								<h5>
									Total : <span>{Total} DT</span>
								</h5>
							</div>
						</li>
						<li>
							<div className="buttons">
								<Link
									to={`${process.env.PUBLIC_URL}/cart`}
									className="view-cart"
								>
									Voir le panier
								</Link>
								<Link
									to={`${process.env.PUBLIC_URL}/checkout`}
									className="checkout"
								>
									checkout
								</Link>
							</div>
						</li>
					</div>
				) : (
					<li>
						<h5>Votre carte est vide.</h5>
					</li>
				)}
			</ul>
		</li>
	);
}

export default CartContainer;
