import React, { Component } from "react";
import "../common/index.scss";
import { connect } from "react-redux";

import SimpleImageSlider from "react-simple-image-slider";
import AliceCarousel from "react-alice-carousel";

import "react-alice-carousel/lib/alice-carousel.css";
import avatar from "../../assets/images/default-avatar.png";
import Breadcrumb from "../common/breadcrumb";

// import custom Components

import { addToCart, addToCartUnsafe, addToWishlist } from "../../actions";

import AnnonceController from "../../services/controllers/AnnonceController";

export default class NoSideBar extends Component {
  constructor() {
    super();
    this.state = {
      Annonce: {},
      nav1: null,
      nav2: null,
    };

    this.AnnonceController = new AnnonceController();
  }

  componentDidMount() {
    this.AnnonceController.getAnnonce(this.props.match.params.id).then(
      (res) => {
        this.setState({ Annonce: res.data.data });
        console.log("ANNONCE_DATA", this.state.Annonce);
      }
    );
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2,
    });
  }

  render() {
    if (!this.state.Annonce.image) {
      return <span />;
    }

    return (
      <div>
        <Breadcrumb title={" Produit / " + this.state.Annonce.title} />
        <div className="teeesst ">
          <div className="card">
            <div className="container-fliud">
              <div className="wrapper row">
                <div className="preview col-md-6">
                  <div className="preview-pic tab-content">
                    <AliceCarousel
                      animationType="fadeout"
                      keyboardNavigation
                      autoPlay={true}
                      infinite
                      autoPlayInterval={3000}
                      fadeOutAnimation={true}
                      autoPlayStrategy="default"
                    >
                      {this.state.Annonce.image.map((img) => {
                        return (
                          <img
                            src={`http://localhost:4000/annonce/annonceImage/${
                              img.name
                            }`}
                          />
                        );
                      })}
                    </AliceCarousel>
                  </div>
                </div>

                <div className="details col-md-6">
                  <h2 className="product-title">{this.state.Annonce.title}</h2>

                  <p className="product-description">
                    {this.state.Annonce.description}
                  </p>

                  <div className="user">
                    <img
                      src={avatar}
                      alt="avatar"
                      width="64px"
                      height="64px"
                      style={{
                        borderRadius: "50%",
                        objectFit: "cover",
                        marginRight: "5px",
                      }}
                    />

                    <span>
                      {" "}
                      {this.state.Annonce.user_id.name}{" "}
                      {this.state.Annonce.user_id.surName}
                    </span>
                  </div>
                  <h4 className="price">
                    PRIX: <span>{this.state.Annonce.price} DT</span>
                  </h4>

                  <div className="action">
                    <button
                      className="add-to-cart btn btn-default"
                      type="button"
                    >
                      Ajouter au panier
                    </button>
                    <button className="like btn btn-default" type="button">
                      <span className="fa fa-heart" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
