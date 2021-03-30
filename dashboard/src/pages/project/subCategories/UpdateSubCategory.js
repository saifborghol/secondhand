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

import SubCategoryController from '../../services/controllers/SubCategoryController';

export default class UpdateSubCategory extends Component {
	constructor() {
		super();
		this.state = {
			title: '',
			description: '',
		};
		this.SubCategoryController = new SubCategoryController();
		this.getOneSubCategory();
	}

	handleSubmit(event) {
		event.preventDefault();
		let data = {
			title: this.state.title,
			description: this.state.description,
		};
		console.log('iiiiiiiiii', localStorage.getItem('idSubCategory'));
		this.SubCategoryController.updateSubCategory(
			localStorage.getItem('idSubCategory'),
			data,
		).then(res => {
			console.log('response', res);
		});
		window.location.href = '/category';
	}

	getOneSubCategory() {
		this.SubCategoryController.getSubCategoryByID(
			localStorage.getItem('idSubCategory'),
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
					<Col xl={8} lg={12} md={12}>
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
