import React, { Component } from 'react';
import Page from 'components/Page';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import UserController from '../../services/controllers/UserController';

import { MdDelete } from 'react-icons/md';

const tableTypes = [''];

export default class ListUsers extends Component {
	constructor() {
		super();
		this.state = {
			Users: [],
		};
		this.UserController = new UserController();
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
		this.UserController.deleteUser(id).then(res => {
			console.log('resDeleteUser', res);
			this.getAllUsers();
		});
	}

	componentDidMount() {
		this.getAllUsers();
	}

	getAllUsers() {
		this.UserController.getAllUser().then(res => {
			console.log(res);
			this.setState({ Users: res.data.data });
		});
	}

	render() {
		return (
			<Page>
				{tableTypes.map((tableType, index) => (
					<Row key={index}>
						<Col>
							<Card className="mb-2">
								<CardBody>
									<Row>
										<Col>
											<Card body>
												<Table
													{...{
														[tableType ||
														'default']: true,
													}}
												>
													<thead>
														<tr>
															<th>Nom</th>
															<th>Email</th>
															<th>Image</th>
															<th>Actions</th>
														</tr>
													</thead>
													<tbody>
														{this.state.Users.map(
															user => {
																return (
																	<tr>
																		<td>
																			{
																				user.name
																			}
																		</td>
																		<td>
																			{
																				user.email
																			}
																		</td>
																		<td>
																			<img
																				alt="user image"
																				src={`http://localhost:4000/user/userimage/${user.image}`}
																				height="52px"
																				width="52px"
																				style={{
																					borderRadius:
																						'80%',
																				}}
																			/>
																		</td>
																		<td>
																			<button
																				onClick={() => {
																					if (
																						window.confirm(
																							'Êtes vous sûr de supprimer cet utilisateur?',
																						)
																					) {
																						this.deleteUser(
																							user._id,
																						);
																					}
																				}}
																				style={{
																					backgroundColor:
																						'transparent',
																					border:
																						'none',
																					outline:
																						'none',
																				}}
																			>
																				<MdDelete
																					size="20px"
																					color="#B90303"
																				/>
																			</button>
																		</td>
																	</tr>
																);
															},
														)}
													</tbody>
												</Table>
											</Card>
										</Col>
									</Row>
								</CardBody>
							</Card>
						</Col>
					</Row>
				))}
			</Page>
		);
	}
}
