import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { ProductCard } from "react-ui-cards";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import CardDeck from "react-bootstrap/CardDeck";
import axios from "axios";
import AnnonceController from "../../../services/controllers/AnnonceController";

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
      console.log("PRODUCT_DATA", this.state.PROD);
    });
  }
  render() {
    const tab = ["https://i.imgur.com/im6SfJP.png"];
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
          <Card style={{ width: "18rem", padding: "5px", margin: "20px" }}>
            <Card.Img variant="top" src="https://i.imgur.com/jRVDeI8.jpg" />
            <Card.Body>
              <Card.Title>Produit 1</Card.Title>
              <Card.Title>250 DT</Card.Title>
              <Card.Text>Publié par: Aziz Msaddek</Card.Text>
              <Card.Text>20/04/2020</Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem", padding: "5px", margin: "20px" }}>
            <Card.Img variant="top" src="https://i.imgur.com/jRVDeI8.jpg" />
            <Card.Body>
              <Card.Title>Pack 2113 </Card.Title>
              <Card.Title>250 DT</Card.Title>
              <Card.Text>Publié par: Aziz Msaddek</Card.Text>
              <Card.Text>20/04/2020</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}
