import React, { Component } from 'react';
import Page from 'components/Page';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTimes, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import CategoryController from '../../services/controllers/CategoryController';
import { Button } from 'reactstrap';

const tableTypes = [''];

export default class ListCategories extends Component {
	constructor() {
		super();
		this.state = {
			Categories: [],
		};
		this.CategoryController = new CategoryController();
	}

	addCategory(path) {
		this.props.history.push(path);
	}

	updateCategory(id) {
		console.log('id: ', id);
		localStorage.setItem('idCategory', id);
		window.location.href = '/category/updateCategory';
	}

	deleteCategory(id) {
		console.log('id: ', id);
		this.CategoryController.deleteCategory(id).then(res => {
			console.log('resDeleteCategory', res);
			this.getAllCategories();
		});
	}

	componentDidMount() {
		this.getAllCategories();
	}

	getAllCategories() {
		this.CategoryController.getAllCategory().then(res => {
			this.setState({ Categories: res.data.data });
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
											this.addCategory(
												'/category/addCategory',
											)
										}
										color="primary"
									>
										Add category
									</Button>
									&nbsp;&nbsp;&nbsp;
									<Button 
									onClick={() =>
										this.addCategory(
											'/subCategory/addSubCategory',
										)
									}
									color="primary">
										Add sub category
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
															<th>Title</th>
															<th>Description</th>
															<th>Update</th>
															<th>Delete</th>
														</tr>
													</thead>
													<tbody>
														{this.state.Categories.map(
															cat => {
																return (
																	<tr>
																		<td>
																			{
																				cat.title
																			}
																		</td>
																		<td>
																			{
																				cat.description
																			}
																		</td>
																		<td>
																			<button
																				onClick={() =>
																					this.updateCategory(
																						cat._id,
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
																					this.deleteCategory(
																						cat._id,
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
