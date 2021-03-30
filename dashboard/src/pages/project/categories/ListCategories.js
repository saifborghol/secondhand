import React, { Component } from 'react';
import Page from 'components/Page';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import CategoryController from '../../services/controllers/CategoryController';
import SubCategoryController from '../../services/controllers/SubCategoryController';
import { Button } from 'reactstrap';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const tableTypes = [''];

export default class ListCategories extends Component {
	constructor() {
		super();
		this.state = {
			Categories: [],
			SubCategories: [],
		};
		this.CategoryController = new CategoryController();
		this.SubCategoryController = new SubCategoryController();
	}

	//CATEGORY
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
		this.CategoryController.deleteSubCategory(id).then(res => {
			console.log('resDeleteCategory', res);
			this.getAllCategories();
		});
	}

	getAllCategories() {
		this.CategoryController.getAllCategory().then(res => {
			this.setState({ Categories: res.data.data });
		});
	}

	//SUBCATEGORY

	addSubCategory(path) {
		this.props.history.push(path);
	}

	updateSubCategory(id) {
		console.log('id: ', id);
		localStorage.setItem('idSubCategory', id);
		window.location.href = '/subCategory/updateSubCategory';
	}

	deleteSubCategory(id) {
		console.log('id: ', id);
		this.SubCategoryController.deleteSubCategory(id).then(res => {
			console.log('resDeleteCategory', res);
			this.getAllSubCategories();
		});
	}

	getAllSubCategories() {
		this.SubCategoryController.getAllSubCategory().then(res => {
			this.setState({ SubCategories: res.data.data });
		});
	}

	componentDidMount() {
		this.getAllCategories();
		this.getAllSubCategories();
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
											this.addSubCategory(
												'/subCategory/addSubCategory',
											)
										}
										color="primary"
									>
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
															<th>Actions</th>
														</tr>
													</thead>
													<tbody>
														{this.state.Categories.map(
															index,cat => {
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
																				<FaEdit
																					size="20px"
																					color="#11943A"
																				/>
																			</button>
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
														{this.state.SubCategories.map(
															subcat => {
																return (
																	<tr>
																		<td style={{
																			paddingLeft:
																				'60px',
																		}}>
																			{
																				subcat.title
																			}
																		</td>
																		<td>
																			{
																				subcat.description
																			}
																		</td>
																		<td>
																			<button
																				onClick={() =>
																					this.updateSubCategory(
																						subcat._id,
																					)
																				}
																				style={{
																					backgroundColor:
																						'transparent',
																					border:
																						'none',
																				}}
																			>
																				<FaEdit
																					size="20px"
																					color="#11943A"
																				/>
																			</button>
																			<button
																				onClick={() =>
																					this.deleteSubCategory(
																						subcat._id,
																					)
																				}
																				style={{
																					backgroundColor:
																						'transparent',
																					border:
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
