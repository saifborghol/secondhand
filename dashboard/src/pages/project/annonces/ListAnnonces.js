import React, { Component } from 'react';
import Page from 'components/Page';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import AnnonceController from '../../services/controllers/AnnonceController';

import { MdDelete } from 'react-icons/md';

const tableTypes = [''];

export default class ListAnnonces extends Component {
	constructor() {
		super();
		this.state = {
			Annonces: [],
		};
		this.AnnonceController = new AnnonceController();
	}

	getAllAnnonces() {
		this.AnnonceController.getAllAnnonce().then(res => {
			this.setState({ Annonces: res.data.data });
		});
	}

	deleteAnnonce(id) {
		console.log('id: ', id);
		this.AnnonceController.deleteAnnonce(id).then(res => {
			console.log('resDeleteAnnonce', res);
			this.getAllAnnonces();
		});
	}

	componentDidMount() {
		this.getAllAnnonces();
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
															<th>Titre</th>
															<th>Publié par</th>
															<th>Date</th>
															<th>Produit</th>
															<th>Prix</th>
															<th>Action</th>
														</tr>
													</thead>
													<tbody>
														{this.state.Annonces.map(
															ann => {
																return (
																	<tr>
																		<td>
																			{
																				ann.title
																			}
																		</td>
																		<td>
																			{
																				ann
																					.user_id
																					.name
																			}
																		</td>
																		<td>
																			{
																				ann.date
																			}
																		</td>
																		<td>
																			{
																				ann
																					.product
																					.name
																			}
																		</td>
																		<td>
																			{
																				ann
																					.product
																					.price
																			}
																		</td>
																		<td>
																			<button
																				onClick={() => {
																					if (window.confirm('Êtes vous sûr de supprimer cette annonce?'))
																					this.deleteAnnonce(
																						ann._id,
																					)}
																				}
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
