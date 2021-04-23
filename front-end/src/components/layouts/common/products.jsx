import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import compose from "recompose/compose";

import Card from "react-bootstrap/Card";

import AnnonceController from "../../../services/controllers/AnnonceController";

class SpecialProducts extends Component {
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

  annonceClick = (id) => {
    const { history } = this.props;
    history.push(`/product/${id}`);
  };

  render() {
    return (
      <div>
        <div id="card-container">
          {this.state.PROD.map((annonce) => {
            let annId = annonce._id;
            return (
              // <Link
              //   to={`${process.env.PUBLIC_URL}/product/${annonce._id}`}
              // >
              <Card id="card-style" onClick={() => this.annonceClick(annId)}>
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
                    Publié par: {annonce.user_id.name} {annonce.user_id.surName}
                  </Card.Text>
                  <Card.Text>{annonce.date}</Card.Text>
                </Card.Body>
              </Card>
              // </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default compose(withRouter)(SpecialProducts);
