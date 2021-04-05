import { STATE_LOGIN, STATE_SIGNUP } from 'components/AuthForm';
import GAListener from 'components/GAListener';
import { EmptyLayout, LayoutRoute, MainLayout } from 'components/Layout';
import PageSpinner from 'components/PageSpinner';
import AuthPage from 'pages/AuthPage';
import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './styles/reduction.scss';

import ProtectedRoute from "./components/ProtectedRoute"

const DashboardPage = React.lazy(() => import('pages/DashboardPage'));


const Test = React.lazy(() => import('pages/Test'));

const AddUser = React.lazy(() => import('pages/project/users/AddUser'));
const ListUsers = React.lazy(() => import('pages/project/users/ListUsers'));
const UpdateUsers = React.lazy(() => import('pages/project/users/UpdateUsers'));

const ListAnnonces = React.lazy(() =>
	import('pages/project/annonces/ListAnnonces'),
);

const AddCategory = React.lazy(() =>
	import('pages/project/categories/AddCategory'),
);
const ListCategories = React.lazy(() =>
	import('pages/project/categories/ListCategories'),
);
const UpdateCategory = React.lazy(() =>
	import('pages/project/categories/UpdateCategory'),
);

const AddSubCategory = React.lazy(() =>
	import('pages/project/subCategories/AddSubCategory'),
);
const ListSubCategories = React.lazy(() =>
	import('pages/project/subCategories/ListSubCategories'),
);
const UpdateSubCategory = React.lazy(() =>
	import('pages/project/subCategories/UpdateSubCategory'),
);

const getBasename = () => {
	return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};



class App extends React.Component {
	render() {
		return (
			<BrowserRouter basename={getBasename()}>
				<GAListener>
					<Switch>
						<LayoutRoute
							exact
							path="/"
							layout={EmptyLayout}
							component={props => (
								<AuthPage {...props} authState={STATE_LOGIN} />
							)}
						/>
						

						<MainLayout breakpoint={this.props.breakpoint}>
							<React.Suspense fallback={<PageSpinner />}>
								<Route
									exact
									path="/main"
									component={DashboardPage}
								/>
								
								<Route exact path="/test" component={Test} />
								{/* user */}
								<Route
									exact
									path="/user/addUser"
									component={AddUser}
								/>
								<ProtectedRoute
									exact
									path="/user"
									component={ListUsers}
								/>
								<ProtectedRoute
									exact
									path="/user/updateUser"
									component={UpdateUsers}
								/>

								{/* Annonce */}
								
								<ProtectedRoute
									exact
									path="/annonce"
									component={ListAnnonces}
								/>
								

								{/* Category */}
								<ProtectedRoute
									exact
									path="/category/addCategory"
									component={AddCategory}
								/>
								<ProtectedRoute
									exact
									path="/category"
									component={ListCategories}
								/>
								<ProtectedRoute
									exact
									path="/category/updateCategory"
									component={UpdateCategory}
								/>

								{/* SubCategory */}
								<ProtectedRoute
									exact
									path="/subcategory/addSubCategory"
									component={AddSubCategory}
								/>
								<ProtectedRoute
									exact
									path="/subcategory/getAll"
									component={ListSubCategories}
								/>
								<ProtectedRoute
									exact
									path="/subcategory/updateSubCategory"
									component={UpdateSubCategory}
								/>
							</React.Suspense>
						</MainLayout>
						<Redirect to="/" />
					</Switch>
				</GAListener>
			</BrowserRouter>
		);
	}
}

const query = ({ width }) => {
	if (width < 575) {
		return { breakpoint: 'xs' };
	}

	if (576 < width && width < 767) {
		return { breakpoint: 'sm' };
	}

	if (768 < width && width < 991) {
		return { breakpoint: 'md' };
	}

	if (992 < width && width < 1199) {
		return { breakpoint: 'lg' };
	}

	if (width > 1200) {
		return { breakpoint: 'xl' };
	}

	return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);
