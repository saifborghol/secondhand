import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual';
import './index.scss';

// Import custom components
import store from './store';
import translations from './constants/translations';
import { getAllProducts } from './actions';

import ProtectedRoute from './components/ProtectedRoute';
import LoggedRoute from './components/LoggedRoute';

//profile

import Deposer from './components/pages/deposerannonce';

import Profile from './components/pages/profil';
import editProfile from './components/pages/editProfile';


// Layouts
import Fashion from './components/layouts/fashion/main';

// Product Pages

import NoSideBar from './components/products/no-sidebar';

//For Search
import CollectionLeftSidebar from './components/collection/collection-left-sidebar';

// Features
import Layout from './components/app';
import Cart from './components/cart';
import Compare from './components/compare/index';
import wishList from './components/wishlist';
import checkOut from './components/checkout';
import orderSuccess from './components/checkout/success-page';

// Extra Pages
import aboutUs from './components/pages/about-us';
import PageNotFound from './components/pages/404';
import lookbook from './components/pages/lookbook';
import Login from './components/pages/login';
import Register from './components/pages/register';
import Search from './components/pages/search';
import Collection from './components/pages/collection';
import ForgetPassword from './components/pages/forget-password';
import ResetPassword from './components/pages/reset-password';
import Contact from './components/pages/contact';
import Dashboard from './components/pages/dashboard';
import Faq from './components/pages/faq';

// Theme Element
import ElementTitle from './components/features/theme/element-title';
import ElementBanner from './components/features/theme/element-banner';
import ElementSlider from './components/features/theme/element-slider';
import ElementCategory from './components/features/theme/element-category';
import ElementService from './components/features/theme/element-service';
import ElementRatio from './components/features/theme/element-ratio';

// Product Elements
import ElementProductBox from './components/features/product/element-product-box';
import ElementProductSlider from './components/features/product/element-product-slider';
import ElementProductNoSlider from './components/features/product/element-product-no-slider';
import ElementMultipleSlider from './components/features/product/element-multiple-slider';
import ElementProductTab from './components/features/product/element-product-tab';

// Portfolio Features
import GridCols from './components/features/portfolio/grid-cols';
import MasonaryGridCols from './components/features/portfolio/masonary-grid-cols';

class Root extends React.Component {
	render() {
		store.dispatch(getAllProducts());

		return (
			<Provider store={store}>
				<IntlProvider translations={translations} locale="fn">
					<BrowserRouter basename={'/'}>
						<ScrollContext>
							<Switch>
								<Layout>
									<Switch>
										{/*Routes For Layouts*/}
										<Route
											exact
											path={`${process.env.PUBLIC_URL}/`}
											component={Fashion}
										/>

										{/*Profil*/}
										<ProtectedRoute
											exact
											path={`${process.env.PUBLIC_URL}/profile`}
											component={Profile}
										/>

										{/*Edit Profil*/}
										<ProtectedRoute
											exact
											path={`${process.env.PUBLIC_URL}/editprofile`}
											component={editProfile}
										/>

										<ProtectedRoute
											exact
											path={`${process.env.PUBLIC_URL}/create`}
											component={Deposer}
										/>

										{/*Routes For Single Product*/}

										<Route
											path={`${process.env.PUBLIC_URL}/product/:id`}
											component={NoSideBar}
										/>

										<Route
											path={`${process.env.PUBLIC_URL}/collection`}
											component={CollectionLeftSidebar}
										/>

										{/*Routes For custom Features*/}
										<Route
											path={`${process.env.PUBLIC_URL}/cart`}
											component={Cart}
										/>
										<Route
											path={`${process.env.PUBLIC_URL}/wishlist`}
											component={wishList}
										/>
										<Route
											path={`${process.env.PUBLIC_URL}/compare`}
											component={Compare}
										/>
										<Route
											path={`${process.env.PUBLIC_URL}/checkout`}
											component={checkOut}
										/>
										<Route
											path={`${process.env.PUBLIC_URL}/order-success`}
											component={orderSuccess}
										/>

										<Route
											path={`${process.env.PUBLIC_URL}/sales/orders`}
											component={aboutUs}
										/>

										{/*Routes For Extra Pages*/}
										<Route
											path={`${process.env.PUBLIC_URL}/pages/about-us`}
											component={aboutUs}
										/>
										<Route
											path={`${process.env.PUBLIC_URL}/pages/404`}
											component={PageNotFound}
										/>
										<Route
											path={`${process.env.PUBLIC_URL}/pages/lookbook`}
											component={lookbook}
										/>
										<LoggedRoute
											path={`${process.env.PUBLIC_URL}/login`}
											component={Login}
										/>
										<LoggedRoute
											path={`${process.env.PUBLIC_URL}/register`}
											component={Register}
										/>
										<Route
											path={`${process.env.PUBLIC_URL}/pages/search`}
											component={Search}
										/>
										<Route
											path={`${process.env.PUBLIC_URL}/pages/collection`}
											component={Collection}
										/>
										<LoggedRoute
											path={`${process.env.PUBLIC_URL}/forget-password`}
											component={ForgetPassword}
										/>
										<LoggedRoute
											path={`${process.env.PUBLIC_URL}/reset-password/:id`}
											component={ResetPassword}
										/>
										<Route
											path={`${process.env.PUBLIC_URL}/pages/contact`}
											component={Contact}
										/>
										<Route
											path={`${process.env.PUBLIC_URL}/pages/dashboard`}
											component={Dashboard}
										/>
										<Route
											path={`${process.env.PUBLIC_URL}/pages/faq`}
											component={Faq}
										/>

										{/*Features*/}
										{/*Theme Elements*/}
										<Route
											path={`${process.env.PUBLIC_URL}/features/element-title`}
											component={ElementTitle}
										/>
										<Route
											path={`${process.env.PUBLIC_URL}/features/element-banner`}
											component={ElementBanner}
										/>
										<Route
											path={`${process.env.PUBLIC_URL}/features/element-slider`}
											component={ElementSlider}
										/>
										<Route
											path={`${
												process.env.PUBLIC_URL
											}/features/element-category`}
											component={ElementCategory}
										/>
										<Route
											path={`${
												process.env.PUBLIC_URL
											}/features/element-service`}
											component={ElementService}
										/>
										<Route
											path={`${process.env.PUBLIC_URL}/features/element-ratio`}
											component={ElementRatio}
										/>

										{/*Product Elements*/}
										<Route
											path={`${
												process.env.PUBLIC_URL
											}/features/element-product-no-slider`}
											component={ElementProductBox}
										/>
										<Route
											path={`${
												process.env.PUBLIC_URL
											}/features/element-product-slider`}
											component={ElementProductSlider}
										/>
										<Route
											path={`${
												process.env.PUBLIC_URL
											}/features/element-product-no-slider`}
											component={ElementProductNoSlider}
										/>
										<Route
											path={`${
												process.env.PUBLIC_URL
											}/features/element-product-multiple-slider`}
											component={ElementMultipleSlider}
										/>
										<Route
											path={`${
												process.env.PUBLIC_URL
											}/features/element-product-tab`}
											component={ElementProductTab}
										/>

										{/*Portfolios*/}
										<Route
											path={`${
												process.env.PUBLIC_URL
											}/features/portfolio-grid/:columns`}
											component={GridCols}
										/>
										<Route
											path={`${
												process.env.PUBLIC_URL
											}/features/portfolio-masonary/:columns`}
											component={MasonaryGridCols}
										/>

										<Route path="*" component={PageNotFound} />
									</Switch>
								</Layout>
							</Switch>
						</ScrollContext>
					</BrowserRouter>
				</IntlProvider>
			</Provider>
		);
	}
}

ReactDOM.render(<Root />, document.getElementById('root'));
