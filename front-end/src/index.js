import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual';
import './index.scss';

// Import custom components
import translations from './constants/translations';
import { getAllProducts } from './actions';

import ProtectedRoute from './components/ProtectedRoute';
import LoggedRoute from './components/LoggedRoute';

//profile

import Deposer from './components/pages/deposerannonce';
import EditAnnonce from './components/pages/editAnnonce';

import Profile from './components/pages/profil';
import editProfile from './components/pages/editProfile';
// Layouts
import Fashion from './components/layouts/fashion/main';

// Product Pages

import NoSideBar from './components/products/no-sidebar';

//For Search
import CollectionLeftSidebar from './components/collection/collection-left-sidebar';
import searchPage from './components/collection/searchPage';

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
import {Provider} from 'react-redux'
import {store} from './app/store'

class Root extends React.Component {
	render() {
		

		return (
				// <IntlProvider translations={translations} locale="fn">
				<Provider store={store}>
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
											path={`${process.env.PUBLIC_URL}/user/:id`}
											component={Profile}
										/>

										{/*Edit Profil*/}
										<ProtectedRoute
											exact
											path={`${process.env.PUBLIC_URL}/useredit/:id`}
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
											path={`${process.env.PUBLIC_URL}/productedit/:id`}
											component={EditAnnonce}
										/>

										<Route
											path={`${process.env.PUBLIC_URL}/category/:title`}
											component={CollectionLeftSidebar}
										/>

										<Route
											path={`${process.env.PUBLIC_URL}/search/:text`}
											component={searchPage}
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
										<Route path="*" component={PageNotFound} />
									</Switch>
								</Layout>
							</Switch>
						</ScrollContext>
					</BrowserRouter>
					</Provider>
				// </IntlProvider>
		);
	}
}

ReactDOM.render(<Root />, document.getElementById('root'));
