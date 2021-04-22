import React, { Component } from "react";
import { Link } from "react-router-dom";

import Card from "react-bootstrap/Card";

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
    return (
      <div>
        <div id="card-container">
          {this.state.PROD.map((annonce) => {
            return (
              <Link
                to={`${process.env.PUBLIC_URL}/product/${annonce._id}`}
              >
                <Card id="card-style">
                  <Card.Img
                    style={{ width: "240px", height: "135px" }}
                    variant="top"
                    src={`http://localhost:4000/annonce/annonceImage/${
                      annonce.image[0].name
                    }`}
                  />
                  <Card.Body>
                    <Card.Title style={{ fontWeight: "700" }}>
                      {annonce.title}
                    </Card.Title>
                    <Card.Title>{annonce.price} DT</Card.Title>
                    <Card.Text>
                      Publié par: {annonce.user_id.name}{" "}
                      {annonce.user_id.surName}
                    </Card.Text>
                    <Card.Text>{annonce.date}</Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            
            );
          })}
        </div>
      </div>
    );
  }
}
