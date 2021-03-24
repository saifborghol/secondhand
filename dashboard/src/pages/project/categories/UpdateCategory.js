import React, { Component } from 'react';
import Page from 'components/Page';
import {
	Button,
	Card,
	CardBody,
	CardHeader,
	Col,
	Form,
	FormGroup,
	Input,
	Label,
	Row,
} from 'reactstrap';

import CategoryController from '../../services/controllers/CategoryController';

export default class UpdateCategory extends Component {
	constructor() {
		super();
		this.state = {
			title: '',
			description: '',
		};
		this.CategoryController = new CategoryController();
		this.getOneCategory();
	}

	handleSubmit(event) {
		event.preventDefault();
		let data = {
			title: this.state.title,
			description: this.state.description,
		};
		console.log('iiiiiiiiii', localStorage.getItem('idCategory'));
		this.CategoryController.updateCategory(
			localStorage.getItem('idCategory'),
			data,
		).then(res => {
			console.log('response', res);
		});
		window.location.href = '/category/getAll';
	}

	getOneCategory() {
		this.CategoryController.getCategoryByID(
			localStorage.getItem('idCategory'),
		).then(res => {
			console.log('responsetttttt', res);
			this.setState({
				title: res.data.data.title,
				description: res.data.data.description,
			});
		});
	}

	render() {
		return (
			<Page title="Forms" breadcrumbs={[{ name: 'Forms', active: true }]}>
				<Row>
					<Col xl={6} lg={12} md={12}>
						<Card>
							<CardHeader>Form Grid</CardHeader>
							<CardBody>
								<Form>
									<FormGroup row>
										<Label for="exampleName" sm={2}>
											Title
										</Label>
										<Col sm={10}>
											<Input
												type="text"
												name="name"
												value={this.state.title}
												placeholder="Title here"
												onChange={event =>
													this.setState({
														title:
															event.target.value,
													})
												}
											/>
										</Col>
									</FormGroup>
									<FormGroup row>
										<Label for="exampleEmail" sm={2}>
											Description
										</Label>
										<Col sm={10}>
											<Input
												type="textarea"
												name="email"
												value={this.state.description}
												placeholder="Description here"
												onChange={event =>
													this.setState({
														description:
															event.target.value,
													})
												}
											/>
										</Col>
									</FormGroup>
									<FormGroup check row>
										<Col sm={{ size: 10, offset: 2 }}>
											<Button
												onClick={event => {
													this.handleSubmit(event);
												}}
											>
												Submit
											</Button>
										</Col>
									</FormGroup>
								</Form>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</Page>
		);
	}
}
