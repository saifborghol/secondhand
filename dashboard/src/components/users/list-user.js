import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../common/breadcrumb';
import data from '../../assets/data/listUser';
import Datatable from '../common/datatable';
import UserController from '../../services/controllers/UserController';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTimes, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { Table } from 'reactstrap';

export class List_user extends Component {
	constructor() {
		super();
		this.state = {
			Users: [],
		};
		this.UserController = new UserController();
	}

	componentDidMount() {
		this.getAllUsers();
	}

	nextPath(path) {
		this.props.history.push(path);
	}

	updateUser(id) {
		console.log('id: ', id);
		localStorage.setItem('idUser', id);
		window.location.href = '/user/updateUser';
	}

	deleteUser(id) {
		console.log('id: ', id);
		this.UserController.deleteUser(id).then((res) => {
			console.log('resDeleteUser', res);
			this.getAllUsers();
		});
	}

	getAllUsers() {
		this.UserController.getAllUser().then((res) => {
			this.setState({ Users: res.data.data });
		});
	}

	render() {
		return (
			<Fragment>
				<Breadcrumb title="User List" parent="Users" />
				<div className="container-fluid">
					<div className="card">
						<div className="card-header">
							<h5>User Details</h5>
						</div>
						<div className="card-body">
							<div className="clearfix"></div>
							<div
								id="batchDelete"
								className="category-table user-list order-table coupon-list-delete"
							>
								<Table>
									<thead>
										<tr>
											<th>Name</th>
											<th>Email</th>
											<th style={{ paddingLeft: 20 }}>Image</th>
											<th style={{ paddingLeft: 30 }}>Actions</th>
										</tr>
									</thead>
									<tbody>
										{this.state.Users.map((user) => {
											return (
												<tr>
													<td>{user.name}</td>
													<td>{user.email}</td>
													<td>
														<img
															alt="user image"
															src={`http://localhost:4000/user/userimage/${user.image}`}
															height="64px"
															width="64px"
														/>
													</td>
													<td>
														<button
															onClick={() =>
																this.updateUser(user._id, 'user/updateUser')
															}
															style={{
																backgroundColor: 'transparent',
																border: 'none',
															}}
														>
															<i
																className="fa fa-pencil"
																style={{
																	width: 35,
																	fontSize: 20,
																	padding: 11,
																	color: '#e4566e',
																}}
															></i>
														</button>
														<button
															onClick={() => {
																if (
																	window.confirm(
																		'Are you sure you wish to delete this item?'
																	)
																) {
																	this.deleteUser(user._id);
																}
															}}
															style={{
																backgroundColor: 'transparent',
																border: 'none',
															}}
														>
															<i
																className="fa fa-trash"
																style={{
																	width: 35,
																	fontSize: 20,
																	padding: 11,
																	color: 'rgb(40, 167, 69)',
																}}
															></i>
														</button>
													</td>
												</tr>
											);
										})}
									</tbody>
								</Table>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default List_user;
