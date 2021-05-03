import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

import compose from "recompose/compose";

import Card from "react-bootstrap/Card";

import avatar from "../../../assets/images/default-avatar.png";

import { HiLocationMarker } from "react-icons/hi";
import { IoMdTime } from "react-icons/io";

import AnnonceController from "../../../services/controllers/annonceController";

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

  userClick = (id) => {
    const { history } = this.props;
    history.push(`/user/${id}`);
  };

  annonceClick = (id) => {
    const { history } = this.props;
    history.push(`/product/${id}`);
  };

  render() {
    
    return (
      <div id="card-container">
        {this.state.PROD.map((annonce) => {
          return (
            <Card id="card-style">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
                onClick={() => this.userClick(annonce.user_id._id)}
              >
                {annonce.user_id.image ? (
                  <img
                    src={`http://localhost:4000/user/userimage/${
                      annonce.user_id.image
                    }`}
                    // onClick={() => this.profil()}
                    alt="avatar"
                    width="26px"
                    height="26px"
                    style={{
                      cursor: "pointer",
                      borderRadius: "50%",
                      objectFit: "cover",
                      marginRight: "5px",
                    }}
                  />
                ) : (
                  <img
                    src={avatar}
                    // onClick={() => this.profil()}
                    alt="avatar"
                    width="24px"
                    height="24px"
                    style={{
                      cursor: "pointer",
                      borderRadius: "50%",
                      objectFit: "cover",
                      marginRight: "5px",
                    }}
                  />
                )}

                <Card.Text style={{ color: "#222222", fontSize: "14px" }}>
                  {annonce.user_id.name} {annonce.user_id.surName}
                </Card.Text>
              </div>
              <Card.Img
                style={{ width: "235px", height: "355px" }}
                variant="bottom"
                src={`http://localhost:4000/annonce/annonceImage/${
                  annonce.image[0].name
                }`}
                onClick={() => this.annonceClick(annonce._id)}
              />
              <Card.Body
                style={{ padding: "16px 0px" }}
                onClick={() => this.annonceClick(annonce._id)}
              >
                <Card.Title
                  style={{
                    fontWeight: "700",
                    fontSize: "16px",
                    marginTop: "-10px",
                  }}
                >
                  {annonce.title}
                </Card.Title>
                <Card.Title style={{ fontSize: "14px", marginTop: "-5px" }}>
                  {annonce.price} DT
                </Card.Title>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "-7px",
                    marginBottom: "10px",
                  }}
                >
                  <HiLocationMarker size="16px" />
                  <Card.Text
                    style={{
                      fontSize: "14px",
                      color: "#222222",
                      marginLeft: "2px",
                    }}
                  >
                    {annonce.location}
                  </Card.Text>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "-7px",
                    marginBottom: "10px",
                  }}
                >
                  <IoMdTime />
                  <Card.Text style={{ fontSize: "14px", marginLeft: "2px" }}>
                    {annonce.date}
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default compose(withRouter)(SpecialProducts);
