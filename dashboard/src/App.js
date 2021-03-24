import { STATE_LOGIN, STATE_SIGNUP } from 'components/AuthForm';
import GAListener from 'components/GAListener';
import { EmptyLayout, LayoutRoute, MainLayout } from 'components/Layout';
import PageSpinner from 'components/PageSpinner';
import AuthPage from 'pages/AuthPage';
import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './styles/reduction.scss';

const AlertPage = React.lazy(() => import('pages/AlertPage'));
const AuthModalPage = React.lazy(() => import('pages/AuthModalPage'));
const BadgePage = React.lazy(() => import('pages/BadgePage'));
const ButtonGroupPage = React.lazy(() => import('pages/ButtonGroupPage'));
const ButtonPage = React.lazy(() => import('pages/ButtonPage'));
const CardPage = React.lazy(() => import('pages/CardPage'));
const ChartPage = React.lazy(() => import('pages/ChartPage'));
const DashboardPage = React.lazy(() => import('pages/DashboardPage'));
const DropdownPage = React.lazy(() => import('pages/DropdownPage'));
const FormPage = React.lazy(() => import('pages/FormPage'));
const InputGroupPage = React.lazy(() => import('pages/InputGroupPage'));
const ModalPage = React.lazy(() => import('pages/ModalPage'));
const ProgressPage = React.lazy(() => import('pages/ProgressPage'));
const TablePage = React.lazy(() => import('pages/TablePage'));
const TypographyPage = React.lazy(() => import('pages/TypographyPage'));
const WidgetPage = React.lazy(() => import('pages/WidgetPage'));

const Test = React.lazy(() => import('pages/Test'));

const AddUser = React.lazy(() => import('pages/project/users/AddUser'));
const ListUsers = React.lazy(() => import('pages/project/users/ListUsers'));
const UpdateUsers = React.lazy(() => import('pages/project/users/UpdateUsers'));

const AddProduct = React.lazy(() =>
	import('pages/project/products/AddProduct'),
);
const ListProducts = React.lazy(() =>
	import('pages/project/products/ListProducts'),
);
const UpdateProducts = React.lazy(() =>
	import('pages/project/products/UpdateProducts'),
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
							path="/login"
							layout={EmptyLayout}
							component={props => (
								<AuthPage {...props} authState={STATE_LOGIN} />
							)}
						/>
						<LayoutRoute
							exact
							path="/signup"
							layout={EmptyLayout}
							component={props => (
								<AuthPage {...props} authState={STATE_SIGNUP} />
							)}
						/>

						<MainLayout breakpoint={this.props.breakpoint}>
							<React.Suspense fallback={<PageSpinner />}>
								<Route
									exact
									path="/"
									component={DashboardPage}
								/>
								<Route
									exact
									path="/login-modal"
									component={AuthModalPage}
								/>
								<Route
									exact
									path="/buttons"
									component={ButtonPage}
								/>
								<Route
									exact
									path="/cards"
									component={CardPage}
								/>
								<Route
									exact
									path="/widgets"
									component={WidgetPage}
								/>
								<Route
									exact
									path="/typography"
									component={TypographyPage}
								/>
								<Route
									exact
									path="/alerts"
									component={AlertPage}
								/>
								<Route
									exact
									path="/tables"
									component={TablePage}
								/>
								<Route
									exact
									path="/badges"
									component={BadgePage}
								/>
								<Route
									exact
									path="/button-groups"
									component={ButtonGroupPage}
								/>
								<Route
									exact
									path="/dropdowns"
									component={DropdownPage}
								/>
								<Route
									exact
									path="/progress"
									component={ProgressPage}
								/>
								<Route
									exact
									path="/modals"
									component={ModalPage}
								/>
								<Route
									exact
									path="/forms"
									component={FormPage}
								/>
								<Route
									exact
									path="/input-groups"
									component={InputGroupPage}
								/>
								<Route
									exact
									path="/charts"
									component={ChartPage}
								/>
								<Route exact path="/test" component={Test} />
								{/* user */}
								<Route
									exact
									path="/user/addUser"
									component={AddUser}
								/>
								<Route
									exact
									path="/user/getAll"
									component={ListUsers}
								/>
								<Route
									exact
									path="/user/updateUser"
									component={UpdateUsers}
								/>

								{/* product */}
								<Route
									exact
									path="/product/addProduct"
									component={AddProduct}
								/>
								<Route
									exact
									path="/product/getAll"
									component={ListProducts}
								/>
								<Route
									exact
									path="/product/updateProduct"
									component={UpdateProducts}
								/>

								{/* Category */}
								<Route
									exact
									path="/category/addCategory"
									component={AddCategory}
								/>
								<Route
									exact
									path="/category/getAll"
									component={ListCategories}
								/>
								<Route
									exact
									path="/category/updateCategory"
									component={UpdateCategory}
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
