import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PaymentRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={props => {
				if (localStorage.getItem('payment') === 'true') {
					return <Component {...props} />;
				} else {
					return <Redirect to="/" />;
				}
			}}
		/>
	);
};

export default PaymentRoute;
