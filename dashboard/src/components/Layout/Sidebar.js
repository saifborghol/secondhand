import logo from 'assets/img/logo/logo2.png';
import sidebarBgImage from 'assets/img/sidebar/sidebar-4.jpg';
import SourceLink from 'components/SourceLink';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import {
	MdAccountCircle,
	MdBorderAll,
	MdChromeReaderMode,
	MdDashboard,
	MdExtension,
	MdInsertChart,
	MdKeyboardArrowDown,
	MdPages,
	MdSend,
	MdViewCarousel,
	MdViewList,
	MdWeb,
	MdWidgets,
} from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import {
	// UncontrolledTooltip,
	Collapse,
	Nav,
	Navbar,
	NavItem,
	NavLink as BSNavLink,
} from 'reactstrap';
import bn from 'utils/bemnames';

const sidebarBackground = {
	backgroundImage: `url("${sidebarBgImage}")`,
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
};

const navContents = [
	{
		to: '/category',
		name: 'Categories list',
		exact: false,
		Icon: MdBorderAll,
	},
];

const pageContents = [
	{
		to: '/login',
		name: 'login / signup',
		exact: false,
		Icon: MdAccountCircle,
	},
	{
		to: '/login-modal',
		name: 'login modal',
		exact: false,
		Icon: MdViewCarousel,
	},
];

const navItems = [
	// { to: '/main', name: 'dashboard', exact: true, Icon: MdDashboard },
	{
		to: '/category',
		name: 'Categories',
		exact: false,
		Icon: MdWidgets,
	},
	{ to: '/user', name: 'Utilisateurs', exact: false, Icon: MdWidgets },
	{ to: '/annonce', name: 'Annonces', exact: false, Icon: MdWidgets },
];

const bem = bn.create('sidebar');

class Sidebar extends React.Component {
	state = {
		isOpenComponents: true,
		isOpenContents: true,
		isOpenPages: true,
	};

	handleClick = name => () => {
		this.setState(prevState => {
			const isOpen = prevState[`isOpen${name}`];

			return {
				[`isOpen${name}`]: !isOpen,
			};
		});
	};

	render() {
		return (
			<aside className={bem.b()} data-image={sidebarBgImage}>
				<div
					className={bem.e('background')}
					style={sidebarBackground}
				/>
				<div className={bem.e('content')}>
					<Navbar>
						<img src={logo} alt="logo" />
					</Navbar>
					<Nav vertical>
						{navItems.map(({ to, name, exact, Icon }, index) => (
							<NavItem key={index} className={bem.e('nav-item')}>
								<BSNavLink
									id={`navItem-${name}-${index}`}
									className="text-uppercase"
									tag={NavLink}
									to={to}
									activeClassName="active"
									exact={exact}
								>
									<Icon className={bem.e('nav-item-icon')} />
									<span className="">{name}</span>
								</BSNavLink>
							</NavItem>
						))}
					</Nav>
				</div>
			</aside>
		);
	}
}

export default Sidebar;
