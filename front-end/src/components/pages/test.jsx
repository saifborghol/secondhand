import React, { Component } from "react";

import avatar from "../../assets/images/default-avatar.png";

export default class test extends Component {
  render() {
    return (
      <div className="teeesst">
        <div className="card">
          <div className="container-fliud">
            <div className="wrapper row">
              <div className="preview col-md-6">
                <div className="preview-pic tab-content">
                  <div className="tab-pane active" id="pic-1">
                    <img src="https://i.ibb.co/bHD0jt1/pic.jpg" />
                  </div>
                  <div className="tab-pane" id="pic-2">
                    <img src="http://placekitten.com/400/252" />
                  </div>
                  <div className="tab-pane" id="pic-3">
                    <img src="http://placekitten.com/400/252" />
                  </div>
                  <div className="tab-pane" id="pic-4">
                    <img src="http://placekitten.com/400/252" />
                  </div>
                  <div className="tab-pane" id="pic-5">
                    <img src="http://placekitten.com/400/252" />
                  </div>
                </div>
                <ul className="preview-thumbnail nav nav-tabs">
                  <li className="active">
                    <a data-target="#pic-1" data-toggle="tab">
                      <img src="http://placekitten.com/200/126" />
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-2" data-toggle="tab">
                      <img src="http://placekitten.com/200/126" />
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-3" data-toggle="tab">
                      <img src="http://placekitten.com/200/126" />
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-4" data-toggle="tab">
                      <img src="http://placekitten.com/200/126" />
                    </a>
                  </li>
                  <li>
                    <a data-target="#pic-5" data-toggle="tab">
                      <img src="http://placekitten.com/200/126" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="details col-md-6">
                <h2 className="product-title">Titre annonce</h2>

                <p className="product-description">
                  Suspendisse quos? Tempus cras iure temporibus? Eu laudantium
                  cubilia sem sem! Repudiandae et! Massa senectus enim minim
                  sociosqu delectus posuere.
                </p>

                <div className="user">
                  <img
                    src={avatar}
                    alt="avatar"
                    width="64px"
                    height="64px"
                    style={{
                      cursor: "pointer",
                      borderRadius: "50%",
                      objectFit: "cover",
                      marginRight: "5px",
                    }}
                  />

                  <span>Aziz Msaddek</span>
                </div>
                <h4 className="price">
                  PRIX: <span>180 DT</span>
                </h4>

                <div className="action">
                  <button className="add-to-cart btn btn-default" type="button">
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
    );
  }
}
