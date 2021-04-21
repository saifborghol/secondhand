import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ProductCard } from 'react-ui-cards';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import CardDeck from 'react-bootstrap/CardDeck';
import axios from 'axios';
import AnnonceController from '../../../services/controllers/AnnonceController';

export default class SpecialProducts extends Component {
	constructor() {
		super();
		this.state = {
			PROD: [],
		};
		this.AnnonceController = new AnnonceController();
	}

	componentDidMount() {
		this.AnnonceController.getAll().then((res) => {
			this.setState({ PROD: res.data.data });
			console.log('PRODUCT_DATA', this.state.PROD);
		});
	}
	render() {
		const tab = ['https://i.imgur.com/im6SfJP.png'];
		return (
			<div>
				{/* <CardDeck>
					{this.state.PROD.map((annonce) => {
						return (
							<Card>
								<Card.Img
									variant="top"
									src={`http://localhost:4000/annonce/annonceimage/${
										annonce.product.image
									}`}
								/>
								<Card.Body>
									<Card.Title>{annonce.title}</Card.Title>
									<Card.Text>
										This is a wider card with supporting text below as a natural
										lead-in to additional content. This content is a little bit
										longer.
									</Card.Text>
								</Card.Body>
								<Card.Footer>
									<small className="text-muted">{annonce.date}</small>
								</Card.Footer>
							</Card>
						);
					})}
				</CardDeck>

				<CardGroup style={{ display: 'flex', flexWrap: 'wrap' }}>
					{this.state.PROD.map((annonce) => {
						return (
							<Card style={{ width: '18rem', margin: '20px' }}>
								<Card.Img
									variant="top"
									src={`http://localhost:4000/annonce/${annonce.product.image}`}
								/>
								<Card.Body>
									<Card.Title>Card Title</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make
										up the bulk of the card's content.
									</Card.Text>
								</Card.Body>
							</Card>
						);
					})}
				</CardGroup> */}
				<div id="card-container">
					{this.state.PROD.map((annonce) => {
						console.log('IMAGES:', annonce.image[0].name);
						return (
							<Card id="card-style">
								<Card.Img
									style={{ width: '240px', height: '135px' }}
									variant="top"
									src={`http://localhost:4000/annonce/annonceImage/${
										annonce.image[0].name
									}`}
								/>
								<Card.Body>
									<Card.Title style={{ fontWeight: '700' }}>
										{annonce.title}
									</Card.Title>
									<Card.Title>{annonce.price} DT</Card.Title>
									<Card.Text>
										Publié par: {annonce.user_id.name} {annonce.user_id.surName}
									</Card.Text>
									<Card.Text>{annonce.date}</Card.Text>
								</Card.Body>
							</Card>
						);
					})}
				</div>
			</div>
		);
	}
}
