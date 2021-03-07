import React, { Component } from 'react';
import Page from 'components/Page';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTimes, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import UserController from '../../services/controllers/UserController';
import { Button } from 'reactstrap';

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
								<CardHeader>
									{tableType || 'default'}
								</CardHeader>
								<CardBody>
									<Button
										onClick={() =>
											this.nextPath('/user/addUser')
										}
										color="primary"
									>
										Add user
									</Button>
									<br />
									<br />
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
															<th>Name</th>
															<th>Email</th>
															<th>Image</th>
															<th>Update</th>
															<th>Delete</th>
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
																				height="64px"
																				width="64px"
																			/>
																		</td>
																		<td>
																			<button
																				onClick={() =>
																					this.updateUser(
																						user._id,
																						'user/updateUser',
																					)
																				}
																				style={{
																					backgroundColor:
																						'transparent',
																					border:
																						'none',
																				}}
																			>
																				<FontAwesomeIcon
																					icon={
																						faUserEdit
																					}
																				/>
																			</button>
																		</td>
																		<td>
																			<button
																				onClick={() =>
																					this.deleteUser(
																						user._id,
																					)
																				}
																				style={{
																					backgroundColor:
																						'transparent',
																					border:
																						'none',
																				}}
																			>
																				<FontAwesomeIcon
																					icon={
																						faUserTimes
																					}
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
